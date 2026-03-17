'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function BlotSpillsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.blotSpills')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }]} />;
}
