"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:janavi.chauhan@email.com", label: "Email" },
  ]

  return (
    <footer className=" py-12 px-4">
      <div className="max-w-6xl mx-auto p-10 rounded-2xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Janavi Chauhan
            </h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech  Student & Aspiring Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 mx-auto"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-300 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Janavi Chauhan. Made with <Heart className="w-4 h-4 text-pink-500 mx-1 animate-pulse" /> and
            lots of coffee ☕
          </p>
          <p className="text-sm text-gray-500 mt-2">Built with Next.js, Tailwind CSS, Framer Motion & GSAP</p>
        </div>
      </div>
    </footer>
  )
}
