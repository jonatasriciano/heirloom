import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/rug-protection');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
