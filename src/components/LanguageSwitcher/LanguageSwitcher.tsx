'use client';

import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as string;

  const handleLocaleChange = (newLocale: 'en' | 'fr') => {
    const scrollY = window.scrollY;
    router.replace(pathname, { locale: newLocale, scroll: false });
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <div
      className="flex items-center p-1"
      style={{
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-full)',
      }}
    >
      <button
        onClick={() => handleLocaleChange('en')}
        className="px-4 py-2 text-sm font-medium transition-all duration-200"
        style={{
          borderRadius: 'var(--radius-full)',
          background: currentLocale === 'en' ? 'var(--accent-primary)' : 'transparent',
          color: currentLocale === 'en' ? 'var(--text-on-accent)' : 'var(--text-secondary)',
          boxShadow: currentLocale === 'en' ? 'var(--shadow-md)' : 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange('fr')}
        className="px-4 py-2 text-sm font-medium transition-all duration-200"
        style={{
          borderRadius: 'var(--radius-full)',
          background: currentLocale === 'fr' ? 'var(--accent-primary)' : 'transparent',
          color: currentLocale === 'fr' ? 'var(--text-on-accent)' : 'var(--text-secondary)',
          boxShadow: currentLocale === 'fr' ? 'var(--shadow-md)' : 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        FR
      </button>
    </div>
  );
}
