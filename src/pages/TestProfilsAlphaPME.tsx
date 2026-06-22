import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type ProfileKey = "indispensable" | "controleur" | "organisation" | "expert";

type AnswerOption = {
  profile: ProfileKey;
  text: string;
};

type Question = {
  id: number;
  text: string;
  weight: number;
  options: AnswerOption[];
};

type ProfileContent = {
  label: string;
  shortLabel: string;
  title: string;
  headline: string;
  description: string;
  reveals: string;
  mirrorQuestion: string;
  cta: string;
  shareText: string;
  strengths: string[];
  cost: string[];
};

const profileOrder: ProfileKey[] = ["indispensable", "controleur", "organisation", "expert"];

const questions: Question[] = [
  {
    id: 1,
    weight: 1.5,
    text: "Lorsque vous vous absentez quelques jours, que se passe-t-il généralement ?",
    options: [
      { profile: "indispensable", text: "L'activité continue, mais plusieurs sujets attendent mon retour." },
      { profile: "controleur", text: "L'équipe avance, mais je reste régulièrement sollicité pour valider." },
      { profile: "organisation", text: "Les urgences et les retards commencent rapidement à s'accumuler." },
      { profile: "expert", text: "Certaines missions importantes ne peuvent tout simplement pas avancer sans moi." },
    ],
  },
  {
    id: 2,
    weight: 1,
    text: "Qu'est-ce qui prend actuellement le plus de place dans vos journées ?",
    options: [
      { profile: "organisation", text: "Gérer les urgences, les imprévus et les priorités qui changent." },
      { profile: "indispensable", text: "Répondre aux demandes et résoudre les problèmes des autres." },
      { profile: "expert", text: "Réaliser moi-même les missions les plus importantes ou complexes." },
      { profile: "controleur", text: "Vérifier, corriger et m'assurer que tout est bien fait." },
    ],
  },
  {
    id: 3,
    weight: 1,
    text: "Quand un membre de votre équipe rencontre un problème, que se passe-t-il le plus souvent ?",
    options: [
      { profile: "controleur", text: "Il me propose une solution, mais attend mon accord avant d'agir." },
      { profile: "expert", text: "Il me transmet le sujet parce que je suis le mieux placé pour le traiter." },
      { profile: "indispensable", text: "Il vient directement me demander quoi faire." },
      { profile: "organisation", text: "Le problème arrive souvent trop tard, lorsqu'il devient urgent." },
    ],
  },
  {
    id: 4,
    weight: 1.5,
    text: "Quelle phrase ressemble le plus à ce que vous pensez régulièrement ?",
    options: [
      { profile: "expert", text: "Il serait plus rapide que je le fasse moi-même." },
      { profile: "organisation", text: "Nous travaillons beaucoup, mais nous avons toujours l'impression de courir." },
      { profile: "controleur", text: "Je pourrais déléguer davantage, mais je ne suis pas certain du résultat." },
      { profile: "indispensable", text: "Si je ne suis pas disponible, tout ralentit." },
    ],
  },
  {
    id: 5,
    weight: 1,
    text: "Lorsque la charge de travail augmente, quelle est votre réaction naturelle ?",
    options: [
      { profile: "indispensable", text: "Je deviens encore plus disponible pour aider tout le monde." },
      { profile: "expert", text: "Je reprends personnellement les missions les plus sensibles." },
      { profile: "controleur", text: "Je suis davantage les sujets pour éviter les erreurs." },
      { profile: "organisation", text: "Nous essayons de tout gérer, mais certaines choses finissent par nous échapper." },
    ],
  },
  {
    id: 6,
    weight: 1.5,
    text: "Qu'est-ce qui vous frustre le plus aujourd'hui ?",
    options: [
      { profile: "controleur", text: "Devoir repasser derrière les autres pour obtenir le niveau attendu." },
      { profile: "indispensable", text: "Être constamment interrompu ou sollicité." },
      { profile: "organisation", text: "Voir l'équipe travailler dur sans réussir à retrouver de la fluidité." },
      { profile: "expert", text: "Ne pas réussir à sortir suffisamment de la production ou de l'expertise." },
    ],
  },
  {
    id: 7,
    weight: 1,
    text: "Quand une décision importante doit être prise rapidement :",
    options: [
      { profile: "organisation", text: "Nous perdons du temps parce que les informations et les priorités sont dispersées." },
      { profile: "controleur", text: "Je préfère conserver la décision finale." },
      { profile: "indispensable", text: "L'équipe attend généralement que je tranche." },
      { profile: "expert", text: "La décision dépend souvent de mon expérience ou de ma connaissance du client." },
    ],
  },
  {
    id: 8,
    weight: 1,
    text: "Si vous récupériez une journée libre chaque semaine, à quoi servirait-elle probablement ?",
    options: [
      { profile: "expert", text: "À avancer sur les missions complexes que personne d'autre ne maîtrise encore." },
      { profile: "indispensable", text: "À traiter tous les sujets qui attendent déjà mon attention." },
      { profile: "controleur", text: "À remettre de l'ordre et contrôler les dossiers importants." },
      { profile: "organisation", text: "À revoir les priorités et la manière dont l'entreprise fonctionne." },
    ],
  },
  {
    id: 9,
    weight: 1.5,
    text: "Quelle situation décrit le mieux votre entreprise aujourd'hui ?",
    options: [
      { profile: "controleur", text: "Des responsabilités sont confiées, mais j'ai du mal à réellement lâcher prise." },
      { profile: "organisation", text: "L'activité a grandi plus vite que notre manière de travailler." },
      { profile: "expert", text: "Une grande partie de la valeur apportée aux clients repose encore sur moi." },
      { profile: "indispensable", text: "L'équipe existe, mais je reste le point de passage principal." },
    ],
  },
  {
    id: 10,
    weight: 1.5,
    text: "Quel changement améliorerait le plus votre quotidien ?",
    options: [
      { profile: "organisation", text: "Retrouver des priorités claires et une organisation plus fluide." },
      { profile: "expert", text: "Ne plus être la seule personne capable de traiter les sujets importants." },
      { profile: "controleur", text: "Pouvoir faire confiance au résultat sans devoir tout vérifier." },
      { profile: "indispensable", text: "Que l'équipe puisse avancer sans me solliciter constamment." },
    ],
  },
];

const profileContent: Record<ProfileKey, ProfileContent> = {
  indispensable: {
    label: "Le Dirigeant Indispensable",
    shortLabel: "Dirigeant Indispensable",
    title: "Vous êtes probablement le Dirigeant Indispensable",
    headline: "Votre entreprise avance parce que vous êtes toujours là pour la faire avancer.",
    description:
      "Vous êtes souvent la personne que l'on sollicite pour décider, débloquer, arbitrer ou rassurer. Votre disponibilité a probablement permis à l'entreprise de grandir. Mais aujourd'hui, cette présence permanente peut devenir une limite.",
    reveals:
      "Votre rôle principal n'est pas seulement de diriger. C'est aussi de compenser ce qui n'est pas encore assez clair, autonome ou assumé autour de vous.",
    mirrorQuestion: "Si vous arrêtiez de répondre immédiatement pendant une semaine, qu'est-ce qui ralentirait vraiment ?",
    cta: "Comprendre pourquoi tout revient encore vers moi",
    shareText: "Je suis le Dirigeant Indispensable : mon entreprise fonctionne, mais elle attend encore trop souvent après moi.",
    strengths: ["Vous débloquez vite les situations.", "Votre présence rassure l'équipe.", "Vous évitez que les sujets restent bloqués."],
    cost: ["Votre attention devient le point de passage principal.", "Votre temps stratégique se fragmente.", "L'équipe apprend à attendre votre intervention."],
  },
  controleur: {
    label: "Le Contrôleur Épuisé",
    shortLabel: "Contrôleur Épuisé",
    title: "Vous êtes probablement le Contrôleur Épuisé",
    headline: "Vous avez confié des responsabilités, mais vous portez encore mentalement le résultat final.",
    description:
      "Vous avez probablement un haut niveau d'exigence. Vous voyez vite ce qui peut mal tourner et vous repérez les détails qui échappent aux autres. Cette vigilance protège l'entreprise, mais elle peut aussi vous enfermer dans un rôle où vous devez vérifier, corriger ou sécuriser trop de choses.",
    reveals:
      "Le problème n'est pas forcément que vous ne déléguez pas. C'est peut-être que la délégation ne vous libère pas encore réellement.",
    mirrorQuestion: "Votre équipe manque-t-elle réellement de fiabilité, ou manque-t-elle d'espace pour devenir pleinement responsable ?",
    cta: "Comprendre pourquoi je n'arrive pas à lâcher complètement",
    shareText: "Je suis le Contrôleur Épuisé : je délègue, mais je continue de porter le résultat dans ma tête.",
    strengths: ["Vous maintenez un niveau d'exigence élevé.", "Vous anticipez les risques rapidement.", "Vous protégez la qualité perçue par les clients."],
    cost: ["La délégation ne vous libère pas assez.", "Vous restez impliqué dans trop de validations.", "L'équipe peut éviter de prendre pleinement la responsabilité."],
  },
  organisation: {
    label: "L'Organisation Saturée",
    shortLabel: "Organisation Saturée",
    title: "Vous dirigez probablement une Organisation Saturée",
    headline: "Votre entreprise ne manque pas forcément d'efforts. Elle manque peut-être de fluidité.",
    description:
      "Votre activité fonctionne. Les clients sont là. L'équipe travaille. Mais malgré tous ces efforts, vous pouvez avoir l'impression que tout devient plus lourd : les priorités changent, les urgences s'accumulent, les mêmes problèmes reviennent.",
    reveals:
      "L'entreprise a peut-être grandi plus vite que ses règles, ses rôles et ses habitudes de fonctionnement.",
    mirrorQuestion: "Si votre activité augmentait de 30 % demain, seriez-vous plus solide ou simplement plus sous pression ?",
    cta: "Comprendre pourquoi l'entreprise travaille beaucoup mais avance difficilement",
    shareText: "Je dirige une Organisation Saturée : nous travaillons beaucoup, mais notre manière de fonctionner doit maintenant évoluer.",
    strengths: ["L'activité existe et produit déjà de la valeur.", "L'équipe fournit des efforts réels.", "La croissance a révélé un potentiel important."],
    cost: ["Les urgences consomment trop d'énergie.", "Les priorités deviennent instables.", "La croissance ajoute de la pression avant d'ajouter de la marge."],
  },
  expert: {
    label: "L'Expert Prisonnier",
    shortLabel: "Expert Prisonnier",
    title: "Vous êtes probablement l'Expert Prisonnier",
    headline: "Ce qui a construit votre entreprise vous empêche peut-être maintenant de prendre de la hauteur.",
    description:
      "Votre expertise est probablement l'une des grandes forces de l'entreprise. Vous savez faire, décider, conseiller, produire ou vendre avec un niveau que les autres n'ont pas encore. Mais si les missions importantes reposent encore trop sur vous, chaque nouvelle opportunité peut augmenter votre charge personnelle.",
    reveals:
      "L'entreprise ne dépend pas seulement de votre présence. Elle dépend encore trop de votre savoir-faire personnel.",
    mirrorQuestion: "Votre entreprise vend-elle une capacité collective, ou principalement votre expertise ?",
    cta: "Comprendre pourquoi je reste trop impliqué dans les sujets importants",
    shareText: "Je suis l'Expert Prisonnier : ce qui a construit mon entreprise m'empêche peut-être aujourd'hui de prendre de la hauteur.",
    strengths: ["Votre savoir-faire crée une forte valeur.", "Les clients vous font confiance.", "Vous savez traiter les sujets difficiles."],
    cost: ["Les dossiers importants reviennent vers vous.", "Votre expertise limite le transfert de responsabilité.", "La croissance peut augmenter votre charge personnelle."],
  },
};

const emptyScores = (): Record<ProfileKey, number> => ({
  indispensable: 0,
  controleur: 0,
  organisation: 0,
  expert: 0,
});

const computeResult = (answers: ProfileKey[]) => {
  const rawScores = emptyScores();
  const weightedScores = emptyScores();

  answers.forEach((answer, index) => {
    rawScores[answer] += 1;
    weightedScores[answer] += questions[index]?.weight || 1;
  });

  const highestRaw = Math.max(...profileOrder.map((profile) => rawScores[profile]));
  const rawLeaders = profileOrder.filter((profile) => rawScores[profile] === highestRaw);

  let dominant = rawLeaders[0];
  let tiedProfiles: ProfileKey[] = rawLeaders;

  if (rawLeaders.length > 1) {
    const highestWeighted = Math.max(...rawLeaders.map((profile) => weightedScores[profile]));
    const weightedLeaders = rawLeaders.filter((profile) => weightedScores[profile] === highestWeighted);
    dominant = weightedLeaders[0];
    tiedProfiles = weightedLeaders;
  }

  if (tiedProfiles.length > 1) {
    const lastAnswer = answers[9];
    if (lastAnswer && tiedProfiles.includes(lastAnswer)) {
      dominant = lastAnswer;
      tiedProfiles = [lastAnswer];
    }
  }

  const secondary = profileOrder
    .filter((profile) => profile !== dominant)
    .sort((a, b) => rawScores[b] - rawScores[a] || weightedScores[b] - weightedScores[a])[0];

  const hasSecondary = secondary && rawScores[dominant] - rawScores[secondary] <= 1;

  return {
    dominant,
    secondary: hasSecondary ? secondary : null,
    rawScores,
    weightedScores,
    isMixed: tiedProfiles.length > 1,
  };
};

const TestProfilsAlphaPME = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ProfileKey[]>([]);
  const [isRevealing, setIsRevealing] = useState(false);

  const isComplete = answers.length === questions.length;
  const result = useMemo(() => (isComplete ? computeResult(answers) : null), [answers, isComplete]);
  const dominantContent = result ? profileContent[result.dominant] : null;
  const secondaryContent = result?.secondary ? profileContent[result.secondary] : null;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const progress = started ? ((currentQuestionIndex + (selectedAnswer ? 1 : 0)) / questions.length) * 100 : 0;

  useEffect(() => {
    document.title = "Test des 4 Profils Alpha PME";
  }, []);

  useEffect(() => {
    if (!result) return;

    const payload = {
      completedAt: new Date().toISOString(),
      answers,
      dominantProfile: result.dominant,
      secondaryProfile: result.secondary,
      scores: result.rawScores,
      source: new URLSearchParams(window.location.search).get("source") || "direct",
    };

    localStorage.setItem("alpha-pme-profile-test-result", JSON.stringify(payload));
  }, [answers, result]);

  const selectAnswer = (profile: ProfileKey) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestionIndex] = profile;
    setAnswers(nextAnswers);
  };

  const goNext = () => {
    if (!selectedAnswer) return;

    if (currentQuestionIndex === questions.length - 1) {
      setIsRevealing(true);
      window.setTimeout(() => setIsRevealing(false), 1200);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  };

  const goBack = () => {
    if (currentQuestionIndex === 0) {
      setStarted(false);
      return;
    }

    setCurrentQuestionIndex((index) => index - 1);
  };

  const restart = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsRevealing(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shareResult = async () => {
    if (!dominantContent) return;

    const text = dominantContent.shareText;

    if (navigator.share) {
      await navigator.share({ title: dominantContent.label, text, url: window.location.href });
      return;
    }

    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                  <Clock className="h-4 w-4" />
                  Gratuit. 10 questions. Moins de 3 minutes.
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                  Découvrez quel rôle votre entreprise vous oblige encore à jouer
                </h1>

                <p className="text-lg text-muted-foreground">
                  Votre entreprise fonctionne. Vous avez des clients, de l'activité, parfois une équipe. Mais une partie importante repose encore sur vous.
                </p>

                <p className="text-base text-muted-foreground">
                  Ce test vous aide à mettre des mots simples sur ce que vous vivez au quotidien, sans jargon et sans questionnaire interminable.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" onClick={() => setStarted(true)} className="group">
                    Commencer le test
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Choisissez simplement la réponse qui ressemble le plus à votre quotidien actuel.
                </p>
              </div>

              <Card className="border-primary/10 shadow-elegant">
                <CardContent className="space-y-6 p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">Ce que ce test va vous révéler</h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Pourquoi votre entreprise continue peut-être de reposer sur vous",
                      "Ce qui vous empêche de sortir complètement de l'opérationnel",
                      "Le rôle que votre entreprise vous oblige encore à jouer",
                      "Ce qui pourrait freiner le passage au palier suivant",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }


  if (isRevealing || (isComplete && !result)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-8 w-8 animate-pulse" />
          </div>
          <h2 className="mb-3 text-3xl font-semibold text-foreground">Votre profil est prêt</h2>
          <p className="text-muted-foreground">
            Vos réponses montrent le rôle que vous portez le plus souvent dans votre entreprise aujourd'hui.
          </p>
        </div>
      </div>
    );
  }

  if (isComplete && result && dominantContent) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
          <button
            type="button"
            onClick={restart}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Refaire le test
          </button>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Card className="border-primary/10 shadow-elegant">
              <CardContent className="space-y-6 p-8">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-wide text-primary">Votre profil Alpha PME</p>
                  <h1 className="text-3xl font-bold text-foreground md:text-4xl">{dominantContent.title}</h1>
                  <p className="text-lg text-muted-foreground">{dominantContent.headline}</p>
                </div>

                <p className="text-base text-foreground">{dominantContent.description}</p>

                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Ce que cela révèle</p>
                  <p className="text-foreground">{dominantContent.reveals}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-card p-5">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Ce que ce rôle apporte</h3>
                    <ul className="space-y-2">
                      {dominantContent.strengths.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card p-5">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Ce que ce rôle peut coûter</h3>
                    <ul className="space-y-2">
                      {dominantContent.cost.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-secondary/40 p-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Question miroir</p>
                  <p className="text-base italic text-foreground">{dominantContent.mirrorQuestion}</p>
                </div>

                {secondaryContent && (
                  <div className="rounded-2xl border border-border/60 bg-muted/40 p-5">
                    <p className="mb-1 text-sm font-semibold text-foreground">
                      Tendance secondaire : {secondaryContent.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Votre résultat est nuancé. Vous pouvez aussi reconnaître une partie de votre quotidien dans ce profil secondaire.
                    </p>
                  </div>
                )}

                <Button variant="outline" onClick={shareResult} className="w-full sm:w-auto">
                  <Share2 className="mr-2 h-4 w-4" />
                  Partager mon résultat
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border/60">
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    Votre profil n'est probablement pas le problème.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Deux dirigeants peuvent avoir exactement le même profil pour des raisons totalement différentes.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    La Cartographie des Blocages permet d'identifier ce qui entretient réellement cette situation et quelle priorité mérite votre attention maintenant.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">Étape suivante</p>
                    <h3 className="text-xl font-semibold text-foreground">
                      Deux façons d'avancer maintenant
                    </h3>
                  </div>

                  <Button size="lg" className="w-full" asChild>
                    <Link to="/cartographie-des-blocages">Faire ma Cartographie — 97 €</Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      window.open(
                        "https://calendly.com/ternon/alpha-pme",
                        "_blank",
                        "noopener,noreferrer",
                      );
                      navigate("/cartographie-des-blocages/confirmation");
                    }}
                  >
                    Faire le point directement avec Frédéric — 30 min offertes
                  </Button>

                  <div className="rounded-2xl border border-primary/20 bg-background/60 p-5">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                      Inclus avec votre Cartographie
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Restitution personnalisée",
                        "Call stratégique de 15 minutes avec Frédéric Ternon",
                        "Identification de votre priorité n°1",
                        "Recommandations adaptées à votre situation",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-2xl px-4 py-10 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </button>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion.id} sur {questions.length}
          </span>
        </div>

        <Progress value={progress} className="mb-8 h-2" />

        <Card className="border-border/60 shadow-elegant">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Choisissez la réponse qui ressemble le plus à votre quotidien actuel.
              </p>
              <h2 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="grid gap-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.profile;
                return (
                  <button
                    key={`${currentQuestion.id}-${option.profile}`}
                    type="button"
                    onClick={() => selectAnswer(option.profile)}
                    className={cn(
                      "min-h-[72px] rounded-2xl border bg-card p-4 text-left text-base leading-relaxed transition hover:border-primary/40 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      isSelected && "border-primary bg-primary/10 shadow-elegant"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border",
                          isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"
                        )}
                      >
                        {isSelected && <CheckCircle2 className="h-4 w-4" />}
                      </span>
                      <span>{option.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {currentQuestionIndex === 4 && selectedAnswer && (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center text-sm text-primary">
                Vous êtes à mi-parcours.
              </div>
            )}

            <Button
              size="lg"
              className="w-full group"
              onClick={goNext}
              disabled={!selectedAnswer}
            >
              {currentQuestionIndex === questions.length - 1 ? "Voir mon profil" : "Question suivante"}
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestProfilsAlphaPME;
