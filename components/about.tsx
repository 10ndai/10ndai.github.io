"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="about" className="bg-paper py-20 md:py-28 border-t border-rule">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`reveal ${visible ? "visible" : ""}`}>
          <div className="md:grid md:grid-cols-[5rem_1fr] md:gap-x-8 items-start">
            <p className="font-mono text-xs text-verdigris mb-4 md:mb-0 md:pt-2">about</p>
            <div className="max-w-2xl">
              <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
                I&apos;m a data scientist based in Harare working at the intersection of applied machine learning,
                public health research, and software that holds up in the real world. My work spans predictive
                modelling, end-to-end MLOps pipelines, and tools built for the Zimbabwean context — from clinical
                decision support to inventory management. I care about what it takes to make data systems actually
                work, not just in benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
