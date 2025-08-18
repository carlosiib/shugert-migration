import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://shugert.com.mx/",
  image: {
    domains: ["unsplash.com", "images.unsplash.com"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), icon(), sitemap()],
});
