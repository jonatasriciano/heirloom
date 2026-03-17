import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      fr: '/a-propos'
    },
    '/contact': {
      en: '/contact',
      fr: '/contact'
    },
    '/services': {
      en: '/services',
      fr: '/services'
    },
    '/gallery': {
      en: '/gallery',
      fr: '/galerie'
    },
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
