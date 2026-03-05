const trustedCompanies = [
  'F I N A N C E',
  'M O B I L I T Y',
  'R E T A I L',
  'H E A L T H',
  'G O V E R N M E N T',
  'L O G I S T I C S',
  'M A R K E T P L A C E S',
  'T E C H',
];

export function FeaturedMarquee() {
  return (
    <section className="section pt-10">
      <div className="container-tight">
        <p className="mb-6 text-center text-[12px] uppercase tracking-[0.35em] text-white/50">
          Trusted across modern industries:
        </p>
        <div className="border-y border-white/10 bg-white/[0.02] py-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {trustedCompanies.map((company) => (
              <span key={company} className="marquee-item">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
