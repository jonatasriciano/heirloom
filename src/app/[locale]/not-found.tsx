'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Link } from '@/i18n/routing';
import './not-found.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <div className="container">
          <div className="not-found__grid">
            {/* Ornament column */}
            <div className="not-found__visual" aria-hidden="true">
              <div className="not-found__ornament-wrap">
                <svg viewBox="0 0 200 200" fill="none" className="not-found__ornament-svg">
                  {/* Outer border */}
                  <rect x="4" y="4" width="192" height="192" rx="4" stroke="var(--accent-primary)" strokeWidth="1" opacity="0.25" />
                  {/* Inner frames */}
                  <rect x="16" y="16" width="168" height="168" rx="3" stroke="var(--accent-primary)" strokeWidth="0.75" opacity="0.18" />
                  <rect x="28" y="28" width="144" height="144" rx="2" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.14" />
                  <rect x="40" y="40" width="120" height="120" rx="2" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.1" />
                  {/* Cross lines */}
                  <line x1="4" y1="100" x2="196" y2="100" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.1" />
                  <line x1="100" y1="4" x2="100" y2="196" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.1" />
                  {/* Diagonal accents */}
                  <line x1="4" y1="4" x2="196" y2="196" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.07" />
                  <line x1="196" y1="4" x2="4" y2="196" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.07" />
                  {/* Center medallion */}
                  <circle cx="100" cy="100" r="30" stroke="var(--accent-primary)" strokeWidth="0.75" opacity="0.15" />
                  <circle cx="100" cy="100" r="18" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
                  {/* Corner diamonds */}
                  <path d="M30 16 L36 22 L30 28 L24 22Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
                  <path d="M170 16 L176 22 L170 28 L164 22Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
                  <path d="M30 172 L36 178 L30 184 L24 178Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
                  <path d="M170 172 L176 178 L170 184 L164 178Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
                </svg>
                <span className="not-found__ornament-code">404</span>
              </div>
            </div>

            {/* Content column */}
            <div className="not-found__content">
              <span className="not-found__label">Lost in the Weave</span>
              <div className="not-found__divider" aria-hidden="true"></div>
              <h1 className="not-found__title">This Thread Leads Nowhere</h1>
              <p className="not-found__desc">
                Like a rare pattern yet to be woven, the page you seek doesn&apos;t exist.
                Let us guide you back to our collection.
              </p>
              <div className="not-found__actions">
                <Link href="/" className="btn btn-primary btn-lg">
                  Return to Home
                </Link>
                <Link href="/about-us/contact-us" className="btn btn-ghost btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
