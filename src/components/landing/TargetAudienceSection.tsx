import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const forYou = [
  "Vous dirigez une PME/TPE jusqu'à 30 personnes, l'entreprise tourne, mais elle tourne autour de vous",
  "Les décisions remontent toutes au dirigeant et votre agenda est saturé d'urgences",
  "La délégation est floue : vous avez délégué, mais vous repassez derrière",
  "Vous sentez que l'organisation n'a pas suivi la croissance et que vous plafonnez",
  "Vous voulez un regard extérieur direct, pas un consultant qui pond un PowerPoint",
  "Vous êtes prêt à remettre votre fonctionnement à plat, pour piloter, pas pour subir",
];

const notForYou = [
  "Vous cherchez un coach motivation ou un programme de développement personnel",
  "Vous voulez un consultant qui livre un rapport sans toucher à votre quotidien",
  "Vous voulez parler de votre situation sans rien changer derrière",
  "Vous n'êtes pas prêt à interroger votre propre fonctionnement de dirigeant",
];

export function TargetAudienceSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            C'est fait pour vous si…
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cet accompagnement s'adresse aux dirigeants de PME/TPE jusqu'à 30 personnes qui veulent reprendre la main sur le pilotage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For you */}
          <div
            className={`p-6 md:p-8 bg-success/5 border border-success/20 rounded-2xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                <Check className="w-5 h-5 text-success-foreground" />
              </div>
              Cet accompagnement est pour vous si :
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div
            className={`p-6 md:p-8 bg-destructive/5 border border-destructive/20 rounded-2xl transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                <X className="w-5 h-5 text-destructive-foreground" />
              </div>
              Ce n'est pas pour vous si :
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
