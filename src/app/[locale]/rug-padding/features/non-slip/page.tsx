'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function NonSlipPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.nonSlip')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }, { label: t('underlaysDropdown.features'), href: '/rug-padding/features' }]} />;
}
