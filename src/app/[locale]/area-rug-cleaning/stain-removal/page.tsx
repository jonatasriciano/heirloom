'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function StainRemovalPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.stainRemoval')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }]} />;
}
