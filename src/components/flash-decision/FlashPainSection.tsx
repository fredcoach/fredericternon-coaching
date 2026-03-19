import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain } from "lucide-react";

export function FlashPainSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left - Text */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              La peur paralyse.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-8">
              L'analyse aussi.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Vous tournez en boucle depuis des jours, des semaines peut-être. Chaque option semble avoir ses risques. Le mental analyse, compare, anticipe tous les scénarios possibles.
            </p>

            <p className="text-foreground mb-6">
              Résultat ? <strong>L'indécision vous épuise</strong>. L'énergie qui devrait servir à avancer se consume dans une rumination sans fin.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Et si le problème n'était pas le manque d'informations, mais la déconnexion avec votre intuition profonde ?
            </p>
          </div>

          {/* Right - Card */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Le questionnement puissant</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Une méthode qui court-circuite la boucle analytique pour laisser émerger ce que vous savez déjà.
            </p>

            <blockquote className="border-l-4 border-warning pl-4 italic text-foreground">
              "Votre intuition a la réponse. Le questionnement lui donne la parole."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
