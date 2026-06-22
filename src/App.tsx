import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import FlashDecision from "./pages/FlashDecision";

import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Presse from "./pages/Presse";
import Ressources from "./pages/Ressources";
import Signature from "./pages/Signature";
import TestProfilsAlphaPME from "./pages/TestProfilsAlphaPME";
import CartographieLanding from "./pages/CartographieLanding";
import CartographieQuestionnaire from "./pages/CartographieQuestionnaire";
import CartographieResultat from "./pages/CartographieResultat";
import CartographieConfirmation from "./pages/CartographieConfirmation";
import RdvConfirmation from "./pages/RdvConfirmation";
import FlashDecisionPopup from "./components/FlashDecisionPopup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/flash-decision" element={<FlashDecision />} />
            <Route path="/diagnostic" element={<Navigate to="/cartographie-des-blocages" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/presse" element={<Presse />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/signature" element={<Signature />} />
            <Route path="/test-profils-alpha-pme" element={<TestProfilsAlphaPME />} />
            <Route path="/cartographie-des-blocages" element={<CartographieLanding />} />
            <Route path="/cartographie-des-blocages/questionnaire" element={<CartographieQuestionnaire />} />
            <Route path="/cartographie-des-blocages/resultat" element={<CartographieResultat />} />
            <Route path="/cartographie-des-blocages/confirmation" element={<CartographieConfirmation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FlashDecisionPopup />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
