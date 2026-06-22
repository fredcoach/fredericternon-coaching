import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { z } from "https://esm.sh/zod@3.23.8";
import { corsHeaders } from "../_shared/cors.ts";
import { createStripeClient, resolveServerStripeEnv } from "../_shared/stripe.ts";
import { buildRestitution, type Answers } from "../_shared/cartographie-logic.ts";

const AnswersSchema = z.object({
  q1: z.string().min(1).max(32),
  q2: z.string().min(1).max(32),
  q3: z.string().min(1).max(64),
  q4: z.string().min(1).max(64),
  q5: z.string().min(1).max(64),
  q6: z.number().int().min(0).max(5),
  q7: z.number().int().min(0).max(5),
  q8: z.number().int().min(0).max(5),
  q9: z.number().int().min(0).max(5),
  q10: z.number().int().min(0).max(5),
  q11: z.number().int().min(0).max(5),
  q12: z.number().int().min(0).max(5),
  q13: z.string().min(1).max(64),
  q14: z.string().min(1).max(64),
  q15: z.string().min(1).max(64),
  q16: z.string().trim().min(1).max(2000),
  q17: z.string().trim().min(1).max(2000),
});

const BodySchema = z.object({
  sessionId: z.string().min(1).max(255),
  answers: AnswersSchema,
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const { sessionId, answers } = parsed.data;
    const env = resolveServerStripeEnv();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Load row
    const { data: row, error: loadErr } = await supabase
      .from("cartographie_sessions")
      .select("*")
      .eq("stripe_session_id", sessionId)
      .maybeSingle();

    if (loadErr || !row) {
      return new Response(JSON.stringify({ error: "Session inconnue" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // If already completed, return existing result
    if (row.result) {
      return new Response(JSON.stringify({ result: row.result, email: row.email }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verify Stripe payment
    const stripe = createStripeClient(env);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return new Response(
        JSON.stringify({ error: "Paiement non confirmé", status: session.payment_status }),
        { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Compute restitution
    const { scores, interpretation, result } = buildRestitution(answers as Answers);

    const stripeEmail = session.customer_details?.email ?? row.email;

    // Persist
    const { error: updErr } = await supabase
      .from("cartographie_sessions")
      .update({
        payment_status: "paid",
        email: stripeEmail,
        answers,
        result: { ...result, scores, interpretation },
        decision_repoussee: answers.q16,
        cout_statu_quo: answers.q17,
        completed_at: new Date().toISOString(),
      })
      .eq("stripe_session_id", sessionId);

    if (updErr) {
      console.error("Update error", updErr);
      throw new Error("Sauvegarde impossible");
    }

    return new Response(JSON.stringify({ result, email: stripeEmail }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("carto-submit error", e);
    return new Response(
      JSON.stringify({ error: (e as Error).message ?? "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
