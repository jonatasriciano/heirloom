'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="cta-section">
      <Image
        src="/images/background-cta.webp"
        alt=""
        fill
        sizes="100vw"
        className="cta-section__bg"
        priority={false}
      />
      <div className="cta-section__overlay" />
      <div className="container">
        <div className="cta__content">
          <h2 className="heading-display cta__title">{t('title')}</h2>
          <p className="cta__subtitle">{t('subtitle')}</p>
          <div className="cta__actions">
            <Link href="/contact-us" className="btn btn-primary btn-lg">
              {t('primary')}
            </Link>
            <a href="tel:4037202230" className="btn cta__btn-outline btn-lg">
              {t('secondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
