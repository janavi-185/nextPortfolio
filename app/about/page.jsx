"use client"

import { Code, Palette, Database, Globe, Award, BookOpen, User, Heart } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    { name: "JavaScript", level: 85, icon: Code },
    { name: "React", level: 80, icon: Code },
    { name: "HTML/CSS", level: 90, icon: Palette },
    { name: "Node.js", level: 75, icon: Database },
    { name: "Python", level: 70, icon: Code },
    { name: "Web Design", level: 85, icon: Globe },
    { name: "Tailwind CSS", level: 88, icon: Palette },
    { name: "Next.js", level: 82, icon: Code },
  ]

  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2023",
      icon: Globe,
      description: "Complete full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: Code,
      description: "Comprehensive course on JavaScript fundamentals, ES6, and algorithmic thinking"
    },
    {
      title: "React Development Certification",
      issuer: "Coursera",
      year: "2024",
      icon: Code,
      description: "Advanced React concepts including hooks, context, and modern React patterns"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2024",
      icon: Palette,
      description: "User experience design principles, prototyping, and design thinking methodology"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: Palette,
      description: "Modern CSS techniques, Flexbox, Grid, and mobile-first design principles"
    },
    {
      title: "Git and GitHub Mastery",
      issuer: "Udemy",
      year: "2023",
      icon: Code,
      description: "Version control, collaboration workflows, and advanced Git techniques"
    },
  ]

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Machine Learning",
    "Mobile App Development",
    "Open Source Contributing",
    "Tech Blogging",
    "Photography",
    "Digital Art"
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-12 animate-fadeInUp">
          <div className="flex items-center mb-6">
            <User className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Hello! I'm <strong className="text-pink-600 dark:text-pink-400">Janavi Chauhan</strong>, a passionate B.Tech student in my 3rd year, 
                specializing in Computer Science Engineering. I'm deeply fascinated by the endless possibilities that technology offers 
                and how it can be used to solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My journey in tech started with curiosity about how websites work, which led me to dive deep into web development. 
                I love creating beautiful, functional, and user-friendly applications that make a difference in people's lives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through tech blogs and community events.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300">
                JC
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 italic">
                "Code is poetry written in logic"
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slideInLeft hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 text-purple-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slideInRight hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-pink-500 pl-6 hover:bg-pink-50 dark:hover:bg-pink-900/20 p-4 rounded-r-lg transition-colors">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor of Technology</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">Computer Science Engineering</p>
                <p className="text-gray-600 dark:text-gray-400">3rd Year • 2022-2026</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  CGPA: 8.5/10 • Focusing on software development, data structures, algorithms, and web technologies.
                </p>
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Subjects:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"].map((subject) => (
                      <span key={subject} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 hover:bg-purple-50 dark:hover:bg-purple-900/20 p-4 rounded-r-lg transition-colors">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Higher Secondary Education</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium">Science Stream (PCM + Computer Science)</p>
                <p className="text-gray-600 dark:text-gray-400">2020-2022</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Percentage: 92% • Strong foundation in Mathematics, Physics, Chemistry, and Computer Science.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-12 animate-fadeInUp hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="flex flex-col p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:scale-105 transition-transform duration-300 border border-pink-100 dark:border-gray-600"
              >
                <div className="flex items-center mb-3">
                  <cert.icon className="w-6 h-6 text-purple-500 mr-2" />
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-fadeInUp hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Interests & Hobbies</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Beyond coding, I have diverse interests that keep me motivated and help me grow both personally and professionally.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center justify-center p-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
