'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'AWS', 'Vercel', 'Figma'] },
  ]

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="mb-12 border-b border-border pb-8 ">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">about</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">


            knowing more about me...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <p className="text-muted-foreground mb-4">
              From a young age, I was fascinated by technology and its potential to transform lives. This curiosity led me to pursue a career in software development, where I have honed my skills in both frontend and backend technologies.
            </p>
            <p className="text-muted-foreground">
              My focus is on creating clean, scalable code and intuitive user interfaces. I believe great design and solid engineering should go hand-in-hand to create experiences that users love.
            </p>
          </div>

          <div>
            <div className="bg-linear-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-2">👨‍💻</p>
                <p className="text-muted-foreground">Your awesome photo here</p>
              </div>
            </div>
          </div>
          <Link href='/JanaviResume.pdf' target='_blank'  >
            <Button className='cursor-pointer hover:bg-accent/20 bg-transparent border-2 rounded-full py-6 text-primary ' >
              My Resume {'- >'}
            </Button>
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="border rounded-sm p-6 hover:border-secondary">
                <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2 flex">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-muted-foreground border m-1 p-2 w-fit">
                      ✓ {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6 p-4 rounded-r-sm ">
              <p className="font-semibold text-foreground">B.Tech - Adani University</p>
              <p className="text-primary font-medium">Computer Science Engineering (AI - ML)</p>
              <p className="text-muted-foreground">3rd Year • 2023-2027</p>
              <p className="text-sm text-muted-foreground mt-2">
                CGPA: 7.5/10 • Focusing on software development, data structures, algorithms, and web technologies.
              </p>
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">Key Subjects:</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"].map((subject) => (
                    <span key={subject} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-sm border border-border">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-l-4 border-secondary pl-6 p-4 rounded-r-sm ">
              <h3 className="text-lg font-semibold">Higher Secondary Education</h3>
              <p className="text-muted-foreground font-medium">Diwan Ballubhai Madhyamik Shala</p>
              <p className="text-muted-foreground font-medium">Science Stream (PCM)</p>
              <p className="text-muted-foreground">2021-2023</p>
              <p className="text-sm text-muted-foreground mt-2">
                Percentile: 82 • Strong foundation in Mathematics, Physics, Chemistry.
              </p>
            </div> 
          </div>
        </div>
      </section>
    </main>
  )
}
