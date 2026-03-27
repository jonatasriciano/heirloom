import { createPageMetadata } from '@/lib/seo-metadata';

export const generateMetadata = createPageMetadata('/carpet-dyeing');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
