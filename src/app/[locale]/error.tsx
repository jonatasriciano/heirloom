'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/routing';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
          Oops! Something went wrong
        </h1>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        {error.digest && (
          <p className="text-sm mb-8" style={{ color: 'var(--text-light)' }}>
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
