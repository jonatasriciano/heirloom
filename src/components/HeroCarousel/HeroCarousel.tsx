'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface Slide {
  titleKey: string;
  subtitleKey: string;
  backgroundImage: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
  transitionDuration?: number;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 6000,
  transitionDuration = 700,
}: HeroCarouselProps) {
  const t = useTranslations('hero');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const extendedSlides = slides.length > 0 ? [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ] : [];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(c => c + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(c => c - 1);
  }, [isTransitioning]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < 50) return;
    if (diff > 0) nextSlide();
    else prevSlide();
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentSlide === extendedSlides.length - 1) setCurrentSlide(1);
      else if (currentSlide === 0) setCurrentSlide(slides.length);
    }, transitionDuration);
    return () => clearTimeout(timer);
  }, [isTransitioning, currentSlide, extendedSlides.length, slides.length, transitionDuration]);

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  if (!slides || slides.length === 0) return null;

  const getCurrentIndex = () => {
    if (currentSlide === 0) return slides.length - 1;
    if (currentSlide === extendedSlides.length - 1) return 0;
    return currentSlide - 1;
  };

  const idx = getCurrentIndex();

  return (
    <section
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-carousel__track">
        {extendedSlides.map((slide, i) => (
          <div
            key={`slide-${i}`}
            className="hero-carousel__slide"
            style={{
              transform: `translateX(${(i - currentSlide) * 100}%)`,
              transition: isTransitioning ? `transform ${transitionDuration}ms ease-out` : 'none',
            }}
          >
            <Image
              src={slide.backgroundImage}
              alt=""
              fill
              priority={i === 1}
              sizes="100vw"
              className="hero-carousel__image"
            />
          </div>
        ))}
      </div>

      <div className="hero-carousel__overlay" />

      <div className="hero-carousel__content">
        <div className="container">
          <div className="hero-carousel__inner">
            <span className="hero-carousel__label">{t(`slides.s${idx + 1}.label`)}</span>
            <h1 className="hero-carousel__title">{t(`slides.s${idx + 1}.title`)}</h1>
            <p className="hero-carousel__subtitle">{t(`slides.s${idx + 1}.subtitle`)}</p>
            <div className="hero-carousel__actions">
              <Link href="/contact-us" className="btn btn-primary btn-lg hero-carousel__cta-primary">
                {t('cta')}
              </Link>
              <Link href="/area-rug-cleaning" className="hero-carousel__cta-secondary">
                {t('secondaryCta')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (desktop) */}
      <button onClick={prevSlide} className="hero-carousel__arrow hero-carousel__arrow--prev" aria-label="Previous slide">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={nextSlide} className="hero-carousel__arrow hero-carousel__arrow--next" aria-label="Next slide">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero-carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!isTransitioning) { setIsTransitioning(true); setCurrentSlide(i + 1); } }}
            className={`hero-carousel__dot ${i === idx ? 'hero-carousel__dot--active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
