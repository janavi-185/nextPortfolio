'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Code2, Terminal } from 'lucide-react'
import { skills } from '@/constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fadeUp = (el: Element | null, delay = 0) => {
  if (!el) return
  gsap.fromTo(el,
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0, duration: 0.6, delay, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    }
  )
}

export default function About() {
  const headerRef    = useRef<HTMLDivElement>(null)
  const storyRef     = useRef<HTMLDivElement>(null)
  const skillsRef    = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const profilesRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeUp(headerRef.current)
      fadeUp(storyRef.current,  0.1)
      fadeUp(skillsRef.current, 0.1)
      fadeUp(educationRef.current, 0.1)
      fadeUp(profilesRef.current, 0.1)
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <div ref={headerRef} className="mb-12 border-b border-border pb-8" style={{ opacity: 0 }}>
          <motion.h1
            className="inline-block relative z-10 px-6 py-2 bg-secondary/10 text-secondary rounded-xl text-4xl sm:text-5xl font-bold mb-6 -rotate-3 cursor-default"
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            about
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl">knowing more about me...</p>
        </div>

        {/* Story + Photo */}
        <div ref={storyRef} className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16" style={{ opacity: 0 }}>
          <div>
            <h2 className="text-2xl font-bold mb-4">WHO AM I--</h2>
            <p className="text-muted-foreground mb-4">
              Hey Visitor, I&apos;m Janavi, a passionate software developer with a love for building things that make a difference. I started coding in College 2nd year and ofcourse, It was tough at the begining, while everyone had some experience.. there i was trying to fit in the world of programming. But with persistence and a lot of late nights with cup of tea I made it !
            </p>
            <p className="text-muted-foreground">
              Till now i have worked on a variety of projects, from small web apps to larger, more complex systems. Each project has been a learning experience. I&apos;m always looking for new opportunities to learn and grow, and I can&apos;t wait to see what the future holds!
            </p>
            <div className="mt-6">
              <Link href="/Janavi'sResume.pdf" target="_blank">
                <Button className="cursor-pointer hover:bg-accent/20 bg-transparent border-2 rounded-full py-6 text-primary">
                  My Resume {'->'}
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-linear-to-br from-primary/20 to-accent/20 rounded-lg h-72 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <p className="text-6xl mb-2">👩‍💻</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold mb-8">Skills &amp; Expertise</h2>
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="border rounded-sm p-6 transition-colors duration-200 hover:border-primary"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2 flex flex-wrap">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground border m-1 p-2 w-fit cursor-default"
                    >
                      ✓ {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div ref={educationRef} className="mt-16" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6 p-4 rounded-r-sm">
              <p className="font-semibold text-foreground">B.Tech - Adani University</p>
              <p className="text-primary font-medium">Computer Science Engineering (AI - ML)</p>
              <p className="text-muted-foreground">3rd Year • 2023-2027</p>
              <p className="text-sm text-muted-foreground mt-2">
                CGPA: 7.7/10 • Focusing on software development, data structures, algorithms, and web technologies.
              </p>
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">Key Subjects:</p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'].map(
                    (subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-sm border border-border"
                      >
                        {subject}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="border-l-4 border-secondary pl-6 p-4 rounded-r-sm">
              <h3 className="text-lg font-semibold">Higher Secondary Education</h3>
              <p className="text-muted-foreground font-medium">Diwan Ballubhai Madhyamik Shala</p>
              <p className="text-muted-foreground font-medium">Science Stream (PCM)</p>
              <p className="text-muted-foreground">2021-2023</p>
              <p className="text-sm text-muted-foreground mt-2">
                Percentile: 82 • Strong foundation in Mathematics, Physics, Chemistry.
              </p>
            </div>
          </div>
        </div>

        {/* Profiles */}
        <div ref={profilesRef} className="mt-16" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold mb-8">Coding Profiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="https://github.com/janavi-185"
              target="_blank"
              className="group flex flex-col items-center justify-center p-8 border border-border rounded-xl bg-card/40 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <Github className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-semibold text-lg group-hover:text-primary transition-colors">GitHub</span>
            </Link>
            
            <Link
              href="https://leetcode.com/u/fpTjjADhu6/"
              target="_blank"
              className="group flex flex-col items-center justify-center p-8 border border-border rounded-xl bg-card/40 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <Code2 className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-semibold text-lg group-hover:text-primary transition-colors">LeetCode</span>
            </Link>
            
            <Link
              href="https://codeforces.com/profile/DAISY_18"
              target="_blank"
              className="group flex flex-col items-center justify-center p-8 border border-border rounded-xl bg-card/40 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
            >
              <Terminal className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-semibold text-lg group-hover:text-primary transition-colors">Codeforces</span>
            </Link>
          </div>
        </div>

    </section>
  )
}
