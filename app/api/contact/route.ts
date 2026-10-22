import { NextResponse } from 'next/server';
import { SITE } from '@/lib/data';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 254, company: 160, topic: 80, message: 5000 };

const DUPLICATE_WINDOW_MS = 60_000;
const recent = new Map<string, number>();

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.replace(/\r/g, '').trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success without sending.
  if (clean(payload.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(payload.name, LIMITS.name);
  const email = clean(payload.email, LIMITS.email);
  const company = clean(payload.company, LIMITS.company);
  const topic = clean(payload.topic, LIMITS.topic) || 'General inquiry';
  const message = clean(payload.message, LIMITS.message);

  const fields: Record<string, string> = {};
  if (!name) fields.name = 'Please enter your name.';
  if (!email || !EMAIL_RE.test(email)) fields.email = 'Please enter a valid email address.';
  if (!message) fields.message = 'Please tell us how we can help.';
  if (Object.keys(fields).length) {
    return NextResponse.json({ error: 'Please correct the highlighted fields.', fields }, { status: 400 });
  }

  // Best-effort duplicate guard (per server instance): ignore an identical resubmission within 60s.
  const key = `${email.toLowerCase()}|${message}`;
  const now = Date.now();
  for (const [k, t] of recent) if (now - t > DUPLICATE_WINDOW_MS) recent.delete(k);
  if (recent.has(key)) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || SITE.email;
  if (!apiKey || !from) {
    console.error('Contact form is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
    return NextResponse.json({ error: 'Messaging is temporarily unavailable.' }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '-'}`,
    `Interest: ${topic}`,
    '',
    message,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `AvantiLogix inquiry: ${topic}`.replace(/[\r\n]+/g, ' '),
        text,
      }),
    });
    if (!res.ok) {
      console.error('Contact email provider error', res.status, await res.text());
      return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
    }
    recent.set(key, now);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email request failed', error);
    return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
  }
}
