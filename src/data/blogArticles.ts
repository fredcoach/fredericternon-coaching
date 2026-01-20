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
  ogImage: string; // Image OG personnalisée pour le partage social
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
    content: `<p>Après avoir accompagné des centaines d'entrepreneurs, j'ai fait un constat troublant : <strong>les plus brillants sont souvent ceux qui doutent le plus</strong>.</p>

<p>Ils maîtrisent leur métier. Ils ont des clients satisfaits. Leur chiffre d'affaires progresse. Et pourtant, ils vivent avec cette voix intérieure qui murmure : "Tu n'es pas à ta place."</p>

<p>Je le vois tous les jours dans mes accompagnements :</p>
<ul>
<li>Tu refuses d'augmenter tes prix alors que tu le mérites</li>
<li>Tu sur-délivres systématiquement par peur de décevoir</li>
<li>Tu minimises tes succès en les attribuant à la chance</li>
<li>Tu repousses les opportunités qui te mettraient en lumière</li>
</ul>

<h2>La croyance qui se cache derrière</h2>

<p>Derrière le syndrome de l'imposteur, il y a presque toujours cette pensée : <strong>"Si les gens savaient vraiment qui je suis, ils ne m'achèteraient pas."</strong></p>

<p>Cette croyance n'est pas la réalité. C'est une programmation héritée de ton éducation, de tes premières expériences, de moments où tu as intégré que tu n'étais pas "assez".</p>

<h2>Comment je travaille ça avec mes clients</h2>

<p>Avec la Méthode 3R, on attaque le problème à la racine :</p>

<p><strong>Reconnaître</strong> — On identifie les moments précis où cette croyance se manifeste. Quand exactement te sens-tu illégitime ?</p>

<p><strong>Réagir</strong> — On met en place des rituels de reconnexion à tes réussites concrètes, factuelles, indiscutables.</p>

<p><strong>Reprogrammer</strong> — On installe une nouvelle identité alignée avec tes résultats réels, pas avec tes peurs imaginées.</p>

<h2>Ce qui change concrètement</h2>

<p>Mes clients qui ont travaillé sur leur syndrome de l'imposteur ont vécu des transformations profondes :</p>
<ul>
<li>Ils fixent leurs prix en fonction de leur valeur, pas de leur peur</li>
<li>Ils assument leur place de leader sans s'excuser</li>
<li>Ils attirent des clients qui les respectent vraiment</li>
<li>Ils osent viser plus grand, plus haut</li>
</ul>

<p><strong>Le syndrome de l'imposteur n'est pas une fatalité. C'est un signal que ton identité n'a pas encore rattrapé tes compétences.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    image: "/assets/blog-syndrome-imposteur.jpg",
    ogImage: "/images/og-syndrome-imposteur.jpg",
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
    content: `<p>C'est paradoxal. Tu travailles dur pour réussir, et pourtant, à chaque fois que tu approches d'un nouveau palier, quelque chose te retient.</p>

<p><strong>Ce n'est pas un manque de stratégie. C'est une peur profonde de ce que le succès implique.</strong></p>

<p>Les signes sont là, si tu acceptes de les voir :</p>
<ul>
<li>Tu procrastines sur les actions qui pourraient vraiment faire décoller ton business</li>
<li>Tu te trouves des excuses pour ne pas passer au niveau supérieur</li>
<li>Tu saisis les opportunités... mais toujours celles juste en dessous de ton potentiel</li>
<li>Tu ressens un malaise quand les choses vont "trop bien"</li>
</ul>

<h2>Les croyances qui alimentent cette peur</h2>

<p><strong>"Si je réussis, je vais perdre des gens que j'aime."</strong> C'est la peur de dépasser ses proches, de créer de la distance, de ne plus appartenir.</p>

<p><strong>"Le succès attire les problèmes."</strong> Cette croyance t'a convaincu que l'argent ou la visibilité apportent des ennuis.</p>

<p><strong>"Je ne suis pas fait pour ça."</strong> La conviction que le succès, c'est pour les autres, pas pour toi.</p>

<h2>Ce que j'observe chez mes clients</h2>

<p>La peur de réussir est souvent la peur de changer d'identité. Réussir, c'est devenir quelqu'un de différent. Et ça, c'est terrorisant pour l'inconscient.</p>

<p>Avec la Méthode 3R, voici comment on travaille ensemble :</p>

<p><strong>Reconnaître</strong> — On nomme précisément ce que tu crains vraiment dans le succès.</p>

<p><strong>Réagir</strong> — On désactive les scénarios catastrophe que ton cerveau a construits.</p>

<p><strong>Reprogrammer</strong> — On associe le succès à des émotions positives, pas à des menaces.</p>

<h2>Le résultat</h2>

<p>Tu arrêtes de saboter inconsciemment ce que tu construis consciemment. Tu avances vers le succès sans frein à main.</p>

<p><strong>La croissance de ton entreprise ne dépassera jamais la croissance de ton identité.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "6 min",
    publishedAt: "2024-01-22",
    updatedAt: "2024-01-22",
    image: "/assets/blog-peur-reussite.jpg",
    ogImage: "/images/og-peur-reussite.jpg",
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
    content: `<p>On te l'a vendu comme une force. "Je suis perfectionniste" sonne comme un badge d'honneur. En réalité, <strong>c'est souvent une stratégie de protection contre la peur du jugement</strong>.</p>

<p>Regarde ce que ça te coûte vraiment :</p>
<ul>
<li>Des lancements repoussés indéfiniment</li>
<li>Des offres jamais mises en vente</li>
<li>Des opportunités ratées à force de peaufiner</li>
<li>Un épuisement mental constant</li>
</ul>

<h2>La croyance au cœur du perfectionnisme</h2>

<p><strong>"Si ce n'est pas parfait, on va me juger. Et si on me juge, ça prouve que je ne suis pas à la hauteur."</strong></p>

<p>Le perfectionnisme n'est pas une quête d'excellence. C'est une quête d'invulnérabilité. Tu crois que si tout est parfait, personne ne pourra te critiquer.</p>

<p>Spoiler : ils critiqueront quand même. Et tu auras juste perdu du temps.</p>

<h2>Deux visages du perfectionnisme</h2>

<p><strong>Le perfectionniste visible</strong> passe des heures sur les détails, retravaille sans cesse, ne livre jamais à temps.</p>

<p><strong>Le perfectionniste caché</strong> procrastine. Sous couvert de "je ne suis pas prêt", il évite de se confronter au regard des autres.</p>

<h2>Mon approche avec la Méthode 3R</h2>

<p><strong>Reconnaître</strong> — On distingue l'exigence saine du perfectionnisme toxique. Où te situes-tu vraiment ?</p>

<p><strong>Réagir</strong> — On définit le "suffisamment bon" et on s'y tient. L'excellence, ce n'est pas la perfection.</p>

<p><strong>Reprogrammer</strong> — On associe l'action imparfaite à du courage, pas à de l'incompétence.</p>

<h2>Ce que tu gagnes à lâcher le perfectionnisme</h2>

<ul>
<li>Tu lances plus vite</li>
<li>Tu apprends plus vite grâce aux retours réels</li>
<li>Tu génères des résultats plus vite</li>
<li>Tu libères de l'énergie mentale pour ce qui compte vraiment</li>
</ul>

<p><strong>Done is better than perfect. Mais surtout : done te permet de progresser.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-01-29",
    updatedAt: "2024-01-29",
    image: "/assets/blog-perfectionnisme.jpg",
    ogImage: "/images/og-perfectionnisme.jpg",
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
    content: `<p>Ton chiffre d'affaires n'est pas un indicateur de compétence. C'est un indicateur de ce que tu crois mériter, de ce que tu t'autorises à recevoir, de ta relation profonde à l'argent.</p>

<p>Voici les signes d'un rapport toxique à l'argent :</p>
<ul>
<li>Tu sous-factures systématiquement</li>
<li>Tu offres des réductions avant même qu'on te les demande</li>
<li>Tu es mal à l'aise quand on parle tarifs</li>
<li>Tu repousses les relances de paiement</li>
<li>Tu te sens coupable quand tu gagnes "trop"</li>
</ul>

<h2>Les croyances que je rencontre le plus souvent</h2>

<p><strong>"L'argent, c'est sale."</strong> Hérité d'un environnement qui diabolisait la richesse.</p>

<p><strong>"Il faut travailler dur pour mériter de l'argent."</strong> Cette croyance t'empêche de valoriser ton expertise à sa juste valeur.</p>

<p><strong>"Les riches sont des gens mauvais."</strong> Une conviction qui t'interdit inconsciemment de le devenir.</p>

<p><strong>"Si j'ai plus, quelqu'un d'autre aura moins."</strong> Vision de rareté qui limite ta croissance.</p>

<h2>Ce que j'ai observé chez mes clients</h2>

<p>J'ai vu des entrepreneurs doubler leurs tarifs en quelques semaines. Pas parce qu'ils avaient appris une technique de vente. Parce qu'ils avaient changé leur croyance sur ce qu'ils méritaient.</p>

<h2>La Méthode 3R appliquée à l'argent</h2>

<p><strong>Reconnaître</strong> — D'où viennent tes croyances sur l'argent ? Famille ? Éducation ? Expériences passées ?</p>

<p><strong>Réagir</strong> — On identifie les comportements concrets que ces croyances génèrent dans ton business.</p>

<p><strong>Reprogrammer</strong> — On installe de nouvelles croyances alignées avec l'abondance.</p>

<h2>Les résultats concrets</h2>

<ul>
<li>Tu fixes tes prix avec assurance</li>
<li>Tu assumes la valeur de ton travail</li>
<li>Tu attires des clients qui paient sans négocier</li>
<li>Ton chiffre d'affaires augmente naturellement</li>
</ul>

<p><strong>L'argent n'est pas le problème. Ta relation à l'argent l'est.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "6 min",
    publishedAt: "2024-02-05",
    updatedAt: "2024-02-05",
    image: "/assets/blog-peur-argent.jpg",
    ogImage: "/images/og-peur-argent.jpg",
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
    content: `<p>Tu as une expertise précieuse. Tu pourrais aider plus de monde. Mais quelque chose te retient de te mettre en avant.</p>

<p><strong>Ce n'est pas de la modestie. C'est de la peur.</strong></p>

<p>Je le vois chez beaucoup d'entrepreneurs :</p>
<ul>
<li>Tu préfères le bouche-à-oreille à la prospection active</li>
<li>Tu repousses la création de contenu</li>
<li>Tu refuses les interviews ou les interventions publiques</li>
<li>Tu délègues ta communication pour ne pas te montrer</li>
<li>Tu te caches derrière ton logo au lieu de montrer ton visage</li>
</ul>

<h2>Les croyances qui nourrissent cette peur</h2>

<p><strong>"Si je me montre, on va me critiquer."</strong> La peur du jugement, des haters, des commentaires négatifs.</p>

<p><strong>"Je n'ai rien de spécial à dire."</strong> C'est le syndrome de l'imposteur appliqué à la communication.</p>

<p><strong>"Se mettre en avant, c'est prétentieux."</strong> La croyance que la visibilité est de l'égo mal placé.</p>

<p><strong>"Si je réussis trop, je vais attirer la jalousie."</strong> La peur d'être une cible.</p>

<h2>La vérité que tu dois entendre</h2>

<p>Les gens qui ont besoin de toi ne peuvent pas te trouver si tu te caches. <strong>Ton invisibilité n'est pas de l'humilité, c'est un désservice pour ceux que tu pourrais aider.</strong></p>

<h2>Mon approche avec la Méthode 3R</h2>

<p><strong>Reconnaître</strong> — Quelle peur précise se cache derrière ton évitement de la visibilité ?</p>

<p><strong>Réagir</strong> — On déconstruit les scénarios catastrophe. Qu'est-ce qui peut vraiment arriver de grave ?</p>

<p><strong>Reprogrammer</strong> — On associe la visibilité à l'impact, au service, pas à l'égo.</p>

<h2>Le changement que tu vas vivre</h2>

<ul>
<li>Tu crées du contenu sans procrastiner</li>
<li>Tu assumes ta voix et ton message</li>
<li>Tu attires des clients alignés avec tes valeurs</li>
<li>Tu deviens une référence dans ton domaine</li>
</ul>

<p><strong>La visibilité n'est pas optionnelle. C'est le carburant de ta croissance.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-02-12",
    updatedAt: "2024-02-12",
    image: "/assets/blog-peur-visibilite.jpg",
    ogImage: "/images/og-peur-visibilite.jpg",
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
    content: `<p>J'ai accompagné des entrepreneurs qui avaient tout : les compétences, le marché, les ressources. Et pourtant, ils plafonnaient. <strong>Leur entreprise avait atteint la limite de leur identité.</strong></p>

<p><strong>Ta business ne dépassera jamais la personne que tu es.</strong></p>

<p>Si tu te vois comme "quelqu'un qui gagne 5000€/mois", tu vas inconsciemment saboter tout ce qui pourrait te faire dépasser ce seuil. C'est mathématique.</p>

<p>Voici les signes que ton identité te limite :</p>
<ul>
<li>Tu atteins toujours le même palier de revenus</li>
<li>Tu te sens mal à l'aise dans des contextes "au-dessus" de toi</li>
<li>Tu as du mal à déléguer parce que "personne ne fait aussi bien que moi"</li>
<li>Tu retombes toujours dans les mêmes patterns</li>
</ul>

<h2>Comment ton identité s'est construite</h2>

<p>Ton identité actuelle est le résultat de plusieurs facteurs :</p>
<ul>
<li>Ton éducation et tes premières années</li>
<li>Les étiquettes qu'on t'a collées</li>
<li>Tes succès et tes échecs passés</li>
<li>L'environnement dans lequel tu évolues</li>
</ul>

<p><strong>La bonne nouvelle : l'identité n'est pas fixe. Elle se transforme.</strong></p>

<h2>La Méthode 3R pour l'évolution identitaire</h2>

<p><strong>Reconnaître</strong> — Qui es-tu aujourd'hui ? Quelles croyances définissent ton identité actuelle ?</p>

<p><strong>Réagir</strong> — On identifie l'écart entre ton identité actuelle et celle nécessaire pour tes objectifs.</p>

<p><strong>Reprogrammer</strong> — On installe progressivement les croyances, les habitudes et les comportements de ta nouvelle identité.</p>

<h2>Le processus de transformation</h2>

<p>Ce n'est pas magique. C'est un travail de répétition consciente :</p>
<ul>
<li>Changer ton environnement</li>
<li>Changer ton langage interne</li>
<li>Changer tes actions quotidiennes</li>
<li>Changer ta vision de toi-même</li>
</ul>

<h2>Ce que tu vas vivre</h2>

<p>Tu ne te fixes plus d'objectifs "réalistes" basés sur ton passé. Tu vises ce que tu veux vraiment et tu deviens la personne capable de l'atteindre.</p>

<p><strong>La question n'est pas "comment faire ?" mais "qui dois-je devenir ?"</strong></p>`,
    category: "Identité & Croissance",
    readTime: "7 min",
    publishedAt: "2024-02-19",
    updatedAt: "2024-02-19",
    image: "/assets/blog-identite-evolution.jpg",
    ogImage: "/images/og-identite-evolution.jpg",
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
