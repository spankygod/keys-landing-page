import Image from 'next/image';

const benefits = [
  {
    title: 'Verify Once, Reuse Everywhere',
    description: 'Create a single verified identity that can be reused across products and partners.',
  },
  {
    title: 'Shared Compliance Layer',
    description: 'Standardize KYC/KYB checks and policies without rebuilding for every integration.',
  },
  {
    title: 'Audit-Ready by Default',
    description: 'Keep consent, logs, and evidence in one place for faster reviews and reporting.',
  },
];

export function QualitySection() {
  return (
    <section id="benefits" className="section">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow">Benefits</p>
          <h2 className="text-5xl font-medium text-white tracking-tight sm:text-6xl">
            Fast, compliant, <span className="accent-italic">and unified.</span>
          </h2>
          <p className="max-w-3xl text-base text-white/60">
            KEYS replaces fragmented KYC stacks with one secure layer built for modern cities and digital services.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex justify-center sm:justify-end">
              <div className="relative h-[320px] w-[220px] sm:h-[420px] sm:w-[280px]">
                <Image
                  src="/assets/images/phones.webp"
                  alt="KEYS onboarding on mobile"
                  fill
                  sizes="(max-width: 640px) 200px, 260px"
                  className="object-contain object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-transparent p-5">
                <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
