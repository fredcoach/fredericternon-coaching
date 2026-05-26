import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const heroHeadlines = [
  { bold: "Votre entreprise tourne", accent: "Mais tout repose sur vous." },
  { bold: "Vous décidez sur tout", accent: "Vous n'avez plus de recul." },
  { bold: "Vos équipes avancent", accent: "L'organisation ne suit plus." },
];

const pillars = [
  {
    icon: Brain,
    label: "Recul",
    description: "Sortir la tête du guidon",
  },
  {
    icon: Target,
    label: "Décision",
    description: "Trancher net, sans rumination",
  },
  {
    icon: Zap,
    label: "Pilotage",
    description: "Reprendre la main sur l'agenda",
  },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const rafRef = useRef<number>();

  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      if (!isLoaded) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded]);

  // Headline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToFinalCTA = () => {
    const element = document.querySelector("#final-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-dark">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ contentVisibility: "auto" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/10 blur-[120px] will-change-transform"
          style={{
            transform: isLoaded
              ? `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`
              : "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] will-change-transform"
          style={{ transform: isLoaded ? `translateY(${scrollY * 0.3}px)` : "none" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {isLoaded && (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/60 animate-[float_8s_ease-in-out_infinite] shadow-[0_0_20px_5px_hsl(var(--accent)/0.4)]" />
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/50 animate-[float_6s_ease-in-out_infinite_1s] shadow-[0_0_15px_4px_hsl(var(--primary)/0.3)]" />
            <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-accent/40 animate-[float_9s_ease-in-out_infinite_0.5s] shadow-[0_0_25px_6px_hsl(var(--accent)/0.3)]" />
            <div className="absolute top-0 left-1/3 w-px h-1/3 bg-gradient-to-b from-accent/20 via-accent/5 to-transparent animate-[shimmer_4s_ease-in-out_infinite]" />
          </>
        )}
      </div>

      <div className="container mx-auto px-8 sm:px-10 md:px-12 py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-10 lg:gap-14">

            {/* Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-white/70 font-medium tracking-wide">
                  Coaching stratégique pour dirigeants
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="text-center">
              <h1 className="animate-fade-in-up mb-8 relative h-[7rem] md:h-[7rem] lg:h-[8.5rem] xl:h-[9.5rem] overflow-hidden">
                {heroHeadlines.map((headline, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
                    style={{
                      opacity: headlineIndex === index ? 1 : 0,
                      transform: headlineIndex === index ? "translateY(0)" : "translateY(20px)",
                    }}
                  >
                    <span className="block font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                      {headline.bold}
                    </span>
                    <span className="block font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mt-1">
                      <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                        — {headline.accent}
                      </span>
                    </span>
                  </div>
                ))}
              </h1>

              <p
                className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
                style={{ animationDelay: "0.15s" }}
              >
                Sous pression, votre système de pilotage se déforme.
                <br className="hidden md:block" />
                <span className="text-white/80 font-medium">
                  Il est temps de retrouver votre lucidité.
                </span>
              </p>

              {/* 3 Pillars — Inspired by Strategic Coach */}
              <div
                className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-14 animate-fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                {pillars.map((pillar) => (
                  <div key={pillar.label} className="text-center group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                      <pillar.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-1">
                      {pillar.label}
                    </h3>
                    <p className="text-xs md:text-sm text-white/40">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                <Button
                  size="lg"
                  onClick={scrollToFinalCTA}
                  className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-6 font-semibold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 group"
                >
                  Réserver un appel découverte
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-sm text-white/40">
                  30 min · Gratuit · Sur sélection
                </span>
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
