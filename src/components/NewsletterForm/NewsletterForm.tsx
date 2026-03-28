'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  errorMessage?: string;
  source?: string;
}

export default function NewsletterForm({
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Thanks for subscribing!',
  errorMessage = 'Something went wrong. Try again.',
  source = 'footer',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      if (res.ok) {
        setStatus('success');
        setMsg(successMessage);
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setMsg(data.message || errorMessage);
      }
    } catch {
      setStatus('error');
      setMsg(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          aria-label={placeholder}
          className="flex-1 px-3 py-2 text-sm rounded border border-gray-600 bg-transparent text-inherit placeholder-gray-400 focus:outline-none focus:border-current"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 text-sm font-medium rounded whitespace-nowrap"
          style={{
            backgroundColor: 'var(--accent-primary, var(--primary, #2563eb))',
            color: 'var(--text-on-accent, var(--text-on-primary, #fff))',
            opacity: status === 'loading' ? 0.7 : 1,
          }}
        >
          {status === 'loading' ? '...' : buttonText}
        </button>
      </div>
      {status === 'success' && <p className="text-sm text-green-400">{msg}</p>}
      {status === 'error' && <p className="text-sm text-red-400">{msg}</p>}
    </form>
  );
}
