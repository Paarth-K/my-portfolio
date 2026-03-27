import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

function patchSessionDriverVirtualModule() {
  return {
    name: "patch-session-driver-virtual-module",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("virtual:astro:session-driver")) {
        return null;
      }

      const fromToken = "from '";
      const separator = "';\nexport * from '";
      const firstFrom = code.indexOf(fromToken);
      const separatorIndex = code.indexOf(
        separator,
        firstFrom + fromToken.length,
      );

      if (
        firstFrom === -1 ||
        separatorIndex === -1 ||
        separatorIndex <= firstFrom + fromToken.length
      ) {
        return null;
      }

      const moduleId = code.slice(firstFrom + fromToken.length, separatorIndex);
      const quotedModuleId = JSON.stringify(moduleId);

      return {
        code: `import { default as _default } from ${quotedModuleId};\nexport * from ${quotedModuleId};\nexport default _default;`,
        map: null,
      };
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.paarthk.dev",
  integrations: [preact(), vue(), sitemap()],
  adapter: cloudflare(),
  vite: {
    plugins: [patchSessionDriverVirtualModule()],
  },
});
