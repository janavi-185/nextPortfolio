"use client"

import { Code, User, Mail, ArrowRight } from "lucide-react"
import {Button} from "@/components/ui/button"
import Link from "next/link"

export default function QuickOverview() {
  const overviewCards = [
    {
      icon: User,
      title: "About Me",
      description:
        "Learn about my journey, skills, and passion for technology. Currently pursuing B.Tech in Computer Science.",
      link: "/about",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Code,
      title: "My Projects",
      description:
        "Explore my portfolio of web applications, mobile apps, and full-stack solutions that showcase my technical abilities.",
      link: "/projects",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Mail,
      title: "Get In Touch",
      description:
        "Ready to collaborate? Let's discuss your project ideas and how we can work together to bring them to life.",
      link: "/contact",
      color: "from-pink-500 to-purple-500",
    },
  ]

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "6+", label: "Certifications" },
    { number: "3", label: "Years Learning" },
    { number: "100%", label: "Passion for Code" },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {overviewCards.map((card, index) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{card.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{card.description}</p>

              <Button
                asChild
                variant="ghost"
                className="group-hover:bg-pink-50 dark:group-hover:bg-pink-900/20 text-pink-600 dark:text-pink-400 p-0 h-auto font-medium"
              >
                <Link href={card.link} className="flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Ready to work together?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
