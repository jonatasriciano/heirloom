'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const SERVICE_AREAS = [
  'Airdrie',
  'Black Diamond',
  'Bragg Creek',
  'Calgary',
  'Canmore',
  'Cochrane',
  'Lake Louise',
  'Millarville',
  'Okotoks',
  'Priddis',
  'Strathmore',
  'Turner Valley',
];

export default function ServiceAreas() {
  const t = useTranslations('serviceAreas');
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="service-areas section">
      <div className="container">
        <div className="service-areas__grid">
          {/* Map Column */}
          <div className="service-areas__map" ref={mapRef}>
            {(isLoading || !shouldLoad) && (
              <div className="service-areas__map-loading">
                <svg className="service-areas__spinner" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="var(--accent-primary)" strokeOpacity="0.2" strokeWidth="3" />
                  <path d="M20 4a16 16 0 0 1 16 16" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span>{t('loadingMap')}</span>
              </div>
            )}
            {shouldLoad && (
              <iframe
                loading="lazy"
                title="Google Maps - Alberta, Canada"
                src="https://www.google.com/maps?q=Alberta,+Canada&z=4&output=embed"
                className="service-areas__iframe"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>

          {/* Areas Column */}
          <div className="service-areas__content">
            <span className="label-uppercase">{t('label')}</span>
            <h2 className="service-areas__title">{t('title')}</h2>
            <p className="service-areas__desc">{t('description')}</p>
            <div className="service-areas__list">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="service-areas__item">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="var(--accent-primary)" className="service-areas__pin">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="service-areas__note">
              {t('note')}{' '}
              <Link href="/about-us/contact-us" className="service-areas__note-link">{t('noteLink')}</Link>
              {' '}{t('noteSuffix')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
