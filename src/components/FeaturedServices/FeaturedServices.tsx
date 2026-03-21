'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const services = [
  { key: 'cleaning', image: '/images/servicesHomePage/featured-rug-cleaning.webp', href: '/area-rug-cleaning' },
  { key: 'repair', image: '/images/servicesHomePage/featured-rug-repair.webp', href: '/rug-repair' },
  { key: 'spotRemoval', image: '/images/servicesHomePage/featured-spot-removal.webp', href: '/area-rug-cleaning/stain-removal' },
  { key: 'pads', image: '/images/servicesHomePage/featured-rug-pads.webp', href: '/rug-padding' },
] as const;

export default function FeaturedServices() {
  const t = useTranslations('featuredServices');

  return (
    <section className="section-alt">
      <div className="container">
        <h2 className="heading-display featured-services__title">{t('title')}</h2>
        <div className="featured-services__grid">
          {services.map((s) => (
            <Link key={s.key} href={s.href as '/'} className="featured-services__card">
              <div className="featured-services__image-wrap">
                <Image
                  src={s.image}
                  alt={t(`items.${s.key}`)}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="featured-services__image"
                />
              </div>
              <span className="featured-services__label">{t(`items.${s.key}`)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
