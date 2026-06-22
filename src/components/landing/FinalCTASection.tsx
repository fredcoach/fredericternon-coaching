import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const reassurances = ["Gratuit", "Moins de 3 minutes", "Résultat immédiat"];

  return (
    <section id="final-cta" ref={ref} className="py-20 md:py-28 gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Faire le <span className="text-accent">Test des 4 Profils</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
            Découvrez le rôle que votre entreprise vous oblige encore à jouer, et ce qui pourrait
            limiter aujourd'hui votre capacité à franchir le palier suivant.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
            {reassurances.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-primary-foreground/90 text-base md:text-lg font-medium"
              >
                <span className="w-6 h-6 rounded-full bg-accent/15 border border-accent/30 inline-flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg"
            >
              <Link
                to="/test-profils-alpha-pme"
                className="inline-flex items-center gap-2"
              >
                Commencer le Test
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
