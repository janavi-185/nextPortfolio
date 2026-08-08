'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let mouseX = -100
    let mouseY = -100

    // ── Snap arrow to mouse ──────────────────────────────────────
    const ticker = gsap.ticker.add(() => {
      gsap.set(el, { x: mouseX, y: mouseY })
    })

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // ── Hover detection ──────────────────────────────────────────
    const SELECTORS = 'a, button, [role="button"], input, textarea, label, select, [data-cursor]'

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    const attachListeners = () => {
      document.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })
    attachListeners()

    // ── Click scale pulse ────────────────────────────────────────
    const onDown = () => gsap.to(el, { scale: 0.85, duration: 0.1, ease: 'power2.out' })
    const onUp   = () => gsap.to(el, { scale: 1,    duration: 0.2, ease: 'back.out(2)' })

    // ── Hide when leaving window ─────────────────────────────────
    const onOut  = () => gsap.to(el, { autoAlpha: 0, duration: 0.2 })
    const onOver = () => gsap.to(el, { autoAlpha: 1, duration: 0.2 })

    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)
    document.documentElement.addEventListener('mouseleave', onOut)
    document.documentElement.addEventListener('mouseenter', onOver)

    return () => {
      gsap.ticker.remove(ticker)
      observer.disconnect()
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
      document.documentElement.removeEventListener('mouseleave', onOut)
      document.documentElement.removeEventListener('mouseenter', onOver)
      document.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`cursor-arrow ${hovering ? 'cursor-arrow--hover' : ''}`}
      style={{ cursor: 'none' }}
    >
      {/* Arrow SVG — tip at (0,0) top-left */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clean arrowhead — standard pointer shape */}
        <path
          d="M2 2 L2 18 L7 13 L15 13 Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
