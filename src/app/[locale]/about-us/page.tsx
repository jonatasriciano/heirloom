'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function AboutUsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUs')} description="Learn about Heirloom® Rug Cleaning — Calgary's trusted rug care since 1967." />;
}
