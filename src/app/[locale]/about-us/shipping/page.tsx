'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function ShippingPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.shipping')} breadcrumb={[{ label: t('aboutUs'), href: '/about-us' }]} />;
}
