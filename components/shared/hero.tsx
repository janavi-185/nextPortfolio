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
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="mb-6 flex justify-center w-full" variants={itemVariants}>
          <motion.span
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        {/* Heading */}
        {/* Heading */}
        <motion.h1
          className="font-bold mb-6 text-pretty"
          variants={itemVariants}
        >
          <motion.span
            className="relative z-10 inline-block px-4 py-1.5 -ml-6 sm:-ml-9 translate-y-3 sm:translate-y-5 bg-secondary/10 text-secondary rounded-xl text-2xl md:text-4xl font-semibold -rotate-15"
            whileHover={{ rotate: -3, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            hi, I&apos;m
          </motion.span>
          <br />
          <span className="text-4xl sm:text-8xl text-primary">Janavi Chauhan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-3xl text-secondary"
          variants={itemVariants}
        >
          B.Tech Student &amp; Aspiring Developer
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground my-4"
          variants={itemVariants}
        >
          I create beautiful, functional web and app experiences while exploring new technologies and building impactful projects.
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