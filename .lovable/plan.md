## État actuel

Le tri des articles du blog du plus récent au plus ancien est **déjà implémenté** dans le code :

- `src/pages/Blog.tsx` (lignes 50-52) : `sortedArticles` est trié par `publishedAt` décroissant et utilisé pour le rendu et le JSON-LD.
- `src/data/blogArticles.ts` (lignes 1093-1105) : `getRelatedArticles` trie également `blogArticles` par date décroissante avant de filtrer.

## Vérification faite

Navigation sur `http://localhost:8080/blog` en preview : les articles s'affichent bien du plus récent au plus ancien :

1. Recruter un bras droit : la question qu'on oublie de se poser avant  
2. Sortir de la roue du hamster : du dirigeant opérateur au dirigeant pilote  
3. Ce qu'un sportif de haut niveau comprend mieux que beaucoup de dirigeants  
…  
13. Le syndrome de l'imposteur : pourquoi tu te sabotes en pleine réussite  

## Plan

Aucune modification de code n'est nécessaire.

Action utilisateur : recharger la page `/blog` côté preview (Ctrl/Cmd + Maj + R) pour vider le cache et afficher l'ordre corrigé.

Si après rechargement l'ordre reste inversé sur ton poste, indique-moi le navigateur et l'URL exacte où tu observes le problème.