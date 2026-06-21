import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { JulienTestimonialSection } from "@/components/landing/JulienTestimonialSection";
import { RealityCheckSection } from "@/components/landing/RealityCheckSection";
import { HiddenCostSection } from "@/components/landing/HiddenCostSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { PromiseSection } from "@/components/landing/PromiseSection";
import { OrganigrammeSection } from "@/components/landing/OrganigrammeSection";
import { Method3RSection } from "@/components/landing/Method3RSection";
import { DifferentiatorsSection } from "@/components/landing/DifferentiatorsSection";
import { AboutMeSection } from "@/components/landing/AboutMeSection";
import { ClientVoicesSection } from "@/components/landing/ClientVoicesSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { EntryProductsTeaser } from "@/components/landing/EntryProductsTeaser";
import { LinkedInRecommendationsSection } from "@/components/landing/LinkedInRecommendationsSection";
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
    "name": "Frédéric Ternon | Pilotage du Dirigeant",
    "description": "Regard extérieur pour dirigeants de PME/TPE jusqu'à 30 personnes. Identifier les blocages, clarifier l'organisation, mieux décider.",
    "url": "https://alphadirigeant.solutions",
    "telephone": "+33767971952",
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
        <title>Frédéric Ternon | Pilotage PME/TPE | Décisions & Organisation</title>
        <meta name="description" content="Regard extérieur pour dirigeants de PME/TPE jusqu'à 30 personnes. Identifier les blocages, clarifier l'organisation, mieux décider." />
        <meta name="keywords" content="dirigeant PME/TPE, accompagnement dirigeant, pilotage entreprise, regard extérieur dirigeant, organisation PME/TPE, délégation dirigeant, décision stratégique, coach dirigeant PME/TPE" />
        <link rel="canonical" href="https://alphadirigeant.solutions/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphadirigeant.solutions/" />
        <meta property="og:title" content="Frédéric Ternon | Pilotage & Décision pour Dirigeants de PME/TPE" />
        <meta property="og:description" content="Regard extérieur pour dirigeants de PME/TPE jusqu'à 30 personnes. Identifier les blocages, clarifier l'organisation, mieux décider." />
        <meta property="og:site_name" content="Frédéric Ternon | Pilotage du Dirigeant" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frédéric Ternon | Pilotage & Décision pour Dirigeants de PME/TPE" />
        <meta name="twitter:description" content="Regard extérieur pour dirigeants de PME/TPE jusqu'à 30 personnes. Identifier les blocages, clarifier l'organisation, mieux décider." />
        
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
          <JulienTestimonialSection />
          <RealityCheckSection />
          <HiddenCostSection />
          <BeforeAfterSection />
          <ProblemSolutionSection />
          <PromiseSection />
          <OrganigrammeSection />
          <Method3RSection />
          <DifferentiatorsSection />
          <AboutMeSection />
          <ClientVoicesSection />
          <OfferSection />
          <EntryProductsTeaser />
          <LinkedInRecommendationsSection />
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
