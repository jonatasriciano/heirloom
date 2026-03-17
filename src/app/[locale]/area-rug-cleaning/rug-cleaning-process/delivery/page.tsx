'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function DeliveryPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.delivery')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }, { label: t('cleaningDropdown.process'), href: '/area-rug-cleaning/rug-cleaning-process' }]} />;
}
