'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieIconProps {
  src: string;
  fallback?: React.ReactNode;
  loop?: boolean;
  className?: string;
}

function LottieIcon({ src, fallback, loop = false, className }: LottieIconProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch(src)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setAnimationData(data);
          setFailed(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setAnimationData(null);
          setFailed(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [src]);

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

  if (!animationData || failed) {
    return <div className="flex h-full w-full items-center justify-center">{fallback ?? null}</div>;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop && !prefersReducedMotion}
      autoplay={!prefersReducedMotion}
      className={className ?? "h-full w-full lottie-white"}
    />
  );
}

const steps = [
  {
    title: 'Connect',
    description: 'Connect your business, data sources, and compliance requirements in minutes.',
    icon: (
      <LottieIcon
        src="/assets/LUTS/link.json"
        className="h-full w-full"
        fallback={
          <Image
            src="/assets/LUTS/link.png"
            alt="Connect"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        }
      />
    ),
  },
  {
    title: 'Verify',
    description: 'Run KYC, KYB, and sanctions checks with a single unified flow.',
    icon: (
      <LottieIcon src="/assets/LUTS/check.json" className="h-full w-full" loop />
    ),
  },
  {
    title: 'Share',
    description: 'Reuse identity across partners while keeping consent and audit trails intact.',
    icon: (
      <LottieIcon src="/assets/LUTS/social-media.json" className="h-full w-full" loop />
    ),
  },
];

export function DesignEffortless() {
  return (
    <section id="features" className="section">
      <div className="container-tight">
        <div
          className="rounded-[28px] p-[1px]"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0))',
          }}
        >
          <div
            className="overflow-hidden rounded-[27px] p-8 sm:p-10 md:p-12"
            style={{
              background: 'linear-gradient(180deg, rgba(10,10,10,0.95), rgba(10,10,10,0.15))',
            }}
          >
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Process</p>
            <h2 className="text-5xl font-medium text-white tracking-tight sm:text-6xl">
              KYC onboarding, <span className="accent-italic">effortlessly.</span>
            </h2>
            <p className="max-w-2xl text-base text-white/60">
              Launch KEYS in three streamlined steps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="card p-6 text-center">
              <div className="mx-auto mb-5 h-20 w-20">
                {step.icon}
              </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <a href="#pricing" className="btn-primary">Request a demo</a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
