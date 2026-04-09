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
    },
    '/blog/[slug]': {
      tr: '/blog/[slug]',
      en: '/blog/[slug]'
    },
    '/tedaviler': {
      tr: '/tedaviler',
      en: '/treatments'
    },
    '/tedaviler/[category]': {
      tr: '/tedaviler/[category]',
      en: '/treatments/[category]'
    },
    '/tedaviler/[category]/[slug]': {
      tr: '/tedaviler/[category]/[slug]',
      en: '/treatments/[category]/[slug]'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = typeof routing.locales[number];
