import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cambiar por el dominio final cuando exista.
const SITE_URL = 'https://ciocode.com';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
