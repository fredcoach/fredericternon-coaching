import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { z } from "https://esm.sh/zod@3.23.8";
import { corsHeaders } from "../_shared/cors.ts";
import { createStripeClient, type StripeEnv } from "../_shared/stripe.ts";

const BodySchema = z.object({
  email: z.string().trim().email().max(255),
  environment: z.enum(["sandbox", "live"]),
  source: z.string().max(64).optional(),
  returnUrl: z.string().url().max(500),
});

const PRICE_LOOKUP_KEY = "cartographie_blocages_97";

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
    const { email, environment, source, returnUrl } = parsed.data;

    const env: StripeEnv = environment;
    const stripe = createStripeClient(env);

    // Resolve price via lookup key
    const prices = await stripe.prices.list({ lookup_keys: [PRICE_LOOKUP_KEY], limit: 1 });
    if (!prices.data.length) {
      throw new Error("Price not found for lookup key " + PRICE_LOOKUP_KEY);
    }
    const stripePrice = prices.data[0];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      ui_mode: "embedded_page",
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      customer_email: email,
      return_url: returnUrl,
      payment_intent_data: {
        description: "Cartographie des Blocages Alpha PME",
      },
      managed_payments: { enabled: true },
      metadata: {
        product: "cartographie_blocages",
        source: source ?? "",
      },
      // deno-lint-ignore no-explicit-any
    } as any);

    // Persist pending session
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error } = await supabase.from("cartographie_sessions").insert({
      stripe_session_id: session.id,
      email,
      payment_status: "pending",
      source: source ?? null,
    });
    if (error) console.error("Insert error", error);

    return new Response(
      JSON.stringify({ clientSecret: session.client_secret, sessionId: session.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("carto-checkout error", e);
    return new Response(
      JSON.stringify({ error: (e as Error).message ?? "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
