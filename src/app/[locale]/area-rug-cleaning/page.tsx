'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function AreaRugCleaningPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaning')} description="Professional area rug cleaning services in Calgary." />;
}
