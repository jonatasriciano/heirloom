'use client';

import Header from '@/components/Header/Header';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import FeaturedServices from '@/components/FeaturedServices/FeaturedServices';
import ImageTextSection from '@/components/ImageTextSection/ImageTextSection';
import VideoTextSection from '@/components/VideoTextSection/VideoTextSection';
import TrustSection from '@/components/TrustSection/TrustSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import CTASection from '@/components/CTASection/CTASection';
import ServiceAreas from '@/components/ServiceAreas/ServiceAreas';
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews';
import AwardsSection from '@/components/AwardsSection/AwardsSection';
import Footer from '@/components/Footer/Footer';
import { sampleReviews } from '@/data/reviews';
import type { Review } from '@/components/GoogleReviews/GoogleReviews';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const tAbout = useTranslations('aboutSection');
  const tWhy = useTranslations('whyChoose');
  const tPet = useTranslations('petProof');

  const whyItems = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'].map(k => tWhy(`items.${k}`));

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

        <FeaturedServices />

        {/* About Section */}
        <ImageTextSection
          imageSrc="/images/heirloom-van.webp"
          imageAlt={tAbout('title')}
          title={tAbout('title')}
          description={tAbout('desc1')}
          description2={tAbout('desc2')}
          highlightText="Pet Satisfaction Guarantee"
          highlightImageSrc="/images/pet-urine-removal.webp"
          highlightImageAlt="Pet urine removal service"
          imageOnLeft={false}
        />

        {/* Why Choose Section */}
        <ImageTextSection
          imageSrc="/images/why-choose-heirloom.webp"
          imageAlt={tWhy('title')}
          title={tWhy('title')}
          items={whyItems}
          imageOnLeft={true}
          variant="alt"
        />

        {/* Pet Proof Rug Padding */}
        <VideoTextSection
          videoSrc="/videos/rug-pads-to-prevent-pet-stains.webm"
          title={tPet('title')}
          description={tPet('desc')}
          videoOnLeft={false}
        />

        <TrustSection />

        <ServicesSection />

        <ProcessSection />

        <GoogleReviews
          reviews={sampleReviews as Review[]}
          overallRating={4.4}
          totalReviews={39}
        />

        <AwardsSection />

        <CTASection />

        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
