import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Split heavy third-party libs out of the main chunk so the homepage
    // ships a smaller initial JS payload (better TBT + LCP on 4G).
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "framer-motion",
            "embla-carousel-react",
            "lucide-react",
          ],
          "data-vendor": [
            "@tanstack/react-query",
            "@supabase/supabase-js",
            "zod",
          ],
        },
      },
    },
    // Bump the warning threshold — split chunks stay comfortably under it.
    chunkSizeWarningLimit: 900,
  },
}));
