'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function CleaningArticlesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('cleaningDropdown.articles')} breadcrumb={[{ label: t('cleaning'), href: '/area-rug-cleaning' }]} />;
}
