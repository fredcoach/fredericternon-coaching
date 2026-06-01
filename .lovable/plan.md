## Nouveau bloc de transition vers la Méthode 3R

### Objectif
Insérer un bloc passerelle entre le témoignage vidéo de Laurent (`BeforeAfterSection`) et le bloc `Method3RSection`, pour expliquer pourquoi les solutions classiques (recrutement, outil, process, réorganisation) ne suffisent pas toujours — sans tomber dans le registre coaching / développement personnel.

### Emplacement
Dans `src/pages/Index.tsx`, intercaler le nouveau composant juste après `<BeforeAfterSection />` et avant `<ProblemSolutionSection />` ? Non — la demande précise « entre le bloc témoignages/vidéo ET le bloc Méthode 3R ». L'ordre actuel est :

```text
BeforeAfterSection (contient le témoignage Laurent)
ProblemSolutionSection
PromiseSection
Method3RSection
```

Le bloc doit servir de **passerelle directe vers la Méthode 3R**, donc il sera placé **juste avant `<Method3RSection />`** (après `PromiseSection`). Cela garantit la transition « Et c'est précisément ce que structure la Méthode 3R. » → enchaînement immédiat sur le bloc 3R.

### Nouveau composant
Fichier : `src/components/landing/OrganigrammeSection.tsx`

Structure :
1. **Eyebrow** (petit label en accent or, uppercase tracking-widest) : `Au-delà de l'organigramme`
2. **Titre H2 serif** : `Ce qui bloque n'est pas toujours dans l'organigramme` (avec mise en valeur de « l'organigramme » via `text-gradient` ou `text-accent`).
3. **Paragraphe d'intro** : « Quand une PME grandit, le premier réflexe est souvent de chercher la solution dans : »
4. **Liste 1 (4 puces avec icônes Lucide discrètes)** :
   - Recrutement → icône `UserPlus`
   - Nouvel outil → icône `Wrench` (ou `Settings2`)
   - Nouveau process → icône `FileCog` (ou `ClipboardList`)
   - Réorganisation → icône `Network` (ou `LayoutGrid`)
   Rendu : grille 2x2 (md:grid-cols-4 sur desktop) de petites cartes sobres (icône + label).
5. **Pivot** : « Parfois, c'est exactement ce qu'il faut. » (phrase isolée, italique ou légèrement plus grande)
6. **Paragraphe charnière** : « Mais lorsque les décisions remontent toujours au dirigeant, que les responsabilités restent floues ou que les mêmes difficultés réapparaissent malgré les changements, le problème n'est plus uniquement organisationnel. »
7. **Sous-titre court** : « Il se situe souvent dans la façon dont l'entreprise est pilotée au quotidien : »
8. **Liste 2 (5 puces texte, sans icône, style sobre avec tiret/point accent)** :
   - comment les décisions sont prises
   - comment les responsabilités sont distribuées
   - comment les priorités sont arbitrées
   - comment les recrutements sont intégrés
   - comment le dirigeant intervient lorsque la pression augmente
9. **Paragraphe de synthèse** : « C'est pour cette raison que l'accompagnement porte à la fois sur l'organisation visible et sur les mécanismes de pilotage qui la font fonctionner. »
10. **Transition finale** (encadrée discrètement, type pill ou bordure haute en accent) : « Et c'est précisément ce que structure la Méthode 3R. » → sert de pont visuel vers la section suivante.

### Design (tokens existants)
- Section pleine largeur, fond `bg-background` (clair / ivoire), padding `py-20 md:py-28`.
- Conteneur centré `max-w-4xl`, contenu rythmé verticalement (`space-y-8`).
- Typo : titre `font-serif text-3xl md:text-4xl font-bold`, paragraphes `text-base md:text-lg text-foreground/80 leading-relaxed`.
- Cartes liste 1 : `bg-card border border-border rounded-xl p-5`, icône dans pastille `bg-primary/10 text-primary w-10 h-10 rounded-lg`.
- Liste 2 : puces minimalistes (`•` accent or, texte `text-foreground/85`).
- Transition finale : bloc centré avec liseré accent (`border-l-2 border-accent pl-5` ou pill `bg-primary/5`).
- Animation d'entrée via `useScrollAnimation` (cohérent avec le reste du site).
- Aucun vocabulaire coaching / psy. Ton cabinet de conseil.

### Intégration
`src/pages/Index.tsx` :
- Import `OrganigrammeSection`.
- Placer `<OrganigrammeSection />` immédiatement avant `<Method3RSection />`.

### Non-régression
- Aucun autre composant modifié.
- Pas de nouvelle dépendance (icônes Lucide déjà disponibles).
- Tokens design existants uniquement (pas de couleurs en dur).
