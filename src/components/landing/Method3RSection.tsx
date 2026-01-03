import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Eye,
    number: "1",
    title: "Reconnaître",
    description: "Repérer le moment exact où ça part (stress, dispersion, réaction automatique)",
    color: "from-primary to-primary/80",
  },
  {
    icon: Zap,
    number: "2",
    title: "Réagir",
    description: "Reprendre le contrôle rapidement (physio + attention + décision)",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: RefreshCw,
    number: "3",
    title: "Reprogrammer",
    description: "Installer un nouveau schéma (habitude, posture, décision) qui se répète",
    color: "from-accent to-accent/80",
  },
];

export function Method3RSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 gradient-dark text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent font-medium mb-2">Le fil rouge</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            La Méthode 3R — ton "OS" de décideur
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Simple. Actionnable. Zéro blabla.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative p-6 md:p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Number badge */}
              <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xl font-bold shadow-lg`}>
                {step.number}
              </div>

              <div className="flex flex-col items-center text-center pt-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/80">
                  {step.description}
                </p>
              </div>

              {/* Arrow to next */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-primary-foreground/30 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key message */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-6 py-3 bg-primary-foreground/10 rounded-full">
            <p className="text-lg font-medium">
              👉 3R n'est pas un module. C'est la mécanique que tu gardes <span className="text-accent">après</span> l'accompagnement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
