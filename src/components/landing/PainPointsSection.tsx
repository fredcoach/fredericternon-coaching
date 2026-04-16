import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle } from "lucide-react";

const impostorPoints = [
  "Vous minimisez vos réussites, comme si elles ne comptaient pas vraiment",
  "Vous portez un masque — et vous avez peur qu'on découvre que vous doutez",
  "Vous surcontrôlez parce que lâcher prise, c'est risquer de décevoir",
  "Plus vous grandissez… plus vous vous demandez si vous méritez votre place",
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
            Ce que vous vivez est courant — mais <span className="text-accent">vous épuise en silence</span>
          </h2>

          <div className="space-y-6 mt-10">
            <p className="text-lg text-primary-foreground/90 text-center">
              Vous portez tout. L'entreprise, les décisions, les autres. Et vous tenez. Toujours.
            </p>

            <p className="text-primary-foreground/80 text-center max-w-3xl mx-auto">
              Entre la stratégie, l'opérationnel, les urgences et les attentes de tout le monde… vous n'avez plus de temps pour vous. Plus de temps pour penser. Plus de temps pour respirer.
            </p>

            {/* Quote */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 my-10 border border-primary-foreground/20">
              <blockquote className="text-xl md:text-2xl font-serif italic text-center text-primary-foreground">
                "Je réussis, mais quelque chose sonne faux. Comme si je jouais un rôle."
              </blockquote>
            </div>

            <p className="text-primary-foreground/80 text-center">
              Et le plus dur ? Vous ne pouvez pas en parler. Vous devez rester fort. Vous devez avoir les réponses. Alors vous portez votre masque. Et vous continuez. Seul.
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
                Ce n'est pas vous qui êtes "trop". C'est votre système intérieur qui refuse de continuer à se trahir.
              </p>
            </div>

            {/* Key message */}
            <div className="text-center mt-12 space-y-4">
              <p className="text-lg text-accent font-medium">
                Cette charge invisible vous coûte cher : elle vous éloigne de qui vous êtes vraiment.
              </p>
              <p className="text-xl font-semibold text-primary-foreground">
                Vous n'avez pas besoin d'en faire plus.{" "}
                <span className="underline decoration-accent decoration-2 underline-offset-4">
                  Vous avez besoin de retrouver votre légitimité intérieure.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
