import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';

export const metadata = { title: 'Cookie Policy — AvantiLogix' };

const COOKIE_TYPES = [
  {
    title: 'Essential cookies',
    body: 'Required for the website to function correctly — such as remembering navigation state. These cannot be disabled.',
  },
  {
    title: 'Analytics cookies',
    body: 'Help us understand how visitors use the site (pages viewed, time on site) so we can improve content and performance. Used only in aggregate.',
  },
  {
    title: 'Preference cookies',
    body: 'Remember choices you make on the site, such as form inputs, to make future visits more convenient.',
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="How AvantiLogix uses cookies on this website."
        crumbs={[{ label: 'Cookie Policy' }]}
      />

      <section className="section pt-0">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="text-sm font-medium text-ink-500">Last updated: September 4, 2026</p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 text-sm leading-relaxed text-ink-700">
              Cookies are small text files stored on your device that help websites function and
              remember information about your visit. This page explains what cookies we use on{' '}
              {SITE.name}&apos;s website and why.
            </p>
          </Reveal>

          <div className="mt-8 space-y-6">
            {COOKIE_TYPES.map((c, i) => (
              <Reveal key={c.title} delay={0.05 + i * 0.05}>
                <div className="rounded-2xl border border-ink-200/70 bg-white p-6">
                  <h2 className="font-display text-lg font-semibold text-ink-900">{c.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mt-10 border-t border-ink-100 pt-8">
              <h2 className="font-display text-xl font-semibold text-ink-900">Managing cookies</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Most browsers let you control cookies through their settings — you can block or
                delete cookies at any time, though doing so may affect how parts of this site
                function. For questions about this policy, contact us at{' '}
                <a href={`mailto:${SITE.email}`} className="text-brand-600 underline underline-offset-4">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
