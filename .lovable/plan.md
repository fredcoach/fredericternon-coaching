## Corrections palette Alpha PME

Objectif : corriger les faiblesses identifiées (accessibilité, dark mode, gradient hero, ring, warning) sans casser l'identité émeraude + or.

### 1. `src/index.css` — light mode

- Ajouter `--accent-text: 40 60% 35%` (or bronze foncé, lisible sur fond clair, ~5.2:1).
- Garder `--accent: 40 50% 55%` pour fonds/CTA/décor.
- `--muted-foreground` : `158 15% 32%` (au lieu de 12% 38%) → passe AA.
- `--ring` : `158 60% 25%` (émeraude au lieu d'or).
- `--warning` : `30 85% 50%` (ambre orangé, distinct de l'or).
- `--destructive` : `8 65% 45%` (rouge chaud).
- `--gradient-hero` : `linear-gradient(180deg, hsl(42 30% 98%) 0%, hsl(158 15% 92%) 100%)` (contraste visible).

### 2. `src/index.css` — dark mode

- `--primary` : `158 40% 45%` (réintroduit l'émeraude, fini le tout-or).
- `--primary-foreground` : `42 50% 95%`.
- `--accent` reste or (`40 55% 60%`).
- `--ring` : `158 40% 50%` (émeraude).
- Ajouter `--accent-text: 40 70% 72%` (or clair lisible sur fond sombre).

### 3. `tailwind.config.ts`

Ajouter le token `accent-text` :
```ts
accent: {
  DEFAULT: "hsl(var(--accent))",
  foreground: "hsl(var(--accent-foreground))",
  text: "hsl(var(--accent-text))",
},
```

### 4. Utilisation (optionnel, signalé seulement)

Pas de remplacement massif dans cette tâche. À l'avenir : `text-accent` pour gros titres/décor, `text-accent-text` pour paragraphes/petits textes sur fond clair.

### Hors scope
- Pas de modification de composants
- Pas de changement de copy
- Mise à jour mémoire après validation
