import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bonani.hr",
  integrations: [tailwind(), react(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
