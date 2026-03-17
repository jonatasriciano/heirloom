'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function HotWaterExtractionPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.hotWater')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }, { label: t('cleaningDropdown.methods'), href: '/area-rug-cleaning/rug-cleaning-methods' }]} />;
}
