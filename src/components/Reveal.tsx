import type { ReactNode } from 'react'

/**
 * Plays a short entrance animation via the `.reveal` CSS class (see index.css).
 * Pure CSS, no observer: content is never gated behind JS firing in time.
 */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}
