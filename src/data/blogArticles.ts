export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  // Product-like attributes for SEO
  productName: string;
  productDescription: string;
  benefits: string[];
  targetAudience: string;
  price: string;
  availability: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "syndrome-imposteur-entrepreneur",
    title: "Le syndrome de l'imposteur : pourquoi tu te sabotes en pleine réussite",
    metaTitle: "Syndrome de l'imposteur entrepreneur | Coaching Mental Frédéric Ternon",
    metaDescription: "Découvrez comment le syndrome de l'imposteur freine votre croissance entrepreneuriale et les solutions pour le dépasser définitivement.",
    excerpt: "Tu as les compétences, les résultats, mais tu te sens toujours illégitime. Ce n'est pas un problème de technique, c'est une question d'identité.",
    content: `
## Le vrai problème n'est jamais technique

Après avoir accompagné des centaines d'entrepreneurs, j'ai fait un constat troublant : **les plus brillants sont souvent ceux qui doutent le plus**.

Ils maîtrisent leur métier. Ils ont des clients satisfaits. Leur chiffre d'affaires progresse. Et pourtant, ils vivent avec cette voix intérieure qui murmure : "Tu n'es pas à ta place."

### Les symptômes que je vois tous les jours

- Tu refuses d'augmenter tes prix alors que tu le mérites
- Tu sur-délivres systématiquement par peur de décevoir
- Tu minimises tes succès en les attribuant à la chance
- Tu repousses les opportunités qui te mettraient en lumière

### La croyance cachée

Derrière le syndrome de l'imposteur se cache souvent cette croyance : **"Si les gens savaient vraiment qui je suis, ils ne m'achèteraient pas."**

Cette croyance n'est pas la réalité. C'est une programmation héritée de ton éducation, de tes premières expériences, de moments où tu as intégré que tu n'étais pas "assez".

### La Méthode 3R en action

**Reconnaître** : Identifier les moments précis où cette croyance se manifeste. Quand exactement te sens-tu illégitime ?

**Réagir** : Mettre en place des rituels de reconnexion à tes réussites concrètes, factuelles, indiscutables.

**Reprogrammer** : Installer une nouvelle identité alignée avec tes résultats réels, pas avec tes peurs imaginées.

### Ce qui change quand tu travailles sur l'identité

- Tu fixes tes prix en fonction de ta valeur, pas de ta peur
- Tu assumes ta place de leader sans t'excuser
- Tu attires des clients qui te respectent vraiment
- Tu oses viser plus grand, plus haut

**Le syndrome de l'imposteur n'est pas une fatalité. C'est un signal que ton identité n'a pas encore rattrapé tes compétences.**
    `,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    image: "/placeholder.svg",
    productName: "Accompagnement Syndrome de l'Imposteur",
    productDescription: "Programme de coaching mental pour dépasser le syndrome de l'imposteur et assumer pleinement votre réussite entrepreneuriale.",
    benefits: [
      "Identifier la croyance racine qui alimente votre syndrome",
      "Installer une identité alignée avec vos résultats",
      "Fixer vos prix sans culpabilité",
      "Assumer votre place de leader"
    ],
    targetAudience: "Entrepreneurs et dirigeants qui se sentent illégitimes malgré leurs succès",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "2",
    slug: "peur-reussite-entrepreneur",
    title: "La peur de réussir : l'ennemi invisible de ta croissance",
    metaTitle: "Peur de réussir entrepreneur | Coaching Mental Frédéric Ternon",
    metaDescription: "Pourquoi tu sabotes inconsciemment ta réussite et comment reprogrammer cette peur profonde pour débloquer ta croissance.",
    excerpt: "Tu penses avoir peur de l'échec ? Et si ton vrai frein était la peur de réussir ? Une croyance bien plus sournoise.",
    content: `
## Quand le succès fait peur

C'est paradoxal. Tu travailles dur pour réussir, et pourtant, à chaque fois que tu approches d'un nouveau palier, quelque chose te retient.

**Ce n'est pas un manque de stratégie. C'est une peur profonde de ce que le succès implique.**

### Les signes qui ne trompent pas

- Tu procrastines sur les actions qui pourraient vraiment faire décoller ton business
- Tu te trouves des excuses pour ne pas passer au niveau supérieur
- Tu saisis les opportunités... mais toujours celles juste en dessous de ton potentiel
- Tu as une sensation de malaise quand les choses vont "trop bien"

### Les croyances derrière la peur de réussir

**"Si je réussis, je vais perdre des gens que j'aime."** Peur de dépasser ses proches, de créer de la distance, de ne plus appartenir.

**"Le succès attire les problèmes."** Croyance que l'argent ou la visibilité apportent des ennuis.

**"Je ne suis pas fait pour ça."** Conviction que le succès, c'est pour les autres, pas pour toi.

### Comment je travaille cette peur avec mes clients

La peur de réussir est souvent la peur de changer d'identité. Réussir, c'est devenir quelqu'un de différent. Et ça, c'est terrorisant pour l'inconscient.

Avec la Méthode 3R :

**Reconnaître** : Nommer précisément ce que tu crains vraiment dans le succès.

**Réagir** : Désactiver les scénarios catastrophe que ton cerveau a construits.

**Reprogrammer** : Associer le succès à des émotions positives, pas à des menaces.

### Le résultat

Tu arrêtes de saboter inconsciemment ce que tu construis consciemment. Tu avances vers le succès sans frein à main.

**La croissance de ton entreprise ne dépassera jamais la croissance de ton identité.**
    `,
    category: "Croyances limitantes",
    readTime: "6 min",
    publishedAt: "2024-01-22",
    updatedAt: "2024-01-22",
    image: "/placeholder.svg",
    productName: "Accompagnement Peur de Réussir",
    productDescription: "Programme de coaching mental pour identifier et dépasser la peur de réussir qui sabote votre croissance entrepreneuriale.",
    benefits: [
      "Comprendre pourquoi vous sabotez votre succès",
      "Désactiver les croyances limitantes sur la réussite",
      "Avancer sans frein à main vers vos objectifs",
      "Aligner votre identité avec votre ambition"
    ],
    targetAudience: "Entrepreneurs qui plafonnent malgré leur potentiel",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "3",
    slug: "perfectionnisme-entrepreneur",
    title: "Le perfectionnisme : la prison dorée de l'entrepreneur",
    metaTitle: "Perfectionnisme entrepreneur | Coaching Mental Frédéric Ternon",
    metaDescription: "Comment le perfectionnisme détruit votre croissance entrepreneuriale et les clés pour en sortir sans sacrifier la qualité.",
    excerpt: "Tu appelles ça de l'exigence. En réalité, c'est une peur déguisée qui te coûte du temps, de l'argent et de l'énergie.",
    content: `
## Le perfectionnisme n'est pas une qualité

On te l'a vendu comme une force. "Je suis perfectionniste" sonne comme un badge d'honneur. En réalité, **c'est souvent une stratégie de protection contre la peur du jugement**.

### Ce que le perfectionnisme te coûte vraiment

- Des lancements repoussés indéfiniment
- Des offres jamais mises en vente
- Des opportunités ratées à force de peaufiner
- Un épuisement mental constant

### La croyance fondamentale

**"Si ce n'est pas parfait, on va me juger. Et si on me juge, ça prouve que je ne suis pas à la hauteur."**

Le perfectionnisme n'est pas une quête d'excellence. C'est une quête d'invulnérabilité. Tu crois que si tout est parfait, personne ne pourra te critiquer.

Spoiler : ils critiqueront quand même. Et tu auras juste perdu du temps.

### Les deux types de perfectionnistes

**Le perfectionniste visible** : Il passe des heures sur les détails, retravaille sans cesse, ne livre jamais à temps.

**Le perfectionniste caché** : Il procrastine. Sous couvert de "je ne suis pas prêt", il évite de se confronter au regard des autres.

### La Méthode 3R appliquée

**Reconnaître** : Distinguer l'exigence saine du perfectionnisme toxique. Où te situes-tu vraiment ?

**Réagir** : Définir le "suffisamment bon" et s'y tenir. L'excellence, ce n'est pas la perfection.

**Reprogrammer** : Associer l'action imparfaite à du courage, pas à de l'incompétence.

### Ce que tu gagnes à lâcher le perfectionnisme

- Tu lances plus vite
- Tu apprends plus vite (grâce aux retours réels)
- Tu génères des résultats plus vite
- Tu libères de l'énergie mentale pour ce qui compte vraiment

**Done is better than perfect. Mais surtout : done te permet de progresser.**
    `,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-01-29",
    updatedAt: "2024-01-29",
    image: "/placeholder.svg",
    productName: "Accompagnement Anti-Perfectionnisme",
    productDescription: "Programme de coaching mental pour transformer le perfectionnisme paralysant en excellence productive.",
    benefits: [
      "Lancer vos projets sans attendre la perfection",
      "Distinguer exigence saine et perfectionnisme toxique",
      "Libérer votre énergie mentale",
      "Accélérer votre croissance par l'action"
    ],
    targetAudience: "Entrepreneurs perfectionnistes qui n'arrivent pas à lancer ou déléguer",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "4",
    slug: "peur-argent-entrepreneur",
    title: "Ton rapport à l'argent sabote ta croissance",
    metaTitle: "Rapport à l'argent entrepreneur | Coaching Mental Frédéric Ternon",
    metaDescription: "Vos croyances sur l'argent déterminent votre chiffre d'affaires. Découvrez comment reprogrammer votre relation à l'argent.",
    excerpt: "Tes revenus sont le reflet exact de ce que tu t'autorises à recevoir. Pas de tes compétences.",
    content: `
## L'argent révèle tes croyances

Ton chiffre d'affaires n'est pas un indicateur de compétence. C'est un indicateur de ce que tu crois mériter, de ce que tu t'autorises à recevoir, de ta relation profonde à l'argent.

### Les symptômes d'un rapport toxique à l'argent

- Tu sous-factures systématiquement
- Tu offres des réductions avant même qu'on te les demande
- Tu es mal à l'aise quand on parle tarifs
- Tu repousses les relances de paiement
- Tu te sens coupable quand tu gagnes "trop"

### Les croyances les plus courantes

**"L'argent, c'est sale."** Hérité d'un environnement qui diabolisait la richesse.

**"Il faut travailler dur pour mériter de l'argent."** Croyance qui t'empêche de valoriser ton expertise.

**"Les riches sont des gens mauvais."** Conviction qui t'interdit inconsciemment de le devenir.

**"Si j'ai plus, quelqu'un d'autre aura moins."** Vision de rareté qui limite ta croissance.

### Ce qui se passe quand on travaille le rapport à l'argent

J'ai vu des entrepreneurs doubler leurs tarifs en quelques semaines. Pas parce qu'ils avaient appris une technique de vente. Parce qu'ils avaient changé leur croyance sur ce qu'ils méritaient.

### La Méthode 3R sur l'argent

**Reconnaître** : D'où viennent tes croyances sur l'argent ? Famille ? Éducation ? Expériences passées ?

**Réagir** : Identifier les comportements concrets que ces croyances génèrent dans ton business.

**Reprogrammer** : Installer de nouvelles croyances alignées avec l'abondance.

### Le résultat concret

- Tu fixes tes prix avec assurance
- Tu assumes la valeur de ton travail
- Tu attires des clients qui paient sans négocier
- Ton chiffre d'affaires augmente naturellement

**L'argent n'est pas le problème. Ta relation à l'argent l'est.**
    `,
    category: "Croyances limitantes",
    readTime: "6 min",
    publishedAt: "2024-02-05",
    updatedAt: "2024-02-05",
    image: "/placeholder.svg",
    productName: "Accompagnement Relation à l'Argent",
    productDescription: "Programme de coaching mental pour transformer votre rapport à l'argent et débloquer votre croissance financière.",
    benefits: [
      "Identifier vos croyances limitantes sur l'argent",
      "Fixer vos prix sans culpabilité",
      "Attirer des clients qui valorisent votre travail",
      "Augmenter naturellement vos revenus"
    ],
    targetAudience: "Entrepreneurs qui sous-facturent ou ont du mal avec l'argent",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "5",
    slug: "peur-visibilite-entrepreneur",
    title: "Pourquoi tu te caches : la peur de la visibilité décryptée",
    metaTitle: "Peur de la visibilité entrepreneur | Coaching Mental Frédéric Ternon",
    metaDescription: "Vous évitez de vous montrer ? Découvrez les croyances profondes derrière la peur de la visibilité et comment les dépasser.",
    excerpt: "Tu sais que tu dois te montrer pour développer ton business. Et pourtant, tu trouves toujours une excuse pour rester dans l'ombre.",
    content: `
## Se cacher n'est pas une stratégie

Tu as une expertise précieuse. Tu pourrais aider plus de monde. Mais quelque chose te retient de te mettre en avant.

**Ce n'est pas de la modestie. C'est de la peur.**

### Les formes de la peur de la visibilité

- Tu préfères le bouche-à-oreille à la prospection active
- Tu repousses la création de contenu
- Tu refuses les interviews ou les interventions publiques
- Tu délègues ta communication pour ne pas te montrer
- Tu te caches derrière ton logo au lieu de montrer ton visage

### Les croyances qui alimentent cette peur

**"Si je me montre, on va me critiquer."** Peur du jugement, des haters, des commentaires négatifs.

**"Je n'ai rien de spécial à dire."** Syndrome de l'imposteur appliqué à la communication.

**"Se mettre en avant, c'est prétentieux."** Croyance que la visibilité est de l'égo mal placé.

**"Si je réussis trop, je vais attirer la jalousie."** Peur d'être une cible.

### La vérité sur la visibilité

Les gens qui ont besoin de toi ne peuvent pas te trouver si tu te caches. **Ton invisibilité n'est pas de l'humilité, c'est un désservice pour ceux que tu pourrais aider.**

### La Méthode 3R appliquée

**Reconnaître** : Quelle peur précise se cache derrière ton évitement de la visibilité ?

**Réagir** : Déconstruire les scénarios catastrophe. Qu'est-ce qui peut vraiment arriver de grave ?

**Reprogrammer** : Associer la visibilité à l'impact, au service, pas à l'égo.

### Le changement concret

- Tu crées du contenu sans procrastiner
- Tu assumes ta voix et ton message
- Tu attires des clients alignés avec tes valeurs
- Tu deviens une référence dans ton domaine

**La visibilité n'est pas optionnelle. C'est le carburant de ta croissance.**
    `,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-02-12",
    updatedAt: "2024-02-12",
    image: "/placeholder.svg",
    productName: "Accompagnement Visibilité Authentique",
    productDescription: "Programme de coaching mental pour dépasser la peur de la visibilité et rayonner avec authenticité.",
    benefits: [
      "Comprendre ce qui vous retient de vous montrer",
      "Créer du contenu sans procrastiner",
      "Assumer votre voix et votre message unique",
      "Devenir une référence dans votre domaine"
    ],
    targetAudience: "Entrepreneurs qui évitent de se mettre en avant",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "6",
    slug: "identite-entrepreneur-evolution",
    title: "Ton identité est ton plafond : comment évoluer vraiment",
    metaTitle: "Identité entrepreneur croissance | Coaching Mental Frédéric Ternon",
    metaDescription: "Votre entreprise ne dépassera jamais votre identité. Découvrez comment faire évoluer qui vous êtes pour débloquer votre croissance.",
    excerpt: "Tu ne peux pas atteindre des objectifs de millionnaire avec une identité de salarié. Ta croissance commence par qui tu deviens.",
    content: `
## La croissance est d'abord intérieure

J'ai accompagné des entrepreneurs qui avaient tout : les compétences, le marché, les ressources. Et pourtant, ils plafonnaient. **Leur entreprise avait atteint la limite de leur identité.**

### Le principe fondamental

**Ta business ne dépassera jamais la personne que tu es.**

Si tu te vois comme "quelqu'un qui gagne 5000€/mois", tu vas inconsciemment saboter tout ce qui pourrait te faire dépasser ce seuil. C'est mathématique.

### Les signes que ton identité te limite

- Tu atteins toujours le même palier de revenus
- Tu te sens mal à l'aise dans des contextes "au-dessus" de toi
- Tu as du mal à déléguer (parce que "personne ne fait aussi bien que moi")
- Tu retombes toujours dans les mêmes patterns

### Comment l'identité se forme

Ton identité actuelle est le résultat de :
- Ton éducation et tes premières années
- Les étiquettes qu'on t'a collées
- Tes succès et tes échecs passés
- L'environnement dans lequel tu évolues

**La bonne nouvelle : l'identité n'est pas fixe. Elle se transforme.**

### La Méthode 3R pour l'évolution identitaire

**Reconnaître** : Qui es-tu aujourd'hui ? Quelles croyances définissent ton identité actuelle ?

**Réagir** : Identifier l'écart entre ton identité actuelle et celle nécessaire pour tes objectifs.

**Reprogrammer** : Installer progressivement les croyances, les habitudes et les comportements de ta nouvelle identité.

### Le processus de transformation

Ce n'est pas magique. C'est un travail de répétition consciente :
- Changer ton environnement
- Changer ton langage interne
- Changer tes actions quotidiennes
- Changer ta vision de toi-même

### Le résultat

Tu ne te fixes plus d'objectifs "réalistes" basés sur ton passé. Tu vises ce que tu veux vraiment et tu deviens la personne capable de l'atteindre.

**La question n'est pas "comment faire ?" mais "qui dois-je devenir ?"**
    `,
    category: "Identité & Croissance",
    readTime: "7 min",
    publishedAt: "2024-02-19",
    updatedAt: "2024-02-19",
    image: "/placeholder.svg",
    productName: "Accompagnement Évolution Identitaire",
    productDescription: "Programme de coaching mental pour transformer votre identité et débloquer le prochain niveau de votre croissance.",
    benefits: [
      "Identifier les limites de votre identité actuelle",
      "Définir qui vous devez devenir pour atteindre vos objectifs",
      "Transformer progressivement vos croyances fondamentales",
      "Briser vos plafonds de revenus"
    ],
    targetAudience: "Entrepreneurs qui plafonnent malgré leurs efforts",
    price: "Sur mesure",
    availability: "Disponible"
  }
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): BlogArticle[] => {
  return blogArticles
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit);
};
