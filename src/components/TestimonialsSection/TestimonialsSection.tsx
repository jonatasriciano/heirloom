'use client';

import { useTranslations } from 'next-intl';

const testimonialKeys = ['t1', 't2', 't3'] as const;

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <section className="section">
      <div className="container">
        <div className="testimonials__header">
          <span className="label-uppercase">{t('label')}</span>
          <h2 className="heading-display">{t('title')}</h2>
          <hr className="divider-center" style={{ marginTop: 'var(--space-4)' }} />
        </div>

        <div className="testimonials__grid">
          {testimonialKeys.map((key) => (
            <blockquote key={key} className="testimonial card-flat">
              <p className="testimonial__text">&ldquo;{t(`items.${key}.text`)}&rdquo;</p>
              <footer className="testimonial__footer">
                <cite className="testimonial__author">{t(`items.${key}.author`)}</cite>
                <span className="testimonial__location">{t(`items.${key}.location`)}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials__header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-12);
        }
        .testimonials__grid {
          display: grid;
          gap: var(--space-6);
        }
        .testimonial {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: var(--space-6);
        }
        .testimonial__text {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          font-style: italic;
        }
        .testimonial__footer {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        .testimonial__author {
          font-style: normal;
          font-weight: 600;
          color: var(--text-primary);
          font-size: var(--font-size-base);
        }
        .testimonial__location {
          font-size: var(--font-size-sm);
          color: var(--text-light);
        }
        @media (min-width: 768px) {
          .testimonials__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
