## Refonte de la section "Histoires de transformation"

Objectif : repositionner l'habillage de la section (titre, intros, légendes, CTA) pour parler aux dirigeants PME, sans toucher aux captures WhatsApp ni au contenu des témoignages.

### Fichier modifié
- `src/components/landing/TestimonialsSection.tsx`

### 1. Nouveau titre + sous-titre
Remplacer le bloc titre actuel par :
- **H2** : "Clarté, recul, énergie <span gradient>retrouvée</span>"
- **Sous-titre** : "Des retours bruts, issus de conversations WhatsApp, partagés avec accord. Ils montrent ce qui revient souvent après l'accompagnement : moins de charge mentale, plus de recul, une posture plus stable et une meilleure capacité à avancer."

### 2. Texte d'introduction (nouveau bloc, sous le sous-titre)
Paragraphe en italique / contenu premium :
> "Avant de mieux piloter son entreprise, il faut souvent retrouver de l'espace mental. Ces retours montrent une chose simple : quand la charge intérieure baisse, la clarté revient. Et avec elle, la capacité à décider, poser un cadre, dire non et avancer avec plus de stabilité."

### 3. Nouveau bloc "Ce que ces retours illustrent"
Inséré avant le carousel des captures. Carte sobre (bg-card, border, padding), titre `h3`, puis liste à puces fléchées :
- moins de pensées parasites
- plus de clarté intérieure
- meilleure capacité à dire non sans culpabiliser
- retour d'un équilibre personnel
- plus de calme sous pression
- énergie plus disponible
- posture plus stable dans le quotidien

Mise en page : grille 2 colonnes sur desktop, 1 sur mobile, icône flèche en accent primary.

### 4. Légendes par capture (ordre d'affichage modifié)
Réordonner le tableau `testimonials` dans l'ordre Fatima → Marie → Estelle et remplacer le champ `highlight` par une légende contextuelle (affichée comme légende au-dessus de la capture, en plus petit / muted) :
- **Fatima** : "Moins de pensées parasites. Plus de capacité à poser un cadre."
- **Marie** : "Retour d'équilibre et regain d'énergie en quelques semaines."
- **Estelle** : "Plus de calme intérieur, moins d'anciens automatismes, plus d'alignement."

Les captures et leur affichage WhatsApp restent inchangés.

### 5. CTA en bas de section
Ajouter sous le "Trust indicator" un bloc CTA centré :
- Texte : "Vous voulez identifier ce qui bloque dans votre pilotage ?"
- Bouton primary : "30 min pour faire le point" → lien vers la page rendez-vous (même cible que les autres CTA d'appointment du site)

### 6. Style
Sobre, premium : typographie serif pour le H2, pas d'emoji décoratif rose, accents en `primary` discret, espacements généreux. Conserver les tokens existants (bg-card, border-border/50, text-muted-foreground, text-gradient).

### Hors scope
- Aucune modification des images de captures WhatsApp.
- Aucune modification de la vidéo Mahel (reste en l'état au-dessus du carousel).
- Aucun changement de la logique du carousel.
