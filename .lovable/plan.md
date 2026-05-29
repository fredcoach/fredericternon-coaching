## Objectif

Recompléter le funnel de la home en réintégrant les blocs critiques manquants, sans ressortir Mahel ni les WhatsApp actuels. Passage de 11 → 14 sections, avec un bloc témoignages **prêt à recevoir** les 2 nouvelles vidéos + 3 nouveaux WhatsApp à venir.

## Nouvel ordre des sections (src/pages/Index.tsx)

```
1.  Hero
2.  Julien (témoignage narratif long)
3.  Reality Check
4.  Problème / Solution
5.  Promesse
6.  Méthode 3R
7.  Différenciateurs                    ← RÉINTÉGRÉ
8.  About Me
9.  Témoignages vidéo + WhatsApp        ← NOUVEAU bloc, vide tant que les assets n'arrivent pas
10. Offre
11. Teaser Diagnostic / Flash Decision  ← NOUVEAU bloc 2 cards
12. LinkedIn Recommendations
13. FAQ
14. Final CTA
```

## Bloc 1 — Différenciateurs

- Réinsérer `<DifferentiatorsSection />` (composant existant, intact).
- Position : juste après Méthode 3R, avant About Me. Répond au "pourquoi vous plutôt qu'un autre".
- Aucune modif du composant.

## Bloc 2 — Nouvelle section Témoignages (sans Mahel ni WhatsApp actuels)

- **Ne pas réinsérer** `TestimonialsSection.tsx` existant (contient Mahel + Marie/Estelle/Fatima → non souhaité).
- Créer un **nouveau composant** `src/components/landing/ClientVoicesSection.tsx`, basé sur la même structure visuelle (header, vidéo featured, carousel WhatsApp, CTA), mais avec des tableaux **vides** prêts à recevoir :
  - `featuredVideos: []` → accueillera les 2 nouvelles vidéos (layout 1 colonne si 1 vidéo, grille 2 colonnes desktop si 2 vidéos)
  - `whatsappTestimonials: []` → accueillera les 3 nouveaux screenshots WhatsApp (mêmes specs visuelles : header WhatsApp, screenshot, caption courte)
- **Tant que les 2 tableaux sont vides** : la section ne s'affiche pas (early return `null`) → aucune zone vide visible en preview.
- Dès que tu fournis les assets, il suffira :
  1. de déposer les `.mp4` + thumbnails dans `src/assets/` (ou `/public/videos/`)
  2. d'ajouter 2 objets dans `featuredVideos` et 3 dans `whatsappTestimonials`
  3. la section apparaîtra automatiquement à la bonne position
- Position dans Index : entre About Me et Offre.

## Bloc 3 — Teaser Diagnostic / Flash Decision

- Créer `src/components/landing/EntryProductsTeaser.tsx` : 2 cards côte à côte
  1. **Diagnostic 10 min** — gratuit, identifier ce qui bloque → CTA `/diagnostic`
  2. **Flash Decision 1h — 350€** — débloquer une décision qui traîne → CTA `/flash-decision`
- Design : cards premium, icône + titre + bénéfice + prix/durée + CTA, hover-lift bronze froid.
- Mini-baseline au-dessus : "Pas encore prêt pour un accompagnement long ? Deux portes d'entrée."
- Position : après Offre principale, avant LinkedIn.
- L'ancien `DiagnosticTeaser.tsx` reste en place (utilisé ailleurs ? à vérifier au build, sinon ignoré).

## Fichiers touchés

- `src/pages/Index.tsx` — ajouter 3 imports, insérer 3 sections aux bonnes positions
- `src/components/landing/ClientVoicesSection.tsx` — **nouveau**, vide jusqu'à réception des assets
- `src/components/landing/EntryProductsTeaser.tsx` — **nouveau**, 2 cards
- Aucune modification de `TestimonialsSection.tsx` existant (laissé tel quel, non utilisé sur la home)

## Hors scope

- Pas de modification de la palette
- Pas de retouche aux autres composants existants
- Pas de modif SEO/Helmet
- Pas de réutilisation de Mahel ni des WhatsApp Marie/Estelle/Fatima

## Validation post-build

- Scroll complet desktop (1003px) + mobile (<768px)
- Vérifier que la nouvelle section témoignages **n'apparaît pas** tant qu'on n'a pas d'assets (pas de bloc vide)
- Vérifier les 2 CTA du teaser → `/diagnostic` et `/flash-decision`
- Différenciateurs bien rendu après Méthode 3R, hover bronze OK
- Pas de double CTA Calendly trop rapproché
