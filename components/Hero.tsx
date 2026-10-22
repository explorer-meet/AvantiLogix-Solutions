import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate h-[calc(100svh-72px)] min-h-[600px] overflow-hidden bg-navy-950 text-white sm:h-[calc(100svh-88px)] sm:min-h-[640px] lg:h-[calc(100svh-104px)] lg:min-h-[680px]">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/images/avanti-hero-a.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/[0.82] via-navy-950/45 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/10" />
        <div className="glow-float absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-500/25 blur-[110px]" />
        <div className="glow-float absolute -right-24 top-10 h-[360px] w-[360px] rounded-full bg-navy-400/30 blur-[110px] [animation-delay:-6s]" />
      </div>

      <div className="container-x relative z-10 flex h-full items-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl">
          <div className="fade-up inline-flex items-center gap-2 text-sm font-medium text-white/85">
            <span className="h-px w-7 bg-brand-400" />
            Technology Staffing · Consulting · Delivery
          </div>

          <h1 style={{ ["--d" as string]: "0.1s" }} className="fade-up mt-5 max-w-[16ch] font-display text-5xl font-medium leading-[0.98] sm:text-6xl md:text-7xl">
            Build the right team. <span className="text-brand-400">Deliver what&apos;s next.</span>
          </h1>

          <p style={{ ["--d" as string]: "0.25s" }} className="fade-up mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Technology staffing, consulting, and solution delivery for businesses building and modernizing critical systems.
          </p>

          <div style={{ ["--d" as string]: "0.4s" }} className="fade-up mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact?interest=staffing"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              Hire technology talent
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact?interest=project"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/55 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            >
              Discuss a project
              <ChevronRight className="h-4 w-4 text-brand-300 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <Link
            href="/services"
            style={{ ["--d" as string]: "0.55s" }}
            className="fade-up mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            Explore capabilities
            <ArrowRight className="h-4 w-4 text-brand-300" />
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="scroll-cue absolute bottom-5 right-8 hidden h-9 w-5 rounded-full border border-white/50 p-1 lg:block" />
    </section>
  );
}