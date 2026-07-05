'use client'
import Hero from '@/components/shared/hero'
import About from '@/components/sections/about'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <div id="home">
        <Hero/>
      </div>
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
