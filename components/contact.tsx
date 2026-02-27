"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Send, Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

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

    const section = document.getElementById("contact")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage("Thank you! Your message has been sent.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage("")
    }, 5000)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>

              {submitMessage && <div className="text-center text-green-600 font-medium">{submitMessage}</div>}
            </form>
          </div>

          <div className={`${isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}>
            <div className="bg-cream/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="space-y-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6 mr-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6 mr-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="mailto:tendai@example.com"
                  className="flex items-center text-text hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6 mr-4" />
                  <span>tendai@example.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
