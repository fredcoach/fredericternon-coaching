import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserPlus, Wrench, ClipboardList, Network } from "lucide-react";

const classicLevers = [
  { icon: UserPlus, label: "Un recrutement" },
  { icon: Wrench, label: "Un nouvel outil" },
  { icon: ClipboardList, label: "Un nouveau process" },
  { icon: Network, label: "Une réorganisation" },
];

const pilotageItems = [
  "comment les décisions sont prises",
  "comment les responsabilités sont distribuées",
  "comment les priorités sont arbitrées",
  "comment les recrutements sont intégrés",
  "comment le dirigeant intervient lorsque la pression augmente",
];

export function OrganigrammeSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Eyebrow + Titre */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
              Au-delà de l'organigramme
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Ce qui bloque n'est pas toujours dans{" "}
              <span className="text-gradient">l'organigramme</span>
            </h2>
          </div>

          {/* Intro */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Quand une PME grandit, le premier réflexe est souvent de chercher
            la solution dans :
          </p>

          {/* Liste 1 — 4 leviers classiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {classicLevers.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>

          {/* Pivot */}
          <p className="text-center text-lg md:text-xl font-serif italic text-foreground/90 mb-10">
            Parfois, c'est exactement ce qu'il faut.
          </p>

          {/* Paragraphe charnière */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto">
            Mais lorsque les décisions remontent toujours au dirigeant, que les
            responsabilités restent floues ou que les mêmes difficultés
            réapparaissent malgré les changements, le problème n'est plus
            uniquement organisationnel.
          </p>

          {/* Sous-titre + Liste 2 */}
          <div className="bg-card border border-border rounded-2xl p-7 md:p-9 mb-10 max-w-3xl mx-auto">
            <p className="text-base md:text-lg font-semibold text-foreground mb-5">
              Il se situe souvent dans la façon dont l'entreprise est pilotée
              au quotidien :
            </p>
            <ul className="space-y-3">
              {pilotageItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/85 text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Synthèse */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            C'est pour cette raison que l'accompagnement porte à la fois sur
            l'organisation visible et sur les mécanismes de pilotage qui la
            font fonctionner.
          </p>

          {/* Transition vers Méthode 3R */}
          <div className="max-w-2xl mx-auto">
            <div className="border-l-2 border-accent pl-5 py-2">
              <p className="text-base md:text-lg text-foreground font-medium">
                Et c'est précisément ce que structure la{" "}
                <span className="text-accent font-semibold">Méthode 3R</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
