'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

type Props = {
  slot: string
  className?: string
  format?: string
  layout?: string
  layoutKey?: string
}

export default function AdUnit({
  slot,
  className = '',
  format = 'auto',
  layout = '',
  layoutKey = '',
}: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      /* ignore */
    }
  }, [])

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-full-width-responsive="true"
    />
  )
}
