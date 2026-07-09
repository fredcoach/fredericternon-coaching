## Plan

### Objectif
Retirer l'entrée « Auto-diagnostic dirigeant (10 min) » de la page `/ressources`, car cet outil interactif à 47 € ne doit plus être proposé.

### Modifications prévues

1. **`src/pages/Ressources.tsx`**
   - Supprimer l'objet suivant du tableau `resources` (lignes 21-29) :
     - Titre : Auto-diagnostic dirigeant (10 min)
     - Type : Outil interactif · 47 €
     - Lien : /diagnostic
   - Mettre à jour la balise `<meta name="description">` (ligne 92) pour supprimer la mention « auto-diagnostic (47 €), ».
   - Conserver les autres ressources (Grille de Clarification, Flash Décision, Articles, Espace presse) et le guide PDF en hero.

2. **Aucune autre modification** : on ne touche pas à la route `/diagnostic` elle-même, ni aux popups, ni au sitemap pour cette tâche.

### Livrable
Page `/ressources` sans la carte Auto-diagnostic, avec une meta description cohérente.