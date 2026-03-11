import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DIAGNOSTIC_URL = "https://pilotage-mental-diagnostic.lovable.app";

const DiagnosticPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("diag_popup_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setIsOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("diag_popup_dismissed", "true");
  };

  const handleCTA = () => {
    window.open(DIAGNOSTIC_URL, "_blank", "noopener");
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "90%",
                maxWidth: "480px",
                backgroundColor: "#0c0c0f",
                border: "1px solid rgba(200, 170, 110, 0.25)",
                borderRadius: "16px",
                padding: "40px 32px",
                textAlign: "center",
                boxShadow:
                  "0 25px 60px -12px rgba(0,0,0,0.7), 0 0 40px -8px rgba(200,170,110,0.15)",
                pointerEvents: "auto",
                position: "relative",
              }}
            >
            <button
              onClick={handleDismiss}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                cursor: "pointer",
                padding: "4px",
              }}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: "40px",
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, #c8aa6e, transparent)",
                margin: "0 auto 24px",
              }}
            />

            <p
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#c8aa6e",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              Outil de pilotage
            </p>

            <h2
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#f0ece4",
                lineHeight: 1.35,
                marginBottom: "16px",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Quel est votre score
              <br />
              de lucidité décisionnelle ?
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(240,236,228,0.65)",
                lineHeight: 1.7,
                marginBottom: "8px",
              }}
            >
              Sous pression, votre système de pilotage se déforme.
              <br />
              Vous ne le voyez pas — c'est le principe.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(240,236,228,0.5)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              Ce diagnostic identifie vos{" "}
              <strong style={{ color: "#c8aa6e" }}>zones fragiles</strong>, vos{" "}
              <strong style={{ color: "#c8aa6e" }}>angles morts</strong> et le{" "}
              <strong style={{ color: "#c8aa6e" }}>coût réel</strong> de vos
              hésitations.
            </p>

            <button
              onClick={handleCTA}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 36px",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#0c0c0f",
                background: "linear-gradient(135deg, #c8aa6e, #e0c88a)",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px -4px rgba(200,170,110,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(-2px)";
                (e.target as HTMLElement).style.boxShadow =
                  "0 8px 30px -4px rgba(200,170,110,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow =
                  "0 4px 20px -4px rgba(200,170,110,0.4)";
              }}
            >
              Accéder au diagnostic
            </button>

            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                marginTop: "16px",
              }}
            >
              8 min · Résultats immédiats · Satisfait ou remboursé
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DiagnosticPopup;
