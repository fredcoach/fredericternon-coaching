# Régénération du guide PDF « Sortir de la roue du hamster »

## Objectif

Corriger l'erreur de prix (auto-diagnostic à **47 €** et non gratuit), enrichir visuellement le PDF avec le **logo Alpha PME** et des **images d'illustration**, tout en gardant le ton premium B2B (marine + or + ivoire).

## Corrections de contenu

Dans la section « Aller plus loin » (chapitre 07) :

- Avant : `1. L'auto-diagnostic en ligne (gratuit, 10 min)`
- Après : `1. L'auto-diagnostic en ligne (47 €, 10 min)`
- Mettre à jour la description si nécessaire pour rester cohérent.

Vérification globale : retirer toute autre mention « gratuit » qui concernerait le diagnostic.

## Enrichissement visuel

1. **Logo Alpha PME** (`src/assets/alpha-pme-horizontal-light.png` sur fonds marine, `src/assets/alpha-pme-horizontal.png` sur fond ivoire) :
   - Couverture : grand logo centré sous le titre.
   - Pied de page de chaque page intérieure : logo discret + numéro de page.
2. **Image de couverture** : visuel d'illustration en bandeau (concept « roue du hamster » → dirigeant qui reprend le contrôle, sobre, marine/or).
3. **Images d'ouverture de chapitre** (1 par chapitre, format bandeau 16:9 doux, surtitrage chapitre) :
   - Ch.01 Pourquoi vous courez sans avancer — visuel symbolique mouvement circulaire.
   - Ch.02 Les 5 symptômes — visuel agenda saturé / mains qui jonglent.
   - Ch.03 Le vrai coût — visuel graphique abstrait marine/or.
   - Ch.04 Les 3 leviers — visuel 3 piliers / engrenages clarifiés.
   - Ch.05 Protocole 30 jours — visuel calendrier épuré.
   - Ch.06 Auto-diagnostic — visuel checklist sur bureau.
   - Ch.07 Aller plus loin — visuel horizon / ouverture.
4. **Citations** mises en exergue avec un filet doré et un fond ivoire léger (déjà partiellement présent, à harmoniser).

## Approche technique

- Créer `scripts/generate-guide-pdf.py` (ReportLab + Platypus) avec :
  - Page A4, marges 18 mm.
  - Palette HSL → hex : marine `#0F1B3D`, or `#C9A04E`, ivoire `#F7F3EA`, texte `#1A1A1A`.
  - Polices : famille système (Helvetica) avec hiérarchie claire (Title 36pt, H1 22pt, body 11pt, caption 9pt).
  - Header/footer Platypus avec logo + pagination + url `alphadirigeant.solutions`.
  - Couverture pleine page + sommaire + 7 chapitres avec image d'ouverture.
- Générer les 8 images d'illustration via `imagegen--generate_image` (qualité `fast`, 1536×864), enregistrées dans `/tmp/guide-images/` (non versionnées).
- Compiler le PDF vers `public/ressources/guide-sortir-roue-hamster-alpha-pme.pdf` (overwrite).
- QA : convertir le PDF en images (`pdftoppm`) et inspecter chaque page (overlap, marges, lisibilité), corriger puis re-générer jusqu'à zéro défaut.

## Fichiers impactés

- **Nouveau** : `scripts/generate-guide-pdf.py`
- **Remplacé** : `public/ressources/guide-sortir-roue-hamster-alpha-pme.pdf`
- Aucun autre fichier app modifié (le lien de téléchargement pointe déjà sur ce PDF).

## Hors scope

- Pas de changement du composant de téléchargement ni du tracking lead.
- Pas de version multilingue.
- Pas de retravail du texte au-delà de la correction du prix.
