'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function FringeRepairPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.fringe')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }]} />;
}
