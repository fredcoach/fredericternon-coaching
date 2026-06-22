import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RdvConfirmation() {
  return (
    <>
      <Helmet>
        <title>Rendez-vous confirmé — Alpha PME</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
          <div className="container mx-auto px-4 py-16 max-w-3xl">
            <div className="text-sm uppercase tracking-widest text-accent mb-4">
              Rendez-vous confirmé
            </div>
            <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6">
              Votre rendez-vous est confirmé.
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-primary-foreground/90">
              Vous venez de faire ce que beaucoup de dirigeants repoussent
              pendant des mois : prendre du recul sur leur entreprise.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl space-y-10">
          {/* En attendant */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="text-sm uppercase tracking-widest text-accent-text mb-5">
              En attendant notre rendez-vous
            </div>
            <ul className="space-y-3">
              {[
                "Notez la décision que vous continuez à repousser",
                "Identifiez la zone où vous restez le maillon indispensable",
                "Préparez les 2 ou 3 questions qui vous reviennent le plus",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Encadré */}
          <section className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-10 shadow-lg space-y-3">
            <p className="text-lg md:text-xl font-light leading-snug">
              Le but de cet échange n'est pas de tout résoudre en 30 minutes.
            </p>
            <p className="text-lg md:text-xl font-medium leading-snug">
              Le but est d'identifier clairement la priorité qui mérite votre
              attention maintenant.
            </p>
          </section>

          {/* Citation */}
          <section className="border-l-2 border-accent pl-6 py-2 max-w-2xl mx-auto">
            <p className="italic text-foreground text-lg leading-relaxed mb-2">
              Une entreprise ne franchit pas un palier en travaillant plus.
            </p>
            <p className="italic text-foreground text-lg leading-relaxed">
              Elle franchit un palier lorsqu'elle cesse de dépendre des mêmes
              mécanismes qui l'ont amenée jusqu'ici.
            </p>
          </section>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil Alpha PME
              </Link>
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
