## Objectif

Remplacer le poster photo généré par erreur pour François par une **vignette graphique** identique au style de celle de Laurent : fond bleu marine profond, ornements dorés (rayon lumineux, lignes géométriques fines, losanges), prénom "François" en grandes capitales serif dorées, sous-titre en petites capitales espacées "INFORMATIQUE · SERVICES AUX ENTREPRISES", séparateur doré.

## Étapes

1. **Lire le poster de Laurent** (`src/assets/laurent-poster.jpg`) pour confirmer la composition exacte (rayon de lumière en haut, lignes dorées en losange, typographie serif dorée, sous-titre tracking large).

2. **Générer la vignette François** via `imagegen--edit_image` en passant `laurent-poster.jpg` comme référence de style, avec un prompt qui demande de **conserver intégralement la composition, le fond bleu marine, les ornements dorés et la typographie**, en ne changeant que :
   - le prénom : `François`
   - le sous-titre : `INFORMATIQUE · SERVICES AUX ENTREPRISES`
   - Aspect ratio `9:16`, sauvegarde dans `src/assets/francois-poster.jpg` (écrase l'actuelle photo).

3. **Vérification visuelle** du résultat (cohérence avec Laurent : même fond, même or, même rayon, même losange, accents corrects sur "François", sous-titre lisible et bien orthographié).

## Hors scope

- Aucun changement de code dans `BeforeAfterSection.tsx` (l'import et le caption `text-accent` restent en place).
- Pas de modification du poster de Laurent.
