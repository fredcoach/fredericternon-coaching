import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const sectionLinks = [
  { href: "#about", label: "À propos" },
  { href: "#differentiators", label: "Approche" },
  { href: "#situations", label: "Situations" },
  { href: "#journey", label: "Parcours" },
  { href: "#offer", label: "Offre" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-semibold text-foreground mb-1">
              Frédéric Ternon
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Regard extérieur pour dirigeants de PME
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Dirigeants de PME · 5 à 30 personnes
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://mental-pro.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                mental-pro.fr
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://mentalpro.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                Espace Sportifs
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-foreground mb-3 text-sm">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <p className="font-semibold text-foreground mb-3 text-sm">Contact</p>
            <a
              href="https://wa.me/33767971952"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors block mb-2"
            >
              WhatsApp
            </a>
            <a
              href="https://calendly.com/ternon/entretien-confidentiel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors block mb-4"
            >
              Réserver un entretien
            </a>
            <div className="flex flex-col gap-1 pt-2 border-t border-border">
              <Link to="/mentions-legales" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Frédéric Ternon — Tous droits réservés
          </p>
          <p className="text-xs text-muted-foreground">
            Pilotage · Décision · Organisation
          </p>
        </div>
      </div>
    </footer>
  );
}