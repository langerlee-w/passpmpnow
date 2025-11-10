import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team · PMP Study Hub',
  description:
    'Build and lead high-performing teams: roles, RACI, conflicts, motivation, coaching, and exam traps.',
}

export default function TeamPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Team</h1>

      <p>
        The exam tests whether you can <strong>build, develop, and lead</strong> a team toward value
        delivery while handling conflicts and constraints.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Team charter, working agreements, RACI</li>
        <li>Motivation & coaching (servant leadership, Tuckman)</li>
        <li>Conflict resolution (collaborate over compete/avoid)</li>
        <li>Resource constraints & negotiation</li>
      </ul>

      <h2>Recommended reads</h2>
      <ul>
        <li>
          <Link href="/blog/agile-vs-predictive-vs-hybrid-real-examples">
            Agile vs Predictive vs Hybrid — real examples
          </Link>
        </li>
        <li>
          <Link href="/blog/pmp-exam-day-strategy">PMP Exam-Day Strategy</Link>
        </li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        See more:{' '}
        <Link href="/tags/team" prefetch={false}>
          /tags/team
        </Link>
      </p>
    </section>
  )
}
