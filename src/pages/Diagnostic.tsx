import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { DiagnosticHeroSection } from "@/components/diagnostic/DiagnosticHeroSection";
import { DiagnosticWhySection } from "@/components/diagnostic/DiagnosticWhySection";
import { DiagnosticPreviewSection } from "@/components/diagnostic/DiagnosticPreviewSection";
import { DiagnosticBenefitsSection } from "@/components/diagnostic/DiagnosticBenefitsSection";
import { DiagnosticCTASection } from "@/components/diagnostic/DiagnosticCTASection";

const Diagnostic = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diagnostic de Lucidité Décisionnelle",
    description:
      "Auto-diagnostic en 10 minutes pour identifier vos zones fragiles, angles morts et le coût réel de vos hésitations sous pression.",
    provider: {
      "@type": "Person",
      name: "Frédéric Ternon",
    },
  };

  return (
    <>
      <Helmet>
        <title>Diagnostic Lucidité Décisionnelle | Frédéric Ternon</title>
        <meta
          name="description"
          content="Évaluez votre score de lucidité décisionnelle en 10 minutes. Identifiez vos zones fragiles, angles morts et le coût réel de vos hésitations sous pression."
        />
        <link rel="canonical" href="https://www.mentalpro.biz/diagnostic" />
        <meta
          property="og:title"
          content="Diagnostic Lucidité Décisionnelle | Frédéric Ternon"
        />
        <meta
          property="og:description"
          content="Évaluez votre score de lucidité décisionnelle en 10 minutes. Identifiez vos zones fragiles et angles morts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mentalpro.biz/diagnostic" />
        <meta property="og:image" content="https://www.mentalpro.biz/og-diagnostic.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.mentalpro.biz/og-diagnostic.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <DiagnosticHeroSection />
          <DiagnosticWhySection />
          <DiagnosticPreviewSection />
          <DiagnosticBenefitsSection />
          <DiagnosticCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Diagnostic;
