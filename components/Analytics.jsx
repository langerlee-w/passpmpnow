'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) return

    // send page_view
    window.gtag = window.gtag || function(){(window.dataLayer=window.dataLayer||[]).push(arguments)}
    window.gtag('config', GA_ID, {
      page_path: pathname + (searchParams ? `?${searchParams}` : ''),
    })
  }, [pathname, searchParams, GA_ID])

  return GA_ID ? (
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
  ) : null
}
