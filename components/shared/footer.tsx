import Link from 'next/link'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  {
    href: 'https://github.com/janavi-185/',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/janavi-chauhan-87a611283/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://x.com/_janavi_18',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    href: 'mailto:chauhanjanavi06@gmail.com',
    label: 'Email',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <Link href="/" className="text-lg font-bold text-primary">
              JC
            </Link>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Janavi Chauhan · Built with Next.js
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 inline-block"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
