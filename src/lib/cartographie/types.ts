// Mirror of supabase/functions/_shared/cartographie-logic.ts RestitutionResult.
// Only the shape the frontend renders.

export type BlocageKey =
  | "dependance_dirigeant"
  | "organisation_sous_tension"
  | "management_autonomie"
  | "clarte_strategique";

export type PalierKey = "palier_1" | "palier_2" | "palier_3" | "palier_4";

export interface RestitutionResult {
  palier: { key: PalierKey; titre: string; phrase: string };
  palierACibler: { titre: string; phrase: string };
  blocagePrincipal: {
    key: BlocageKey;
    titre: string;
    explication: string;
    produitAujourdhui: string[];
    coutSiRienNeChange: string;
    vraiProblemeVsFaux: string;
  };
  blocageSecondaire:
    | null
    | { key: BlocageKey; titre: string; texte: string };
  sousSignalDecisionPhrase: string | null;
  sousSignalCroissancePhrase: string | null;
  prioriteUnique: string;
  callPrep: {
    palier: string;
    blocage: string;
    priorite: string;
    decisionRepoussee: string;
    coutStatuQuo: string;
  };
}

export const CALENDLY_URL = "https://calendly.com/ternon/entretien-confidentiel";
