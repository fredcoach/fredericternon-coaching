import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Shield, Gauge, Compass, RotateCcw, ArrowRight } from "lucide-react";

const promises = [
  {
    icon: Shield,
    title: "Stabilité mentale",
    description: "Calme + focus, même sous pression",
  },
  {
    icon: Gauge,
    title: "Méthode d'arbitrage",
    description: "Décider plus vite, plus juste",
  },
  {
    icon: Compass,
    title: "Agenda réaligné",
    description: "Moins d'urgence, plus d'essentiel",
  },
  {
    icon: RotateCcw,
    title: "Routines fiables",
    description: "Pas 'motivantes'… fiables",
  },
];

export function PromiseSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const scrollToFinalCTA = () => {
    const element = document.querySelector("#final-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:24px_24px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            La promesse <span className="text-gradient">(concrète)</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En quelques semaines, tu récupères :
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {promises.map((promise, index) => (
            <div
              key={promise.title}
              className={`text-center p-6 bg-card rounded-2xl border border-border transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                <promise.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {promise.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        {/* Formula */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-lg font-medium text-foreground mb-8">
            <span className="px-4 py-2 bg-muted rounded-full">moins d'urgence</span>
            <ArrowRight className="w-5 h-5 text-primary" />
            <span className="px-4 py-2 bg-muted rounded-full">plus d'essentiel</span>
            <ArrowRight className="w-5 h-5 text-primary" />
            <span className="px-4 py-2 bg-muted rounded-full">décisions nettes</span>
            <ArrowRight className="w-5 h-5 text-primary" />
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full">exécution fluide</span>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToFinalCTA}
              className="gradient-primary text-primary-foreground hover:opacity-90"
            >
              Demande ta session CADRAGE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
