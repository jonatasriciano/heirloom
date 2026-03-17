'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const quickLinks = [
    { href: '/' as const, label: nav('home') },
    { href: '/services' as const, label: nav('cleaning') },
    { href: '/about' as const, label: nav('aboutUs') },
    { href: '/contact' as const, label: nav('aboutUsDropdown.contact') },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="mb-4">
              <Image
                src="/images/heirloom-logo-hd.webp"
                alt="Heirloom® Rug Cleaning"
                width={300}
                height={90}
                className="h-[120px] w-auto rounded-[var(--radius-lg)]"
              />
            </div>
            <p className="footer__desc">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">{t('quickLinks')}</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">{t('contactTitle')}</h4>
            <ul className="footer__links">
              <li><a href="tel:4034510545" className="footer__link">{t('phone')}</a></li>
              <li><a href="mailto:info@arearugcleaning.com" className="footer__link">{t('email')}</a></li>
              <li><span className="footer__link-text">{t('address')}</span></li>
              <li><span className="footer__link-text">{t('hours')}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--bg-dark);
          color: var(--text-on-dark);
          padding-top: var(--space-16);
          padding-bottom: var(--space-8);
        }
        .footer__grid {
          display: grid;
          gap: var(--space-10);
          margin-bottom: var(--space-12);
        }
        .footer__logo {
          font-family: var(--font-heading);
          font-size: var(--font-size-2xl);
          font-weight: 700;
          display: block;
          margin-bottom: var(--space-4);
        }
        .footer__logo-accent {
          color: var(--accent-primary);
          font-size: 0.65em;
          vertical-align: super;
        }
        .footer__desc {
          font-size: var(--font-size-sm);
          color: rgba(247, 243, 238, 0.6);
          line-height: var(--line-height-relaxed);
          max-width: 360px;
        }
        .footer__col-title {
          font-family: var(--font-body);
          font-size: var(--font-size-sm);
          font-weight: 600;
          letter-spacing: var(--letter-spacing-wider);
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: var(--space-4);
        }
        .footer__links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .footer__link {
          font-size: var(--font-size-sm);
          color: rgba(247, 243, 238, 0.6);
          transition: color var(--transition-fast);
        }
        .footer__link:hover {
          color: var(--accent-primary);
        }
        .footer__link-text {
          font-size: var(--font-size-sm);
          color: rgba(247, 243, 238, 0.6);
        }
        .footer__bottom {
          border-top: 1px solid rgba(247, 243, 238, 0.1);
          padding-top: var(--space-6);
        }
        .footer__copyright {
          font-size: var(--font-size-xs);
          color: rgba(247, 243, 238, 0.4);
          text-align: center;
        }
        @media (min-width: 768px) {
          .footer__grid {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
