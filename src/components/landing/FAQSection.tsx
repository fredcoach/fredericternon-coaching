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

✅ Structure 0–50 personnes, tu es fondateur/dirigeant/manager clé
✅ Tu décides, mais ça prend trop de temps ou d'énergie
✅ Tu sens que tu surcontrôles ou que tu rumines
✅ Tu veux une posture plus stable (moins réactif, plus lucide)
✅ Tu es prêt à bosser (pas juste à "en parler")

Si 4/5 = oui → session CADRAGE.
Si 2/5 = non → ce n'est pas le bon moment.

On vérifie ensemble en 30 min.`,
  },
  {
    question: "Pourquoi maintenant et pas dans 6 mois ?",
    answer: `Parce que dans 6 mois, tu auras pris 50 décisions depuis la tension au lieu de la clarté.

Chaque décision floue coûte :
• Du temps (tu reviens dessus, tu corriges, tu temporises)
• De l'énergie (rumination, charge mentale, nuits pourries)
• De l'impact (ton équipe sent l'hésitation, ton exécution se dilue)

Question simple : Est-ce que tu peux te permettre 6 mois de plus à ce rythme ?

Si la réponse est "non" → c'est maintenant.
Si la réponse est "oui, ça va" → tu n'as pas besoin de moi.`,
  },
  {
    question: "Je n'ai vraiment pas le temps pour ça.",
    answer: `Si tu n'as pas le temps, c'est exactement pour ça que tu en as besoin.

Voilà comment ça marche :

Semaine 1-2 : tu investis du temps (séance 1h + ancrage des routines)
→ Tu apprends à reconnaître tes déclencheurs, à couper la rumination

Semaine 3-4 : tu récupères du temps
→ Décisions plus rapides = -3h/semaine de tours de table mentaux
→ Moins de rumination = sommeil de meilleure qualité = énergie le matin

Semaine 5-8 : tu as + de temps qu'avant
→ Agenda réaligné, priorités nettes, exécution fluide

Le vrai coût en temps, c'est de NE PAS le faire.
Parce que tourner en boucle sur une décision pendant 3 jours = combien d'heures perdues ?`,
  },
  {
    question: "Comment je sais si ça va marcher pour moi ?",
    answer: `Tu ne sais pas avant d'essayer. Mais voilà ce que je peux te garantir :

Ce qui dépend de moi :
• Un cadre structuré, exigeant, humain
• Des outils concrets (pas du blabla)
• Une disponibilité entre séances (filet de sécurité + Alpha)
• Une méthode qui reste après l'accompagnement (3R = ton OS)

Ce qui dépend de toi :
• Ton implication (tu appliques ou tu écoutes gentiment ?)
• Ta lucidité (tu acceptes les feedbacks directs ?)
• Ton engagement (tu fais le taf entre les séances ?)

Si tu t'impliques → résultats visibles en 3-4 semaines.
Si tu ne t'impliques pas → je te le dirai et on arrête.

Zéro complaisance. Zéro perte de temps mutuelle.`,
  },
  {
    question: "2 400 €, c'est cher non ?",
    answer: `Cher par rapport à quoi ? Comparons :

• Un consultant opérationnel : 800-1 500 €/jour → Il te dit QUOI faire, il repart
• Un formateur LinkedIn : 2 000-5 000 € → Tu apprends des techniques, tu appliques seul
• Un recrutement raté : 30-80K€ (salaire + coûts cachés) → Parce que tu as décidé depuis la tension

Moi : 2 400 € pour 2 mois →
• Coaching 1:1 (8 séances)
• Kit opérationnel (fiches + checklists)
• Salle d'entraînement mentale (audios, mini-trainings)
• Filet de sécurité entre séances (réponse jour même)
• Alpha 24/7 (pocket coach IA)
• Méthode 3R que tu gardes à vie

Question reformulée : Est-ce que ça vaut 1 200 €/mois pour récupérer ta stabilité, ton pouvoir de décision, et ton énergie ?

Si tu hésites sur le prix, c'est que tu n'as pas encore calculé le coût du problème.`,
  },
  {
    question: "Combien de temps par semaine je dois y consacrer ?",
    answer: `Minimum viable :
• 1h de séance/semaine
• 10 min/jour de routines (respiration, recadrage, micro-protocole)
• Accès à Alpha quand tu en as besoin (2-5 min)

Total : 1h30-2h/semaine

Si tu veux aller plus loin :
• 15-20 min/jour de consolidation (audios, exercices)
• Travail sur des situations concrètes entre séances

Mais ce n'est jamais rigide.

Semaine chargée ? On ajuste.
Pic d'activité ? On se concentre sur l'essentiel.
Urgence stratégique ? On bosse dessus en séance.

Le but : que ça rentre dans ta vie, pas que tu rentres dans un planning.`,
  },
  {
    question: "Je suis déjà organisé, performant, efficace. Pourquoi j'aurais besoin de ça ?",
    answer: `Parce que tu confonds organisation et stabilité interne.

Tu peux avoir :
• Un agenda carré
• Des process au point
• Une équipe qui exécute

Et quand même :
• Décider depuis la tension (stress, urgence, peur)
• Surcontrôler parce que déléguer te stresse
• Ruminer le soir sur des décisions déjà prises
• Porter seul parce que personne ne comprend vraiment

L'organisation gère ton agenda. Cet accompagnement gère ton système de décision.
C'est pas la même catégorie.

Si tu es organisé ET stable mentalement → tu n'as pas besoin de moi.
Si tu es organisé MAIS que tu sens que quelque chose te coûte de l'énergie en interne → on bosse ensemble.`,
  },
  {
    question: "Je suis déjà suivi par un psy/thérapeute. C'est compatible ?",
    answer: `Oui. Totalement.

Thérapie : pourquoi tu fonctionnes comme ça (passé, schémas profonds, blessures)
Coaching : comment tu fonctionnes maintenant et comment tu veux fonctionner demain (posture, décisions, exécution)

Deux rôles différents, complémentaires.

Exemple concret :
• Thérapie : "Pourquoi j'ai peur de déléguer ?" (lien avec enfance, contrôle, peur de l'abandon)
• Coaching : "Comment je délègue cette semaine sans me pourrir mentalement ?" (protocole, critères, posture)

Si tu es en thérapie, ça aide même souvent le coaching. Parce que tu comprends tes patterns + tu sais comment les reprogrammer.

Tant que les rôles sont clairs, zéro problème.`,
  },
  {
    question: "Qu'est-ce qui te différencie d'un autre coach ?",
    answer: `1. Background performance mentale (pas dev perso)
20 ans au contact de la haute performance : 10 ans sport + management, 10 ans coaching one-to-one. Je viens des environnements où l'erreur mentale se paie cash.

2. Méthode 3R (pas du "parlons-en")
Reconnaître → Réagir → Reprogrammer. C'est ton OS de décideur, la mécanique que tu gardes après l'accompagnement.

3. Coaching augmenté humain + IA
Entre deux séances : filet de sécurité (WhatsApp, réponse jour même) + Alpha 24/7 (pocket coach IA). Tu n'es jamais bloqué seul avec ton mental.

4. Zéro bullshit
Si je sens qu'on ne peut pas travailler ensemble → je te le dis. Si tu ne t'impliques pas → je te le dis. Si un outil ne marche pas pour toi → on ajuste.

Pas de langue de bois. Pas de méthode dogmatique. Juste des résultats ou on arrête.`,
  },
  {
    question: "Si je veux arrêter en cours de route ?",
    answer: `Tu peux arrêter quand tu veux.

Le deal :
• Je m'implique à fond (présence, exigence, disponibilité)
• Tu t'impliques à fond (action, lucidité, ajustements)

Si l'un des deux décroche, on arrête.

Pas de prison. Pas de culpabilité. Juste un cadre libre où on construit quelque chose de solide — ou pas.

Note importante : Si tu t'engages puis que tu lâches systématiquement entre les séances, je te le signale direct.

Parce que mon job, c'est pas de te rassurer en boucle. Mon job, c'est de te faire avancer.
Si tu veux juste parler sans bouger → ce n'est pas le bon accompagnement.`,
  },
  {
    question: "Concrètement, la session CADRAGE, ça se passe comment ?",
    answer: `30 min. 3 blocs.

Bloc 1 (10 min) — Diagnostic net
• Où tu perds ton énergie (rumination, surcharge, dispersion)
• Ce qui bloque tes décisions (peur, manque de critères, trop d'options)
• Ton niveau de contrôle vs délégation

Bloc 2 (10 min) — Priorité #1
• Si tu devais régler UN truc dans les 2 prochains mois, ce serait quoi ?
• Qu'est-ce qui, résolu, débloque tout le reste ?

Bloc 3 (10 min) — Vérification du match
• Je te présente la Méthode 3R et l'accompagnement
• On vérifie si ça résonne avec ton mode de fonctionnement
• Si c'est un match → plan sur-mesure
• Si ce n'est pas un match → je te le dis directement

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
