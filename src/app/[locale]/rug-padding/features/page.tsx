'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function FeaturesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.features')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }]} />;
}
