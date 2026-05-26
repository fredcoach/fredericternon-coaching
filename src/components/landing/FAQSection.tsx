import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "C'est pour moi ou pas ?",
    answer: `Checklist rapide :

✅ Vous dirigez une PME jusqu'à 30 personnes
✅ L'entreprise tourne, mais tout repose encore sur vous
✅ Les décisions importantes finissent toutes sur votre bureau
✅ Vous sentez que l'organisation a atteint un plafond
✅ Vous voulez un regard extérieur lucide pour identifier ce qui bloque

Si 4/5 = oui → 30 min pour identifier ce qui bloque.
Si 2/5 = non → ce n'est probablement pas le bon moment.

On vérifie ensemble en 30 min.`,
  },
  {
    question: "Pourquoi maintenant et pas dans 6 mois ?",
    answer: `Parce que dans 6 mois, l'entreprise reposera encore plus sur vous.

Chaque mois sans recul coûte :
• Du temps dirigeant (vous restez goulot d'étranglement sur les décisions)
• De la clarté d'organisation (les rôles se flouvent, les arbitrages remontent)
• De la croissance (l'équipe attend que vous décidiez avant d'avancer)

Question simple : votre entreprise peut-elle continuer 6 mois de plus à ce rythme sans que vous explosiez ?

Si la réponse est "non" → c'est maintenant.
Si la réponse est "oui, ça va" → vous n'avez pas besoin de moi.`,
  },
  {
    question: "Je n'ai vraiment pas le temps pour ça.",
    answer: `Si vous n'avez pas le temps, c'est exactement le symptôme.

Voilà comment ça fonctionne :

Semaine 1-2 : vous investissez du temps pour poser un diagnostic clair de l'organisation et de vos arbitrages.

Semaine 3-4 : vous récupérez du temps
→ Décisions plus rapides et mieux cadrées
→ Délégation enfin réelle sur 2-3 sujets bloquants
→ Moins d'allers-retours avec l'équipe

Semaine 5-8 : vous avez plus de temps qu'avant
→ Rôles clarifiés, priorités nettes, exécution autonome de l'équipe

Le vrai coût en temps, c'est de NE PAS prendre ce recul.
Combien d'heures perdues chaque mois sur des sujets qui ne devraient plus passer par vous ?`,
  },
  {
    question: "Comment je sais si ça va marcher pour moi ?",
    answer: `Vous ne le savez pas avant d'essayer. Mais voici ce qui est garanti :

Ce qui dépend de moi :
• Un regard extérieur lucide et structuré
• Des outils concrets (pas du blabla)
• Une disponibilité entre séances (filet de sécurité + Alpha)
• Une méthode qui reste après l'accompagnement (3R = votre OS de pilotage)

Ce qui dépend de vous :
• Votre implication (vous appliquez ou vous écoutez gentiment ?)
• Votre lucidité (vous acceptez les feedbacks directs ?)
• Votre engagement (vous faites le travail entre les séances ?)

Si vous vous impliquez → résultats visibles en 3-4 semaines.
Si vous ne vous impliquez pas → je vous le dis et on arrête.

Zéro complaisance. Zéro perte de temps mutuelle.`,
  },
  {
    question: "Quel est l'investissement pour cet accompagnement ?",
    answer: `L'accompagnement est sur-mesure, le montant varie selon :

• La taille et la complexité de votre PME
• Vos objectifs et le délai pour les atteindre
• Le niveau d'accompagnement nécessaire

Je vous communique le tarif lors de l'appel de 30 min, une fois qu'on a identifié ensemble ce qui bloque vraiment dans votre pilotage.

Pourquoi cette approche ?

Parce qu'un dirigeant qui doit clarifier son organisation n'a pas les mêmes besoins qu'un fondateur qui doit apprendre à déléguer ses décisions stratégiques.

Le tarif reflète la valeur créée pour votre entreprise, pas un nombre d'heures facturées.

Vous saurez exactement ce que vous payez et pourquoi avant de décider.`,
  },
  {
    question: "Combien de temps par semaine je dois y consacrer ?",
    answer: `Minimum viable :
• 1h de séance/semaine
• 10 min/jour pour ancrer les routines de pilotage
• Accès à Alpha quand vous en avez besoin (2-5 min)

Total : 1h30-2h/semaine

Mais ce n'est jamais rigide.

Semaine chargée ? On ajuste.
Pic d'activité ? On se concentre sur l'essentiel.
Urgence stratégique ? On la traite en séance.

Le but : que ça rentre dans votre rythme de dirigeant, pas l'inverse.`,
  },
  {
    question: "Mon entreprise tourne déjà bien. Pourquoi j'aurais besoin de ça ?",
    answer: `Justement. Quand une PME tourne, le vrai sujet n'est plus de survivre, c'est de ne plus dépendre du dirigeant pour tout.

Vous pouvez avoir :
• Un chiffre d'affaires sain
• Une équipe qui exécute
• Des process en place

Et quand même :
• Être le seul à trancher les décisions importantes
• Surcontrôler parce que déléguer vraiment vous coûte
• Sentir un plafond organisationnel que vous ne savez pas nommer
• Porter mentalement l'entreprise tout seul

Un regard extérieur identifie ce que vous ne pouvez plus voir depuis l'intérieur.
C'est exactement à ce stade que ça change tout.`,
  },
  {
    question: "Je suis déjà accompagné (mentor, comité, conseil). C'est compatible ?",
    answer: `Oui. Totalement.

Mentor / comité / conseil : avis sur la stratégie, le marché, les chiffres.
Cet accompagnement : votre pilotage de dirigeant, décisions, organisation, posture, énergie.

Deux rôles différents, complémentaires.

Exemple concret :
• Mentor : "Faut-il ouvrir un second site ?"
• Pilotage : "Comment vous organisez votre semaine et vos arbitrages pour ne plus être le goulot d'étranglement ?"

Tant que les rôles sont clairs, zéro problème.`,
  },
  {
    question: "Qu'est-ce qui vous différencie d'un autre coach ?",
    answer: `1. Regard de terrain (pas développement personnel)
20 ans au contact d'environnements exigeants : sport, management, accompagnement de dirigeants. Je viens d'environnements où les décisions floues se paient cash.

2. Méthode 3R appliquée au pilotage
Repérer → Réagir → Reprogrammer. C'est votre OS de dirigeant pour transformer un signal faible en décision claire.

3. Accompagnement augmenté humain + IA
Entre deux séances : filet de sécurité (WhatsApp, réponse jour même) + Alpha 24/7 (pocket coach IA). Vous n'êtes jamais bloqué seul face à une décision.

4. Zéro bullshit
Si je sens qu'on ne peut pas travailler ensemble → je vous le dis. Si vous ne vous impliquez pas → je vous le dis. Si un outil ne marche pas → on ajuste.

Pas de langue de bois. Pas de méthode dogmatique. Des résultats ou on arrête.`,
  },
  {
    question: "Si je veux arrêter en cours de route ?",
    answer: `Vous pouvez arrêter quand vous voulez.

Le deal :
• Je m'implique à fond (présence, exigence, disponibilité)
• Vous vous impliquez à fond (action, lucidité, ajustements)

Si l'un des deux décroche, on arrête.

Pas de prison. Pas de culpabilité. Juste un cadre clair où on construit quelque chose de solide, ou pas.

Si vous voulez juste parler sans changer le pilotage → ce n'est pas le bon accompagnement.`,
  },
  {
    question: "Concrètement, l'appel de 30 min, ça se passe comment ?",
    answer: `30 min. 3 blocs.

Bloc 1 (10 min) : Diagnostic net
• Ce qui bloque aujourd'hui dans votre pilotage
• Sur quoi repose encore trop l'entreprise (vous compris)
• Vos vrais points de friction d'organisation et de décision

Bloc 2 (10 min) : Priorité #1
• Si vous deviez débloquer UNE chose dans les 2 prochains mois, ce serait quoi ?
• Qu'est-ce qui, résolu, débloque tout le reste ?

Bloc 3 (10 min) : Vérification du match
• Je vous présente la Méthode 3R et l'accompagnement
• On vérifie si l'approche correspond à votre mode de fonctionnement
• Si c'est un match → plan sur-mesure
• Si ce n'est pas un match → je vous le dis directement

Zéro vente forcée. Zéro langue de bois. Juste de la clarté.`,
  },
];

export function FAQSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
