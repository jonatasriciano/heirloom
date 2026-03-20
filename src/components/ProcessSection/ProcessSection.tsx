'use client';

import { useTranslations } from 'next-intl';

const stepKeys = ['step1', 'step2', 'step3', 'step4'] as const;

export default function ProcessSection() {
  const t = useTranslations('process');

  return (
    <section className="section-alt" id="process">
      <div className="container">
        <div className="process__header">
          <span className="label-uppercase">{t('label')}</span>
          <h2 className="heading-display">{t('title')}</h2>
          <hr className="divider-center" style={{ marginTop: 'var(--space-4)' }} />
          <p className="process__subtitle">{t('subtitle')}</p>
        </div>

        <div className="process__steps">
          {stepKeys.map((key) => (
            <div key={key} className="process__step">
              <span className="process__number">{t(`steps.${key}.number`)}</span>
              <div className="process__step-content">
                <h3 className="process__step-title">{t(`steps.${key}.title`)}</h3>
                <p className="process__step-desc">{t(`steps.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process__header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-12);
        }
        .process__subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 560px;
          line-height: var(--line-height-relaxed);
        }
        .process__steps {
          display: grid;
          gap: var(--space-8);
          max-width: 900px;
          margin-inline: auto;
        }
        .process__step {
          display: flex;
          gap: var(--space-6);
          align-items: flex-start;
        }
        .process__number {
          font-family: var(--font-heading);
          font-size: var(--font-size-4xl);
          font-weight: 700;
          color: var(--accent-primary);
          line-height: 1;
          flex-shrink: 0;
          opacity: 0.6;
          min-width: 56px;
        }
        .process__step-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .process__step-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          color: var(--text-primary);
        }
        .process__step-desc {
          font-size: var(--font-size-base);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
        }
        @media (min-width: 768px) {
          .process__steps {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-10);
          }
          .process__number {
            font-size: var(--font-size-5xl);
          }
        }
      `}</style>
    </section>
  );
}
