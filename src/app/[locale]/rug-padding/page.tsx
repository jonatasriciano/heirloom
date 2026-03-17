'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugPaddingPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlays')} description="Quality rug pads and underlays for every floor type." />;
}
