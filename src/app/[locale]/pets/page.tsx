'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function PetsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('pets')} description="Pet stain and odor removal for area rugs." />;
}
