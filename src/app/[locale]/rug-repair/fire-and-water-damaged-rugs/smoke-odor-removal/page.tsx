'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function SmokeOdorRemovalPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.smokeOdor')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }, { label: t('repairDropdown.fireWater'), href: '/rug-repair/fire-and-water-damaged-rugs' }]} />;
}
