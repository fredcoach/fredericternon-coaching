import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Target, Users, Zap, HeartHandshake, Bot } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Neurosciences appliquées",
    description: "Une approche performance mentale + neurosciences traduite en routines concrètes (pas des concepts).",
  },
  {
    icon: Target,
    title: "Cadre décideur",
    description: "Arbitrages, charge mentale, pression, posture, exécution. Pensé pour ton quotidien de dirigeant.",
  },
  {
    icon: Users,
    title: "Leadership réel",
    description: "Tenir le cadre, faire adhérer, même quand ça chauffe. Pas du management théorique.",
  },
  {
    icon: Zap,
    title: "Méthode actionnable",
    description: "Utilisable en réunion, en conflit, en décision — pas 'quand tu es en vacances'.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement humain",
    description: "Structuré + humain : exigeant, clair, sans rigidité. Un vrai partenariat.",
  },
  {
    icon: Bot,
    title: "Coaching augmenté",
    description: "1:1 + pocket coach IA + ressources → tu avances aussi entre les séances.",
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
            Ce que tu ne trouveras <span className="text-gradient">pas ailleurs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une méthode conçue pour le terrain, pas pour les livres.
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
