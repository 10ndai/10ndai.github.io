"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
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
    <section ref={ref} id="contact" className="bg-paper py-20 md:py-28 border-t border-rule">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`reveal ${visible ? "visible" : ""}`}>
          {/* Section header */}
          <div className="md:grid md:grid-cols-[5rem_1fr] md:gap-x-8 items-start mb-14">
            <p className="font-mono text-xs text-verdigris mb-4 md:mb-0 md:pt-2">contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">Get in touch</h2>
          </div>

          <div className="md:grid md:grid-cols-[5rem_1fr] md:gap-x-8">
            <div />
            <div className="max-w-lg">
              <p className="font-body text-base text-ink/75 leading-relaxed mb-10">
                The best way to reach me is through LinkedIn. My public work is on GitHub.
              </p>
              <div className="space-y-5">
                {/* TODO: replace with real LinkedIn profile URL */}
                <a
                  href="https://www.linkedin.com/in/tendai-d-512505257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-sm text-ink"
                >
                  <Linkedin className="h-4 w-4 text-verdigris flex-shrink-0" />
                  <span className="link-draw">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/10ndai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-sm text-ink"
                >
                  <Github className="h-4 w-4 text-verdigris flex-shrink-0" />
                  <span className="link-draw">github.com/10ndai</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
