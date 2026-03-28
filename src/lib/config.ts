/**
 * Application Configuration
 * Centralized configuration for the application
 */

export const config = {
  companySlug: 'heirloom',
  baseUrl: (process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3011').replace(/\/+$/, ''),
  siteName: 'Heirloom® Rug Cleaning',
  contact: {
    phone: '(403) 720-2230',
    phoneLink: 'tel:4037202230',
    email: 'office@arearugcleaning.com',
  },
  links: {
    getQuote: '/contact-us',
    allServices: '/area-rug-cleaning',
  },
  social: {
    facebook: '',
    instagram: '',
  },
  serviceArea: {
    city: 'Calgary',
    province: 'AB',
    country: 'Canada',
  },
  business: {
    name: 'Heirloom® Rug Cleaning',
    tagline: 'Area Rug Cleaning in Calgary since 1967',
    address: 'Calgary, Alberta, Canada',
    geo: {
      region: 'CA-AB',
      placename: 'Calgary',
      position: '51.0447;-114.0719',
      icbm: '51.0447, -114.0719',
    },
  },
  seo: {
    defaultOgImage: '/images/heirloom-logo.png',
  },
  analytics: {
    gaId: '',
  },
} as const;

/**
 * Get the full URL for a given path
 */
export function getFullUrl(path: string = '', locale?: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const localePath = locale && locale !== 'en' ? `/${locale}${cleanPath}` : cleanPath;
  return `${config.baseUrl}${localePath}`;
}

/**
 * Get canonical URL for a path
 */
export function getCanonicalUrl(path: string, locale?: string): string {
  return getFullUrl(path, locale);
}
