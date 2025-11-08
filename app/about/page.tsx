import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Pass PMP Now',
}

export default function AboutPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>About</h1>
      <p>
        Hi — I’m Lee. I created <strong>Pass PMP Now</strong> because I’m also preparing for the PMP
        exam.
      </p>
      <p>
        I’m not a PMP teacher — I’m documenting the journey as a real learner. I write posts that go
        straight to the point: ITTO logic, memory tricks, strategy, question breakdowns, and things
        that actually move the score upward.
      </p>
      <p>The goal here is simple: get the PMP, and help other candidates pass it faster.</p>
      <p>
        If I improve 1% every day — and you improve 1% every day — eventually we both walk into the
        test center knowing we’re going to pass.
      </p>
      <p>
        Say hi or send suggestions: <a href="mailto:langer.lee@gmail.com">langer.lee@gmail.com</a>
      </p>
    </section>
  )
}
