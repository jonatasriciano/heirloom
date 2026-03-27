import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/area-rug-cleaning': '/area-rug-cleaning',
    '/rug-repair': '/rug-repair',
    '/rug-padding': '/rug-padding',
    '/rug-protection': '/rug-protection',
    '/carpet-dyeing': '/carpet-dyeing',
    '/about-us': '/about-us',
    '/contact-us': '/contact-us',
    '/calculate-cleaning-cost': '/calculate-cleaning-cost',
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
