import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogArticles } from "@/data/blogArticles";
import { Clock, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

const Blog = () => {
  // Structured data for blog listing (ItemList for SEO)
  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog Coaching Mental - Croyances Limitantes Entrepreneurs",
    "description": "Articles et guides sur les croyances limitantes qui freinent la croissance des entrepreneurs. Syndrome de l'imposteur, peur de réussir, perfectionnisme...",
    "url": "https://fredericternon.com/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogArticles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "@id": `https://fredericternon.com/blog/${article.slug}`,
          "name": article.title,
          "description": article.metaDescription,
          "url": `https://fredericternon.com/blog/${article.slug}`
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Blog Coaching Mental | Croyances Limitantes Entrepreneurs - Frédéric Ternon</title>
        <meta name="title" content="Blog Coaching Mental | Croyances Limitantes Entrepreneurs - Frédéric Ternon" />
        <meta name="description" content="Découvrez les croyances limitantes qui freinent votre croissance entrepreneuriale. Syndrome de l'imposteur, peur de réussir, perfectionnisme : solutions concrètes pour entrepreneurs." />
        <meta name="keywords" content="croyances limitantes entrepreneur, syndrome imposteur entrepreneur, peur réussir entrepreneur, coaching mental, développement personnel entrepreneur, blocages entrepreneurs" />
        <link rel="canonical" href="https://fredericternon.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fredericternon.com/blog" />
        <meta property="og:title" content="Blog Coaching Mental | Croyances Limitantes Entrepreneurs" />
        <meta property="og:description" content="Articles et guides pour dépasser vos croyances limitantes et libérer votre potentiel d'entrepreneur." />
        <meta property="og:site_name" content="Frédéric Ternon Coaching" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Coaching Mental | Croyances Limitantes Entrepreneurs" />
        <meta name="twitter:description" content="Articles et guides pour dépasser vos croyances limitantes et libérer votre potentiel d'entrepreneur." />
        
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
            {blogArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-primary/40" />
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
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  
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
