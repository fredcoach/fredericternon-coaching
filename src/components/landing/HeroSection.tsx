import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const shortLineItems = [
  "Organisation",
  "Décision",
  "Délégation",
  "Croissance",
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const rafRef = useRef<number>();
  const [scrollY, setScrollY] = useState(0);

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

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px] will-change-transform"
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

      <div className="container mx-auto px-5 sm:px-10 md:px-12 py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-2 sm:px-0">
          <div className="flex flex-col items-center gap-10 lg:gap-14">

            {/* Kicker */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent font-medium tracking-wide uppercase">
                  DIRIGEANTS DE PME/TPE
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="text-center">
              {/* Headline */}
              <h1 className="mb-8 break-words font-serif font-semibold text-white leading-[1.15] tracking-tight text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Votre entreprise fonctionne.
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3">
                  Mais dépend-elle encore <span className="text-accent">trop de vous</span> ?
                </span>
              </h1>


              {/* Subtitle */}
              <p
                className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
                style={{ animationDelay: "0.15s" }}
              >
                Organisation, délégation, recrutement, décisions :{"\u00a0"}
                <br className="hidden md:block" />
                <span className="text-accent/90 font-medium">
                  un regard extérieur pour identifier ce qui bloque, structurer le prochain palier
                </span>
                <br className="hidden md:block" />
                <span className="text-white/80">
                  {"\u00a0"}et réduire ce que vous continuez à porter seul.
                </span>
              </p>

              {/* Short line — pills */}
              <div
                className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 animate-fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                {shortLineItems.map((item) => (
                  <span
                    key={item}
                    className="text-xs md:text-sm text-white/70 font-medium border border-white/15 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 py-6 font-semibold hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)] hover:scale-105 transition-all duration-300 group"
                >
                  <a href="/test-profils-alpha-pme">
                    Faire le Test des 4 Profils
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

              </div>

              {/* Reassurance under primary CTA */}
              <div
                className="flex flex-col items-center gap-1 mt-5 animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                <p className="text-sm md:text-base text-white/80 font-medium">
                  Test gratuit • 10 questions • moins de 3 minutes
                </p>
                <p className="text-xs md:text-sm text-white/55">
                  Situation actuelle / Ce que vous gagnez
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4"
                >
                  Découvrir l'approche
                </button>

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
