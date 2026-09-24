import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-16 sm:py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="About" title="Development-first, across the stack" />
          <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
