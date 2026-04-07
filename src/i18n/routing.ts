import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/hakkimizda': {
      tr: '/hakkimizda',
      en: '/about-us'
    },
    '/iletisim': {
      tr: '/iletisim',
      en: '/contact'
    },
    '/blog': {
      tr: '/blog',
      en: '/blog'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = typeof routing.locales[number];
