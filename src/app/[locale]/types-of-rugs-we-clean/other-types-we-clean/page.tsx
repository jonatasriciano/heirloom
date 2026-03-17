'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function OtherTypesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('rugTypesDropdown.other')} breadcrumb={[{ label: t('rugTypes'), href: '/types-of-rugs-we-clean' }]} />;
}
