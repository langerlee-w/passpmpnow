import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delivery · PMP Study Hub',
  description:
    'Everything you need for the Delivery performance domain: value delivery, increments, acceptance criteria, change control, and exam-day checklists.',
}

export default function DeliveryPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Delivery</h1>

      <p>
        In the Delivery domain, PMP cares about whether the team can
        <strong> deliver usable value</strong> in agreed increments, meet acceptance
        criteria, and handle changes through a disciplined process.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Definition of Done vs. Acceptance Criteria</li>
        <li>Incremental delivery and verification/validation</li>
        <li>Change control (when to raise a CR, who approves, baselines)</li>
        <li>Tailoring delivery cadence (predictive / agile / hybrid)</li>
        <li>Done-but-not-accepted vs. blocked work — how to resolve</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/blog/pmp-change-request-flow">
            PMP Change Request Flow — quick visual & traps
          </Link>
        </li>
        <li>
          <Link href="/blog/pmp-exam-day-strategy">
            PMP Exam-Day Strategy — time boxes, flag & move, review
          </Link>
        </li>
        <li>
          <Link href="/blog/pmp-formulas-you-must-know">
            PMP Formulas You Must Know — earned value & forecasts
          </Link>
        </li>
      </ul>

      <h2>Delivery pitfalls on the exam</h2>
      <ul>
        <li>
          Shipping a feature that doesn’t match acceptance criteria is{' '}
          <em>not</em> “done”. Re-plan or raise a change — don’t bypass control.
        </li>
        <li>
          “Stakeholder asked for this” ≠ approved change. Use the formal CR flow.
        </li>
        <li>
          In hybrid, keep the predictive baselines but deliver increments with
          agile ceremonies — be explicit about which rules apply.
        </li>
      </ul>

      <h2>See also (related study posts)</h2>
      <ul>
        <li>
          <Link href="/blog/how-to-apply-for-pmp">
            How to Apply for PMP — application checklist
          </Link>
        </li>
        <li>
          <Link href="/blog/itto-patterns-for-pmp">
            ITTO Patterns for PMP — how to reason, not memorize
          </Link>
        </li>
        <li>
          <Link href="/blog/agile-vs-predictive-vs-hybrid-real-examples">
            Agile vs Predictive vs Hybrid — real examples
          </Link>
        </li>
      </ul>

      <h2>Exam-day checklist</h2>
      <ul>
        <li>Re-read acceptance criteria for the increment in the scenario</li>
        <li>Confirm if a change needs a formal CR → route to CCB</li>
        <li>State how “Done” is verified and validated (by whom, when)</li>
      </ul>
    </section>
  )
}
