'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string | undefined

export default function Gtag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // ① 首次加载：插入 GA4 脚本并初始化
  useEffect(() => {
    if (!GA_ID) return

    // 外链脚本若不存在则插入一次
    const src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script')
      s.async = true
      s.src = src
      document.head.appendChild(s)
    }

    // 初始化 gtag
    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function (...args: any[]) {
        window.dataLayer.push(args)
      }

    window.gtag('js', new Date())
  }, [])

  // ② 路由变化：发送 page_view
  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') return
    const q = searchParams?.toString()
    const page_path = q ? `${pathname}?${q}` : pathname || '/'
    window.gtag('config', GA_ID, { page_path })
  }, [pathname, searchParams])

  // 组件本身不渲染任何内容
  return null
}
