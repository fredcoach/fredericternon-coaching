import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function HiddenCostSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-8">
            Quand tout remonte au dirigeant,{" "}
            <span className="text-gradient">
              le coût n'apparaît pas toujours immédiatement.
            </span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Une validation par-ci.
              <br />
              Une décision repoussée par-là.
              <br />
              Un collaborateur qui attend votre feu vert.
              <br />
              Un sujet que vous reprenez parce qu'il sera "plus rapide de le faire vous-même".
            </p>

            <p className="text-foreground font-medium">
              Pris séparément, cela paraît anodin.
            </p>

            <p>
              Additionnés sur une année, les conséquences deviennent beaucoup plus importantes :
            </p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Des centaines d'heures absorbées par des sujets qui ne devraient plus dépendre de vous",
              "Des managers qui n'apprennent jamais réellement à décider",
              "Des recrutements qui n'apportent pas l'autonomie espérée",
              "Des opportunités reportées faute de temps pour les sujets stratégiques",
              "Une entreprise qui continue à dépendre excessivement de votre présence",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-8">
            <p className="text-xl md:text-2xl font-serif font-bold text-foreground leading-snug">
              Le risque n'est pas seulement votre charge de travail.
            </p>
            <p className="text-xl md:text-2xl font-serif font-bold leading-snug mt-2">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Le risque est que l'organisation ne puisse plus grandir au même rythme que l'entreprise.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
