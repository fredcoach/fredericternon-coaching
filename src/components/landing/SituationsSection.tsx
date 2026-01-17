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
    title: "Décisions qui pèsent",
    description: "Recrutement, pivot, partenariat → tu tournes en boucle, tu n'arrives pas à trancher avec clarté.",
  },
  {
    icon: BrainCog,
    title: "Charge mentale invisible",
    description: "Tu penses à tout, tu anticipes tout, même la nuit. Ton cerveau ne s'arrête jamais.",
  },
  {
    icon: Calendar,
    title: "Agenda dicté par les autres",
    description: "Journées hachées, urgences des autres → zéro temps pour toi, tu subis au lieu de piloter.",
  },
  {
    icon: Home,
    title: "Impossible de déconnecter",
    description: "Tu es là physiquement, mais ta tête reste au travail. Culpabilité, rumination, jamais vraiment présente.",
  },
  {
    icon: MessageSquareWarning,
    title: "Difficulté à poser un cadre",
    description: "Tu évites les confrontations ou tu réagis trop vite → tu veux une posture sereine et affirmée.",
  },
  {
    icon: GitBranch,
    title: "Tout repose sur toi",
    description: "Tu reprends tout, tu surcontrôles → impossible de déléguer vraiment, ça t'épuise.",
  },
  {
    icon: Users,
    title: "Solitude du leadership",
    description: "Tu portes tout. Seul. Personne à qui vraiment parler. Peur de montrer que tu doutes.",
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
            Pour que tu te projettes immédiatement.
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
            <strong>Mon rôle :</strong> t'accompagner à retrouver ta clarté, ta sérénité et ton impact — sans t'user.
          </p>
          <p className="text-muted-foreground mt-2">
            Parce que quand tu retrouves ton alignement, tout se remet en mouvement.
          </p>
        </div>
      </div>
    </section>
  );
}
