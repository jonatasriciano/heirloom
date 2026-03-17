'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugCleaningMethodsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.methods')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }]} />;
}
