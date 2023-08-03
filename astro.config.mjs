import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://www.paarthkukreja.com",
  integrations: [vue(), sitemap(), preact({ compat: true })],
});
