export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif font-semibold text-foreground">
              Frédéric Ternon
            </p>
            <p className="text-sm text-muted-foreground">
              Coach en performance mentale & leadership
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
