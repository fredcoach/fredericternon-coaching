import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#differentiators", label: "Approche" },
  { href: "#situations", label: "Situations" },
  { href: "#journey", label: "Parcours" },
  { href: "#offer", label: "Offre" },
  { href: "#faq", label: "FAQ" },
];

const pageLinks = [
  { href: "/blog", label: "Blog" },
];

const externalLinks = [
  { href: "https://mentalpro.fr", label: "Espace Sportifs", external: true },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If not on homepage, navigate there first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`font-serif text-lg md:text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Frédéric Ternon
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm transition-colors ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-foreground" 
                    : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {link.label}
              </button>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-white/80 drop-shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isScrolled 
                    ? "text-primary hover:text-primary/80" 
                    : "text-amber-400 hover:text-amber-300 drop-shadow-sm"
                }`}
              >
                {link.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#final-cta")}
              className="gradient-primary text-primary-foreground hover:opacity-90"
            >
              Planifie un échange
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-left text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-3 px-4 text-left font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-left font-medium text-primary hover:text-primary/80 hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#final-cta")}
                className="mt-2 gradient-primary text-primary-foreground"
              >
                Réserve ton bilan initial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
