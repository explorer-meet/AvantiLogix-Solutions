import PageHeader from '@/components/PageHeader';
import ServicesGrid from '@/components/ServicesGrid';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Services — AvantiLogix',
  description:
    'Technology staffing, cloud, data and AI, cybersecurity, software engineering and advisory services from AvantiLogix.',
};

const FEATURED = SERVICES.filter((s) => s.featured);

const SERVICE_GROUPS = [
  {
    id: 'engineering-product',
    title: 'Engineering & Product',
    description: 'Advisory, product engineering, portals, business analysis, and healthcare technology.',
    slugs: ['it-strategy', 'software-development', 'startup-mvp', 'enterprise-portals', 'business-analysis', 'healthcare'],
  },
  {
    id: 'cloud-operations',
    title: 'Cloud & Operations',
    description: 'Cloud platforms, managed services, and process automation.',
    slugs: ['cloud-services', 'managed-it', 'rpa'],
  },
  {
    id: 'data-ai-analytics',
    title: 'Data, AI & Analytics',
    description: 'Data platforms, business intelligence, and applied AI/ML.',
    slugs: ['ai-ml', 'data-analytics', 'data-warehousing'],
  },
  {
    id: 'security-talent',
    title: 'Security & Talent',
    description: 'Cybersecurity expertise and technology staffing for flexible teams.',
    slugs: ['cybersecurity', 'staffing'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="One partner across the entire technology lifecycle"
        subtitle="Strategy, engineering, data, AI, cloud, security, automation and staffing — built into an integrated delivery model."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section pb-12">
        <div className="container-x">
          <nav
            aria-label="Service categories"
            className="sticky top-20 z-20 -mx-4 mb-12 flex gap-2 overflow-x-auto border-b border-ink-200 bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:px-0"
          >
            {SERVICE_GROUPS.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border border-ink-200 bg-white px-4 text-sm font-medium text-ink-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {group.title}
              </a>
            ))}
          </nav>

          <div className="mb-14">
            <h2 className="font-display text-2xl font-medium text-ink-900 sm:text-3xl">Our focus areas</h2>
            <p className="mt-2 text-sm text-ink-600">Technology staffing, cloud, and data and AI lead our offering. The rest of the catalogue follows below.</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {FEATURED.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.slug} className="flex flex-col rounded-xl border border-brand-200 bg-brand-50/60 p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-brand-600" />
                      <h3 className="font-display text-xl font-medium text-ink-900">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{s.short}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <Link href={`/contact?interest=${s.cta.interest}`} className="btn-primary !px-4 !py-2.5">
                        {s.cta.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <a href={`#${s.slug}`} className="text-sm font-medium text-ink-800 underline underline-offset-4 hover:text-brand-700">
                        Details
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-14">
            {SERVICE_GROUPS.map((group) => (
              <section key={group.id} id={group.id} tabIndex={-1} aria-labelledby={`${group.id}-title`} className="scroll-mt-44 focus:outline-none">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-ink-200 pb-4">
                  <div>
                    <h2 id={`${group.id}-title`} className="font-display text-2xl font-medium text-ink-900 sm:text-3xl">{group.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm text-ink-600">{group.description}</p>
                  </div>
                  <span className="text-sm text-ink-500">{group.slugs.length} capabilities</span>
                </div>
                <ServicesGrid serviceSlugs={group.slugs} />
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail rows */}
      <section className="section bg-ink-50">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><span className="eyebrow">In depth</span></Reveal>
            <p className="mt-3 text-sm text-ink-600">Full detail for every service above, with scope and a next step for each.</p>
            <Reveal delay={0.1}>
              <h2 className="h2 mt-5 text-balance">
                What you can <span className="gradient-text">expect from each practice</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 space-y-12">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const flipped = i % 2 === 1;
              const hasImage = !!s.image;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                  <div
                    id={s.slug}
                    tabIndex={-1}
                    className="group scroll-mt-44 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 grid items-stretch gap-0 overflow-hidden rounded-xl border border-ink-200 bg-white transition-all duration-300 hover:border-brand-300 hover:shadow-soft md:grid-cols-12"
                  >
                    {hasImage && (
                      <div className={`relative aspect-[4/3] md:aspect-auto md:col-span-5 ${flipped ? 'md:order-2' : ''}`}>
                        <Image
                          src={s.image as string}
                          alt={s.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/60 via-ink-950/10 to-transparent" />
                        <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 text-brand-600 shadow-soft backdrop-blur">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    )}
                    <div className={`p-8 md:p-12 ${hasImage ? 'md:col-span-7' : 'md:col-span-12'}`}>
                      {!hasImage && (
                        <div className="card-icon">
                          <Icon className="h-7 w-7" />
                        </div>
                      )}
                      <h3 className="h3 text-ink-900">{s.title}</h3>
                      <p className="mt-4 text-ink-700">{s.description}</p>
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 rounded-lg border border-ink-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
                          >
                            <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </span>
                            <span className="text-sm font-medium text-ink-800">{p}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/contact?interest=${s.cta.interest}`} className="btn-primary mt-8">
                        {s.cta.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
