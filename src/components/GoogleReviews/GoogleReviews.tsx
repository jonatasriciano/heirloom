'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { config } from '@/lib/config';

export interface Review {
  id: string;
  author: string;
  authorImage: string;
  rating: number;
  text: string;
  timeAgo: string;
}

interface ReviewsResponse {
  name: string;
  rating: number;
  userRatingsTotal: number;
  reviews: Review[];
  reviewsUri: string;
  writeReviewUri: string;
}

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  businessName?: string;
  fallbackReviews?: Review[];
  fallbackRating?: number;
  fallbackTotalReviews?: number;
}

const isGoogleProfileImage = (src: string) =>
  src.includes('lh3.googleusercontent.com');

export default function GoogleReviews({
  title,
  subtitle,
  businessName,
  fallbackReviews = [],
  fallbackRating = 0,
  fallbackTotalReviews = 0,
}: GoogleReviewsProps) {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
        const res = await fetch(
          `${cmsUrl}/api/public/company/google-reviews?slug=${config.companySlug}`
        );
        if (res.ok) {
          setData(await res.json());
        }
      } catch {
        // Use fallback
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const reviews = data?.reviews?.length ? data.reviews : fallbackReviews;
  const rating = data?.rating || fallbackRating;
  const totalReviews = data?.userRatingsTotal || fallbackTotalReviews;
  const name = data?.name || businessName || config.siteName;
  const reviewsUri = data?.reviewsUri || '';
  const writeReviewUri = data?.writeReviewUri || '';

  const renderStars = (r: number) => (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"
          style={{ fill: star <= Math.round(r) ? '#fbbc04' : '#dadce0' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  if (loading) return null;
  if (reviews.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        {(subtitle || title) && (
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12, 3rem)' }}>
            {subtitle && <span className="label-uppercase">{subtitle}</span>}
            {title && <h2 className="heading-display">{title}</h2>}
            <hr className="divider-center" style={{ marginTop: 'var(--space-4, 1rem)' }} />
          </div>
        )}

        {/* Business Card */}
        <div className="card-flat" style={{ marginBottom: 'var(--space-8, 2rem)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6, 1.5rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4, 1rem)' }}>
              <Image src="/images/business-reviews.svg" alt="Google Reviews" width={56} height={56} style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--accent-primary, #2563eb)' }}>Excellent</div>
                {reviewsUri ? (
                  <a href={reviewsUri} target="_blank" rel="noopener noreferrer"
                    style={{ fontWeight: 700, color: 'var(--text-primary, #111)', textDecoration: 'none' }}>
                    {name}
                  </a>
                ) : (
                  <div style={{ fontWeight: 700, color: 'var(--text-primary, #111)' }}>{name}</div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2px' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#fbbc04' }}>{rating.toFixed(1)}</span>
                  {renderStars(rating)}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light, #8a8a8a)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  Based on {totalReviews}{' '}
                  <Image src="/images/google-logo.svg" alt="Google" width={14} height={14} style={{ display: 'inline-block' }} />
                  {' '}reviews
                </div>
              </div>
            </div>
            {(reviewsUri || writeReviewUri) && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {reviewsUri && (
                  <a href={reviewsUri} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1rem', height: '36px', backgroundColor: 'var(--accent-primary, #0a6cff)', color: '#fff', fontSize: '0.75rem', fontWeight: 500, borderRadius: '9999px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    See all reviews
                  </a>
                )}
                {writeReviewUri && (
                  <a href={writeReviewUri} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', height: '36px', backgroundColor: 'var(--accent-primary, #0a6cff)', color: '#fff', fontSize: '0.75rem', fontWeight: 500, borderRadius: '9999px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    Review us on
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%' }}>
                      <Image src="/images/google-logo.svg" alt="Google" width={14} height={14} />
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6, 1.5rem)' }}>
          {reviews.map((review, i) => (
            <div key={review.id} className="card-flat">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Image src={review.authorImage || '/images/default-avatar.svg'} alt={review.author} width={40} height={40}
                  style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  loading={i < 3 ? 'eager' : 'lazy'} sizes="40px"
                  unoptimized={isGoogleProfileImage(review.authorImage)} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary, #111)' }}>{review.author}</span>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light, #8a8a8a)' }}>{review.timeAgo}</div>
                </div>
                <Image src="/images/google-logo.svg" alt="Google" width={18} height={18} style={{ flexShrink: 0 }} loading={i < 3 ? 'eager' : 'lazy'} />
              </div>
              <div style={{ marginBottom: '0.75rem' }}>{renderStars(review.rating)}</div>
              {review.text && (
                <p style={{ color: 'var(--text-secondary, #4b4b4b)', lineHeight: 1.75 }}>{review.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
