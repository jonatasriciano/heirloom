'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function BackingRepairPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.backing')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }]} />;
}
