'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

interface DropdownItem {
  label: string;
  href: string;
  children?: DropdownItem[];
}

interface NavItem {
  key: string;
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerTopRef = useRef<HTMLDivElement>(null);
  const [hideOffset, setHideOffset] = useState(0);

  // Measure the height of promo + top section to know how much to slide up
  useEffect(() => {
    const measure = () => {
      if (headerTopRef.current) {
        setHideOffset(headerTopRef.current.offsetTop + headerTopRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Only apply on desktop (1024+)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      const header = document.querySelector('.header') as HTMLElement;
      if (!header || !hideOffset) return;
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY, hideOffset);
      header.style.transform = `translateY(-${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hideOffset]);

  const navItems: NavItem[] = [
    { key: 'home', label: t('home'), href: '/' },
    {
      key: 'cleaning', label: t('cleaning'), href: '/area-rug-cleaning',
      dropdown: [
        { label: t('cleaningDropdown.process'), href: '/area-rug-cleaning/rug-cleaning-process', children: [
          { label: t('cleaningDropdown.inspection'), href: '/area-rug-cleaning/rug-cleaning-process/rug-inspection' },
          { label: t('cleaningDropdown.pickup'), href: '/area-rug-cleaning/rug-cleaning-process/pickup' },
          { label: t('cleaningDropdown.dusting'), href: '/area-rug-cleaning/rug-cleaning-process/dusting' },
          { label: t('cleaningDropdown.washRinse'), href: '/area-rug-cleaning/rug-cleaning-process/clean-wash-and-rinse' },
          { label: t('cleaningDropdown.drying'), href: '/area-rug-cleaning/rug-cleaning-process/drying' },
          { label: t('cleaningDropdown.vacuumInspection'), href: '/area-rug-cleaning/rug-cleaning-process/vacuuming-and-final-inspection' },
          { label: t('cleaningDropdown.fiberProtectorPads'), href: '/area-rug-cleaning/rug-cleaning-process/fiber-protector-and-pads' },
          { label: t('cleaningDropdown.delivery'), href: '/area-rug-cleaning/rug-cleaning-process/delivery' },
        ]},
        { label: t('cleaningDropdown.methods'), href: '/area-rug-cleaning/rug-cleaning-methods', children: [
          { label: t('cleaningDropdown.wetCleaning'), href: '/area-rug-cleaning/rug-cleaning-methods/wet-cleaning' },
          { label: t('cleaningDropdown.hotWater'), href: '/area-rug-cleaning/rug-cleaning-methods/hot-water-extraction' },
          { label: t('cleaningDropdown.deepCleaning'), href: '/area-rug-cleaning/rug-cleaning-methods/deep-cleaning' },
        ]},
        { label: t('cleaningDropdown.stainRemoval'), href: '/area-rug-cleaning/stain-removal', children: [
          { label: t('cleaningDropdown.oldStain'), href: '/area-rug-cleaning/stain-removal/old' },
        ]},
        { label: t('cleaningDropdown.maintenance'), href: '/area-rug-cleaning/maintenance' },
        { label: t('cleaningDropdown.articles'), href: '/area-rug-cleaning/articles' },
        { label: t('cleaningDropdown.videos'), href: '/area-rug-cleaning/rug-washing-videos' },
      ],
    },
    {
      key: 'rugTypes', label: t('rugTypes'), href: '/types-of-rugs-we-clean',
      dropdown: [
        { label: t('rugTypesDropdown.oriental'), href: '/types-of-rugs-we-clean/oriental-rugs' },
        { label: t('rugTypesDropdown.persian'), href: '/types-of-rugs-we-clean/antique-persian-area-rugs' },
        { label: t('rugTypesDropdown.silk'), href: '/types-of-rugs-we-clean/silk-rugs' },
        { label: t('rugTypesDropdown.turkish'), href: '/types-of-rugs-we-clean/turkish-rugs' },
        { label: t('rugTypesDropdown.antique'), href: '/types-of-rugs-we-clean/antique-area-rugs' },
        { label: t('rugTypesDropdown.other'), href: '/types-of-rugs-we-clean/other-types-we-clean' },
      ],
    },
    {
      key: 'repair', label: t('repair'), href: '/rug-repair',
      dropdown: [
        { label: t('repairDropdown.fringe'), href: '/rug-repair/fringe-repair' },
        { label: t('repairDropdown.colorDyeing'), href: '/rug-repair/color-correction-and-dyeing' },
        { label: t('repairDropdown.backing'), href: '/rug-repair/backing-repair' },
        { label: t('repairDropdown.blotSpills'), href: '/rug-repair/blot-spills' },
        { label: t('repairDropdown.patching'), href: '/rug-repair/rug-patching' },
        { label: t('repairDropdown.fireWater'), href: '/rug-repair/fire-and-water-damaged-rugs', children: [
          { label: t('repairDropdown.smokeOdor'), href: '/rug-repair/fire-and-water-damaged-rugs/smoke-odor-removal' },
        ]},
        { label: t('repairDropdown.holeRepair'), href: '/rug-repair/rug-hole-repair' },
        { label: t('repairDropdown.articles'), href: '/rug-repair/article' },
      ],
    },
    {
      key: 'underlays', label: t('underlays'), href: '/rug-padding',
      dropdown: [
        { label: t('underlaysDropdown.petBarrier'), href: '/rug-padding/pet-barrier' },
        { label: t('underlaysDropdown.types'), href: '/rug-padding/types', children: [
          { label: t('underlaysDropdown.slipperyFloor'), href: '/rug-padding/types/slippery-floor' },
          { label: t('underlaysDropdown.waterproof'), href: '/rug-padding/types/waterproof-rug-pads' },
        ]},
        { label: t('underlaysDropdown.floorType'), href: '/rug-padding/floor-type', children: [
          { label: t('underlaysDropdown.laminate'), href: '/rug-padding/floor-type/laminate' },
        ]},
        { label: t('underlaysDropdown.features'), href: '/rug-padding/features', children: [
          { label: t('underlaysDropdown.nonSlip'), href: '/rug-padding/features/non-slip' },
          { label: t('underlaysDropdown.naturalMaterial'), href: '/rug-padding/features/natural-material' },
        ]},
        { label: t('underlaysDropdown.material'), href: '/rug-padding/material' },
        { label: t('underlaysDropdown.replacement'), href: '/rug-padding/replacement' },
      ],
    },
    {
      key: 'rugProtection', label: t('rugProtection'), href: '/rug-protection',
      dropdown: [
        { label: t('rugProtectionDropdown.protectorRepellent'), href: '/rug-protection/protector-and-stain-repellant' },
      ],
    },
    {
      key: 'pets', label: t('pets'), href: '/pets',
      dropdown: [
        { label: t('petsDropdown.odors'), href: '/pets/pet-urine-and-odour-removal' },
        { label: t('petsDropdown.stainRemoval'), href: '/pets/pet-stain-removal' },
        { label: t('petsDropdown.pads'), href: '/pets/pads' },
        { label: t('petsDropdown.articles'), href: '/pets/articles' },
      ],
    },
    {
      key: 'carpetDyeing', label: t('carpetDyeing'), href: '/carpet-dyeing',
      dropdown: [
        { label: t('carpetDyeingDropdown.restoration'), href: '/carpet-dyeing/carpet-restoration' },
        { label: t('carpetDyeingDropdown.colorRepair'), href: '/carpet-dyeing/color-repair' },
        { label: t('carpetDyeingDropdown.bleachSpot'), href: '/carpet-dyeing/bleach-spot-repair' },
      ],
    },
    {
      key: 'aboutUs', label: t('aboutUs'), href: '/about-us',
      dropdown: [
        { label: t('aboutUsDropdown.awards'), href: '/about-us/awards-and-affiliations' },
        { label: t('aboutUsDropdown.team'), href: '/about-us/meet-the-team' },
        { label: t('aboutUsDropdown.faq'), href: '/about-us/frequently-asked-questions' },
        { label: t('aboutUsDropdown.jobs'), href: '/about-us/jobs' },
        { label: t('aboutUsDropdown.reviews'), href: '/about-us/reviews' },
        { label: t('aboutUsDropdown.shipping'), href: '/about-us/shipping' },
        { label: t('aboutUsDropdown.contact'), href: '/about-us/contact-us' },
      ],
    },
  ];

  const handleMouseEnter = useCallback((key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  const toggleMobileDropdown = useCallback((key: string) => {
    setMobileDropdown(prev => prev === key ? null : key);
  }, []);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <header className="header">
      {/* Promo bar */}
      <div className="header__promo">
        <Link href="/rug-padding" className="header__promo-link">
          <span>{t('promoLine1')}</span>
          <span className="header__promo-dot" aria-hidden="true">•</span>
          <span>{t('promoLine2')}</span>
        </Link>
      </div>

      <div className="container">
        {/* Top row: logo + CTA */}
        <div className="header__top" ref={headerTopRef}>
          <Link href="/" className="header__logo">
            <Image
              src="/images/heirloom-logo-transparent.webp"
              alt="Heirloom® Rug Cleaning"
              width={400}
              height={120}
              priority
              className="h-[72px] md:h-[96px] lg:h-[120px] w-auto"
            />
          </Link>
          <div className="header__top-actions">
            <Link href="/calculate-cleaning-cost" className="btn btn-accent">{t('calculateCost')}</Link>
            <div className="header__top-actions-row">
              <a href="tel:4037202230" className="btn btn-ghost">{t('call')}</a>
              <Link href="/about-us/contact-us" className="btn btn-primary">{t('getQuote')}</Link>
            </div>
          </div>
          {/* Mobile Toggle */}
          <button
            className="header__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`header__toggle-bar ${isOpen ? 'open1' : ''}`} />
            <span className={`header__toggle-bar ${isOpen ? 'open2' : ''}`} />
            <span className={`header__toggle-bar ${isOpen ? 'open3' : ''}`} />
          </button>
        </div>
      </div>

      {/* Desktop nav row — full width */}
      <nav className="header__nav-row">
        <ul className="header__nav-list">
          {navItems.map((item, index) => (
            <li
              key={item.key}
              className="header__nav-item"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
                {index > 0 && <span className="header__divider" aria-hidden="true" />}
                <Link href={item.href as '/'} className="header__nav-link">
                  {item.label}
                  {item.dropdown && (
                    <svg className="header__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>
                {item.dropdown && openDropdown === item.key && (
                  <div className="header__dropdown">
                    {item.dropdown.map((sub) => (
                      <div
                        key={sub.href}
                        className="header__dropdown-item"
                        onMouseEnter={() => sub.children && setOpenSub(sub.href)}
                        onMouseLeave={() => setOpenSub(null)}
                      >
                        <Link href={sub.href as '/'} className="header__dropdown-link">
                          {sub.label}
                          {sub.children && (
                            <svg className="header__chevron-right" width="6" height="10" viewBox="0 0 6 10" fill="none">
                              <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </Link>
                        {sub.children && openSub === sub.href && (
                          <div className="header__subdropdown">
                            {sub.children.map((child) => (
                              <Link key={child.href} href={child.href as '/'} className="header__dropdown-link">
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="header__mobile">
          <ul className="header__mobile-list">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.dropdown ? (
                  <>
                    <div className="header__mobile-link header__mobile-link--parent">
                      <Link href={item.href as '/'} onClick={() => setIsOpen(false)}>
                        {item.label}
                      </Link>
                      <button
                        className="header__mobile-chevron-btn"
                        onClick={() => toggleMobileDropdown(item.key)}
                        aria-expanded={mobileDropdown === item.key}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <svg
                          className={`header__chevron ${mobileDropdown === item.key ? 'header__chevron--open' : ''}`}
                          width="10" height="6" viewBox="0 0 10 6" fill="none"
                        >
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    {mobileDropdown === item.key && (
                      <ul className="header__mobile-sub">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            {sub.children ? (
                              <>
                                <div className="header__mobile-sublink header__mobile-sublink--parent">
                                  <Link href={sub.href as '/'} onClick={() => setIsOpen(false)}>
                                    {sub.label}
                                  </Link>
                                  <button
                                    className="header__mobile-chevron-btn"
                                    onClick={() => setMobileSub(prev => prev === sub.href ? null : sub.href)}
                                    aria-label={`Toggle ${sub.label} submenu`}
                                  >
                                    <svg
                                      className={`header__chevron ${mobileSub === sub.href ? 'header__chevron--open' : ''}`}
                                      width="8" height="5" viewBox="0 0 10 6" fill="none"
                                    >
                                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                </div>
                                {mobileSub === sub.href && (
                                  <ul className="header__mobile-subsub">
                                    {sub.children.map((child) => (
                                      <li key={child.href}>
                                        <Link href={child.href as '/'} className="header__mobile-sublink" onClick={() => setIsOpen(false)}>
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link href={sub.href as '/'} className="header__mobile-sublink" onClick={() => setIsOpen(false)}>
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href as '/'} className="header__mobile-link" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="header__mobile-actions">
            <Link href="/calculate-cleaning-cost" className="btn btn-accent btn-lg" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
              {t('calculateCost')}
            </Link>
            <Link href="/about-us/contact-us" className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
              {t('getQuote')}
            </Link>
            <a href="tel:4037202230" className="btn btn-ghost btn-lg" style={{ width: '100%' }}>
              {t('call')}
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
