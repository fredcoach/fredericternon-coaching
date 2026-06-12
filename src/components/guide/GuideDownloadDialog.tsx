import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const GUIDE_PDF = "/ressources/guide-sortir-roue-hamster-alpha-pme.pdf";
const GUIDE_SLUG = "roue-hamster";

const schema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, "Prénom trop court")
    .max(80, "Prénom trop long"),
  company: z
    .string()
    .trim()
    .min(2, "Nom d'entreprise trop court")
    .max(150, "Nom d'entreprise trop long"),
  email: z
    .string()
    .trim()
    .email("Email invalide")
    .max(254, "Email trop long"),
});

type FormState = z.infer<typeof schema>;

interface GuideDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const triggerDownload = () => {
  const link = document.createElement("a");
  link.href = GUIDE_PDF;
  link.download = "guide-sortir-roue-hamster-alpha-pme.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const GuideDownloadDialog = ({
  open,
  onOpenChange,
}: GuideDownloadDialogProps) => {
  const [form, setForm] = useState<FormState>({
    first_name: "",
    company: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setForm({ first_name: "", company: "", email: "" });
    setErrors({});
    setSuccess(false);
    setSubmitting(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      // small delay so the closing animation finishes before resetting
      setTimeout(reset, 200);
    }
    onOpenChange(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      // 1) Save the lead
      const { data: inserted, error: insertError } = await supabase
        .from("guide_leads")
        .insert({
          first_name: parsed.data.first_name,
          company: parsed.data.company,
          email: parsed.data.email,
          guide_slug: GUIDE_SLUG,
        })
        .select("id")
        .single();

      if (insertError) {
        console.error("guide_leads insert failed:", insertError);
      }

      // 2) Fire-and-forget email notification (does not block download)
      supabase.functions
        .invoke("notify-guide-lead", {
          body: {
            lead_id: inserted?.id ?? null,
            first_name: parsed.data.first_name,
            company: parsed.data.company,
            email: parsed.data.email,
            guide_slug: GUIDE_SLUG,
          },
        })
        .catch((err) => console.error("notify-guide-lead failed:", err));
    } catch (err) {
      console.error("submit error:", err);
    }

    // 3) Trigger download immediately
    triggerDownload();
    setSuccess(true);
    setSubmitting(false);
    toast.success("Téléchargement lancé", {
      description: "Merci, votre guide arrive.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {!success ? (
          <>
            <DialogHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                <FileText className="w-6 h-6" />
              </div>
              <DialogTitle className="text-2xl">
                Recevoir le guide PDF
              </DialogTitle>
              <DialogDescription>
                « Sortir de la roue du hamster » — 7 chapitres, un auto-diagnostic
                et un protocole 30 jours. Le téléchargement démarre dès l'envoi.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="guide-first-name">Prénom</Label>
                <Input
                  id="guide-first-name"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, first_name: e.target.value }))
                  }
                  maxLength={80}
                  autoComplete="given-name"
                  required
                />
                {errors.first_name && (
                  <p className="text-sm text-destructive">{errors.first_name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="guide-company">Entreprise</Label>
                <Input
                  id="guide-company"
                  value={form.company}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, company: e.target.value }))
                  }
                  maxLength={150}
                  autoComplete="organization"
                  required
                />
                {errors.company && (
                  <p className="text-sm text-destructive">{errors.company}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="guide-email">Email</Label>
                <Input
                  id="guide-email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  maxLength={254}
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={submitting}
              >
                {submitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
                Télécharger le guide
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Vos coordonnées servent uniquement à vous identifier. Pas de
                spam, jamais de revente.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <DialogTitle className="text-2xl mb-2">
              Merci {form.first_name} !
            </DialogTitle>
            <DialogDescription className="mb-6">
              Votre guide est en cours de téléchargement. S'il ne démarre pas,
              cliquez sur le bouton ci-dessous.
            </DialogDescription>
            <Button onClick={triggerDownload} variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Relancer le téléchargement
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GuideDownloadDialog;
