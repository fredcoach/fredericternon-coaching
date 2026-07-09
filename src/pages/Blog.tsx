import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogArticles } from "@/data/blogArticles";
import { Clock, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { LazyImage } from "@/components/ui/LazyImage";

// Import blog images
import blogSyndromeImposteur from "@/assets/blog-syndrome-imposteur.jpg";
import blogPeurReussite from "@/assets/blog-peur-reussite.jpg";
import blogPerfectionnisme from "@/assets/blog-perfectionnisme.jpg";
import blogPeurArgent from "@/assets/blog-peur-argent.jpg";
import blogPeurVisibilite from "@/assets/blog-peur-visibilite.jpg";
import blogIdentiteEvolution from "@/assets/blog-identite-evolution.jpg";
import blogLuciditeDirigeant from "@/assets/blog-lucidite-dirigeant.jpg";
import blogRepoussserDecisions from "@/assets/blog-repousser-decisions.jpg";
import blogPilotageInterieur from "@/assets/blog-pilotage-interieur.jpg";
import blogFatigueMentale from "@/assets/blog-fatigue-mentale.jpg";
import blogSportifDirigeant from "@/assets/blog-sportif-dirigeant.jpg";
import blogRoueHamster from "@/assets/blog-roue-hamster.jpg";
import blogBrasDroit from "@/assets/blog-bras-droit-dirigeant.jpg";

// Map slug to imported image
const blogImages: Record<string, string> = {
  "syndrome-imposteur-entrepreneur": blogSyndromeImposteur,
  "peur-reussite-entrepreneur": blogPeurReussite,
  "perfectionnisme-entrepreneur": blogPerfectionnisme,
  "peur-argent-entrepreneur": blogPeurArgent,
  "peur-visibilite-entrepreneur": blogPeurVisibilite,
  "identite-entrepreneur-evolution": blogIdentiteEvolution,
  "lucidite-dirigeant-sous-pression": blogLuciditeDirigeant,
  "repousser-decisions-cles": blogRepoussserDecisions,
  "pilotage-interieur-dirigeant": blogPilotageInterieur,
  "decision-fatigue-mentale-performance": blogFatigueMentale,
  "sportif-haut-niveau-dirigeant": blogSportifDirigeant,
  "sortir-roue-hamster-dirigeant": blogRoueHamster,
  "recruter-bras-droit-dirigeant-pme": blogBrasDroit,
};

const Blog = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort articles most recent first
  const sortedArticles = [...blogArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Structured data for blog listing (ItemList for SEO)
  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog Coaching Mental - Croyances Limitantes Entrepreneurs",
    "description": "Articles et guides sur les croyances limitantes qui freinent la croissance des entrepreneurs. Syndrome de l'imposteur, peur de réussir, perfectionnisme...",
    "url": "https://alphadirigeant.solutions/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": sortedArticles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "@id": `https://alphadirigeant.solutions/blog/${article.slug}`,
          "name": article.title,
          "description": article.metaDescription,
          "url": `https://alphadirigeant.solutions/blog/${article.slug}`
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Blog Pilotage Dirigeant PME/TPE | Frédéric Ternon</title>
        <meta name="title" content="Blog Pilotage Dirigeant PME/TPE | Frédéric Ternon" />
        <meta name="description" content="Articles pour dirigeants de PME/TPE : pilotage, décisions, organisation, délégation. Croyances limitantes et leviers concrets pour reprendre la main." />
        <meta name="keywords" content="croyances limitantes entrepreneur, syndrome imposteur entrepreneur, peur réussir entrepreneur, coaching mental, développement personnel entrepreneur, blocages entrepreneurs" />
        <link rel="canonical" href="https://alphadirigeant.solutions/blog" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphadirigeant.solutions/blog" />
        <meta property="og:title" content="Blog Pilotage Dirigeant PME/TPE | Frédéric Ternon" />
        <meta property="og:description" content="Articles et guides pour dirigeants de PME/TPE : pilotage, décisions et croyances limitantes." />
        <meta property="og:image" content="https://alphadirigeant.solutions/images/blog-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta property="og:site_name" content="Frédéric Ternon | Pilotage du Dirigeant" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Pilotage Dirigeant PME/TPE | Frédéric Ternon" />
        <meta name="twitter:description" content="Articles et guides pour dirigeants de PME/TPE : pilotage, décisions et croyances limitantes." />
        <meta name="twitter:image" content="https://alphadirigeant.solutions/images/blog-og.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Frédéric Ternon" />
        <meta name="language" content="French" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogListStructuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Blog Coaching Mental</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Les croyances qui freinent ta croissance
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La plupart des problèmes de croissance des entrepreneurs ne viennent jamais de technique ou de stratégies, 
            mais <strong className="text-foreground">toujours de croyances, de peurs, et d'identité</strong>.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <LazyImage 
                    src={blogImages[article.slug] || article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${article.slug}`}>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link to={`/blog/${article.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Prêt à dépasser tes croyances limitantes ?
          </h2>
          <p className="text-muted-foreground mb-8">
            Ces articles t'éclairent, mais le vrai changement se fait dans l'accompagnement.
          </p>
          <Link to="/#final-cta">
            <Button size="lg" className="text-lg px-8">
              Réserver ma session découverte
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
