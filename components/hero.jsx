"use client"

import { useRef } from "react"
import {  Github, Linkedin, Instagram } from "lucide-react"
import  {Button}  from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  console.log("Hero component rendered")
  const heroRef = useRef(null)
  const textRef = useRef(null)



  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="h-full flex items-center justify-center">
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/80 via-yellow-50/60 to-orange-50/40 dark:from-black dark:via-amber-950/30 dark:to-yellow-950/20" />
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-green-400/30 dark:bg-yellow-500/12 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/25 dark:bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 right-1/2 w-64 h-64 bg-yellow-400/20 dark:bg-amber-400/8 rounded-full blur-3xl animate-pulse delay-500" />
      </div> */}
      
      <motion.div 
      className="w-[90%] z-10"
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div ref={textRef}>
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              JC
            </div>
          </motion.div> */}
        <div className="w-[100%] flex flex-col items-center justify-center mt-40">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-format text-transparent">
              Janavi Chauhan
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300  mb-6 font-light">
            B.Tech Student & Aspiring Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl  leading-relaxed">
            Passionate about creating beautiful and functional web experiences. Currently in my 3rd year of B.Tech,
            exploring the world of technology and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-[#437057] to-[#97B067] py-6 hover:cursor-pointer text-white px-8  border hover:border-green-800 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
            </Button>


            <div className="flex space-x-4">
              <Link
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/janavi-185"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-green-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/janavi-chauhan-87a611283/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-green-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/_janavi.18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-green-700 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div> 
          </div>
        </div>
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <ArrowDown className="w-8 h-8 mx-auto text-pink-500 dark:text-pink-400" />
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}
