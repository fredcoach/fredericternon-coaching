import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Target, Users, Zap, HeartHandshake, Bot } from "lucide-react";

const differentiators = [
  {
    icon: Eye,
    title: "Regard extérieur opérationnel",
    description: "Quelqu'un qui voit ce que vous ne voyez plus : les goulots, les angles morts, les décisions qui traînent.",
  },
  {
    icon: Target,
    title: "Focus pilotage & décision",
    description: "On travaille votre quotidien de dirigeant : arbitrages, délégation, agenda, posture face aux équipes.",
  },
  {
    icon: Users,
    title: "Spécifique PME jusqu'à 30",
    description: "Pensé pour les structures qui ne sont plus une TPE et pas encore un grand groupe. Ni théorie, ni recettes corporate.",
  },
  {
    icon: Zap,
    title: "Outils actionnables",
    description: "Méthode 3R, Diagnostic, Flash Decision : des leviers concrets, utilisables en réunion, en arbitrage, en conflit.",
  },
  {
    icon: HeartHandshake,
    title: "Sobre et exigeant",
    description: "Ni consultant froid, ni coach motivation. Un partenariat direct, humain, sans promesse miracle.",
  },
  {
    icon: Bot,
    title: "Suivi entre les séances",
    description: "Pocket coach IA + filet de sécurité : vous avancez aussi entre deux rendez-vous, jamais bloqué seul.",
  },
];

export function DifferentiatorsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="differentiators"
      ref={ref}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que vous ne trouverez <span className="text-gradient">pas ailleurs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement pensé pour le pilotage d'une PME, pas pour les livres.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
