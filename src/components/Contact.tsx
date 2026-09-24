import { type FormEvent, useState } from 'react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Button } from './ui/Button'
import { SectionHeading } from './ui/SectionHeading'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './icons'

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600 disabled:opacity-60'

const isFormConfigured = !profile.contactFormEndpoint.includes('YOUR_FORM_ID')

function mailtoHref(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`)
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!isFormConfigured) {
      // No form backend configured yet (see contactFormEndpoint in src/data/profile.ts).
      // Fall back to opening the visitor's email client rather than doing nothing.
      window.location.href = mailtoHref(name, email, message)
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(profile.contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const submitting = status === 'submitting'

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's talk" subtitle="Open to Full Stack and ERPNext development roles." />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="grid gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              >
                <MailIcon className="h-4.5 w-4.5 text-slate-400" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              >
                <PhoneIcon className="h-4.5 w-4.5 text-slate-400" />
                {profile.phone}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              >
                <GitHubIcon className="h-4.5 w-4.5 text-slate-400" />
                GitHub
                <ArrowUpRightIcon className="ml-auto h-3.5 w-3.5 text-slate-400" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              >
                <LinkedInIcon className="h-4.5 w-4.5 text-slate-400" />
                LinkedIn
                <ArrowUpRightIcon className="ml-auto h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </Reveal>

          <Reveal className="print:hidden">
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  required
                  disabled={submitting}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={submitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  disabled={submitting}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass}
                  placeholder="Tell me about the role or project"
                />
              </div>

              <Button type="submit" variant="primary" className="justify-self-start" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>

              {status === 'idle' && (
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {isFormConfigured
                    ? "Sends directly to me — I'll get back to you soon."
                    : 'Opens your email client with this message pre-filled — no data is stored on this site.'}
                </p>
              )}
              {status === 'success' && (
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {isFormConfigured
                    ? "Message sent — I'll get back to you soon."
                    : 'Opening your email client with this message pre-filled…'}
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-600 dark:text-red-400">
                  Something went wrong sending that.{' '}
                  <a href={mailtoHref(name, email, message)} className="underline underline-offset-2">
                    Email me directly instead
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
