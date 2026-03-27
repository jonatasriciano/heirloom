import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/rug-padding');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
