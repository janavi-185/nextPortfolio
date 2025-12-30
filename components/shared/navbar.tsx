"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const isActive = (href: string) => {
    return pathname === href
  }

  const navVariants = {
    top: {
      top: 15,
      left: 60,
      right: 60,
      borderRadius: 40,
      border: "1px solid var(--border)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      paddingLeft: 16,
      paddingRight: 16,
      transition: { duration: 0.28, ease: [0.42, 0, 0.58, 1] },
    },
    normal: {
      top: 0,
      left: 0,
      right: 0,
      borderRadius: 0,
      
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      paddingLeft: 0,
      paddingRight: 0,
      transition: { duration: 0.28, ease: [0.42, 0, 0.58, 1] },
    },
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640) // sm breakpoint
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={false}
      animate={isLargeScreen && isScrolled ? "top" : "normal"}
      variants={navVariants}
      style={{
        position: "fixed",
        zIndex: 50,

      }}
      className="border-b border-border max-w-6xl mx-auto bg-background/80 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            JC
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-md font-medium transition-colors ${pathname === href ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <div className="md:hidden ">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 cursor-pointer rounded-full hover:text-primary"
                aria-label="Toggle menu"
              >
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
                </motion.div>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
        <AnimatePresence>
        {isOpen && (
          <div className="md:hidden animate-fadeIn ">
            <div className="px-2 pt-2 pb-2 m-2 space-y-1 sm:px-3 rounded-sm mt-2 ">
              {links.map((item) => (
                  <motion.a
                  key={item.label}
                  href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, y: -10 }}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${isActive(item.href) ? "text-primary " : "text-forground hover:text-primary "
                    }`}
                >
                  {item.label}
                  </motion.a>
              ))}
            </div>
          </div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
