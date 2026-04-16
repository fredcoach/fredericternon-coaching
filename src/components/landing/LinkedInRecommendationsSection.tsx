import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Quote, ExternalLink } from "lucide-react";

const linkedinRecommendations = [
  {
    name: "Julien Laudy",
    title: "Co-fondateur | Directeur Général chez Dokles.io",
    date: "Février 2026",
    relation: "Client de Frédéric",
    content: `Dirigeant, entrepreneur et père de famille, j'ai fait appel à Frédéric avec un besoin clair : remettre de l'ordre, de l'énergie et de l'efficacité dans un quotidien très exigeant.

Son accompagnement se distingue par sa capacité à transformer rapidement les prises de conscience en actions concrètes.

Frédéric ne se contente pas d'écouter : il aide à mettre en place des solutions simples, applicables immédiatement, tant sur l'organisation, la gestion de l'énergie que sur la posture de leader. Chaque séance débouche sur des ajustements précis et mesurables.

Grâce à son coaching, j'ai retrouvé un rythme plus soutenable, une meilleure clarté dans mes décisions et une présence plus forte, au travail comme en famille. Les résultats sont visibles, durables et profondément alignés.

Je recommande Frédéric à tout dirigeant cherchant un accompagnement exigeant, humain et orienté solutions, avec un réel impact sur le quotidien.`,
  },
  {
    name: "Henry Simpson",
    title: "Entraîneur de Golf | Golf de Montpellier Fontcaude | GolfPlus Montpellier & Druids Golf",
    date: "Janvier 2026",
    relation: "Client de Frédéric",
    content: `Frédéric m'a accompagné durant ma carrière de joueur professionnel de golf, et son travail a eu un impact très concret sur ma performance. Il m'a aidé à mieux me connaître, à me structurer et à mettre en place un cadre mental rassurant, indispensable pour pouvoir me concentrer pleinement le jour de la compétition.

J'ai particulièrement apprécié son approche basée sur l'écoute et l'adaptation : Frédéric n'impose jamais, il guide avec justesse et bienveillance.`,
  },
  {
    name: "Thomas Roux",
    title: "Directeur Général — CEO",
    date: "Novembre 2025",
    relation: "Client de Frédéric",
    content: `Un grand merci à Frédéric Ternon pour son intervention lors de la journée du personnel de l'Udaf. Il a très vite compris notre manière de fonctionner et a ajusté son approche en conséquence et ça, ce n'est pas donné à tout le monde.

Son partage autour des cinq clés du changement a vraiment trouvé écho auprès des équipes : c'était pertinent, concret, et surtout utile. Les salariés en sont sortis avec de vraies pistes pour avancer, et ça se voyait.

Une intervention de qualité, qui respecte nos valeurs tout en ouvrant des perspectives pour la suite. Merci encore Frédéric, et au plaisir de te revoir parmi nous !`,
  },
];

export function LinkedInRecommendationsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-card relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/3 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20">
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm font-medium text-[#0A66C2]">LinkedIn</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recommandations <span className="text-gradient">vérifiables</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Ce que mes clients écrivent publiquement, sans filtre.
          </p>
          <a
            href="https://www.linkedin.com/in/frederic-ternon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#004182] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            Vérifier sur LinkedIn
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {linkedinRecommendations.map((rec, index) => (
            <div
              key={rec.name}
              className={`relative bg-background rounded-2xl border border-border p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 text-primary/10" />

              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/10">
                  <span className="text-lg font-bold text-primary">
                    {rec.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-base md:text-lg">
                    {rec.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {rec.title}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {rec.date} · {rec.relation}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-3 pl-0 md:pl-16">
                {rec.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* LinkedIn badge */}
              <div className="flex items-center gap-1.5 mt-5 pl-0 md:pl-16">
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span className="text-xs text-muted-foreground/60">Recommandation publique LinkedIn</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
