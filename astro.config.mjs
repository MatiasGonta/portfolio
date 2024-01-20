import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  static: {
    directory: 'assets'
  },
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
  pages: {
    '/pages/[lang]/resume.astro': ['src/pages/[lang]/resume.astro'],
  },
});