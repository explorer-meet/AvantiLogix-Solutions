'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { INDUSTRIES } from '@/lib/data';

const industryVisuals: Record<string, string> = {
  'Healthcare & Life Sciences': '/images/case-healthcare.jpg',
  'Banking & Fintech': '/images/case-fintech.jpg',
  Insurance: '/images/case-insurance.jpg',
  'Retail & E-commerce': '/images/case-retail.jpg',
  Manufacturing: '/images/case-manufacturing.jpg',
  'Public Sector': '/images/case-public.jpg',
};

export default function IndustriesSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink-200 pb-7">
          <div>
            <span className="text-sm font-medium text-brand-700">
              Industries
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 font-display text-4xl font-medium leading-[0.98] text-ink-900 sm:text-5xl md:text-6xl"
            >
              Built for the <span className="text-brand-500">industries you serve</span>
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-600">
            We design engagements around the regulatory, data and operational realities of
            your sector.
          </p>
        </div>

        {/* Mosaic: the lead sector runs double-width, the rest tile beneath it */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            const src = industryVisuals[ind.name] ?? '/images/case-public.jpg';
            const lead = i === 0;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-xl bg-navy-900 text-white ${
                  lead ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${lead ? 'aspect-[4/3] md:h-full md:aspect-auto' : 'aspect-[4/3]'}`}>
                  <Image
                    src={src}
                    alt={ind.name}
                    fill
                    sizes={lead ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="object-cover saturate-[0.72] contrast-[1.04] brightness-[0.94] transition-[filter,transform] duration-[1.4s] ease-out group-hover:scale-105 group-hover:saturate-[0.86] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-navy-950/10 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-navy-950/5" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <Icon className="h-7 w-7 text-brand-500" />
                    <h3
                        className={`mt-4 font-display font-medium leading-[0.98] ${
                        lead ? 'text-2xl md:text-4xl' : 'text-lg'
                      }`}
                    >
                      {ind.name}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-white/80 ${
                        lead ? 'max-w-md text-sm md:text-base' : 'text-[13px]'
                      }`}
                    >
                      {ind.desc}
                    </p>
                    <div className="mt-5 h-1 w-10 bg-brand-500 transition-all duration-500 group-hover:w-24" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
