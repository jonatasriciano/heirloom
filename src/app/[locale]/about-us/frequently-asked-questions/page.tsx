'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function FAQPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.faq')} breadcrumb={[{ label: t('aboutUs'), href: '/about-us' }]} />;
}
