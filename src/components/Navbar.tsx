import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#erpnext', label: 'ERPNext' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur-sm print:static print:backdrop-blur-none dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-sm font-semibold text-slate-900 dark:text-white"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex dark:text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-slate-900 dark:hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 md:hidden print:hidden dark:border-slate-700 dark:text-slate-300"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1">
              <span className={`h-0.5 w-4.5 bg-current transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`h-0.5 w-4.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-4.5 bg-current transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
