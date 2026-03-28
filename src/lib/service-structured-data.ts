import { config, getFullUrl } from './config';

interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  image?: string;
  priceRange?: string;
  areaServed?: string;
}

export function generateServiceSchema({
  name,
  description,
  url,
  image,
  priceRange,
  areaServed = 'Calgary, AB',
}: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: getFullUrl(url),
    provider: {
      '@type': 'LocalBusiness',
      name: config.siteName,
      telephone: config.contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: config.serviceArea.city,
        addressRegion: config.serviceArea.province,
        addressCountry: config.serviceArea.country,
      },
    },
    areaServed: {
      '@type': 'Place',
      name: areaServed,
    },
    ...(image && { image: getFullUrl(image) }),
    ...(priceRange && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'CAD',
          price: priceRange,
        },
      },
    }),
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getFullUrl(item.url),
    })),
  };
}
