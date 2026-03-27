import { config } from './config';

export interface SeoData {
  title: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  ogType?: string | null;
  twitterCard?: string | null;
  canonical?: string | null;
  robots?: string | null;
}

const CMS_API_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
const CMS_API_KEY = process.env.CMS_API_KEY;

export async function getSeoData(path: string, locale: string = 'en'): Promise<SeoData | null> {
  try {
    if (!CMS_API_KEY) {
      console.warn('[SEO] CMS_API_KEY not configured, using fallbacks');
      return null;
    }

    const url = `${CMS_API_URL}/api/public/seo?path=${encodeURIComponent(path)}&locale=${locale}&companySlug=heirloom`;

    const response = await fetch(url, {
      headers: { 'X-API-Key': CMS_API_KEY },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`[SEO] Failed to fetch SEO data for ${path}:`, response.status);
      return null;
    }

    const data = await response.json();
    if (data.fallback) return null;
    return data.seo || null;
  } catch (error) {
    console.error('[SEO] Error fetching SEO data:', error);
    return null;
  }
}
