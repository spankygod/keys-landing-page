import Image from 'next/image';

const tiles = [
  { title: 'Onboarding Flow', image: '/assets/support/player-dash.png' },
  { title: 'Business Console', image: '/assets/support/storefront.png' },
  { title: 'Risk Signals', image: '/assets/support/retention.png' },
  { title: 'Partner Share', image: '/assets/support/battle-pass.png' },
  { title: 'Audit Trail', image: '/assets/support/daily-ops.png' },
  { title: 'Consent Vault', image: '/assets/support/clans.png' },
];

export function WorkGallery() {
  return (
    <section className="section pt-6">
      <div className="relative w-full min-h-[260px] overflow-hidden py-8 sm:min-h-[300px] sm:py-10 mx-[calc(50%-50vw)]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-72 bg-gradient-to-r from-black via-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-72 bg-gradient-to-l from-black via-[#050505] to-transparent" />
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {tiles.map((tile) => (
              <div
                key={tile.title}
                className="card relative h-[200px] w-[320px] overflow-hidden p-0"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

