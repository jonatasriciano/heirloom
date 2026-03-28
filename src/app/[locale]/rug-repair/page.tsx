'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import StatementSection from '@/components/StatementSection/StatementSection';
import CTASection from '@/components/CTASection/CTASection';
import './rug-repair.css';

export default function RugRepairPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('rugRepairPage');

  return (
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
          <p className="statement__text">{t('intro2')}</p>
        </StatementSection>

        {/* Repair types — dark bg */}
        <section className="rr-types">
          <Image
            src="/images/rug-repair.webp"
            alt=""
            fill
            sizes="100vw"
            className="rr-types__bg"
            loading="lazy"
          />
          <div className="rr-types__overlay" />
          <div className="container">
            <div className="rr-types__header">
              <span className="label-uppercase">{t('types.label')}</span>
              <h2 className="heading-display rr-types__title">{t('types.title')}</h2>
              <hr className="divider-center" />
              <p className="rr-types__desc">{t('types.desc')}</p>
            </div>
            <div className="rr-types__grid">
              {['fringe', 'serging', 'patching', 'backing', 'colour', 'deepClean'].map((key) => (
                <div key={key} className="rr-types__card">
                  <h3 className="rr-types__card-name">{t(`repairCards.${key}.title`)}</h3>
                  <p className="rr-types__card-desc">{t(`repairCards.${key}.desc`)}</p>
                </div>
              ))}
            </div>
            <p className="rr-types__closing">{t('types.closing')}</p>
          </div>
        </section>

        {/* Detailed repair sections — accordion */}
        <section className="section">
          <div className="container">
            <div className="rr-section-header">
              <span className="label-uppercase">{t('detailsLabel')}</span>
              <h2 className="heading-display rr-section-title">{t('detailsTitle')}</h2>
              <hr className="divider-center" />
            </div>
            <div className="rr-accordion">
              {[
                { key: 'fringe', img: '/images/rug-repair-fringe-repairs.webp' },
                { key: 'serging', img: '/images/rug-repair-serging-and-binding.webp' },
                { key: 'patching', img: '/images/rug-repair-patching-and-reweaving.webp' },
                { key: 'backing', img: '/images/rug-repair-backing-repair.webp' },
              ].map(({ key, img }) => (
                <details key={key} className="rr-accordion__item">
                  <summary className="rr-accordion__trigger">
                    <span className="rr-accordion__trigger-text">{t(`details.${key}.title`)}</span>
                    <svg className="rr-accordion__chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="rr-accordion__content">
                    <div className="rr-accordion__image-wrap">
                      <Image src={img} alt={t(`details.${key}.title`)} fill sizes="(max-width: 768px) 100vw, 320px" className="rr-accordion__image" loading="lazy" />
                    </div>
                    <div className="rr-accordion__text">
                      <p>{t(`details.${key}.desc1`)}</p>
                      <p>{t(`details.${key}.desc2`)}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* When to replace backing */}
        <section className="section-alt">
          <div className="container">
            <div className="rr-section-header">
              <span className="label-uppercase">{t('backingReplace.label')}</span>
              <h2 className="heading-display rr-section-title">{t('backingReplace.title')}</h2>
              <hr className="divider-center" />
              <p className="rr-section-desc">{t('backingReplace.desc')}</p>
            </div>
            <div className="rr-tests">
              <div className="rr-test">
                <div className="rr-test__header">
                  <div className="rr-test__num">1</div>
                  <h3 className="rr-test__title">{t('backingReplace.test1.title')}</h3>
                </div>
                <p className="rr-test__desc">{t('backingReplace.test1.desc')}</p>
              </div>
              <div className="rr-test">
                <div className="rr-test__header">
                  <div className="rr-test__num">2</div>
                  <h3 className="rr-test__title">{t('backingReplace.test2.title')}</h3>
                </div>
                <p className="rr-test__desc">{t('backingReplace.test2.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
  );
}
