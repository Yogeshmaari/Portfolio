import { profile, stats } from '../data/profile'
import { ButtonLink } from './ui/Button'
import { Dot } from './ui/Chip'
import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.indigo.100),transparent)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.indigo.500/0.12),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="font-mono text-xs font-medium tracking-widest text-indigo-600 uppercase dark:text-accent-a-dark">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg font-semibold text-slate-700 sm:text-xl dark:text-slate-200">
          {profile.role}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#projects" variant="primary">
            View Projects
          </ButtonLink>
          <ButtonLink href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Contact Me
          </ButtonLink>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="hover:text-slate-800 dark:hover:text-slate-200">
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub <ArrowUpRightIcon className="h-3 w-3" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>

        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-8 dark:border-slate-800">
          {stats.map((s) => (
            <div key={s.l}>
              <dt className="sr-only">{s.l}</dt>
              <dd className="font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                {s.n}
              </dd>
              <dd className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.l}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-2">
            <Dot tone="a" /> Full Stack work
          </span>
          <span className="inline-flex items-center gap-2">
            <Dot tone="b" /> ERPNext work
          </span>
        </div>
      </div>
    </section>
  )
}
