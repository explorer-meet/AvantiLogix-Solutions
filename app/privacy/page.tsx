import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';

export const metadata = { title: 'Privacy Policy — AvantiLogix' };

const SECTIONS = [
  {
    title: 'Information we collect',
    body: [
      'We collect information you provide directly to us, such as your name, email address, phone number, company, and any details you share through our contact form or when corresponding with us by email or phone.',
      'We also collect limited technical information automatically — such as browser type, device information, pages visited, and referring URLs — to help us understand site usage and improve performance.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'To respond to inquiries, proposals, and job applications submitted through this website.',
      'To operate, maintain, and improve our services, website, and client communications.',
      'To send relevant updates about our services when you have opted in to hear from us.',
      'To comply with legal obligations and protect the rights and safety of AvantiLogix and its clients.',
    ],
  },
  {
    title: 'How we share information',
    body: [
      'We do not sell your personal information. We may share information with trusted service providers who support our operations (such as hosting and email delivery), and with clients when relevant to a staffing or project engagement you have applied for, always under confidentiality obligations.',
    ],
  },
  {
    title: 'Data retention & security',
    body: [
      'We retain personal information only as long as necessary for the purposes described in this policy or as required by law, and we use reasonable administrative and technical safeguards to protect it against unauthorized access, disclosure, or misuse.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      `You may request access to, correction of, or deletion of your personal information at any time by emailing us at ${SITE.email}. You may also unsubscribe from marketing communications using the link included in those emails.`,
    ],
  },
  {
    title: 'Contact us',
    body: [
      `Questions about this Privacy Policy can be directed to ${SITE.email} or ${SITE.address}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How AvantiLogix collects, uses and protects your information."
        crumbs={[{ label: 'Privacy Policy' }]}
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
