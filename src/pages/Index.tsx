import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { RealityCheckSection } from "@/components/landing/RealityCheckSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { MyRoleSection } from "@/components/landing/MyRoleSection";
import { JulienTestimonialSection } from "@/components/landing/JulienTestimonialSection";
import { DifferentiatorsSection } from "@/components/landing/DifferentiatorsSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { SituationsSection } from "@/components/landing/SituationsSection";
import { PromiseSection } from "@/components/landing/PromiseSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { TargetAudienceSection } from "@/components/landing/TargetAudienceSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { Method3RSection } from "@/components/landing/Method3RSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { LinkedInRecommendationsSection } from "@/components/landing/LinkedInRecommendationsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { DiagnosticTeaser } from "@/components/landing/DiagnosticTeaser";
import { TripleCTASection } from "@/components/landing/TripleCTASection";
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
    "name": "Frédéric Ternon — Pilotage du Dirigeant",
    "description": "Regard extérieur pour dirigeants de PME jusqu'à 30 personnes : identifier ce qui bloque, clarifier l'organisation, améliorer les décisions.",
    "url": "https://www.mentalpro.biz",
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
        <title>Frédéric Ternon | Pilotage & Décision pour Dirigeants de PME jusqu'à 30</title>
        <meta name="description" content="Regard extérieur pour dirigeants de PME jusqu'à 30 personnes. Identifier ce qui bloque, clarifier l'organisation, mieux décider. Méthode 3R. 30 min pour identifier ce qui bloque." />
        <meta name="keywords" content="dirigeant PME, accompagnement dirigeant, pilotage entreprise, regard extérieur dirigeant, organisation PME, délégation dirigeant, décision stratégique, coach dirigeant PME" />
        <link rel="canonical" href="https://www.mentalpro.biz/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mentalpro.biz/" />
        <meta property="og:title" content="Frédéric Ternon | Pilotage & Décision pour Dirigeants de PME" />
        <meta property="og:description" content="Regard extérieur pour dirigeants de PME jusqu'à 30 personnes. Identifier ce qui bloque, clarifier l'organisation, mieux décider." />
        <meta property="og:site_name" content="Frédéric Ternon — Pilotage du Dirigeant" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frédéric Ternon | Pilotage & Décision pour Dirigeants de PME" />
        <meta name="twitter:description" content="Regard extérieur pour dirigeants de PME jusqu'à 30 personnes. Identifier ce qui bloque, clarifier l'organisation, mieux décider." />
        
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
        <RealityCheckSection />
        <AboutSection />
        <MyRoleSection />
        <DifferentiatorsSection />
        <PainPointsSection />
        <SituationsSection />
        <PromiseSection />
        <BenefitsSection />
        <JulienTestimonialSection />
        <TargetAudienceSection />
        <JourneySection />
        <Method3RSection />
        <OfferSection />
        <TestimonialsSection />
        <LinkedInRecommendationsSection />
        <FAQSection />
        <DiagnosticTeaser />
        <TripleCTASection />
        <FinalCTASection />
      </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default Index;
