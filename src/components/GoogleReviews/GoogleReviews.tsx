'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export interface Review {
  id: string;
  author: string;
  authorImage: string;
  rating: number;
  text: string;
  date: string;
  ownerResponse?: string;
}

interface GoogleReviewsProps {
  businessName?: string;
  overallRating?: number;
  totalReviews?: number;
  reviews: Review[];
  reviewsPerPage?: number;
}

const isGoogleProfileImage = (src: string) => src.includes('lh3.googleusercontent.com');

const GOOGLE_PLACE_ID = 'ChIJVVVVVRW7cVMR8okkqsj-EbE';

export default function GoogleReviews({
  businessName = 'Heirloom Rug Cleaning',
  overallRating = 5.0,
  totalReviews = 5,
  reviews,
  reviewsPerPage = 10
}: GoogleReviewsProps) {
  const t = useTranslations('googleReviews');
  const [visibleReviews, setVisibleReviews] = useState(reviewsPerPage);

  const getTimeAgo = (dateStr: string) => {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return t('timeAgo.today');
    if (diffDays === 1) return t('timeAgo.yesterday');
    if (diffDays < 7) return t('timeAgo.daysAgo', { count: diffDays });
    if (diffDays < 14) return t('timeAgo.weekAgo');
    if (diffDays < 30) return t('timeAgo.weeksAgo', { count: Math.floor(diffDays / 7) });
    if (diffDays < 60) return t('timeAgo.monthAgo');
    if (diffDays < 365) return t('timeAgo.monthsAgo', { count: Math.floor(diffDays / 30) });
    if (diffDays < 730) return t('timeAgo.yearAgo');
    return t('timeAgo.yearsAgo', { count: Math.floor(diffDays / 365) });
  };

  const showMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + reviewsPerPage, reviews.length));
  };

  const renderStars = (rating: number) => (
    <div className="gr-stars">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.min(1, Math.max(0, rating - (star - 1)));
        if (fill >= 1) {
          return (
            <svg key={star} className="gr-star gr-star--filled" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        }
        if (fill <= 0) {
          return (
            <svg key={star} className="gr-star gr-star--empty" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        }
        const pct = Math.round(fill * 100);
        return (
          <svg key={star} className="gr-star" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <defs>
              <linearGradient id={`star-grad-${star}`}>
                <stop offset={`${pct}%`} stopColor="#fbbc04" />
                <stop offset={`${pct}%`} stopColor="var(--border-medium)" />
              </linearGradient>
            </defs>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#star-grad-${star})`} />
          </svg>
        );
      })}
    </div>
  );

  return (
    <section className="section">
      <div className="container">
        <div className="gr-header">
          <span className="label-uppercase">{t('label')}</span>
          <h2 className="heading-display">{t('title')}</h2>
          <hr className="divider-center" style={{ marginTop: 'var(--space-4)' }} />
        </div>

        <div className="gr-business-card card-flat">
          <div className="gr-business-info">
            <div className="gr-business-details">
              <Image
                src="/images/business-reviews.svg"
                alt="Google"
                width={56}
                height={56}
                className="gr-business-icon"
                priority
              />
              <div>
                <div className="gr-business-excellent">{t('excellent')}</div>
                <a
                  href={`https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`}
                  className="gr-business-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {businessName}
                </a>
                <div className="gr-rating-row">
                  <span className="gr-rating-number">{overallRating.toFixed(1)}</span>
                  {renderStars(overallRating)}
                </div>
                <div className="gr-based-on">
                  {t('basedOnPrefix', { count: totalReviews })}
                  <Image
                    src="/images/google-logo.svg"
                    alt="Google"
                    width={14}
                    height={14}
                    className="gr-google-inline"
                    priority
                  />
                  {t('basedOnSuffix')}
                </div>
              </div>
            </div>

            <div className="gr-business-actions">
              <a
                href={`https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`}
                className="gr-btn-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('seeAll')}
              </a>
              <a
                href={`https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`}
                className="gr-btn-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('reviewUs')}
                <span className="gr-btn-google-icon">
                  <Image
                    src="/images/google-logo.svg"
                    alt="Google"
                    width={14}
                    height={14}
                    priority
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="gr-reviews-list">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div key={review.id} className="gr-review card-flat">
              <div className="gr-review-header">
                <Image
                  src={review.authorImage}
                  alt={review.author}
                  width={40}
                  height={40}
                  className="gr-review-avatar"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="40px"
                  unoptimized={isGoogleProfileImage(review.authorImage)}
                />
                <div className="gr-review-meta">
                  <span className="gr-review-author">{review.author}</span>
                  <span className="gr-review-time">{getTimeAgo(review.date)}</span>
                </div>
                <Image
                  src="/images/google-logo.svg"
                  alt="Google"
                  width={18}
                  height={18}
                  className="gr-review-google"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>

              <div className="gr-review-rating">{renderStars(review.rating)}</div>

              {review.text && (
                <p className="gr-review-text">{review.text}</p>
              )}

              {review.ownerResponse && (
                <div className="gr-owner-response">
                  <p className="gr-owner-response-label">{t('ownerResponse')}</p>
                  <p className="gr-owner-response-text">{review.ownerResponse}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <div className="gr-more">
            <button onClick={showMoreReviews} className="btn btn-accent">
              {t('moreReviews')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
