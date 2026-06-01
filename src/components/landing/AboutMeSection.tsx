import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Brain, User, Building2, Gauge } from "lucide-react";
import fredericConference from "@/assets/frederic-conference.jpg";

const pillars = [
  {
    icon: User,
    title: "La posture du dirigeant",
    description: "Recul, lucidité, énergie — comment vous tenez votre rôle au quotidien.",
  },
  {
    icon: Building2,
    title: "L'organisation réelle",
    description: "Rôles, priorités, délégation — ce qui se passe vraiment dans l'entreprise.",
  },
  {
    icon: Gauge,
    title: "Les décisions sous pression",
    description: "Comment vous tranchez, arbitrez et avancez quand tout s'accélère.",
  },
];

export function AboutMeSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start mb-14">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src={fredericConference}
                  alt="Frédéric Ternon, accompagnement de dirigeants de PME"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-5">
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-lg">
                  Qui je suis ?
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frédéric Ternon : un regard extérieur sur votre pilotage
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                J'accompagne les dirigeants de PME{" "}
                <strong className="text-foreground">jusqu'à 30 personnes</strong> : quand
                l'entreprise fonctionne mais{" "}
                <strong className="text-foreground">repose encore trop sur eux</strong>. Mon rôle :
                apporter le regard extérieur qui permet d'identifier ce qui bloque, clarifier
                l'organisation et fluidifier les décisions.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex gap-3 p-4 bg-muted/50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10 ans</p>
                    <p className="text-sm text-muted-foreground">Management & décision sous pression</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-muted/50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10 ans</p>
                    <p className="text-sm text-muted-foreground">Accompagnement de dirigeants en 1:1</p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-primary pl-5 py-1">
                <p className="text-foreground italic leading-relaxed">
                  "Quand tout remonte au dirigeant, ce n'est pas l'équipe qui plafonne, c'est
                  l'organisation qui n'a pas suivi."
                </p>
              </div>
            </div>
          </div>

          {/* Trois axes d'intervention */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`p-6 bg-card rounded-2xl border border-border transition-all duration-700 hover:border-primary/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <pillar.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
