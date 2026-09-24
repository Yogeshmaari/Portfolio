import { useEffect } from 'react'

/**
 * Printing (or "Save as PDF") always uses the light palette, regardless of
 * the viewer's current theme. Every `dark:` utility only applies under the
 * `.dark` class on <html>, so removing that class for the duration of
 * printing correctly bypasses all of them — not just a hand-picked list —
 * and restores the viewer's actual theme afterward.
 */
export function usePrintLightMode() {
  useEffect(() => {
    const root = document.documentElement
    let wasDark = false

    function beforePrint() {
      wasDark = root.classList.contains('dark')
      root.classList.remove('dark')
    }
    function afterPrint() {
      if (wasDark) root.classList.add('dark')
    }

    window.addEventListener('beforeprint', beforePrint)
    window.addEventListener('afterprint', afterPrint)
    return () => {
      window.removeEventListener('beforeprint', beforePrint)
      window.removeEventListener('afterprint', afterPrint)
    }
  }, [])
}
