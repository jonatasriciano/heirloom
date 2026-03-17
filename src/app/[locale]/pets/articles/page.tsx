'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function PetArticlesPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('petsDropdown.articles')} breadcrumb={[{ label: t('pets'), href: '/pets' }]} />;
}
