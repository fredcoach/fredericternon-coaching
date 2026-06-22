## Brancher les 2 CTA sur Calendly + page de confirmation dédiée

### 1. Nouvelle page de confirmation générique
Créer `src/pages/RdvConfirmation.tsx` — clone adapté de `CartographieConfirmation.tsx`, sans les références à la Cartographie :
- Titre : « Votre rendez-vous est confirmé. »
- Suppression du bloc « Votre Cartographie a identifié un blocage principal »
- Bloc « En attendant notre rendez-vous » conservé (relisez vos notes / décision repoussée / questions clés)
- Encadré objectif de l'échange (« identifier la priorité qui mérite votre attention maintenant »)
- Citation conservée
- CTA bas de page : retour à l'accueil Alpha PME (au lieu de retour Cartographie)

Route ajoutée dans `src/App.tsx` : `/rendez-vous/confirmation` → `<RdvConfirmation />`.

### 2. Brancher les 2 CTA sur Calendly
Les deux boutons concernés ouvrent actuellement une ancre interne (`#final-cta`). Les faire pointer vers Calendly (`https://calendly.com/ternon/alpha-pme`) en ouvrant dans un nouvel onglet :

- **`src/components/landing/Navigation.tsx`** (lignes 132-137 desktop + 189-194 mobile) — bouton « 30 min pour échanger » → `<a href="https://calendly.com/ternon/alpha-pme" target="_blank" rel="noopener noreferrer">`
- **`src/components/landing/OfferSection.tsx`** (lignes 157-164) — bouton « Réserver un échange informatif » → idem

Le bouton « Réserver un échange informatif » de `EntryProductsTeaser.tsx` pointe déjà vers Calendly — pas de changement.

### 3. Redirection post-réservation vers la nouvelle page
Ajouter `?redirect_url=https://alphadirigeant.solutions/rendez-vous/confirmation` aux URL Calendly des 2 CTA.

> ⚠️ Important : Calendly n'utilise ce paramètre que si la **redirection personnalisée est activée dans les paramètres de l'événement** côté Calendly (Event Type → Confirmation Page → Redirect to external site, plan payant requis). Si ce n'est pas activé, Calendly affiche sa page de confirmation native et ignore le paramètre. Action manuelle à faire dans le back-office Calendly une fois la page en ligne.

### Récap fichiers
- ➕ `src/pages/RdvConfirmation.tsx`
- ✏️ `src/App.tsx` (route)
- ✏️ `src/components/landing/Navigation.tsx`
- ✏️ `src/components/landing/OfferSection.tsx`
