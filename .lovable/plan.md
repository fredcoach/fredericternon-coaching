## Page de confirmation après prise de rendez-vous

### 1. Nouvelle page `/cartographie-des-blocages/confirmation`

Créer `src/pages/CartographieConfirmation.tsx` avec une mise en page premium, sobre, dans la continuité visuelle de `CartographieResultat.tsx` (mêmes tokens : `bg-background`, `bg-card`, `text-accent`, `border-accent`, gradients `from-primary to-primary-glow`, typographie `font-light` / `font-medium`, conteneur `max-w-3xl`).

Structure verticale :

1. **Header** dégradé `primary → primary-glow`
   - Eyebrow : « Rendez-vous confirmé »
   - H1 : « Votre rendez-vous est confirmé. »
   - Sous-titre : « Vous venez de faire ce que beaucoup de dirigeants repoussent pendant des mois : prendre du recul sur leur entreprise. »

2. **Bloc Cartographie** (`bg-card` avec `border-l-4 border-accent`)
   - « Votre Cartographie a identifié un blocage principal. »
   - « Lors de notre échange, nous vérifierons ensemble si ce blocage est bien la cause racine et nous identifierons le premier levier concret à activer. »

3. **Section « En attendant notre rendez-vous »** (liste avec icônes `CheckCircle2` discrètes)
   - Relisez votre Cartographie
   - Notez les questions qui vous viennent
   - Réfléchissez à la décision que vous continuez à repousser

4. **Encadré** (fond `bg-primary text-primary-foreground`, coin `rounded-2xl`)
   - « Le but de cet échange n'est pas de tout résoudre en 15 minutes. »
   - « Le but est d'identifier clairement la priorité qui mérite votre attention maintenant. »

5. **Citation finale** (italique, `border-l-2 border-accent`, centré, sans guillemets décoratifs)
   - « Une entreprise ne franchit pas un palier en travaillant plus. »
   - « Elle franchit un palier lorsqu'elle cesse de dépendre des mêmes mécanismes qui l'ont amenée jusqu'ici. »

6. **CTA secondaire** (bouton `outline`) : « Retourner à ma Cartographie » → revient vers `/cartographie-des-blocages/resultat?session_id=…` si présent, sinon `/cartographie-des-blocages`.

`<Helmet>` : title « Rendez-vous confirmé — Alpha PME », `noindex`.

### 2. Routing

Ajouter la route dans `src/App.tsx` :
```tsx
<Route path="/cartographie-des-blocages/confirmation" element={<CartographieConfirmation />} />
```

### 3. Conservation du `session_id`

Sur `CartographieResultat.tsx`, modifier le lien Calendly pour ajouter les paramètres :
- `utm_source=cartographie`
- `utm_content={session_id}`

Et garder la valeur en `localStorage` (`carto_session_id`) pour que la page de confirmation puisse reconstruire le lien retour vers la Cartographie même si Calendly ne propage pas le query param.

### 4. Action côté Calendly (à faire par l'utilisateur, hors code)

Pour que Calendly redirige automatiquement vers cette page après la réservation, il faut activer dans les paramètres de l'événement Calendly :
- *Confirmation Page* → *Redirect to an external site*
- URL : `https://alphadirigeant.solutions/cartographie-des-blocages/confirmation`
- Cocher « Pass event details to your redirected page » pour conserver les UTM.

Je le rappellerai dans la réponse une fois la page livrée.

### Fichiers touchés
- `src/pages/CartographieConfirmation.tsx` *(nouveau)*
- `src/App.tsx` *(ajout de la route + import)*
- `src/pages/CartographieResultat.tsx` *(UTM + persistance `session_id`)*
