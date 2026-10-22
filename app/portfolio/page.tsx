import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio — AvantiLogix',
  description: 'Explore AvantiLogix projects, from Android apps including ScreenPad and Prober Edu to websites for architecture, consulting, agriculture, and creative businesses.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our portfolio"
        title="Apps and websites built around real needs"
        subtitle="Explore our mobile apps and websites. Browse by category, view project details, and follow the links to the published apps and sites."
        crumbs={[{ label: 'Portfolio' }]}
      />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
