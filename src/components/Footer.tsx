import { certifications, education, profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              Education
            </h3>
            <ul className="mt-3 grid gap-1.5 text-sm text-slate-600 dark:text-slate-400">
              {education.map((e) => (
                <li key={e.title}>
                  {e.title} — {e.org}{' '}
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-600">({e.period})</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              Certifications
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{certifications.join(', ')} — HackerRank</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:text-slate-500">
          <span>
            © {year} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
