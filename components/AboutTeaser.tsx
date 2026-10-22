'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, ShieldCheck, Target, Users } from 'lucide-react';
import { VALUES } from '@/lib/data';

const valueIcons = [Users, Handshake, ShieldCheck, Target];
const highlights = VALUES.map((v, i) => ({ n: String(i + 1).padStart(2, '0'), title: v.title, Icon: valueIcons[i] }));

export default function AboutTeaser() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative pb-12 sm:pb-16">
              <div className="relative aspect-[5/4] w-[86%] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-office.jpg"
                  alt="Modern collaborative workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[52%] rounded-2xl border-4 border-canvas shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/about-team.jpg"
                    alt="AvantiLogix team in a planning session"
                    fill
                    sizes="(max-width: 1024px) 50vw, 26vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </motion.div>

          {/* Statement column */}
          <div className="lg:col-span-6 lg:self-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-brand-700"
            >
              About AvantiLogix
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-4 font-display text-4xl font-medium leading-[0.98] text-ink-900 sm:text-5xl"
            >
              A different kind of <span className="text-brand-500">technology partner</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-xl leading-relaxed text-ink-700"
            >
              AvantiLogix provides technology staffing, consulting, and solution delivery. We help organizations
              modernize platforms, strengthen engineering teams, and move important technology initiatives forward.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="group flex items-center gap-4 border-t border-ink-200 py-4 pr-4 transition-colors hover:border-brand-500"
                >
                  <span className="font-display text-sm font-medium text-brand-600">{h.n}</span>
                  <h.Icon className="h-5 w-5 flex-shrink-0 text-ink-500" />
                  <span className="font-display text-lg font-medium text-ink-900">
                    {h.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              More about us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
