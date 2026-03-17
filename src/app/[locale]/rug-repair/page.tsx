'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugRepairPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repair')} description="Expert rug repair and restoration services." />;
}
