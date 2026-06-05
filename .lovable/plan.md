# Plan : fluidifier les popups Diagnostic & Flash Decision

## Problème constaté
- **Diagnostic** s'ouvre dès 8 s après l'arrivée → trop tôt, le visiteur n'a pas eu le temps de lire le hero.
- **Flash Decision** a un fallback à 45 s + exit-intent → peut se déclencher pendant que le Diagnostic est encore affiché → les deux modales se superposent (z-index 9998/9999 identiques).
- Aucun des deux ne sait si l'autre est ouvert → effet "brouillon" et friction immédiate.

## Solution proposée

### 1. Retarder et conditionner l'apparition
- **Diagnostic** : passer de 8 s → **25 s** d'inactivité OU déclenchement au scroll > 50 % de la page (premier des deux). Laisse le temps de découvrir le contenu.
- **Flash Decision** : garder exit-intent (desktop) mais **supprimer le fallback temps mobile** de 45 s — l'exit-intent étant peu fiable sur mobile, on garde uniquement le desktop pour ce popup (intention de départ réelle).

### 2. Coordination via un "popup bus" partagé
Créer un petit hook `usePopupCoordinator` (sessionStorage + event) qui :
- garde une clé `popup_active` quand un popup est ouvert ;
- chaque popup vérifie cette clé avant de s'afficher et s'abstient si un autre est déjà visible ;
- après fermeture d'un popup, un **cooldown de 60 s** empêche l'autre d'apparaître immédiatement.

### 3. Règle d'exclusion mutuelle dans la session
- Si le **Diagnostic** a déjà été affiché (même dismissé), le **Flash Decision** peut apparaître à la sortie — mais jamais l'inverse simultanément.
- Si le visiteur a cliqué sur le CTA d'un des deux, l'autre est désactivé pour toute la session (`sessionStorage.setItem("popup_converted", "true")`).

### 4. Hiérarchie z-index propre
- Diagnostic : overlay `z-[9990]`, content `z-[9991]`
- Flash Decision : overlay `z-[9992]`, content `z-[9993]`
(de toute façon ils ne s'ouvriront plus en même temps)

## Fichiers touchés
- `src/hooks/usePopupCoordinator.ts` *(nouveau)* — gère verrou + cooldown.
- `src/components/DiagnosticPopup.tsx` — timer 25 s + scroll trigger + check coordinator.
- `src/components/FlashDecisionPopup.tsx` — retirer fallback 45 s, check coordinator + cooldown 60 s après Diagnostic.

## Résultat attendu
- Plus de chevauchement.
- Apparitions espacées, contextualisées (scroll/exit-intent réels).
- Aucun popup si l'utilisateur a déjà converti.
