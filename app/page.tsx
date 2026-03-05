import {
  DesignEffortless,
  FaqSection,
  FinalCta,
  FooterSection,
  Hero,
  MarqueeSection,
  NeedsSection,
  PricingSection,
  QualitySection,
  ReasonsSection,
  Navigation,
} from "../components/landing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[#0a0a0a] text-white"
      >
        <Hero />
        <MarqueeSection />
        <DesignEffortless />
        <QualitySection />
        <ReasonsSection />
        <NeedsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
        <FooterSection />
      </main>
    </>
  );
}
