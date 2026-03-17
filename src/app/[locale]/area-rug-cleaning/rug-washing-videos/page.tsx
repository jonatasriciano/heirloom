'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugWashingVideosPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.videos')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }]} />;
}
