import { experience } from '../data/profile'
import { Reveal } from './Reveal'
import { Dot } from './ui/Chip'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200 py-16 sm:py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            subtitle="Dots mark Full Stack work and ERPNext work."
          />
        </Reveal>

        <div className="divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {experience.map((job) => (
            <Reveal key={`${job.company}-${job.period}`}>
              <div className="grid gap-3 py-7 sm:grid-cols-[160px_1fr] sm:gap-8">
                <time className="font-mono text-xs text-slate-500 sm:pt-1 dark:text-slate-500">{job.period}</time>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {job.company}
                      {job.location ? `, ${job.location}` : ''}
                    </span>
                    <span className="ml-auto flex gap-1.5">
                      {(job.track === 'fullstack' || job.track === 'both') && <Dot tone="a" />}
                      {(job.track === 'erpnext' || job.track === 'both') && <Dot tone="b" />}
                    </span>
                  </div>
                  <ul className="grid gap-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-400 dark:bg-slate-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
