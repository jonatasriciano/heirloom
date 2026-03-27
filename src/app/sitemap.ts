import { MetadataRoute } from 'next';
import { config } from '@/lib/config';

// Import pre-generated pages list (generated at build time)
import sitemapData from '@/generated/sitemap-pages.json';

const locales = ['en', 'fr'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = config.baseUrl;
  const pages = sitemapData.pages || [];

  return pages.map((page) => {
    const priority =
      page === '/' ? 1.0
      : page === '/area-rug-cleaning' || page === '/rug-repair' ? 0.9
      : page === '/rug-padding' || page === '/rug-protection' || page === '/carpet-dyeing' ? 0.8
      : 0.7;

    const changeFrequency: 'daily' | 'weekly' | 'monthly' =
      page === '/' ? 'daily'
      : page === '/area-rug-cleaning' || page === '/rug-repair' ? 'weekly'
      : 'monthly';

    return {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}${l === 'en' ? '' : '/fr'}${page === '/' ? '' : page}`])
        ),
      },
    };
  });
}
