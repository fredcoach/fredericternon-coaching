import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  FileText, 
  Headphones, 
  MessageCircle, 
  Bot, 
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const offerItems = [
  {
    icon: Video,
    title: "Coaching 1:1 (visio)",
    description: "Durée adaptée à ton rythme et tes objectifs",
  },
  {
    icon: FileText,
    title: "Kit Opérationnel du Dirigeant",
    description: "20+ fiches & checklists opérationnelles",
  },
  {
    icon: Headphones,
    title: "Salle d'entraînement mentale",
    description: "Audios + mini-trainings pour ancrer les routines",
  },
  {
    icon: MessageCircle,
    title: "Filet de sécurité",
    description: "Entre séances : recadrage + prochaine action (réponse jour même)",
  },
];

const guarantees = [
  "Clarté d'action : tu repars avec une décision, une priorité, une action nette",
  "Exigence + humanité : cadre ferme, zéro complaisance, zéro jugement",
  "Sur-mesure réel : on ajuste selon tes contraintes et tes pics d'activité",
  "Partenariat : si tu t'impliques, les résultats deviennent visibles",
  "Tu peux arrêter à tout moment : on ne construit rien de solide sans engagement mutuel",
];

export function OfferSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const scrollToFinalCTA = () => {
    const element = document.querySelector("#final-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="offer"
      ref={ref}
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            L'accompagnement <span className="text-gradient">(tout-en-un)</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une seule formule. Tout dedans. Adaptée à ton contexte.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left column - What's included */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Le cadre (structuré, sobre, efficace)
              </h3>
              
              {offerItems.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-background rounded-xl border border-border"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}

              {/* Alpha Section */}
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">
                      Alpha — ton pocket coach (disponible 24/7)
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Alpha t'aide en 2–5 minutes à retrouver du calme, clarifier ton prochain choix, appliquer 3R sur une situation concrète, préparer un message ou une réunion, sortir de la rumination.
                    </p>
                    <a
                      href="https://alpha-ia.lovable.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Découvre Alpha en action
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Pricing */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="sticky top-24 p-6 md:p-8 gradient-primary rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="text-xl font-semibold mb-2">Investissement</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold mb-1">2 400 € <span className="text-lg font-normal opacity-80">HT</span></p>
                  <p className="text-primary-foreground/80">pour 2 mois (1 200 €/mois)</p>
                  <p className="mt-2 text-accent font-medium">ou 2 000 € comptant (-400 €)</p>
                </div>

                <div className="border-t border-primary-foreground/20 pt-6 mb-6">
                  <h4 className="font-semibold mb-3">Pourquoi ce prix ?</h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Tu ne paies pas des séances. Tu paies une transformation de ton système de décision.
                  </p>
                  <ul className="space-y-2 text-sm text-primary-foreground/90">
                    <li>→ Cadre exigeant avec peu de personnes en parallèle</li>
                    <li>→ Accompagnement complet : 1:1 + ressources + disponibilité + IA 24/7</li>
                    <li>→ Méthode qui reste après (ton "OS" de décideur)</li>
                    <li>→ Intensité sur 2 mois : zéro dilution</li>
                  </ul>
                </div>

                <div className="border-t border-primary-foreground/20 pt-6 mb-6">
                  <p className="text-sm italic text-primary-foreground/80">
                    Question simple : combien te coûte une décision que tu retardes de 2 mois par manque de clarté ?
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={scrollToFinalCTA}
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Session CADRAGE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-center text-sm text-primary-foreground/70 mt-3">
                  Paiement : 2× sans frais ou comptant
                </p>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div
            className={`mt-12 p-6 md:p-8 bg-background rounded-2xl border border-border transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Garantie / engagement (sans bullshit)
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Je ne te promets pas une transformation magique. Je m'engage sur du sérieux :
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
