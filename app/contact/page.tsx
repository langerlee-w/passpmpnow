import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Pass PMP Now',
}

export default function ContactPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Contact</h1>
      <p>
        Thanks for reading <strong>Pass PMP Now</strong>! I’m preparing for the PMP and documenting
        the journey—notes, breakdowns, exam strategy, study plans, and summaries.
      </p>
      <p>
        If you have suggestions, corrections, want to collaborate, or have sponsorship/partnership
        opportunities, feel free to reach out.
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:langer.lee@gmail.com">langer.lee@gmail.com</a>
      </p>
      <p>I read every message. Please allow up to 2–3 days for a reply.</p>
      <p>United States — serving PMP candidates worldwide 🌍</p>
    </section>
  )
}
