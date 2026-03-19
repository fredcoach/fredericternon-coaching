import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "J'hésitais depuis 6 mois sur un rachat d'entreprise. En 1h, j'ai compris que ma vraie peur n'était pas financière mais personnelle. La décision est devenue évidente.",
    name: "Laurent D.",
    role: "PDG, entreprise Menuiserie",
  },
  {
    quote:
      "Je tournais en boucle sur un choix de carrière. Le questionnement m'a fait réaliser ce que je savais déjà mais n'osais pas m'avouer. J'ai démissionné le lendemain.",
    name: "Nathalie R.",
    role: "Directrice Générale",
  },
  {
    quote:
      "Impossible de trancher entre deux associés potentiels. La session a révélé mes vraies priorités. J'ai choisi avec une clarté que je n'avais plus ressentie depuis longtemps.",
    name: "Marc F.",
    role: "Fondateur startup tech",
  },
  {
    quote:
      "Je repoussais une décision de restructuration depuis des mois. En 1h, j'ai vu clairement ce qui me bloquait : la peur de décevoir. J'ai agi dès le lundi suivant.",
    name: "Sophie M.",
    role: "CEO, agence marketing",
  },
  {
    quote:
      "Mon associé voulait vendre, moi non. La session m'a permis de comprendre mes vraies motivations. On a trouvé un accord en 48h.",
    name: "Thomas B.",
    role: "Co-fondateur SaaS",
  },
  {
    quote:
      "J'avais 3 offres de rachat sur la table. Le bruit mental était insupportable. Après la session, le choix était limpide. Zéro regret 6 mois plus tard.",
    name: "Isabelle K.",
    role: "Dirigeante, agence immobilière",
  },
];

export function FlashTestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="text-muted-foreground text-lg">
            Des dirigeants qui ont transformé leur indécision en action grâce à Flash Decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl p-6 border border-border hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-warning/30 mb-4" />
              <p className="text-foreground italic leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
