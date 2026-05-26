import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Building2, Gauge } from "lucide-react";

const pillars = [
  {
    icon: User,
    title: "La posture du dirigeant",
    description: "Recul, lucidité, énergie, comment vous tenez votre rôle au quotidien.",
  },
  {
    icon: Building2,
    title: "L'organisation réelle",
    description: "Rôles, priorités, délégation, ce qui se passe vraiment dans l'entreprise.",
  },
  {
    icon: Gauge,
    title: "Les décisions sous pression",
    description: "Comment vous tranchez, arbitrez et avancez quand tout s'accélère.",
  },
];

export function MyRoleSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Mon rôle</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Un regard extérieur sur <span className="text-gradient">votre pilotage</span>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Quand une PME grandit, ce qui fonctionnait avant ne suffit plus toujours.
            </p>
            <p>
              L'organisation doit évoluer. La posture du dirigeant aussi. La manière de déléguer,
              recadrer, prioriser et décider sous pression doit passer un niveau.
            </p>
            <p className="text-foreground font-medium">
              J'interviens à la croisée de trois sujets :
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`p-8 bg-card rounded-2xl border border-border transition-all duration-700 hover:border-primary/30 hover:shadow-elegant ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <pillar.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
