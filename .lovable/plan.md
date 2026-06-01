# Refonte de la section "Deux portes d'entrée" → "Trois façons de commencer"

## Fichier modifié
- `src/components/landing/EntryProductsTeaser.tsx` (refonte complète du contenu et de la grille)

Aucune autre modification : `Index.tsx` conserve `<EntryProductsTeaser />` à sa place actuelle.

## Nouveau contenu

**En-tête**
- Eyebrow (or) : "Trois façons de commencer"
- H2 : "Tous les dirigeants ne démarrent pas au même endroit."
- Sous-titre (3 phrases courtes) :
  - Certains cherchent à comprendre ce qui freine réellement leur entreprise.
  - D'autres doivent débloquer une décision importante.
  - D'autres encore sont prêts à travailler en profondeur sur leur organisation et leur pilotage.

**3 cartes** (progression Comprendre → Débloquer → Transformer) :

1. **Cartographie des points de blocage** — icône `Map`
   - Eyebrow : "Diagnostic · 10 min"
   - Titre : "Identifier ce qui freine réellement votre PME"
   - Description courte + mini-liste (3 bullets : vision claire, goulots, priorités)
   - Prix : **47 €** · "Accès immédiat"
   - CTA : "Réaliser ma cartographie" → `/diagnostic`

2. **Flash Decision · 1h** — icône `Zap`
   - Eyebrow : "Session · 1h"
   - Titre : "Débloquer une décision qui traîne"
   - Description : une heure dense, décision actée + plan d'action
   - Prix : **350 €** · "Investissement"
   - CTA : "Réserver une session" → `/flash-decision`

3. **Accompagnement Alpha PME** — icône `Rocket` — **carte mise en avant**
   - Eyebrow : "Accompagnement"
   - Titre : "Structurer le prochain palier"
   - Description : organisation, délégation, recrutement, pilotage
   - Objectif : "Construire une entreprise plus autonome, plus fluide, moins dépendante du dirigeant."
   - CTA : "Réserver une session de cadrage" → `https://calendly.com/ternon/alpha-pme` (lien externe)

## Design

- Grille : `grid md:grid-cols-3 gap-6 md:gap-8`, `max-w-6xl`
- Cartes : `bg-card`, `rounded-2xl`, `border border-border`, padding généreux (`p-8 md:p-10`), hover `-translate-y-1` + `shadow-xl` + `border-accent/40`
- **Mise en avant carte 3** : `border-accent/50`, léger `bg-accent/[0.03]`, badge "Recommandé" en haut (chip or), `md:scale-[1.02]` sur desktop, ombre plus prononcée
- Icônes : carré `bg-accent/10`, icône `text-accent`
- Prix : ligne dédiée en bas (label muted + montant `text-2xl font-serif text-foreground`) — carte 3 sans prix, juste l'objectif en italique
- CTAs cohérents : carte 1 & 2 `variant="outline"` accent ; carte 3 `variant="default"` (bouton plein primary/accent)
- Beaucoup de whitespace, palette navy/or existante, pas d'emoji dans le rendu final (les emojis du brief sont représentés par les icônes Lucide)
- Animations existantes via `useScrollAnimation` conservées, délai en cascade sur les 3 cartes

## Hors scope
- Pas de changement de routes ni de pages cibles
- Pas de modification du `TripleCTASection` (autre section similaire plus bas) — à voir séparément si besoin
