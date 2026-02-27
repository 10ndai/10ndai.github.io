"use client"

import { useEffect, useState } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("analytics")

  const skills: Skill[] = [
    // Data Analytics
    { name: "SQL", level: 90, category: "analytics" },
    { name: "Python (Pandas, NumPy)", level: 85, category: "analytics" },
    { name: "Tableau", level: 80, category: "analytics" },
    { name: "Excel", level: 95, category: "analytics" },

    // Big Data
    { name: "Spark", level: 75, category: "bigdata" },
    { name: "Hadoop", level: 70, category: "bigdata" },
    { name: "Hive", level: 65, category: "bigdata" },

    // Engineering
    { name: "Kafka", level: 60, category: "engineering" },
    { name: "Airflow", level: 55, category: "engineering" },
    { name: "Docker", level: 65, category: "engineering" },
    { name: "AWS/GCP", level: 70, category: "engineering" },

    // Programming
    { name: "Python", level: 85, category: "programming" },
    { name: "Bash", level: 75, category: "programming" },
    { name: "Git", level: 80, category: "programming" },
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

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const categories = [
    { id: "analytics", name: "Data Analytics" },
    { id: "bigdata", name: "Big Data" },
    { id: "engineering", name: "Engineering" },
    { id: "programming", name: "Programming" },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === activeTab)

  return (
    <section id="skills" className="bg-cream/20 py-20">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category.id ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
