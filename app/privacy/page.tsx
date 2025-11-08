import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Pass PMP Now',
}

export default function PrivacyPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Privacy Policy</h1>

      <p>
        <em>Last updated: January 2025</em>
      </p>

      <p>
        At <strong>Pass PMP Now</strong> (<a href="https://passpmpnow.com">https://passpmpnow.com</a>), we respect your privacy. This policy explains what data we collect, how we use it, and the choices you have. This website serves visitors worldwide and is operated from the United States.
      </p>

      <h2>Data We Collect</h2>

      <h3>1) Google Analytics 4 (GA4)</h3>
      <p>
        We use Google Analytics to understand how users interact with this site. Google Analytics collects device type, browser type, approximate region, visit duration, pages visited, and links clicked. You can opt out here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
      </p>

      <h3>2) Email Subscriptions (Buttondown)</h3>
      <p>
        If you submit your email to subscribe, your email address is stored securely by Buttondown (our email service provider). We never sell email lists to third parties. You can unsubscribe anytime from any email you receive.
      </p>

      <h3>3) Comments (Giscus)</h3>
      <p>
        Comments are powered by Giscus, which is based on GitHub Discussions. Your use of comments is subject to GitHub’s privacy policies.
      </p>

      <h2>Cookies</h2>
      <p>We use cookies to remember preferences, analyze traffic, and improve user experience. You may disable cookies through your browser settings.</p>

      <h2>Third-Party Services We Use</h2>
      <ul>
        <li>Google Analytics 4 — traffic analytics</li>
        <li>Buttondown — email newsletter</li>
        <li>Giscus (GitHub) — blog comments</li>
      </ul>

      <h2>Children’s Privacy</h2>
      <p>The site is not directed to children under 13. We do not knowingly collect personal information from children.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this privacy policy periodically. When we do, we will update the “Last updated” date at the top.</p>

      <h2>Contact</h2>
      <p>
        If you have questions about this Privacy Policy:
        <br />
        Email: <a href="mailto:langer.lee@gmail.com">langer.lee@gmail.com</a>
        <br />
        Country: United States
      </p>
    </section>
  )
}
