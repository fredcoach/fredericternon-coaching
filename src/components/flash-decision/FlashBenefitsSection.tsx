import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Lightbulb, Zap, Target, Heart } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Clarté immédiate",
    description: "Sortez de la confusion mentale et voyez enfin votre situation avec lucidité.",
  },
  {
    icon: Zap,
    title: "Déclic stratégique",
    description: "Le questionnement puissant fait émerger ce que vous savez déjà mais n'osez pas voir.",
  },
  {
    icon: Target,
    title: "Plan d'action concret",
    description: "Repartez avec les prochaines étapes claires et un engagement envers vous-même.",
  },
  {
    icon: Heart,
    title: "Énergie renouvelée",
    description: "La décision prise libère l'énergie bloquée par l'indécision chronique.",
  },
];

export function FlashBenefitsSection() {
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
            Ce que vous gagnez en 1h
          </h2>
          <p className="text-muted-foreground text-lg">
            Une session Flash Decision n'est pas une conversation. C'est une transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl p-6 border border-border hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
