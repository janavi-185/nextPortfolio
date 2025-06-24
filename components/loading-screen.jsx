"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function LoadingScreen() {
  const containerRef = useRef(null)
  const leftBraceRef = useRef(null)
  const rightBraceRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([leftBraceRef.current, rightBraceRef.current], {
      opacity: 0,
      scale: 0.5,
      rotation: 180,
    })
    gsap.set(textRef.current, { opacity: 0, y: 20 })

    // Animation sequence
    tl.to([leftBraceRef.current, rightBraceRef.current], {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
    })
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        [leftBraceRef.current, rightBraceRef.current],
        {
          rotation: 360,
          duration: 1,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        },
        "-=0.3",
      )
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900"
    >
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span ref={leftBraceRef} className="text-6xl md:text-8xl font-bold text-pink-500 dark:text-pink-400">
            {"{"}
          </span>
          <span ref={rightBraceRef} className="text-6xl md:text-8xl font-bold text-purple-500 dark:text-purple-400">
            {"}"}
          </span>
        </div>
        <p ref={textRef} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
          Loading Portfolio...
        </p>
      </div>
    </div>
  )
}
