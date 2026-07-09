## Problème

1. L'article "Recruter un bras droit" (id 13) n'a pas d'image affichée sur la liste du blog : le fichier `src/assets/blog-bras-droit-dirigeant.jpg` n'existe pas et le slug n'est pas dans le `blogImages` map de `src/pages/Blog.tsx`.
2. Les articles s'affichent dans l'ordre du tableau (du plus ancien au plus récent), donc le nouvel article se retrouve tout en bas.

## Correctifs

### 1. Ajouter l'illustration manquante
- Générer `src/assets/blog-bras-droit-dirigeant.jpg` (style cohérent avec les autres vignettes blog : palette marine/or, ambiance premium B2B, évocation d'un dirigeant face à la question du bras droit — silhouette / poignée de main stylisée / échiquier, pas de texte).
- L'importer dans `src/pages/Blog.tsx` et l'ajouter au map `blogImages` sous le slug `recruter-bras-droit-dirigeant-pme`.
- Faire la même addition dans `src/pages/BlogArticle.tsx` si un map similaire y existe (à vérifier au moment de l'implémentation).

### 2. Trier les articles du plus récent au plus ancien
Dans `src/pages/Blog.tsx`, remplacer les usages directs de `blogArticles` (dans le JSON-LD `itemListElement` et le `.map` du rendu) par une version triée :

```ts
const sortedArticles = [...blogArticles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
```

Vérifier aussi `getRelatedArticles` dans `src/data/blogArticles.ts` : appliquer le même tri au fallback pour que les "articles liés" pointent vers les plus récents en priorité.

## Impact
- Fichiers modifiés : `src/pages/Blog.tsx`, éventuellement `src/pages/BlogArticle.tsx`, `src/data/blogArticles.ts`.
- Fichier créé : `src/assets/blog-bras-droit-dirigeant.jpg`.
- Aucun changement de données ni de routing.