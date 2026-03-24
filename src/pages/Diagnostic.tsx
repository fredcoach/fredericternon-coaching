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
      "Auto-diagnostic en 8 minutes pour identifier vos zones fragiles, angles morts et le coût réel de vos hésitations sous pression.",
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
          content="Évaluez votre score de lucidité décisionnelle en 8 minutes. Identifiez vos zones fragiles, angles morts et le coût réel de vos hésitations sous pression."
        />
        <link rel="canonical" href="https://fredericternon.com/diagnostic" />
        <meta
          property="og:title"
          content="Diagnostic Lucidité Décisionnelle | Frédéric Ternon"
        />
        <meta
          property="og:description"
          content="Évaluez votre score de lucidité décisionnelle en 8 minutes."
        />
        <meta property="og:type" content="website" />
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
