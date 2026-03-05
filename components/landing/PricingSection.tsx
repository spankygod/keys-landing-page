const features = [
  { title: 'Unified KYC + KYB flows' },
  { title: 'Reusable identity vault' },
  { title: 'Sanctions & watchlist screening' },
  { title: 'Document + biometric checks' },
  { title: 'Consent & audit logs' },
  { title: 'Partner sharing controls' },
  { title: 'SLA-backed support' },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="text-5xl font-medium text-white tracking-tight sm:text-6xl">
            Pricing that&apos;s <span className="accent-italic">simple.</span>
          </h2>
          <p className="max-w-2xl text-base text-white/60">
            One unified plan for businesses rolling out modern KYC.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Pricing Card */}
          <div className="card relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,20,217,0.35),transparent_60%)]" />

            <div className="relative z-10">
              {/* Urgency Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#89f336]" />
                <span className="text-[12px] uppercase tracking-[0.2em] text-white/80">Priority onboarding</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-white">$2,989</span>
                <span className="text-lg text-white/60">/month</span>
              </div>

              <p className="mt-4 text-sm text-white/60">
                Covers your core KYC stack. Scale usage as you grow.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-[#89f336] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_18px_rgba(137,243,54,0.5)] transition-all hover:bg-[#89f336]"
                >
                  Get started
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/10 px-6 py-3 text-center text-sm text-white/70 transition-all hover:border-white/30 hover:text-white"
                >
                  Book a call
                </a>
              </div>

              {/* Add-on */}
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#89f336]/20">
                      <svg
                        className="h-full w-full p-2.5 text-[#89f336]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Global Coverage</p>
                      <p className="text-xs text-white/50">Expanded regions & providers</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-white">+ $500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="card p-8">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">What&apos;s included</h3>
              <p className="mt-2 text-sm text-white/60">
                Everything you need to launch compliant onboarding.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-[#89f336]/20">
                    <svg className="h-full w-full p-1 text-[#89f336]" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-white/80">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/60">Trusted by modern businesses across finance, mobility, and retail.</p>
        </div>
      </div>
    </section>
  );
}
