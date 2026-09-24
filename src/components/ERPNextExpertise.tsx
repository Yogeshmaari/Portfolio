import { erpCapabilities, erpModules } from '../data/profile'
import { Reveal } from './Reveal'
import { Chip } from './ui/Chip'
import { SectionHeading } from './ui/SectionHeading'

export function ERPNextExpertise() {
  return (
    <section id="erpnext" className="border-b border-slate-200 py-16 sm:py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="ERPNext Expertise"
            title="Frappe & ERPNext customization"
            subtitle="Hands-on ERPNext development at Finstein: business modules, custom logic, and production support."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-mono text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Modules customized
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {erpModules.map((m) => (
                  <Chip key={m} tone="b">
                    {m}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-mono text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                Capabilities
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {erpCapabilities.map((c) => (
                  <Chip key={c} tone="b">
                    {c}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
