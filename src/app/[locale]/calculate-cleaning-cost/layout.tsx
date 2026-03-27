import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/calculate-cleaning-cost');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
