import { SERVICES } from '@/lib/data';

export default function CapabilityMarquee() {
  const items = SERVICES.map((s) => ({ slug: s.slug, title: s.title, Icon: s.icon }));
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map(({ slug, title, Icon }) => (
        <li key={slug} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/80">
          <Icon className="h-4 w-4 text-brand-400" />
          {title}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee relative overflow-hidden bg-navy-900 py-5" role="region" aria-label="Our capabilities">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
