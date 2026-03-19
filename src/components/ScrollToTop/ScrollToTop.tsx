'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  /* scroll to top on route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* show/hide button based on scroll position */
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const toggleVisibility = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 300);
      }, 100);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-opacity duration-500 ease-in-out ${
        isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'var(--accent-primary)',
        color: 'var(--text-on-accent)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-secondary)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-primary)')}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
