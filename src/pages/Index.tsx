import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { DifferentiatorsSection } from "@/components/landing/DifferentiatorsSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { SituationsSection } from "@/components/landing/SituationsSection";
import { PromiseSection } from "@/components/landing/PromiseSection";
import { TargetAudienceSection } from "@/components/landing/TargetAudienceSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { Method3RSection } from "@/components/landing/Method3RSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTA } from "@/components/landing/FloatingCTA";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when navigating from another page
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);

  // Structured Data for LocalBusiness
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frédéric Ternon Coaching",
    "description": "Coaching premium en performance mentale et leadership pour dirigeants et décideurs",
    "url": "https://fredericternon.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "priceRange": "€€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    }
  };

  return (
    <>
      <Helmet>
        <title>Frédéric Ternon | Coach Performance Mentale & Leadership pour Dirigeants</title>
        <meta name="description" content="Coaching premium pour dirigeants et décideurs. Retrouvez votre puissance décisionnelle, votre énergie et votre focus. Méthode 3R éprouvée. Résultats concrets." />
        <meta name="keywords" content="coach dirigeant, coaching leadership, performance mentale, coach entrepreneur, coaching décideur, développement leadership, coach executive, coaching premium" />
        <link rel="canonical" href="https://fredericternon.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fredericternon.com/" />
        <meta property="og:title" content="Frédéric Ternon | Coach Performance Mentale & Leadership" />
        <meta property="og:description" content="Coaching premium pour dirigeants. Retrouvez votre puissance décisionnelle, votre énergie et votre focus." />
        <meta property="og:site_name" content="Frédéric Ternon Coaching" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frédéric Ternon | Coach Performance Mentale & Leadership" />
        <meta name="twitter:description" content="Coaching premium pour dirigeants. Retrouvez votre puissance décisionnelle, votre énergie et votre focus." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Frédéric Ternon" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="language" content="French" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferentiatorsSection />
        <PainPointsSection />
        <SituationsSection />
        <PromiseSection />
        <TargetAudienceSection />
        <JourneySection />
        <Method3RSection />
        <OfferSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default Index;
