'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function WaterproofRugPadsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.waterproof')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }, { label: t('underlaysDropdown.types'), href: '/rug-padding/types' }]} />;
}
