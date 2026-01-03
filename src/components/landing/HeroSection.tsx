import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const badges = [
  "20 ans d'expérience",
  "Neurosciences appliquées",
  "Méthode 3R",
];

export function HeroSection() {
  const scrollToFinalCTA = () => {
    const element = document.querySelector("#final-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                <CheckCircle2 className="h-4 w-4" />
                {badge}
              </span>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Reprends la main sur tes{" "}
            <span className="text-gradient">décisions</span>, ton{" "}
            <span className="text-gradient">énergie</span> et ton{" "}
            <span className="text-gradient">focus</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Quand le décideur reprend la main, l'entreprise avance. Si ça patine, c'est souvent ici que ça coince : décisions, pression, énergie… et leadership.
          </p>

          {/* Baseline */}
          <p className="text-base md:text-lg font-medium text-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Pas une méthode de plus.{" "}
            <span className="text-primary">Un système interne qui tient dans le réel.</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToFinalCTA}
              className="gradient-primary text-primary-foreground text-lg px-8 py-6 hover:opacity-90 hover:shadow-lg transition-all group"
            >
              Session CADRAGE (30 min)
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Sur sélection — places limitées
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 md:mt-24 animate-bounce">
            <div className="w-8 h-12 mx-auto border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
