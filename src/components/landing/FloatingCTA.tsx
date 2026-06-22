import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export function FloatingCTA() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <Button
        asChild
        size="lg"
        aria-label="Contacter par WhatsApp"
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all rounded-full h-14 w-14 p-0"
      >
        <a
          href="https://wa.me/33767971952"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
      {isScrolled && (
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all animate-fade-in font-semibold"
        >
          <a
            href="/test-profils-alpha-pme"
            className="inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span className="hidden sm:inline">Découvrir ce qui freine ma PME</span>
            <span className="sm:hidden">Faire le test</span>
          </a>
        </Button>
      )}

    </div>
  );
}
