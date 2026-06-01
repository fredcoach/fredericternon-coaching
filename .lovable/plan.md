## Réécriture du bloc « Ce sur quoi on travaille »

### Objectif
Remplacer les 4 puces actuelles de la colonne centrale (Méthode) par 5 nouvelles puces structurées avec un **titre en gras** et une **explication** (ex. : **Pilotage** — Parce que tout ne doit plus dépendre de vous.).

### Changements

**Fichier : `src/components/landing/ProblemSolutionSection.tsx`**

1. **Structure des données**
   - Modifier le type des `items` de la colonne centrale pour accepter soit un `string` (colonne 1 et 3 inchangées), soit un objet `{ bold: string; text: string }` (colonne 2).
   - Nouveaux items colonne 2 :
     - **Pilotage** — Parce que tout ne doit plus dépendre de vous.
     - **Rôles & responsabilités** — Parce que le flou crée des validations inutiles.
     - **Délégation** — Parce qu’une délégation floue finit toujours par revenir.
     - **Recrutement** — Parce qu’embaucher sans structure amplifie le problème.
     - **Temps stratégique** — Parce que la croissance ne se construit pas dans l’urgence.

2. **Rendu JSX**
   - Adapter le `.map()` des `items` pour détecter si l’item est un objet `{bold, text}` :
     - Si oui : rendre `<strong className="text-foreground">{bold}</strong>` suivi d’un tiret long et du texte explicatif.
     - Si non : rendre le texte simple comme avant.
   - Augmenter légèrement la taille de police des items de la colonne 2 (`text-sm` → `text-base`) pour améliorer la lisibilité avec le gras.

3. **Ajustements visuels**
   - Espacer un peu plus les items (`space-y-3` → `space-y-4` sur la colonne 2 si nécessaire) pour éviter un effet trop dense avec 5 puces.
   - Conserver l’indentation par point (`·`) et la couleur d’accent (`text-primary`).

### Non-régression
- Les colonnes 1 (« Ce que vous vivez ») et 3 (« Ce que vous gagnez ») restent identiques en contenu et en rendu.