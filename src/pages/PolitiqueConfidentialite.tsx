import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité | Frédéric Ternon</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles du site mentalpro.biz." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.mentalpro.biz/politique-confidentialite" />
        <meta property="og:title" content="Politique de confidentialité | Frédéric Ternon" />
        <meta property="og:description" content="Comment vos données personnelles sont collectées, utilisées et protégées sur mentalpro.biz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mentalpro.biz/politique-confidentialite" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Responsable du traitement</h2>
                <p>
                  Le responsable du traitement des données personnelles est :<br />
                  <strong className="text-foreground">Frédéric Ternon</strong><br />
                  Coach en performance mentale & leadership<br />
                  Contact : via WhatsApp ou le formulaire de prise de rendez-vous sur le site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Données collectées</h2>
                <p>Dans le cadre de l'utilisation du site fredericternon.com, les données suivantes peuvent être collectées :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Données de navigation (adresse IP, type de navigateur, pages visitées)</li>
                  <li>Données fournies volontairement lors d'une prise de contact (nom, email, numéro de téléphone)</li>
                  <li>Données de réservation via Calendly (plateforme tierce)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Finalité du traitement</h2>
                <p>Les données personnelles sont collectées pour :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Permettre la prise de contact et la planification d'entretiens</li>
                  <li>Améliorer l'expérience utilisateur sur le site</li>
                  <li>Assurer le suivi de la relation commerciale</li>
                  <li>Respecter les obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Base légale</h2>
                <p>
                  Le traitement des données repose sur le consentement de l'utilisateur et/ou l'exécution de mesures précontractuelles, conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Durée de conservation</h2>
                <p>
                  Les données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après le dernier contact.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Partage des données</h2>
                <p>
                  Les données personnelles ne sont pas vendues ni cédées à des tiers. Elles peuvent être partagées avec :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong className="text-foreground">Calendly</strong> : pour la gestion des rendez-vous</li>
                  <li><strong className="text-foreground">WhatsApp (Meta)</strong> : pour la messagerie</li>
                  <li><strong className="text-foreground">Lovable Technologies</strong> : hébergeur du site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
                <p>
                  Ce site utilise des cookies techniques essentiels au fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement préalable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong className="text-foreground">Droit d'accès</strong> : obtenir une copie de vos données</li>
                  <li><strong className="text-foreground">Droit de rectification</strong> : corriger des données inexactes</li>
                  <li><strong className="text-foreground">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                  <li><strong className="text-foreground">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                  <li><strong className="text-foreground">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                  <li><strong className="text-foreground">Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous via WhatsApp ou le formulaire de prise de rendez-vous.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. Réclamation</h2>
                <p>
                  En cas de désaccord, vous pouvez introduire une réclamation auprès de la <strong className="text-foreground">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés). <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">www.cnil.fr</a>.
                </p>
              </section>

              <p className="text-sm text-muted-foreground/70 pt-4 border-t border-border">
                Dernière mise à jour : Mars 2026
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
