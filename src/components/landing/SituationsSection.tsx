import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Scale, 
  BrainCog, 
  Calendar, 
  Home, 
  MessageSquareWarning, 
  GitBranch, 
  Users 
} from "lucide-react";

const situations = [
  {
    icon: Scale,
    title: "Décisions qui remontent",
    description: "Recrutement, investissement, désaccord interne → tout finit sur votre bureau, même ce qui ne devrait plus.",
  },
  {
    icon: BrainCog,
    title: "Charge mentale du dirigeant",
    description: "Vous portez l'entreprise en tête 24/7. Les sujets ouverts s'empilent, le cerveau ne décroche jamais vraiment.",
  },
  {
    icon: Calendar,
    title: "Agenda subi",
    description: "Journées hachées par les urgences des autres. Plus de temps pour le stratégique, plus de temps pour penser.",
  },
  {
    icon: Home,
    title: "Croissance qui plafonne",
    description: "Le CA stagne, les équipes tournent à plein, mais le palier suivant semble impossible à franchir.",
  },
  {
    icon: MessageSquareWarning,
    title: "Délégation floue",
    description: "Vous avez délégué, mais sans cadre. Résultat : vous repassez derrière, vous corrigez, vous reprenez.",
  },
  {
    icon: GitBranch,
    title: "Organisation qui ne suit plus",
    description: "Process bricolés, rôles flous, doublons. L'entreprise a grandi plus vite que sa structure.",
  },
  {
    icon: Users,
    title: "Solitude du dirigeant",
    description: "Personne à qui parler vraiment des arbitrages, des doutes, des choix. Vous tranchez seul, en permanence.",
  },
];

export function SituationsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="situations"
      ref={ref}
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exemples de <span className="text-gradient">situations traitées</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pour que vous vous projetiez immédiatement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {situations.map((situation, index) => (
            <div
              key={situation.title}
              className={`group p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <situation.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {situation.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {situation.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key message */}
        <div
          className={`max-w-3xl mx-auto mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-foreground">
            <strong>Mon rôle :</strong> vous accompagner à retrouver votre clarté, votre sérénité et votre impact — sans vous user.
          </p>
          <p className="text-muted-foreground mt-2">
            Parce que quand vous retrouvez votre alignement, tout se remet en mouvement.
          </p>
        </div>
      </div>
    </section>
  );
}
