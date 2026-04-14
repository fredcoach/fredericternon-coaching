import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

const DIAGNOSTIC_URL = "https://pilotage-mental-diagnostic.lovable.app";

export function DiagnosticHeroSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(240 30% 8%) 0%, hsl(240 20% 14%) 100%)",
      }}
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-warning/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-8">
            <Brain className="w-4 h-4 text-warning" />
            <span className="text-xs tracking-widest uppercase text-warning font-medium">
              Outil de pilotage
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Quel est votre score
            <br />
            <span className="text-warning">de lucidité décisionnelle ?</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Sous pression, votre système de pilotage se déforme.
            <br className="hidden md:block" />
            Vous ne le voyez pas — c'est le principe.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-warning text-warning-foreground hover:bg-warning/90 text-lg px-10 py-7 shadow-lg shadow-warning/20"
          >
            <a
              href={DIAGNOSTIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Lancer le diagnostic
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>

          <p className="text-sm text-white/30 mt-6">
            10 min · Résultats immédiats · Satisfait ou remboursé
          </p>
        </div>
      </div>
    </section>
  );
}
