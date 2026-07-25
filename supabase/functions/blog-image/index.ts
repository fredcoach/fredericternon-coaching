import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    // path after function name, e.g. /blog-image/foo.png
    const parts = url.pathname.split("/").filter(Boolean);
    const idx = parts.indexOf("blog-image");
    const filePath = idx >= 0 ? parts.slice(idx + 1).join("/") : parts.join("/");
    if (!filePath) return new Response("missing path", { status: 400, headers: corsHeaders });

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await supabase.storage.from("blog-images").download(filePath);
    if (error || !data) {
      return new Response("not found", { status: 404, headers: corsHeaders });
    }

    const ext = filePath.split(".").pop()?.toLowerCase() || "png";
    const contentType =
      ext === "jpg" || ext === "jpeg" ? "image/jpeg" :
      ext === "webp" ? "image/webp" :
      ext === "gif" ? "image/gif" :
      "image/png";

    return new Response(data, {
      headers: {
        ...corsHeaders,
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (e) {
    return new Response(`error: ${(e as Error).message}`, { status: 500, headers: corsHeaders });
  }
});
