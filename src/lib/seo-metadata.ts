import { Metadata } from 'next';
import { getSeoData } from './seo';
import { config, getCanonicalUrl } from './config';
import { getSeoFallback } from './seo-fallbacks';

interface SeoFallback {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  robots?: string;
}

interface GenerateSeoMetadataOptions {
  path: string;
  locale?: string;
  fallback?: SeoFallback;
}

export function createPageMetadata(pagePath: string) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    return generateSeoMetadata({
      path: pagePath,
      locale,
      fallback: getSeoFallback(pagePath),
    });
  };
}

export async function generateSeoMetadata({
  path,
  locale = 'en',
  fallback = {},
}: GenerateSeoMetadataOptions): Promise<Metadata> {
  const seoData = await getSeoData(path, locale);

  const title = seoData?.metaTitle || seoData?.title || fallback.title || config.siteName;
  const description = seoData?.metaDescription || fallback.description || '';
  const keywords = seoData?.metaKeywords || fallback.keywords;
  const canonical = seoData?.canonical || fallback.canonical || getCanonicalUrl(path, locale);
  const robots = seoData?.robots || fallback.robots || 'index, follow';

  const ogTitle = seoData?.ogTitle || fallback.ogTitle || title;
  const ogDescription = seoData?.ogDescription || fallback.ogDescription || description;
  const ogImage = seoData?.ogImage || fallback.ogImage || fallback.image || config.seo.defaultOgImage;
  const ogType = (seoData?.ogType || fallback.ogType || 'website') as 'website' | 'article';
  const twitterCard = (seoData?.twitterCard || fallback.twitterCard || 'summary_large_image') as 'summary' | 'summary_large_image';

  return {
    metadataBase: new URL(config.baseUrl),
    title,
    description,
    ...(keywords && { keywords }),
    authors: [{ name: config.siteName }],
    robots,
    alternates: {
      canonical,
      languages: {
        'en': path,
        'fr': `/fr${path}`,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: ogType,
      url: canonical,
      siteName: config.siteName,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: twitterCard,
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    other: {
      'geo.region': config.business.geo.region,
      'geo.placename': config.business.geo.placename,
      'geo.position': config.business.geo.position,
      'ICBM': config.business.geo.icbm,
    },
  };
}
