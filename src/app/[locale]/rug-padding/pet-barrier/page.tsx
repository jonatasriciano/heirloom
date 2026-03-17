'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function PetBarrierPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('underlaysDropdown.petBarrier')} breadcrumb={[{ label: t('underlays'), href: '/rug-padding' }]} />;
}
