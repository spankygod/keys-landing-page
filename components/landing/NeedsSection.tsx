const services = [
  { name: 'Customer KYC', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { name: 'KYB Onboarding', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Sanctions Screening', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { name: 'Document + Biometrics', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Fraud Detection', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Ongoing Monitoring', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Risk Scoring', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { name: 'Consent + Sharing', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
];

export function NeedsSection() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow">Solution</p>
          <h2 className="text-5xl font-medium text-white tracking-tight sm:text-6xl">
            All your <span className="accent-italic">KYC needs.</span>
          </h2>
          <p className="max-w-3xl text-base text-white/60">
            Instead of building KYC in-house, teams integrate KEYS for lower cost than legacy providers,
            plus robust fraud detection and shared compliance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="card group flex flex-col items-center gap-4 p-6 text-center transition-all hover:border-[#89f336]/50"
            >
              <div className="h-16 w-16 rounded-full bg-[#89f336]/20 p-3 transition-all group-hover:bg-[#89f336]/30">
                <svg
                  className="h-full w-full text-[#89f336]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
