'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PlaceholderPage({ title, description, breadcrumb }: PlaceholderPageProps) {
  const t = useTranslations('nav');

  return (
    <>
      <Header />
      <main className="placeholder-page">
        {/* Hero banner */}
        <div className="placeholder-page__hero">
          <div className="container">
            <nav className="placeholder-page__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="placeholder-page__breadcrumb-link">
                {t('home')}
              </Link>
              {breadcrumb?.map((item) => (
                <span key={item.href} className="placeholder-page__breadcrumb-item">
                  <span className="placeholder-page__breadcrumb-sep" aria-hidden="true">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <Link href={item.href as '/'} className="placeholder-page__breadcrumb-link">
                    {item.label}
                  </Link>
                </span>
              ))}
              <span className="placeholder-page__breadcrumb-item">
                <span className="placeholder-page__breadcrumb-sep" aria-hidden="true">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="placeholder-page__breadcrumb-current">{title}</span>
              </span>
            </nav>
            <h1 className="placeholder-page__title">{title}</h1>
            {description && <p className="placeholder-page__desc">{description}</p>}
          </div>
        </div>

        {/* Content area */}
        <div className="placeholder-page__body">
          <div className="container">
            <div className="placeholder-page__card">
              <div className="placeholder-page__icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 16H44" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="15" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="20" cy="12" r="1.5" fill="currentColor"/>
                  <path d="M16 28H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 33H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="placeholder-page__card-title">Page Under Construction</h2>
              <p className="placeholder-page__card-text">
                We&apos;re working on bringing you detailed content for this page. Check back soon.
              </p>
              <Link href="/" className="placeholder-page__back-link">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
