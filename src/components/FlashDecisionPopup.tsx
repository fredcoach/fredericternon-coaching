import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FlashDecisionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  useEffect(() => {
    if (!isHomepage) return;
    const dismissed = sessionStorage.getItem("flash_popup_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setIsOpen(true), 15000);
    return () => clearTimeout(timer);
  }, [isHomepage]);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("flash_popup_dismissed", "true");
  };

  const handleCTA = () => {
    window.location.href = "/flash-decision";
    handleDismiss();
  };

  if (!isHomepage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          >
            <div className="w-[90%] max-w-[480px] bg-[#0c0c0f] border border-warning/25 rounded-2xl p-10 text-center shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7),0_0_40px_-8px_rgba(200,170,110,0.15)] pointer-events-auto relative">
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 bg-transparent border-none text-white/40 cursor-pointer p-1 hover:text-white/70 transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-warning" />
                <span className="text-xs tracking-[2px] uppercase text-warning font-medium">
                  Flash Decision
                </span>
                <Zap className="w-5 h-5 text-warning" />
              </div>

              <h2 className="text-[22px] font-bold text-[#f0ece4] leading-tight mb-4 font-serif">
                Une décision vous bloque ?
                <br />
                Débloquez-la en 1 heure.
              </h2>

              <p className="text-sm text-[rgba(240,236,228,0.65)] leading-relaxed mb-2">
                Vous tournez en boucle sur un choix stratégique ?
                <br />
                Chaque jour d'hésitation a un coût.
              </p>

              <p className="text-sm text-[rgba(240,236,228,0.5)] leading-relaxed mb-7">
                Une session de{" "}
                <strong className="text-warning">questionnement puissant</strong>{" "}
                pour transformer l'indécision en{" "}
                <strong className="text-warning">action claire</strong>.
              </p>

              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-2 px-9 py-3.5 text-sm font-semibold tracking-wider uppercase text-[#0c0c0f] bg-gradient-to-br from-warning to-[#e0c88a] border-none rounded-lg cursor-pointer transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(200,170,110,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-4px_rgba(200,170,110,0.5)]"
              >
                <Zap className="w-4 h-4" />
                Découvrir Flash Decision
              </button>

              <p className="text-[11px] text-white/30 mt-4">
                1h · 350€ · Résultats immédiats
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FlashDecisionPopup;
