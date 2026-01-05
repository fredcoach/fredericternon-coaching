import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function FinalCTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section id="final-cta" ref={ref} className="py-20 md:py-28 gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background texture elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Dernière question</h2>

          <p className="text-xl text-primary-foreground/90 mb-4">Tu n'as pas besoin d'en faire plus.</p>
          <p className="text-2xl font-semibold mb-8">
            Tu as besoin de décider mieux — depuis un <span className="text-accent">état stable</span>.
          </p>

          <p className="text-primary-foreground/80 mb-10">
            Parce que si le décideur reste bloqué, l'entreprise finit toujours par patiner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
                Appel 30 min — on voit si ça match
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 text-primary-foreground/70">
            <MessageCircle className="w-5 h-5" />
            <p className="text-sm">
              ou envoie-moi <strong className="text-primary-foreground">"RDV"</strong> en DM
            </p>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-6">Sur sélection — places limitées</p>
        </div>
      </div>
    </section>
  );
}
