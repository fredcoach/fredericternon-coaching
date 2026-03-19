import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock } from "lucide-react";

const steps = [
  {
    number: 1,
    duration: "20 min",
    title: "Exploration guidée",
    description:
      "On pose le cadre. Quelle est vraiment la décision ? Quels sont les enjeux profonds ? Le questionnement révèle ce qui se joue réellement.",
  },
  {
    number: 2,
    duration: "20 min",
    title: "Déclic émotionnel",
    description:
      "On court-circuite le mental analytique. L'intuition émerge. Vous ressentez ce qui est juste pour vous, au-delà de la peur.",
  },
  {
    number: 3,
    duration: "20 min",
    title: "Choix & Plan d'action",
    description:
      "La décision devient évidente. On construit ensemble les premières actions concrètes pour ancrer ce choix dans le réel.",
  },
];

export function FlashProcessSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section id="flash-process" ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Le processus en 3 étapes
          </h2>
          <p className="text-muted-foreground text-lg">
            Un cheminement structuré qui vous guide de la confusion à la clarté totale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl p-8 border border-border shadow-sm hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {step.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Price badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warning/10 text-warning">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">Session de 1h • 350€</span>
          </div>
        </div>
      </div>
    </section>
  );
}
