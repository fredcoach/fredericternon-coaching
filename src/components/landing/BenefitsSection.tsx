import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Unplug,
  Target,
  Share2,
  Filter,
  Wind,
  Building,
  BatteryCharging,
} from "lucide-react";

const benefits = [
  {
    icon: Unplug,
    title: "Sortir de l'opérationnel subi",
  },
  {
    icon: Target,
    title: "Clarifier les rôles et les priorités",
  },
  {
    icon: Share2,
    title: "Mieux déléguer sans perdre le contrôle",
  },
  {
    icon: Filter,
    title: "Réduire les décisions qui remontent inutilement",
  },
  {
    icon: Wind,
    title: "Retrouver du recul dans les moments de pression",
  },
  {
    icon: Building,
    title: "Structurer l'entreprise pour passer un cap",
  },
  {
    icon: BatteryCharging,
    title: "Préserver l'énergie du dirigeant",
  },
];

export function BenefitsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const scrollToFinalCTA = () => {
    const element = document.querySelector("#final-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-lg">
            Bénéfices concrets
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que l'accompagnement <span className="text-gradient">permet</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-start gap-4 p-5 bg-card rounded-xl border border-border transition-all duration-500 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium leading-snug pt-2">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToFinalCTA}
            className="gradient-primary text-primary-foreground hover:opacity-90"
          >
            30 min pour identifier ce qui bloque
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
