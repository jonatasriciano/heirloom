'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function MaterialPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.material')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }]} />;
}
