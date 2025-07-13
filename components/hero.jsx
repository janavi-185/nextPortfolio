"use client"

import { useEffect, useRef } from "react"
import {  Github, Linkedin, Instagram } from "lucide-react"
import  {Button}  from "@/components/ui/button"

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)

  // useEffect(() => {
  //   const tl = gsap.timeline()

  //   tl.from(textRef.current.children, {
  //     y: 100,x
  //     opacity: 1,
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //   })
  // }, [])

  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="h-screen flex items-center justify-center ">
      
      <div className="w-full">
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
        <div className="w-[60%] flex flex-col items-center justify-center">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-[30px]">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-l from-[#437057] to-[#97B067] hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
            </Button>


            <div className="flex space-x-4">
              <a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div> ~
          </div>
        </div>
        <div className="w-[40%]">

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
      </div>
    </section>
  )
}
