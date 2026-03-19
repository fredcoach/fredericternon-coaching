import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Clock, Flame, Frown, Lightbulb, Target, Heart, Smile, Sparkles, Zap } from "lucide-react";

export function FlashBeforeAfterSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const beforeItems = [
    { icon: Flame, text: "Mental en surchauffe, analyse paralysante" },
    { icon: Clock, text: "Semaines/mois d'hésitation" },
    { icon: AlertTriangle, text: "Stress, insomnie, perte d'énergie" },
    { icon: Frown, text: "Doute constant, peur de se tromper" },
  ];

  const afterItems = [
    { icon: Lightbulb, text: "Décision évidente, intuition libérée" },
    { icon: Target, text: "Plan d'action concret en main" },
    { icon: Heart, text: "Énergie renouvelée, sérénité retrouvée" },
    { icon: Smile, text: "Confiance totale dans votre choix" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Avant / Après : La transformation
          </h2>
          <p className="text-muted-foreground text-lg">
            Visualisez le changement que Flash Decision opère en seulement 1 heure.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="w-full h-1/2 bg-gradient-to-b from-destructive/40 to-warning" />
            <div className="w-full h-1/2 bg-gradient-to-b from-warning to-secondary/40" />
          </div>

          {/* Emoji indicator */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-warning-foreground" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* BEFORE */}
            <div
              className={`bg-destructive/5 border border-destructive/20 rounded-2xl p-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="text-xs font-bold text-destructive uppercase tracking-wider">Avant</p>
                  <h3 className="text-xl font-bold text-foreground">L'état de blocage</h3>
                </div>
              </div>
              <div className="space-y-4">
                {beforeItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-destructive/70 shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER */}
            <div
              className={`bg-secondary/5 border border-secondary/20 rounded-2xl p-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider">Après</p>
                  <h3 className="text-xl font-bold text-foreground">L'état de clarté</h3>
                </div>
              </div>
              <div className="space-y-4">
                {afterItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-secondary/70 shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom quote */}
          <p className="text-center text-lg text-foreground mt-12 max-w-2xl mx-auto">
            "En 1h, passez du blocage à l'action.{" "}
            <span className="text-secondary font-semibold">Du doute à la certitude.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
