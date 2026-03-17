'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function BleachSpotRepairPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('carpetDyeingDropdown.bleachSpot')} breadcrumb={[{ label: t('carpetDyeing'), href: '/carpet-dyeing' }]} />;
}
