export const metadata = {
  title: 'Contact',
  description: 'Contact Pass PMP Now',
}

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
        Contact
      </h1>

      <p className="mb-6 leading-7 text-lg">
        Thanks for reading Pass PMP Now! I'm currently preparing for the PMP and I’m documenting the journey — notes, breakdowns, exam strategy, study plans, and summaries.
      </p>

      <p className="mb-6 leading-7 text-lg">
        If you have suggestions, corrections, want to collaborate, or have sponsorship/partnership opportunities, feel free to reach out.
      </p>

      <p className="mb-6 leading-7 text-lg">
        <strong>Email:</strong>{' '}
        <a className="text-blue-600 underline" href="mailto:langer.lee@gmail.com">
          langer.lee@gmail.com
        </a>
      </p>

      <p className="mb-6 leading-7 text-lg">
        I read every email — but please allow up to 2–3 days response time.
      </p>

      <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
        United States — serving PMP candidates worldwide 🌍
      </p>
    </section>
  )
}
