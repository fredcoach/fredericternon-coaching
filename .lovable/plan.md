## Objectif

Resserrer la landing `/` pour servir un dirigeant de PME pressé : message clair en 5 secondes, preuve sociale tôt, un seul CTA dominant, zéro contenu hors-cible. On passe de 19 sections à ~12, sans toucher au design ni au backend.

## Nouvelle séquence de sections

```text
1.  HeroSection                          (inchangée — micro fix CTA libellé)
2.  JulienTestimonialSection             ⬆️ remontée (preuve sociale forte avant tout)
3.  RealityCheckSection                  (inchangée — reconnaissance du problème)
4.  PainPointsSection                    (fusionne PainPoints + Situations + Benefits — voir note)
5.  PromiseSection                       (allégée, supprimer le schéma pill→arrow→pill)
6.  Method3RSection                      (la méthode — pièce maîtresse)
7.  AboutSection + MyRoleSection         (fusionnées en une seule "Qui je suis")
8.  OfferSection                         (avec Flash Decision 350€ ajouté en porte d'entrée)
9.  LinkedInRecommendationsSection       (preuve sociale business, conservée telle quelle)
10. FAQSection                           (remontée avant le CTA final pour lever objections)
11. FinalCTASection                      (CTA unique, libellé final)
12. Footer
```

**Sections supprimées :** `DifferentiatorsSection`, `TargetAudienceSection`, `JourneySection`, `TestimonialsSection` (témoignages hors-cible WhatsApp + vidéo Mahel), `DiagnosticTeaser`, `TripleCTASection`.

**Sections fusionnées :**
- `PainPoints` + `Situations` + `Benefits` → une seule section en 3 colonnes : *"Ce que vous vivez / Ce que vous voulez / Ce que vous gagnez"*. On garde le meilleur contenu des trois.
- `About` + `MyRole` → une seule section "Qui je suis", avec photo portrait recadrée et 3 paragraphes max.

## Différenciation des CTA

Six occurrences identiques de *"30 min pour identifier ce qui bloque"* à varier selon la position :

| Section | Nouveau libellé |
|---|---|
| Hero | *"Voir si on peut travailler ensemble"* |
| Promise | *"Identifier le vrai point de blocage"* |
| Offer | *"Réserver une session de cadrage"* |
| FloatingCTA | *"Réserver 30 min"* (icône calendrier) |
| FinalCTA | *"Réserver votre session — 30 min, gratuite"* (libellé fort, conservé pour le final uniquement) |

## Témoignages hors-cible — décisions

- **Supprimer** `TestimonialsSection` complète : les témoignages Fatima/Marie/Estelle (bien-être personnel) et la vidéo Mahel (joueur d'échec) cassent le positionnement PME.
- **Conserver** `JulienTestimonialSection` (DG Dokles.io) — remonté en position 2.
- **Conserver** `LinkedInRecommendationsSection` — preuve sociale business pure.
- Les assets témoignages restent dans `src/assets/` (pas de suppression de fichier — réutilisables ailleurs).

## Détails techniques

- **Index.tsx** : réécriture du bloc `<main>` (lignes 99–119) avec la nouvelle séquence.
- **Nouveau composant** `src/components/landing/ProblemSolutionSection.tsx` qui fusionne le contenu de PainPoints + Situations + Benefits en 3 colonnes.
- **Nouveau composant** `src/components/landing/AboutMeSection.tsx` qui fusionne About + MyRole.
- **HeroSection.tsx:136** — changer le libellé du bouton blanc.
- **PromiseSection.tsx:95-111** — supprimer le schéma pill→arrow→pill, garder le CTA avec libellé varié.
- **OfferSection.tsx:127-162** — ajouter un encart "Flash Decision — 350€, 1h" comme porte d'entrée payante, juste avant le CTA Session Cadrage.
- **FloatingCTA.tsx:46** — nouveau libellé court.
- **FinalCTASection.tsx:47** — libellé final fort, conservé.
- **DiagnosticTeaser.tsx**, **TripleCTASection.tsx**, **TestimonialsSection.tsx**, **DifferentiatorsSection.tsx**, **TargetAudienceSection.tsx**, **JourneySection.tsx** : fichiers conservés sur disque (au cas où) mais retirés de l'import et du rendu dans `Index.tsx`.
- **Memory** : mettre à jour `mem://style/hero-tagline-design` et le memory CTA pour refléter les nouveaux libellés.

## Ce qui n'est PAS dans ce chantier

- Refonte chromatique des fonds (dark/light cohérent) → Chantier 2 (DA).
- Fix preload LCP, canonicals dupliqués, parallax setState, prefers-reduced-motion → Chantier 3 (Tech).
- Suppression des emojis nav, retravail du gradient H1, refonte AboutSection en portrait → Chantier 2 (DA).

## Risque & rollback

Aucune perte de fichiers. Les composants supprimés du flow restent sur disque ; un rollback consiste à restaurer les imports dans `Index.tsx`. La page Diagnostic reste accessible via la nav et son popup déclenché à 8s — la suppression de `DiagnosticTeaser` ne casse pas le funnel diagnostic.
