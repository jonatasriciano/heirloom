'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import CTASection from '@/components/CTASection/CTASection';
import StatementSection from '@/components/StatementSection/StatementSection';
import './about-us.css';

export default function AboutUsPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('aboutUsPage');
  const tAbout = useTranslations('aboutSection');

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
                <span className="page-hero__breadcrumb-current">{tNav('aboutUs')}</span>
              </span>
            </nav>
            <h1 className="page-hero__title">{t('pageTitle')}</h1>
            <p className="page-hero__desc">{t('pageSubtitle')}</p>
          </div>
        </div>

        <StatementSection label={t('storyLabel')} title={tAbout('title')}>
          <p className="statement__text">{t('introDesc1')}</p>
          <p className="statement__text">{t('introDesc2')}</p>
        </StatementSection>

        {/* Team */}
        <section className="section-alt">
          <div className="container">
            <div className="about-team">
              <div className="about-team__header">
                <span className="label-uppercase">{t('teamLabel')}</span>
                <h2 className="heading-display about-team__title">{t('teamTitle')}</h2>
                <hr className="divider-center" />
              </div>
              <div className="about-team__grid">
                {['greg', 'gabriel', 'brock'].map((member) => (
                  <div key={member} className="about-team__card">
                    <h3 className="about-team__name">{t(`team.${member}.name`)}</h3>
                    <p className="about-team__role">{t(`team.${member}.role`)}</p>
                    <p className="about-team__bio">{t(`team.${member}.bio1`)}</p>
                    <p className="about-team__bio">{t(`team.${member}.bio2`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <ImageTextSection
          imageSrc="/images/commitment.webp"
          imageAlt={t('commitmentTitle')}
          title={t('commitmentTitle')}
          description={t('commitmentDesc')}
          imageOnLeft={true}
        />

        {/* Industry Leadership */}
        <ImageTextSection
          imageSrc="/images/centrum-force-synergy-system..webp"
          imageAlt={t('leadershipTitle')}
          title={t('leadershipTitle')}
          description={t('leadershipDesc1')}
          description2={t('leadershipDesc2')}
          imageOnLeft={false}
          variant="alt"
        />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
