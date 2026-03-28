import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { Playfair_Display, Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { generateSeoMetadata } from '@/lib/seo-metadata';
import { getSeoFallback } from '@/lib/seo-fallbacks';
import { config } from '@/lib/config';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import StructuredData from '@/components/StructuredData/StructuredData';
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
import '../globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  const cleanPath = pathname.replace(`/${locale}`, '') || '/';

  return generateSeoMetadata({
    path: cleanPath,
    locale,
    fallback: getSeoFallback(cleanPath),
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`} data-theme="luxury-light">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/backgroundHero/background-hero-1.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics companySlug={config.companySlug} gaId={config.analytics.gaId} />
          <StructuredData type="organization" />
          <StructuredData type="localBusiness" />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
