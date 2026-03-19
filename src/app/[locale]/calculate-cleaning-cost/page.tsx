'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function CalculateCleaningCostPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('calculateCost')} description="Calculate the cost of cleaning your area rug." />;
}
