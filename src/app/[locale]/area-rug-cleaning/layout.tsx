import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/area-rug-cleaning');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
