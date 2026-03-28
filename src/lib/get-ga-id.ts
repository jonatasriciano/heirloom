import { config } from './config'

/**
 * Fetch Google Analytics ID from CMS (server-side)
 * Falls back to config.analytics.gaId if CMS is unavailable
 */
export async function getGaId(companySlug: string): Promise<string | null> {
  try {
    const cmsUrl = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'
    const response = await fetch(
      `${cmsUrl}/api/public/company/analytics?slug=${companySlug}`,
      {
        next: { revalidate: 3600 },
      }
    )

    if (response.ok) {
      const data = await response.json()
      return data.gaMeasurementId || config.analytics.gaId || null
    }

    return config.analytics.gaId || null
  } catch {
    return config.analytics.gaId || null
  }
}
