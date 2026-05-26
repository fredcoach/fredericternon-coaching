import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function FinalCTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section id="final-cta" ref={ref} className="py-20 md:py-28 gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Votre entreprise tourne.
            <br />
            <span className="text-accent">
              Mais doit-elle encore reposer autant sur vous ?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
            En 30 minutes, nous faisons le point sur votre situation, vos points de tension et les
            endroits où votre organisation vous ramène trop au centre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg"
            >
              <a
                href="https://calendly.com/ternon/entretien-confidentiel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                30 min pour identifier ce qui bloque
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/33767971952"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                M'envoyer un message
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-primary-foreground/80 text-base md:text-lg font-medium">
            <span>Moins d'opérationnel subi.</span>
            <span className="text-accent">·</span>
            <span>Plus de recul.</span>
            <span className="text-accent">·</span>
            <span>Une organisation plus claire.</span>
            <span className="text-accent">·</span>
            <span>Des décisions plus nettes.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
