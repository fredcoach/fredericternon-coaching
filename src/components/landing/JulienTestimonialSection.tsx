import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Quote, ExternalLink } from "lucide-react";
import julienPhoto from "@/assets/julien-laudy.png.asset.json";

const highlights = [
  "ordre",
  "énergie",
  "efficacité",
  "organisation",
  "posture de leader",
  "décisions plus claires",
  "rythme plus soutenable",
];

export function JulienTestimonialSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-lg">
            TÉMOIGNAGE DE JULIEN
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Un impact concret son <span className="text-gradient">quotidien</span> 
          </h2>
          <div className="space-y-3 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Un dirigeant est venu avec un besoin clair : remettre de l'ordre, de l'énergie et de
              l'efficacité dans un quotidien exigeant.
            </p>
            <p>
              Le travail a porté sur l'organisation, la gestion de l'énergie, la posture de leader
              et la clarté des décisions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {highlights.map((kw) => (
              <span
                key={kw}
                className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-background rounded-2xl border border-border p-6 md:p-10 shadow-lg">
            <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 text-primary/10" />

            <div className="flex items-start gap-4 mb-6">
              <img
                src={julienPhoto.url}
                alt="Julien Laudy, Co-fondateur et Directeur Général de Dokles.io"
                width="56"
                height="56"
                decoding="async"
                className="flex-shrink-0 w-14 h-14 rounded-full object-cover border border-primary/10"
              />
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground text-base md:text-lg">
                  Julien Laudy
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  Co-fondateur | Directeur Général chez Dokles.io
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Février 2026 · Client de Frédéric
                </p>
              </div>
            </div>

            <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-4">
              <p>
                Dirigeant, entrepreneur et père de famille, j'ai fait appel à Frédéric avec un besoin
                clair : remettre de l'<strong className="text-foreground">ordre</strong>, de l'
                <strong className="text-foreground">énergie</strong> et de l'
                <strong className="text-foreground">efficacité</strong> dans un quotidien très exigeant.
              </p>
              <p>
                Son accompagnement se distingue par sa capacité à transformer rapidement les prises
                de conscience en actions concrètes.
              </p>
              <p>
                Frédéric ne se contente pas d'écouter : il aide à mettre en place des solutions
                simples, applicables immédiatement, tant sur l'
                <strong className="text-foreground">organisation</strong>, la gestion de l'énergie que
                sur la <strong className="text-foreground">posture de leader</strong>. Chaque séance
                débouche sur des ajustements précis et mesurables.
              </p>
              <p>
                Grâce à son coaching, j'ai retrouvé un{" "}
                <strong className="text-foreground">rythme plus soutenable</strong>, une meilleure
                clarté dans <strong className="text-foreground">mes décisions</strong> et une
                présence plus forte, au travail comme en famille. Les résultats sont visibles,
                durables et profondément alignés.
              </p>
              <p>
                Je recommande Frédéric à tout dirigeant cherchant un accompagnement exigeant, humain
                et orienté solutions, avec un réel impact sur le quotidien.
              </p>
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="text-xs text-muted-foreground/70">
                  Recommandation publique LinkedIn
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/frederic-ternon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#0A66C2] hover:text-[#004182] font-medium"
              >
                Vérifier
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
