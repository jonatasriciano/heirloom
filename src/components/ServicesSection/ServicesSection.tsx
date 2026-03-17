'use client';

import { useTranslations } from 'next-intl';

const serviceKeys = ['cleaning', 'repair', 'stain', 'protection', 'appraisal', 'pickup'] as const;

export default function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section className="section">
      <div className="container">
        <div className="services__header">
          <span className="label-uppercase">{t('label')}</span>
          <h2 className="heading-display">{t('title')}</h2>
          <hr className="divider-center" style={{ marginTop: 'var(--space-4)' }} />
          <p className="services__subtitle">{t('subtitle')}</p>
        </div>

        <div className="services__grid">
          {serviceKeys.map((key) => (
            <div key={key} className="card hover-lift">
              <h3 className="services__card-title">{t(`items.${key}.title`)}</h3>
              <p className="services__card-desc">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services__header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-12);
        }
        .services__subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          line-height: var(--line-height-relaxed);
        }
        .services__grid {
          display: grid;
          gap: var(--space-6);
        }
        .services__card-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          margin-bottom: var(--space-3);
          color: var(--text-primary);
        }
        .services__card-desc {
          font-size: var(--font-size-base);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
        }
        @media (min-width: 768px) {
          .services__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .services__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
