import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle } from "lucide-react";

const impostorPoints = [
  "Tu minimises tes victoires",
  "Tu te mets une pression énorme pour ne pas 'être démasqué'",
  "Tu surcontrôles parce que lâcher prise te fait peur",
  "Plus tu montes en niveau… plus tu doutes",
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
            Ce que tu vis est courant — mais <span className="text-accent">limite ta puissance</span>
          </h2>

          <div className="space-y-6 mt-10">
            <p className="text-lg text-primary-foreground/90 text-center">
              Tu portes une mission. Tu tiens la barre. Et tu encaisses.
            </p>

            <p className="text-primary-foreground/80 text-center max-w-3xl mx-auto">
              Entre la stratégie, l'opérationnel, les messages, les urgences, les demandes… tu finis par vivre des journées où tu n'as même plus le temps de penser.
            </p>

            {/* Quote */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 my-10 border border-primary-foreground/20">
              <blockquote className="text-xl md:text-2xl font-serif italic text-center text-primary-foreground">
                "Je suis censé être celui qui décide… mais j'ai l'impression de courir derrière le système."
              </blockquote>
            </div>

            <p className="text-primary-foreground/80 text-center">
              Et parfois, le signal le plus visible, c'est ton équipe : elle exécute… mais sans adhérer. Elle attend. Elle contourne. Elle s'éteint. Et toi, tu portes encore plus.
            </p>

            {/* Impostor syndrome */}
            <div className="mt-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">
                  Le syndrome de l'imposteur — le vrai, celui du quotidien
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {impostorPoints.map((point, index) => (
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
                Ce n'est pas un défaut de caractère. C'est un schéma mental + une physiologie sous tension.
              </p>
            </div>

            {/* Key message */}
            <div className="text-center mt-12 space-y-4">
              <p className="text-lg text-accent font-medium">
                Ce schéma te coûte cher : il ralentit tes décisions et t'enferme dans le contrôle.
              </p>
              <p className="text-xl font-semibold text-primary-foreground">
                Tu n'as pas besoin d'une nouvelle méthode.{" "}
                <span className="underline decoration-accent decoration-2 underline-offset-4">
                  Tu as besoin d'un fonctionnement qui t'appartient.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
