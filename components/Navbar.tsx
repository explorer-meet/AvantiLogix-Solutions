'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE } from '@/lib/data';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'top-2 sm:top-3' : 'top-3 sm:top-5'
      )}
    >
      <div className={clsx(
        'mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink-200/90 bg-white px-3 shadow-soft transition-[height] duration-300 sm:mx-5 sm:px-5 lg:mx-auto lg:px-6',
        scrolled ? 'h-20' : 'h-24'
      )}>
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="AvantiLogix home"
        >
          <span className="inline-flex items-center py-1 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="AvantiLogix"
              width={1600}
              height={753}
              unoptimized
              className={clsx(
                'h-auto object-contain',
                scrolled ? 'w-36 sm:w-40' : 'w-40 sm:w-44'
              )}
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(`${l.href}/`));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'relative px-3 py-2 text-[13px] font-medium transition-colors',
                  active
                    ? 'text-brand-700'
                    : 'text-ink-700 hover:text-brand-600'
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-1 h-0.5 bg-brand-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phones[0]}`}
            className="hidden items-center gap-2 text-sm text-ink-700 transition-colors hover:text-brand-600 xl:flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.phones[0]}
          </a>
          <Link href="/contact?interest=staffing" className="inline-flex min-h-11 items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700">
            Request talent
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation"
            className="absolute inset-x-4 top-full mt-2 max-h-[calc(100svh-8rem)] overflow-y-auto rounded-2xl border border-ink-200 bg-white shadow-soft lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(`${l.href}/`));
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                      active
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-ink-700 hover:bg-ink-50'
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${SITE.phones[0]}`}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                <Phone className="h-4 w-4" />
                {SITE.phones[0]}
              </a>
              <Link
                href="/contact?interest=staffing"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full justify-center"
              >
                Request talent
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
