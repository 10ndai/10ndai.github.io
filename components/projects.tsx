"use client"

import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"

interface Project {
  fig: string
  title: string
  description: string
  stack: string
  repoUrl: string
}

const projects: Project[] = [
  /*{
    fig: "fig. 01",
    title: "IndabaX Zimbabwe Hackathon",
    description:
      "Loan default prediction using XGBoost and LightGBM, surfaced through a Next.js dashboard designed for loan officers; entered for IndabaX Zimbabwe's innovation prize.",
    stack: "Python · XGBoost · LightGBM · Next.js · TypeScript",
    repoUrl: "#", // TODO: add real GitHub repository URL
  },*/
  {
    fig: "fig. 01",
    title: "End-to-End MLOps Pipeline",
    description:
      "End-to-end pipeline predicting 30-day readmission on the UCI diabetes dataset: ingestion, cleaning, patient-grouped splits to prevent leakage, MLflow-tracked training and drift monitoring. SageMaker deployment code is written and dry-run tested; the live AWS run is pending",
    repoUrl: "https://github.com/10ndai/Hospital-Readmission", 
  },
  {
    fig: "fig. 02",
    title: "TheraPulse",
    description:
      "Digital records platform that replaces paper therapy files. Worksheets, assessments and session notes become structured data, so client progress on standard screening measures can be tracked and charted over time. ",
    stack: "React Native · TypeScript",
    repoUrl: "https://github.com/10ndai/TheraPulse", 
  },
  {
    fig: "fig. 03",
    title: "FIFA World Cup Prediction Model",
    description:
      "Forecasts the 48-team 2026 World Cup by combining Dixon-Coles attack/defence ratings with Monte Carlo bracket simulation. Judged on calibration, not just accuracy, and benchmarked against an Elo baseline and bookmaker odds.",
    stack: "Python · SciPy · Monte Carlo simulation",
    repoUrl: "https://github.com/10ndai/fifa-world-cup-forecast", 
  },
  {
    fig: "fig. 04",
    title: "Pneumonia Detector",
    description:
      "Chest X-ray classifier co-built with Sawera, using ResNet transfer learning, patient-disjoint validation and Grad-CAM heatmaps that show where the model is looking",
    stack: "Python · TensorFlow · CNN · transfer learning",
    repoUrl: "https://github.com/10ndai/pneumonia-detector.git", 
  },
  {
    fig: "fig. 05",
    title: "CounterStock",
    description:
      "Point-of-sale and inventory system for small retailers, with dual-currency (USD/ZWG) pricing and an offline mode for low-connectivity shops common in Zimbabwean retail.",
    stack: "TypeScript", 
    repoUrl: "https://github.com/10ndai/CounterStock", 
  },
]

export default function Projects() {
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
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="projects" className="bg-paper py-20 md:py-28 border-t border-rule">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`reveal ${visible ? "visible" : ""}`}>
          {/* Section header */}
          <div className="md:grid md:grid-cols-[5rem_1fr] md:gap-x-8 items-start mb-14">
            <p className="font-mono text-xs text-verdigris mb-4 md:mb-0 md:pt-2">projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">Selected work</h2>
          </div>

          {/* Annotated project index */}
          <div className="divide-y divide-rule">
            {projects.map((project) => (
              <div
                key={project.fig}
                className="py-10 md:grid md:grid-cols-[5rem_1fr] md:gap-x-8"
              >
                {/* Marginalia label — footnote convention */}
                <p className="font-mono text-xs text-verdigris mb-4 md:mb-0 md:pt-1 md:text-right">
                  {project.fig}
                </p>

                {/* Entry content */}
                <div>
                  <h3 className="font-display text-xl font-medium text-ink mb-3">{project.title}</h3>
                  <p className="font-body text-sm md:text-base text-ink/75 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="font-mono text-xs text-verdigris mb-5">stack — {project.stack}</p>
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-oxblood group"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span className="link-draw">view code →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
