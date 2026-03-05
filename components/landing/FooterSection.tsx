'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

// FAQ data from the Framer site
const faqs = [
  {
    id: 1,
    question: 'Why not use multiple KYC vendors directly?',
    answer:
      'Managing multiple providers adds complexity and compliance risk. KEYS unifies the workflow so you operate from one policy and one audit trail.',
  },
  {
    id: 2,
    question: 'Can we bring our existing providers?',
    answer:
      'Yes. KEYS works with popular identity providers and can integrate with your current stack.',
  },
  {
    id: 3,
    question: 'How do you handle data privacy?',
    answer:
      'Consent, encryption, and data minimization are built in. You control retention and access.',
  },
  {
    id: 4,
    question: 'Do you support KYB?',
    answer:
      'Yes. KEYS supports business verification, beneficial ownership, and entity screening.',
  },
  {
    id: 5,
    question: 'Is there a sandbox for testing?',
    answer: 'We provide a full sandbox environment so teams can validate flows before launch.',
  },
  {
    id: 6,
    question: 'What if our regulations change?',
    answer:
      'Policies are configurable and can be updated quickly without a rebuild.',
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition hover:bg-white/[0.02] px-4"
        aria-expanded={isOpen}
        aria-controls={`footer-faq-panel-${faq.id}`}
        id={`footer-faq-button-${faq.id}`}
        type="button"
      >
        <span className="pr-8 text-sm font-medium text-white/90">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transform text-white/50 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id={`footer-faq-panel-${faq.id}`}
        role="region"
        aria-labelledby={`footer-faq-button-${faq.id}`}
        aria-hidden={!isOpen}
      >
        <p className="px-4 text-sm leading-relaxed text-white/60">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      {/* FAQ Accordion Section */}
      <div className="container-tight">
        <div className="max-w-3xl py-20">
          <h2 className="mb-12 text-center font-display text-2xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/10">
        <div className="container-tight py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Brand */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="KEYS logo"
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
            />
          </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="#features"
                className="px-2 py-2 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white/80"
              >
                Platform
              </a>
              <a
                href="#benefits"
                className="px-2 py-2 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white/80"
              >
                Benefits
              </a>
              <a
                href="#features"
                className="px-2 py-2 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white/80"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-2 py-2 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white/80"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="px-2 py-2 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white/80"
              >
                FAQ
              </a>
            </nav>

            {/* CTA Button */}
            <button type="button" className="btn-outline">
              Book a call
            </button>
          </div>

          {/* Creator Credit */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-white/60">
              Built for modern compliance teams.
            </p>
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} KEYS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
