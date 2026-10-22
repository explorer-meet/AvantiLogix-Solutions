'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/data';

export default function ProcessSection() {
  return (
    <section className="section bg-brand-50 text-ink-900">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-brand-700">
            Our approach
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 font-display text-4xl font-medium leading-[0.98] sm:text-5xl md:text-6xl"
          >
            A proven path from <span className="text-brand-500">idea to outcome</span>
          </motion.h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-500">
            Four crisp phases keep delivery transparent, predictable and tied to business impact.
          </p>
        </div>

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-0 hidden h-px origin-left bg-ink-200 md:block"
          />

          <div className="grid md:grid-cols-4">
            {PROCESS_STEPS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-t border-ink-200 pr-8 pt-8 md:border-t-0 md:pt-10"
              >
                <span className="font-display text-5xl font-medium leading-none text-brand-300 transition-colors duration-300 group-hover:text-brand-600 sm:text-6xl">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
