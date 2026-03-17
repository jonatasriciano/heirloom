'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function PetOdorsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('petsDropdown.odors')} breadcrumb={[{ label: t('pets'), href: '/pets' }]} />;
}
