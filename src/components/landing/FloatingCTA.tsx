import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

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
          className="gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90 transition-all animate-fade-in"
        >
          <a
            href="https://calendly.com/ternon/entretien-confidentiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">30 min pour identifier ce qui bloque</span>
            <span className="sm:hidden">Réserver</span>
          </a>
        </Button>
      )}
    </div>
  );
}
