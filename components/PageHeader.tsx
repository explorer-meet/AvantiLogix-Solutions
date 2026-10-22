'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
};

export default function PageHeader({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-canvas pb-8 pt-36 text-ink-900 sm:pb-10 sm:pt-40">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_90%)]" />
      <div aria-hidden="true" className="glow-float pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-[90px]" />
      <div className="container-x relative">
        {crumbs && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-ink-500">
              <Link href="/" className="transition-colors hover:text-brand-700">
                Home
              </Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-brand-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink-900">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-700">
              <span className="h-px w-6 bg-brand-500" />
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[0.98] text-ink-900 sm:text-5xl md:text-5xl">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-3 max-w-2xl border-l-2 border-brand-500 pl-5 text-base leading-7 text-ink-600">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
