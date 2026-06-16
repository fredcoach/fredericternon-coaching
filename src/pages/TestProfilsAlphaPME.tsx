import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Share2, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type ProfileKey = "indispensable" | "controleur" | "organisation" | "expert";

type AnswerOption = { profile: ProfileKey; text: string };
type Question = { id: number; text: string; weight: number; options: AnswerOption[] };

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

  const highestRaw = Math.max(...profileOrder.map((p) => rawScores[p]));
  const rawLeaders = profileOrder.filter((p) => rawScores[p] === highestRaw);

  let dominant = rawLeaders[0];
  let tiedProfiles: ProfileKey[] = rawLeaders;

  if (rawLeaders.length > 1) {
    const highestWeighted = Math.max(...rawLeaders.map((p) => weightedScores[p]));
    const weightedLeaders = rawLeaders.filter((p) => weightedScores[p] === highestWeighted);
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
    .filter((p) => p !== dominant)
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
    setCurrentQuestionIndex((i) => i + 1);
  };

  const goBack = () => {
    if (currentQuestionIndex === 0) {
      setStarted(false);
      return;
    }
    setCurrentQuestionIndex((i) => i - 1);
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
      try {
        await navigator.share({ title: dominantContent.label, text, url: window.location.href });
      } catch {}
      return;
    }
    try {
      await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Test des 4 Profils Alpha PME</title>
        <meta
          name="description"
          content="Découvrez en 3 minutes quel rôle votre entreprise vous oblige encore à jouer : Indispensable, Contrôleur, Organisation Saturée ou Expert Prisonnier."
        />
      </Helmet>

      {!started && (
        <section className="container mx-auto max-w-4xl px-4 py-16">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
            </Link>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Clock className="h-4 w-4" />
            Gratuit · 10 questions · Moins de 3 minutes
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Découvrez quel rôle votre entreprise vous oblige encore à jouer
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Votre entreprise fonctionne. Vous avez des clients, de l'activité, parfois une équipe. Mais une partie
            importante repose encore sur vous.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            Ce test vous aide à mettre des mots simples sur ce que vous vivez au quotidien, sans jargon et sans
            questionnaire interminable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => setStarted(true)}>
              Commencer le test
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {profileOrder.map((profile) => (
              <Card key={profile}>
                <CardContent className="p-5">
                  <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <Sparkles className="h-4 w-4" />
                    {profileContent[profile].shortLabel}
                  </div>
                  <p className="text-sm text-muted-foreground">{profileContent[profile].headline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {started && !isComplete && currentQuestion && (
        <section className="container mx-auto max-w-2xl px-4 py-12">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={goBack}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion.id} sur {questions.length}
            </span>
          </div>

          <Progress value={progress} className="mb-8" />

          <Card>
            <CardContent className="p-6">
              <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">
                Choisissez la réponse qui ressemble le plus à votre quotidien actuel.
              </p>
              <h2 className="mb-6 text-2xl font-semibold leading-snug">{currentQuestion.text}</h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option.profile;
                  return (
                    <button
                      key={option.profile + option.text}
                      type="button"
                      onClick={() => selectAnswer(option.profile)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-2xl border bg-card p-4 text-left text-base leading-relaxed transition hover:border-primary/40 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        isSelected && "border-primary bg-primary/10"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                          isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30"
                        )}
                      >
                        {isSelected && <CheckCircle2 className="h-4 w-4" />}
                      </span>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {currentQuestionIndex === 4 && selectedAnswer && (
                <p className="mt-6 text-sm text-muted-foreground">Vous êtes à mi-parcours.</p>
              )}

              <div className="mt-8 flex justify-end">
                <Button onClick={goNext} disabled={!selectedAnswer}>
                  {currentQuestionIndex === questions.length - 1 ? "Voir mon profil" : "Question suivante"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {isComplete && (isRevealing || !result) && (
        <section className="container mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
          <Sparkles className="mb-4 h-10 w-10 animate-pulse text-primary" />
          <h2 className="mb-3 text-2xl font-semibold">Votre profil est prêt</h2>
          <p className="text-muted-foreground">
            Vos réponses montrent le rôle que vous portez le plus souvent dans votre entreprise aujourd'hui.
          </p>
        </section>
      )}

      {isComplete && result && dominantContent && !isRevealing && (
        <section className="container mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={restart}>
              <RotateCcw className="mr-2 h-4 w-4" /> Refaire le test
            </Button>
            <Button variant="outline" size="sm" onClick={shareResult}>
              <Share2 className="mr-2 h-4 w-4" /> Partager
            </Button>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="mb-2 text-xs uppercase tracking-wide text-primary">Votre profil Alpha PME</p>
              <h1 className="text-3xl font-bold md:text-4xl">{dominantContent.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{dominantContent.headline}</p>

              <p className="mt-6 leading-relaxed">{dominantContent.description}</p>

              <div className="mt-8 rounded-2xl border bg-muted/40 p-5">
                <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">Ce que cela révèle</p>
                <p className="leading-relaxed">{dominantContent.reveals}</p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <p className="mb-3 font-semibold">Ce que ce rôle apporte</p>
                  <ul className="space-y-2 text-sm">
                    {dominantContent.strengths.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border p-5">
                  <p className="mb-3 font-semibold">Ce que ce rôle peut coûter</p>
                  <ul className="space-y-2 text-sm">
                    {dominantContent.cost.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <p className="mb-1 text-xs uppercase tracking-wide text-primary">Question miroir</p>
                <p className="text-lg leading-relaxed">{dominantContent.mirrorQuestion}</p>
              </div>

              {secondaryContent && (
                <div className="mt-6 rounded-2xl border p-5">
                  <p className="mb-1 font-semibold">Tendance secondaire : {secondaryContent.label}</p>
                  <p className="text-sm text-muted-foreground">
                    Votre résultat est nuancé. Vous pouvez aussi reconnaître une partie de votre quotidien dans ce
                    profil secondaire.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

export default TestProfilsAlphaPME;
