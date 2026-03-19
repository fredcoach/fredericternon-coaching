import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock } from "lucide-react";

export function FlashHeroSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/50 to-background"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-warning/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-24">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-warning/10 text-warning mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Session intensive 1h</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
            Et si votre meilleure décision apparaissait{" "}
            <span className="text-secondary">quand le bruit s'arrête ?</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-foreground mb-2 max-w-2xl mx-auto">
            Vous n'avez pas besoin de plus de temps.
          </p>
          <p className="text-xl md:text-2xl text-secondary font-semibold mb-6">
            Vous avez besoin de lucidité.
          </p>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            1h pour faire taire la surcharge mentale, repartir avec une décision claire et un plan d'action.
          </p>

          {/* Price card */}
          <div className="inline-flex items-center bg-card rounded-2xl shadow-lg border border-border overflow-hidden mb-8">
            <div className="px-8 py-5 text-center border-r border-border">
              <span className="text-4xl font-bold text-warning">350€</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Session</p>
            </div>
            <div className="px-8 py-5 text-center">
              <span className="text-4xl font-bold text-foreground">1 heure</span>
              <p className="text-xs text-muted-foreground mt-1">de clarté</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            +100 dirigeants accompagnés • 10 ans d'expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-warning text-warning-foreground hover:bg-warning/90 text-lg px-8 py-6 shadow-lg"
            >
              <a
                href="https://calendly.com/ternon/flash-decision"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Je réserve mon déclic
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <a href="#flash-process" className="inline-flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Découvrir le processus
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
