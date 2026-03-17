'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function CarpetDyeingPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('carpetDyeing')} description="Professional carpet dyeing and color restoration." />;
}
