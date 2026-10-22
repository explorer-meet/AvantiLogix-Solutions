import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Linkedin, ArrowUpRight } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-brand-500 bg-brand-800 text-ink-200">
      <div className="container-x relative pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex max-w-full items-center rounded-lg bg-white px-5 py-3 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="AvantiLogix home"
            >
              <Image
                src="/logo.png"
                alt="AvantiLogix"
                width={1600}
                height={753}
                unoptimized
                className="h-auto w-56 max-w-full object-contain lg:w-60"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-200/80">{SITE.description}</p>

            <div className="mt-8 space-y-4 text-sm">
              {SITE.offices.map((office) => (
                <div key={office.name} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-200" />
                  <span className="text-ink-200/85">
                    <span className="font-medium text-white">{office.name}:</span> {office.address}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-200" />
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-ink-200/85 hover:text-white">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-200" />
                <a href={`mailto:${SITE.email}`} className="text-ink-200/85 hover:text-white">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="font-display text-lg font-medium text-white">Company</div>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-200/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-lg font-medium text-white">Services</div>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-ink-200/80 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-lg font-medium text-white">Let&apos;s build something</div>
            <p className="mt-5 text-sm text-ink-200/80">Have a project, role to hire for, or transformation goal in mind?</p>
            <Link
              href="/contact?interest=project"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              Discuss a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  Icon: Linkedin,
                  href: SITE.social.linkedin,
                  label: 'LinkedIn',
                  style: 'text-white bg-white/10 border-white/40 hover:bg-white hover:text-brand-800',
                },
              ].map(({ Icon, href, label, style }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`grid h-10 w-10 place-items-center border-2 transition-all hover:-translate-y-0.5 ${style}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-ink-200/70 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} AvantiLogix. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
