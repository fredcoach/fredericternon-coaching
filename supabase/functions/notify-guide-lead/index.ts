// Edge Function: notify-guide-lead
// Sends a notification email to the site owner when someone downloads the guide.
// Uses Resend (https://resend.com). Falls back gracefully if RESEND_API_KEY is missing
// so that lead submission never fails for the visitor.

import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const BodySchema = z.object({
  lead_id: z.string().uuid().nullable().optional(),
  first_name: z.string().min(1).max(80),
  company: z.string().min(1).max(150),
  email: z.string().email().max(254),
  guide_slug: z.string().min(1).max(60),
});

const NOTIFY_TO = "contact@fredericternon.com";
const FROM = "Alpha PME <onboarding@resend.dev>";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const json = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    const lead = parsed.data;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.warn(
        "notify-guide-lead: RESEND_API_KEY missing — skipping email, lead is stored in DB."
      );
      return new Response(
        JSON.stringify({ ok: true, emailed: false, reason: "no_api_key" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const firstName = escapeHtml(lead.first_name);
    const company = escapeHtml(lead.company);
    const email = escapeHtml(lead.email);
    const guide = escapeHtml(lead.guide_slug);

    const html = `<!doctype html>
<html><body style="font-family:Arial,sans-serif;background:#faf7f0;padding:24px;color:#0f1b3d;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;padding:32px;border-top:4px solid #b8923d;">
    <h1 style="margin:0 0 8px;font-size:20px;color:#0f1b3d;">Nouveau lead — Guide PDF</h1>
    <p style="margin:0 0 24px;color:#555;">Quelqu'un vient de télécharger « Sortir de la roue du hamster ».</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:8px 0;color:#888;width:120px;">Prénom</td><td style="padding:8px 0;"><strong>${firstName}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#888;">Entreprise</td><td style="padding:8px 0;"><strong>${company}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#b8923d;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#888;">Guide</td><td style="padding:8px 0;">${guide}</td></tr>
      <tr><td style="padding:8px 0;color:#888;">Date</td><td style="padding:8px 0;">${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</td></tr>
    </table>
  </div>
  <p style="text-align:center;color:#999;font-size:12px;margin-top:16px;">Notification automatique · alphadirigeant.solutions</p>
</body></html>`;

    const text = `Nouveau lead — Guide PDF
Prénom : ${lead.first_name}
Entreprise : ${lead.company}
Email : ${lead.email}
Guide : ${lead.guide_slug}
Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}`;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: lead.email,
        subject: `Nouveau lead guide — ${lead.first_name} (${lead.company})`,
        html,
        text,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Resend error:", resp.status, errText);
      return new Response(
        JSON.stringify({ ok: false, emailed: false, status: resp.status }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true, emailed: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("notify-guide-lead error:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
