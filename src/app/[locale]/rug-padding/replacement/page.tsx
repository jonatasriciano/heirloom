'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function ReplacementPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.replacement')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }]} />;
}
