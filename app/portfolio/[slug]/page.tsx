import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { PORTFOLIO } from '@/lib/portfolio';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return PORTFOLIO.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PORTFOLIO.find(({ slug }) => slug === params.slug);
  if (!project) notFound();
  return {
    title: `${project.name} — AvantiLogix Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} — AvantiLogix Portfolio`,
      description: project.description,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default function PortfolioProjectPage({ params }: Props) {
  const project = PORTFOLIO.find(({ slug }) => slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        eyebrow={project.category === 'Apps' ? 'Mobile application' : 'Website'}
        title={project.name}
        subtitle={project.description}
        crumbs={[{ label: 'Portfolio', href: '/portfolio' }, { label: project.name }]}
      />
      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ink-200 bg-white lg:col-span-8">
            <Image src={project.image} alt={`${project.name} project preview`} fill priority sizes="(max-width: 1023px) 100vw, 66vw" className="object-contain p-5" />
          </div>
          <div className="rounded-xl border border-ink-200 bg-white p-7 lg:col-span-4">
            <h2 className="font-display text-3xl font-medium text-ink-900">Project overview</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Project</dt>
                <dd className="mt-1 text-ink-900">{project.name}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Category</dt>
                <dd className="mt-1 text-ink-900">{project.category === 'Apps' ? 'Android app' : 'Website'}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-7 text-ink-600">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full" aria-label={`${project.category === 'Apps' ? 'View on Google Play' : 'Visit website'} (opens in a new tab)`}>
              {project.category === 'Apps' ? 'View on Google Play' : 'Visit website'}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/contact?interest=project" className="btn-secondary mt-3 w-full">Discuss a similar project</Link>
            <Link href="/portfolio" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800">
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
