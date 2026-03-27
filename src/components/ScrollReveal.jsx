import { useEffect, useRef } from 'react'

/**
 * Wraps children in a div that fades in and slides up when scrolled into view.
 * delay: milliseconds (e.g. 80, 160, 240)
 * fade: boolean — use fade-only variant (no translate)
 */
export default function ScrollReveal({ children, className = '', delay = 0, fade = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${fade ? 'reveal-fade' : 'reveal'} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
