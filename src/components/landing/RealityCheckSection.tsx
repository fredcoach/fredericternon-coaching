import { ArrowRight } from "lucide-react";

const symptoms = [
  "Vous êtes encore trop souvent le point de passage obligatoire",
  "Les priorités changent sans cesse",
  "Les managers attendent votre feu vert",
  "Certaines décisions restent ouvertes trop longtemps",
  "Vous travaillez beaucoup, mais l'entreprise ne passe pas le cap attendu",
  "Vous manquez de recul pour voir clairement où agir",
];

export function RealityCheckSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a1628]">
      <div className="container mx-auto px-8 sm:px-10 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6">
              <span className="text-white/90">
                Vous ne manquez pas forcément de stratégie.
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Vous manquez peut-être de recul sur ce qui bloque.
              </span>
            </h2>
          </div>

          {/* Body text */}
          <div className="mb-10">
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Votre PME fonctionne. Les clients sont là. L'équipe existe.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Mais les urgences reviennent, les décisions remontent, la délégation
              reste floue et vous finissez par porter ce que l'organisation devrait
              absorber.
            </p>
          </div>

          {/* Symptoms list */}
          <div className="mb-10">
            <ul className="space-y-4">
              {symptoms.map((symptom, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-base md:text-lg leading-relaxed">
                    {symptom}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
              Ce n'est pas forcément un problème de compétence.
            </p>
            <p className="text-xl md:text-2xl font-serif font-bold leading-snug mt-1">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Souvent, c'est un problème de pilotage.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
