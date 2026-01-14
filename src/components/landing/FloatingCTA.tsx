import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in flex items-center gap-3">
      <Button
        asChild
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all"
      >
        <a
          href="https://wa.me/33767971952"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
      >
        <a
          href="https://calendly.com/ternon/entretien-confidentiel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Entretien Sélection 30 min</span>
          <span className="sm:hidden">Réserver</span>
        </a>
      </Button>
    </div>
  );
}
