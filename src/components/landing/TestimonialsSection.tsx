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
import thumbnailMarielle from "@/assets/thumbnail-marielle.jpg";
import thumbnailCecile from "@/assets/thumbnail-cecile.jpg";
import thumbnailKarine from "@/assets/thumbnail-karine.jpg";
import thumbnailVideo4 from "@/assets/thumbnail-video4.jpg";

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

// Carrousel vidéos (facilement extensible pour ajouter d'autres témoignages)
const videoTestimonials = [
  {
    id: "marielle",
    name: "Marielle",
    subtitle: "Témoignage de transformation",
    videoSrc: "/videos/testimonial-marielle.mp4",
    thumbnail: thumbnailMarielle,
  },
  {
    id: "cecile",
    name: "Cécile",
    subtitle: "Témoignage de transformation",
    videoSrc: "/videos/testimonial-cecile.mp4",
    thumbnail: thumbnailCecile,
  },
  {
    id: "karine",
    name: "Karine",
    subtitle: "Témoignage de transformation",
    videoSrc: "/videos/testimonial-karine.mp4",
    thumbnail: thumbnailKarine,
  },
  {
    id: "video4",
    name: "Témoignage",
    subtitle: "Témoignage de transformation",
    videoSrc: "/videos/testimonial-video4.mp4",
    thumbnail: thumbnailVideo4,
  },
];

// Témoignage vedette avec vignette de qualité
const featuredVideo = {
  id: "mahel",
  name: "Mahel Boyer — Joueur Pro d'Échec",
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
            Ce qu'ils <span className="text-gradient">en disent</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des témoignages réels de clients accompagnés
          </p>
        </div>

        {/* Featured Video + Carousel Layout */}
        <div
          className={`mb-16 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl lg:max-w-5xl mx-auto items-start">
            {/* Featured Video - Mahel */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-card max-w-sm md:max-w-xs lg:max-w-sm mx-auto w-full">
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
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideoId(null)}
                  />
                </div>
              )}
            </div>

            {/* Video Testimonials Carousel */}
            <div className="space-y-3">
              <h3 className="text-center text-base md:text-sm lg:text-base font-medium text-foreground mb-3">
                Autres témoignages vidéo
              </h3>
              <div className="grid grid-cols-2 gap-2 md:gap-2 lg:gap-3 max-w-sm md:max-w-xs lg:max-w-sm mx-auto">
                {videoTestimonials.map((video) => (
                  <div key={video.id} className="relative rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-card">
                    {playingVideoId === video.id ? (
                      <div className="relative aspect-[9/16]">
                        <video
                          src={video.videoSrc}
                          autoPlay
                          controls
                          preload="metadata"
                          className="w-full h-full object-cover"
                          onEnded={() => setPlayingVideoId(null)}
                        />
                      </div>
                    ) : (
                      <>
                        {/* Thumbnail from video first frame */}
                        <div 
                          className="relative aspect-video cursor-pointer group"
                          onClick={() => setPlayingVideoId(video.id)}
                        >
                          <video
                            src={video.videoSrc}
                            preload="metadata"
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                              <Play className="w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 text-primary-foreground fill-primary-foreground ml-0.5" />
                            </div>
                          </div>
                        </div>
                        <div className="p-2 bg-card">
                          <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Play className="w-2.5 h-2.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-foreground text-xs md:text-[10px] lg:text-xs truncate">{video.name}</h4>
                              <p className="text-[10px] md:text-[8px] lg:text-[10px] text-muted-foreground truncate">{video.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
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
                        loading="lazy"
                        decoding="async"
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
