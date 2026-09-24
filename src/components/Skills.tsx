import { skillGroups } from '../data/profile'
import { Reveal } from './Reveal'
import { Chip } from './ui/Chip'
import { SectionHeading } from './ui/SectionHeading'

const delays = ['delay-0', 'delay-75', 'delay-150', 'delay-200']

export function Skills() {
  return (
    <section id="skills" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="What I work with" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} className={delays[i] ?? ''}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-mono text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
