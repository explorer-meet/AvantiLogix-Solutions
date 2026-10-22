import Link from 'next/link';
import { ArrowUpRight, Cpu, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';

const PATHS = [
  {
    icon: Users,
    eyebrow: 'For hiring managers',
    title: 'Hire technology talent',
    desc: 'Contract, contract-to-hire and direct-hire engineers, data, cloud and security specialists, plus managed talent pods.',
    points: ['Contract & contract-to-hire', 'Direct-hire & executive search', 'Managed talent pods'],
    href: '/contact?interest=staffing',
    cta: 'Request technology talent',
    more: { href: '/services#staffing', label: 'About staffing' },
  },
  {
    icon: Cpu,
    eyebrow: 'For technology leaders',
    title: 'Solve a technology challenge',
    desc: 'Advisory, engineering, cloud, data and AI delivery for teams modernizing platforms or launching new products.',
    points: ['Software & product engineering', 'Cloud, data & AI', 'Security & managed operations'],
    href: '/contact?interest=project',
    cta: 'Discuss your project',
    more: { href: '/services', label: 'Explore services' },
  },
];

export default function BuyerPaths() {
  return (
    <section className="section pb-0" aria-labelledby="buyer-paths-title">
      <div className="container-x">
        <h2 id="buyer-paths-title" className="sr-only">How can we help?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {PATHS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft sm:p-9">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-300 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center gap-3 text-sm font-medium text-brand-700">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon className="h-5 w-5" /></span>
                    {p.eyebrow}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-medium text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-ink-700">{p.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-800">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                    <Link href={p.href} className="btn-primary">
                      {p.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link href={p.more.href} className="text-sm font-medium text-ink-800 underline underline-offset-4 hover:text-brand-700">
                      {p.more.label}
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
