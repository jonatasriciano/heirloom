'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TrustSection from '@/components/TrustSection/TrustSection';
import CTASection from '@/components/CTASection/CTASection';
import SanitizeSection from '@/components/SanitizeSection/SanitizeSection';
import StatementSection from '@/components/StatementSection/StatementSection';
import './area-rug-cleaning.css';

export default function AreaRugCleaningPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('rugCleaningPage');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="placeholder-page__hero">
          <div className="container">
            <nav className="placeholder-page__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="placeholder-page__breadcrumb-link">
                {tNav('home')}
              </Link>
              <span className="placeholder-page__breadcrumb-item">
                <span className="placeholder-page__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="placeholder-page__breadcrumb-current">{t('pageTitle')}</span>
              </span>
            </nav>
            <h1 className="placeholder-page__title">{t('pageTitle')}</h1>
            <p className="placeholder-page__desc">{t('pageSubtitle')}</p>
          </div>
        </div>

        {/* Intro */}
        <StatementSection label={t('introLabel')} title={t('introTitle')}>
          <p className="statement__text">{t('intro1')}</p>
        </StatementSection>

        {/* Feature cards */}
        <div className="container arc-features-wrap">
            <div className="arc-features">
              <div className="arc-feature">
                <div className="arc-feature__header">
                  <div className="arc-feature__icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12l10 5 10-5" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="arc-feature__title">{t('features.craftsmanship.title')}</h3>
                </div>
                <p className="arc-feature__desc">{t('features.craftsmanship.desc')}</p>
              </div>

              <div className="arc-feature">
                <div className="arc-feature__header">
                  <div className="arc-feature__icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                      <path d="M3 9h18M9 3v18" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h3 className="arc-feature__title">{t('features.everyType.title')}</h3>
                </div>
                <p className="arc-feature__desc">{t('features.everyType.desc')}</p>
              </div>

              <div className="arc-feature">
                <div className="arc-feature__header">
                  <div className="arc-feature__icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 20V10M18 20V4M6 20v-4" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="arc-feature__title">{t('features.tailored.title')}</h3>
                </div>
                <p className="arc-feature__desc">{t('features.tailored.desc')}</p>
              </div>
            </div>
        </div>

        {/* Sanitize section */}
        <SanitizeSection />

        {/* Process */}
        <ProcessSection />

        {/* Why Choose */}
        <ImageTextSection
          imageSrc="/images/why-choose-heirloom.webp"
          imageAlt={t('whyChoose.title')}
          label={t('whyChoose.label')}
          title={t('whyChoose.title')}
          description={t('whyChoose.desc')}
          imageOnLeft={false}
        />

        <TrustSection />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
