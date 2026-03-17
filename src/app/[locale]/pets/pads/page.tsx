'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function PetPadsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('petsDropdown.pads')} breadcrumb={[{ label: t('pets'), href: '/pets' }]} />;
}
