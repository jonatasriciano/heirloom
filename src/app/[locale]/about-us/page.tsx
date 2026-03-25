'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import CTASection from '@/components/CTASection/CTASection';
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
                <span className="placeholder-page__breadcrumb-current">{tNav('aboutUs')}</span>
              </span>
            </nav>
            <h1 className="placeholder-page__title">{t('pageTitle')}</h1>
            <p className="placeholder-page__desc">{t('pageSubtitle')}</p>
          </div>
        </div>

        {/* Our Story — editorial statement */}
        <section className="section about-statement-section">
          {/* Left ornament */}
          <div className="about-statement__ornament about-statement__ornament--left" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="var(--accent-primary)" strokeWidth="0.6" opacity="0.15" />
              <circle cx="100" cy="100" r="70" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
              <circle cx="100" cy="100" r="50" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
              <circle cx="100" cy="100" r="30" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.08" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
              <line x1="30" y1="30" x2="170" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
              <line x1="170" y1="30" x2="30" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
              <path d="M100 10 L106 20 L100 30 L94 20Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
              <path d="M100 170 L106 180 L100 190 L94 180Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
              <path d="M10 100 L20 94 L30 100 L20 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
              <path d="M170 100 L180 94 L190 100 L180 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
            </svg>
          </div>
          {/* Right ornament */}
          <div className="about-statement__ornament about-statement__ornament--right" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="var(--accent-primary)" strokeWidth="0.6" opacity="0.15" />
              <circle cx="100" cy="100" r="70" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
              <circle cx="100" cy="100" r="50" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
              <circle cx="100" cy="100" r="30" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.08" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
              <line x1="30" y1="30" x2="170" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
              <line x1="170" y1="30" x2="30" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
              <path d="M100 10 L106 20 L100 30 L94 20Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
              <path d="M100 170 L106 180 L100 190 L94 180Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
              <path d="M10 100 L20 94 L30 100 L20 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
              <path d="M170 100 L180 94 L190 100 L180 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
            </svg>
          </div>
          <div className="container">
            <div className="about-statement">
              <span className="label-uppercase">{t('storyLabel')}</span>
              <h2 className="heading-display about-statement__title">{tAbout('title')}</h2>
              <hr className="divider-center" />
              <p className="about-statement__text">{t('introDesc1')}</p>
              <p className="about-statement__text">{t('introDesc2')}</p>
            </div>
          </div>
        </section>

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
