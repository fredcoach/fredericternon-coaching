import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock } from "lucide-react";

export function FlashCTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto bg-card rounded-3xl p-10 md:p-14 border border-border shadow-xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-warning/10 text-warning mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Session de 1h • 350€</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à sortir de la boucle mentale ?
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Une décision claire vaut mieux que des mois d'hésitation. Réservez votre session et transformez l'indécision en action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-warning text-warning-foreground hover:bg-warning/90 text-lg px-8 py-6 shadow-lg"
            >
              <a
                href="https://calendly.com/ternon/flash-decision"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Oui, je choisis l'intuition
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/33767971952"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Une question d'abord ?
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
