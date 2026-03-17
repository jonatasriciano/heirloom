'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function CarpetRestorationPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('carpetDyeingDropdown.restoration')} breadcrumb={[{ label: t('carpetDyeing'), href: '/carpet-dyeing' }]} />;
}
