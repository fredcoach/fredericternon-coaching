import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import testimonialMarie from "@/assets/testimonial-marie.png";
import testimonialEstelle1 from "@/assets/testimonial-estelle-1.png";
import testimonialFatima from "@/assets/testimonial-fatima.png";
import videoThumbnail from "@/assets/testimonial-video-thumbnail.png";

const testimonials = [
  {
    name: "Fatima",
    duration: "6 semaines",
    image: testimonialFatima,
    caption: "Moins de pensées parasites. Plus de capacité à poser un cadre.",
  },
  {
    name: "Marie",
    duration: "15 jours",
    image: testimonialMarie,
    caption: "Retour d'équilibre et regain d'énergie en quelques semaines.",
  },
  {
    name: "Estelle",
    duration: "8 semaines",
    image: testimonialEstelle1,
    caption: "Plus de calme intérieur, moins d'anciens automatismes, plus d'alignement.",
  },
];

const insights = [
  "moins de pensées parasites",
  "plus de clarté intérieure",
  "meilleure capacité à dire non sans culpabiliser",
  "retour d'un équilibre personnel",
  "plus de calme sous pression",
  "énergie plus disponible",
  "posture plus stable dans le quotidien",
];


// Témoignage vedette avec vignette de qualité
const featuredVideo = {
  id: "mahel",
  name: "Mahel Boyer, Joueur Pro d'Échec",
  subtitle: "D'amateur à Grand Maître International",
  videoSrc: "/videos/testimonial-mahel.mp4",
  thumbnail: videoThumbnail,
};

export function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clarté, recul, énergie <span className="text-gradient">retrouvée</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Des retours bruts, issus de conversations WhatsApp, partagés avec accord. Ils montrent ce qui revient souvent après l'accompagnement&nbsp;: moins de charge mentale, plus de recul, une posture plus stable et une meilleure capacité à avancer.
          </p>
          <p className="text-sm md:text-base text-foreground/75 italic max-w-3xl mx-auto mt-6 leading-relaxed">
            « Avant de mieux piloter son entreprise, il faut souvent retrouver de l'espace mental. Ces retours montrent une chose simple&nbsp;: quand la charge intérieure baisse, la clarté revient. Et avec elle, la capacité à décider, poser un cadre, dire non et avancer avec plus de stabilité. »
          </p>
        </div>

        {/* Insights block */}
        <div
          className={`max-w-4xl mx-auto mb-14 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5 text-center">
              Ce que ces retours illustrent
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {insights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-foreground/85">
                  <span className="text-primary font-semibold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Video */}
        <div
          className={`mb-16 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          <div className="max-w-sm mx-auto">
            {/* Featured Video - Mahel */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-card mx-auto w-full">
              {/* Thumbnail header in 16:9 */}
              <div 
                className="relative aspect-video cursor-pointer group"
                onClick={() => setPlayingVideoId(featuredVideo.id)}
              >
                <img
                  src={featuredVideo.thumbnail}
                  alt={`Témoignage vidéo de ${featuredVideo.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h4 className="font-bold text-white text-sm md:text-xs lg:text-sm drop-shadow-lg">{featuredVideo.name}</h4>
                  <p className="text-xs md:text-[10px] lg:text-xs text-white/90 drop-shadow-md">{featuredVideo.subtitle}</p>
                </div>
                {playingVideoId !== featuredVideo.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <Play className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Video in 9:16 below */}
              {playingVideoId === featuredVideo.id && (
                <div className="relative aspect-[9/16]">
                  <video
                    src={featuredVideo.videoSrc}
                    autoPlay
                    controls
                    preload="none"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideoId(null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>


        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto px-4"
          >
            <CarouselContent className="-ml-3 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-6 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative bg-card rounded-3xl border-2 border-border/50 overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                    {/* WhatsApp Header - More authentic */}
                    <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{testimonial.name}</span>
                        <span className="text-xs opacity-80">{testimonial.duration}</span>
                      </div>
                    </div>
                    
                    {/* Screenshot with phone frame effect */}
                    <div className="relative bg-[#ECE5DD] overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={`Témoignage de ${testimonial.name}`}
                        className="w-full h-auto max-h-[320px] md:max-h-[380px] lg:max-h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ECE5DD] to-transparent" />
                    </div>
                    
                    {/* Caption */}
                    <div className="p-4 bg-gradient-to-b from-card to-card/80 border-t border-border/30">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {testimonial.caption}
                      </p>
                    </div>

                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-background/90 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-background/90 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          {/* Mobile navigation hint */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ChevronLeft className="w-4 h-4" />
              <span>Glissez pour voir plus</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Trust indicator */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            ✓ Témoignages partagés avec l'accord des clients
          </p>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base md:text-lg text-foreground/85 mb-5">
            Vous voulez identifier ce qui bloque dans votre pilotage&nbsp;?
          </p>
          <a
            href="https://calendly.com/ternon/entretien-confidentiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            30 min pour faire le point
          </a>
        </div>
      </div>
    </section>
  );
}
