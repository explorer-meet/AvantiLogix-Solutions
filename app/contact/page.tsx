import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';
import { Mail, MapPin, Phone, Clock, Linkedin } from 'lucide-react';
import Image from 'next/image';

export const metadata = { title: 'Contact — AvantiLogix' };

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { interest?: string };
}) {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great together"
        subtitle="Share the role you need filled or the technology challenge you want to address. We’ll route your inquiry to the right team."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-xl border border-ink-200">
                <Image
                  src="/images/avanti-hero-a.jpg"
                  alt="Technology team collaborating"
                  width={900}
                  height={500}
                  className="h-56 w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-ink-900">Reach us directly</h3>
                <div className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-ink-600">Office</div>
                      <div className="mt-1 space-y-2 text-ink-900">
                        {(SITE.offices ?? [{ name: 'Office', address: SITE.address }]).map((office) => (
                          <div key={office.name}>
                            <div className="font-semibold">{office.name}</div>
                            <div>{office.address}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-ink-600">Phone</div>
                      <div className="mt-1 flex flex-wrap gap-x-3 text-ink-900">
                        {SITE.phones.map((p) => (
                          <a key={p} href={`tel:${p}`} className="hover:text-brand-600">{p}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-ink-600">Email</div>
                      <a href={`mailto:${SITE.email}`} className="mt-1 block text-ink-900 hover:text-brand-600">
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-ink-600">Hours</div>
                      <div className="mt-1 text-ink-900">Mon — Fri, 9:00 – 18:00 IST</div>
                    </div>
                  </div>
                </div>
                <div className="mt-7 flex gap-3 border-t border-ink-100 pt-6">
                  {[Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200 text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-ink-200">
                <iframe
                  title={`AvantiLogix ${SITE.offices[0].name} office`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                  width="100%"
                  height="240"
                  loading="lazy"
                  className="block"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-ink-900">Send us a message</h3>
              <p className="mt-2 text-sm text-ink-700">
                Fill in a few details and the right person on our team will get back to you.
              </p>
              <div className="mt-7">
                <ContactForm
                  contactEmail={SITE.email}
                  defaultInterest={searchParams?.interest}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
