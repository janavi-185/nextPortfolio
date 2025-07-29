"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Code, Palette, Database } from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Projects() {
  console.log("Projects component rendered")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard that displays current weather, forecasts, and interactive maps with location-based services.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and experience with smooth animations and responsive design.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with content management system, user authentication, and social sharing capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Recipe Finder App",
      description:
        "A recipe discovery app with search functionality, meal planning, and nutritional information using external APIs.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "API Integration", "Local Storage", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return Database
      case "Frontend":
        return Palette
      default:
        return Code
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills in web development, design, and
            problem-solving. Each project represents a learning journey and creative challenge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-lg">
                      <CategoryIcon className="w-4 h-4 text-purple-500 mr-1" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 text-pink-700 dark:text-pink-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-pink-200 hover:bg-pink-50 dark:border-pink-800 dark:hover:bg-pink-900/20"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-900/20"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">Want to see more of my work?</p>
          <Button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
