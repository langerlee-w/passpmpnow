import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Measurement · PMP Study Hub',
  description:
    'Define metrics, track performance, use EVM, communicate results, and support decisions.',
}

export default function MeasurementPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Measurement</h1>

      <p>
        Show that you can <strong>measure, interpret, and act</strong> on performance — using the
        right metrics for your delivery approach.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>KPIs & information radiators</li>
        <li>EVM: PV, EV, AC, CV, SV, CPI, SPI, EAC/ETC</li>
        <li>Predictive vs. agile reporting rhythms</li>
        <li>Decision-making with data (thresholds, deltas)</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/blog/pmp-formulas-you-must-know">PMP Formulas You Must Know</Link>
        </li>
        <li>
          <Link href="/blog/itto-patterns-for-pmp">ITTO Patterns for PMP</Link>
        </li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        More:{' '}
        <Link href="/tags/measurement" prefetch={false}>
          /tags/measurement
        </Link>
      </p>
    </section>
  )
}
