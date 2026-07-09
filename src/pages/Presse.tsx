import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download, ExternalLink } from "lucide-react";
import logoHorizontal from "@/assets/alpha-pme-horizontal.png";
import logoLight from "@/assets/alpha-pme-horizontal-light.png";

const expertiseTopics = [
  {
    title: "Pilotage du dirigeant de PME/TPE",
    angle:
      "Pourquoi les dirigeants de PME/TPE (jusqu'à 30 personnes) sont les plus seuls de l'écosystème entrepreneurial, et comment ils peuvent reprendre la main sur leur agenda et leurs décisions.",
  },
  {
    title: "Décisions repoussées & coût caché",
    angle:
      "Le vrai coût des décisions que les dirigeants repoussent : sur-effort, perte de marge, démotivation des équipes. Comment objectiver ce coût et le réduire.",
  },
  {
    title: "Sortir de la roue du hamster",
    angle:
      "Le syndrome du dirigeant qui court après son entreprise au lieu de la piloter. Mécanismes, signaux faibles et leviers concrets pour s'en extraire.",
  },
  {
    title: "Organigramme & délégation",
    angle:
      "Pourquoi un organigramme clair (même à 8 personnes) est l'un des actes managériaux les plus rentables, et les 3 erreurs qui empêchent les PME/TPE de déléguer.",
  },
  {
    title: "Regard extérieur vs coaching classique",
    angle:
      "Ce que change un regard extérieur structuré pour un dirigeant : différence avec le coaching, le conseil stratégique et le mentorat.",
  },
];

const Presse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Frédéric Ternon",
    jobTitle: "Accompagnateur de dirigeants de PME/TPE",
    url: "https://alphadirigeant.solutions",
    sameAs: ["https://mental-pro.fr"],
    worksFor: {
      "@type": "Organization",
      name: "Alpha PME",
      url: "https://alphadirigeant.solutions",
    },
    knowsAbout: [
      "Pilotage de dirigeant",
      "Décision stratégique",
      "Organisation de PME/TPE",
      "Délégation",
      "Management",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Presse & Médias | Alpha PME | Frédéric Ternon</title>
        <meta
          name="description"
          content="Espace presse d'Alpha PME : bio de Frédéric Ternon, sujets d'expertise, logos et visuels à télécharger pour journalistes, podcasts et organisateurs d'événements."
        />
        <link rel="canonical" href="https://alphadirigeant.solutions/presse" />
        <meta property="og:title" content="Presse & Médias | Alpha PME" />
        <meta
          property="og:description"
          content="Bio, sujets d'expertise et ressources médias de Frédéric Ternon, pilotage du dirigeant de PME/TPE."
        />
        <meta property="og:url" content="https://alphadirigeant.solutions/presse" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
            <span className="text-sm font-medium">Espace presse & médias</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frédéric Ternon | Pilotage du dirigeant de PME/TPE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journalistes, podcasteurs, organisateurs d'événements : toutes les ressources
            pour parler d'Alpha PME et solliciter une intervention.
          </p>
        </div>
      </section>

      {/* Bio courte / longue */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bio courte (50 mots)</h2>
            <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground leading-relaxed">
              Frédéric Ternon accompagne les dirigeants de PME/TPE jusqu'à 30 personnes. Sous la
              marque Alpha PME, il leur apporte un regard extérieur structuré pour identifier
              les blocages, clarifier l'organisation et mieux décider. Sa méthode combine
              pilotage, décision et structuration opérationnelle.
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bio longue (150 mots)</h2>
            <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground leading-relaxed space-y-3">
              <p>
                Frédéric Ternon est le fondateur d'Alpha PME. Il accompagne les dirigeants
                de PME/TPE jusqu'à 30 personnes, un segment souvent isolé, trop grand pour le
                solopreneuriat, trop petit pour les grands cabinets de conseil.
              </p>
              <p>
                Son approche : un regard extérieur structuré, sans posture de coach ni de
                consultant prescripteur. Il aide les dirigeants à objectiver ce qui les
                bloque, à clarifier leur organisation, et à reprendre la main sur leurs
                décisions clés.
              </p>
              <p>
                Sa méthode s'appuie sur trois repères (Pilotage, Décision, Organisation)
                et un format court (Session CADRAGE) qui permet en quelques heures de poser
                un diagnostic actionnable. Il intervient aussi sous la marque mental-pro.fr
                pour l'accompagnement à la performance sous pression : sportifs de haut niveau,
                entraineurs et particuliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sujets d'expertise */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
            Sujets d'expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Angles éditoriaux prêts à être traités pour vos articles, interviews ou épisodes
            de podcast.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseTopics.map((topic) => (
              <article
                key={topic.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.angle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visuels téléchargeables */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
            Logos & visuels
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Téléchargez les logos Alpha PME en haute définition pour vos publications.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="bg-background rounded-xl p-6 mb-4 flex items-center justify-center min-h-[120px]">
                <img src={logoHorizontal} alt="Logo Alpha PME version foncée" className="max-h-16 w-auto" />
              </div>
              <p className="font-semibold text-foreground mb-3">Logo sur fond clair</p>
              <a href={logoHorizontal} download="alpha-pme-logo-dark.png">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" /> Télécharger PNG
                </Button>
              </a>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="bg-primary rounded-xl p-6 mb-4 flex items-center justify-center min-h-[120px]">
                <img src={logoLight} alt="Logo Alpha PME version claire" className="max-h-16 w-auto" />
              </div>
              <p className="font-semibold text-foreground mb-3">Logo sur fond sombre</p>
              <a href={logoLight} download="alpha-pme-logo-light.png">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" /> Télécharger PNG
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact presse */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact presse</h2>
          <p className="text-muted-foreground mb-8">
            Réponse sous 48h ouvrées pour toute demande d'interview, citation ou
            intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/33767971952" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" /> WhatsApp : 07 67 97 19 52
              </Button>
            </a>
            <a href="https://calendly.com/ternon/alpha-pme" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" /> Réserver un échange
                <ExternalLink className="w-3 h-3" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Presse;
