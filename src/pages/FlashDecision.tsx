import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { FlashHeroSection } from "@/components/flash-decision/FlashHeroSection";
import { FlashPainSection } from "@/components/flash-decision/FlashPainSection";
import { FlashBeforeAfterSection } from "@/components/flash-decision/FlashBeforeAfterSection";
import { FlashBenefitsSection } from "@/components/flash-decision/FlashBenefitsSection";
import { FlashProcessSection } from "@/components/flash-decision/FlashProcessSection";
import { FlashCasesSection } from "@/components/flash-decision/FlashCasesSection";
import { FlashTestimonialsSection } from "@/components/flash-decision/FlashTestimonialsSection";
import { FlashCTASection } from "@/components/flash-decision/FlashCTASection";

const FlashDecision = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flash Decision - Session intensive 1h",
    "description": "Session de coaching décisionnel intensive d'1 heure pour dirigeants. Débloquez une décision stratégique grâce au questionnement puissant.",
    "provider": {
      "@type": "Person",
      "name": "Frédéric Ternon"
    },
    "offers": {
      "@type": "Offer",
      "price": "350",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <Helmet>
        <title>Flash Decision | Session Coaching 1h | Frédéric Ternon</title>
        <meta name="description" content="Débloquez une décision stratégique en 1 heure. Session intensive de questionnement puissant pour dirigeants. 350€, résultats immédiats." />
        <link rel="canonical" href="https://alphadirigeant.solutions/flash-decision" />
        <meta property="og:title" content="Flash Decision | Session Coaching 1h" />
        <meta property="og:description" content="Débloquez une décision stratégique en 1 heure. Session intensive pour dirigeants. 350€." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphadirigeant.solutions/flash-decision" />
        <meta property="og:image" content="https://alphadirigeant.solutions/__l5e/assets-v1/f5bd222f-d6ca-44ac-babf-126fe40c1b96/flash-decision-og.png" />
        <meta property="og:image:width" content="1254" />
        <meta property="og:image:height" content="1254" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://alphadirigeant.solutions/__l5e/assets-v1/f5bd222f-d6ca-44ac-babf-126fe40c1b96/flash-decision-og.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <FlashHeroSection />
          <FlashPainSection />
          <FlashBeforeAfterSection />
          <FlashBenefitsSection />
          <FlashProcessSection />
          <FlashCasesSection />
          <FlashTestimonialsSection />
          <FlashCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FlashDecision;
