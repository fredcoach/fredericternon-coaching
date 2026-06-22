## Mise en avant du call stratégique offert

Sur la page **Cartographie des Blocages** (`src/pages/CartographieLanding.tsx`, ligne 24), modifier le bénéfice listé :

**Avant :**
> Un call stratégique de 15 minutes inclus avec Frédéric Ternon

**Après :**
> Un **call stratégique de 30 minutes offert** avec Frédéric Ternon

### Détail visuel
- Passer la durée de **15** à **30 minutes**
- Mettre en gras la portion clé « call stratégique de 30 minutes offert » (via `<strong>` avec couleur or de la marque — `text-primary` ou `text-accent` selon le rendu), pour attirer l'œil sans casser la hiérarchie de la liste de bénéfices.
- Remplacer « inclus » par « offert » (plus vendeur, cohérent avec le ton premium).

### Technique
- Le tableau `benefits` contient actuellement des `string`. Pour permettre le gras, changer le type en `ReactNode` (ou un champ `{ text, highlight }`), et rendre l'élément `<strong className="font-semibold text-primary">` autour du segment mis en avant.
- Aucun autre changement de logique ni de style global.
