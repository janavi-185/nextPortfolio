"use client"

import { Code,  Award, BookOpen, User, Heart } from 'lucide-react'
import { skills, certifications, interests } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-format text-transparent">About Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-12 animate-fadeInUp">
          <div className="flex items-center mb-6">
            <User className="w-8 h-8 text-green-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Hello! I'm <strong className="text-green-700 ">Janavi Chauhan</strong>, a passionate B.Tech student in my 3rd year, 
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
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-green-400 to-yellow-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300">
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
              <Code className="w-8 h-8 text-green-800 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
            </div>
            <div className="space-y-6 flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="m-3 p-3 h-34 w-35 text-2xl rounded-xl border border-yellow-100 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center gap-2">
                      <skill.icon className="w-7 h-7 text-green-600 " />
                      <span className="text-gray-600">{skill.name}</span>
                    </div>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span> */}
                  </div>
                  {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div> */}
                  
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slideInRight hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-green-800 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-300 pl-6 hover:bg-yellow-50 dark:hover:bg-pink-900/20 p-4 rounded-r-lg transition-colors">                <p className='font-semibold text-gray-700'>B.Tech - Adani University</p>
                <p className="text-green-600 dark:text-green-400 font-medium">Computer Science Engineering(AI - ML)</p>
                <p className="text-gray-600 dark:text-gray-400">3rd Year • 2023-2027</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  CGPA: 7.5/10 • Focusing on software development, data structures, algorithms, and web technologies.
                </p>
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Subjects:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"].map((subject) => (
                      <span key={subject} className="px-2 py-1 bg-green-50 dark:bg-purple-900/30 text-green-700 dark:text-purple-300 text-xs rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6 hover:bg-green-50 dark:hover:bg-purple-900/20 p-4 rounded-r-lg transition-colors">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Higher Secondary Education</h3>
                <p className="text-gray-600 dark:text-green-400 font-medium">Diwan Ballubhai Madhyamik shala</p>
                <p className="text-yellow-300 dark:text-yellow-400 font-medium">Science Stream (PCM )</p>
                <p className="text-gray-600 dark:text-gray-400">2021-2023</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Percentage: 92% • Strong foundation in Mathematics, Physics, Chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-12 animate-fadeInUp hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-green-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="flex flex-col p-6 bg-gradient-to-br from-yellow-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:scale-105 transition-transform duration-300 border border-pink-100 dark:border-gray-600"
              >
                <div className="flex items-center mb-3">
                  <cert.icon className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-xs font-medium text-green-400 dark:text-purple-400 bg-yellow-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-yellow-600 dark:text-pink-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-fadeInUp hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-green-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Interests & Hobbies</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Beyond coding, I have diverse interests that keep me motivated and help me grow both personally and professionally.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center justify-center p-4 bg-gradient-to-r from-yellow-5  0 to-yellow-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-xl hover:scale-105 transition-transform duration-300"
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
