'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default function Gtag() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) return
    window.gtag = window.gtag || function(){ (window.dataLayer = window.dataLayer || []).push(arguments as any) }
    window.gtag('config', GA_ID, {
      page_path: pathname + (searchParams ? `?${searchParams}` : ''),
    })
  }, [pathname, searchParams, GA_ID])

  if (!GA_ID) return null

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  )
}
