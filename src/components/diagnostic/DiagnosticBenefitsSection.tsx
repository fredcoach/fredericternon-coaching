import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Gauge, Target, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    title: "Score global",
    description: "Un indicateur clair de votre capacité décisionnelle actuelle.",
  },
  {
    icon: Shield,
    title: "Profil détaillé",
    description: "4 dimensions analysées avec forces et vulnérabilités.",
  },
  {
    icon: Target,
    title: "Axes prioritaires",
    description: "Les 2-3 leviers à travailler en priorité pour progresser.",
  },
  {
    icon: Lightbulb,
    title: "Recommandations",
    description: "Des pistes concrètes adaptées à votre profil de dirigeant.",
  },
];

export function DiagnosticBenefitsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que vous obtenez
          </h2>
          <p className="text-muted-foreground text-lg">
            Résultats immédiats, actionnables, confidentiels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`text-center p-6 rounded-2xl bg-card border border-border transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
