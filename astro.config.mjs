// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kimchristiaens.be',
  i18n: {
    locales: ['nl', 'fr'],
    defaultLocale: 'nl',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'nl',
        locales: {
          nl: 'nl-BE',
          fr: 'fr-BE',
        },
      },
      filter: (page) => !/\/(bedankt|merci)\/$/.test(page) && !/\/404\/?$/.test(page),
    }),
  ],
});
