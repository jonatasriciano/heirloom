import { config, getCanonicalUrl } from './config';

export interface SeoFallbackEntry {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  ogType: string;
  twitterCard: string;
  canonical: string;
  robots: string;
}

function entry(
  path: string,
  title: string,
  description: string,
  keywords: string,
  ogTitle: string,
  ogDescription: string,
  ogImage?: string,
  robots = 'index, follow',
): SeoFallbackEntry {
  return {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage: ogImage || config.seo.defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonical: getCanonicalUrl(path, 'en'),
    robots,
  };
}

export const SEO_FALLBACKS: Record<string, SeoFallbackEntry> = {
  '/': entry(
    '/',
    'Heirloom® Rug Cleaning - Area Rug Cleaning Calgary Since 1967',
    'Professional area rug cleaning and restoration in Calgary since 1967. Oriental rugs, stain removal, pet odor removal, rug repair and more.',
    'area rug cleaning Calgary, oriental rug cleaning, rug restoration, rug repair Calgary',
    'Heirloom® Rug Cleaning | Calgary Area Rug Experts Since 1967',
    'Professional area rug cleaning and restoration in Calgary since 1967.',
  ),
  '/area-rug-cleaning': entry(
    '/area-rug-cleaning',
    'Area Rug Cleaning Calgary - Professional Rug Cleaning | Heirloom',
    'Expert area rug cleaning in Calgary. We clean all types of rugs including oriental, Persian, silk, and wool rugs. Free pickup and delivery.',
    'area rug cleaning Calgary, rug cleaning service, oriental rug cleaning, professional rug cleaning',
    'Area Rug Cleaning Calgary | Heirloom',
    'Expert area rug cleaning in Calgary. All rug types. Free pickup and delivery.',
  ),
  '/rug-repair': entry(
    '/rug-repair',
    'Rug Repair Calgary - Expert Restoration Services | Heirloom',
    'Professional rug repair in Calgary. Fringe repair, color correction, backing repair, hole repair, fire and water damage restoration.',
    'rug repair Calgary, rug restoration, fringe repair, rug hole repair, color correction',
    'Rug Repair Calgary | Heirloom',
    'Professional rug repair and restoration in Calgary. All types of damage repaired.',
  ),
  '/rug-padding': entry(
    '/rug-padding',
    'Rug Padding Calgary - Premium Rug Underlays | Heirloom',
    'High-quality rug padding and underlays in Calgary. Non-slip, waterproof, and pet barrier options for all floor types.',
    'rug padding Calgary, rug underlay, non-slip rug pad, waterproof rug pad',
    'Rug Padding Calgary | Heirloom',
    'High-quality rug padding and underlays in Calgary. Non-slip, waterproof, and pet barrier options.',
  ),
  '/rug-protection': entry(
    '/rug-protection',
    'Rug Protection Calgary - Stain Repellant & Protectors | Heirloom',
    'Protect your rugs from stains, dirt, and odours with professional rug protection services in Calgary.',
    'rug protection Calgary, rug stain repellant, rug protector, stain protection',
    'Rug Protection Calgary | Heirloom',
    'Protect your rugs from stains, dirt, and odours with professional rug protection services.',
  ),
  '/carpet-dyeing': entry(
    '/carpet-dyeing',
    'Carpet Dyeing Calgary - Bleach Spot Repair & Color Restoration | Heirloom',
    'Professional carpet dyeing and bleach spot repair in Calgary. Restore your carpet color without replacement.',
    'carpet dyeing Calgary, bleach spot repair, carpet color restoration, carpet recolouring',
    'Carpet Dyeing Calgary | Heirloom',
    'Professional carpet dyeing and bleach spot repair in Calgary. Restore color without replacement.',
  ),
  '/about-us': entry(
    '/about-us',
    'About Us - Heirloom® Rug Cleaning Calgary Since 1967',
    'Learn about Heirloom Rug Cleaning, Calgary\'s trusted rug cleaning experts since 1967. Family-owned and committed to excellence.',
    'about heirloom rug cleaning, Calgary rug cleaning company, rug cleaning experts',
    'About Heirloom® Rug Cleaning Calgary',
    'Calgary\'s trusted rug cleaning experts since 1967. Family-owned and committed to excellence.',
  ),
  '/contact-us': entry(
    '/contact-us',
    'Contact Us - Heirloom® Rug Cleaning Calgary',
    'Get in touch with Heirloom Rug Cleaning for rug cleaning, repair, and restoration services in Calgary.',
    'contact heirloom rug cleaning, Calgary rug cleaning contact, rug cleaning quote',
    'Contact Heirloom® Rug Cleaning Calgary',
    'Get in touch for rug cleaning, repair, and restoration services in Calgary.',
  ),
  '/calculate-cleaning-cost': entry(
    '/calculate-cleaning-cost',
    'Calculate Rug Cleaning Cost - Heirloom® Rug Cleaning Calgary',
    'Calculate the cost to clean your area rug in Calgary. Get an instant estimate based on rug size and type.',
    'rug cleaning cost Calgary, area rug cleaning price, rug cleaning estimate',
    'Calculate Rug Cleaning Cost | Heirloom Calgary',
    'Get an instant estimate for cleaning your area rug in Calgary.',
  ),
};

const DEFAULT_FALLBACK: SeoFallbackEntry = {
  title: 'Heirloom® Rug Cleaning',
  description: 'Professional area rug cleaning and restoration in Calgary since 1967.',
  keywords: 'area rug cleaning Calgary',
  ogTitle: 'Heirloom® Rug Cleaning',
  ogDescription: 'Professional area rug cleaning and restoration in Calgary since 1967.',
  ogImage: config.seo.defaultOgImage,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  canonical: getCanonicalUrl('/', 'en'),
  robots: 'index, follow',
};

export function getSeoFallback(path: string): SeoFallbackEntry {
  return SEO_FALLBACKS[path] || { ...DEFAULT_FALLBACK, canonical: getCanonicalUrl(path, 'en') };
}
