"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-end pb-16 md:pb-20 bg-paper">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className={`reveal ${loaded ? "visible" : ""}`}>
          <div className="md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-x-16">
            {/* Name + positioning statement */}
            <div>
              <h1 className="font-display font-medium leading-none tracking-tight text-ink mb-6"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
                Tendai<br />Dzuda
              </h1>
              <p className="font-body text-lg md:text-xl text-ink/70 max-w-md leading-relaxed">
                Research-informed data science, built for real systems.
              </p>
            </div>

            {/* Mono colophon block — like front matter in a journal */}
            <div className="mt-12 md:mt-0 border-l border-rule pl-6">
              <div className="font-mono text-xs text-verdigris leading-relaxed space-y-1">
                <p>Harare, ZW</p>
                <p>data science · public health</p>
                <div className="h-px w-full bg-rule my-3" />
                <a
                  href="https://github.com/10ndai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block link-draw text-verdigris hover:text-oxblood transition-colors"
                >
                  github/10ndai
                </a>
                {/* TODO: replace with real LinkedIn profile URL */}
                <a
                  href="https://www.linkedin.com/in/tendai-d-512505257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block link-draw text-verdigris hover:text-oxblood transition-colors"
                >
                  linkedin ↗
                </a>
              </div>
            </div>
          </div>

          {/* Section-closing hairline */}
          <div className="h-px w-full bg-rule mt-16" />
        </div>
      </div>
    </section>
  )
}
