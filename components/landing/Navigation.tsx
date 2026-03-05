'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-transparent" aria-label="Primary">
      <div className="mx-auto flex items-center justify-between px-[64px] py-6">
        {/* Logo with purple dot */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="KEYS logo"
            width={108}
            height={108}
            className="h-28 w-28 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
            >
              Platform
            </Link>
            <Link
              href="#benefits"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
            >
              Benefits
            </Link>
            <Link
              href="#pricing"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#pricing"
              className="rounded-full bg-[#89f336] px-[13px] py-[9px] text-[12px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_18px_rgba(137,243,54,0.45)] transition-all hover:bg-[#89f336] hover:shadow-[0_0_24px_rgba(137,243,54,0.6)]"
            >
              Request demo
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="group relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0a0a0a] backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-8">
            <Link
              href="#features"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              href="#benefits"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="#pricing"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="px-2 py-2 text-[12px] font-normal uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="#pricing"
                className="inline-block rounded-full bg-[#89f336] px-[13px] py-[9px] text-[12px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_18px_rgba(137,243,54,0.45)] transition-all hover:bg-[#89f336]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
