"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, BrainCircuit, Users, Presentation, BarChart4, Lightbulb } from "lucide-react"

export default function ServicesSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const services = [
    {
      icon: <LineChart className="h-10 w-10 text-luxury-600" />,
      title: "GTM Strategy",
      description:
        "Comprehensive go-to-market strategies that align with your business goals and target audience's neurological preferences.",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-luxury-600" />,
      title: "Financial Strategy",
      description:
        "Providing services to optimize financials and help drive strategic decisions based on financial analysis. We help align your financial operations with growth objectives.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-luxury-600" />,
      title: "Neuroscience-Based Marketing",
      description:
        "Marketing approaches informed by polyvagal theory and nervous system regulation to create deeper customer connections.",
    },
    {
      icon: <Users className="h-10 w-10 text-luxury-600" />,
      title: "Team Alignment",
      description:
        "Performance psychology meets neuroscience methodologies to improve team cohesion, communication, and performance.",
    },
    {
      icon: <Presentation className="h-10 w-10 text-luxury-600" />,
      title: "Executive Coaching",
      description:
        "We bring neuroscience and nervous system strategy into the boardroom, helping your executives lead with clarity, resilience, and sustainable performance using parts work and nervous system regulation techniques.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-luxury-600" />,
      title: "Research & Innovation",
      description:
        "Deep insights into customer behavior through neuroscience research combined with facilitated innovation sessions that leverage the brain's creative potential while managing stress responses.",
    },
  ]

  return (
    <section id="services" className="luxury-section bg-cream-200 px-4 sm:px-6 lg:px-8">
      <div className="luxury-container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="space-y-4">
            <div className="luxury-badge">Our Services</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-luxury-800">
              What We Do
            </h2>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              Our services blend traditional business strategy with cutting-edge neuroscience for optimal results.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 py-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-cream-200 rounded-none">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <div className="luxury-divider w-12 mx-auto"></div>
                <p className="text-charcoal-600 mt-3 sm:mt-4 font-light text-sm sm:text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
