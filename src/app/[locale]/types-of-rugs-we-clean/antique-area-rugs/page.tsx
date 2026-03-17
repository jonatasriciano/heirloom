'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function AntiqueRugsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('rugTypesDropdown.antique')} breadcrumb={[{ label: t('rugTypes'), href: '/types-of-rugs-we-clean' }]} />;
}
