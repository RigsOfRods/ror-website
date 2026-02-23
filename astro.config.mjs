import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.rigsofrods.org',
  base: '/ror-website',
  integrations: [mdx()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5.x uses legacy Sass syntax internally — silence those warnings
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },
});
