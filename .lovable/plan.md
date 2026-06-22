## Objectif
Faire du **Test gratuit des 4 Profils** l'entrée principale du tunnel sur toute la homepage. Le RDV "Réserver 30 min" reste accessible mais devient secondaire (menu, footer, section Accompagnement uniquement).

## Tunnel cible rappelé
Test gratuit → VSL → Cartographie 97€ → Appel 15 min → Alpha PME

## Changements section par section

### 1. Menu (`Navigation.tsx`) — inchangé
Bouton **"30 min pour échanger"** conservé tel quel (desktop + mobile).

### 2. Hero (`HeroSection.tsx`)
- CTA principal conservé : **"Faire le Test des 4 Profils"** → `/test-profils-alpha-pme`.
- Ajouter juste sous le bouton (remplace le lien "Découvrir l'approche") :
  - Ligne 1 : `Test gratuit • 10 questions • moins de 3 minutes`
  - Ligne 2 (plus discrète) : `Situation actuelle / Ce que vous gagnez`
- Style : petits textes blancs/opacités, centrés, cohérents avec le hero existant.

### 3. PromiseSection (`PromiseSection.tsx`)
- Bouton actuel `"Identifier le vrai point de blocage"` (→ `#final-cta`) remplacé par :
  - **"Découvrir ce qui freine vraiment ma PME"** → `/test-profils-alpha-pme` (Link react-router).
- Suppression du `scrollToFinalCTA`.

### 4. OfferSection (`OfferSection.tsx`) — section Accompagnement
- Bouton **"Réserver un échange informatif"** conservé (calendly via `#final-cta` actuel). C'est l'une des 3 zones autorisées pour le RDV.
- Aucune autre modification.

### 5. EntryProductsTeaser (`EntryProductsTeaser.tsx`)
- Cartes Cartographie 97€ et Flash Decision : inchangées (étapes du tunnel).
- Carte Accompagnement Alpha PME avec CTA Calendly "Réserver un échange informatif" : inchangée (zone Accompagnement autorisée).

### 6. FinalCTASection (`FinalCTASection.tsx`)
- Garder le CTA Test.
- Remplacer la liste de réassurances actuelle (`Gratuit / Moins de 3 minutes / Résultat immédiat`) par les éléments demandés :
  - Ligne principale : `Test gratuit • 10 questions • moins de 3 minutes`
  - Sous-ligne : `Situation actuelle / Ce que vous gagnez`
- Style identique (texte clair sur fond dark, accent or pour les points séparateurs).

### 7. FloatingCTA (`FloatingCTA.tsx`)
- WhatsApp conservé.
- Bouton **"Réserver 30 min" → remplacé** par un bouton test :
  - Label desktop : `Découvrir ce qui freine ma PME`
  - Label mobile : `Faire le test`
  - Lien : `/test-profils-alpha-pme`
  - Style accent or (cohérent avec le CTA Hero).

### 8. Footer (`Footer.tsx`) — inchangé
Bouton **"Réserver un entretien"** (calendly) conservé : c'est l'une des 3 zones autorisées.

## Récapitulatif des CTA après modifs

| Zone | CTA |
|---|---|
| Menu top | Réserver 30 min ✅ |
| Hero | Faire le Test + sous-lignes réassurance |
| PromiseSection | Découvrir ce qui freine vraiment ma PME (→ test) |
| OfferSection (Accompagnement) | Réserver un échange informatif ✅ |
| EntryProductsTeaser | Cartographie / Flash / Échange (inchangé) |
| FinalCTA | Commencer le Test + sous-lignes réassurance |
| FloatingCTA | WhatsApp + Découvrir ce qui freine ma PME (→ test) |
| Footer | Réserver un entretien ✅ |

## Hors scope
- Pas de modification de la structure du tunnel ni des pages `/cartographie-*`, `/flash-decision`, `/test-profils-alpha-pme`.
- Pas de changement de design system ni de palette.
