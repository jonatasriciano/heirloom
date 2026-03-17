'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="cta-section section-dark">
      <div className="container">
        <div className="cta__content">
          <h2 className="heading-display cta__title">{t('title')}</h2>
          <p className="cta__subtitle">{t('subtitle')}</p>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              {t('primary')}
            </Link>
            <a href="tel:4034510545" className="btn cta__btn-outline btn-lg">
              {t('secondary')}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          text-align: center;
        }
        .cta__content {
          max-width: 700px;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
        }
        .cta__title {
          color: var(--text-on-dark);
        }
        .cta__subtitle {
          font-size: var(--font-size-lg);
          color: rgba(247, 243, 238, 0.75);
          line-height: var(--line-height-relaxed);
        }
        .cta__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-4);
          padding-top: var(--space-2);
        }
        .cta__btn-outline {
          background-color: transparent;
          color: var(--text-on-dark);
          border: 1px solid rgba(247, 243, 238, 0.3);
        }
        .cta__btn-outline:hover {
          background-color: rgba(247, 243, 238, 0.1);
          border-color: rgba(247, 243, 238, 0.5);
        }
      `}</style>
    </section>
  );
}
