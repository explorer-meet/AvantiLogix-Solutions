import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';

export const metadata = { title: 'Terms of Service — AvantiLogix' };

const SECTIONS = [
  {
    title: 'Acceptance of terms',
    body: [
      `By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site. ${SITE.name} may update these terms from time to time, and continued use of the site constitutes acceptance of the revised terms.`,
    ],
  },
  {
    title: 'Use of this website',
    body: [
      'This website is provided for informational purposes about our services and how to get in touch with us. You agree not to misuse the site, attempt unauthorized access to our systems, or use the site in a way that could disable, overburden, or impair it.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      `All content on this site — including text, graphics, logos and the AvantiLogix name and mark — is the property of ${SITE.name} or its licensors and is protected by applicable intellectual property laws. You may not reproduce or redistribute this content without our prior written consent.`,
    ],
  },
  {
    title: 'Contact submissions',
    body: [
      'Information submitted through our contact page is used to respond to your inquiry, in line with our Privacy Policy. Submitting an inquiry does not guarantee an engagement.',
    ],
  },
  {
    title: 'No warranty & limitation of liability',
    body: [
      'This website and its content are provided "as is" without warranties of any kind, express or implied. To the fullest extent permitted by law, AvantiLogix is not liable for any indirect, incidental, or consequential damages arising from your use of this site.',
    ],
  },
  {
    title: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of New Jersey, USA, without regard to conflict-of-law principles.',
    ],
  },
  {
    title: 'Contact us',
    body: [
      `Questions about these Terms of Service can be directed to ${SITE.email} or ${SITE.address}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of the AvantiLogix website."
        crumbs={[{ label: 'Terms of Service' }]}
      />

      <section className="section pt-0">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="text-sm font-medium text-ink-500">Last updated: September 4, 2026</p>
          </Reveal>

          <div className="mt-8 space-y-10">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05}>
                <div className="border-b border-ink-100 pb-8 last:border-0">
                  <h2 className="font-display text-xl font-semibold text-ink-900">{s.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
