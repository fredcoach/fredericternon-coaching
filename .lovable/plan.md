
## Objectif
Créer une page sobre `/grille` avec téléchargement direct du PDF, dans le style du site (marine + or, serif). Pas de formulaire, pas de popup.

## Assets à uploader
- PDF → `public/Grille_de_Clarification_Alpha_PME.pdf` (servi en direct pour téléchargement immédiat).
- Vignette carrée → asset Lovable CDN (`src/assets/vignette-grille.png.asset.json`) pour og:image.

## Nouveau fichier : `src/pages/Grille.tsx`
Structure (une seule colonne, style cohérent avec `FlashDecision` / `CartographieLanding`) :

1. **Navigation** (composant existant `<Navigation />`).
2. **Hero** — fond marine + halo doré léger :
   - Sur-titre chip doré `DIRIGEANTS DE TPE/PME`
   - H1 serif : « La Grille de Clarification »
   - Sous-titre : « Où votre entreprise repose-t-elle encore trop sur vous ? »
   - Paragraphe d'intro
   - Ligne d'infos avec icônes lucide (`Clock`, `CheckSquare`, `FileText`) : 5 min · 4 zones · PDF à télécharger
   - Bouton or `<a href="/Grille_de_Clarification_Alpha_PME.pdf" download>` « Télécharger la grille (PDF) » + tracking simple (`plausible`/dataLayer si présent, sinon aucun) → **on n'ajoute pas d'analytics custom** (respect du brief : « événement simple » = simple onClick log, laissé au tracking natif du site).
3. **Section 2 — Quatre zones, une lecture** : intro + 4 cartes (icône or, titre serif, description) selon le brief.
4. **Encadré règle** : bandeau marine profond, texte or centré, « À partir de 3 cases cochées dans une même zone… ».
5. **Section 3 — Le point de départ, pas la conclusion** : bloc de texte serif/ivoire structuré (3 paragraphes).
6. **Section 4 — CTA final** :
   - H2 « Et une fois la grille remplie ? »
   - Texte
   - 2 boutons côte à côte : primaire or → Calendly ; secondaire contour → LinkedIn
   - Micro-texte sous les boutons
7. **Footer** existant.
8. **PAS** de `FloatingCTA`, `DiagnosticPopup`, `FlashDecisionPopup` sur cette page (respect du brief « outil, pas landing »). Comme les popups sont montés dans `App.tsx` globalement, on ne les rend pas ici mais ils resteront présents. → Ajuster leur logique d'exclusion ou masquer via prop route ? Solution la plus légère : ajouter la route `/grille` dans les listes d'exclusion existantes de `FlashDecisionPopup` (et `DiagnosticPopup` si utilisé). À vérifier au build.

## SEO (Helmet)
- `<title>` : « La Grille de Clarification — Frédéric Ternon | Alpha PME »
- meta description : celle du brief
- canonical : `https://alphadirigeant.solutions/grille`
- og:title, og:description, og:url, og:type=article, og:image = URL CDN de la vignette
- twitter:card=summary_large_image + twitter:image
- JSON-LD `CreativeWork` léger (title, description, url)

## Routing — `src/App.tsx`
Ajouter :
```tsx
import Grille from "./pages/Grille";
<Route path="/grille" element={<Grille />} />
```
au-dessus du catch-all.

## Ressources — `src/pages/Ressources.tsx`
Ajouter une carte « La Grille de Clarification » (sobre, cohérente avec les autres cartes) qui pointe vers `/grille`.

## Sitemap
Ajouter `<url><loc>https://alphadirigeant.solutions/grille</loc></url>` dans `public/sitemap.xml`.

## Ce qu'on NE fait PAS
- Pas de menu principal (juste Ressources).
- Pas de formulaire, capture email, pop-up, compte à rebours, témoignages sur `/grille`.
- Pas d'analytics custom : téléchargement direct suffit ; le suivi natif du site reste actif.
