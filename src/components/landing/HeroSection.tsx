import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import fredericPhoto from "@/assets/frederic-ternon.png";

const badges = ["20 ans d'expérience", "Neurosciences appliquées", "Méthode 3R"];

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
        <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Photo + Badges */}
          <div className="flex flex-col items-center gap-6 mb-10 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl scale-110" />
              <img 
                src={fredericPhoto} 
                alt="Frédéric Ternon - Coach en performance mentale" 
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-in-up">
            <span className="block">Tes décisions.</span>
            <span className="block">Ton énergie.</span>
            <span className="block">Ton focus.</span>
            <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-gradient font-serif">
              C'est là que tout se joue.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.1s" }}
          >
            Quand le décideur est bloqué, l'entreprise patine.
            <br className="hidden md:block" />
            <span className="text-foreground font-medium"> Quand il retrouve sa puissance, tout se remet en mouvement.</span>
          </p>

          {/* Baseline */}
          <p
            className="text-base md:text-lg font-medium text-foreground/80 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Pas une méthode de plus. <span className="text-primary font-semibold">Un système interne qui tient dans le réel.</span>
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={scrollToFinalCTA}
              className="gradient-primary text-primary-foreground text-lg px-8 py-6 hover:opacity-90 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              On s'appelle — 30 min pour échanger
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">Sur sélection — places limitées</p>
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
