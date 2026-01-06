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
import testimonialEstelle2 from "@/assets/testimonial-estelle-2.png";
import testimonialLaura from "@/assets/testimonial-laura.png";
import testimonialFatima from "@/assets/testimonial-fatima.png";
import testimonialLouis from "@/assets/testimonial-louis.png";
import testimonialClara from "@/assets/testimonial-clara.png";
import videoThumbnail from "@/assets/testimonial-video-thumbnail.png";

const testimonials = [
  {
    name: "Marie",
    duration: "15 jours",
    image: testimonialMarie,
    highlight: "Je me sens comme une autre personne. J'ai retrouvé un équilibre que je pensais perdu depuis des années.",
  },
  {
    name: "Louis",
    duration: "Programme terminé",
    image: testimonialLouis,
    highlight: "C'est une vraie révolution pour moi. J'ai un vrai système et je suis bien plus efficace.",
  },
  {
    name: "Clara",
    duration: "En cours",
    image: testimonialClara,
    highlight: "J'aurais aimé trouver ça plus tôt ! J'ai beaucoup moins de stress avant une séance.",
  },
  {
    name: "Estelle",
    duration: "8 semaines",
    image: testimonialEstelle1,
    highlight: "Je suis beaucoup plus alignée avec moi-même et je ressens un calme intérieur.",
  },
  {
    name: "Estelle",
    duration: "Suite",
    image: testimonialEstelle2,
    highlight: "Ton programme m'a permis de me retrouver. J'ai hâte de voir les prochaines étapes !",
  },
  {
    name: "Laura",
    duration: "3 mois",
    image: testimonialLaura,
    highlight: "Pour la première fois, j'ai l'impression que c'est vraiment la vraie MOI qui commande ma vie !",
  },
  {
    name: "Fatima",
    duration: "6 semaines",
    image: testimonialFatima,
    highlight: "J'ai beaucoup moins de pensées parasites, et j'arrive à dire « non » sans culpabiliser.",
  },
];

export function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
            Ce qu'ils <span className="text-gradient">en disent</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des témoignages réels de clients accompagnés
          </p>
        </div>

        {/* Video Testimonial Section */}
        <div
          className={`mb-16 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 bg-card">
              {/* Video Player */}
              <div className="relative aspect-[9/16]">
                {isVideoPlaying ? (
                  <video
                    src="/videos/testimonial-mahel.mp4"
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                    onEnded={() => setIsVideoPlaying(false)}
                  />
                ) : (
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <img
                      src={videoThumbnail}
                      alt="Témoignage vidéo de Mahel Boyer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>

                    {/* Video label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Play className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Mahel Boyer — Joueur Pro d'Échec</h4>
                            <p className="text-sm text-muted-foreground">D'amateur à Grand Maître International</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Section Title */}
        <div
          className={`text-center mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            Témoignages WhatsApp authentiques
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
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ECE5DD] to-transparent" />
                    </div>
                    
                    {/* Quote highlight - Enhanced */}
                    <div className="p-4 bg-gradient-to-b from-card to-card/80 border-t border-border/30">
                      <p className="text-sm text-foreground/80 italic line-clamp-2 leading-relaxed">
                        "{testimonial.highlight}"
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
      </div>
    </section>
  );
}
