import { useParams, Link, Navigate } from "react-router-dom";
import { getArticleBySlug, getRelatedArticles } from "@/data/blogArticles";
import { Clock, ArrowLeft, ArrowRight, Brain, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 3) : [];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Structured Data for Product (SEO)
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": article.productName,
    "description": article.productDescription,
    "brand": {
      "@type": "Brand",
      "name": "Frédéric Ternon Coaching"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Frédéric Ternon Coaching Mental"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Client vérifié"
      },
      "reviewBody": "Accompagnement transformateur qui m'a permis de dépasser mes blocages."
    }
  };

  // Article structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Person",
      "name": "Frédéric Ternon"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Frédéric Ternon Coaching Mental"
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://fredericternon.com/blog/${article.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Article Header */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium px-4 py-1.5 bg-primary/10 text-primary rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime} de lecture
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Article Content + Sidebar */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                <div 
                  className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
                  dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
              </article>

              {/* Product-like Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Product Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Solution</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {article.productName}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6">
                      {article.productDescription}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {article.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-border pt-4 mb-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Tarif</span>
                        <span className="text-lg font-bold text-foreground">{article.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Disponibilité</span>
                        <span className="text-sm text-green-600 font-medium">{article.availability}</span>
                      </div>
                    </div>
                    
                    <Link to="/#final-cta">
                      <Button className="w-full" size="lg">
                        Réserver un appel découverte
                      </Button>
                    </Link>
                  </div>

                  {/* Target Audience */}
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">Pour qui ?</h4>
                    <p className="text-sm text-muted-foreground">
                      {article.targetAudience}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Articles connexes
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.slug}`}
                    className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <span className="text-xs font-medium text-primary mb-2 block">
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedArticle.title}
                    </h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      Lire
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à transformer tes croyances ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              La lecture t'éclaire. L'accompagnement te transforme. 
              Réserve ta session découverte gratuite.
            </p>
            <Link to="/#final-cta">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Réserver ma session gratuite
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle;
