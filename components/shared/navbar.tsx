"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#home")
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => {
    return activeSection === href
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const currentSections = sections.filter(section => {
        const el = document.getElementById(section)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })
      if (currentSections.length > 0) {
        setActiveSection(`#${currentSections[0]}`)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Desktop Right Sidebar (Floating Pill) */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 py-8 px-2 w-16 flex-col items-center border border-border rounded-full bg-background/80 backdrop-blur-md shadow-lg z-50">
        <div className="flex flex-col items-center gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className={`text-sm font-medium transition-colors tracking-widest [writing-mode:vertical-rl] rotate-180 cursor-pointer ${isActive(href) ? "text-primary font-bold" : "text-foreground/60 hover:text-foreground"
                }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-2xl font-bold text-primary cursor-pointer">
              JANAVI
            </a>
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
          <AnimatePresence>
            {isOpen && (
              <div className="animate-fadeIn">
                <div className="px-2 pt-2 pb-2 m-2 space-y-1 sm:px-3 rounded-sm mt-2">
                  {links.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      exit={{ opacity: 0, y: -10 }}
                      onClick={(e: any) => scrollToSection(e, item.href)}
                      className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors cursor-pointer ${isActive(item.href) ? "text-primary " : "text-foreground/60 hover:text-primary "
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
      </nav>
    </>
  )
}
