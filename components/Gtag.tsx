'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string | undefined

export default function Gtag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 首次加载：插入 GA4 脚本并初始化
  useEffect(() => {
    if (!GA_ID) return

    const src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script')
      s.async = true
      s.src = src
      document.head.appendChild(s)
    }

    const w = window as Window & {
      dataLayer?: unknown[]
      gtag?: (...args: unknown[]) => void
    }

    w.dataLayer = w.dataLayer ?? []
    w.gtag =
      w.gtag ??
      ((...args: unknown[]) => {
        ;(w.dataLayer as unknown[]).push(args)
      })

    w.gtag('js', new Date())
  }, [])

  // 路由变化：发送 page_view
  useEffect(() => {
    if (!GA_ID) return
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void
    }
    if (typeof w.gtag !== 'function') return

    const q = searchParams?.toString()
    const page_path = q ? `${pathname}?${q}` : pathname || '/'
    w.gtag('config', GA_ID, { page_path })
  }, [pathname, searchParams])

  return null
}
