'use client';

import { useTranslations } from 'next-intl';

export default function TrustSection() {
  const t = useTranslations('trust');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ];

  return (
    <section className="section-alt">
      <div className="container">
        <div className="trust">
          <div className="trust__text">
            <span className="label-uppercase">{t('label')}</span>
            <h2 className="heading-display trust__title">{t('title')}</h2>
            <hr className="divider" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)' }} />
            <p className="trust__desc">{t('description')}</p>
          </div>
          <div className="trust__stats">
            {stats.map((stat, i) => (
              <div key={i} className="trust__stat">
                <span className="trust__stat-value">{stat.value}</span>
                <span className="trust__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust {
          display: grid;
          gap: var(--space-12);
        }
        .trust__text {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .trust__title {
          color: var(--text-primary);
        }
        .trust__desc {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          max-width: 560px;
        }
        .trust__stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .trust__stat {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        .trust__stat-value {
          font-family: var(--font-heading);
          font-size: var(--font-size-4xl);
          font-weight: 700;
          color: var(--accent-primary);
          line-height: 1;
        }
        .trust__stat-label {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          letter-spacing: var(--letter-spacing-wide);
        }
        @media (min-width: 768px) {
          .trust {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
          .trust__stats {
            gap: var(--space-8);
          }
          .trust__stat-value {
            font-size: var(--font-size-5xl);
          }
        }
      `}</style>
    </section>
  );
}
