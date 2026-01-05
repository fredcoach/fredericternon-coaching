import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import fredericPhoto from "@/assets/frederic-ternon.png";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFinalCTA = () => {
    const element = document.querySelector("#final-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary/20">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/10 blur-[120px] transition-transform duration-100"
          style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.2}px))` }}
        />
        {/* Secondary glows */}
        <div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[80px] transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated floating light particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/60 animate-[float_8s_ease-in-out_infinite] shadow-[0_0_20px_5px_hsl(var(--accent)/0.4)]" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/50 animate-[float_6s_ease-in-out_infinite_1s] shadow-[0_0_15px_4px_hsl(var(--primary)/0.3)]" />
        <div className="absolute top-2/3 left-1/5 w-1 h-1 rounded-full bg-white/40 animate-[float_7s_ease-in-out_infinite_2s] shadow-[0_0_10px_3px_rgba(255,255,255,0.2)]" />
        <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-accent/40 animate-[float_9s_ease-in-out_infinite_0.5s] shadow-[0_0_25px_6px_hsl(var(--accent)/0.3)]" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-primary/60 animate-[float_5s_ease-in-out_infinite_3s] shadow-[0_0_12px_3px_hsl(var(--primary)/0.4)]" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-white/30 animate-[float_10s_ease-in-out_infinite_1.5s] shadow-[0_0_15px_4px_rgba(255,255,255,0.15)]" />
        <div className="absolute top-1/5 right-1/5 w-1 h-1 rounded-full bg-accent/50 animate-[float_7s_ease-in-out_infinite_4s] shadow-[0_0_10px_3px_hsl(var(--accent)/0.25)]" />
        <div className="absolute bottom-1/2 right-1/6 w-2 h-2 rounded-full bg-primary/40 animate-[float_8s_ease-in-out_infinite_2.5s] shadow-[0_0_20px_5px_hsl(var(--primary)/0.25)]" />
        
        {/* Animated light beams */}
        <div className="absolute top-0 left-1/3 w-px h-1/3 bg-gradient-to-b from-accent/20 via-accent/5 to-transparent animate-[shimmer_4s_ease-in-out_infinite]" />
        <div className="absolute top-0 right-1/4 w-px h-1/4 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent animate-[shimmer_5s_ease-in-out_infinite_1s]" />
        <div className="absolute top-0 left-2/3 w-px h-1/5 bg-gradient-to-b from-white/10 via-white/3 to-transparent animate-[shimmer_6s_ease-in-out_infinite_2s]" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout on desktop */}
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-white/70 font-medium">Coach en performance mentale & leadership</span>
              </div>

              {/* Main Headline - More dramatic */}
              <h1 className="animate-fade-in-up">
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                  Tes décisions.
                </span>
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mt-1">
                  Ton énergie.
                </span>
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mt-1">
                  Ton focus.
                </span>
              </h1>

              {/* Accent line */}
              <div className="mt-6 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <span className="inline-block font-serif text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  C'est là que tout se joue.
                </span>
              </div>

              {/* Subtitle - Cleaner */}
              <p
                className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up leading-relaxed"
                style={{ animationDelay: "0.2s" }}
              >
                Quand le décideur est bloqué, l'entreprise patine.
                <br />
                <span className="text-white/90 font-medium">
                  Quand il retrouve sa puissance, tout se remet en mouvement.
                </span>
              </p>

              {/* Baseline */}
              <p className="text-base text-white/50 mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                Pas une méthode de plus.{" "}
                <span className="text-accent font-semibold">Un système interne qui tient dans le réel.</span>
              </p>

              {/* CTA */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  size="lg"
                  onClick={scrollToFinalCTA}
                  className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-6 font-semibold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 group"
                >
                  30 min. pour voir si je peux t'aider
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-sm text-white/40">Sur sélection • Places limitées</span>
              </div>
            </div>

            {/* Right: Photo with dramatic effect */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Glow behind photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl opacity-40 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/50 to-primary/50 rounded-full blur-2xl opacity-30 scale-105 animate-pulse" />

                {/* Photo */}
                <img
                  src={fredericPhoto}
                  alt="Frédéric Ternon - Coach en performance mentale"
                  className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />

                {/* Badges around photo */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                  <span className="text-sm font-semibold text-white">20 ans d'expérience</span>
                </div>
                <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-accent/90 backdrop-blur-md rounded-full shadow-xl">
                  <span className="text-xs font-bold text-white">Méthode 3R</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
              <div className="w-1 h-2 bg-white/40 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
