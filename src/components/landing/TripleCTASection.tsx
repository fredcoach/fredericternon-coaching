import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ctaCards = [
  {
    icon: Brain,
    title: "Diagnostic",
    subtitle: "Évaluez votre lucidité décisionnelle",
    description:
      "10 min pour identifier vos zones fragiles, angles morts et le coût réel de vos hésitations.",
    cta: "Lancer le diagnostic",
    href: "/diagnostic",
    isExternal: false,
  },
  {
    icon: Zap,
    title: "Flash Decision",
    subtitle: "Débloquez une décision en 1h",
    description:
      "Session intensive de questionnement puissant pour trancher une décision stratégique bloquée.",
    cta: "Découvrir la session",
    href: "/flash-decision",
    isExternal: false,
  },
  {
    icon: Calendar,
    title: "Appel découverte",
    subtitle: "30 min pour faire le point",
    description:
      "Un échange confidentiel pour comprendre votre situation et voir si un accompagnement fait sens.",
    cta: "Réserver un créneau",
    href: "https://calendly.com/ternon/entretien-confidentiel",
    isExternal: true,
  },
];

export function TripleCTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à avancer ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trois portes d'entrée selon votre besoin du moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ctaCards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-card rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 flex flex-col ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                <card.icon className="w-7 h-7 text-accent" />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-4">
                {card.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {card.description}
              </p>

              <Button
                asChild
                variant="outline"
                className="w-full border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {card.isExternal ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={card.href}
                    className="inline-flex items-center justify-center gap-2"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
