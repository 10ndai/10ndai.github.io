"use client"

import { useEffect, useState } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  type: "work" | "education"
}

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)

  const experiences: Experience[] = [
    {
      title: "Senior Data Analyst",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Lead data analyst responsible for extracting insights from large datasets, building dashboards, and presenting findings to stakeholders.",
      type: "work",
    },
    {
      title: "Data Analyst",
      company: "Data Insights Co.",
      period: "2018 - 2021",
      description:
        "Analyzed customer behavior data, created reports, and collaborated with cross-functional teams to drive business decisions.",
      type: "work",
    },
    {
      title: "M.S. in Data Science",
      company: "University of Technology",
      period: "2016 - 2018",
      description:
        "Focused on machine learning, statistical analysis, and big data technologies. Thesis on predictive analytics for customer churn.",
      type: "education",
    },
    {
      title: "B.S. in Computer Science",
      company: "State University",
      period: "2012 - 2016",
      description: "Specialized in database systems and software development. Minor in Mathematics.",
      type: "education",
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

    const section = document.getElementById("resume")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="resume" className="bg-cream/20 py-20">
      <div className="container">
        <h2 className="section-title mb-12">Resume</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                  {exp.type === "work" ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
                </div>

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-primary/80 mb-2">{exp.company}</p>
                    <p className="text-text">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
