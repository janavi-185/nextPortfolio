'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number
  top: string
  left: string
  delay: number
  duration: number
  repeatDelay: number
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => 
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100 - 40}%`, 
        left: `${Math.random() * 100 + 40}%`, 
        delay: Math.random() * 10, 
        duration: Math.random() * 3 + 2,
        repeatDelay: Math.random() * 10 + 2
      }))

    setStars(generateStars())
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ 
            opacity: 0, 
            x: 0,
            y: 0,
            scale: 0 
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: "-120vw", 
            y: "120vh",
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.repeatDelay,
            ease: "linear",
          }}
          style={{
            top: star.top,
            left: star.left,
            rotate: -45,
          }}
          className="absolute h-[2px] w-[150px] bg-linear-to-r from-transparent via-primary/80 to-transparent origin-left"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-primary shadow-[0_0_15px_#ffe0c2]" />
        </motion.div>
      ))}
    </div>
  )
}
