import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';

const CMS_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
const CMS_API_KEY = process.env.CMS_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    const res = await fetch(`${CMS_URL}/api/public/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(CMS_API_KEY && { Authorization: `Bearer ${CMS_API_KEY}` }),
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        companySlug: config.companySlug,
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json(
        { success: false, error: err.error || 'Failed to submit' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, id: data.contact?.id }, { status: 201 });
  } catch (error) {
    console.error('[Contact] Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
