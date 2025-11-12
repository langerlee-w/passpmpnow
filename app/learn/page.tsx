/* eslint-disable prettier/prettier */
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Study Hub · PMP Domains',
  description:
    '8 PMP exam domains — quick navigation hub. Stakeholders, Team, Dev Approach, Planning, Delivery, Project Work, Measurement, Uncertainty.',
}

export default function LearnPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Study Hub</h1>

      <p>PMP now tests how you think — not PMBOK memorization. Start learning by domain ↓</p>

      <ul>
        <li>
          <Link href="/learn/stakeholders">Stakeholders</Link>
        </li>
        <li>
          <Link href="/learn/team">Team</Link>
        </li>
        <li>
          <Link href="/learn/development-approach-life-cycle">
            Development Approach &amp; Life Cycle
          </Link>
        </li>
        <li>
          <Link href="/learn/planning">Planning</Link>
        </li>
        <li>
          <Link href="/learn/delivery">Delivery</Link>
        </li>
        <li>
          <Link href="/learn/project-work">Project Work</Link>
        </li>
        <li>
          <Link href="/learn/measurement">Measurement</Link>
        </li>
        <li>
          <Link href="/learn/uncertainty">Uncertainty (Risk)</Link>
        </li>
      </ul>

      <hr />

      <p className="text-sm opacity-70">
        These 8 pages are your structured map. Each links into recommended articles and examples.
      </p>
    </section>
  )
}
