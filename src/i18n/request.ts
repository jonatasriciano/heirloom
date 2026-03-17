import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

import enMessages from '../messages/en.json';
import frMessages from '../messages/fr.json';

const messages = {
  en: enMessages,
  fr: frMessages
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'fr')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});
