import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET() {
  try {
    const cmsUrl = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
    const res = await fetch(
      `${cmsUrl}/api/public/company/google-reviews?slug=${config.companySlug}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800' },
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
