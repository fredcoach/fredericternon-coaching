import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import laurentVideo from "@/assets/laurent-testimonial.mp4.asset.json";
import laurentPoster from "@/assets/laurent-poster.jpg";

const before = [
  { bold: "Décisions", text: "Vous restez au cœur d'arbitrages qui ne devraient plus passer par vous." },
  { bold: "Délégation", text: "Vous avez délégué, mais les validations, tensions et questions reviennent encore." },
  { bold: "Urgences", text: "Votre agenda est rempli par le court terme, au détriment du recul stratégique." },
  { bold: "Organisation", text: "Vous sentez que quelque chose coince, sans toujours voir précisément où agir." },
  { bold: "Recrutement", text: "Vous envisagez d'embaucher, mais vous savez qu'une personne de plus ne suffira pas si le cadre reste flou." },
];

const after = [
  { bold: "Moins de remontées", text: "Les décisions circulent mieux et les arbitrages ne reviennent plus systématiquement vers vous." },
  { bold: "Plus de recul", text: "Vous retrouvez du temps pour les sujets qui comptent vraiment." },
  { bold: "Posture plus stable", text: "Vous décidez avec plus de calme, même quand la pression monte." },
  { bold: "Pilotage plus clair", text: "Vous passez moins de temps à colmater, plus de temps à diriger." },
  { bold: "Entreprise plus autonome", text: "La PME avance avec un cadre plus solide, sans vous remettre au centre de tout." },
];

export function BeforeAfterSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
            Situations rencontrées
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Ce que vous vivez{" "}
            <span className="text-gradient">au quotidien</span>
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-20 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* AVANT */}
          <div className="bg-card border border-border rounded-2xl p-7 md:p-9 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium">
                  Avant
                </p>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  La situation actuelle
                </h3>
              </div>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground/80 text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>
                    <strong className="text-foreground font-semibold">{item.bold}</strong>
                    {" — "}{item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* APRÈS */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-7 md:p-9 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-primary font-medium">
                  Après
                </p>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Ce que vous gagnez
                </h3>
              </div>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground/85 text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <strong className="text-foreground font-semibold">{item.bold}</strong>
                    {" — "}{item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Témoignage vidéo */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
            Sur le terrain
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
            Ce que cela donne sur le terrain
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Des dirigeants qui avaient déjà une entreprise qui fonctionnait,
            mais qui continuaient à porter davantage que ce qu'ils auraient dû.
          </p>

          <figure className="max-w-sm mx-auto">
            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
              <video
                controls
                preload="none"
                playsInline
                poster={laurentPoster}
                className="w-full aspect-[9/16] bg-black object-cover"
              >
                <source src={laurentVideo.url} type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-5">
              <p className="font-serif text-lg font-bold text-foreground">
                Laurent
              </p>
              <p className="text-sm text-muted-foreground">
                Entrepreneur · Agence Marketing
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
