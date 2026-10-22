'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2 } from 'lucide-react';

const inputCls =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15';

type Props = {
  contactEmail: string;
  defaultInterest?: string;
};

const TOPICS = [
  { value: 'staffing', label: 'Hire technology talent' },
  { value: 'project', label: 'Discuss a technology project' },
  { value: 'engineering', label: 'Engineering & product' },
  { value: 'cloud', label: 'Cloud & operations' },
  { value: 'data-ai', label: 'Data, AI & analytics' },
  { value: 'security', label: 'Cybersecurity' },
  { value: 'healthcare', label: 'Healthcare technology' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm({ contactEmail, defaultInterest }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState('');
  const topic = TOPICS.some((option) => option.value === defaultInterest)
      ? defaultInterest
      : '';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const selectedTopic = TOPICS.find((option) => option.value === formData.get('topic'))?.label ?? 'General inquiry';
    const value = (key: string) => String(formData.get(key) ?? '').trim();

    const next: Record<string, string> = {};
    if (!value('name')) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) next.email = 'Please enter a valid email address.';
    if (!value('message')) next.message = 'Please tell us how we can help.';
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus('idle');
      setErrorMsg('');
      return;
    }

    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: value('name'),
          email: value('email'),
          company: value('company'),
          topic: selectedTopic,
          message: value('message'),
          website: value('website'),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) setErrors(data.fields);
        setErrorMsg(data.fields ? 'Please correct the highlighted fields.' : '');
        setStatus(data.fields ? 'idle' : 'error');
        return;
      }
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const errCls = (key: string) => (errors[key] ? ' !border-red-500' : '');
  const fieldError = (key: string) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className="mt-1.5 text-xs font-medium text-red-600">{errors[key]}</p>
    ) : null;
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink-700">
            Full name <span className="text-brand-600">*</span>
          </label>
          <input id="contact-name" name="name" autoComplete="name" className={inputCls + errCls('name')} placeholder="Alex Patel" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink-700">
            Work email <span className="text-brand-600">*</span>
          </label>
          <input id="contact-email" name="email" type="email" autoComplete="email" className={inputCls + errCls('email')} placeholder="alex@company.com" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
          {fieldError('email')}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-ink-700">
            Company
          </label>
          <input id="contact-company" name="company" autoComplete="organization" className={inputCls} placeholder="Acme, Inc." />
        </div>
        <div>
          <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium text-ink-700">
            I&apos;m interested in
          </label>
          <select id="contact-topic" name="topic" className={inputCls} defaultValue={topic}>
            <option value="" disabled>Select a topic</option>
            {TOPICS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink-700">
          How can we help? <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={`${inputCls}${errCls('message')} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          placeholder="Share a few lines about your project, role or goal…"
          required
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-800">
          We couldn&apos;t send your message. Please try again, or email us directly at{' '}
          <a className="underline underline-offset-2" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </div>
      )}
      {errorMsg && <div role="alert" className="text-sm font-medium text-red-700">{errorMsg}</div>}

      {status === 'sent' ? (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <span>Thank you — your message has been sent. Our team will get back to you shortly.</span>
        </div>
      ) : (
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center !py-4 disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Send className="h-4 w-4" />
        </button>
      )}
      <p className="text-sm text-ink-700">
        Your enquiry will be reviewed by the relevant team, and we&apos;ll contact you about the next steps.
      </p>

      <p className="text-xs text-ink-500">
        By submitting this form you agree to our{' '}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-brand-600">
          privacy policy
        </Link>
        . We respect your inbox.
      </p>
    </form>
  );
}
