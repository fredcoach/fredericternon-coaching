import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, Zap, Rocket, Check } from "lucide-react";
import { Link } from "react-router-dom";

type Product = {
  icon: typeof Map;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  objective?: string;
  priceLabel?: string;
  price?: string;
  cta: string;
  href: string;
  external?: boolean;
  featured?: boolean;
};

const products: Product[] = [
  {
    icon: Map,
    eyebrow: "Diagnostic · 10 min",
    title: "Identifier ce qui freine réellement votre PME",
    description:
      "En 10 minutes, identifiez les zones où votre entreprise dépend encore excessivement de vous et les priorités à traiter pour passer le prochain palier.",
    bullets: [
      "Une vision plus claire des points de friction",
      "Les principaux goulots d'étranglement",
      "Les priorités à traiter en premier",
    ],
    priceLabel: "Accès immédiat",
    price: "47 €",
    cta: "Réaliser ma cartographie",
    href: "/diagnostic",
  },
  {
    icon: Zap,
    eyebrow: "Session · 1h",
    title: "Débloquer une décision qui traîne",
    description:
      "Une heure dense pour clarifier une décision stratégique, un arbitrage ou un conflit interne. Vous repartez avec une décision actée et un plan d'action clair.",
    priceLabel: "Investissement",
    price: "350 €",
    cta: "Réserver une session",
    href: "/flash-decision",
  },
  {
    icon: Rocket,
    eyebrow: "Accompagnement",
    title: "Structurer le prochain palier",
    description:
      "Un accompagnement plus complet pour travailler sur l'organisation, la délégation, le recrutement, les décisions et le pilotage de l'entreprise.",
    objective:
      "Construire une entreprise plus autonome, plus fluide et moins dépendante du dirigeant.",
    cta: "Réserver une session de cadrage",
    href: "https://calendly.com/ternon/alpha-pme",
    external: true,
    featured: true,
  },
];

export function EntryProductsTeaser() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
              Trois façons de commencer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Tous les dirigeants ne démarrent pas au même endroit.
            </h2>
            <div className="mt-6 space-y-2 text-muted-foreground leading-relaxed">
              <p>Certains cherchent à comprendre ce qui freine réellement leur entreprise.</p>
              <p>D'autres doivent débloquer une décision importante.</p>
              <p>
                D'autres encore sont prêts à travailler en profondeur sur leur organisation et leur pilotage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {products.map(({ icon: Icon, ...p }, i) => {
              const CardInner = (
                <div
                  className={`group relative flex flex-col h-full p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    p.featured
                      ? "bg-accent/[0.04] border-accent/50 shadow-lg md:scale-[1.02] hover:border-accent"
                      : "bg-card border-border shadow-sm hover:border-accent/40"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                        Recommandé
                      </span>
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
                    {p.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {p.bullets && (
                    <ul className="space-y-2 mb-8">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {p.objective && (
                    <p className="italic text-foreground/80 leading-relaxed mb-8 border-l-2 border-accent/40 pl-4">
                      {p.objective}
                    </p>
                  )}

                  <div className="mt-auto pt-6 border-t border-border/60">
                    {p.price ? (
                      <div className="flex items-baseline justify-between mb-5">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {p.priceLabel}
                        </span>
                        <span className="font-serif text-2xl font-bold text-foreground">
                          {p.price}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-5" />
                    )}

                    <Button
                      asChild
                      size="lg"
                      variant={p.featured ? "default" : "outline"}
                      className={
                        p.featured
                          ? "w-full bg-accent text-accent-foreground hover:bg-accent/90"
                          : "w-full border-accent/40 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                      }
                    >
                      {p.external ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          {p.cta}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          to={p.href}
                          className="inline-flex items-center justify-center gap-2"
                        >
                          {p.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </Button>
                  </div>
                </div>
              );

              return <div key={p.href}>{CardInner}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
