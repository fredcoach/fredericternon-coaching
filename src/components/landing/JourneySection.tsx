import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Anchor, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    phase: "Session CADRAGE",
    title: "Diagnostic profond (30 min)",
    points: [
      "Ce qui te pèse vraiment",
      "Ce qui te disperse",
      "Ce qui t'empêche de souffler",
      "Par où commencer",
    ],
    note: "Si c'est un match, je te propose un accompagnement sur-mesure.",
  },
  {
    icon: Anchor,
    phase: "Étape 1",
    title: "Retrouver ton espace intérieur",
    subtitle: "surcharge → clarté",
    points: [
      "Identifier les sources d'épuisement",
      "Poser des limites saines",
      "Créer de l'espace pour toi",
      "Respirer à nouveau",
    ],
    result: "Tu récupères de la bande passante mentale. Tu souffles enfin.",
  },
  {
    icon: TrendingUp,
    phase: "Étape 2",
    title: "Incarner ta légitimité",
    subtitle: "doutes → affirmation",
    points: [
      "Travailler les croyances limitantes",
      "Clarifier tes valeurs profondes",
      "Décider avec confiance",
      "Assumer ta place",
    ],
    result: "Tu incarnes qui tu es vraiment. Sans te justifier.",
  },
  {
    icon: Rocket,
    phase: "Étape 3",
    title: "Installer un équilibre durable",
    subtitle: "épuisement → sérénité",
    points: [
      "Rythme soutenable",
      "Pilotage serein",
      "Impact préservé",
      "Énergie protégée",
    ],
    result: "Un fonctionnement qui te ressemble et qui tient dans la durée.",
  },
];

export function JourneySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="journey"
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/3 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        {/* Subtle lines pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Le parcours <span className="text-gradient">(3 étapes)</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structuré… mais vivant : on avance sur une trajectoire claire, en s'adaptant à ta réalité.
          </p>
        </div>

        {/* Important note */}
        <div
          className={`max-w-3xl mx-auto mb-12 p-4 bg-primary/5 border border-primary/10 rounded-xl text-center transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Important :</strong> Je travaille avec peu de personnes en parallèle. La session CADRAGE nous permet de vérifier qu'on peut travailler ensemble — c'est un match mutuel, pas une vente.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {steps.map((step, index) => (
              <div
                key={step.phase}
                className={`relative mb-8 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg ${index === 0 ? "ring-4 ring-accent ring-offset-2 ring-offset-background" : ""}`}>
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-8 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <div className={`bg-card rounded-2xl border border-border p-6 shadow-sm ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-md`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${index === 0 ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                        {step.phase}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <p className="text-sm text-primary mb-3">
                          {step.subtitle}
                        </p>
                      )}
                      <ul className={`space-y-1 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {step.points.map((point) => (
                          <li key={point} className="text-sm text-muted-foreground">
                            {point}
                          </li>
                        ))}
                      </ul>
                      {step.note && (
                        <p className="text-sm italic text-muted-foreground">
                          {step.note}
                        </p>
                      )}
                      {step.result && (
                        <p className="text-sm font-medium text-success">
                          → {step.result}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sur-mesure note */}
        <div
          className={`max-w-3xl mx-auto mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground">
            <strong className="text-foreground">Important — ce parcours s'adapte à toi :</strong> On ajuste selon ta réalité, ton rythme, tes enjeux du moment. Pas de cadre rigide.
          </p>
          <p className="text-foreground font-medium mt-2">
            Le but n'est pas de te faire rentrer dans une méthode. Le but, c'est que tu retrouves qui tu es vraiment.
          </p>
        </div>
      </div>
    </section>
  );
}
