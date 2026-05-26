Auditer et remplacer tous les tirets longs (em dash —) du projet par des formulations plus naturelles, moins marquées "IA".

## Problème
Les tirets longs sont utilisés comme séparateurs dans ~23 fichiers (composants landing, pages, articles de blog, mentions légales, etc.). Ce usage systématique donne une impression de texte généré par IA.

## Règles de remplacement par contexte

| Contexte | Remplacement |
|----------|-------------|
| Titre de page / balise meta (ex: "Frédéric Ternon — Pilotage") | Pipe `\|` |
| Séparation de clauses dans une phrase (ex: "tourne — mais") | Point `. ` ou virgule `, ` selon le rythme |
| Liste structurée (ex: "Bloc 1 — Diagnostic") | Deux-points ` : ` |
| Description courte après énumération (ex: "Recul, énergie — comment...") | Point `. ` ou ` : ` |
| Sous-titre / fonction (ex: "Directeur Général — CEO") | Virgule `, ` ou pipe `\|` |
| Articles de blog (ex: "<strong>Reconnaître</strong> — On identifie") | ` : ` ou point selon le flux |
| Nom + qualité (ex: "Mahel Boyer — Joueur Pro") | Virgule `, ` |
| Commentaires JSX (`{/* Left — visual */}`) | Tiret simple `-` ou deux-points `:` |

## Fichiers concernés
- `src/pages/Index.tsx`
- `src/pages/MentionsLegales.tsx`
- `src/pages/PolitiqueConfidentialite.tsx`
- `src/components/DiagnosticPopup.tsx`
- `src/components/diagnostic/*` (3 fichiers)
- `src/components/landing/*` (16 fichiers : AboutSection, DiagnosticTeaser, FAQSection, Footer, JourneySection, LinkedInRecommendationsSection, Method3RSection, MyRoleSection, OfferSection, PainPointsSection, PromiseSection, SituationsSection, TargetAudienceSection, TestimonialsSection, TripleCTASection)
- `src/data/blogArticles.ts`
- `index.html`

## Méthode
1. Lire chaque fichier en parallèle par lots de 6-8.
2. Appliquer les remplacements contextuels ligne par ligne avec `line_replace`.
3. Vérifier la cohérence du ton après chaque lot (pas de cassure de rythme).
4. Lancer le build pour valider qu'aucun fichier n'est corrompu.