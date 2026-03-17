'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function FloorTypePage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.floorType')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }]} />;
}
