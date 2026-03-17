'use client';

import Header from '@/components/Header/Header';
import HeroPremium from '@/components/HeroPremium/HeroPremium';
import TrustSection from '@/components/TrustSection/TrustSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import CTASection from '@/components/CTASection/CTASection';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroPremium />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
