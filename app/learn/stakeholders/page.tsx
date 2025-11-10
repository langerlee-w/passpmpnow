import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stakeholders · PMP Study Hub',
  description:
    'Everything you need for the Stakeholders performance domain: register, engagement plan, power-interest, communication, and exam-style examples.',
}

export default function StakeholdersPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Stakeholders</h1>
      <p>
        What the PMP really tests here: can you <strong>identify</strong>, <strong>analyze</strong>,
        and <strong>engage</strong> stakeholders so that value actually gets delivered?
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Stakeholder register (fields, examples, updates across phases)</li>
        <li>Power–Interest / Salience model — when to use which</li>
        <li>Engagement assessment matrix (Unaware → Leading)</li>
        <li>Communication channels & tailoring by persona</li>
        <li>Typical exam traps (scope creep vs. stakeholder request, change control)</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li>
          <a href="/blog/stakeholder-register-examples">Stakeholder Register: 7 Examples You Can Reuse</a>
        </li>
        <li>
          <a href="/blog/stakeholder-engagement-matrix-explained">Stakeholder Engagement Matrix (Quick Guide)</a>
        </li>
        <li>
          <a href="/blog/power-interest-vs-salience">Power–Interest vs. Salience: Which to Use When</a>
        </li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        More posts: <a href="/tags/stakeholders">/tags/stakeholders</a>
      </p>

      <h2>Exam-day checklist</h2>
      <ul>
        <li>Re-scan top 5 stakeholders’ objectives, constraints, and influence</li>
        <li>Confirm engagement level deltas (who moved from Resistant → Neutral?)</li>
        <li>Have 1–2 communication tactics per key persona</li>
      </ul>
    </section>
  )
}
