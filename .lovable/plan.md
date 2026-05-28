## Option C — Émeraude + bronze froid

Objectif : gagner en sérieux "cabinet de conseil B2B" en désaturant l'or, sans toucher à l'émeraude ni à la structure. Changement chirurgical, uniquement sur les tokens d'accent.

### Modifications `src/index.css`

**Light mode :**
- `--accent: 38 28% 52%` (au lieu de `40 50% 55%`) → bronze froid désaturé, moins "bijou", plus "métal brossé corporate"
- `--accent-text: 35 35% 32%` (au lieu de `40 60% 35%`) → bronze foncé pour textes, conserve un bon contraste (~6:1)
- `--gradient-gold: linear-gradient(135deg, hsl(38 30% 48%) 0%, hsl(38 25% 62%) 100%)` → cohérent avec le nouvel accent
- `--sidebar-ring: 38 28% 52%`

**Dark mode :**
- `--accent: 38 32% 58%` (au lieu de `40 55% 60%`) → bronze légèrement plus lumineux pour rester lisible sur fond sombre, mais désaturé
- `--accent-text: 38 40% 70%` (au lieu de `40 70% 72%`)
- `--sidebar-primary: 38 30% 55%`
- `--sidebar-ring: 38 30% 55%`

### Hors scope
- Pas de changement sur l'émeraude (`--primary`, `--secondary`)
- Pas de changement sur l'ivoire (`--background`, `--muted`)
- Pas de modification de composants ni de copy
- Pas de changement du logo (il garde son or d'origine, qui restera cohérent visuellement avec un bronze froid)

### Validation visuelle après build
- Vérifier le hero (kicker "Dirigeants de PME", "repose encore trop sur vous", CTA principal) → l'accent doit rester visible mais paraître plus mat/métal
- Vérifier les sections claires (cartes, badges accent) → le bronze doit lire comme "premium discret" et non "jaune"

### Mémoire à mettre à jour après validation
- `mem://style/brand-identity` : préciser "or brossé tirant vers le bronze froid désaturé" au lieu de "or brossé" pur
- `mem://index.md` Core : ajuster la mention palette si besoin