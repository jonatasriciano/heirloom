'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import StatementSection from '@/components/StatementSection/StatementSection';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import CTASection from '@/components/CTASection/CTASection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import './carpet-dyeing.css';

export default function CarpetDyeingPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('bleachSpotPage');

  return (
    <>
      <Header />
      <main>
        <div className="page-hero__hero">
          <div className="container">
            <nav className="page-hero__breadcrumb" aria-label={tNav('breadcrumb')}>
              <Link href="/" className="page-hero__breadcrumb-link">{tNav('home')}</Link>
              <span className="page-hero__breadcrumb-item">
                <span className="page-hero__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="page-hero__breadcrumb-current">{tNav('carpetDyeing')}</span>
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

        {/* Why dyeing over replacement */}
        <section className="section-alt">
          <div className="container">
            <div className="bsr-dyeing-grid">
              <div className="bsr-dyeing-content">
                <h2 className="heading-display" style={{ marginBottom: 'var(--space-3)' }}>{t('whyDyeing.title')}</h2>
                <hr className="divider" />
                <p className="bsr-dyeing-text">{t('whyDyeing.desc')}</p>
                <p className="bsr-dyeing-closing">{t('whyDyeing.closing')}</p>
              </div>
              <BeforeAfterSlider
                beforeImage="/images/carpet-before.webp"
                afterImage="/images/carpet-after.webp"
                beforeLabel={t('whyDyeing.before')}
                afterLabel={t('whyDyeing.after')}
              />
            </div>
          </div>
        </section>

        {/* DIY warning */}
        <ImageTextSection
          imageSrc="/images/carpet-on-floor.webp"
          imageAlt={t('diy.title')}
          title={t('diy.title')}
          description={t('diy.desc1')}
          description2={t('diy.desc2')}
          imageOnLeft={true}
        />

        {/* Overdyeing */}
        <section className="bsr-overdye-section">
          <Image
            src="/images/carpet-color-repairing.webp"
            alt=""
            fill
            sizes="100vw"
            className="bsr-overdye-section__bg"
            loading="lazy"
          />
          <div className="bsr-overdye-section__overlay" />
          <div className="container">
            <div className="bsr-overdye">
              <span className="label-uppercase">{t('overdye.label')}</span>
              <h2 className="heading-display bsr-overdye__title">{t('overdye.title')}</h2>
              <hr className="divider-center" />
              <p className="bsr-overdye__text">{t('overdye.desc1')}</p>
            </div>
            <div className="bsr-overdye__cards">
              <div className="bsr-overdye__card">
                <div className="bsr-overdye__card-header">
                  <div className="bsr-overdye__card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="bsr-overdye__card-title">{t('overdye.costTitle')}</h3>
                </div>
                <p className="bsr-overdye__card-desc">{t('overdye.desc2')}</p>
              </div>
              <div className="bsr-overdye__card">
                <div className="bsr-overdye__card-header">
                  <div className="bsr-overdye__card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22V8M12 8C12 8 7 2 3 5s4 9 9 3zM12 8c0 0 5-6 9-3s-4 9-9 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="bsr-overdye__card-title">{t('overdye.ecoTitle')}</h3>
                </div>
                <p className="bsr-overdye__card-desc">{t('overdye.desc3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <span className="label-uppercase">{t('services.label')}</span>
              <h2 className="heading-display" style={{ marginBottom: 'var(--space-3)' }}>{t('services.title')}</h2>
              <hr className="divider-center" />
            </div>
            <div className="bsr-services">
              {[
                { key: 'restoration', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round"/></svg> },
                { key: 'colourRepair', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="1.5"/><path d="M12 6v6l4 2" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { key: 'bleachSpot', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
                { key: 'recolouring', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              ].map(({ key, icon }) => (
                <div key={key} className="bsr-service">
                  <div className="bsr-service__header">
                    <div className="bsr-service__icon">{icon}</div>
                    <h3 className="bsr-service__title">{t(`services.${key}.title`)}</h3>
                  </div>
                  <p className="bsr-service__desc">{t(`services.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
