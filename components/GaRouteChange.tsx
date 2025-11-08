'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-F6ZDH39LGC'

export default function GaRouteChange() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    // @ts-ignore
    if (typeof window.gtag !== 'function') return

    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname

    // 触发 GA4 的 page_view（App Router 路由切换）
    // @ts-ignore
    window.gtag('config', GA_ID, { page_path: url })
  }, [pathname, searchParams])

  return null
}
