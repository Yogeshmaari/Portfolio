export function Chip({ children, tone = 'neutral' }: { children: string; tone?: 'neutral' | 'a' | 'b' }) {
  const tones = {
    neutral:
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    a: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30',
    b: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30',
  }
  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium whitespace-nowrap ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Dot({ tone = 'a' }: { tone?: 'a' | 'b' }) {
  const color = tone === 'a' ? 'bg-accent-a dark:bg-accent-a-dark' : 'bg-accent-b dark:bg-accent-b-dark'
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
}
