"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Database, Globe, Award, BookOpen } from "lucide-react"

export default function About() {
  console.log("About component rendered")
  // const ref = useRef(null)
  // const isInView = useInView(ref, { once: true })

  // const skills = [
  //   { name: "JavaScript", level: 85, icon: Code },
  //   { name: "React", level: 80, icon: Code },
  //   { name: "HTML/CSS", level: 90, icon: Palette },
  //   { name: "Node.js", level: 75, icon: Database },
  //   { name: "Python", level: 70, icon: Code },
  //   { name: "Web Design", level: 85, icon: Globe },
  // ]

  // const certifications = [
  //   {
  //     title: "Web Development Bootcamp",
  //     issuer: "Udemy",
  //     year: "2023",
  //     icon: Globe,
  //   },
  //   {
  //     title: "JavaScript Algorithms",
  //     issuer: "FreeCodeCamp",
  //     year: "2023",
  //     icon: Code,
  //   },
  //   {
  //     title: "React Development",
  //     issuer: "Coursera",
  //     year: "2024",
  //     icon: Code,
  //   },
  //   {
  //     title: "UI/UX Design Fundamentals",
  //     issuer: "Google",
  //     year: "2024",
  //     icon: Palette,
  //   },
  // ]

  // return (
  //   <section ref={ref} className="py-20 px-4">
  //     <div className="max-w-6xl mx-auto">
  //       <motion.div
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6 }}
  //         className="text-center mb-16"
  //       >
  //         <h1>hnonoobjrf</h1>
  //         <h2 className="text-4xl md:text-5xl font-bold mb-6">
  //         </h2>
  //         <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
  //           I'm Janavi Chauhan, a passionate B.Tech student in my 3rd year, dedicated to creating innovative solutions
  //           through technology. I love combining creativity with code to build meaningful digital experiences.
  //         </p>
  //       </motion.div> 
        
  //       <div className="grid lg:grid-cols-2 gap-12 mb-16">
  //         {/* Skills Section */}
  //         <motion.div
  //           initial={{ opacity: 0, x: -50 }}
  //           animate={isInView ? { opacity: 1, x: 0 } : {}}
  //           transition={{ duration: 0.6, delay: 0.2 }}
  //           className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  //         >
  //           <div className="flex items-center mb-6">
  //             <Code className="w-8 h-8 text-pink-500 mr-3" />
  //             <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Skills</h3>
  //           </div>
  //           <div className="space-y-6">
  //             {skills.map((skill, index) => (
  //               <div key={skill.name}>
  //                 <div className="flex items-center justify-between mb-2">
  //                   <div className="flex items-center">
  //                     <skill.icon className="w-5 h-5 text-purple-500 mr-2" />
  //                     <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
  //                   </div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
  //                 </div>
  //                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
  //                   <motion.div
  //                     initial={{ width: 0 }}
  //                     animate={isInView ? { width: `${skill.level}%` } : {}}
  //                     transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
  //                     className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
  //                   />
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </motion.div>

  //         {/* Education & Experience */}
  //         <motion.div
  //           initial={{ opacity: 0, x: 50 }}
  //           animate={isInView ? { opacity: 1, x: 0 } : {}}
  //           transition={{ duration: 0.6, delay: 0.4 }}
  //           className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  //         >
  //           <div className="flex items-center mb-6">
  //             <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
  //             <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
  //           </div>
  //           <div className="space-y-6">
  //             <div className="border-l-4 border-pink-500 pl-6">
  //               <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor of Technology</h4>
  //               <p className="text-purple-600 dark:text-purple-400 font-medium">Computer Science Engineering</p>
  //               <p className="text-gray-600 dark:text-gray-400">3rd Year • 2022-2026</p>
  //               <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
  //                 Focusing on software development, data structures, algorithms, and web technologies.
  //               </p>
  //             </div>
              
  //             <div className="border-l-4 border-purple-500 pl-6">
  //               <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Higher Secondary</h4>
  //               <p className="text-pink-600 dark:text-pink-400 font-medium">Science Stream</p>
  //               <p className="text-gray-600 dark:text-gray-400">2020-2022</p>
  //               <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
  //                 Mathematics, Physics, Chemistry with Computer Science.
  //               </p>
  //             </div>
  //           </div>
  //         </motion.div>
  //       </div>

  //       {/* Certifications */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6, delay: 0.6 }}
  //         className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
  //       >
  //         <div className="flex items-center mb-8">
  //           <Award className="w-8 h-8 text-pink-500 mr-3" />
  //           <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
  //         </div>
  //         <div className="grid md:grid-cols-2 gap-6">
  //           {certifications.map((cert, index) => (
  //             <motion.div
  //               key={cert.title}
  //               initial={{ opacity: 0, scale: 0.9 }}
  //               animate={isInView ? { opacity: 1, scale: 1 } : {}}
  //               transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
  //               className="flex items-start p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl"
  //             >
  //               <cert.icon className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
  //               <div>
  //                 <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h4>
  //                 <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{cert.issuer}</p>
  //                 <p className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</p>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </motion.div>
  //     </div>
  //   </section>
  // )


}
