import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { popupCoordinator } from "@/hooks/usePopupCoordinator";

const DIAGNOSTIC_URL = "https://pilotage-mental-diagnostic.lovable.app";
const POPUP_ID = "diagnostic";

const DiagnosticPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isFlashDecision = location.pathname === "/flash-decision";
  const isCartoRoute = location.pathname.startsWith("/cartographie-des-blocages");

  const tryOpen = useCallback(() => {
    if (sessionStorage.getItem("diag_popup_dismissed")) return false;
    if (!popupCoordinator.canShow(POPUP_ID)) return false;
    popupCoordinator.open(POPUP_ID);
    setIsOpen(true);
    return true;
  }, []);

  useEffect(() => {
    if (isFlashDecision || isCartoRoute) return;
    if (sessionStorage.getItem("diag_popup_dismissed")) return;

    let opened = false;
    const timer = setTimeout(() => {
      opened = tryOpen();
    }, 25000);

    const onScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (scrolled > 0.5) {
        if (tryOpen()) {
          opened = true;
          window.removeEventListener("scroll", onScroll);
          clearTimeout(timer);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isFlashDecision, tryOpen]);

  if (isFlashDecision) return null;

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("diag_popup_dismissed", "true");
    popupCoordinator.close(POPUP_ID);
  };

  const handleCTA = () => {
    popupCoordinator.markConverted();
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
              zIndex: 9990,
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
              zIndex: 9991,
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
                textAlign: undefined,
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
              Diagnostic de pilotage
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
              Qu'est-ce qui bloque
              <br />
              dans votre pilotage ?
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(240,236,228,0.65)",
                lineHeight: 1.7,
                marginBottom: "8px",
              }}
            >
              Votre entreprise tourne, mais tout repose encore sur vous.
              <br />
              Vous ne voyez plus ce qui bloque depuis l'intérieur.
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
              <strong style={{ color: "#c8aa6e" }}>points de friction</strong>, vos{" "}
              <strong style={{ color: "#c8aa6e" }}>angles morts</strong> et le{" "}
              <strong style={{ color: "#c8aa6e" }}>coût réel</strong> de ce qui repose encore sur vous.
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
                whiteSpace: "pre-line",
              }}
            >
              10 à 15 minutes pour découvrir ce que la pression vous cache.{"\n"}Résultats immédiats.
            </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DiagnosticPopup;
