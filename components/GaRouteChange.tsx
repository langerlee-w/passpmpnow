'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function GaRouteChange() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined' || !('gtag' in window)) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    // @ts-ignore
    window.gtag('config', 'G-F6ZDH39LGC', { page_path: url })
  }, [pathname, searchParams])

  return null
}
