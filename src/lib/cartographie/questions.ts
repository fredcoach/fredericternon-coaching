// Question definitions for the Cartographie des Blocages UI.
// Scoring lives ONLY on the server (supabase/functions/_shared/cartographie-logic.ts).

export interface ChoiceOption {
  value: string;
  label: string;
}

export type ChoiceQuestion = {
  id: string;
  kind: "choice";
  title: string;
  subtitle?: string;
  options: ChoiceOption[];
};

export type ScaleQuestion = {
  id: string;
  kind: "scale";
  title: string;
};

export type TextQuestion = {
  id: string;
  kind: "text";
  title: string;
  microcopy: string;
};

export type Question = ChoiceQuestion | ScaleQuestion | TextQuestion;

export interface Screen {
  title: string;
  questions: Question[];
}

export const SCREENS: Screen[] = [
  {
    title: "Photographie rapide",
    questions: [
      {
        id: "q1",
        kind: "choice",
        title: "Combien de personnes travaillent aujourd'hui dans l'entreprise, vous inclus ?",
        options: [
          { value: "1", label: "1 (vous seul)" },
          { value: "2_3", label: "2 à 3" },
          { value: "4_10", label: "4 à 10" },
          { value: "11_30", label: "11 à 30" },
          { value: "30_plus", label: "Plus de 30" },
        ],
      },
      {
        id: "q2",
        kind: "choice",
        title: "Quel est votre chiffre d'affaires annuel approximatif ?",
        options: [
          { value: "lt_100", label: "Moins de 100 k€" },
          { value: "100_300", label: "100 k€ à 300 k€" },
          { value: "300_750", label: "300 k€ à 750 k€" },
          { value: "750_1500", label: "750 k€ à 1,5 M€" },
          { value: "gt_1500", label: "Plus de 1,5 M€" },
        ],
      },
    ],
  },
  {
    title: "Contexte stratégique",
    questions: [
      {
        id: "q3",
        kind: "choice",
        title: "Quel est votre secteur principal ?",
        options: [
          { value: "services_b2b", label: "Services B2B" },
          { value: "commerce", label: "Commerce / retail" },
          { value: "artisanat", label: "Artisanat / bâtiment" },
          { value: "sante", label: "Santé / bien-être" },
          { value: "conseil", label: "Conseil / expertise" },
          { value: "industrie", label: "Industrie / production" },
          { value: "digital", label: "Digital / tech" },
          { value: "autre", label: "Autre" },
        ],
      },
      {
        id: "q4",
        kind: "choice",
        title: "Quel est votre objectif principal aujourd'hui ?",
        options: [
          { value: "croissance", label: "Croissance" },
          { value: "rentabilite", label: "Rentabilité" },
          { value: "organisation", label: "Organisation" },
          { value: "recrutement", label: "Recrutement" },
          { value: "temps", label: "Temps du dirigeant" },
          { value: "transmission", label: "Transmission" },
          { value: "autre", label: "Autre" },
        ],
      },
    ],
  },
  {
    title: "Votre rôle actuel",
    questions: [
      {
        id: "q5",
        kind: "choice",
        title: "Aujourd'hui, votre rôle principal ressemble plutôt à :",
        options: [
          { value: "produire", label: "Produire ou vendre moi-même" },
          { value: "coordonner", label: "Coordonner l'équipe et répondre aux demandes" },
          { value: "arbitrer", label: "Arbitrer, décider et débloquer" },
          { value: "structurer", label: "Structurer l'entreprise pour qu'elle fonctionne mieux" },
          { value: "piloter", label: "Piloter la stratégie et le développement" },
        ],
      },
    ],
  },
  {
    title: "Symptômes observés",
    questions: [
      { id: "q6", kind: "scale", title: "Les décisions importantes remontent souvent jusqu'à moi." },
      {
        id: "q7",
        kind: "scale",
        title: "Je manque de temps pour travailler sur l'entreprise plutôt que dans l'entreprise.",
      },
      { id: "q8", kind: "scale", title: "Mon équipe manque d'autonomie sur les sujets importants." },
      {
        id: "q9",
        kind: "scale",
        title: "Nous sommes souvent dans l'urgence, avec des problèmes qui reviennent régulièrement.",
      },
      {
        id: "q10",
        kind: "scale",
        title: "L'activité dépend encore trop de ma présence ou de mon expertise.",
      },
      { id: "q11", kind: "scale", title: "La croissance actuelle crée plus de pression que de fluidité." },
      { id: "q12", kind: "scale", title: "Les responsabilités ne sont pas toujours assez claires." },
    ],
  },
  {
    title: "Quand un problème apparaît",
    questions: [
      {
        id: "q13",
        kind: "choice",
        title: "Quand un problème important apparaît, que se passe-t-il le plus souvent ?",
        options: [
          { value: "decide_seule", label: "L'équipe décide seule" },
          { value: "consulte", label: "L'équipe consulte puis agit" },
          { value: "attend", label: "L'équipe attend ma validation" },
          { value: "tout_remonte", label: "Tout remonte jusqu'à moi" },
        ],
      },
    ],
  },
  {
    title: "Test d'absence",
    questions: [
      {
        id: "q14",
        kind: "choice",
        title: "Si vous partez 3 semaines sans téléphone, qu'est-ce qui vous inquiète le plus ?",
        options: [
          { value: "qualite", label: "Qualité" },
          { value: "ventes", label: "Ventes" },
          { value: "equipe", label: "Équipe" },
          { value: "clients", label: "Clients" },
          { value: "decisions", label: "Décisions" },
          { value: "tresorerie", label: "Trésorerie" },
          { value: "rien", label: "Rien" },
        ],
      },
    ],
  },
  {
    title: "Passage au niveau suivant",
    questions: [
      {
        id: "q15",
        kind: "choice",
        title: "Aujourd'hui, qu'est-ce qui limite le plus le passage au niveau suivant ?",
        options: [
          { value: "temps", label: "Mon temps disponible" },
          { value: "visibilite", label: "Le manque de visibilité commerciale" },
          { value: "structure", label: "La structure de l'entreprise" },
          { value: "management", label: "Le management de l'équipe" },
          { value: "processus", label: "Les processus ou méthodes de travail" },
          { value: "recrutement", label: "Le recrutement" },
          { value: "priorites", label: "Le manque de clarté sur les priorités" },
        ],
      },
    ],
  },
  {
    title: "La décision miroir",
    questions: [
      {
        id: "q16",
        kind: "text",
        title: "Quelle décision savez-vous devoir prendre mais continuez à repousser ?",
        microcopy:
          "Exemple : recruter, déléguer un sujet, arrêter une offre, clarifier un rôle, recadrer une personne, changer d'organisation.",
      },
    ],
  },
  {
    title: "Le coût du statu quo",
    questions: [
      {
        id: "q17",
        kind: "text",
        title: "Quel sera le coût si rien ne change dans 12 mois ?",
        microcopy:
          "Répondez simplement. Temps, énergie, marge, clients, équipe, croissance, fatigue, opportunités perdues…",
      },
    ],
  },
];

export interface AnswerMap {
  [key: string]: string | number;
}

export function isScreenComplete(screen: Screen, answers: AnswerMap): boolean {
  return screen.questions.every((q) => {
    const v = answers[q.id];
    if (q.kind === "scale") return typeof v === "number";
    if (q.kind === "text") return typeof v === "string" && v.trim().length > 0;
    return typeof v === "string" && v.length > 0;
  });
}
