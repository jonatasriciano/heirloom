'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import SocialIcon from '@/components/SocialIcon/SocialIcon';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const quickLinks = [
    { href: '/' as const, label: nav('home') },
    { href: '/area-rug-cleaning' as const, label: nav('cleaning') },
    { href: '/about-us' as const, label: nav('aboutUs') },
    { href: '/contact-us' as const, label: nav('aboutUsDropdown.contact') },
  ];

  const socialLinks = [
    { platform: 'facebook', href: 'https://www.facebook.com/pages/Heirloom-Oriental-Rug-Cleaning-Ltd/152247254864414', label: 'Facebook' },
    { platform: 'x', href: 'https://twitter.com/HeirloomCanada', label: 'X (Twitter)' },
    { platform: 'google', href: 'https://www.google.com/maps/place/Heirloom+Rug+Cleaning+Ltd./@50.9998663,-114.0500697,17z/data=!3m1!4b1!4m6!3m5!1s0x5371bb1555555555:0xb111fec8aa2489f2!8m2!3d50.9998663!4d-114.0500697!16s%2Fg%2F11b5wknz02', label: 'Google' },
    { platform: 'youtube', href: 'https://www.youtube.com/c/Arearugcleaning/videos', label: 'YouTube' },
    { platform: 'pinterest', href: 'https://www.pinterest.com/heirloomcalgary/', label: 'Pinterest' },
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
              <li><a href="tel:4037202230" className="footer__link">{t('phone')}</a></li>
              <li><a href="mailto:office@arearugcleaning.com" className="footer__link">{t('email')}</a></li>
              <li><span className="footer__link-text">{t('address')}</span></li>
            </ul>

            {/* Follow Us */}
            <div className="footer__social">
              <h4 className="footer__col-title">{t('followUs')}</h4>
              <div className="footer__social-icons">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="footer__social-link"
                    aria-label={link.label}
                  >
                    <SocialIcon platform={link.platform} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>


    </footer>
  );
}
