import { defineConfig } from "astro/config";
import NightOwlTheme from "./night-owl-theme.json" assert { type: "json" };

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: NightOwlTheme,
    },
  },
});
