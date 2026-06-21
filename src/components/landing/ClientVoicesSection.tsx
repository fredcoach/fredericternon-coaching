import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Section témoignages clients : 2 vidéos + 3 WhatsApp à venir.
 * Tant que les tableaux sont vides, la section ne s'affiche pas.
 *
 * Pour activer :
 *  1. Déposer les .mp4 + thumbnails dans src/assets/ ou /public/videos/
 *  2. Ajouter les entrées dans featuredVideos et whatsappTestimonials ci-dessous
 */

type FeaturedVideo = {
  src: string;
  poster: string;
  name: string;
  role: string;
  caption?: string;
};

type WhatsAppTestimonial = {
  image: string;
  name: string;
  caption?: string;
};

const featuredVideos: FeaturedVideo[] = [
  // { src: "/videos/temoin1.mp4", poster: "/videos/temoin1.jpg", name: "Prénom", role: "Dirigeant PME/TPE · Secteur" },
  // { src: "/videos/temoin2.mp4", poster: "/videos/temoin2.jpg", name: "Prénom", role: "Dirigeant PME/TPE · Secteur" },
];

const whatsappTestimonials: WhatsAppTestimonial[] = [
  // { image: "/whatsapp/msg1.jpg", name: "Prénom" },
  // { image: "/whatsapp/msg2.jpg", name: "Prénom" },
  // { image: "/whatsapp/msg3.jpg", name: "Prénom" },
];

export function ClientVoicesSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  // Tant qu'aucun asset n'est fourni, on ne rend rien
  if (featuredVideos.length === 0 && whatsappTestimonials.length === 0) {
    return null;
  }

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-widest uppercase text-accent font-medium mb-3">
              Ce qu'en disent les dirigeants
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Paroles brutes, sans filtre
            </h2>
          </div>

          {/* Vidéos */}
          {featuredVideos.length > 0 && (
            <div
              className={`grid gap-6 mb-12 ${
                featuredVideos.length === 1
                  ? "max-w-2xl mx-auto"
                  : "md:grid-cols-2"
              }`}
            >
              {featuredVideos.map((video, i) => (
                <figure
                  key={i}
                  className="rounded-2xl overflow-hidden bg-card border border-border shadow-md"
                >
                  <video
                    controls
                    preload="none"
                    poster={video.poster}
                    className="w-full aspect-video bg-black"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <figcaption className="p-4">
                    <p className="font-semibold text-foreground">{video.name}</p>
                    <p className="text-sm text-muted-foreground">{video.role}</p>
                    {video.caption && (
                      <p className="text-sm text-foreground/80 mt-2 italic">
                        « {video.caption} »
                      </p>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* WhatsApp */}
          {whatsappTestimonials.length > 0 && (
            <div className="grid gap-6 md:grid-cols-3">
              {whatsappTestimonials.map((msg, i) => (
                <figure
                  key={i}
                  className="rounded-2xl overflow-hidden bg-card border border-border shadow-md"
                >
                  <img
                    src={msg.image}
                    alt={`Témoignage WhatsApp de ${msg.name}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  {msg.caption && (
                    <figcaption className="p-4 text-sm text-muted-foreground italic">
                      {msg.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
