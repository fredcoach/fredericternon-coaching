import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  return (
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
  );
};

export default Index;
