import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { toast } from "@/hooks/use-toast";
import {
  SCREENS,
  isScreenComplete,
  type AnswerMap,
  type Question,
} from "@/lib/cartographie/questions";

const STORAGE_KEY = (sid: string) => `carto:answers:${sid}`;

export default function CartographieQuestionnaire() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = params.get("session_id");

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [screenIdx, setScreenIdx] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);

  // Verify session exists + is paid (or pending), restore answers
  useEffect(() => {
    if (!sessionId) {
      navigate("/cartographie-des-blocages", { replace: true });
      return;
    }
    (async () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY(sessionId));
        if (stored) setAnswers(JSON.parse(stored));

        const { data, error } = await supabase.functions.invoke("carto-get", {
          method: "GET",
          // supabase-js v2: GET doesn't support query params; use direct fetch
        });
        // Fallback to direct fetch with query
        if (error || !data) {
          const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/carto-get?session_id=${encodeURIComponent(sessionId)}`;
          const r = await fetch(url, {
            headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string },
          });
          if (!r.ok) {
            toast({
              title: "Session introuvable",
              description: "Vérifiez votre lien ou recommencez.",
              variant: "destructive",
            });
            navigate("/cartographie-des-blocages", { replace: true });
            return;
          }
          const body = await r.json();
          if (body.result) {
            navigate(
              `/cartographie-des-blocages/resultat?session_id=${encodeURIComponent(sessionId)}`,
              { replace: true },
            );
            return;
          }
        }
      } finally {
        setVerifying(false);
      }
    })();
  }, [sessionId, navigate]);

  // Persist answers on change
  useEffect(() => {
    if (sessionId && Object.keys(answers).length > 0) {
      localStorage.setItem(STORAGE_KEY(sessionId), JSON.stringify(answers));
    }
  }, [answers, sessionId]);

  const total = SCREENS.length;
  const screen = SCREENS[screenIdx];
  const progress = useMemo(
    () => Math.round(((screenIdx + 1) / total) * 100),
    [screenIdx, total],
  );

  const canGoNext = useMemo(() => isScreenComplete(screen, answers), [screen, answers]);
  const isLast = screenIdx === total - 1;

  const setAnswer = (id: string, value: string | number) =>
    setAnswers((a) => ({ ...a, [id]: value }));

  const handleNext = async () => {
    if (!canGoNext) return;
    if (!isLast) {
      setScreenIdx((i) => i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Submit
    if (!sessionId) return;
    setSubmitting(true);
    setAnalyzing(true);
    try {
      const environment = getStripeEnvironment();
      const { data, error } = await supabase.functions.invoke("carto-submit", {
        body: { sessionId, environment, answers },
      });
      if (error || !data?.result) {
        throw new Error(error?.message || "Impossible de calculer votre Cartographie");
      }
      localStorage.removeItem(STORAGE_KEY(sessionId));
      // small delay for "analyse..." feel
      await new Promise((r) => setTimeout(r, 1200));
      navigate(
        `/cartographie-des-blocages/resultat?session_id=${encodeURIComponent(sessionId)}`,
      );
    } catch (e) {
      setAnalyzing(false);
      toast({
        title: "Erreur",
        description: (e as Error).message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (analyzing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-6" />
        <h2 className="text-xl font-medium text-foreground mb-3">Votre Cartographie est prête</h2>
        <ul className="text-sm text-muted-foreground space-y-1 text-center">
          <li>Analyse du palier actuel…</li>
          <li>Identification du blocage principal…</li>
          <li>Préparation de votre priorité 90 jours…</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cartographie en cours — Alpha PME</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-4 max-w-3xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Étape {screenIdx + 1} / {total}
              </span>
              <span className="text-xs text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        </header>

        {/* Body */}
        <main className="flex-1 container mx-auto px-4 py-10 md:py-16 max-w-3xl">
          <h2 className="text-sm uppercase tracking-widest text-accent-text mb-3">
            {screen.title}
          </h2>

          <div className="space-y-10">
            {screen.questions.map((q) => (
              <QuestionRenderer
                key={q.id}
                q={q}
                value={answers[q.id]}
                onChange={(v) => setAnswer(q.id, v)}
              />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={() => {
                setScreenIdx((i) => Math.max(0, i - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={screenIdx === 0 || submitting}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Précédent
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canGoNext || submitting}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  {isLast ? "Voir ma Cartographie" : "Suivant"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}

function QuestionRenderer({
  q,
  value,
  onChange,
}: {
  q: Question;
  value: string | number | undefined;
  onChange: (v: string | number) => void;
}) {
  if (q.kind === "choice") {
    return (
      <div>
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-5 leading-snug">
          {q.title}
        </h3>
        <div className="grid gap-2">
          {q.options.map((opt) => {
            const selected = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                className={cn(
                  "text-left px-4 py-3 rounded-xl border transition-all",
                  selected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40",
                )}
              >
                <span className="text-foreground">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (q.kind === "scale") {
    const v = typeof value === "number" ? value : -1;
    return (
      <div>
        <h3 className="text-base md:text-lg font-medium text-foreground mb-4 leading-snug">
          {q.title}
        </h3>
        <div className="flex items-center justify-between gap-2">
          {[0, 1, 2, 3, 4, 5].map((n) => {
            const selected = v === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => onChange(n)}
                className={cn(
                  "flex-1 h-12 rounded-lg border text-sm font-medium transition-all",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40",
                )}
              >
                {n}
              </button>
            );
          })}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
          <span>Pas du tout</span>
          <span>Très fortement</span>
        </div>
      </div>
    );
  }

  // text
  return (
    <div>
      <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 leading-snug">
        {q.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{q.microcopy}</p>
      <Textarea
        value={typeof value === "string" ? value : ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        maxLength={2000}
        className="resize-none"
        placeholder="Votre réponse…"
      />
    </div>
  );
}
