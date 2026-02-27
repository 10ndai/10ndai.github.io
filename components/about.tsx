"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Award, Clock, Code } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1690020800717.jpg-u1lUEW5Wr0fDhyELYi7oHsiCNl2UtQ.jpeg"
                alt="Tendai"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}>
            <p className="text-lg">
              I&apos;m a data enthusiast with experience in big data analytics, SQL, and Python. Currently leveling up
              in data engineering with tools like Apache Spark, Kafka, and Airflow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-cream/30">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold">1+ Years</h3>
                <p className="text-sm text-center">Data Experience</p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-cream/30">
                <Award className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold">AWS & MS</h3>
                <p className="text-sm text-center">Certified</p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-cream/30">
                <Code className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold">5+</h3>
                <p className="text-sm text-center">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
