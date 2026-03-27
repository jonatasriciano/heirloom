import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/rug-repair');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
