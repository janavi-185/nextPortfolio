'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-12 sm:px-13 lg:px-8">
        <div className="max-w-2xl mx-auto ">
          <div className="mb-6 inline-block">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">
            hi, I'm a <span className="text-primary">Janavi </span>
          </h1>
          <p className='text-xl sm:text-lg text-muted-foreground'>B.Tech Student & Aspiring Developer</p>
          <div className='max-w'>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            I create beautiful, functional web experiences that help businesses grow. Specialized in modern web technologies and user-centric design.
          </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/projects">
              <Button size="lg" className="gap-2 cursor-pointer">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
