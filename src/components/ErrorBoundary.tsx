import { Component, type ErrorInfo, type ReactNode } from 'react'
import { profile } from '../data/profile'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // No external error-reporting service is wired up — log locally so it's
    // visible in DevTools rather than silently swallowed.
    console.error('Portfolio crashed:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center dark:bg-slate-950">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white">
            Something went wrong
          </h1>
          <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">
            This page hit an unexpected error. Reloading usually fixes it — if it keeps happening, reach out directly.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Reload page
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800/60"
            >
              Email {profile.name.split(' ')[0]}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
