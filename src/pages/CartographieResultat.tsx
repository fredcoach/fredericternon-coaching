import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CALENDLY_URL, type RestitutionResult } from "@/lib/cartographie/types";

export default function CartographieResultat() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<RestitutionResult | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("carto_session_id", sessionId);
    }
    (async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/carto-get?session_id=${encodeURIComponent(sessionId)}`;
        const r = await fetch(url, {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session_id: sessionId }),
        });
        if (!r.ok) throw new Error("Cartographie introuvable");
        const body = await r.json();
        if (!body.result) {
          throw new Error("Questionnaire non terminé");
        }
        setResult(body.result as RestitutionResult);
      } catch (e) {
        toast({
          title: "Erreur",
          description: (e as Error).message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="text-xl font-medium mb-3">Cartographie introuvable</h1>
        <p className="text-muted-foreground mb-6">
          Vérifiez votre lien ou recommencez depuis la page d'accueil.
        </p>
        <Button asChild>
          <Link to="/cartographie-des-blocages">Retourner à la Cartographie</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Votre Cartographie — Alpha PME</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="text-sm uppercase tracking-widest text-accent mb-3">
              Votre Cartographie des Blocages
            </div>
            <h1 className="text-2xl md:text-4xl font-light leading-tight">
              Voici ce que vos réponses révèlent
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl space-y-10">
          {/* 1. Palier actuel */}
          <Section eyebrow="Votre palier actuel" title={result.palier.titre}>
            <p>{result.palier.phrase}</p>
          </Section>

          {/* 2. Palier à franchir */}
          <Section eyebrow="Le palier à franchir" title={result.palierACibler.titre}>
            <p>{result.palierACibler.phrase}</p>
          </Section>

          {/* 3. Blocage principal */}
          <Section
            eyebrow="Votre blocage principal"
            title={result.blocagePrincipal.titre}
            highlight
          >
            <p>{result.blocagePrincipal.explication}</p>
            {result.sousSignalDecisionPhrase && (
              <p className="italic text-muted-foreground">
                {result.sousSignalDecisionPhrase}
              </p>
            )}
            {result.sousSignalCroissancePhrase && (
              <p className="italic text-muted-foreground">
                {result.sousSignalCroissancePhrase}
              </p>
            )}
          </Section>

          {/* 4. Blocage secondaire */}
          {result.blocageSecondaire && (
            <Section eyebrow="Un second signal renforce cette lecture" title={result.blocageSecondaire.titre}>
              <p>{result.blocageSecondaire.texte}</p>
            </Section>
          )}

          {/* 5. Produit aujourd'hui */}
          <Section eyebrow="Ce que ce blocage produit aujourd'hui" title="">
            <ul className="space-y-2 list-none">
              {result.blocagePrincipal.produitAujourdhui.map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* 6. Coût si rien ne change */}
          <Section
            eyebrow="Coût si rien ne change"
            title=""
            icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
          >
            <p>{result.blocagePrincipal.coutSiRienNeChange}</p>
          </Section>

          {/* 7. Faux problème */}
          <Section eyebrow="Ce qui n'est probablement pas votre vrai problème" title="">
            <p>{result.blocagePrincipal.vraiProblemeVsFaux}</p>
          </Section>

          {/* 8. Priorité n°1 */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex items-center gap-2 text-accent text-sm uppercase tracking-widest mb-3">
              <Target className="w-4 h-4" />
              Votre priorité n°1 pour les 90 prochains jours
            </div>
            <p className="text-xl md:text-2xl font-light leading-snug mb-2">
              Votre priorité n°1 n'est pas de tout corriger.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-snug">
              C'est de traiter : {result.prioriteUnique}
            </p>
          </div>

          {/* 9. Call stratégique */}
          <div className="bg-card border-2 border-accent/30 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="text-sm uppercase tracking-widest text-accent-text mb-3">
              Préparer votre call stratégique inclus
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4">
              15 minutes avec Frédéric Ternon
            </h2>
            <p className="text-foreground mb-6 leading-relaxed">
              Votre Cartographie donne une première lecture. Le call stratégique sert à
              la confronter à votre réalité, clarifier la décision à prendre et identifier
              le premier levier concret à activer.
            </p>

            <dl className="grid gap-3 mb-6 text-sm">
              <RecapRow label="Palier estimé" value={result.callPrep.palier} />
              <RecapRow label="Blocage principal" value={result.callPrep.blocage} />
              <RecapRow label="Priorité 90 jours" value={result.callPrep.priorite} />
              <RecapRow label="Décision repoussée" value={result.callPrep.decisionRepoussee} />
              <RecapRow label="Coût si rien ne change" value={result.callPrep.coutStatuQuo} />
            </dl>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              <a
                href={`${CALENDLY_URL}${CALENDLY_URL.includes("?") ? "&" : "?"}utm_source=cartographie${sessionId ? `&utm_content=${sessionId}` : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
              >
                Valider ma priorité avec Frédéric
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              15 minutes · Inclus avec votre Cartographie · Orienté décision et passage de palier
            </p>
          </div>

          <p className="text-center text-sm text-muted-foreground pt-6">
            <Link to="/" className="hover:text-foreground underline-offset-4 hover:underline">
              Retour à l'accueil Alpha PME
            </Link>
          </p>
        </main>
      </div>
    </>
  );
}

function Section({
  eyebrow,
  title,
  children,
  highlight,
  icon,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <section
      className={
        highlight
          ? "bg-card border-l-4 border-accent rounded-r-2xl p-6 md:p-8 shadow-sm"
          : "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
      }
    >
      <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-accent-text mb-3">
        {icon}
        {eyebrow}
      </div>
      {title && (
        <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4 leading-snug">
          {title}
        </h2>
      )}
      <div className="prose prose-slate max-w-none text-foreground space-y-3 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function RecapRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-3 border-b border-border pb-2 last:border-b-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground font-medium">{value}</dd>
    </div>
  );
}
