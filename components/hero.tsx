"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-cream/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-dark">
              Hi, I&apos;m <span className="text-primary">Tendai</span>
            </h1>
            <p className="text-xl md:text-2xl text-text">Big Data Analyst | Future Data Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary hover:text-accent transition-colors">
          <ArrowDown size={32} />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}
