import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/contact-us');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
