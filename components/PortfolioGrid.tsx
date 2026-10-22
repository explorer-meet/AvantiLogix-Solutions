'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ImageIcon } from 'lucide-react';
import clsx from 'clsx';
import { PORTFOLIO } from '@/lib/portfolio';

const FILTERS = ['All', 'Apps', 'Websites'] as const;

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const projects = PORTFOLIO.filter((project) => filter === 'All' || project.category === filter);

  return (
    <section className="section" aria-label="Portfolio projects">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-ink-200 pb-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                aria-controls="portfolio-projects"
                onClick={() => setFilter(item)}
                className={clsx(
                  'min-h-11 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
                  filter === item ? 'bg-brand-600 text-white' : 'bg-white text-ink-700 hover:bg-brand-50 hover:text-brand-700'
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <p role="status" className="text-sm text-ink-600">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        <div id="portfolio-projects" className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-xl border border-ink-200 bg-white transition-shadow hover:shadow-soft">
              <Link href={`/portfolio/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden border-b border-ink-100 bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500">
                <Image
                  src={project.image}
                  alt={`${project.name} ${project.category === 'Apps' ? 'app' : 'website'} preview`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-contain p-3 transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                />
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">{project.category}</span>
                <h2 className="mt-3 font-display text-2xl font-medium text-ink-900">
                  <Link href={`/portfolio/${project.slug}`} className="hover:text-brand-700">{project.name}</Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link href={`/portfolio/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                    Project details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${project.name} image (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 text-sm text-ink-600 hover:text-brand-700">
                    <ImageIcon className="h-4 w-4" /> Preview
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
