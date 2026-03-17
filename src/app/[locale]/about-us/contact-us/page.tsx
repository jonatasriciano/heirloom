'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function ContactUsPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.contact')} breadcrumb={[{ label: t('aboutUs'), href: '/about-us' }]} />;
}
