import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales | Frédéric Ternon</title>
        <meta name="description" content="Mentions légales du site mentalpro.biz — Frédéric Ternon, accompagnement de dirigeants de PME." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.mentalpro.biz/mentions-legales" />
        <meta property="og:title" content="Mentions légales | Frédéric Ternon" />
        <meta property="og:description" content="Informations légales du site mentalpro.biz : éditeur, hébergeur, propriété intellectuelle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mentalpro.biz/mentions-legales" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">Mentions légales</h1>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
                <p>
                  Le site <strong className="text-foreground">fredericternon.com</strong> est édité par :<br />
                  <strong className="text-foreground">Frédéric Ternon</strong><br />
                  Entrepreneur individuel<br />
                  Coach en performance mentale & leadership<br />
                  France
                </p>
                <p>
                  Contact : via le formulaire de prise de rendez-vous ou WhatsApp disponible sur le site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Hébergement</h2>
                <p>
                  Ce site est hébergé par :<br />
                  <strong className="text-foreground">Lovable (Lovable Technologies)</strong><br />
                  Service d'hébergement web
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, éléments graphiques) est la propriété exclusive de Frédéric Ternon, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.
                </p>
                <p>
                  La Méthode 3R (Reconnaître, Réagir, Reprogrammer) est une méthode propriétaire développée par Frédéric Ternon.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Responsabilité</h2>
                <p>
                  Les informations fournies sur ce site le sont à titre indicatif. Frédéric Ternon ne saurait garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisateur est seul responsable de l'utilisation qu'il fait des contenus du site.
                </p>
                <p>
                  Le coaching proposé ne se substitue en aucun cas à un suivi médical ou psychologique. En cas de troubles avérés, il est recommandé de consulter un professionnel de santé.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens vers des sites externes. Frédéric Ternon ne peut être tenu responsable du contenu de ces sites tiers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Droit applicable</h2>
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

export default MentionsLegales;
