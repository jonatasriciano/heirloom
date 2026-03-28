'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import StatementSection from '@/components/StatementSection/StatementSection';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import CTASection from '@/components/CTASection/CTASection';
import './rug-protection.css';

export default function RugProtectionPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('rugProtectionPage');

  return (
    <main>
        <div className="page-hero__hero">
          <div className="container">
            <nav className="page-hero__breadcrumb" aria-label={tNav('breadcrumb')}>
              <Link href="/" className="page-hero__breadcrumb-link">{tNav('home')}</Link>
              <span className="page-hero__breadcrumb-item">
                <span className="page-hero__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="page-hero__breadcrumb-current">{tNav('rugProtection')}</span>
              </span>
            </nav>
            <h1 className="page-hero__title">{t('pageTitle')}</h1>
            <p className="page-hero__desc">{t('pageSubtitle')}</p>
          </div>
        </div>

        <StatementSection label={t('introLabel')} title={t('introTitle')}>
          <p className="statement__text">{t('intro1')}</p>
          <p className="statement__text">{t('intro2')}</p>
        </StatementSection>

        <section className="rp-protect">
          <Image
            src="/images/rug-protectors-and-stain-repellant.webp"
            alt=""
            fill
            sizes="100vw"
            className="rp-protect__bg"
            loading="lazy"
          />
          <div className="rp-protect__overlay" />
          <div className="container">
            <div className="rp-protect__header">
              <span className="label-uppercase">{t('whyProtect.label')}</span>
              <h2 className="heading-display rp-protect__title">{t('whyProtect.title')}</h2>
              <hr className="divider-center" />
            </div>
            <div className="rp-protect__grid">
              {['stains', 'cleanup', 'dirt', 'colour', 'odours'].map(k => (
                <div key={k} className="rp-protect__card">
                  <h3 className="rp-protect__card-name">{t(`whyProtect.${k}.title`)}</h3>
                  <p className="rp-protect__card-desc">{t(`whyProtect.${k}.desc`)}</p>
                </div>
              ))}
            </div>
            <p className="rp-protect__closing">{t('whyProtect.closing')}</p>
          </div>
        </section>

        <ImageTextSection
          imageSrc="/images/why-choose-heirloom.webp"
          imageAlt={t('whyUs.title')}
          label={t('whyUs.label')}
          title={t('whyUs.title')}
          description={t('whyUs.desc')}
          imageOnLeft={false}
        />

        <CTASection />
      </main>
  );
}
