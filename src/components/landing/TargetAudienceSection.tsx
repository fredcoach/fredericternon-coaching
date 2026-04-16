import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const forYou = [
  "Vous dirigez une entreprise ou une équipe et vous portez beaucoup sur vos épaules",
  "Vous devez prendre des décisions à fort enjeu — parfois seul",
  "Vous ressentez une charge mentale qui vous empêche de prendre du recul",
  "Vous voulez incarner votre leadership sans vous épuiser",
  "Vous êtes prêt à investir dans un vrai travail de fond sur votre pilotage intérieur",
  "Vous voulez des résultats concrets, pas juste de la théorie",
];

const notForYou = [
  "Vous cherchez une solution rapide sans implication",
  "Vous voulez parler sans passer à l'action",
  "Vous voulez uniquement des outils sans travailler ce qui se passe à l'intérieur",
  "Vous n'êtes pas prêt à remettre en question certaines de vos croyances",
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
            Ce coaching stratégique s'adresse aux dirigeants qui veulent aller plus loin.
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
