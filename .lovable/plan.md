## Problème
Sur smartphone, la section Hero manque d'air — le texte (titre `text-3xl`) est trop proche des bords malgré un padding de 32px. Sur des écrans de 375–390px, cela crée un effet de "pas de marge" visuelle.

## Solution

### 1. Adapter la taille du titre en mobile
- Réduire le titre du hero en mobile : `text-2xl` en dessous de `sm`, puis `sm:text-3xl`, `md:text-4xl`, etc.
- Cela laisse plus d'espace pour le texte et évite l'effet bord-à-bord.

### 2. Ajouter du padding interne au contenu
- Ajouter `px-4` (16px) sur le wrapper interne `max-w-5xl` en mobile uniquement (`sm:px-0`).
- Cela crée une double marge visuelle sans réduire drastiquement la zone de texte.

### 3. Ajuster l'espacement vertical mobile
- Réduire `py-20` à `py-16` en dessous de `md` pour éviter que le contenu ne soit trop étiré verticalement sur petits écrans.

### Fichier concerné
- `src/components/landing/HeroSection.tsx` (lignes 70–92 environ)

C'est une modification ciblée d'environ 3–4 lignes.