import { config, getFullUrl } from '@/lib/config';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'breadcrumb' | 'faq';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: config.siteName,
          url: config.baseUrl,
          logo: getFullUrl(config.seo.defaultOgImage),
          description: config.business.tagline,
          address: {
            '@type': 'PostalAddress',
            addressLocality: config.serviceArea.city,
            addressRegion: config.serviceArea.province,
            addressCountry: config.serviceArea.country,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: config.contact.phone,
            contactType: 'Customer Service',
            areaServed: config.serviceArea.city,
            availableLanguage: ['English', 'French'],
          },
          sameAs: [
            config.social.facebook,
            config.social.instagram,
          ].filter(Boolean),
        };

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': config.baseUrl,
          name: config.siteName,
          image: getFullUrl(config.seo.defaultOgImage),
          url: config.baseUrl,
          telephone: config.contact.phone,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: config.serviceArea.city,
            addressRegion: config.serviceArea.province,
            addressCountry: config.serviceArea.country,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 51.0447,
            longitude: -114.0719,
          },
          areaServed: {
            '@type': 'City',
            name: config.serviceArea.city,
          },
        };

      case 'service':
      case 'breadcrumb':
      case 'faq':
        return data;

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  if (!structuredData) return null;

  return (
    <script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
