'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { skills } from '@/constants'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function About() {
  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-12 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">about</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">knowing more about me...</p>
        </motion.div>

        {/* Story + Photo */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <p className="text-muted-foreground mb-4">
              From a young age, I was fascinated by technology and its potential to transform lives. This curiosity led me to pursue a career in software development, where I have honed my skills in both frontend and backend technologies.
            </p>
            <p className="text-muted-foreground">
              My focus is on creating clean, scalable code and intuitive user interfaces. I believe great design and solid engineering should go hand-in-hand to create experiences that users love.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-linear-to-br from-primary/20 to-accent/20 rounded-lg h-72 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <p className="text-6xl mb-2">👩‍💻</p>
                <p className="text-muted-foreground text-sm">Your awesome photo here</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/Janavi'sResume.pdf" target="_blank">
              <Button className="cursor-pointer hover:bg-accent/20 bg-transparent border-2 rounded-full py-6 text-primary">
                My Resume {'->'}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-bold mb-8">Skills &amp; Expertise</h2>
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                whileHover={{ borderColor: 'var(--primary)', transition: { duration: 0.2 } }}
                className="border rounded-sm p-6 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2 flex flex-wrap">
                  {skillGroup.items.map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-muted-foreground border m-1 p-2 w-fit cursor-default"
                    >
                      ✓ {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <motion.div
              // whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="border-l-2 border-primary pl-6 p-4 rounded-r-sm"
            >
              <p className="font-semibold text-foreground">B.Tech - Adani University</p>
              <p className="text-primary font-medium">Computer Science Engineering (AI - ML)</p>
              <p className="text-muted-foreground">3rd Year • 2023-2027</p>
              <p className="text-sm text-muted-foreground mt-2">
                CGPA: 7.5/10 • Focusing on software development, data structures, algorithms, and web technologies.
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
            </motion.div>

            <motion.div
              // whileHover={{ x: 4, transition: { duration: 0.2 } }}  
              className="border-l-4 border-secondary pl-6 p-4 rounded-r-sm"
            >
              <h3 className="text-lg font-semibold">Higher Secondary Education</h3>
              <p className="text-muted-foreground font-medium">Diwan Ballubhai Madhyamik Shala</p>
              <p className="text-muted-foreground font-medium">Science Stream (PCM)</p>
              <p className="text-muted-foreground">2021-2023</p>
              <p className="text-sm text-muted-foreground mt-2">
                Percentile: 82 • Strong foundation in Mathematics, Physics, Chemistry.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
