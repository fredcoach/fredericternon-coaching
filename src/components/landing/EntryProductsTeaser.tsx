import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Compass,
    eyebrow: "Diagnostic · 10 min · Gratuit",
    title: "Identifier ce qui bloque",
    description:
      "10 minutes pour mettre le doigt sur vos points de friction, vos angles morts et le coût réel de ce qui repose encore sur vous.",
    cta: "Faire le diagnostic",
    href: "/diagnostic",
  },
  {
    icon: Zap,
    eyebrow: "Flash Decision · 1h · 350€",
    title: "Débloquer une décision qui traîne",
    description:
      "Une heure dense pour clarifier une décision stratégique, un arbitrage ou un conflit interne. Vous repartez avec une décision actée.",
    cta: "Réserver une session",
    href: "/flash-decision",
  },
];

export function EntryProductsTeaser() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
              Deux portes d'entrée
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Pas encore prêt pour un accompagnement long&nbsp;?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Deux formats courts pour tester la méthode et avancer dès cette semaine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {products.map(({ icon: Icon, ...p }) => (
              <div
                key={p.href}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
                  {p.eyebrow}
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {p.description}
                </p>
                <Button asChild size="lg" variant="outline" className="w-fit border-accent/40 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  <Link to={p.href} className="inline-flex items-center gap-2">
                    {p.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
