'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RugProtectionPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('rugProtection')} description="Protect your rugs from stains and wear." />;
}
