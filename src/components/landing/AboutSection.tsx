import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Brain, Target } from "lucide-react";
import fredericConference from "@/assets/frederic-conference.jpg";

export function AboutSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-1 gap-8 items-start">
            {/* Photo de conférence */}
            <div className="md:col-span-2 mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <img 
                  src={fredericConference} 
                  alt="Frédéric Ternon en conférence à TheCamp" 
                  className="w-full h-48 md:h-64 object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary/90 text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Conférence @ TheCamp
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium mb-2">Regard extérieur pour dirigeants de PME</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Je suis Frédéric Ternon
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                J'accompagne les dirigeants de PME — principalement <strong className="text-foreground">jusqu'à 30 personnes</strong> — quand l'entreprise fonctionne mais{" "}
                <strong className="text-foreground">repose encore trop sur eux</strong>. Mon rôle : apporter un regard extérieur pour identifier ce qui bloque, clarifier l'organisation, fluidifier les décisions et vous aider à reprendre la main sur le pilotage.
              </p>

              {/* Experience blocks */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10 ans</p>
                    <p className="text-sm text-muted-foreground">
                      Management, équipes et décision sous pression
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10 ans</p>
                    <p className="text-sm text-muted-foreground">
                      Accompagnement de dirigeants en one-to-one
                    </p>
                  </div>
                </div>
              </div>

              {/* Key insight */}
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground italic">
                  "Quand tout remonte au dirigeant, ce n'est pas l'équipe qui plafonne — c'est l'organisation qui n'a pas suivi."
                </p>
              </div>

              {/* Conviction */}
              <div className="flex gap-4 p-5 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Ma conviction</p>
                  <p className="text-muted-foreground">
                    Une PME ne plafonne presque jamais par manque de stratégie. Elle plafonne parce que les décisions remontent toutes au dirigeant, que la délégation est floue, et que l'organisation n'a pas suivi la croissance. C'est là qu'un regard extérieur change tout.
                  </p>
                </div>
              </div>

              {/* Method 3R teaser */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Fil rouge :</strong> Méthode 3R (Repérer → Réagir → Reprogrammer) — un outil de pilotage du dirigeant, pas un programme de développement personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
