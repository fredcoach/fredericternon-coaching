import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, Zap, BookOpen, Newspaper, Download, FileText, CheckSquare } from "lucide-react";
import { GuideDownloadDialog } from "@/components/guide/GuideDownloadDialog";


const resources = [
  {
    icon: CheckSquare,
    title: "La Grille de Clarification (PDF)",
    description:
      "Un support simple, 4 zones à parcourir en 5 minutes, pour localiser où votre entreprise repose encore trop sur vous : décisions, agenda, relais managérial, cadre d'autonomie.",
    href: "/grille",
    cta: "Découvrir la grille",
    type: "Outil PDF · Gratuit",
  },
  {
    icon: ClipboardCheck,
    title: "Auto-diagnostic dirigeant (10 min)",
    description:
      "Un questionnaire structuré pour identifier ce qui bloque vraiment dans le pilotage de votre PME/TPE : décisions repoussées, organisation floue, surcharge mentale.",
    href: "/diagnostic",
    cta: "Faire le diagnostic",
    type: "Outil interactif · 47 €",
  },
  {
    icon: Zap,
    title: "Flash Décision | 1h pour trancher",
    description:
      "Une session courte (350 €) pour traiter une décision précise que vous repoussez depuis trop longtemps. Format dense, sortie avec un plan d'action écrit.",
    href: "/flash-decision",
    cta: "Découvrir Flash Décision",
    type: "Offre d'entrée",
  },
  {
    icon: BookOpen,
    title: "Articles & analyses",
    description:
      "Le blog Alpha PME : analyses de fond sur les blocages, les décisions et l'organisation des dirigeants de PME/TPE. Lectures de 5 à 10 minutes.",
    href: "/blog",
    cta: "Explorer le blog",
    type: "Contenu · Mis à jour mensuellement",
  },
  {
    icon: Newspaper,
    title: "Espace presse & médias",
    description:
      "Bio, sujets d'expertise, logos téléchargeables et contact direct pour journalistes, podcasteurs et organisateurs d'événements.",
    href: "/presse",
    cta: "Voir l'espace presse",
    type: "Pour les médias",
  },
];

const Ressources = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchParams.get("guide") === "1") {
      setGuideOpen(true);
      const next = new URLSearchParams(searchParams);
      next.delete("guide");
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);


  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ressources Alpha PME pour dirigeants de PME/TPE",
    description:
      "Outils, analyses et formats courts pour aider les dirigeants de PME/TPE à mieux décider, clarifier leur organisation et reprendre la main sur leur pilotage.",
    url: "https://alphadirigeant.solutions/ressources",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ressources Dirigeants PME/TPE | Alpha PME | Frédéric Ternon</title>
        <meta
          name="description"
          content="Outils, analyses et ressources pour dirigeants de PME/TPE : auto-diagnostic (47 €), Flash Décision, blog et espace presse. Toutes les ressources Alpha PME en un point."
        />
        <link rel="canonical" href="https://alphadirigeant.solutions/ressources" />
        <meta property="og:title" content="Ressources pour dirigeants de PME/TPE | Alpha PME" />
        <meta
          property="og:description"
          content="Outils, diagnostics et analyses pour mieux piloter votre PME/TPE."
        />
        <meta property="og:url" content="https://alphadirigeant.solutions/ressources" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
            <span className="text-sm font-medium">Ressources Alpha PME</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tout ce qu'il vous faut pour reprendre la main
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Outils, formats courts et analyses pour les dirigeants de PME/TPE qui
            veulent mieux décider et clarifier leur organisation.
          </p>
        </div>
      </section>

      {/* Featured PDF guide */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <article className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                  Guide PDF · Nouveau · Gratuit
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Sortir de la roue du hamster
                </h2>
                <p className="text-primary-foreground/80 mb-2 max-w-xl">
                  Le manuel du dirigeant qui veut reprendre la main sur son agenda et ses
                  décisions. 7 chapitres, un auto-diagnostic, un protocole 30 jours.
                </p>
                <p className="text-sm text-primary-foreground/60 mb-6 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> PDF · ~25 min de lecture · Accès immédiat
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 font-semibold"
                  onClick={() => setGuideOpen(true)}
                >
                  <Download className="w-5 h-5" />
                  Télécharger le guide
                </Button>

              </div>
              <div className="hidden md:flex w-40 h-52 rounded-xl bg-background/10 border border-accent/30 items-center justify-center backdrop-blur-sm">
                <FileText className="w-20 h-20 text-accent" />
              </div>
            </div>
          </article>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Vous pouvez le partager librement (lien, email, intranet) en citant la source.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 px-4">

        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((res) => {
              const Icon = res.icon;
              return (
                <article
                  key={res.href}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    {res.type}
                  </p>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {res.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {res.description}
                  </p>
                  <Link to={res.href}>
                    <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn">
                      {res.cta}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Besoin d'un regard extérieur sur votre situation ?
          </h2>
          <p className="text-muted-foreground mb-8">
            30 minutes pour identifier ce qui bloque vraiment et voir si un accompagnement
            a du sens pour vous.
          </p>
          <a href="https://calendly.com/ternon/alpha-pme" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8">
              Réserver un échange
            </Button>
          </a>
        </div>
      </section>

      <Footer />

      <GuideDownloadDialog open={guideOpen} onOpenChange={setGuideOpen} />

    </div>
  );
};

export default Ressources;
