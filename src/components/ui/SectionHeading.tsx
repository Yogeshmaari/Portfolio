export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs font-medium tracking-widest text-indigo-600 uppercase dark:text-accent-a-dark">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p> : null}
    </div>
  )
}
