"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/hero"
import QuickOverview from "@/components/quick-overview"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div>
      <Hero />
      {/* <QuickOverview /> */}
    </div>
  )
}
