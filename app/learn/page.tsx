export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">PMP Study Hub</h1>
      <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
        Welcome! This hub organizes everything you need to pass the PMP exam —
        explained in simple language, visual frameworks, and practical examples.
      </p>

      <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
        Start here. Choose the topic you are currently studying:
      </p>

      <ul className="list-disc list-inside space-y-1 text-lg">
        <li>Stakeholders</li>
        <li>Team</li>
        <li>Development Approach & Life Cycle</li>
        <li>Planning</li>
        <li>Project Work</li>
        <li>Delivery</li>
        <li>Measurement</li>
        <li>Uncertainty (Risk)</li>
      </ul>
    </div>
  )
}
