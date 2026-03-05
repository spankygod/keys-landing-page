'use client';

import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';

export function Hero(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/assets/hero.mp4"
          loop={!prefersReducedMotion}
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/55 via-[#050505]/30 to-[#050505]/80" />
      </div>

      <div className="container-tight relative z-10">
        <div className="flex flex-col justify-center pb-20 pt-[clamp(6rem,14vh,12rem)] md:pb-28 md:pt-[clamp(7rem,16vh,13rem)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge-primary">Unified KYC layer</span>
          </div>

          <div className="mt-6 max-w-[980px]">
            <h1 className="text-balance font-display text-[clamp(46px,7vw,108px)] leading-[1.05] tracking-[-0.04em]">
              <span className="accent-italic text-white/90">One Identity</span><br /> for a<br />
              Modern City.
            </h1>
            <p className="mt-6 max-w-[680px] text-[clamp(18px,2.4vw,28px)] text-white/70">
              KEYS is a unified KYC layer businesses use to verify customers once, reuse identity
              everywhere, and meet compliance requirements across partners and services.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="btn-primary-lg"
            >
              Request a demo
            </a>
            <a
              href="#features"
              className="btn-ghost"
            >
              See how it works
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
