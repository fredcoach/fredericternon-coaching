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
TON ÉDITORIAL — OBLIGATOIRE :
- Marque : Alpha PME (Frédéric Ternon, coach de dirigeants de PME/TPE jusqu'à 30 personnes).
- Ton : premium B2B masculin, direct, concret. Codes cabinet conseil, pas gourou.
- Cible : dirigeants et fondateurs de PME/TPE et solopreneurs.
- Méthode 3R (Repérer, Réagir, Reprogrammer) en toile de fond, sans jargon lourd.

INTERDICTIONS ABSOLUES (patterns IA) :
- Pas de "Dans un monde où", "À l'ère de", "En conclusion", "En résumé", "Pour conclure".
- Pas d'emojis, pas de titres marketing creux, pas de "Voici les 5 secrets".
- Pas de tirets em (—) en cascade, pas de formulations pompeuses.
- Pas de promesses irréalistes ni de chiffres non plausibles.
- HTML pur uniquement (pas de Markdown, pas de #, pas de **).

FORMAT HTML autorisé : <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <blockquote>. Rien d'autre.
Longueur : 900 à 1300 mots. 3 à 5 sections <h2>. Phrases courtes.
`;

  const caseStudyExtras = isCase ? `
STRUCTURE OBLIGATOIRE POUR UN CAS CONCRET :
1. Introduction : présentation du persona (prénom fictif, activité, taille d'équipe, CA approximatif).
2. <h2>La situation de départ</h2> : problème quotidien concret du dirigeant.
3. <h2>Le déclic</h2> : le moment ou le constat qui a changé la trajectoire.
4. <h2>Les 3 leviers appliqués</h2> : actions concrètes (avec sous-<h3> si utile).
5. <h2>Ce qui a changé à 3 et 6 mois</h2> : résultats chiffrés PLAUSIBLES (temps récupéré, CA, marge, sommeil, décisions déléguées).
6. Dernier paragraphe = disclaimer OBLIGATOIRE, texte exact :
   <p><em>Cas illustratif inspiré de situations réelles rencontrées en accompagnement. Prénom et détails modifiés pour préserver la confidentialité.</em></p>

PERSONA À UTILISER : ${topic.persona_hint ?? "à inventer, dirigeant PME/TPE ≤ 15 personnes ou solopreneur"}.
` : "";

  const thematicExtras = !isCase ? `
STRUCTURE ARTICLE THÉMATIQUE :
- Accroche courte qui nomme la douleur.
- 3 à 4 sections <h2> qui structurent la réflexion.
- Exemples concrets ancrés dans le quotidien d'un dirigeant de PME/TPE.
- Dernier paragraphe : ouverture vers l'action, sans CTA commercial pushy.
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
  "image_prompt": "prompt anglais court pour une illustration éditoriale premium, style cabinet conseil, palette bleu marine profond + or chaud, jamais de texte dans l'image, jamais de visage identifiable, métaphore visuelle liée au sujet",
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
        { role: "system", content: "Tu es un rédacteur senior spécialisé pilotage de dirigeants de PME/TPE. Tu écris pour Frédéric Ternon (Alpha PME)." },
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
    messages: [{ role: "user", content: `${prompt}. Editorial illustration, premium consulting aesthetic, deep navy blue and warm gold palette, cinematic lighting, no text, no faces, no logos, wide 16:9 composition.` }],
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
    if (!secret && req.method === "POST") {
      try {
        const body = await req.json();
        secret = body?.secret ?? secret;
        force = body?.force === true || force;
        overrideType = body?.type ?? overrideType;
      } catch { /* ignore */ }
    }
    if (secret !== BLOG_CRON_SECRET) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supa = createClient(SUPABASE_URL, SERVICE_ROLE);

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
      imageUrl = `${SUPABASE_URL}/storage/v1/object/public/blog-images/${path}`;
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
