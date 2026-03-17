'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function JobsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.jobs')} breadcrumb={[{ label: t('aboutUs'), href: '/about-us' }]} />;
}
