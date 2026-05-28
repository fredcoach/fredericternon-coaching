import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle, Target, CheckCircle2 } from "lucide-react";

const columns = [
  {
    icon: AlertCircle,
    kicker: "Ce que vous vivez",
    title: "L'entreprise tourne autour de vous",
    items: [
      "Vous êtes encore au cœur de chaque décision, même celles qui ne devraient plus passer par vous",
      "Vous avez délégué… mais tout finit par revenir : validations, arbitrages, conflits",
      "Votre agenda est saturé d'urgences, plus de temps pour penser à 6 mois",
      "L'organisation craque, sans que vous arriviez à mettre le doigt sur ce qui coince",
    ],
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Target,
    kicker: "Ce sur quoi on travaille",
    title: "Reprendre la main sur le pilotage",
    items: [
      "Clarifier les rôles, les périmètres et les décisions à plat",
      "Définir une délégation qui tient — sans repasser derrière",
      "Sortir des urgences, retrouver le temps stratégique",
      "Structurer l'organisation pour passer le palier suivant",
    ],
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: CheckCircle2,
    kicker: "Ce que vous gagnez",
    title: "Une PME qui avance sans vous au centre",
    items: [
      "Moins de remontées, des arbitrages plus rapides",
      "Du recul sur les sujets qui comptent vraiment",
      "Une posture plus stable dans les moments de pression",
      "Un dirigeant qui pilote — pas qui colmate",
    ],
    accent: "text-success",
    bg: "bg-success/10",
  },
];

export function ProblemSolutionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="situations"
      ref={ref}
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">
            Constat · Méthode · Résultat
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Le sujet n'est pas de tenir.{" "}
            <span className="text-gradient">C'est de reprendre la main.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une PME ne plafonne presque jamais par manque de stratégie. Elle plafonne parce que tout
            remonte au dirigeant, que la délégation est floue, et que l'organisation n'a pas suivi
            la croissance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {columns.map((col, index) => (
            <div
              key={col.title}
              className={`p-6 md:p-8 bg-background rounded-2xl border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-elegant ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${col.bg} flex items-center justify-center mb-5`}>
                <col.icon className={`w-6 h-6 ${col.accent}`} />
              </div>
              <p className={`text-xs uppercase tracking-wider font-semibold ${col.accent} mb-2`}>
                {col.kicker}
              </p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-5 leading-snug">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className={`${col.accent} font-bold mt-0.5`}>·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
