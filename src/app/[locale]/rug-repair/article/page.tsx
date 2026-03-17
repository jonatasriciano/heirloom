'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function RepairArticlesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('repairDropdown.articles')} breadcrumb={[{ label: t('repair'), href: '/rug-repair' }]} />;
}
