'use client';

import { Link } from '@/i18n/routing';

export default function NotFoundPage() {
  return (
    <main className="min-h-[80vh] relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="relative container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-lg mx-auto text-center">
          <h1
            className="text-[120px] md:text-[180px] font-bold leading-none select-none mb-4"
            style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-heading)' }}
          >
            404
          </h1>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Page Not Found
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary btn-lg">
              Go Home
            </Link>
            <Link href="/contact-us" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
