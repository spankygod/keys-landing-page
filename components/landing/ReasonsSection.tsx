const features = [
  {
    title: 'Unified Identity Graph',
    description: 'Connect individuals, businesses, and devices into one verified profile.',
    icon: (
      <svg className="h-full w-full p-3 text-[#89f336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Instant Verification',
    description: 'Automate document checks, biometrics, and liveness in real time.',
    icon: (
      <svg className="h-full w-full p-3 text-[#89f336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Policy Orchestration',
    description: 'Define KYC rules once and apply them across every channel and partner.',
    icon: (
      <svg className="h-full w-full p-3 text-[#89f336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Compliance Monitoring',
    description: 'Ongoing screening with audit-ready trails and regulatory reporting.',
    icon: (
      <svg className="h-full w-full p-3 text-[#89f336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Consent & Privacy',
    description: 'Give customers control while keeping your teams aligned on data usage.',
    icon: (
      <svg className="h-full w-full p-3 text-[#89f336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Partner Sharing',
    description: 'Share verified identity with approved partners without re-collecting data.',
    icon: (
      <svg className="h-full w-full p-3 text-[#89f336]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function ReasonsSection() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="card rounded-3xl p-8 sm:p-10 md:p-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Features</p>
            <h2 className="text-5xl font-medium text-white tracking-tight sm:text-6xl">
              Reasons teams <span className="accent-italic">choose KEYS.</span>
            </h2>
            <p className="max-w-2xl text-base text-white/60">
              A single KYC layer that scales with your business and your city.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6">
                <div className="mb-5 h-12 w-12 rounded-full bg-[#89f336]/20">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <a href="#pricing" className="btn-primary">Book a 15‑min call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
