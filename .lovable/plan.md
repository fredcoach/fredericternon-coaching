### Objectif
Recentrer le menu de navigation principal sur les pages de contenu et de conversion, en retirant les ancres internes de la homepage.

### Modifications
1. **Navigation principale** (`src/components/landing/Navigation.tsx`)
   - Retirer `À propos` et `FAQ` du tableau `navLinks` (ancres internes).
   - Ajouter `Ressources` et `Presse` au tableau `pageLinks` (pages séparées), à côté de `Blog`.

2. **Footer** (`src/components/landing/Footer.tsx`)
   - Vérifier que les liens vers `/ressources` et `/presse` sont présents dans la section Navigation du footer.
   - S'assurer que `FAQ` et `À propos` ne sont pas répétés en trop dans le footer si ce n'est plus pertinent.

### Résultat attendu
Le menu desktop et mobile affiche : Offre, Flash Décision, Diagnostic, Blog, Ressources, Presse. Les ancres `À propos` et `FAQ` restent accessibles en scrollant sur la homepage.