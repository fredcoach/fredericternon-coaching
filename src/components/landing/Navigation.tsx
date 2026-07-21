import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoLight from "@/assets/alpha-pme-horizontal-light.png";
import logoDark from "@/assets/alpha-pme-horizontal.png";

type NavItem = {
  label: string;
  /** External page route (Link). */
  to?: string;
  /** Same-page anchor (smooth scroll, navigates to "/" first if needed). */
  anchor?: string;
  highlight?: boolean;
};

const navItems: NavItem[] = [
  { label: "Test des 4 Profils", to: "/test-profils-alpha-pme", highlight: true },
  { label: "Blog", to: "/blog" },
  { label: "Ressources", to: "/ressources" },
  { label: "Presse", to: "/presse" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleAnchor = (anchor: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: anchor } });
      return;
    }
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHomePage = location.pathname === "/";
  const shouldUseWhiteText = !isScrolled && isHomePage && !isMobileMenuOpen;

  const linkClass = (item: NavItem) => {
    if (item.highlight) {
      return shouldUseWhiteText
        ? "text-amber-400 hover:text-amber-300 drop-shadow-sm"
        : "text-warning hover:text-warning/80";
    }
    return shouldUseWhiteText
      ? "text-white hover:text-white/80 drop-shadow-sm"
      : "text-foreground hover:text-primary";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16 md:h-20" : "h-20 md:h-28"
          }`}
        >
          <Link
            to="/"
            aria-label="Alpha PME | accueil"
            className="flex items-center transition-opacity hover:opacity-90"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
                // Ensure we land at the top of the homepage
                requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
              }
            }}
          >
            <img
              src={shouldUseWhiteText ? logoLight : logoDark}
              alt="Alpha PME | Clarté, Structure, Pilotage"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-14 md:h-20"
              }`}
              width="320"
              height="80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) =>
              item.anchor ? (
                <button
                  key={item.label}
                  onClick={() => handleAnchor(item.anchor!)}
                  className={`text-sm font-medium transition-colors ${linkClass(item)}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`text-sm font-medium transition-colors ${linkClass(item)}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button
              asChild
              className="gradient-primary text-primary-foreground hover:opacity-90"
            >
              <a
                href="https://calendly.com/ternon/alpha-pme?redirect_url=https://alphadirigeant.solutions/rendez-vous/confirmation"
                target="_blank"
                rel="noopener noreferrer"
              >
                30 min pour échanger
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden relative z-[60] p-3 -mr-2 transition-colors touch-manipulation ${
              shouldUseWhiteText ? "text-white drop-shadow-md" : "text-foreground"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen((v) => !v);
            }}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.anchor ? (
                  <button
                    key={item.label}
                    onClick={() => handleAnchor(item.anchor!)}
                    className={`py-3 px-4 text-left font-medium rounded-lg transition-colors hover:bg-muted ${
                      item.highlight
                        ? "text-warning hover:text-warning/80"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 px-4 text-left font-medium rounded-lg transition-colors hover:bg-muted ${
                      item.highlight
                        ? "text-warning hover:text-warning/80"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button
                asChild
                className="mt-2 gradient-primary text-primary-foreground"
              >
                <a
                  href="https://calendly.com/ternon/alpha-pme?redirect_url=https://alphadirigeant.solutions/rendez-vous/confirmation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  30 min pour échanger
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
