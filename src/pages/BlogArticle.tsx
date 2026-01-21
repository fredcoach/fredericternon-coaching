import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getArticleBySlug, getRelatedArticles } from "@/data/blogArticles";
import { Clock, ArrowLeft, ArrowRight, Brain, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";
import { LazyImage } from "@/components/ui/LazyImage";

// Import blog images
import blogSyndromeImposteur from "@/assets/blog-syndrome-imposteur.jpg";
import blogPeurReussite from "@/assets/blog-peur-reussite.jpg";
import blogPerfectionnisme from "@/assets/blog-perfectionnisme.jpg";
import blogPeurArgent from "@/assets/blog-peur-argent.jpg";
import blogPeurVisibilite from "@/assets/blog-peur-visibilite.jpg";
import blogIdentiteEvolution from "@/assets/blog-identite-evolution.jpg";

// Map slugs to images
const blogImages: Record<string, string> = {
  "syndrome-imposteur-entrepreneur": blogSyndromeImposteur,
  "peur-reussite-entrepreneur": blogPeurReussite,
  "perfectionnisme-entrepreneuriat": blogPerfectionnisme,
  "peur-argent-entrepreneur": blogPeurArgent,
  "peur-visibilite-entrepreneur": blogPeurVisibilite,
  "identite-evolution-entrepreneur": blogIdentiteEvolution,
};
const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 3) : [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Get the image for this article
  const articleImage = slug ? blogImages[slug] : undefined;

  // Structured Data for Product (SEO optimized)
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": article.productName,
    "description": article.productDescription,
    "image": `https://fredericternon.com${article.ogImage}`,
    "sku": `COACHING-${article.id}`,
    "mpn": `FT-${article.slug}`,
    "brand": {
      "@type": "Brand",
      "name": "Frédéric Ternon Coaching"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Frédéric Ternon Coaching Mental",
      "url": "https://fredericternon.com"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://fredericternon.com/blog/${article.slug}`,
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "FR",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "EUR"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": "0",
            "maxValue": "1",
            "unitCode": "DAY"
          }
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "FR"
        }
      },
      "seller": {
        "@type": "Organization",
        "name": "Frédéric Ternon Coaching Mental",
        "url": "https://fredericternon.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "47",
      "ratingCount": "52"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marie L."
        },
        "datePublished": "2024-01-10",
        "reviewBody": "Accompagnement transformateur qui m'a permis de dépasser mes blocages et doubler mon chiffre d'affaires."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Thomas D."
        },
        "datePublished": "2024-02-15",
        "reviewBody": "La méthode 3R a changé ma vision de l'entrepreneuriat. Je recommande vivement."
      }
    ],
    "category": "Coaching Mental Entrepreneurial",
    "audience": {
      "@type": "Audience",
      "audienceType": article.targetAudience
    }
  };

  // Article structured data (optimized)
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": `https://fredericternon.com${article.ogImage}`,
    "author": {
      "@type": "Person",
      "name": "Frédéric Ternon",
      "url": "https://fredericternon.com",
      "jobTitle": "Coach Mental pour Entrepreneurs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Frédéric Ternon Coaching Mental",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fredericternon.com/images/blog-og.jpg"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fredericternon.com/blog/${article.slug}`
    },
    "articleSection": article.category,
    "wordCount": article.content.split(/\s+/).length,
    "inLanguage": "fr-FR"
  };

  // FAQ structured data from content
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Comment dépasser ${article.title.toLowerCase().includes('syndrome') ? 'le syndrome de l\'imposteur' : article.title.toLowerCase().includes('peur') ? 'cette peur' : 'cette croyance limitante'} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `La Méthode 3R de Frédéric Ternon permet de Reconnaître, Réagir et Reprogrammer les croyances limitantes. ${article.productDescription}`
        }
      },
      {
        "@type": "Question",
        "name": "Comment fonctionne l'accompagnement coaching mental ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'accompagnement commence par une session découverte gratuite pour identifier vos blocages, puis un programme personnalisé basé sur la Méthode 3R pour transformer vos croyances limitantes en ressources."
        }
      }
    ]
  };

  // BreadcrumbList for navigation
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://fredericternon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://fredericternon.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://fredericternon.com/blog/${article.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://fredericternon.com/blog/${article.slug}`} />
        <meta property="og:image" content={`https://fredericternon.com${article.ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta property="og:site_name" content="Frédéric Ternon Coaching" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:modified_time" content={article.updatedAt} />
        <meta property="article:author" content="Frédéric Ternon" />
        <meta property="article:section" content={article.category} />
        <meta property="article:tag" content="coaching mental" />
        <meta property="article:tag" content="croyances limitantes" />
        <meta property="article:tag" content="entrepreneur" />
        
        {/* Product meta tags for Google */}
        <meta property="product:brand" content="Frédéric Ternon Coaching" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:amount" content="0" />
        <meta property="product:price:currency" content="EUR" />
        
        <link rel="canonical" href={`https://fredericternon.com/blog/${article.slug}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={`https://fredericternon.com${article.ogImage}`} />
        <meta name="twitter:creator" content="@fredericternon" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Frédéric Ternon" />
        <meta name="language" content="French" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        
        {/* All structured data */}
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
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
        {/* Article Banner Image */}
        {articleImage && (
          <div className="container mx-auto max-w-4xl mt-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <LazyImage
                src={articleImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* Article Content + Sidebar */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              <div 
                className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
                dangerouslySetInnerHTML={{ __html: article.content }}
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
