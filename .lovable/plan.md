## Article : "Recruter un bras droit : la question qu'on oublie de se poser avant"

Publication d'un nouvel article de fond (1500-2000 mots) sur le blog Alpha PME, angle diagnostic, à partir de votre texte source.

### Ciblage SEO
- **Mot-clé principal** : `bras droit dirigeant` (volume 40/mo, difficulté 0/100 — très accessible)
- **Mots-clés secondaires** : `recruter un bras droit`, `fiche de poste bras droit`, `numéro 2 PME`, `déléguer dirigeant PME`
- **Intention** : diagnostic — un dirigeant saturé qui pense recruter un bras droit sans avoir clarifié le rôle
- **Meta title** (≤ 60 car.) : *Bras droit dirigeant : la question à se poser avant | Alpha PME*
- **Meta description** (≤ 160 car.) : *Avant de recruter un bras droit, clarifiez le rôle. 4 problèmes différents, 4 postes différents. Le test simple pour éviter le recrutement le plus coûteux à rater.*

### Structure de l'article
1. **Hook** — Le déclencheur : "Il me faut un bras droit" (2 paragraphes reprenant votre intro)
2. **Le problème invisible** — "Bras droit" n'est pas une fiche de poste, c'est un soulagement espéré
3. **Les 4 problèmes qu'on confond** (cœur de l'article, H2 + 4 H3) :
   - Trop de production → besoin d'un opérationnel senior
   - Trop de décisions qui remontent → besoin d'un manager avec périmètre
   - Trop de coordination inter-équipes → besoin d'un COO / chef d'orchestre
   - Étage de management manquant → besoin d'un middle-management, pas d'un n°2
4. **Ce que coûte un rôle flou** — pourquoi c'est l'un des recrutements les plus chers à rater
5. **Le test des 10 lignes** — votre question finale transformée en exercice actionnable
6. **Avant de recruter : clarifier** — mon rôle en tant que regard extérieur (positionnement doux, pas de vente)
7. **CTA** — vers la Grille de Clarification (`/grille`) + échange 30 min

### Détails techniques
- **Fichier** : entrée ajoutée dans `src/data/blogArticles.ts` (structure existante `BlogArticle`)
- **Slug** : `recruter-bras-droit-dirigeant-pme`
- **Catégorie** : `Organisation & délégation` (nouvelle) ou `Décision` (existante — à confirmer si vous préférez rester dans le set actuel)
- **Format contenu** : HTML pur sanitisé (règle projet, pas de Markdown)
- **Read time** : 8 min
- **Illustration** : réutilisation d'une image blog existante ou génération d'une nouvelle vignette (préciser)
- **Liens internes** : vers `/grille`, `/blog/sortir-roue-hamster-dirigeant`, `/cartographie-des-blocages`
- **Sitemap** : entrée ajoutée dans `public/sitemap.xml`
- **Schema.org Article** : déjà géré par `BlogArticle.tsx` via les champs existants

### Questions à trancher avant écriture
- **Catégorie** : je crée "Organisation & délégation" ou je range dans une catégorie existante ?
- **Ton** : je garde le "vous" (cohérent avec vos derniers articles) ou passe au "tu" (comme certains anciens) ?
- **Image OG** : je génère une vignette dédiée (style navy/or Alpha PME) ou je réutilise une existante ?