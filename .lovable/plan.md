## Pourquoi

L'émeraude actuel évoque trop "espace vert / jardin" et pas assez la posture finance / autorité d'un accompagnement de dirigeants de PME. On bascule sur une palette **Navy Trust + Or**, plus institutionnelle, masculine et premium — codes visuels du conseil aux dirigeants (cabinets, finance, board).

## Nouvelle palette

- **Primary — Bleu marine profond** : `hsl(220 60% 16%)` (≈ #0f1b3d)
- **Primary glow — Bleu nuit moyen** : `hsl(218 45% 28%)`
- **Accent — Or bronze chaud** (on garde l'esprit du bronze actuel mais légèrement plus chaud) : `hsl(40 45% 52%)` (≈ #c9a84c)
- **Background — Ivoire chaud** conservé : `hsl(42 30% 97%)`
- **Foreground — Bleu nuit quasi-noir** : `hsl(220 40% 12%)`
- **Muted / borders** : neutres beige-gris froids harmonisés

Dark mode dérivé sur la même logique (fond bleu nuit, accents or plus lumineux).

## Périmètre des changements

1. **`src/index.css`** — Remplacer tous les tokens HSL (light + dark) pour primary, primary-glow, secondary, accent, ring, foreground, sidebar, success, gradients (`--gradient-primary`, `--gradient-dark`, `--gradient-hero`, `--gradient-gold`).
2. **`index.html`** — Mettre à jour `<meta name="theme-color">` (`#0F3D2E` → `#0f1b3d`).
3. **Aucun changement de composants** : tout passe par les tokens sémantiques, donc Hero, Navigation, sections, CTA, popups, blog s'adaptent automatiquement.
4. **Mémoire projet** — Mettre à jour `mem://index.md` (Core) et `mem://style/brand-identity` pour refléter Navy + Or au lieu d'émeraude + bronze.

## Hors périmètre

- Logo Alpha PME (reste tel quel — l'or s'harmonise déjà avec le navy).
- Contenus, copywriting, structure des sections.
- Images, photos, illustrations.

## Vérification

Après build : screenshot du Hero, Navigation (scroll up/down pour vérifier le switch logo), Section Méthode 3R, OfferSection, FAQ, Footer — vérifier contraste AA et absence de résidu vert.
