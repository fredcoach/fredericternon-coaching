import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

// Route-level code splitting: only the homepage ships in the initial bundle.
// Every other route loads on demand, cutting Total Blocking Time on first paint.
const FlashDecision = lazy(() => import("./pages/FlashDecision"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const Presse = lazy(() => import("./pages/Presse"));
const Ressources = lazy(() => import("./pages/Ressources"));
const Signature = lazy(() => import("./pages/Signature"));
const TestProfilsAlphaPME = lazy(() => import("./pages/TestProfilsAlphaPME"));
const Grille = lazy(() => import("./pages/Grille"));
const CartographieLanding = lazy(() => import("./pages/CartographieLanding"));
const CartographieQuestionnaire = lazy(() => import("./pages/CartographieQuestionnaire"));
const CartographieResultat = lazy(() => import("./pages/CartographieResultat"));
const CartographieConfirmation = lazy(() => import("./pages/CartographieConfirmation"));
const RdvConfirmation = lazy(() => import("./pages/RdvConfirmation"));
const FlashDecisionPopup = lazy(() => import("./components/FlashDecisionPopup"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background" aria-busy="true" />
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
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
              <Route path="/grille" element={<Grille />} />
              <Route path="/cartographie-des-blocages" element={<CartographieLanding />} />
              <Route path="/cartographie-des-blocages/questionnaire" element={<CartographieQuestionnaire />} />
              <Route path="/cartographie-des-blocages/resultat" element={<CartographieResultat />} />
              <Route path="/cartographie-des-blocages/confirmation" element={<CartographieConfirmation />} />
              <Route path="/rendez-vous/confirmation" element={<RdvConfirmation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Suspense fallback={null}>
            <FlashDecisionPopup />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
