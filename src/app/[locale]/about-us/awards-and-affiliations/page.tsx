'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function AwardsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.awards')} breadcrumb={[{ label: t('aboutUs'), href: '/about-us' }]} />;
}
