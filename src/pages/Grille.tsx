import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Clock,
  CheckSquare,
  FileText,
  Download,
  Compass,
  CalendarClock,
  Users,
  Shield,
  Linkedin,
} from "lucide-react";
import vignetteAsset from "@/assets/vignette-grille.png.asset.json";

const PDF_URL = "/Grille_de_Clarification_Alpha_PME.pdf";
const OG_IMAGE = `https://alphadirigeant.solutions${vignetteAsset.url}`;

const zones = [
  {
    icon: Compass,
    title: "Les décisions",
    description: "Ce que le système ne sait pas encore trancher sans vous.",
  },
  {
    icon: CalendarClock,
    title: "L'agenda",
    description: "Ce que votre emploi du temps révèle du système.",
  },
  {
    icon: Users,
    title: "Le relais managérial",
    description:
      "Le relais qui existe sur le papier, mais pas encore dans les faits.",
  },
  {
    icon: Shield,
    title: "Le cadre d'autonomie",
    description: "Ce que l'équipe est réellement autorisée à décider.",
  },
];

const Grille = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    try {
      // Événement simple, non bloquant, pour tout tracker éventuel
      (window as any).dataLayer?.push?.({ event: "grille_pdf_download" });
    } catch {}
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "La Grille de Clarification",
    description:
      "Un support simple pour localiser ce qui bloque dans votre TPE/PME : décisions, agenda, relais managérial, cadre d'autonomie.",
    url: "https://alphadirigeant.solutions/grille",
    author: { "@type": "Person", name: "Frédéric Ternon" },
    inLanguage: "fr-FR",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>La Grille de Clarification — Frédéric Ternon | Alpha PME</title>
        <meta
          name="description"
          content="Un support simple pour localiser ce qui bloque dans votre TPE/PME : décisions, agenda, relais managérial, cadre d'autonomie. 5 minutes, 4 zones, PDF gratuit."
        />
        <link rel="canonical" href="https://alphadirigeant.solutions/grille" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://alphadirigeant.solutions/grille" />
        <meta
          property="og:title"
          content="La Grille de Clarification — Alpha PME"
        />
        <meta
          property="og:description"
          content="Où votre entreprise repose-t-elle encore trop sur vous ? 4 zones, 5 minutes, PDF gratuit."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1254" />
        <meta property="og:image:height" content="1254" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="La Grille de Clarification — Alpha PME"
        />
        <meta
          name="twitter:description"
          content="Où votre entreprise repose-t-elle encore trop sur vous ? 4 zones, 5 minutes, PDF gratuit."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-dark pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs md:text-sm text-accent font-medium tracking-wider uppercase">
                Dirigeants de TPE/PME
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] tracking-tight mb-6">
              La Grille de Clarification
            </h1>

            <p className="text-xl md:text-2xl text-accent/90 font-medium mb-8">
              Où votre entreprise repose-t-elle encore trop sur vous&nbsp;?
            </p>

            <p className="text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
              Beaucoup de dirigeants sentent que quelque chose bloque, sans voir
              exactement où. Cette grille ne prétend pas donner une solution
              immédiate. Elle aide d'abord à localiser le vrai sujet.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-10 text-white/70 text-sm">
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                5 minutes
              </span>
              <span className="hidden sm:inline text-accent/40">·</span>
              <span className="inline-flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-accent" />
                4 zones
              </span>
              <span className="hidden sm:inline text-accent/40">·</span>
              <span className="inline-flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent" />
                PDF à télécharger
              </span>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-accent text-primary hover:bg-accent/90 text-base md:text-lg px-8 py-6 font-semibold hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)] hover:scale-105 transition-all duration-300"
            >
              <a
                href={PDF_URL}
                download
                onClick={handleDownload}
                aria-label="Télécharger la grille de clarification (PDF)"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger la grille (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 — Quatre zones */}
      <section className="py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-5">
              Quatre zones, une lecture
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Cochez chaque phrase qui décrit votre réalité actuelle — pas celle
              que vous visez. Ce qui compte n'est pas le total. C'est de
              repérer quelle zone accroche le plus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {zones.map((zone, i) => {
              const Icon = zone.icon;
              return (
                <article
                  key={zone.title}
                  className="group bg-card border border-border rounded-2xl p-7 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-2">
                        Zone {i + 1}
                      </p>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {zone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {zone.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Encadré règle */}
          <div className="mt-12 rounded-2xl bg-primary text-primary-foreground px-8 py-8 md:px-10 md:py-10 border border-accent/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 text-center">
              Règle simple
            </p>
            <p className="text-center text-lg md:text-xl text-accent font-serif leading-relaxed">
              À partir de 3 cases cochées dans une même zone, cette zone mérite
              une clarification prioritaire.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Pourquoi localiser */}
      <section className="py-20 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            Le point de départ, pas la conclusion
          </h2>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Un même symptôme peut avoir plusieurs causes. Des décisions qui
              remontent peuvent venir d'un cadre jamais posé, d'un périmètre
              flou, d'un manque de compétence réel — ou d'un rôle que le
              dirigeant continue de porter malgré lui.
            </p>
            <p className="font-serif text-foreground text-lg md:text-xl italic">
              Même symptôme. Causes différentes. Donc solutions différentes.
            </p>
            <p>
              La bonne question n'est pas : «&nbsp;que faire&nbsp;?&nbsp;»
              <br />
              C'est : «&nbsp;qu'est-ce qui produit ce blocage&nbsp;?&nbsp;»
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — CTA final */}
      <section className="py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Et une fois la grille remplie&nbsp;?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Si une zone vous a particulièrement arrêté, notez-la. C'est
            exactement là que je travaille avec les dirigeants : pas pour
            appliquer une méthode, mais pour identifier le vrai facteur
            limitant, puis agir sur le bon levier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-accent text-primary hover:bg-accent/90 text-base px-7 py-6 font-semibold hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-all duration-300"
            >
              <a
                href="https://calendly.com/ternon/alpha-pme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clarifier ce qui bloque — 30 minutes
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 text-base px-7 py-6 font-semibold"
            >
              <a
                href="https://www.linkedin.com/in/frederic-ternon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                M'écrire sur LinkedIn
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            Dites-moi simplement quelle zone vous a arrêté. En 30 minutes, on
            peut déjà clarifier ce qui la produit.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grille;
