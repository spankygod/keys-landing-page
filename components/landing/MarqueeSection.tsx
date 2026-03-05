import Image from 'next/image';

const partners = [
  { name: 'AMD', src: '/assets/partners/amd.svg' },
  { name: 'Avax', src: '/assets/partners/avax.svg' },
  { name: 'Activition', src: '/assets/partners/activition.svg' },
  { name: 'Google', src: '/assets/partners/google.svg' },
  { name: 'Microsoft', src: '/assets/partners/microsoft.svg' },
  { name: 'Valve', src: '/assets/partners/valve.svg' },
];

export function MarqueeSection() {
  return (
    <div>
      <p className="mb-4 mt-6 text-center text-[18px] uppercase tracking-[0.35em] text-white/50">
        PARTNERS
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.src}
            alt={partner.name}
            width={180}
            height={96}
            sizes="(max-width: 640px) 120px, 160px"
            className="h-[96px] w-auto opacity-80 transition-opacity duration-300 hover:opacity-100"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        ))}
      </div>
    </div>
  );
}
