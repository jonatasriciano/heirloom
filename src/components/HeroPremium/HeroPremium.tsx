'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HeroPremium() {
  const t = useTranslations('hero');

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="label-uppercase">{t('label')}</span>
          <h1 className="hero__title heading-display">{t('title')}</h1>
          <p className="hero__subtitle">{t('subtitle')}</p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              {t('cta')}
            </Link>
            <a href="tel:5878575553" className="btn btn-secondary btn-lg">
              {t('secondaryCta')}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 80%;
          height: 200%;
          background: radial-gradient(ellipse, rgba(var(--accent-rgb), 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero__content {
          max-width: 720px;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          padding-block: var(--space-8);
          position: relative;
          z-index: 1;
        }
        .hero__title {
          color: var(--text-primary);
        }
        .hero__subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          max-width: 600px;
        }
        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          padding-top: var(--space-2);
        }
        @media (min-width: 768px) {
          .hero__content {
            padding-block: var(--space-16);
          }
          .hero__subtitle {
            font-size: var(--font-size-xl);
          }
        }
      `}</style>
    </section>
  );
}
