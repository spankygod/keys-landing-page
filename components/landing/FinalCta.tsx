export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden pb-24 pt-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-140px] left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle,rgba(137,243,54,0.45),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-[-140px] left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle,rgba(137,243,54,0.3),transparent_70%)]" />
      </div>
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/70 p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(137,243,54,0.25),transparent_70%)]" />
          <div className="relative z-10">
            <p className="eyebrow">Ready to unify identity?</p>
            <h2 className="mt-4 text-5xl font-medium text-white tracking-tight sm:text-6xl">Start with KEYS.</h2>
            <p className="mt-3 text-base text-white/60">
              Launch a modern KYC layer for your business and partners.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-[#89f336] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_18px_rgba(137,243,54,0.5)] transition-all hover:bg-[#89f336]"
              >
                Request a demo
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition-all hover:border-white/30 hover:text-white"
              >
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
