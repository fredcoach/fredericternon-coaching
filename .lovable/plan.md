## Refonte du CTA principal (FinalCTASection)

Le CTA final actuel propose un échange 30 min Calendly + WhatsApp. On le remplace par une invitation unique au **Test des 4 Profils** qui devient l'entrée principale du tunnel Alpha PME.

### Modifications dans `src/components/landing/FinalCTASection.tsx`

**Conservé** : la section `#final-cta`, le fond gradient sombre, les halos, la grille subtile, l'animation `useScrollAnimation`, la largeur `max-w-3xl` centrée — pour garder la cohérence visuelle.

**Nouveau contenu** :

- Titre (h2, même typo serif que l'actuel) :
  > Faire le Test des 4 Profils

- Sous-titre (p, même style que l'actuel) :
  > Découvrez le rôle que votre entreprise vous oblige encore à jouer, et ce qui pourrait limiter aujourd'hui votre capacité à franchir le palier suivant.

- Bloc de réassurance (3 puces ✓ alignées, fond léger, icônes `Check` de lucide ou simple caractère ✓ en couleur accent) :
  - ✓ Gratuit
  - ✓ Moins de 3 minutes
  - ✓ Résultat immédiat

- Bouton CTA principal unique (style accent or, taille lg, `Link` interne vers `/test-profils-alpha-pme`, icône `ArrowRight`) :
  > Commencer le Test

**Suppressions** : bouton Calendly "Réserver votre échange 30 min", bouton WhatsApp "M'envoyer un message", ligne de bénéfices en bas ("Moins d'opérationnel subi · …").

### Points techniques

- Import `Link` depuis `react-router-dom`, retirer les imports `Calendar`/`MessageCircle` devenus inutiles, garder `ArrowRight`, ajouter `Check`.
- L'`id="final-cta"` est conservé : la nav et le bouton "30 min pour échanger" du menu pointent toujours dessus (cohérence garantie même si le contenu change ; le label du bouton de nav reste hors scope de cette demande).
- Aucune autre section n'est modifiée. Le `TripleCTASection` (non utilisé dans `Index.tsx` actuellement) reste inchangé.
