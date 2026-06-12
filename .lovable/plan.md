
## Objectif

Remplacer le téléchargement direct du guide "Sortir de la roue du hamster" par un mini-formulaire (prénom, entreprise, email). À chaque soumission :
1. Les coordonnées sont **envoyées par email à `contact@fredericternon.com`**
2. Le PDF se télécharge **immédiatement** côté utilisateur
3. Les leads sont aussi **enregistrés en base** (filet de sécurité si un email rate)

## Ce qui sera fait

### 1. Lovable Cloud (activation si nécessaire)
Pour : stocker les leads + envoyer des emails depuis une edge function.

### 2. Table `guide_leads`
- `id` (uuid), `first_name`, `company`, `email`, `guide_slug` (défaut `roue-hamster`), `created_at`
- RLS : INSERT public (`anon` + `authenticated`), SELECT réservé `service_role`
- GRANTs explicites pour `anon`, `authenticated`, `service_role`

### 3. Email de notification — Lovable Emails (built-in)
- Setup domaine email Lovable (si pas déjà fait) sur le sous-domaine `notify.alphadirigeant.solutions`
- Template app email `guide-lead-notification` (React Email) :
  - **Destinataire** : `contact@fredericternon.com`
  - **Sujet** : "Nouveau lead guide — {prénom} ({entreprise})"
  - **Corps** : prénom, entreprise, email, date, guide téléchargé
- Branchement via la fonction edge standard `send-transactional-email`

### 4. Composant `GuideDownloadDialog`
- Dialog shadcn (style navy + or) déclenché par les boutons "Télécharger le guide"
- 3 champs : Prénom, Entreprise, Email
- Validation Zod (prénom 2-50, entreprise 2-100, email valide max 255)
- À la soumission :
  1. Insert dans `guide_leads`
  2. Invoke `send-transactional-email` (template `guide-lead-notification`, recipient `contact@fredericternon.com`, idempotencyKey = `guide-lead-{id}`)
  3. Téléchargement immédiat du PDF (création d'un `<a download>` programmatique)
  4. Écran de remerciement "Merci {prénom}, votre guide est en cours de téléchargement"
- Si l'insert/email échoue → on log mais on déclenche quand même le téléchargement (zero blocage UX)

### 5. Points d'intégration
- `src/pages/Ressources.tsx` : le CTA principal et la carte du guide ouvrent le dialog
- `src/data/blogArticles.ts` (article "roue du hamster") : le bloc CTA HTML redirige vers `/ressources?guide=1` ; au mount de Ressources, si `?guide=1` → ouverture auto du dialog

## Détails techniques

```text
src/
├── components/guide/
│   └── GuideDownloadDialog.tsx          (nouveau)
├── pages/Ressources.tsx                  (modifié)
└── data/blogArticles.ts                  (modifié — CTA → /ressources?guide=1)

supabase/
├── migrations/<ts>_guide_leads.sql       (nouveau — table + RLS + GRANTs)
└── functions/_shared/transactional-email-templates/
    └── guide-lead-notification.tsx       (nouveau React Email template)
    + registry.ts                          (modifié)
```

## Ce qui ne change pas
- URL et contenu du PDF (reste linkable pour SEO/backlinks directs)
- Design global navy + or
- Sitemap

## Notes
- Pas d'email de confirmation envoyé au lead (uniquement notif interne à toi). On pourra l'ajouter plus tard si tu veux.
- Le PDF reste accessible en URL directe — donc un visiteur qui connaît l'URL peut court-circuiter le formulaire. C'est nécessaire pour conserver la valeur SEO du fichier. Pour bloquer ça il faudrait servir le PDF via une edge function signée (plus lourd, je peux le faire dans un second temps si tu veux).
