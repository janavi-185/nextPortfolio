'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AlgoViz',
      description: 'Algorithm visualization platform that visual representation of problem-solving techniques.',
      tags: ['Nextjs', 'Tailwind', 'TypeScript'],
      link: 'https://algo-viz-black.vercel.app/',
      image: '/image.png',
    },
    // {
    //   id: 2,
    //   title: 'Task Management App',
    //   description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    //   tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    //   link: '#',
    //   image: '✓',
    // },
    // {
    //   id: 3,
    //   title: 'Analytics Dashboard',
    //   description: 'Data visualization dashboard with real-time analytics and custom reporting capabilities.',
    //   tags: ['React', 'D3.js', 'Express', 'MongoDB'],
    //   link: '#',
    //   image: '📊',
    // },
    // {
    //   id: 4,
    //   title: 'Social Network',
    //   description: 'Social platform with real-time messaging, notifications, and user engagement features.',
    //   tags: ['Next.js', 'WebSocket', 'PostgreSQL', 'Redis'],
    //   link: '#',
    //   image: '👥',
    // },
    // {
    //   id: 5,
    //   title: 'Content Management System',
    //   description: 'Headless CMS with powerful content management and API-first architecture.',
    //   tags: ['TypeScript', 'Node.js', 'GraphQL', 'MongoDB'],
    //   link: '#',
    //   image: '📝',
    // },
    // {
    //   id: 6,
    //   title: 'AI Chat Application',
    //   description: 'AI-powered chat application with natural language processing and intelligent responses.',
    //   tags: ['Next.js', 'OpenAI API', 'Python', 'FastAPI'],
    //   link: '#',
    //   image: '🤖',
    // },


  ]

  return (
    <main className="flex-1">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="mb-12 border-b border-border pb-8 ">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">my projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here are some of the projects I've built. Each one taught me something new and helped me grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="p-6 rounded-sm border hover:border-primary/30 transition-shadow">
              <div className="bg-secondary/10 rounded-sm h-48 flex items-center justify-center mb-4">
              <Image 
                src={project.image}
                alt={project.title}
                width={415}
                height={200}
                className="object-contain"
              />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Link href={project.link}  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all" target='_blank'>
                View Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <h1 className='text-center text-xl text-chart-4'>WILL ADD MORE PROJECTS!!</h1>
      </section>
    </main>
  )
}
