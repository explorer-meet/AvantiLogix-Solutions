'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';

type Props = {
  serviceSlugs?: string[];
  limit?: number;
  showCta?: boolean;
};

export default function ServicesGrid({ serviceSlugs, limit, showCta }: Props) {
  const matchingServices = serviceSlugs
    ? SERVICES.filter((service) => serviceSlugs.includes(service.slug))
    : SERVICES;
  const items = limit ? matchingServices.slice(0, limit) : matchingServices;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/services#${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-display text-xs font-medium text-ink-900 backdrop-blur-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <h3 className="font-display text-xl font-medium leading-[1.02] text-white">
                    {s.title}
                  </h3>
                  <Icon className="h-6 w-6 flex-shrink-0 text-brand-500" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-ink-700">{s.short}</p>
                <span className="mt-auto inline-flex items-center gap-2 self-start border-b border-ink-300 pb-1 pt-5 text-sm font-medium text-ink-900 transition-colors group-hover:border-brand-500 group-hover:text-brand-700">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        );
      })}

      {showCta && (
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center rounded-xl border border-brand-200 bg-brand-50 p-8 text-ink-900"
        >
          <h3 className="font-display text-2xl font-medium leading-tight">
            Need help with a project?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            Share your goals and we&apos;ll help identify a useful next step.
          </p>
          <Link
            href="/contact?interest=project"
            className="group mt-6 inline-flex items-center justify-between gap-2 self-start rounded-full bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Discuss a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
