import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle } from "lucide-react";

const symptoms = [
  "Vous êtes encore au cœur de chaque décision — même celles qui ne devraient plus passer par vous",
  "Vous avez délégué… mais tout finit par revenir : validations, arbitrages, conflits",
  "Votre agenda est saturé d'urgences — vous n'avez plus le temps de penser à 6 mois",
  "Vous voyez bien que l'organisation craque, sans réussir à mettre le doigt sur ce qui coince",
];

export function PainPointsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 gradient-dark text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-6">
            L'entreprise tourne — <span className="text-accent">mais elle tourne autour de vous</span>
          </h2>

          <div className="space-y-6 mt-10">
            <p className="text-lg text-primary-foreground/90 text-center">
              Vous avez construit quelque chose qui marche. Une équipe, des clients, du chiffre. Mais quand vous prenez du recul, le constat est clair : tout repose encore sur vous.
            </p>

            <p className="text-primary-foreground/80 text-center max-w-3xl mx-auto">
              Les décisions remontent, les arbitrages traînent, les équipes attendent vos validations. Vous tenez la barre — mais vous n'avez plus le temps de regarder l'horizon.
            </p>

            {/* Quote */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 my-10 border border-primary-foreground/20">
              <blockquote className="text-xl md:text-2xl font-serif italic text-center text-primary-foreground">
                "Mon entreprise tourne, mais elle ne tourne pas sans moi. Et c'est devenu un problème."
              </blockquote>
            </div>

            <p className="text-primary-foreground/80 text-center">
              Ce n'est pas un problème de stratégie. C'est un problème de pilotage. Et tant que vous restez le goulot, la croissance se fait contre vous, pas avec vous.
            </p>

            {/* Symptoms */}
            <div className="mt-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">
                  Les signaux qui ne trompent pas
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {symptoms.map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 bg-primary-foreground/5 rounded-xl transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <span className="text-accent font-bold text-lg">•</span>
                    <p className="text-primary-foreground/90">{point}</p>
                  </div>
                ))}
              </div>

              <p className="text-center mt-8 text-primary-foreground/70 text-sm">
                Ce n'est pas vous qui devez en faire plus. C'est l'organisation qui doit se réajuster autour de vous.
              </p>
            </div>

            {/* Key message */}
            <div className="text-center mt-12 space-y-4">
              <p className="text-lg text-accent font-medium">
                Tant que tout passe par vous, l'entreprise plafonne — et vous avec.
              </p>
              <p className="text-xl font-semibold text-primary-foreground">
                Le sujet n'est pas de tenir.{" "}
                <span className="underline decoration-accent decoration-2 underline-offset-4">
                  C'est de reprendre la main sur le pilotage.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
