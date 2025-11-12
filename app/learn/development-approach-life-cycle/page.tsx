/* eslint-disable prettier/prettier */
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Development Approach & Life Cycle · PMP Study Hub',
  description:
    'Choose and tailor predictive, agile, or hybrid life cycles. Understand phases, increments, governance, and compliance tailoring.',
}

export default function DevApproachPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Development Approach &amp; Life Cycle</h1>

      <p>
        Pick the right approach for <strong>value, uncertainty, and constraints</strong>. Tailor
        governance and cadence — that’s what PMP wants to see.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Predictive vs. agile vs. hybrid: selection criteria</li>
        <li>Phases, iterations, increments, releases</li>
        <li>Governance gates vs. agile ceremonies</li>
        <li>Compliance &amp; documentation tailoring</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/blog/agile-vs-predictive-vs-hybrid-real-examples">
            Agile vs Predictive vs Hybrid — real examples
          </Link>
        </li>
        <li>
          <Link href="/blog/pmp-change-request-flow">PMP Change Request Flow — quick visual</Link>
        </li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        More:{' '}
        <Link href="/tags/lifecycle" prefetch={false}>
          /tags/lifecycle
        </Link>
      </p>
    </section>
  )
}
