import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { SITE } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="grid lg:grid-cols-12">
      <div className="relative overflow-hidden bg-brand-50 px-8 py-16 text-ink-900 md:px-14 md:py-20 lg:col-span-7">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover opacity-[0.08]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-brand-50/90" />

        <div className="relative mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:pr-10">
          <span className="text-sm font-medium text-brand-700">
            Ready when you are
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[0.98] sm:text-5xl md:text-6xl">
            Let&apos;s turn your roadmap into <span className="text-brand-600">shipped outcomes</span>.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-600">
            Whether you need a senior engineer next week or a full transformation program, our team is ready to move
            fast.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-white px-8 py-16 text-ink-900 md:px-12 md:py-20 lg:col-span-5">
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <Link
            href="/contact?interest=project"
            className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-brand-600 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Discuss a project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="mt-8 border-t border-ink-200">
            <a
              href={`tel:${SITE.phones[0]}`}
              className="flex items-center justify-between gap-4 border-b border-ink-200 py-4 transition-opacity hover:opacity-70"
            >
              <span className="flex items-center gap-3 text-xs font-medium text-ink-500">
                <Phone className="h-4 w-4" /> Phone
              </span>
              <span className="font-display text-sm font-bold">{SITE.phones[0]}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center justify-between gap-4 border-b border-ink-200 py-4 transition-opacity hover:opacity-70"
            >
              <span className="flex items-center gap-3 text-xs font-medium text-ink-500">
                <Mail className="h-4 w-4" /> Email
              </span>
              <span className="font-display text-sm font-bold">{SITE.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
