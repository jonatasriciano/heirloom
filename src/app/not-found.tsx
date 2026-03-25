import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Playfair_Display, Inter } from 'next/font/google';
import NotFoundContent from './[locale]/not-found';
import './globals.css';

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

export default async function GlobalNotFound() {
  const messages = await getMessages({ locale: 'en' });

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} data-theme="luxury-light">
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages} locale="en">
          <NotFoundContent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
