'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugTypesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('rugTypes')} description="We clean all types of area rugs with specialized care." />;
}
