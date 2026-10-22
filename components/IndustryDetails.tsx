import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { INDUSTRIES } from '@/lib/data';

const slugify = (name: string) => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function IndustryDetails() {
  return (
    <section className="section bg-ink-50" aria-labelledby="industry-challenges-title">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-brand-700">Where we can help</span>
          <h2 id="industry-challenges-title" className="mt-4 font-display text-3xl font-medium text-ink-900 sm:text-4xl">
            Common challenges by industry
          </h2>
          <p className="mt-3 text-sm text-ink-600">
            These are typical problems technology teams in each sector bring to us. Tell us about yours and we will
            scope how we can help.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 2) * 0.06}>
              <div id={slugify(ind.name)} className="h-full scroll-mt-32 rounded-xl border border-ink-200 bg-white p-7">
                <h3 className="font-display text-xl font-medium text-ink-900">{ind.name}</h3>
                <ul className="mt-4 space-y-2.5">
                  {ind.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-ink-800">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" strokeWidth={3} />
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?interest=project"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-900 underline underline-offset-4 hover:text-brand-700"
                >
                  Discuss a {ind.name.split(' ')[0].toLowerCase()} project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
