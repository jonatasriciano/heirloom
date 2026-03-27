import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/about-us');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
