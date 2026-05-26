## Objectif

Repositionner la home pour s'aligner avec votre nouveau positionnement LinkedIn : **regard extérieur pour dirigeants de PME (5-30 pers.) dont l'entreprise tourne mais plafonne ou repose trop sur eux**. Sortir du registre "burnout / imposteur / puissance mentale" pour entrer dans un registre "pilotage, organisation, décision, recul".

Ton : premium, sobre, direct, humain. Ni consultant froid, ni coach motivation.

## Nouveau fil narratif de la page

1. **Hero** — 3 accroches rotatives recentrées sur le pilotage PME :
   - "Votre entreprise tourne — mais tout repose encore sur vous."
   - "Vous décidez sur tout — vous manquez de recul sur l'essentiel."
   - "Vos équipes avancent — mais l'organisation ne suit plus."
   Sous-titre : "Un regard extérieur pour les dirigeants de PME de 5 à 30 personnes qui veulent reprendre le pilotage sans rester le goulot."
   CTA : **"30 min pour identifier ce qui bloque"**

2. **About** — Repositionner Frédéric comme regard extérieur business (et non coach mental abstrait).

3. **Differentiators** — 3 différences : regard extérieur opérationnel · focus pilotage et décision · méthode (3R) au service du dirigeant, pas du développement perso.

4. **Pain Points** — Remplacer les douleurs intérieures par les douleurs business :
   - L'entreprise tourne mais plafonne
   - Tout remonte au dirigeant
   - Délégation floue, équipes en attente
   - Décisions repoussées, agenda subi
   - Sentiment de perdre le pilotage sous la pression

5. **Situations** — Cas concrets PME : croissance qui sature, structuration nécessaire, associé/N-1 à recadrer, transition d'équipe, etc.

6. **Promise** — Promesse recentrée : clarifier ce qui bloque, fluidifier les décisions, restructurer la délégation, retrouver du recul. Pas de promesse miracle.

7. **TargetAudience** — Cible explicite : **dirigeants de PME de 5 à 30 personnes**. Supprimer "0-50". Profil : l'entreprise fonctionne mais le dirigeant est saturé / l'organisation ne suit pas la croissance.

8. **Journey** — Parcours d'accompagnement repositionné comme parcours de pilotage (diagnostic → cadrage → mise en mouvement → ancrage).

9. **Method 3R** — Conserver mais repositionner : **Repérer (ce qui bloque dans l'organisation et les décisions) · Réagir (sous pression, sans subir) · Reprogrammer (de nouveaux réflexes de pilotage)**. Plus de "schémas inconscients".

10. **Offer** — Repositionner les 3 repères et la Session CADRAGE comme outils de pilotage du dirigeant.

11. **Testimonials / LinkedIn** — Conservés tels quels (preuve sociale).

12. **FAQ** — Réécrire les Q/R pour parler PME, organisation, délégation, décision. Mise à jour aussi du JSON-LD FAQ dans `index.html`.

13. **DiagnosticTeaser** — Repositionner : "10 min pour cartographier ce qui bloque dans votre pilotage."

14. **TripleCTA / FinalCTA** — CTA principal unifié partout : **"30 min pour identifier ce qui bloque"**.

15. **Popups** (Diagnostic + Flash Decision) — Reformuler les accroches.

16. **Footer + Navigation** — Vérifier baseline et libellés.

## Règles transversales appliquées partout

- **Vouvoiement** strict (remplacer tous les "tu/te/toi/ton/ta/tes")
- Cible : **"PME de 5 à 30 personnes"** (remplace "0 à 50")
- Vocabulaire à bannir : burnout, imposteur, légitimité intérieure, puissance mentale, schémas inconscients, développement personnel
- Vocabulaire à privilégier : pilotage, recul, décision, délégation, organisation, regard extérieur, structuration, sous pression
- CTA principal partout : **"30 min pour identifier ce qui bloque"**
- Méthode 3R, Alpha, Diagnostic, Flash Decision **conservés** mais repositionnés comme outils au service du pilotage

## SEO / méta

- `index.html` : title, description, JSON-LD FAQ et ProfessionalService mis à jour vers le nouveau positionnement (mots-clés : dirigeant PME, pilotage, décision, regard extérieur).
- `src/pages/Index.tsx` : Helmet meta description alignée.

## Fichiers modifiés

`HeroSection`, `AboutSection`, `DifferentiatorsSection`, `PainPointsSection`, `SituationsSection`, `PromiseSection`, `TargetAudienceSection`, `JourneySection`, `Method3RSection`, `OfferSection`, `FAQSection`, `DiagnosticTeaser`, `TripleCTASection`, `FinalCTASection`, `FloatingCTA`, `Navigation`, `Footer`, `DiagnosticPopup`, `FlashDecisionPopup`, `index.html`, `src/pages/Index.tsx`.

## Hors-scope

- Pas de refonte visuelle / design system : on touche **uniquement le copywriting et le positionnement**.
- Témoignages vidéo / LinkedIn non modifiés.
- Pas de modification des articles de blog (à traiter dans un second temps si vous le souhaitez).

Confirmez-moi et je lance l'exécution.