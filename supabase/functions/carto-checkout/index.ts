import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { z } from "https://esm.sh/zod@3.23.8";
import { corsHeaders } from "../_shared/cors.ts";
import { createStripeClient, resolveServerStripeEnv } from "../_shared/stripe.ts";

const BodySchema = z.object({
  email: z.string().trim().email().max(255),
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
    const { email, source, returnUrl } = parsed.data;

    // Restrict return_url to known origins to prevent open-redirect / phishing
    // hand-off after Stripe redirects back from checkout.
    const ALLOWED_ORIGIN_HOSTS = [
      "alphadirigeant.solutions",
      "www.alphadirigeant.solutions",
      "fredericternon-coaching.lovable.app",
    ];
    let returnOrigin: URL;
    try {
      returnOrigin = new URL(returnUrl);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid returnUrl" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const host = returnOrigin.hostname;
    const isAllowed =
      ALLOWED_ORIGIN_HOSTS.includes(host) ||
      host.endsWith(".lovable.app") ||
      host.endsWith(".lovable.dev") ||
      host === "localhost" ||
      host === "127.0.0.1";
    if (returnOrigin.protocol !== "https:" && host !== "localhost" && host !== "127.0.0.1") {
      return new Response(JSON.stringify({ error: "Invalid returnUrl" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!isAllowed) {
      return new Response(JSON.stringify({ error: "Invalid returnUrl" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const env = resolveServerStripeEnv();
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
      automatic_tax: { enabled: true },
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
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
