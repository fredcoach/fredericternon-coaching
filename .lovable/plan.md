## Objectif

Lancer le Chantier 2 — Polissage premium — en intégrant le nouveau logo **Alpha PME** (vert profond + or) et en alignant la chartre graphique du site dessus. Le branding bascule de "navy + coral" vers "deep emerald + gold", positionnement plus premium et plus cohérent avec la cible dirigeants.

## 1. Intégration du logo

- Copier le logo uploadé dans `src/assets/alpha-pme-logo.png` (version carrée vert/or pour réutilisation) **et** créer une variante transparente `alpha-pme-mark.png` (juste le A doré, fond transparent) via edit_image pour usage sur fond clair/foncé.
- **Navigation.tsx** : remplacer le texte "Frédéric Ternon" / wordmark actuel par `<img src={logo} alt="Alpha PME" />` à gauche (hauteur ~36-40px desktop, ~32px mobile). Garder la logique dynamique navbar (transparent sur hero → blanc/sombre au scroll). Sur fond transparent (hero) : logo version claire ; sur fond blanc scrollé : logo version sombre.
- **Footer.tsx** : ajouter le logo en tête du footer.
- **Favicon** : générer un favicon depuis le mark (A doré sur vert) → `public/favicon.ico` + `public/apple-touch-icon.png`, et mettre à jour `index.html`.

## 2. Nouvelle chartre graphique (alignée au logo)

Palette extraite du logo :
- **Vert profond (primary)** : `#0F3D2E` env. — HSL `158 60% 15%`
- **Or (accent)** : `#C9A861` env. — HSL `40 50% 58%`
- **Crème/ivoire (texte clair)** : `#F5EFE0` — HSL `42 50% 92%`

Modifications dans `src/index.css` :

```
--primary:        158 60% 15%   (vert profond — remplace navy)
--primary-glow:   158 45% 28%   (vert moyen pour gradients)
--secondary:      158 40% 35%   (vert sauge)
--accent:         40 50% 58%    (or — remplace le corail)
--background:     42 30% 97%    (ivoire très léger au lieu du blanc bleuté)
--foreground:     158 25% 12%
--muted:          42 20% 94%
--border:         42 15% 88%
--ring:           40 50% 58%    (or pour focus)
--gradient-primary: linear-gradient(135deg, hsl(158 60% 15%), hsl(158 45% 28%))
--gradient-dark:    linear-gradient(135deg, hsl(158 65% 10%), hsl(158 50% 18%))
```

Dark mode : fond vert profond `158 50% 8%`, accent or conservé.

Tous les composants utilisant les tokens sémantiques (`text-primary`, `bg-primary`, `text-accent`, `bg-gradient-primary`, etc.) basculent automatiquement. Pas de recherche/remplacement massif nécessaire.

## 3. Polissage premium (volet DA déjà prévu)

- **HeroSection** : H1 mieux dimensionné (clamp 2.75rem → 4.5rem), gradient or sur mot-clé "clarté" au lieu du gradient navy actuel. Le shimmer reste mais en doré.
- **Navigation** : retirer les emojis (🎯, 💡…) à côté des items de menu pour un rendu plus premium.
- **Sections** : harmoniser l'alternance de fond (ivoire / blanc / vert profond) sur 3 niveaux max, plus de patchwork.
- **Icônes lucide** : passer en accent or (`text-accent`) plutôt que primary, ton plus chaud et cohérent.
- **Boutons CTA** : variant `premium` = fond vert profond + bordure or + hover or remplit.

## 4. Mémoire à mettre à jour

- `mem://style/brand-identity` : remplacer "navy + coral" par "deep emerald + gold, Alpha PME".
- `mem://index.md` Core : mettre à jour ligne palette.
- Créer `mem://style/logo` : usage du logo (variantes, hauteurs, contexts d'utilisation).

## Fichiers touchés

- **Créés** : `src/assets/alpha-pme-logo.png`, `src/assets/alpha-pme-mark.png`, `public/favicon.ico`, `public/apple-touch-icon.png`
- **Édités** : `src/index.css` (tokens), `tailwind.config.ts` (si extension nécessaire), `src/components/landing/Navigation.tsx`, `src/components/landing/Footer.tsx`, `src/components/landing/HeroSection.tsx` (gradient H1), `index.html` (favicon + theme-color), mémoires.

## Hors scope

- Chantier 3 (perf, canonicals, prefers-reduced-motion, fake aggregateRating) — reste à faire après.
- Refonte des photos / illustrations (le rendu doit déjà être nettement plus premium avec juste la nouvelle palette).

## Risque & rollback

Tokens centralisés dans `index.css` : rollback = restaurer la version git du fichier. Le logo est ajouté, pas substitué destructivement aux assets existants.
