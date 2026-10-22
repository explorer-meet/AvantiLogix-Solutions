import PageHeader from '@/components/PageHeader';
import ProcessSection from '@/components/ProcessSection';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { SITE, VALUES } from '@/lib/data';
import { Target, Eye, Route, BadgeCheck, Heart, Compass } from 'lucide-react';
import Image from 'next/image';

const valueIcons = [Heart, Compass, Target, Eye];

const PILLARS = [
  {
    title: 'Mission',
    icon: Target,
    body: 'Turn business priorities into measurable technology outcomes with speed, precision and accountability.',
  },
  {
    title: 'Vision',
    icon: Eye,
    body: 'Become the most trusted transformation partner for enterprises navigating rapid digital change.',
  },
  {
    title: 'Approach',
    icon: Route,
    body: 'Blend consulting clarity with execution rigor through transparent plans, milestones and shared governance.',
  },
  {
    title: 'Promise',
    icon: BadgeCheck,
    body: 'Operate as one team with our clients and deliver dependable outcomes without surprises or compromise.',
  },
];

export const metadata = { title: 'About Us — AvantiLogix' };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About AvantiLogix"
        title="Built for Complex Delivery. Trusted for Real Outcomes."
        subtitle="AvantiLogix supports enterprises with technology staffing, consulting and solution delivery designed for speed, reliability and business impact."
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-ink-200 md:aspect-[4/3]">
                <Image
                  src="/images/avanti-hero-b.jpg"
                  alt="AvantiLogix team collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.6s] hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Our story</span>
            <h2 className="h2 mt-5 text-balance">
              Strategy-grade thinking, <span className="gradient-text">execution-grade delivery</span>
            </h2>
            <p className="mt-6 text-ink-700">
              AvantiLogix works at the intersection of technology consulting and delivery operations. We help organizations
              modernize platforms, strengthen engineering teams, and ship programs that are aligned to business timelines instead of
              isolated technical milestones.
            </p>
            <p className="mt-5 text-ink-700">
              Our model combines domain consultants, solution architects, and delivery-ready specialists who integrate with your team
              structure. The result is faster execution, lower delivery risk, and better continuity across initiatives.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <div className="grid border-y border-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.title}
                  delay={i * 0.08}
                  y={16}
                  className={`group py-6 transition-colors ${i > 0 ? 'border-t border-ink-200 sm:border-t-0 lg:border-l lg:pl-6' : ''} ${i % 2 === 1 ? 'sm:border-l sm:pl-6' : ''} ${i > 1 ? 'sm:border-t' : ''} lg:border-t-0 ${i === 0 ? 'lg:pl-0' : ''}`}
                >
                  <span
                    className="inline-grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 group-hover:bg-brand-100"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
                  <div aria-hidden="true" className="mt-5 h-px w-full bg-ink-100">
                    <div className="h-full w-8 bg-brand-400 transition-all duration-500 group-hover:w-16" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Office banner */}
        <div className="container-x mt-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/avanti-hero-c.jpg"
                alt="Inside the AvantiLogix office"
                width={1600}
                height={700}
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/50 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex items-center p-8 md:p-14">
                <div className="max-w-md text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300 backdrop-blur">
                    Our {SITE.offices[0].name} office
                  </span>
                  <h3 className="font-display mt-5 text-3xl font-bold leading-tight md:text-4xl">
                    Built for <span className="text-brand-400">high-velocity collaboration</span>
                  </h3>
                  <p className="mt-4 text-ink-200/85">
                    Our teams operate through collaborative pods, focused delivery rituals, and clear accountability loops so
                    consultants and client stakeholders stay aligned from kickoff through launch.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><span className="eyebrow">Our values</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2 mt-5 text-balance">
                The behaviors behind <span className="gradient-text">every engagement</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft">
                    <div className="card-icon">{Icon ? <Icon className="h-6 w-6" /> : null}</div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}
