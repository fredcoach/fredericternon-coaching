import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { toast } from "@/hooks/use-toast";

const EmailSchema = z.string().trim().email("Email invalide").max(255);

const VALUE_ITEMS = [
  "Votre palier actuel et celui que votre entreprise cherche à franchir",
  "Votre blocage principal — celui qui entretient le rôle que vous jouez encore",
  "Ce que ce blocage produit aujourd'hui et son coût si rien ne change",
  "Ce qui n'est probablement pas votre vrai problème",
  "Votre priorité n°1 pour les 90 prochains jours",
  "Un call stratégique de 15 minutes inclus avec Frédéric Ternon",
];

export default function CartographieLanding() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const handleStart = async () => {
    const parsed = EmailSchema.safeParse(email);
    if (!parsed.success) {
      toast({
        title: "Email requis",
        description: parsed.error.issues[0]?.message ?? "Email invalide",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const returnUrl = `${window.location.origin}/cartographie-des-blocages/questionnaire?session_id={CHECKOUT_SESSION_ID}`;

      const { data, error } = await supabase.functions.invoke("carto-checkout", {
        body: {
          email: parsed.data,
          returnUrl,
          source: "landing",
        },
      });

      if (error || !data?.clientSecret) {
        throw new Error(error?.message || "Impossible de créer la session de paiement");
      }

      setClientSecret(data.clientSecret);
    } catch (e) {
      toast({
        title: "Erreur",
        description: (e as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Cartographie des Blocages — Alpha PME</title>
        <meta
          name="description"
          content="Identifiez le blocage principal qui empêche votre entreprise de franchir le palier suivant. Restitution personnalisée + call stratégique 15 min inclus."
        />
      </Helmet>

      <PaymentTestModeBanner />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <header className="bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
          <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">
              Alpha PME · Produit premium
            </div>
            <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6">
              Cartographie des Blocages
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Identifiez le blocage principal qui empêche aujourd'hui votre entreprise
              de franchir le palier suivant.
            </p>
          </div>
        </header>

        {/* Body */}
        <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <section className="prose prose-slate max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Votre entreprise fonctionne. Mais si elle repose encore trop sur vous,
              ce n'est probablement pas un hasard.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Cette Cartographie vous aide à comprendre ce qui entretient cette
              situation et quelle priorité traiter dans les 90 prochains jours.
            </p>
          </section>

          {/* Value list */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
            <h2 className="text-xl font-medium text-foreground mb-6">
              Ce que vous recevez
            </h2>
            <ul className="space-y-4">
              {VALUE_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Email + CTA OR Embedded Checkout */}
          {!clientSecret ? (
            <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-baseline justify-between mb-2">
                <h2 className="text-xl font-medium text-foreground">
                  Accéder à votre Cartographie
                </h2>
                <div className="text-2xl font-light text-primary">97 €</div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                17 questions. Environ 8 minutes. Restitution personnalisée immédiate.
                Call stratégique 15 min inclus.
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Votre email professionnel</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="prenom@entreprise.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="mt-2"
                    autoComplete="email"
                  />
                </div>

                <Button
                  onClick={handleStart}
                  disabled={loading}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Préparation du paiement…
                    </>
                  ) : (
                    <>
                      Accéder à la Cartographie — 97 €
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center pt-2">
                  <ShieldCheck className="w-4 h-4" />
                  Paiement sécurisé · TVA gérée automatiquement
                </div>
              </div>
            </section>
          ) : (
            <section id="checkout" className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <EmbeddedCheckoutProvider
                stripe={getStripe()}
                options={{ fetchClientSecret: async () => clientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </section>
          )}

          <p className="text-center text-sm text-muted-foreground mt-12">
            <Link to="/" className="hover:text-foreground underline-offset-4 hover:underline">
              Retour à l'accueil Alpha PME
            </Link>
          </p>
        </main>
      </div>
    </>
  );
}
