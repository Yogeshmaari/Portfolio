import type { Project } from '../data/profile'
import { Chip } from './ui/Chip'
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from './icons'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">
          {project.name}
        </h3>
        <Chip tone={project.track === 'erpnext' ? 'b' : 'a'}>{project.track === 'erpnext' ? 'ERPNext' : 'Full Stack'}</Chip>
      </div>

      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

      <ul className="mt-4 grid gap-1.5">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2 text-xs text-slate-500 dark:text-slate-500">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-slate-400 dark:bg-slate-600" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm dark:border-slate-800">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" /> Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-slate-400 dark:text-slate-600">
            <LockIcon className="h-4 w-4" /> {project.status}
          </span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Live Demo <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </div>
  )
}
