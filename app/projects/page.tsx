'use client'

import { Badge } from '@/components/ui/badge'
import { ExternalLink, Brain, Plane } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AlgoViz',
      description: 'Algorithm visualization platform that provides visual representation of problem-solving techniques.',
      tags: ['Next.js', 'Tailwind', 'TypeScript'],
      link: 'https://algo-viz-black.vercel.app/',
      image: '/AlgoViz.png',
      hasImage: true,
    },
    {
      id: 2,
      title: 'Vizta',
      description: 'A social media app focused on sharing images, discovering content, and connecting with people.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      link: 'https://vizta-weld.vercel.app/',
      image: '/Vizta.png',
      hasImage: true,
    },
    {
      id: 3,
      title: 'Resumistic',
      description: 'An AI-powered resume analysis tool. Upload your PDF or DOCX resume and get an instant detailed analysis — overall rating, key strengths, areas for improvement, and ATS-optimized suggestions.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'NextAuth', 'AI'],
      link: 'https://resumistic-9uu6.onrender.com/home',
      image: '/Resumistic.png',
      hasImage: true,
    },
    {
      id: 4,
      title: 'FlexiTrip',
      description: 'A full-stack travel planning web app that helps users discover, plan, and organize personalized trip itineraries. Features a modern landing page, user authentication, and a SQL-backed itinerary manager.',
      tags: ['React', 'Node.js', 'Express', 'SQL'],
      link: 'https://flexi-trip.vercel.app/',
      image: '/FlexiTrip.png',
      hasImage: true,
      likes: 45,
    },
    {
      id: 5,
      title: 'SkillCircle',
      description: 'A community-driven skill-sharing platform that enables users to trade knowledge and expertise through a barter-based system. Features a dynamic discovery dashboard, real-time request tracking, and a transparent "Trust Score" reputation system.',
      tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      link: 'https://skillcircle-eta.vercel.app/',
      image: '/SkillCircle.png',
      hasImage: true,
      likes: 156,
    },
  ]

  return (
    <main className="flex-1">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-12 border-b border-border pb-8"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">my projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here are some of the projects I&apos;ve built. Each one taught me something new and helped me grow as a developer.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-sm border border-border hover:border-primary/40 transition-colors duration-300 bg-card/40"
            >
              {/* Image / Placeholder */}
              <div className="rounded-sm h-48 flex items-center justify-center mb-4 relative overflow-hidden bg-secondary/50">
                {project.hasImage ? (
                  <>
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* subtle overlay on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${(project as any).iconColor} flex flex-col items-center justify-center gap-2`}>
                    {(() => {
                      const Icon = (project as any).icon
                      return (
                        <>
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <Icon className={`w-12 h-12 ${(project as any).accentColor} opacity-70`} />
                          </motion.div>
                          <span className="text-xs text-muted-foreground/60 font-medium tracking-wide uppercase">
                            Screenshot coming soon
                          </span>
                        </>
                      )
                    })()}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Link */}
              {project.link !== '#' ? (
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                  target="_blank"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 text-muted-foreground text-sm italic">
                  Coming soon
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
