'use client';

import './StatementSection.css';

interface StatementSectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function StatementSection({ label, title, children }: StatementSectionProps) {
  return (
    <section className="section statement-section">
      {/* Left ornament */}
      <div className="statement__ornament statement__ornament--left" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="var(--accent-primary)" strokeWidth="0.6" opacity="0.15" />
          <circle cx="100" cy="100" r="70" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
          <circle cx="100" cy="100" r="50" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
          <circle cx="100" cy="100" r="30" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.08" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
          <line x1="30" y1="30" x2="170" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
          <line x1="170" y1="30" x2="30" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
          <path d="M100 10 L106 20 L100 30 L94 20Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
          <path d="M100 170 L106 180 L100 190 L94 180Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
          <path d="M10 100 L20 94 L30 100 L20 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
          <path d="M170 100 L180 94 L190 100 L180 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>
      {/* Right ornament */}
      <div className="statement__ornament statement__ornament--right" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="var(--accent-primary)" strokeWidth="0.6" opacity="0.15" />
          <circle cx="100" cy="100" r="70" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.12" />
          <circle cx="100" cy="100" r="50" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
          <circle cx="100" cy="100" r="30" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.08" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.1" />
          <line x1="30" y1="30" x2="170" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
          <line x1="170" y1="30" x2="30" y2="170" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.08" />
          <path d="M100 10 L106 20 L100 30 L94 20Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
          <path d="M100 170 L106 180 L100 190 L94 180Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
          <path d="M10 100 L20 94 L30 100 L20 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
          <path d="M170 100 L180 94 L190 100 L180 106Z" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>

      <div className="container">
        <div className="statement__content">
          <span className="label-uppercase">{label}</span>
          <h2 className="heading-display statement__title">{title}</h2>
          <hr className="divider-center" />
          {children}
        </div>
      </div>
    </section>
  );
}
