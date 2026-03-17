'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function LaminatePage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.laminate')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }, { label: t('underlaysDropdown.floorType'), href: '/rug-padding/floor-type' }]} />;
}
