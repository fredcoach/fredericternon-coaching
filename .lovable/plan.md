
# Objectif

Publier automatiquement un nouvel article de blog SEO chaque jour, avec image éditoriale IA. **Une fois par semaine (lundi)**, l'article est un **cas concret fictif** de dirigeant PME/TPE (jusqu'à 15 personnes) ou de solopreneur.

## Note importante sur le déclencheur

Lovable ne fournit aucun signal API permettant au site de savoir si vous avez consommé des crédits Lovable un jour donné. La publication sera donc **quotidienne à heure fixe**, avec :
- interrupteur admin (pause en base),
- skip auto si un article a déjà été publié dans les dernières 20h,
- file de sujets modifiable.

## Cadence éditoriale

- **Lundi** : article "Cas concret" — persona fictif crédible (prénom + secteur + taille ≤ 15 personnes ou solopreneur), problème initial, déclic, actions concrètes, résultats chiffrés réalistes. Mention explicite "Cas illustratif — noms et détails modifiés" pour éviter toute ambiguïté déontologique.
- **Mardi → dimanche** : article thématique classique (pilotage, décision, délégation, énergie mentale, structuration, cash, recrutement, etc.).

Le job détermine le type d'article via `new Date().getDay()` (1 = lundi) et pioche dans la bonne file.

## Architecture

```text
[pg_cron 07:00 UTC quotidien]
        ↓
[edge function: blog-auto-publish]
   1. lit blog_settings (paused? last_published_at < 20h?)
   2. type = (lundi ? 'case_study' : 'thematic')
   3. pioche prochain sujet dans blog_topics_queue WHERE type=... AND status='pending'
   4. génère article (openai/gpt-5.4-mini, JSON structuré, HTML pur)
      - case_study : prompt spécialisé (persona, structure narrative, disclaimer)
      - thematic   : prompt éditorial standard
   5. génère illustration (google/gemini-3.1-flash-image)
   6. upload image → bucket 'blog-images'
   7. insert blog_posts, mark topic 'done', update settings
        ↓
[Blog.tsx / BlogArticle.tsx]
   fusion runtime : blog_posts (DB) ∪ blogArticles.ts (statique)
```

## Détail des changements

### 1. Base de données (migration)

- `blog_posts` : id, slug (unique), title, excerpt, meta_description, category, read_time, image_url, image_alt, content_html, article_type ('thematic'|'case_study'), published_at, created_at. RLS : SELECT public, écritures service_role.
- `blog_topics_queue` : id, type ('thematic'|'case_study'), title_hint, angle, keywords[], persona_hint (nullable, pour cas concrets : ex "solopreneur consultante RH" / "artisan menuisier 8 salariés"), status, position, used_at.
- `blog_settings` : singleton (paused, last_published_at, timezone).
- Bucket storage `blog-images` (public read).
- Seed initial :
  - ~20 sujets `thematic`,
  - ~12 sujets `case_study` (personas variés : solo consultant, artisan BTP 6 pers., agence com 12 pers., e-commerce 4 pers., cabinet expertise 10 pers., resto 15 pers., etc.).

### 2. Edge function `blog-auto-publish`

- Vérifie pause + dédoublonnage 20h.
- Détermine `type` selon le jour de la semaine (lundi = case_study, sinon thematic). Fallback : si la file du type visé est vide, bascule sur l'autre type.
- **Prompt cas concret** (verrouille les patterns IA) :
  - Persona fictif nommé (prénom + activité + taille ≤ 15).
  - Situation initiale concrète (problème quotidien du dirigeant).
  - Le déclic / la prise de conscience.
  - 3 leviers appliqués (méthode 3R en toile de fond, sans jargon).
  - Résultats à 3 / 6 mois (chiffres plausibles, pas de promesses irréalistes).
  - Disclaimer en fin d'article : "Cas illustratif inspiré de situations réelles rencontrées en accompagnement. Prénom et détails modifiés."
  - Ton : direct, masculin premium, pas de "En conclusion", pas de "Dans un monde où".
- **Prompt thématique** : ligne éditoriale Alpha PME existante.
- Sortie JSON structurée : { title (≤60), meta_description (≤155), excerpt, category, read_time, content_html (HTML pur), image_prompt, image_alt }.
- HTML sanitisé côté serveur avant insert (allowlist balises, cohérent avec la règle DOMPurify du projet).
- Image : `google/gemini-3.1-flash-image`, style éditorial bleu marine + or, jamais de texte dans l'image, jamais de visage identifiable (pour les cas concrets : scène métaphorique du secteur, pas de portrait).

### 3. Planification (pg_cron + pg_net)

- Enable `pg_cron` + `pg_net`.
- `cron.schedule('blog-auto-publish-daily', '0 7 * * *', ...)` (07:00 UTC ≈ 08:00-09:00 Paris).
- POST vers la fonction avec `BLOG_CRON_SECRET` en header.

### 4. Frontend

- Hook `useAllBlogArticles()` : SELECT blog_posts, fusion avec `blogArticles.ts`, dédup par slug (DB gagne), tri publishedAt desc.
- `Blog.tsx` : bascule sur le hook. Badge "Cas concret" visible sur les cartes `article_type = 'case_study'`.
- `BlogArticle.tsx` : lookup DB par slug puis fallback statique. Helmet dynamique (title/description/OG).
- Images DB via URL Supabase Storage (pas d'import Vite).

### 5. Sitemap

- `public/sitemap.xml` conservé pour les routes statiques + articles historiques.
- Nouvelle edge function `sitemap-blog` qui renvoie XML dynamique des articles DB.
- `public/robots.txt` référence les deux sitemaps.
- Ping Google/Bing après chaque publication.

### 6. Administration légère (optionnelle V1)

Page `/admin/blog-auto` protégée par un mot de passe stocké en secret : voir la file (par type), pauser, forcer une publication, consulter les derniers articles générés. Peut être repoussée : la file et la pause sont pilotables directement depuis Lovable Cloud > Database.

## Sécurité

- Fonction `verify_jwt = false`, protégée par `BLOG_CRON_SECRET` (header vérifié).
- `blog_posts` SELECT public, écritures service_role uniquement.
- `blog_topics_queue` et `blog_settings` service_role only.
- Sanitisation HTML avant insert.

## Coûts

Par article : 1 appel texte (gpt-5.4-mini) + 1 image (gemini-3.1-flash-image). ~30 articles/mois largement couverts par le solde AI Gateway.

## Hors périmètre V1

- Pas d'auto-post LinkedIn/Medium.
- Pas de traduction multilingue.
- Pas de variantes A/B.

## Livrables

1. Migration SQL (tables + RLS + bucket + seed 20 thematic + 12 case_study).
2. `supabase/functions/blog-auto-publish/index.ts` (+ sanitizer helper).
3. `supabase/functions/sitemap-blog/index.ts`.
4. Update `public/robots.txt`.
5. Hook `useAllBlogArticles` + refactor `Blog.tsx` / `BlogArticle.tsx` (+ badge "Cas concret").
6. Cron installé via `supabase--insert`.
7. Secret `BLOG_CRON_SECRET`.
8. (Optionnel) Page admin `/admin/blog-auto`.

Dites-moi si vous souhaitez la page admin dès la V1 ou si on la garde pour plus tard — sinon je démarre l'implémentation en l'état.
