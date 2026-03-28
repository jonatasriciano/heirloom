'use client'

import { useEffect, useState, Suspense } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'

interface GoogleAnalyticsProps {
  companySlug: string
  gaId?: string | null
}

function GoogleAnalyticsInner({ companySlug, gaId: initialGaId }: GoogleAnalyticsProps) {
  const [gaId, setGaId] = useState<string | null>(initialGaId || null)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (initialGaId) return

    const fetchGaId = async () => {
      try {
        const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'
        const response = await fetch(`${cmsUrl}/api/public/company/analytics?slug=${companySlug}`)

        if (response.ok) {
          const data = await response.json()
          if (data.gaMeasurementId) {
            setGaId(data.gaMeasurementId)
          }
        }
      } catch (error) {
        console.error('[GA] Failed to fetch GA ID:', error)
      }
    }

    fetchGaId()
  }, [companySlug, initialGaId])

  useEffect(() => {
    if (!gaId) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    if (window.gtag) {
      window.gtag('config', gaId, { page_path: url })
    }
  }, [pathname, searchParams, gaId])

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}

export default function GoogleAnalytics({ companySlug, gaId }: GoogleAnalyticsProps) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner companySlug={companySlug} gaId={gaId} />
    </Suspense>
  )
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
