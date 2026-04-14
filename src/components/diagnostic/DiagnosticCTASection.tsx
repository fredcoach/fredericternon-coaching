import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DIAGNOSTIC_URL = "https://pilotage-mental-diagnostic.lovable.app";

export function DiagnosticCTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto bg-card rounded-3xl p-10 md:p-14 border border-border shadow-xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à voir clair ?
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            10 minutes pour découvrir ce que la pression vous cache.
            <br />
            Résultats immédiats. Satisfait ou remboursé.
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
              Accéder au diagnostic
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
