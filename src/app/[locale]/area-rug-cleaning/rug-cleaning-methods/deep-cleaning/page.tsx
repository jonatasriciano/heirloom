'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function DeepCleaningPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.deepCleaning')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }, { label: t('cleaningDropdown.methods'), href: '/area-rug-cleaning/rug-cleaning-methods' }]} />;
}
