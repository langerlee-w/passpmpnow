import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Project Work · PMP Study Hub',
  description:
    'Executing, issue management, quality, knowledge, and change control while delivering increments.',
}

export default function ProjectWorkPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Project Work</h1>

      <p>
        Orchestrate execution, resolve issues, control changes, and ensure quality — while keeping
        stakeholders aligned and value flowing.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Issue & impediment management</li>
        <li>Quality assurance vs. control; DoD vs. acceptance</li>
        <li>Knowledge management & lessons learned</li>
        <li>Change control (CCB, baselines, CR flow)</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/blog/pmp-change-request-flow">PMP Change Request Flow</Link>
        </li>
        <li>
          <Link href="/blog/pmp-exam-day-strategy">PMP Exam-Day Strategy</Link>
        </li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        More:{' '}
        <Link href="/tags/execution" prefetch={false}>
          /tags/execution
        </Link>
      </p>
    </section>
  )
}
