## Objectif

Clarifier la promesse du Test des 4 Profils dans le Hero, sans changer la structure ni le design de la homepage. On ne parle ni de diagnostic, ni de cartographie, ni de blocages.

## Modifications — `src/components/landing/HeroSection.tsx`

### 1. Conserver tel quel
- Kicker "DIRIGEANTS DE PME/TPE"
- H1 "Votre entreprise fonctionne. Mais dépend-elle encore trop de vous ?"
- Sous-titre actuel (Organisation, délégation, recrutement, décisions…)
- Pills (Organisation, Décision, Délégation, Croissance)
- Bouton "Faire le Test des 4 Profils" → `/test-profils-alpha-pme`
- Lien "Découvrir l'approche"
- Animations, halos, grille, scroll indicator

### 2. Ajouter juste AU-DESSUS du bouton CTA
Nouveau paragraphe inséré entre les pills et le bloc CTA :

> Découvrez le rôle que votre entreprise vous oblige encore à jouer.

Style :
- Largeur équivalente au sous-titre (`max-w-3xl mx-auto`)
- Centré
- Taille discrète mais visible : `text-base md:text-lg`
- Couleur cohérente Hero sombre : `text-white/85`
- Animation `animate-fade-in-up` avec delay aligné sur la séquence existante (~0.3s)
- Marge basse réduite pour rester collé au bouton (`mb-5` ou `mb-6`)

### 3. Remplacer le bloc de réassurance sous le bouton
Actuellement deux lignes :
- "Test gratuit • 10 questions • moins de 3 minutes"
- "Situation actuelle / Ce que vous gagnez"

Nouveau bloc — une seule ligne :

> Test gratuit • 10 questions • moins de 3 minutes

Style :
- Petit (`text-xs md:text-sm`)
- Rassurant, très lisible
- Couleur secondaire de la charte = `text-accent/90` (or chaud Alpha PME)
- Séparateurs `•` conservés
- La seconde ligne "Situation actuelle / Ce que vous gagnez" est **supprimée** (elle introduisait une notion de restitution qui appartient aux étapes suivantes du tunnel)

### 4. Ne PAS toucher
- Le reste de la page (PromiseSection, FinalCTA, FloatingCTA, etc.)
- Le design system, les couleurs, la typographie
- Le lien "Découvrir l'approche" reste sous la réassurance

## Détails techniques

Ordre vertical final dans le Hero, après le sous-titre :

```
[Pills: Organisation · Décision · Délégation · Croissance]
[NOUVEAU paragraphe de contexte — text-white/85, max-w-3xl]
[Bouton "Faire le Test des 4 Profils"]
[Réassurance: "Test gratuit • 10 questions • moins de 3 minutes" — text-accent/90, text-xs/sm]
[Lien "Découvrir l'approche"]
```

Aucun nouvel asset, aucune dépendance ajoutée.
