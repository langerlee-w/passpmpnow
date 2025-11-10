/* eslint-disable prettier/prettier */
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Uncertainty (Risk) · PMP Study Hub',
  description:
    'Threats and opportunities, qualitative/quantitative analysis, responses, and risk-adjusted plans.',
}

export default function UncertaintyPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Uncertainty (Risk)</h1>

      <p>
        PMP wants to see risk thinking everywhere: <strong>identify → analyze → plan responses → monitor</strong>, across threats <em>and</em> opportunities.
      </p>

      <h2>What to master</h2>
      <ul>
        <li>Risk register and risk breakdown structure</li>
        <li>Qualitative vs. quantitative analysis (when to use)</li>
        <li>Responses: Threat vs. Opportunity (avoid/mitigate/transfer vs. exploit/enhance/share)</li>
        <li>Risk-adjusted backlog and buffers</li>
      </ul>

      <h2>Start here</h2>
      <ul>
        <li><Link href="/blog/itto-patterns-for-pmp">ITTO Patterns for PMP</Link></li>
        <li><Link href="/blog/pmp-formulas-you-must-know">PMP Formulas You Must Know</Link></li>
      </ul>

      <h2>Browse by tag</h2>
      <p>
        More: <Link href="/tags/risk" prefetch={false}>/tags/risk</Link>
      </p>
    </section>
  )
}
