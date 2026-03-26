'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CTASection from '@/components/CTASection/CTASection';
import { Link } from '@/i18n/routing';
import CleaningCostCalculator from '@/components/CleaningCostCalculator/CleaningCostCalculator';

export default function CalculateCleaningCostPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('calculator');

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="page-hero__hero">
          <div className="container">
            <nav className="page-hero__breadcrumb" aria-label={tNav('breadcrumb')}>
              <Link href="/" className="page-hero__breadcrumb-link">
                {tNav('home')}
              </Link>
              <span className="page-hero__breadcrumb-item">
                <span className="page-hero__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="page-hero__breadcrumb-current">{tNav('calculateCost')}</span>
              </span>
            </nav>
            <h1 className="page-hero__title">{t('pageTitle')}</h1>
            <p className="page-hero__desc">{t('pageDescription')}</p>
          </div>
        </div>

        {/* Calculator */}
        <div className="section">
          <div className="container">
            <CleaningCostCalculator />
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
