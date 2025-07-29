"use client"

import { useState } from "react"
import { ExternalLink, Github, Code, Palette, Database, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { projects , categories } from "@/lib/data"


export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return Database
      case "Frontend":
        return Palette
      case "Mobile":
        return Code
      default:
        return Code
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-format text-transparent"># My Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300  mx-auto leading-relaxed">
            A showcase of my development journey, featuring web applications, mobile apps, and full-stack solutions 
            that demonstrate my technical skills and creative problem-solving abilities.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full mr-3"></span>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              return (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-yellow-50 transition-all duration-300 group animate-fadeInUp "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-green-600 to-green-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-lg">
                        <CategoryIcon className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{project.category}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-green-50 to-green-100  text-green-700  text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-yellow-200 hover:bg-yellow-50"
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
                        className="flex-1 border-green-200 hover:bg-green-50 "
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300 mr-2" />
            <span className="text-gray-600 dark:text-gray-300 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-green-600 to-yellow-400 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-yellow-600 rounded-full mr-3"></span>
            All Projects ({filteredProjects.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              return (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl border-[1px] border-green-100 overflow-hidden shadow-lg shadow-green-50 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 group animate-fadeInUp "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-lg">
                        <CategoryIcon className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{project.category}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-green-100 to-yellow-100 dark:from-pink-900/30 dark:to-purple-900/30 text-green-600 dark:text-pink-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-yellow-200 hover:bg-yellow-50 dark:border-pink-800 dark:hover:bg-pink-900/20"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-green-200 hover:bg-green-50 dark:border-purple-800 dark:hover:bg-purple-900/20"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center animate-fadeInUp">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more of my work?</h3>
            <p className="mb-6 opacity-90">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
