import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const steps = [
  "Évaluez votre style décisionnel sous pression",
  "Identifiez vos réflexes automatiques face à l'incertitude",
  "Découvrez votre profil de lucidité sur 4 dimensions",
  "Recevez des recommandations personnalisées",
];

export function DiagnosticPreviewSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comment ça fonctionne
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Un questionnaire structuré, conçu à partir de la recherche en
              neurosciences décisionnelles et de 15 ans d'accompagnement de
              dirigeants.
            </p>
            <ul className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
                  <span className="text-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-warning font-medium mb-2">
                    Exemple de dimension évaluée
                  </p>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    Tolérance à l'ambiguïté
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Votre capacité à décider avec des informations incomplètes
                    sans sur-analyser ni agir impulsivement.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score</span>
                    <span className="text-warning font-semibold">72/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-warning rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? "72%" : "0%" }}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Aperçu illustratif, vos résultats seront personnalisés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
