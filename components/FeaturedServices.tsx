'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const FEATURED_SLUGS = ['staffing', 'cloud-services', 'ai-ml', 'data-analytics'];

export default function FeaturedServices() {
  const featured = FEATURED_SLUGS.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(<T,>(s: T | undefined): s is T => !!s);

  return (
    <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
      {featured.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/services#${s.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-ink-200 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-soft">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image as string}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/25 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-display text-xs font-medium text-ink-900 backdrop-blur-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <h3 className="font-display text-2xl font-medium leading-[0.98] text-white">
                      {s.title}
                    </h3>
                    <Icon className="h-8 w-8 flex-shrink-0 text-brand-500" />
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm leading-relaxed text-ink-700">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 border-b border-ink-300 pb-1 text-sm font-medium text-ink-900 transition-colors group-hover:border-brand-500 group-hover:text-brand-700">
                    Explore practice
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
