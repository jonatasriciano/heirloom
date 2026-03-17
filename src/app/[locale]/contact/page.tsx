'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function ContactPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.contact')} description="Get in touch with Heirloom® Rug Cleaning." />;
}
