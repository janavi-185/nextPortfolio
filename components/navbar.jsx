"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href) => {
    return pathname === href
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-2 left-10 h-17 right-10 z-40 rounded-2xl bg-dark/65 dark:bg-dark/65 backdrop-blur-md border border-gray-300 dark:border-gray-500 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform">
            <h1 className="text-2xl font-bold text-format text-transparent">
              JC
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name} 
                  href={item.href}
                  className={`px-3 py-2 rounded-xl text-md font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? "text-green-800  bg-green-50 "
                      : "text-gray-700 hover:text-green-600 "
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center hover:cursor-pointer space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "light")}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              {console.log("Theme toggled to:", theme)}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 cursor-pointer hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

      <AnimatePresence>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fadeIn ">
            <div className="px-2 pt-2 pb-2 m-2 space-y-1 sm:px-3 bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    isActive(item.href)
                      ? "text-green-800 dark:text-pink-400 dark:bg-pink-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-pink-400"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  )
}
