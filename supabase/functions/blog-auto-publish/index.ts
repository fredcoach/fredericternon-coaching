// deno-lint-ignore-file no-explicit-any
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "../_shared/cors.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
const BLOG_CRON_SECRET = Deno.env.get("BLOG_CRON_SECRET")!;

const AI_URL = "https://ai.gateway.lovable.dev/v1";
const TEXT_MODEL = "openai/gpt-5.4-mini";
const IMAGE_MODEL = "google/gemini-3.1-flash-image";

const SITE_ORIGIN = "https://alphadirigeant.solutions";

// ---------- HTML sanitizer (allowlist) ----------
const ALLOWED_TAGS = new Set([
  "p","h2","h3","h4","ul","ol","li","strong","em","blockquote","br","a"
]);
function sanitizeHtml(html: string): string {
  // Strip script/style blocks
  let out = html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, "");
  // Remove disallowed tags but keep inner content
  out = out.replace(/<\/?([a-zA-Z0-9]+)([^>]*)>/g, (m, tag, attrs) => {
    const t = tag.toLowerCase();
    if (!ALLOWED_TAGS.has(t)) return "";
    if (t === "a") {
      const hrefMatch = /href\s*=\s*"([^"]+)"/i.exec(attrs);
      const href = hrefMatch ? hrefMatch[1] : "#";
      if (!/^https?:\/\//i.test(href) && !href.startsWith("/")) return "";
      const isClosing = m.startsWith("</");
      if (isClosing) return "</a>";
      return `<a href="${href}" rel="noopener noreferrer" target="_blank">`;
    }
    // For other allowed tags, drop all attributes
    return m.startsWith("</") ? `</${t}>` : `<${t}>`;
  });
  return out.trim();
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim().replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80);
}

async function ensureUniqueSlug(supa: any, base: string): Promise<string> {
  let slug = base; let i = 2;
  while (true) {
    const { data } = await supa.from("blog_posts").select("id").eq("slug", slug).maybeSingle();
    if (!data) return slug;
    slug = `${base}-${i++}`;
    if (i > 20) return `${base}-${Date.now()}`;
  }
}

// ---------- AI calls ----------
async function generateArticle(topic: any) {
  const isCase = topic.type === "case_study";

  const editorialRules = `
VOIX — "FRED COACH" (obligatoire) :
- Écris comme Frédéric Ternon parle à un dirigeant en session : posé, direct, chaleureux, proche mais respectueux, jamais donneur de leçon.
- VOUVOIEMENT systématique ("vous", "votre équipe", "votre agenda"). Le tutoiement est INTERDIT. La proximité passe par le ton, les images concrètes et l'écoute — pas par le "tu".
- Le "je" est autorisé pour partager une observation terrain ("je vois souvent que…", "ce que j'observe chez les dirigeants que j'accompagne…").
- Phrases courtes, rythme irrégulier. Alterne phrases de 4-8 mots et phrases plus longues. Pas de cadence robotique.
- Utilise des respirations : phrases nominales, incises entre virgules, questions rhétoriques ponctuelles ("Vous voyez le tableau ?").
- Ancrage terrain : renvoie à des scènes concrètes de dirigeant (comité du lundi, appel client à 22h, tableau de bord Excel, associé qui pousse, équipe qui attend une décision).
- 1 à 2 métaphores maximum, tirées du sport, du pilotage, de l'artisanat ou de la marine — jamais de "voyage intérieur" ni de "libérer son potentiel".
- Nuance obligatoire : au moins une fois, reconnais une limite, un contre-exemple ou une exception ("Ça ne marche pas pour tout le monde, mais…").


INTERDICTIONS ABSOLUES (patterns IA que Google détecte) :
- Aucune de ces expressions : "dans un monde où", "à l'ère de", "de nos jours", "il est important de", "il convient de", "en effet", "par ailleurs", "de plus", "en outre", "cependant" en début de phrase, "en conclusion", "en résumé", "pour conclure", "en définitive", "in fine".
- Pas de listes creuses ("Voici 5 secrets/clés/étapes/piliers"), pas de titres promesse ("Comment doubler…", "Le secret ultime…").
- Pas de superlatifs empilés ("crucial", "essentiel", "incontournable", "révolutionnaire", "puissant").
- Pas d'emojis, pas d'icônes texte (✅ 🚀 💡), pas de tirets em (—) en cascade, pas de "— " comme séparateur.
- Pas de parallélismes systématiques ("plus X, plus Y. Moins A, moins B."), pas de triplets rhétoriques mécaniques.
- Pas de chiffres ronds inventés ("87% des dirigeants…"). Si tu cites un chiffre, il doit être plausible et introduit comme observation terrain, pas comme étude.
- Pas de conclusion qui récapitule tout l'article. Termine par une phrase courte, ouverte, qui reste en tête.

FORME :
- HTML pur uniquement (pas de Markdown, pas de #, pas de **, pas de \`\`\`).
- Balises autorisées : <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <blockquote>. Rien d'autre.
- Longueur cible : 850 à 1200 mots. 3 à 4 sections <h2>, titres <h2> courts (3-7 mots), non parallèles entre eux.
- Utilise <strong> avec parcimonie (2-4 fois max), jamais sur un paragraphe entier.
- Insère 1 <blockquote> avec une phrase forte, tirée du corps de l'article, pas une citation inventée d'auteur.

MÉTHODE 3R : présente en toile de fond, sans jamais faire un pavé "Voici la méthode 3R". Nomme-la une seule fois maximum, quand c'est naturel.
`;

  const caseStudyExtras = isCase ? `
STRUCTURE POUR UN CAS CONCRET (varie légèrement d'un article à l'autre) :
- Ouvre par une scène : un moment précis, un lieu, une phrase que le dirigeant s'est dite.
- <h2>Ce que Stéphane/Marc/... vivait avant</h2> ou variante — décris le quotidien, pas juste le problème abstrait.
- <h2>Le déclic</h2> ou variante — un événement, une phrase, un chiffre qui a fait bouger les lignes.
- <h2>Ce qu'il a changé concrètement</h2> — 3 leviers, sous forme de paragraphes ou courte liste, avec le "comment", pas juste le "quoi".
- <h2>Où il en est aujourd'hui</h2> — résultats plausibles à 3 ou 6 mois. Chiffres réalistes (jamais "×3 le CA en 2 mois"). Cite aussi ce qui n'a pas changé ou ce qui reste dur.
- Dernier paragraphe = disclaimer OBLIGATOIRE, texte exact :
  <p><em>Cas illustratif inspiré de situations réelles rencontrées en accompagnement. Prénom et détails modifiés pour préserver la confidentialité.</em></p>

PERSONA À UTILISER : ${topic.persona_hint ?? "à inventer, dirigeant PME/TPE ≤ 15 personnes ou solopreneur"}. Donne-lui un prénom, un secteur, un âge approximatif, une taille d'équipe, un CA plausible.
` : "";

  const thematicExtras = !isCase ? `
STRUCTURE ARTICLE THÉMATIQUE (à adapter, pas à recopier) :
- Accroche : une scène ou une observation courte, pas une définition. Nomme la douleur sans la décrire à outrance.
- 3 à 4 sections <h2> qui font AVANCER la pensée (constat → mécanisme → ce qu'on peut faire → nuance/limite). Évite le plan "problème / causes / solutions / conclusion".
- Au moins un exemple ancré (comité, entretien, tableau de bord, associé, conjoint) sans nommer d'entreprise réelle.
- Termine par une phrase courte, ouverte. Pas de "En conclusion", pas de récap.
` : "";


  const userPrompt = `
Rédige un article de blog pour ${SITE_ORIGIN}.

SUJET : ${topic.title_hint}
ANGLE : ${topic.angle ?? "libre"}
MOTS-CLÉS SEO À INTÉGRER NATURELLEMENT : ${(topic.keywords ?? []).join(", ")}

${editorialRules}
${caseStudyExtras}
${thematicExtras}

Renvoie STRICTEMENT un JSON valide (aucun texte hors JSON, pas de \`\`\`) avec ces clés :
{
  "title": "titre SEO, 45-60 caractères",
  "meta_description": "meta description, 140-160 caractères",
  "excerpt": "accroche 1-2 phrases, ~200 caractères",
  "category": "une catégorie courte parmi : Pilotage, Décision, Délégation, Organisation, Énergie mentale, Recrutement, Croissance, Cas concret",
  "read_time": "N min",
  "content_html": "le corps de l'article en HTML pur (sans <html>/<body>)",
  "image_prompt": "prompt anglais court pour une PHOTO cinématographique réaliste (pas d'illustration, pas de dessin, pas de vectoriel), scène concrète du quotidien d'un dirigeant de PME/TPE française lié au sujet (bureau, atelier, chantier, réunion, extérieur), lumière naturelle chaude type golden hour ou lumière de bureau douce, atmosphère premium sobre, palette naturelle discrète, cadrage large 16:9, profondeur de champ légère, jamais de texte visible, jamais de logo, personnages vus de profil/dos ou silhouette (pas de visage identifiable au premier plan)",
  "image_alt": "alt descriptif français de l'illustration"
}
`;

  const res = await fetch(`${AI_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: TEXT_MODEL,
      messages: [
        { role: "system", content: "Tu écris À LA PLACE de Frédéric Ternon, coach terrain de dirigeants de PME/TPE (Alpha PME). Tu as passé 15 ans en direction d'entreprise avant de devenir coach. Tu VOUVOIES systématiquement le lecteur — proche mais respectueux. Tu parles comme un pair qui a vu, pas comme un consultant qui théorise. Tu refuses le vocabulaire IA et les tournures scolaires. Ta signature : phrases courtes, images concrètes, une nuance honnête à chaque idée." },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    throw new Error(`AI text ${res.status}: ${await res.text()}`);
  }
  const j = await res.json();
  const raw = j.choices?.[0]?.message?.content ?? "";
  const parsed = JSON.parse(raw);
  parsed.content_html = sanitizeHtml(parsed.content_html || "");
  return parsed;
}

async function generateImagePng(prompt: string): Promise<Uint8Array> {
  const body = {
    model: IMAGE_MODEL,
    messages: [{ role: "user", content: `${prompt}. Cinematic photorealistic photograph, shot on full-frame camera, 35mm lens, natural warm lighting, shallow depth of field, documentary editorial style, muted natural color grading, premium business magazine aesthetic. Absolutely no illustration, no drawing, no vector art, no cartoon, no 3D render, no text, no logos, no visible faces of identifiable people. Wide 16:9 composition.` }],
    modalities: ["image", "text"],
  };
  const res = await fetch(`${AI_URL}/images/generations`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`AI image ${res.status}: ${await res.text()}`);
  const j = await res.json();
  const b64 = j?.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data returned");
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

// ---------- Main ----------
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    // Auth : header secret ou body.secret (pg_cron)
    const url = new URL(req.url);
    let secret = req.headers.get("x-cron-secret") ?? url.searchParams.get("secret");
    let force = url.searchParams.get("force") === "1";
    let overrideType: string | null = url.searchParams.get("type");
    let regenerateSlug: string | null = url.searchParams.get("regenerate_image") ?? null;
    if (!secret && req.method === "POST") {
      try {
        const body = await req.json();
        secret = body?.secret ?? secret;
        force = body?.force === true || force;
        overrideType = body?.type ?? overrideType;
        regenerateSlug = body?.regenerate_image ?? regenerateSlug;
      } catch { /* ignore */ }
    }
    if (secret !== BLOG_CRON_SECRET) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supa = createClient(SUPABASE_URL, SERVICE_ROLE);

    // Mode: regenerate image only for an existing post
    if (regenerateSlug) {
      const { data: post, error: pErr } = await supa
        .from("blog_posts")
        .select("slug, title, category, image_alt")
        .eq("slug", regenerateSlug)
        .maybeSingle();
      if (pErr || !post) {
        return new Response(JSON.stringify({ error: "post_not_found", slug: regenerateSlug }), {
          status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const promptSeed = `Real-world scene for a French SME leadership blog article titled "${post.title}" (category: ${post.category}). ${post.image_alt ?? ""}`;
      const png = await generateImagePng(promptSeed);
      const path = `${post.slug}.png`;
      const up = await supa.storage.from("blog-images").upload(path, png, {
        contentType: "image/png",
        upsert: true,
      });
      if (up.error) throw up.error;
      const imageUrl = `${SUPABASE_URL}/functions/v1/blog-image/${path}?v=${Date.now()}`;
      await supa.from("blog_posts").update({ image_url: imageUrl, updated_at: new Date().toISOString() }).eq("slug", post.slug);
      return new Response(JSON.stringify({ ok: true, slug: post.slug, image_url: imageUrl }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Settings
    const { data: settings } = await supa.from("blog_settings").select("*").eq("id", 1).maybeSingle();
    if (settings?.paused) {
      return new Response(JSON.stringify({ skipped: "paused" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!force && settings?.last_published_at) {
      const last = new Date(settings.last_published_at).getTime();
      const hours = (Date.now() - last) / 36e5;
      if (hours < 20) {
        return new Response(JSON.stringify({ skipped: "already_published_recently", hours }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Determine type (Paris day-of-week)
    const parisDay = Number(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", weekday: "short" })
      .format(new Date())
      .replace(/[^A-Za-z]/g, "").slice(0,3));
    // The Intl trick above is unreliable; compute from Paris date string
    const parisWeekday = new Date().toLocaleDateString("en-US", { timeZone: "Europe/Paris", weekday: "long" });
    let desiredType = overrideType ?? (parisWeekday === "Monday" ? "case_study" : "thematic");
    if (desiredType !== "case_study" && desiredType !== "thematic") desiredType = "thematic";

    // Pick topic (fallback to other type if empty)
    let { data: topic } = await supa
      .from("blog_topics_queue")
      .select("*")
      .eq("type", desiredType)
      .eq("status", "pending")
      .order("position", { ascending: true })
      .limit(1).maybeSingle();

    if (!topic) {
      const otherType = desiredType === "case_study" ? "thematic" : "case_study";
      const r = await supa.from("blog_topics_queue").select("*").eq("type", otherType).eq("status","pending").order("position",{ascending:true}).limit(1).maybeSingle();
      topic = r.data;
    }
    if (!topic) {
      return new Response(JSON.stringify({ skipped: "empty_queue" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`[blog-auto-publish] generating type=${topic.type} title="${topic.title_hint}"`);

    // Generate article
    const article = await generateArticle(topic);
    const baseSlug = slugify(article.title);
    const slug = await ensureUniqueSlug(supa, baseSlug);

    // Generate image
    let imageUrl: string | null = null;
    try {
      const png = await generateImagePng(article.image_prompt || topic.title_hint);
      const path = `${slug}.png`;
      const up = await supa.storage.from("blog-images").upload(path, png, {
        contentType: "image/png",
        upsert: true,
      });
      if (up.error) throw up.error;
      imageUrl = `${SUPABASE_URL}/functions/v1/blog-image/${path}`;
    } catch (e) {
      console.error("[blog-auto-publish] image generation failed:", e);
    }

    // Insert
    const { data: inserted, error: insErr } = await supa.from("blog_posts").insert({
      slug,
      title: article.title,
      meta_title: article.title,
      meta_description: article.meta_description,
      excerpt: article.excerpt,
      category: article.category,
      read_time: article.read_time,
      content_html: article.content_html,
      image_url: imageUrl,
      image_alt: article.image_alt,
      article_type: topic.type,
      keywords: topic.keywords ?? [],
    }).select("id, slug").single();
    if (insErr) throw insErr;

    // Mark topic done
    await supa.from("blog_topics_queue").update({ status: "done", used_at: new Date().toISOString() }).eq("id", topic.id);
    await supa.from("blog_settings").update({ last_published_at: new Date().toISOString() }).eq("id", 1);

    // Fire-and-forget search engine ping
    fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITE_ORIGIN + "/sitemap.xml")}`).catch(() => {});

    return new Response(JSON.stringify({ ok: true, post: inserted }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[blog-auto-publish] error:", e);
    return new Response(JSON.stringify({ error: String((e as Error).message ?? e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
