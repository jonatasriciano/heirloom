'use client';

import { useTranslations } from 'next-intl';
import './HoursLocation.css';

const DAY_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'holidays'] as const;

export default function HoursLocation() {
  const t = useTranslations('hoursLocation');

  return (
    <div className="hours-loc">
      {/* Locations */}
      <div className="hours-loc__section">
        <h2 className="hours-loc__title">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--accent-primary)" className="hours-loc__icon">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {t('locationsTitle')}
        </h2>
        <p className="hours-loc__desc">{t('locationsDesc')}</p>

        <div className="hours-loc__cards">
          <div className="hours-loc__card">
            <span className="hours-loc__card-label">{t('calgaryLabel')}</span>
            <span className="hours-loc__card-address">{t('calgaryAddress')}</span>
          </div>
          <div className="hours-loc__card">
            <span className="hours-loc__card-label">{t('diamondLabel')}</span>
            <span className="hours-loc__card-address">{t('diamondAddress')}</span>
            <span className="hours-loc__card-note">{t('diamondNote')}</span>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="hours-loc__section">
        <h2 className="hours-loc__title">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="hours-loc__icon">
            <circle cx="10" cy="10" r="8.5" stroke="var(--accent-primary)" strokeWidth="1.5"/>
            <path d="M10 5.5V10l3 2" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('hoursTitle')}
        </h2>
        <div className="hours-loc__table">
          {DAY_KEYS.map((dayKey) => {
            const hours = t(`hours.${dayKey}`);
            const isClosed = hours === t('closed');
            return (
              <div key={dayKey} className={`hours-loc__row ${isClosed ? 'hours-loc__row--closed' : ''}`}>
                <span className="hours-loc__day">{t(`days.${dayKey}`)}</span>
                <span className="hours-loc__time">{hours}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
