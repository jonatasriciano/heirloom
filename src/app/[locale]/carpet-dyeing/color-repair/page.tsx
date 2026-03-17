'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function ColorRepairPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('carpetDyeingDropdown.colorRepair')} breadcrumb={[{ label: t('carpetDyeing'), href: '/carpet-dyeing' }]} />;
}
