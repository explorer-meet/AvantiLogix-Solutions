import IndustriesSection from '@/components/IndustriesSection';
import PageHeader from '@/components/PageHeader';
import IndustryDetails from '@/components/IndustryDetails';

export const metadata = {
  title: 'Industries — AvantiLogix',
  description:
    'Technology staffing and consulting for healthcare, banking, insurance, retail, manufacturing and public sector organizations.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Technology built around your industry"
        subtitle="We bring the right expertise to each engagement, combining proven engineering practices with the regulatory and operational realities of your sector."
        crumbs={[{ label: 'Industries' }]}
      />
      <IndustriesSection />
      <IndustryDetails />
    </>
  );
}
