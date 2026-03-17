'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function ProtectorRepellentPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('rugProtectionDropdown.protectorRepellent')} breadcrumb={[{ label: t('rugProtection'), href: '/rug-protection' }]} />;
}
