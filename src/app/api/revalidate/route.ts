import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * POST /api/revalidate
 *
 * Webhook endpoint for cache invalidation
 * Called by CMS when content is updated
 *
 * Headers:
 * - x-revalidate-secret: Secret token for authentication
 *
 * Body:
 * - type: 'seo' | 'all'
 * - path?: string (optional, specific path to revalidate)
 */
export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-revalidate-secret')
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { type, path } = body

    switch (type) {
      case 'seo':
        if (path) {
          revalidatePath(path)
        } else {
          revalidatePath('/', 'layout')
        }
        break

      case 'all':
        revalidatePath('/', 'layout')
        break

      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      revalidated: true,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('[Heirloom Revalidate] Error:', error)
    return NextResponse.json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
