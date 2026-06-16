// Pure scoring + interpretation + restitution logic for Cartographie des Blocages.
// Deterministic. No side effects. Tested via direct invocation.

export type BlocageKey =
  | "dependance_dirigeant"
  | "organisation_sous_tension"
  | "management_autonomie"
  | "clarte_strategique";

export type PalierKey = "palier_1" | "palier_2" | "palier_3" | "palier_4";

export interface Answers {
  q1: string; // size
  q2: string; // CA
  q3: string; // secteur
  q4: string; // objectif
  q5: string; // role
  q6: number; // 0-5
  q7: number;
  q8: number;
  q9: number;
  q10: number;
  q11: number;
  q12: number;
  q13: string;
  q14: string;
  q15: string;
  q16: string; // texte
  q17: string; // texte
}

export interface Scores {
  dependance_dirigeant: number;
  organisation_sous_tension: number;
  management_autonomie: number;
  clarte_strategique: number;
  decision: number;
  croissance: number;
  palier_1: number;
  palier_2: number;
  palier_3: number;
  palier_4: number;
  maturite: number;
}

const emptyScores = (): Scores => ({
  dependance_dirigeant: 0,
  organisation_sous_tension: 0,
  management_autonomie: 0,
  clarte_strategique: 0,
  decision: 0,
  croissance: 0,
  palier_1: 0,
  palier_2: 0,
  palier_3: 0,
  palier_4: 0,
  maturite: 0,
});

export function computeScores(a: Answers): Scores {
  const s = emptyScores();

  // Q5 - Rôle actuel
  switch (a.q5) {
    case "produire":
      s.palier_1 += 2;
      s.dependance_dirigeant += 2;
      break;
    case "coordonner":
      s.palier_2 += 2;
      s.dependance_dirigeant += 1;
      break;
    case "arbitrer":
      s.palier_2 += 2;
      s.decision += 1;
      s.dependance_dirigeant += 1;
      break;
    case "structurer":
      s.palier_3 += 2;
      s.organisation_sous_tension += 1;
      break;
    case "piloter":
      s.palier_4 += 2;
      s.clarte_strategique += 1;
      break;
  }

  // Q6 — décisions remontent
  s.dependance_dirigeant += a.q6;
  s.decision += a.q6;

  // Q7 — manque temps
  s.dependance_dirigeant += a.q7;
  s.croissance += a.q7 * 0.5;

  // Q8 — équipe manque autonomie
  s.management_autonomie += a.q8;

  // Q9 — urgences
  s.organisation_sous_tension += a.q9;

  // Q10 — dépend de présence
  s.dependance_dirigeant += a.q10;

  // Q11 — croissance crée pression
  s.organisation_sous_tension += a.q11;
  s.croissance += a.q11;

  // Q12 — responsabilités floues
  s.management_autonomie += a.q12;
  s.organisation_sous_tension += a.q12 * 0.5;

  // Q13 - Problème important
  switch (a.q13) {
    case "decide_seule":
      s.maturite += 2;
      break;
    case "consulte":
      s.management_autonomie += 1;
      s.palier_3 += 1;
      break;
    case "attend":
      s.dependance_dirigeant += 3;
      s.decision += 2;
      s.palier_2 += 2;
      break;
    case "tout_remonte":
      s.dependance_dirigeant += 4;
      s.management_autonomie += 1;
      s.decision += 2;
      s.palier_1 += 2;
      break;
  }

  // Q14 - Absence 3 semaines
  switch (a.q14) {
    case "qualite":
      s.organisation_sous_tension += 3;
      s.palier_3 += 1;
      break;
    case "ventes":
      s.dependance_dirigeant += 2;
      s.croissance += 2;
      s.palier_1 += 1;
      break;
    case "equipe":
      s.management_autonomie += 3;
      s.palier_2 += 1;
      break;
    case "clients":
      s.organisation_sous_tension += 2;
      s.management_autonomie += 1;
      s.palier_2 += 1;
      break;
    case "decisions":
      s.dependance_dirigeant += 3;
      s.decision += 2;
      s.palier_2 += 1;
      break;
    case "tresorerie":
      s.clarte_strategique += 2;
      s.croissance += 2;
      break;
    case "rien":
      s.maturite += 3;
      s.palier_4 += 2;
      break;
  }

  // Q15 - Passage niveau suivant
  switch (a.q15) {
    case "temps":
      s.dependance_dirigeant += 4;
      s.croissance += 1;
      break;
    case "visibilite":
      s.clarte_strategique += 2;
      s.croissance += 3;
      break;
    case "structure":
      s.organisation_sous_tension += 4;
      break;
    case "management":
      s.management_autonomie += 4;
      break;
    case "processus":
      s.organisation_sous_tension += 4;
      break;
    case "recrutement":
      s.management_autonomie += 2;
      s.croissance += 3;
      break;
    case "priorites":
      s.clarte_strategique += 4;
      s.decision += 1;
      break;
  }

  return s;
}

// ----- Interpretation -----

const BLOCAGE_KEYS: BlocageKey[] = [
  "dependance_dirigeant",
  "organisation_sous_tension",
  "management_autonomie",
  "clarte_strategique",
];

const PALIER_KEYS: PalierKey[] = ["palier_1", "palier_2", "palier_3", "palier_4"];

function argmax<T extends string>(keys: T[], scores: Record<string, number>): T {
  let best = keys[0];
  for (const k of keys) {
    if (scores[k] > scores[best]) best = k;
  }
  return best;
}

export interface Interpretation {
  blocagePrincipal: BlocageKey;
  blocageSecondaire: BlocageKey | null;
  palier: PalierKey;
  sousSignalDecision: boolean;
  sousSignalCroissance: boolean;
}

export function interpret(scores: Scores, a: Answers): Interpretation {
  // Blocage principal
  const blocagePrincipal = argmax(BLOCAGE_KEYS, scores as unknown as Record<string, number>);

  // Blocage secondaire : >= 85% du principal, différent
  const mainScore = scores[blocagePrincipal];
  let blocageSecondaire: BlocageKey | null = null;
  if (mainScore > 0) {
    const sorted = [...BLOCAGE_KEYS]
      .filter((k) => k !== blocagePrincipal)
      .sort((x, y) => scores[y] - scores[x]);
    const candidate = sorted[0];
    if (candidate && scores[candidate] / mainScore >= 0.85) {
      blocageSecondaire = candidate;
    }
  }

  // Palier - argmax + overrides
  let palier = argmax(PALIER_KEYS, scores as unknown as Record<string, number>);

  // Override : dirigeant seul → pas de palier 4
  if (a.q1 === "1" && palier === "palier_4") {
    palier = "palier_1";
  }
  // Override : "tout remonte" + dépendance forte → palier 1
  if (a.q13 === "tout_remonte" && scores.dependance_dirigeant >= 8) {
    palier = "palier_1";
  }
  // Override : "rien" + dépendance faible → palier 4
  if (a.q14 === "rien" && scores.dependance_dirigeant <= 4) {
    palier = "palier_4";
  }

  // Sous-signaux : seuils calibrés
  const sousSignalDecision = scores.decision >= 5;
  const sousSignalCroissance = scores.croissance >= 5;

  return {
    blocagePrincipal,
    blocageSecondaire,
    palier,
    sousSignalDecision,
    sousSignalCroissance,
  };
}

// ----- Restitution texts (spec §11, §12, §13) -----

const BLOCAGE_TITRES: Record<BlocageKey, string> = {
  dependance_dirigeant: "Dépendance au dirigeant",
  organisation_sous_tension: "Organisation sous tension",
  management_autonomie: "Management & autonomie de l'équipe",
  clarte_strategique: "Clarté stratégique & passage de palier",
};

const PALIER_TITRES: Record<PalierKey, string> = {
  palier_1: "Tout repose encore sur le dirigeant",
  palier_2: "L'équipe existe mais tout remonte encore",
  palier_3: "L'entreprise fonctionne mais reste sous tension",
  palier_4: "L'entreprise devient pilotable",
};

const PALIER_PHRASES: Record<PalierKey, string> = {
  palier_1:
    "Votre entreprise semble aujourd'hui bloquée entre le palier où tout repose encore sur vous et le palier où l'équipe commence à porter davantage le quotidien.",
  palier_2:
    "Votre entreprise semble aujourd'hui bloquée entre le palier où l'équipe existe et le palier où elle devient réellement autonome sur une partie du fonctionnement.",
  palier_3:
    "Votre entreprise semble aujourd'hui bloquée entre le palier où elle fonctionne grâce à l'effort collectif et le palier où elle peut absorber davantage d'activité sans se tendre davantage.",
  palier_4:
    "Votre entreprise semble proche du palier où elle devient réellement pilotable, mais un blocage limite encore votre capacité à prendre de la hauteur et à préparer le prochain cap.",
};

const PALIER_A_CIBLER: Record<PalierKey, { titre: string; phrase: string }> = {
  palier_1: {
    titre: "Le palier à franchir : faire porter une partie du fonctionnement par l'équipe",
    phrase:
      "Passer de « l'entreprise avance parce que le dirigeant compense » à « l'équipe commence à porter une partie réelle du fonctionnement ».",
  },
  palier_2: {
    titre: "Le palier à franchir : autonomie réelle de l'équipe",
    phrase:
      "Passer de « l'équipe exécute mais dépend de vous » à « l'équipe devient capable de décider, prioriser et résoudre une partie des sujets sans vous ».",
  },
  palier_3: {
    titre: "Le palier à franchir : passer de l'effort à la fluidité",
    phrase:
      "Passer de « l'entreprise fonctionne grâce à beaucoup d'efforts » à « l'entreprise fonctionne avec plus de structure, de pilotage et de fluidité ».",
  },
  palier_4: {
    titre: "Le palier à franchir : entreprise pleinement pilotable",
    phrase:
      "Passer de « l'entreprise fonctionne sans dépendance quotidienne excessive » à « l'entreprise devient plus lisible, plus pilotable et plus capable de franchir un nouveau cap ».",
  },
};

interface BlocageTexte {
  explication: string;
  produitAujourdhui: string[];
  coutSiRienNeChange: string;
  vraiProblemeVsFaux: string;
  priorite: string;
}

const BLOCAGES_TEXTES: Record<BlocageKey, BlocageTexte> = {
  dependance_dirigeant: {
    explication:
      "Votre entreprise semble encore utiliser votre temps, votre présence ou vos décisions comme point de passage principal. Ce fonctionnement a probablement permis d'avancer jusqu'ici, mais il limite maintenant l'autonomie de l'entreprise.",
    produitAujourdhui: [
      "Les décisions remontent souvent jusqu'à vous.",
      "Votre temps stratégique est fragmenté.",
      "L'entreprise avance difficilement sans votre intervention.",
    ],
    coutSiRienNeChange:
      "Si rien ne change, la croissance risque d'augmenter votre charge personnelle au lieu d'augmenter l'autonomie de l'entreprise.",
    vraiProblemeVsFaux:
      "Vous pensez peut-être manquer de temps. Mais votre Cartographie suggère que le manque de temps est probablement une conséquence. Le vrai sujet semble être que trop de décisions, d'arbitrages ou de sujets importants passent encore par vous.",
    priorite:
      "Identifier les points de passage obligatoires par le dirigeant et en sortir un en priorité dans les 90 prochains jours.",
  },
  organisation_sous_tension: {
    explication:
      "Votre entreprise fonctionne, mais son organisation absorbe difficilement le niveau actuel d'activité, de complexité ou de croissance. Le sujet n'est pas forcément de travailler davantage, mais de rendre le fonctionnement plus stable.",
    produitAujourdhui: [
      "Les urgences prennent trop de place.",
      "Les mêmes problèmes reviennent.",
      "La croissance crée plus de pression que de fluidité.",
    ],
    coutSiRienNeChange:
      "Si rien ne change, chaque nouveau client, projet ou recrutement risque d'ajouter davantage de friction au lieu de créer plus de liberté.",
    vraiProblemeVsFaux:
      "Vous pensez peut-être devoir travailler plus vite, recruter ou ajouter plus d'outils. Mais votre Cartographie suggère que le sujet prioritaire est ailleurs : votre organisation absorbe difficilement le niveau actuel d'activité. Avant d'ajouter du volume, il faut probablement stabiliser ce qui crée déjà de la tension.",
    priorite: "Stabiliser le fonctionnement avant d'ajouter davantage de volume.",
  },
  management_autonomie: {
    explication:
      "Votre équipe est présente, mais elle ne porte pas encore suffisamment les responsabilités, les décisions ou les résultats attendus. Le sujet prioritaire est probablement le niveau d'autonomie réel, pas seulement la taille de l'équipe.",
    produitAujourdhui: [
      "L'équipe consulte ou attend trop souvent.",
      "Les responsabilités restent floues.",
      "Recruter ne réduit pas forcément votre charge.",
    ],
    coutSiRienNeChange:
      "Si rien ne change, vous pouvez continuer à ajouter des personnes sans réduire réellement la dépendance de l'entreprise à votre présence.",
    vraiProblemeVsFaux:
      "Vous pensez peut-être que le problème principal est le recrutement ou le niveau de l'équipe. Mais votre Cartographie suggère que le sujet prioritaire est davantage la répartition des responsabilités, des décisions et du niveau d'autonomie attendu. Recruter plus ne libérera pas forcément le dirigeant si les responsabilités restent mal portées.",
    priorite:
      "Clarifier qui porte quoi, avec quel niveau d'autonomie et quel résultat attendu.",
  },
  clarte_strategique: {
    explication:
      "Votre entreprise est active, mais le prochain palier, les priorités ou les arbitrages nécessaires ne semblent pas encore suffisamment clairs. Le sujet prioritaire est de clarifier ce qui doit être décidé, renforcé ou arrêté maintenant.",
    produitAujourdhui: [
      "Les priorités peuvent manquer de stabilité.",
      "Certaines décisions restent en attente.",
      "L'entreprise avance, mais sans franchir clairement le cap suivant.",
    ],
    coutSiRienNeChange:
      "Si rien ne change, l'entreprise risque de rester active mais dispersée, avec beaucoup d'efforts sans progression nette vers le prochain palier.",
    vraiProblemeVsFaux:
      "Vous pensez peut-être que le problème est la croissance, la motivation ou le manque d'opportunités. Mais votre Cartographie suggère que le vrai sujet est peut-être la clarté du prochain palier : quoi prioriser, quoi arrêter, quoi décider maintenant. Sans cette clarté, l'entreprise peut rester active sans réellement franchir un cap.",
    priorite:
      "Clarifier le prochain palier et les arbitrages nécessaires pour l'atteindre.",
  },
};

const SOUS_SIGNAL_DECISION_PHRASE =
  "Le blocage se manifeste surtout par des décisions qui remontent, se repoussent ou restent trop longtemps en attente.";
const SOUS_SIGNAL_CROISSANCE_PHRASE =
  "Le sujet n'est pas seulement de faire plus de croissance, mais de rendre l'entreprise capable de l'absorber.";

export interface RestitutionResult {
  palier: {
    key: PalierKey;
    titre: string;
    phrase: string;
  };
  palierACibler: {
    titre: string;
    phrase: string;
  };
  blocagePrincipal: {
    key: BlocageKey;
    titre: string;
    explication: string;
    produitAujourdhui: string[];
    coutSiRienNeChange: string;
    vraiProblemeVsFaux: string;
  };
  blocageSecondaire: null | {
    key: BlocageKey;
    titre: string;
    texte: string;
  };
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

export function buildRestitution(a: Answers): {
  scores: Scores;
  interpretation: Interpretation;
  result: RestitutionResult;
} {
  const scores = computeScores(a);
  const interpretation = interpret(scores, a);

  const bpKey = interpretation.blocagePrincipal;
  const bpTexte = BLOCAGES_TEXTES[bpKey];

  const result: RestitutionResult = {
    palier: {
      key: interpretation.palier,
      titre: PALIER_TITRES[interpretation.palier],
      phrase: PALIER_PHRASES[interpretation.palier],
    },
    palierACibler: PALIER_A_CIBLER[interpretation.palier],
    blocagePrincipal: {
      key: bpKey,
      titre: BLOCAGE_TITRES[bpKey],
      explication: bpTexte.explication,
      produitAujourdhui: bpTexte.produitAujourdhui,
      coutSiRienNeChange: bpTexte.coutSiRienNeChange,
      vraiProblemeVsFaux: bpTexte.vraiProblemeVsFaux,
    },
    blocageSecondaire: interpretation.blocageSecondaire
      ? {
          key: interpretation.blocageSecondaire,
          titre: BLOCAGE_TITRES[interpretation.blocageSecondaire],
          texte: `Votre blocage principal reste « ${BLOCAGE_TITRES[bpKey]} ». Mais un second signal apparaît : « ${BLOCAGE_TITRES[interpretation.blocageSecondaire]} ». Il ne change pas la priorité, mais il explique pourquoi la situation peut sembler plus complexe au quotidien.`,
        }
      : null,
    sousSignalDecisionPhrase: interpretation.sousSignalDecision
      ? SOUS_SIGNAL_DECISION_PHRASE
      : null,
    sousSignalCroissancePhrase: interpretation.sousSignalCroissance
      ? SOUS_SIGNAL_CROISSANCE_PHRASE
      : null,
    prioriteUnique: bpTexte.priorite,
    callPrep: {
      palier: PALIER_TITRES[interpretation.palier],
      blocage: BLOCAGE_TITRES[bpKey],
      priorite: bpTexte.priorite,
      decisionRepoussee: a.q16,
      coutStatuQuo: a.q17,
    },
  };

  return { scores, interpretation, result };
}
