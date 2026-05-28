## Objectif
Rendre le Hero plus percutant visuellement (c'est l'accroche d'accueil), améliorer la lisibilité du titre et agrandir le logo dans la navbar.

## 1. Titre Hero — lisibilité
Actuellement le H1 utilise `text-[1.35rem]` sur mobile (~21px) avec un dégradé or→vert→or sur la 2ᵉ ligne, peu lisible sur fond sombre.

Changements dans `src/components/landing/HeroSection.tsx` :
- **Tailles** : passer à `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl` (mobile ~30px, desktop ~72px).
- **Ligne 1** "Votre entreprise tourne," : blanc pur, font-serif, weight 600.
- **Ligne 2** "mais tout repose encore trop sur vous ?" :
  - Texte de base en blanc (lisible)
  - Seuls les mots-clés "**repose encore trop sur vous**" en or (`text-accent`) — pas de dégradé tricolore illisible
- `leading-[1.15]` + `tracking-tight` + `text-balance` pour un meilleur rendu.
- Drop-shadow subtile sur le H1 pour détacher du fond animé.

## 2. Logo navbar — taille
Actuellement `h-9 md:h-11` (36/44px), trop petit pour un logo identitaire.

Dans `src/components/landing/Navigation.tsx` :
- Logo : `h-12 md:h-16` (48/64px)
- Hauteur navbar : `h-20 md:h-24` (au lieu de 16/20) pour accueillir le logo
- Sur scroll (state condensé) : `h-10 md:h-12` pour rester compact
- Ajuster le padding/offset du Hero si nécessaire (déjà en `min-h-screen`, OK)

## 3. Hero — plus d'impact visuel
Renforcer la dimension premium / accroche :

- **Badge kicker** : passer à fond or translucide (`bg-accent/10 border-accent/30`) au lieu du blanc 5%, plus visible.
- **Sous-titre** : passer de `text-white/60` à `text-white/80` pour la lisibilité, et garder la 2ᵉ ligne en `text-accent/90` (or) au lieu de blanc — souligne la promesse.
- **Pills "Organisation/Décisions/…"** : transformer en petits badges contournés (`border border-white/15 px-3 py-1 rounded-full`) au lieu de simples mots, plus structurés.
- **CTA principal** : passer à la variante or pleine (`bg-accent text-primary hover:bg-accent/90`) avec glow doré au hover, au lieu du blanc générique — colle à la charte emerald+gold.
- **Background** : intensifier légèrement la halo or (passer `bg-accent/10` → `bg-accent/15`) pour plus de chaleur.
- **Espacements** : `py-20 md:py-32` (au lieu de 16/28) pour aérer.

## 4. Out of scope
- Pas de changement de copy au-delà de la mise en forme du titre.
- Pas de refonte des autres sections.
- Mémoire `mem://style/hero-tagline-design` à mettre à jour après implémentation pour refléter le nouveau traitement (or sur mots-clés vs shimmer tricolore).

## Fichiers modifiés
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/Navigation.tsx`
- `mem://style/hero-tagline-design` (après implémentation)
