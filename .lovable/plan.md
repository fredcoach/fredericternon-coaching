## Objectif
Permettre le lancement immédiat du tunnel **Test Profils → Cartographie** sans attendre la VSL, nettoyer le parcours Diagnostic devenu redondant, et repositionner le CTA hero sur le Test des 4 Profils.

---

## 1. Page Test Profils — remplacer la VSL par un bloc texte de transition

Fichier : `src/pages/TestProfilsAlphaPME.tsx` (écran de résultat, ~lignes 509-581)

**Supprimer** la première Card "Pourquoi ce profil peut freiner…" qui contient la vignette VSL placeholder (icône Play + "VSL Alpha PME — environ 8 min").

**Remplacer** par une Card de transition texte avec le message exact validé :

> **Votre profil n'est probablement pas le problème.**
>
> Deux dirigeants peuvent avoir exactement le même profil pour des raisons totalement différentes.
>
> La Cartographie des Blocages permet d'identifier ce qui entretient réellement cette situation et quelle priorité mérite votre attention maintenant.

**Conserver** ensuite les **deux options** (primaire + secondaire) :

- Primaire : `Faire ma Cartographie — 97 €` → `/cartographie-des-blocages`
- Secondaire (outline) : `Faire le point directement avec Frédéric — 30 min offertes` → ancre `/#final-cta`

Garder l'encart "Inclus avec votre Cartographie" sous l'option primaire. Quand la VSL sera tournée, elle pourra être réintégrée au-dessus du bloc texte sans toucher au reste.

---

## 2. CTA Hero — remplacer "Voir si on peut travailler ensemble" par "Faire le Test des 4 Profils"

Fichier : `src/components/landing/HeroSection.tsx`

- Texte du CTA principal : **`Faire le Test des 4 Profils`**
- Cible : `/test-profils-alpha-pme` (au lieu de l'ancre `#final-cta`)
- L'icône `ArrowRight` et le style sont conservés.

Audit rapide des autres occurrences de "Voir si on peut…" / "travailler ensemble" dans les sections landing (FAQSection, ProblemSolution, etc.) — toute autre instance identique sera alignée sur le même libellé/cible pour cohérence. La CTA navbar "30 min pour échanger" reste inchangée (point d'entrée RDV direct).

---

## 3. Retirer la page Diagnostic du parcours (sans supprimer le code)

- `src/components/landing/Navigation.tsx` : retirer l'entrée `/diagnostic` de `pageLinks`.
- `src/App.tsx` : retirer `<DiagnosticPopup />` du rendu global.
- `src/App.tsx` : transformer la route `/diagnostic` en redirection vers `/cartographie-des-blocages` via `<Navigate replace />`.
- `public/sitemap.xml` : retirer l'entrée `/diagnostic` si présente.
- Audit des renvois `/diagnostic` dans `TripleCTASection`, `DiagnosticTeaser`, `FAQSection`, `DifferentiatorsSection`, `JourneySection`, `EntryProductsTeaser` → repointer vers `/cartographie-des-blocages` (ou `/test-profils-alpha-pme` selon l'intention). Si `DiagnosticTeaser` devient un doublon, on le retire de `Index.tsx`.

Les fichiers `src/pages/Diagnostic.tsx` et `src/components/diagnostic/*` restent en dormance.

---

## 4. Publication

- Scan de sécurité préalable (requis avant publish).
- Publication sur `alphadirigeant.solutions`.

---

## Hors scope
- Réécriture du H1 hero.
- Refonte visuelle des cartes résultat.
- Tracking analytics dédié sur les nouveaux CTA.
- Suppression définitive des fichiers Diagnostic.

Dites "go" pour que j'enchaîne en build puis publication.