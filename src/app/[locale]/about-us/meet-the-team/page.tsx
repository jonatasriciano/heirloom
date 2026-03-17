'use client';
import { useTranslations } from 'next-intl';
import PlaceholderPage from '@/components/PlaceholderPage/PlaceholderPage';

export default function MeetTheTeamPage() {
  const t = useTranslations('nav');
  return <PlaceholderPage title={t('aboutUsDropdown.team')} breadcrumb={[{ label: t('aboutUs'), href: '/about-us' }]} />;
}
