import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Eye, TrendingDown } from "lucide-react";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Zones fragiles",
    description:
      "Identifiez les contextes précis où votre jugement se déforme sans que vous le sachiez, fatigue, enjeux émotionnels, pression du temps.",
  },
  {
    icon: Eye,
    title: "Angles morts",
    description:
      "Révélez les biais cognitifs qui opèrent en arrière-plan et orientent vos décisions à votre insu.",
  },
  {
    icon: TrendingDown,
    title: "Coût de l'hésitation",
    description:
      "Mesurez l'impact réel de vos indécisions : opportunités manquées, énergie gaspillée, crédibilité érodée.",
  },
];

export function DiagnosticWhySection() {
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
            Ce que ce diagnostic révèle
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Un dirigeant lucide ne décide pas mieux par hasard.
            <br />
            Il connaît ses failles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`bg-card rounded-2xl p-8 border border-border shadow-sm text-center transition-all duration-700 delay-${
                i * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-7 h-7 text-warning" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
