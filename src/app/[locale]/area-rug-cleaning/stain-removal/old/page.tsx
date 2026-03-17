'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function OldStainRemovalPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.oldStain')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }, { label: t('cleaningDropdown.stainRemoval'), href: '/area-rug-cleaning/stain-removal' }]} />;
}
