import Link from 'next/link'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 text-foreground">
      <div className="flex justify-center items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-5">
              <a
                href="https://github.com/janavi-185/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/janavi-chauhan-87a611283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/_janavi_18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:chauhanjanavi06@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      
    </footer>
  )
}
