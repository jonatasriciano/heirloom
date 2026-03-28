import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';

const CMS_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
const CMS_API_KEY = process.env.CMS_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'footer' } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: 'Valid email is required' }, { status: 400 });
    }

    const res = await fetch(`${CMS_URL}/api/public/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(CMS_API_KEY && { Authorization: `Bearer ${CMS_API_KEY}` }),
      },
      body: JSON.stringify({
        email,
        source,
        companySlug: config.companySlug,
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json(
        { success: false, message: err.error || 'Failed to subscribe' },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, message: 'Subscribed' }, { status: 201 });
  } catch (error) {
    console.error('[Newsletter] Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
