"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveLink?: string
  githubLink?: string
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  const projects: Project[] = [
    {
      title: "Real-time Data Pipeline",
      description:
        "Built a real-time data processing pipeline using Kafka and Spark Streaming to analyze user behavior data for an e-commerce platform.",
      image:
        "/placeholder.svg?height=400&width=600&text=Data+Pipeline+Architecture+with+Kafka+and+Spark+streaming+real-time+data+flow+diagrams",
      tags: ["Kafka", "Spark", "Python", "AWS"],
      githubLink: "https://github.com",
    },
    {
      title: "Interactive Dashboard",
      description:
        "Created an interactive dashboard with Plotly and Dash to visualize sales performance metrics across different regions and product categories.",
      image:
        "/placeholder.svg?height=400&width=600&text=Interactive+Business+Dashboard+with+Charts+Graphs+KPI+Metrics+Analytics+Visualization",
      tags: ["Plotly", "Dash", "Python", "SQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "ETL Pipeline with Airflow",
      description:
        "Designed and implemented an ETL pipeline using Airflow and BigQuery to process and analyze large datasets from multiple sources.",
      image:
        "/placeholder.svg?height=400&width=600&text=ETL+Data+Pipeline+Workflow+with+Airflow+DAG+BigQuery+Data+Processing+Architecture",
      tags: ["Airflow", "BigQuery", "Python", "GCP"],
      githubLink: "https://github.com",
    },
    {
      title: "Data Warehouse Optimization",
      description:
        "Optimized a data warehouse structure and queries, resulting in a 40% improvement in query performance and reduced storage costs.",
      image:
        "/placeholder.svg?height=400&width=600&text=Data+Warehouse+Architecture+Database+Optimization+Performance+Analytics+Cloud+Storage",
      tags: ["SQL", "Snowflake", "dbt", "Performance Tuning"],
      liveLink: "https://example.com",
    },
  ]

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

    const section = document.getElementById("projects")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-cream/10 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-text hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-text hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
