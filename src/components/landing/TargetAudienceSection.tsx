import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const forYou = [
  "Tu es décideur (fondateur, dirigeant, manager clé) dans une structure 0–50 personnes",
  "Tu veux décider plus vite sans t'épuiser",
  "Tu sens une surcharge mentale ou un surcontrôle qui te coûte cher",
  "Tu veux une posture stable (calme, claire, ferme)",
  "Tu veux moins de rumination, plus d'exécution",
  "Tu es prêt à être coaché : lucidité, action, ajustements",
];

const notForYou = [
  "Tu cherches une solution magique sans implication",
  "Tu veux 'parler' sans passer à l'action",
  "Tu veux un support illimité et des échanges permanents",
  "Tu veux uniquement des outils d'organisation sans travailler l'état interne",
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Pour qui ?
          </h2>
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
              Cet accompagnement est pour toi si :
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
              Ce n'est pas pour toi si :
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
