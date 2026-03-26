'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import StatementSection from '@/components/StatementSection/StatementSection';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import CTASection from '@/components/CTASection/CTASection';
import './rug-padding.css';

export default function RugPaddingPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('rugPaddingPage');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="page-hero__hero">
          <div className="container">
            <nav className="page-hero__breadcrumb" aria-label={tNav('breadcrumb')}>
              <Link href="/" className="page-hero__breadcrumb-link">{tNav('home')}</Link>
              <span className="page-hero__breadcrumb-item">
                <span className="page-hero__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="page-hero__breadcrumb-current">{t('pageTitle')}</span>
              </span>
            </nav>
            <h1 className="page-hero__title">{t('pageTitle')}</h1>
            <p className="page-hero__desc">{t('pageSubtitle')}</p>
          </div>
        </div>

        {/* Intro */}
        <StatementSection label={t('introLabel')} title={t('introTitle')}>
          <p className="statement__text">{t('intro1')}</p>
        </StatementSection>

        {/* Intro feature cards */}
        <div className="container rp-features-wrap">
          <div className="rp-features">
            {[
              { key: 'noLatex', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                  <path d="M4.93 4.93l14.14 14.14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )},
              { key: 'longerLife', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                  <path d="M8 12l3 3 5-6" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
              { key: 'thickness', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                  <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                </svg>
              )},
            ].map(({ key, icon }) => (
              <div key={key} className="rp-feature">
                <div className="rp-feature__header">
                  <div className="rp-feature__icon">{icon}</div>
                  <h3 className="rp-feature__title">{t(`introFeatures.${key}.title`)}</h3>
                </div>
                <p className="rp-feature__desc">{t(`introFeatures.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Pads — horizontal list */}
        <section className="section-alt">
          <div className="container">
            <div className="rp-section-header">
              <span className="label-uppercase">{t('whyPads.label')}</span>
              <h2 className="heading-display rp-section-title">{t('whyPads.title')}</h2>
              <hr className="divider-center" />
            </div>
            <div className="rp-benefits">
              {[
                { key: 'liquids', icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                )},
                { key: 'scratch', icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="var(--accent-primary)" strokeWidth="1.5"/>
                    <path d="M8 12l3 3 5-6" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
                { key: 'comfort', icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21v-6h6v6" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
                { key: 'noise', icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 20V10M18 20V4M6 20v-4" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
              ].map(({ key, icon }) => (
                <div key={key} className="rp-benefit">
                  <div className="rp-benefit__icon">{icon}</div>
                  <div className="rp-benefit__content">
                    <h3 className="rp-benefit__title">{t(`whyPads.${key}.title`)}</h3>
                    <p className="rp-benefit__desc">{t(`whyPads.${key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pets section */}
        <section className="rp-pets">
          <Image
            src="/images/rug-padding.webp"
            alt=""
            fill
            sizes="100vw"
            className="rp-pets__bg"
            loading="lazy"
          />
          <div className="rp-pets__overlay" />
          <div className="container">
            <div className="rp-pets__header">
              <span className="label-uppercase">{t('pets.label')}</span>
              <h2 className="heading-display rp-pets__title">{t('pets.title')}</h2>
              <hr className="divider-center" />
              <p className="rp-pets__desc">{t('pets.desc1')}</p>
            </div>
            <div className="rp-pets__cards">
              <div className="rp-pets__card">
                <div className="rp-feature__header">
                  <div className="rp-pets__card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21c-1.5 0-3-.5-4-1.5C6 17.5 6 15 8 13c1-1 2-3 2-5s1-4 2-4 2 2 2 4 1 4 2 5c2 2 2 4.5 0 6.5-1 1-2.5 1.5-4 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="6" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="18" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="8" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="16" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h3 className="rp-pets__card-title">{t('pets.challenge.title')}</h3>
                </div>
                <p className="rp-pets__card-text">{t('pets.challenge.desc')}</p>
              </div>
              <div className="rp-pets__card">
                <div className="rp-feature__header">
                  <div className="rp-pets__card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="rp-pets__card-title">{t('pets.solution.title')}</h3>
                </div>
                <p className="rp-pets__card-text">{t('pets.solution.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Benefits — feature cards */}
        <section className="section-alt">
          <div className="container">
            <div className="rp-section-header">
              <span className="label-uppercase">{t('otherBenefits.label')}</span>
              <h2 className="heading-display rp-section-title">{t('otherBenefits.title')}</h2>
              <hr className="divider-center" />
            </div>
            <div className="rp-features">
              {[
                { key: 'slippery', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21v-6h6v6" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
                { key: 'waterproof', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                )},
                { key: 'honeycomb', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l4 2.5v5L12 12 8 9.5v-5L12 2zM4 9.5l4 2.5v5L4 19.5v-5L4 9.5zM20 9.5l-4 2.5v5l4 2.5v-5l0-5z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                )},
                { key: 'natural', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22V8M12 8C12 8 7 2 3 5s4 9 9 3zM12 8c0 0 5-6 9-3s-4 9-9 3z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
              ].map(({ key, icon }) => (
                <div key={key} className="rp-feature">
                  <div className="rp-feature__header">
                    <div className="rp-feature__icon">{icon}</div>
                    <h3 className="rp-feature__title">{t(`otherBenefits.${key}.title`)}</h3>
                  </div>
                  <p className="rp-feature__desc">{t(`otherBenefits.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
      <Footer />
    </>
  );
}
