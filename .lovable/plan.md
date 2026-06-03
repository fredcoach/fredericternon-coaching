## Objectif

Remplacer le poster actuel de François par une nouvelle vignette visuellement cohérente avec celle de Laurent (même cadrage, même ambiance, même traitement chromatique), avec le prénom écrit en or comme accent premium.

## Étapes

1. **Analyser le poster de Laurent**
   - Lire `src/assets/laurent-poster.jpg` pour comprendre le cadrage portrait 9/16, la lumière, l'arrière-plan et la palette dominante.

2. **Générer un nouveau poster pour François**
   - Utiliser `imagegen--edit_image` avec `laurent-poster.jpg` en référence de style, prompt : portrait d'un dirigeant homme (~45-55 ans, profil informatique/services aux entreprises), même cadrage 9/16, même ambiance lumière/arrière-plan que Laurent, ton sobre premium B2B.
   - Sauvegarde : `src/assets/francois-poster.jpg` (écrase l'actuel).
   - Aspect ratio : `9:16`.

3. **Styliser le caption en or**
   - Dans `src/components/landing/BeforeAfterSection.tsx`, modifier le `<figcaption>` de François : passer le prénom "François" en couleur or (`text-accent`) au lieu de `text-foreground`, en conservant la typo serif et la taille actuelle.
   - Laisser le sous-titre "Informatique · Services aux entreprises" en `text-muted-foreground`.

## Détails techniques

- Aucun changement de structure : seul le poster et la classe couleur du prénom changent.
- Le bloc Laurent reste inchangé.
- Pas de modification du `<video>`, des contrôles ni du `preload="none"`.

## Hors scope

- Pas de retouche du poster de Laurent.
- Pas de nouveau composant.
- Pas de changement de la vidéo de François (déjà en place).
