/**
 * Application Configuration
 * Centralized configuration for the application
 */

export const config = {
  /**
   * Base URL for the application
   */
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3011',
  
  /**
   * Site name
   */
  siteName: 'Heirloom® Rug Cleaning',
  
  /**
   * Contact information
   */
  contact: {
    phone: '(587) 857-5553',
    phoneLink: 'tel:5878575553',
    email: 'info@arearugcleaning.com',
  },
  
  /**
   * Social media links
   */
  social: {
    facebook: '',
    instagram: '',
  },
  
  /**
   * Service area
   */
  serviceArea: {
    city: 'Calgary',
    province: 'AB',
    country: 'Canada',
  },
  
  /**
   * Business information
   */
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
  
  /**
   * SEO configuration
   */
  seo: {
    defaultOgImage: '/images/heirloom-logo.png',
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
