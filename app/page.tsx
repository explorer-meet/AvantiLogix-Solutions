import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import AboutTeaser from '@/components/AboutTeaser';
import BuyerPaths from '@/components/BuyerPaths';
import CapabilityMarquee from '@/components/CapabilityMarquee';
import FeaturedServices from '@/components/FeaturedServices';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function SectionHead({
  label,
  title,
  accent,
  note,
}: {
  label: string;
  title: string;
  accent: string;
  note: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink-200 pb-7">
      <div className="max-w-2xl">
        <Reveal>
          <span className="text-sm font-medium text-brand-700">
            {label}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[0.98] text-ink-900 sm:text-5xl md:text-6xl">
            {title} <span className="text-brand-500">{accent}</span>
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="max-w-sm">
          <p className="text-sm leading-relaxed text-ink-600">{note}</p>
          <Link
            href="/services"
            className="group mt-4 inline-flex items-center gap-2 border-b border-ink-300 pb-1 text-sm font-medium text-ink-900 transition-colors hover:border-brand-500 hover:text-brand-700"
          >
            See all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityMarquee />
      <BuyerPaths />

      <AboutTeaser />

      <section id="portfolio" className="section scroll-mt-32 border-y border-ink-200 bg-brand-50">
        <div className="container-x flex flex-wrap items-center justify-between gap-7">
          <div className="max-w-2xl">
            <span className="eyebrow">Our portfolio</span>
            <h2 className="h2 mt-4">From mobile apps to business websites</h2>
            <p className="mt-5 leading-7 text-ink-600">Explore seven projects across mobile utilities, education, services, architecture, consulting, agriculture, and creative businesses.</p>
          </div>
          <Link href="/portfolio" className="btn-primary">
            Explore our portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-x">
          <SectionHead
            label="Our focus"
            title="Talent, cloud and data"
            accent="at the core"
            note="Technology staffing, cloud, and data and AI are where we focus. The full catalogue below covers the wider range of services."
          />
          <div className="mt-12">
            <FeaturedServices />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead
            label="What we do"
            title="Full-stack technology services,"
            accent="end to end"
            note="One accountable partner from technology strategy through delivery and operations."
          />
          <div className="mt-12">
            <ServicesGrid limit={6} showCta />
          </div>
        </div>
      </section>

      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
