'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function PetStainRemovalPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('petsDropdown.stainRemoval')} breadcrumb={[{ label: t('pets'), href: '/pets' }]} />;
}
