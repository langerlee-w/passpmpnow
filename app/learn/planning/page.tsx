import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Planning · PMP Study Hub',
  description:
    'Scope, schedule, cost, risk, procurement, and change plans. Tailor plans to approach and value delivery.',
}

export default function PlanningPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Planning</h1>

      <p>
        PMP checks whether plans are <strong>integrated, realistic, and tailored</strong> to the
        approach — and whether you can keep them current under change.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Scope baseline, WBS (predictive) vs. emergent backlog (agile)</li>
        <li>Schedule & cost planning; EVM forecasts</li>
        <li>Risk register & responses (threat vs. opportunity)</li>
        <li>Change management plan & configuration control</li>
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
        <Link href="/tags/planning" prefetch={false}>
          /tags/planning
        </Link>
      </p>
    </section>
  )
}
