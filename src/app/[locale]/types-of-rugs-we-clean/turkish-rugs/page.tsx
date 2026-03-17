'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function TurkishRugsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('rugTypesDropdown.turkish')} breadcrumb={[{ label: t('rugTypes'), href: '/types-of-rugs-we-clean' }]} />;
}
