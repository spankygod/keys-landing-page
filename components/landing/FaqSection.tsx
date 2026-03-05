'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Why not build KYC in-house?',
    answer:
      'Building and maintaining KYC pipelines is expensive and time-consuming. KEYS gives you a unified layer that stays current with providers and policies.',
  },
  {
    question: 'Can we reuse a verified identity across partners?',
    answer:
      'Yes. KEYS enables consented identity sharing so customers verify once and reuse safely.',
  },
  {
    question: 'How fast can we go live?',
    answer: 'Most teams integrate the SDK and launch in days, not weeks.',
  },
  {
    question: 'What checks are supported?',
    answer:
      'Document verification, biometrics, liveness, sanctions, PEP, and ongoing monitoring.',
  },
  {
    question: 'Is KEYS compliant?',
    answer:
      'We provide audit trails, consent controls, and configurable policies to meet regional requirements.',
  },
  {
    question: 'Do you support enterprise needs?',
    answer:
      'Yes. We offer SLAs, dedicated support, and custom integrations for large deployments.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/10 py-20">
      <div className="container-tight">
        <div className="mb-8 text-center">
          <h2 className="eyebrow">FAQs</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 transition-all hover:border-white/20"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="text-sm font-medium text-white">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-white/60 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className="px-6 pb-6"
                hidden={openIndex !== index}
              >
                <p className="text-sm text-white/60">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
