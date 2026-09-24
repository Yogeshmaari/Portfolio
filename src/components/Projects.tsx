import { profile, projects } from '../data/profile'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { ArrowUpRightIcon, GitHubIcon } from './icons'
import { SectionHeading } from './ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            subtitle="These are employer-owned codebases, so the code itself is private — descriptions below are accurate to what I built."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <GitHubIcon className="h-4 w-4" />
            <span>More on my profile:</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              github.com/Yogeshmaari <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
