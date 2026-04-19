'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Boolean scroll reveal trigger. Used for fade-up on step cards + any section reveal.
 *
 * Returns a ref callback and an `inView` boolean. Fires `inView: true` when the observed
 * element crosses the threshold. If `once` (default true), stops observing after first entry.
 *
 * Contract:
 *   - SSR-safe (guards typeof window)
 *   - Respects prefers-reduced-motion: returns {inView: true} immediately if user wants reduced motion
 *   - Cleanup: observer disconnected on unmount, no memory leaks on route changes
 *   - Single observer per hook invocation (no global singleton complexity)
 */
export function useInView(options?: {
  threshold?: number
  once?: boolean
  rootMargin?: string
}): {
  ref: (el: HTMLElement | null) => void
  inView: boolean
} {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -10% 0px' } = options ?? {}
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const observedElRef = useRef<HTMLElement | null>(null)

  const ref = useCallback(
    (el: HTMLElement | null) => {
      // SSR guard
      if (typeof window === 'undefined') return

      // Reduced-motion guard: skip observing, return visible immediately
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reducedMotion) {
        setInView(true)
        return
      }

      // Disconnect previous observer if any
      if (observerRef.current && observedElRef.current) {
        observerRef.current.unobserve(observedElRef.current)
      }

      observedElRef.current = el
      if (!el) return

      // Create observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true)
              if (once && observerRef.current) {
                observerRef.current.unobserve(entry.target)
              }
            } else if (!once) {
              setInView(false)
            }
          })
        },
        { threshold, rootMargin }
      )

      observerRef.current.observe(el)
    },
    [threshold, once, rootMargin]
  )

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])

  return { ref, inView }
}

/**
 * Scroll progress tracker. Writes progress (0 to 1) via imperative callback, skipping React
 * reconciliation. Used for Process timeline fill height — state update per scroll tick would
 * cause jank, so this bypasses React entirely.
 *
 * Progress is 0 when container top hits viewport bottom, 1 when container bottom hits viewport top.
 *
 * Contract:
 *   - SSR-safe (guards typeof window)
 *   - Respects prefers-reduced-motion: calls onProgress(1) once, then stops
 *   - Cleanup: scroll listener removed on unmount
 *   - Uses rAF to throttle scroll callbacks
 */
export function useScrollProgress(
  containerRef: React.RefObject<HTMLElement | null>,
  onProgress: (progress: number) => void
): void {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      onProgress(1)
      return
    }

    const el = containerRef.current
    if (!el) return

    let rafId: number | null = null

    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Progress: 0 when container top at viewport bottom, 1 when container bottom at viewport top
      const totalScrollable = rect.height + viewportHeight
      const scrolled = viewportHeight - rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable))

      onProgress(progress)
      rafId = null
    }

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(update)
    }

    // Initial measurement
    update()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [containerRef, onProgress])
}
