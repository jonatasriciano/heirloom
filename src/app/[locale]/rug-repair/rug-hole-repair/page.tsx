'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugHoleRepairPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.holeRepair')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }]} />;
}
