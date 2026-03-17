'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function FireWaterDamagedPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.fireWater')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }]} />;
}
