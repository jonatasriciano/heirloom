'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import './SanitizeSection.css';

export default function SanitizeSection() {
  const t = useTranslations('rugCleaningPage.sanitize');

  return (
    <section className="sanitize">
      {/* Background image */}
      <Image
        src="/images/servicesHomePage/automatic-machine-cleaning-rug.webp"
        alt=""
        fill
        sizes="100vw"
        className="sanitize__bg"
        loading="lazy"
      />
      <div className="sanitize__overlay" />

      <div className="container">
        {/* Header — centered */}
        <div className="sanitize__header">
          <h2 className="heading-display sanitize__title">{t('title')}</h2>
          <hr className="divider-center" />
          <p className="sanitize__desc">{t('desc')}</p>
        </div>

        {/* Reason cards — side by side */}
        <div className="sanitize__cards">
          <div className="sanitize__card">
            <div className="sanitize__card-header">
              <div className="sanitize__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21c-1.5 0-3-.5-4-1.5C6 17.5 6 15 8 13c1-1 2-3 2-5s1-4 2-4 2 2 2 4 1 4 2 5c2 2 2 4.5 0 6.5-1 1-2.5 1.5-4 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="18" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="8" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="16" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="sanitize__card-title">{t('reasons.petTitle')}</h3>
            </div>
            <p className="sanitize__card-text">{t('reasons.petDesc')}</p>
          </div>

          <div className="sanitize__card">
            <div className="sanitize__card-header">
              <div className="sanitize__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="sanitize__card-title">{t('reasons.moldTitle')}</h3>
            </div>
            <p className="sanitize__card-text">{t('reasons.moldDesc')}</p>
          </div>
        </div>

        {/* Closing */}
        <p className="sanitize__closing">{t('closing')}</p>
      </div>
    </section>
  );
}
