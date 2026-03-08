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
    metaTitle: "Syndrome de l'imposteur dirigeant | Coaching Mental Frédéric Ternon",
    metaDescription: "Découvrez comment le syndrome de l'imposteur freine votre leadership et les solutions pour le dépasser définitivement en tant que dirigeant.",
    excerpt: "Tu as les compétences, les résultats, mais tu te sens toujours illégitime. Ce n'est pas un problème de technique, c'est une question d'identité.",
    content: `<p>Après avoir accompagné des centaines de dirigeants et chefs d'entreprise, j'ai fait un constat troublant : <strong>les plus brillants sont souvent ceux qui doutent le plus</strong>.</p>

<p>Ils maîtrisent leur métier. Ils ont des équipes qui performent. Leur chiffre d'affaires progresse. Et pourtant, ils vivent avec cette voix intérieure qui murmure : "Tu n'es pas à ta place."</p>

<p>Je le vois tous les jours dans mes accompagnements :</p>
<ul>
<li>Tu refuses de revendiquer tes résultats en comité de direction</li>
<li>Tu sur-délivres systématiquement par peur de décevoir tes associés ou clients</li>
<li>Tu minimises tes succès en les attribuant à ton équipe ou à la chance</li>
<li>Tu repousses les opportunités qui te mettraient en lumière (conférences, médias, partenariats stratégiques)</li>
</ul>

<h2>La croyance qui se cache derrière</h2>

<p>Derrière le syndrome de l'imposteur, il y a presque toujours cette pensée : <strong>"Si mes associés, mes investisseurs ou mes équipes savaient vraiment qui je suis, ils perdraient confiance."</strong></p>

<p>Cette croyance n'est pas la réalité. C'est une programmation héritée de ton éducation, de tes premières expériences managériales, de moments où tu as intégré que tu n'étais pas "assez".</p>

<h2>Comment je travaille ça avec mes clients dirigeants</h2>

<p>Avec la Méthode 3R, on attaque le problème à la racine :</p>

<p><strong>Reconnaître</strong> — On identifie les moments précis où cette croyance se manifeste. Avant une réunion stratégique ? Lors d'une négociation ? Quand tu dois trancher seul ?</p>

<p><strong>Réagir</strong> — On met en place des rituels de reconnexion à tes réussites concrètes, factuelles, indiscutables — les décisions qui ont fait avancer ton entreprise.</p>

<p><strong>Reprogrammer</strong> — On installe une nouvelle identité de leader alignée avec tes résultats réels, pas avec tes peurs imaginées.</p>

<h2>Ce qui change concrètement</h2>

<p>Mes clients dirigeants qui ont travaillé sur leur syndrome de l'imposteur ont vécu des transformations profondes :</p>
<ul>
<li>Ils assument leurs décisions stratégiques sans chercher la validation</li>
<li>Ils incarnent leur rôle de leader sans s'excuser</li>
<li>Ils délèguent avec confiance et attirent les meilleurs talents</li>
<li>Ils osent viser plus grand : acquisitions, nouveaux marchés, pivots stratégiques</li>
</ul>

<p><strong>Le syndrome de l'imposteur n'est pas une fatalité. C'est un signal que ton identité de dirigeant n'a pas encore rattrapé tes compétences.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    image: "/assets/blog-syndrome-imposteur.jpg",
    ogImage: "/images/og-syndrome-imposteur.jpg",
    productName: "Accompagnement Syndrome de l'Imposteur",
    productDescription: "Programme de coaching mental pour dirigeants : dépasser le syndrome de l'imposteur et assumer pleinement votre leadership.",
    benefits: [
      "Identifier la croyance racine qui alimente votre syndrome",
      "Installer une identité de leader alignée avec vos résultats",
      "Décider avec assurance en comité de direction",
      "Assumer votre place de dirigeant"
    ],
    targetAudience: "Dirigeants et chefs d'entreprise qui se sentent illégitimes malgré leurs succès",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "2",
    slug: "peur-reussite-entrepreneur",
    title: "La peur de réussir : l'ennemi invisible de ta croissance",
    metaTitle: "Peur de réussir dirigeant | Coaching Mental Frédéric Ternon",
    metaDescription: "Pourquoi vous sabotez inconsciemment la croissance de votre entreprise et comment reprogrammer cette peur profonde.",
    excerpt: "Tu penses avoir peur de l'échec ? Et si ton vrai frein était la peur de réussir ? Une croyance bien plus sournoise.",
    content: `<p>C'est paradoxal. Tu pilotes une entreprise, tu prends des décisions chaque jour, et pourtant, à chaque fois que tu approches d'un nouveau palier, quelque chose te retient.</p>

<p><strong>Ce n'est pas un manque de stratégie. C'est une peur profonde de ce que le succès implique pour toi et ton entreprise.</strong></p>

<p>Les signes sont là, si tu acceptes de les voir :</p>
<ul>
<li>Tu procrastines sur les décisions stratégiques qui pourraient vraiment faire franchir un cap à ta structure</li>
<li>Tu te trouves des excuses pour ne pas recruter, ne pas lever des fonds, ne pas ouvrir un nouveau marché</li>
<li>Tu saisis les opportunités... mais toujours celles juste en dessous du potentiel de ton entreprise</li>
<li>Tu ressens un malaise quand les résultats vont "trop bien"</li>
</ul>

<h2>Les croyances qui alimentent cette peur</h2>

<p><strong>"Si mon entreprise grossit trop, je vais perdre le contrôle."</strong> C'est la peur de dépasser ta zone de maîtrise, de devoir déléguer vraiment, de ne plus tout gérer.</p>

<p><strong>"Le succès attire les problèmes."</strong> Cette croyance t'a convaincu que la croissance apporte plus de complexité que de satisfaction.</p>

<p><strong>"Je ne suis pas un dirigeant de grosse boîte."</strong> La conviction que le leadership à grande échelle, c'est pour les autres, pas pour toi.</p>

<h2>Ce que j'observe chez mes clients dirigeants</h2>

<p>La peur de réussir est souvent la peur de changer d'identité managériale. Passer de 10 à 50 personnes, c'est devenir un autre type de leader. Et ça, c'est terrorisant pour l'inconscient.</p>

<p>Avec la Méthode 3R, voici comment on travaille ensemble :</p>

<p><strong>Reconnaître</strong> — On nomme précisément ce que tu crains vraiment dans la croissance de ton entreprise.</p>

<p><strong>Réagir</strong> — On désactive les scénarios catastrophe que ton cerveau a construits autour du succès.</p>

<p><strong>Reprogrammer</strong> — On associe la croissance à des émotions positives : impact, liberté, accomplissement.</p>

<h2>Le résultat</h2>

<p>Tu arrêtes de saboter inconsciemment ce que tu construis consciemment. Tu prends les décisions stratégiques sans frein à main.</p>

<p><strong>La croissance de ton entreprise ne dépassera jamais la croissance de ton identité de dirigeant.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "6 min",
    publishedAt: "2024-01-22",
    updatedAt: "2024-01-22",
    image: "/assets/blog-peur-reussite.jpg",
    ogImage: "/images/og-peur-reussite.jpg",
    productName: "Accompagnement Peur de Réussir",
    productDescription: "Programme de coaching mental pour dirigeants : identifier et dépasser la peur de réussir qui freine la croissance de votre entreprise.",
    benefits: [
      "Comprendre pourquoi vous freinez la croissance de votre structure",
      "Désactiver les croyances limitantes sur le succès et le leadership",
      "Prendre les décisions stratégiques sans frein à main",
      "Aligner votre identité de dirigeant avec votre ambition"
    ],
    targetAudience: "Dirigeants dont l'entreprise plafonne malgré le potentiel",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "3",
    slug: "perfectionnisme-entrepreneur",
    title: "Le perfectionnisme : la prison dorée du dirigeant",
    metaTitle: "Perfectionnisme dirigeant | Coaching Mental Frédéric Ternon",
    metaDescription: "Comment le perfectionnisme détruit votre efficacité de dirigeant et les clés pour en sortir sans sacrifier la qualité.",
    excerpt: "Tu appelles ça de l'exigence. En réalité, c'est une peur déguisée qui te coûte du temps, de l'énergie et freine ta structure.",
    content: `<p>On te l'a vendu comme une force. "Je suis perfectionniste" sonne comme un badge d'honneur. En réalité, <strong>c'est souvent une stratégie de protection contre la peur du jugement — de ton board, de tes équipes, de tes pairs</strong>.</p>

<p>Regarde ce que ça te coûte vraiment en tant que dirigeant :</p>
<ul>
<li>Des décisions stratégiques repoussées indéfiniment</li>
<li>Des projets bloqués parce que "ce n'est pas encore prêt"</li>
<li>Une difficulté à déléguer — personne ne fait "assez bien" à tes yeux</li>
<li>Un épuisement mental constant qui impacte ta lucidité</li>
</ul>

<h2>La croyance au cœur du perfectionnisme</h2>

<p><strong>"Si ce n'est pas parfait, mon équipe va perdre confiance. Mon board va douter. Mes clients vont partir."</strong></p>

<p>Le perfectionnisme n'est pas une quête d'excellence. C'est une quête d'invulnérabilité. Tu crois que si tout est parfait, personne ne pourra remettre en question ton leadership.</p>

<p>Spoiler : ils remettront quand même en question. Et tu auras juste perdu du temps et de l'énergie.</p>

<h2>Deux visages du perfectionnisme chez le dirigeant</h2>

<p><strong>Le perfectionniste visible</strong> micro-manage, retravaille les livrables de ses équipes, ne valide jamais du premier coup.</p>

<p><strong>Le perfectionniste caché</strong> procrastine sur les décisions. Sous couvert de "on n'a pas assez de data", il évite de se confronter au risque.</p>

<h2>Mon approche avec la Méthode 3R</h2>

<p><strong>Reconnaître</strong> — On distingue l'exigence saine du perfectionnisme toxique. Où te situes-tu dans ton management ?</p>

<p><strong>Réagir</strong> — On définit le "suffisamment bon" pour chaque type de décision. L'excellence, ce n'est pas la perfection.</p>

<p><strong>Reprogrammer</strong> — On associe la prise de décision rapide à du leadership, pas à de l'imprudence.</p>

<h2>Ce que tu gagnes à lâcher le perfectionnisme</h2>

<ul>
<li>Tu décides plus vite — et ton entreprise avance plus vite</li>
<li>Tu délègues vraiment et tu développes l'autonomie de tes équipes</li>
<li>Tu libères de l'énergie mentale pour la vision stratégique</li>
<li>Tu réduis ta charge mentale et tu retrouves ta sérénité</li>
</ul>

<p><strong>Done is better than perfect. Et pour un dirigeant : décider vite et ajuster vaut toujours mieux que ne pas décider.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-01-29",
    updatedAt: "2024-01-29",
    image: "/assets/blog-perfectionnisme.jpg",
    ogImage: "/images/og-perfectionnisme.jpg",
    productName: "Accompagnement Anti-Perfectionnisme",
    productDescription: "Programme de coaching mental pour dirigeants : transformer le perfectionnisme paralysant en excellence décisionnelle.",
    benefits: [
      "Décider et valider sans attendre la perfection",
      "Distinguer exigence saine et perfectionnisme toxique",
      "Déléguer avec confiance",
      "Accélérer la croissance de votre entreprise"
    ],
    targetAudience: "Dirigeants perfectionnistes qui n'arrivent pas à déléguer ou décider rapidement",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "4",
    slug: "peur-argent-entrepreneur",
    title: "Ton rapport à l'argent sabote la croissance de ton entreprise",
    metaTitle: "Rapport à l'argent dirigeant | Coaching Mental Frédéric Ternon",
    metaDescription: "Vos croyances sur l'argent déterminent la croissance de votre entreprise. Découvrez comment reprogrammer votre relation à l'argent en tant que dirigeant.",
    excerpt: "Ton chiffre d'affaires est le reflet exact de ce que tu t'autorises à viser. Pas de tes compétences de dirigeant.",
    content: `<p>Le chiffre d'affaires de ton entreprise n'est pas un indicateur de compétence managériale. C'est un indicateur de ce que tu crois possible, de ce que tu t'autorises à viser, de ta relation profonde à l'argent et à la valeur.</p>

<p>Voici les signes d'un rapport toxique à l'argent chez un dirigeant :</p>
<ul>
<li>Tu sous-évalues systématiquement tes prestations ou tes produits</li>
<li>Tu acceptes des conditions défavorables par peur de perdre un client</li>
<li>Tu es mal à l'aise lors des négociations tarifaires</li>
<li>Tu hésites à investir dans ta structure malgré un besoin évident</li>
<li>Tu te sens coupable quand les marges sont "trop bonnes"</li>
</ul>

<h2>Les croyances que je rencontre le plus chez les dirigeants</h2>

<p><strong>"L'argent, c'est sale."</strong> Hérité d'un environnement qui diabolisait la richesse et le profit.</p>

<p><strong>"Un bon dirigeant doit tout réinvestir."</strong> Cette croyance t'empêche de te rémunérer à ta juste valeur.</p>

<p><strong>"Gagner beaucoup, c'est exploiter les autres."</strong> Une conviction qui t'interdit inconsciemment de faire croître tes marges.</p>

<p><strong>"Si mon entreprise gagne plus, mes concurrents vont m'attaquer."</strong> Vision défensive qui limite ta croissance.</p>

<h2>Ce que j'ai observé chez mes clients dirigeants</h2>

<p>J'ai vu des chefs d'entreprise doubler leurs marges en quelques semaines. Pas parce qu'ils avaient appris une technique de pricing. Parce qu'ils avaient changé leur croyance sur ce que leur entreprise méritait de générer.</p>

<h2>La Méthode 3R appliquée à l'argent</h2>

<p><strong>Reconnaître</strong> — D'où viennent tes croyances sur l'argent ? Famille ? Éducation ? Premières expériences d'entrepreneur ?</p>

<p><strong>Réagir</strong> — On identifie les comportements concrets que ces croyances génèrent dans ta gestion : pricing, investissements, rémunération.</p>

<p><strong>Reprogrammer</strong> — On installe de nouvelles croyances alignées avec la croissance saine et l'abondance.</p>

<h2>Les résultats concrets</h2>

<ul>
<li>Tu fixes tes prix en fonction de ta valeur réelle</li>
<li>Tu négocies avec assurance et fermeté</li>
<li>Tu investis dans ta structure sans culpabilité</li>
<li>Ton chiffre d'affaires et tes marges augmentent naturellement</li>
</ul>

<p><strong>L'argent n'est pas le problème. Ta relation à l'argent en tant que dirigeant l'est.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "6 min",
    publishedAt: "2024-02-05",
    updatedAt: "2024-02-05",
    image: "/assets/blog-peur-argent.jpg",
    ogImage: "/images/og-peur-argent.jpg",
    productName: "Accompagnement Relation à l'Argent",
    productDescription: "Programme de coaching mental pour dirigeants : transformer votre rapport à l'argent et débloquer la croissance financière de votre entreprise.",
    benefits: [
      "Identifier vos croyances limitantes sur l'argent et le profit",
      "Fixer vos prix et négocier avec assurance",
      "Investir sereinement dans la croissance de votre structure",
      "Augmenter naturellement vos marges et votre CA"
    ],
    targetAudience: "Dirigeants qui sous-évaluent leur offre ou freinent leurs investissements",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "5",
    slug: "peur-visibilite-entrepreneur",
    title: "Pourquoi tu te caches : la peur de la visibilité chez le dirigeant",
    metaTitle: "Peur de la visibilité dirigeant | Coaching Mental Frédéric Ternon",
    metaDescription: "Vous évitez de vous exposer en tant que dirigeant ? Découvrez les croyances profondes derrière cette peur et comment les dépasser.",
    excerpt: "Tu sais que ta visibilité porte ton entreprise. Et pourtant, tu trouves toujours une excuse pour rester dans l'ombre.",
    content: `<p>Tu diriges une entreprise qui a de la valeur. Tu pourrais attirer plus de talents, plus de clients, plus de partenaires. Mais quelque chose te retient de te mettre en avant.</p>

<p><strong>Ce n'est pas de la modestie. C'est de la peur.</strong></p>

<p>Je le vois chez beaucoup de dirigeants :</p>
<ul>
<li>Tu préfères que ton entreprise parle à ta place plutôt que d'incarner la marque</li>
<li>Tu refuses les invitations à des conférences, des podcasts ou des interviews</li>
<li>Tu délègues toute la communication à ton équipe marketing</li>
<li>Tu ne postes jamais sur LinkedIn malgré ton expertise</li>
<li>Tu évites les événements de networking où tu pourrais être "sous les projecteurs"</li>
</ul>

<h2>Les croyances qui nourrissent cette peur</h2>

<p><strong>"Si je me montre trop, on va me juger — mes pairs, mes concurrents, mes anciens collègues."</strong> La peur du regard des autres dirigeants.</p>

<p><strong>"Un bon dirigeant laisse parler ses résultats."</strong> C'est la croyance que la visibilité personnelle est de l'ego mal placé.</p>

<p><strong>"Se mettre en avant, c'est prétentieux."</strong> La modestie érigée en vertu absolue, au détriment de ton entreprise.</p>

<p><strong>"Si je deviens trop visible, je vais attirer la jalousie ou les problèmes."</strong> La peur d'être une cible.</p>

<h2>La vérité que tu dois entendre</h2>

<p>Les meilleurs talents, les meilleurs clients et les meilleurs partenaires veulent travailler avec des leaders visibles et inspirants. <strong>Ton invisibilité n'est pas de l'humilité, c'est un frein à la croissance de ta structure.</strong></p>

<h2>Mon approche avec la Méthode 3R</h2>

<p><strong>Reconnaître</strong> — Quelle peur précise se cache derrière ton évitement de la visibilité en tant que dirigeant ?</p>

<p><strong>Réagir</strong> — On déconstruit les scénarios catastrophe. Qu'est-ce qui peut vraiment arriver si tu deviens un leader visible ?</p>

<p><strong>Reprogrammer</strong> — On associe la visibilité à l'impact, au leadership inspirant, pas à l'égo.</p>

<h2>Le changement que tu vas vivre</h2>

<ul>
<li>Tu incarnes ta marque avec authenticité</li>
<li>Tu attires les meilleurs talents qui veulent travailler avec toi</li>
<li>Tu deviens une référence dans ton secteur</li>
<li>Tu ouvres des portes stratégiques (partenariats, médias, investisseurs)</li>
</ul>

<p><strong>Pour un dirigeant, la visibilité n'est pas optionnelle. C'est un levier stratégique de croissance.</strong></p>`,
    category: "Croyances limitantes",
    readTime: "5 min",
    publishedAt: "2024-02-12",
    updatedAt: "2024-02-12",
    image: "/assets/blog-peur-visibilite.jpg",
    ogImage: "/images/og-peur-visibilite.jpg",
    productName: "Accompagnement Visibilité Authentique",
    productDescription: "Programme de coaching mental pour dirigeants : dépasser la peur de la visibilité et devenir un leader inspirant et visible.",
    benefits: [
      "Comprendre ce qui vous retient de vous montrer en tant que dirigeant",
      "Incarner votre marque avec authenticité",
      "Devenir une référence dans votre secteur",
      "Attirer talents, clients et partenaires stratégiques"
    ],
    targetAudience: "Dirigeants qui évitent de se mettre en avant malgré leur expertise",
    price: "Sur mesure",
    availability: "Disponible"
  },
  {
    id: "6",
    slug: "identite-entrepreneur-evolution",
    title: "Ton identité de dirigeant est ton plafond : comment évoluer vraiment",
    metaTitle: "Identité dirigeant croissance | Coaching Mental Frédéric Ternon",
    metaDescription: "Votre entreprise ne dépassera jamais votre identité de leader. Découvrez comment faire évoluer qui vous êtes pour débloquer la croissance de votre structure.",
    excerpt: "Tu ne peux pas diriger une entreprise à 50 personnes avec l'identité d'un entrepreneur solo. Ta croissance commence par qui tu deviens.",
    content: `<p>J'ai accompagné des dirigeants qui avaient tout : les compétences, le marché, les équipes, les ressources. Et pourtant, leur entreprise plafonnait. <strong>Leur structure avait atteint la limite de leur identité de leader.</strong></p>

<p><strong>Ton entreprise ne dépassera jamais la personne que tu es en tant que dirigeant.</strong></p>

<p>Si tu te vois encore comme "un entrepreneur qui gère tout seul", tu vas inconsciemment résister à tout ce qui te demande de diriger autrement. C'est un mécanisme inconscient mais redoutablement efficace.</p>

<p>Voici les signes que ton identité de dirigeant te limite :</p>
<ul>
<li>Ton entreprise atteint toujours le même palier de CA ou d'effectif</li>
<li>Tu te sens mal à l'aise dans des contextes de leadership plus large (conférences, boards, négociations stratégiques)</li>
<li>Tu as du mal à déléguer parce que "personne ne fait aussi bien que moi"</li>
<li>Tu retombes toujours dans les mêmes patterns de micro-management</li>
</ul>

<h2>Comment ton identité de dirigeant s'est construite</h2>

<p>Ton identité actuelle de leader est le résultat de plusieurs facteurs :</p>
<ul>
<li>Ton parcours et tes premières expériences de management</li>
<li>Les modèles de leadership que tu as observés</li>
<li>Tes succès et tes échecs passés en tant que dirigeant</li>
<li>L'environnement de pairs dans lequel tu évolues</li>
</ul>

<p><strong>La bonne nouvelle : l'identité de dirigeant n'est pas fixe. Elle se transforme.</strong></p>

<h2>La Méthode 3R pour l'évolution identitaire du dirigeant</h2>

<p><strong>Reconnaître</strong> — Quel type de dirigeant es-tu aujourd'hui ? Quelles croyances définissent ton style de leadership actuel ?</p>

<p><strong>Réagir</strong> — On identifie l'écart entre ton identité de leader actuelle et celle nécessaire pour le prochain palier de ton entreprise.</p>

<p><strong>Reprogrammer</strong> — On installe progressivement les croyances, les postures et les comportements du dirigeant que ta structure a besoin.</p>

<h2>Le processus de transformation</h2>

<p>Ce n'est pas magique. C'est un travail de répétition consciente :</p>
<ul>
<li>Changer ton environnement de pairs (côtoyer des dirigeants du niveau visé)</li>
<li>Changer ton langage interne (de "je gère" à "je dirige")</li>
<li>Changer tes actions quotidiennes (déléguer, piloter, inspirer)</li>
<li>Changer ta vision de toi-même (de technicien à stratège)</li>
</ul>

<h2>Ce que tu vas vivre</h2>

<p>Tu ne te fixes plus d'objectifs "réalistes" basés sur ton passé. Tu vises ce que ton entreprise mérite vraiment et tu deviens le dirigeant capable de l'y amener.</p>

<p><strong>La question n'est pas "comment faire croître mon entreprise ?" mais "quel dirigeant dois-je devenir ?"</strong></p>`,
    category: "Identité & Croissance",
    readTime: "7 min",
    publishedAt: "2024-02-19",
    updatedAt: "2024-02-19",
    image: "/assets/blog-identite-evolution.jpg",
    ogImage: "/images/og-identite-evolution.jpg",
    productName: "Accompagnement Évolution Identitaire",
    productDescription: "Programme de coaching mental pour dirigeants : transformer votre identité de leader et débloquer le prochain palier de croissance de votre entreprise.",
    benefits: [
      "Identifier les limites de votre identité de dirigeant actuelle",
      "Définir le leader que vous devez devenir pour le prochain palier",
      "Transformer progressivement votre posture de leadership",
      "Briser les plafonds de croissance de votre structure"
    ],
    targetAudience: "Dirigeants dont l'entreprise plafonne malgré les efforts",
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
