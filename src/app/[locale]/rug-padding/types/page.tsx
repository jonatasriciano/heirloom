'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugPadTypesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.types')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }]} />;
}
