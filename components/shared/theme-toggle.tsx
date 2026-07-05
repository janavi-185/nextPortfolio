'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed bottom-6 right-6 z-50 w-12 h-12" />
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center">
      <motion.div 
        className="absolute -top-12 pointer-events-none origin-bottom"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-secondary">
          check here!!!
        </div>
      </motion.div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
      >
        <Sun className="h-10 w-10 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 drop-shadow-md group-hover:drop-shadow-lg" />
        <Moon className="absolute h-10 w-10 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 drop-shadow-md group-hover:drop-shadow-lg" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
