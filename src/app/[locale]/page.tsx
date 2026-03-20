'use client';

import Header from '@/components/Header/Header';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import TrustSection from '@/components/TrustSection/TrustSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import CTASection from '@/components/CTASection/CTASection';
import ServiceAreas from '@/components/ServiceAreas/ServiceAreas';
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews';
import Footer from '@/components/Footer/Footer';
import { sampleReviews } from '@/data/reviews';
import type { Review } from '@/components/GoogleReviews/GoogleReviews';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel
          slides={[
            { titleKey: 's1', subtitleKey: 's1', backgroundImage: '/images/backgroundHero/background-hero-1.webp' },
            { titleKey: 's2', subtitleKey: 's2', backgroundImage: '/images/backgroundHero/background-hero-2.webp' },
            { titleKey: 's3', subtitleKey: 's3', backgroundImage: '/images/backgroundHero/background-hero-3.webp' },
          ]}
        />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <GoogleReviews
          reviews={sampleReviews as Review[]}
          overallRating={4.4}
          totalReviews={39}
        />
        <CTASection />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
