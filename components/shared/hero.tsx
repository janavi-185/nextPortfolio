'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-12 sm:px-13 lg:px-8">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="mb-6 inline-block" variants={itemVariants}>
          <motion.span
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-6 text-pretty"
          variants={itemVariants}
        >
          hi, I&apos;m{' '}
          <span className="text-primary">Janavi</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-lg text-muted-foreground"
          variants={itemVariants}
        >
          B.Tech Student &amp; Aspiring Developer
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto mt-2"
          variants={itemVariants}
        >
          I create beautiful, functional web experiences that help businesses grow. Specialized in modern web technologies and user-centric design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <Link href="/projects">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="gap-2 cursor-pointer w-full sm:w-auto">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero