import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, User } from "lucide-react";

const testimonials = [
  {
    role: "Dirigeant (structure <50)",
    quote: "Avant : … / Après : … (résultat concret)",
  },
  {
    role: "Manager clé",
    quote: "Ce qui a changé : décisions / énergie / posture…",
  },
  {
    role: "Associé / co-dirigeant",
    quote: "Le plus fort : méthode + stabilité + exécution",
  },
];

export function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Témoignages <span className="text-gradient">(vidéo)</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ce qu'ils en disent
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.role}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-700 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Video placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm font-medium text-primary mb-2">
                  🎥 Témoignage #{index + 1}
                </p>
                <p className="font-semibold text-foreground mb-2">
                  {testimonial.role}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            Témoignages vidéo à venir
          </p>
        </div>
      </div>
    </section>
  );
}
