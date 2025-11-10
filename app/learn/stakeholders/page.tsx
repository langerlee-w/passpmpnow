import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stakeholders · PMP Study Hub',
  description:
    'Identify, analyze, and engage stakeholders: register, models, engagement matrix, and exam-focused examples.',
}

export default function StakeholdersPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Stakeholders</h1>

      <p>
        PMP focuses on whether you can <strong>identify</strong>, <strong>analyze</strong>, and
        <strong> engage</strong> stakeholders so value actually gets delivered.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Stakeholder register (fields, updates across phases)</li>
        <li>Power–Interest vs. Salience — which to use when</li>
        <li>Engagement assessment matrix (Unaware → Leading)</li>
        <li>Communication tailoring by persona</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/blog/stakeholder-register-examples">
            Stakeholder Register: 7 Examples You Can Reuse
          </Link>
        </li>
        <li>
          <Link href="/blog/stakeholder-engagement-matrix-explained">
            Stakeholder Engagement Matrix (Quick Guide)
          </Link>
        </li>
        <li>
          <Link href="/blog/power-interest-vs-salience">
            Power–Interest vs. Salience: Which to Use When
          </Link>
        </li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        More posts:{' '}
        <Link href="/tags/stakeholders" prefetch={false}>
          /tags/stakeholders
        </Link>
      </p>
    </section>
  )
}
