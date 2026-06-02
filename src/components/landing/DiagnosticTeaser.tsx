import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export function DiagnosticTeaser() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="diagnostic" className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto bg-card rounded-3xl border border-border shadow-lg overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2">
            {/* Left: visual */}
            <div
              className="flex flex-col items-center justify-center p-10 md:p-14 text-center"
              style={{
                background:
                  "linear-gradient(135deg, hsl(240 30% 10%) 0%, hsl(263 40% 16%) 100%)",
              }}
            >
              <div className="w-20 h-20 rounded-2xl bg-warning/10 flex items-center justify-center mb-6">
                <Brain className="w-10 h-10 text-warning" />
              </div>
              <p className="text-xs tracking-widest uppercase text-warning font-medium mb-3">
                Diagnostic de pilotage
              </p>
              <p className="text-2xl font-serif font-bold text-white leading-snug">
                Ce qui bloque
                <br />
                dans votre pilotage
              </p>
              <p className="text-sm text-white/40 mt-4">15 min · Résultats immédiats</p>
            </div>

            {/* Right: copy + CTA */}
            <div className="flex flex-col justify-center p-10 md:p-14">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Votre entreprise tourne, mais tout repose encore sur vous
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ce diagnostic identifie vos{" "}
                <strong className="text-warning">points de friction</strong>, vos{" "}
                <strong className="text-warning">angles morts</strong> et le{" "}
                <strong className="text-warning">coût réel</strong> de ce qui
                repose encore sur vous.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-warning text-warning-foreground hover:bg-warning/90 w-fit"
              >
                <Link
                  to="/diagnostic"
                  className="inline-flex items-center gap-2"
                >
                  Découvrir le diagnostic
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
