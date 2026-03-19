import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const cases = [
  {
    tag: "Croissance",
    tagColor: "bg-secondary/10 text-secondary",
    title: "Rachat ou croissance organique ?",
    description:
      "Un dirigeant hésite depuis 8 mois entre racheter un concurrent ou développer en interne. La session révèle que sa vraie peur est de perdre le contrôle.",
    decision: "croissance organique maîtrisée",
  },
  {
    tag: "Transition",
    tagColor: "bg-warning/10 text-warning",
    title: "Rester ou partir ?",
    description:
      "Une DG se sent étouffée mais culpabilise de quitter son poste. Le questionnement met en lumière un besoin d'alignement avec ses valeurs profondes.",
    decision: "transition planifiée sur 6 mois",
  },
  {
    tag: "Association",
    tagColor: "bg-primary/10 text-primary",
    title: "Quel associé choisir ?",
    description:
      "Deux candidats compétents, impossible de trancher. La session révèle que le critère clé n'est pas les compétences mais la vision commune.",
    decision: "associé B pour l'alignement long terme",
  },
  {
    tag: "Investissement",
    tagColor: "bg-secondary/10 text-secondary",
    title: "Lever des fonds ou rester indépendant ?",
    description:
      "L'opportunité est là, mais le doute persiste. Le questionnement clarifie que le besoin de validation externe masque une insécurité sur la stratégie.",
    decision: "indépendance avec nouvelle roadmap",
  },
  {
    tag: "Équipe",
    tagColor: "bg-warning/10 text-warning",
    title: "Licencier ou recadrer ?",
    description:
      "Un collaborateur clé sous-performe. Le dirigeant repousse la décision depuis des mois. La session révèle une peur du conflit à dépasser.",
    decision: "conversation directe et plan de recadrage",
  },
  {
    tag: "Pivot",
    tagColor: "bg-primary/10 text-primary",
    title: "Pivoter le business model ?",
    description:
      "Les signaux du marché sont ambigus. L'analyse tourne en boucle. Le questionnement fait émerger une intuition enfouie sous les données.",
    decision: "pivot partiel sur un segment",
  },
];

export function FlashCasesSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Décisions clarifiées grâce à Flash Decision
          </h2>
          <p className="text-muted-foreground text-lg">
            Des situations réelles où le questionnement puissant a débloqué l'indécision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((item, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl p-6 border border-border hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${item.tagColor}`}>
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
              <div className="flex items-start gap-2 text-warning">
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-sm font-medium">Décision : {item.decision}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
