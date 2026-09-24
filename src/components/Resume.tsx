import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { ButtonLink } from './ui/Button'
import { DownloadIcon } from './icons'

export function Resume() {
  return (
    <section id="resume" className="border-b border-slate-200 bg-slate-900 py-14 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white sm:text-2xl">
                Want the full picture?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Get the one-page resume — Full Stack and ERPNext experience, skills, and education.
              </p>
            </div>
            <ButtonLink
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="shrink-0 bg-white text-slate-900 hover:bg-slate-200"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
