'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import ContactForm from '@/components/ContactForm/ContactForm';
import HoursLocation from '@/components/HoursLocation/HoursLocation';
import ServiceAreas from '@/components/ServiceAreas/ServiceAreas';

export default function ContactUsPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('contactForm');

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
                <Link href="/about-us" className="placeholder-page__breadcrumb-link">
                  {tNav('aboutUs')}
                </Link>
              </span>
              <span className="placeholder-page__breadcrumb-item">
                <span className="placeholder-page__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="placeholder-page__breadcrumb-current">{tNav('aboutUsDropdown.contact')}</span>
              </span>
            </nav>
            <h1 className="placeholder-page__title">{t('pageTitle')}</h1>
            <p className="placeholder-page__desc">{t('pageDescription')}</p>
          </div>
        </div>

        {/* Form + Hours & Location */}
        <div className="section">
          <div className="container">
            <div className="contact-grid">
              <HoursLocation />
              <ContactForm />
            </div>
          </div>
        </div>

        <ServiceAreas alt />
      </main>
      <Footer />
    </>
  );
}
