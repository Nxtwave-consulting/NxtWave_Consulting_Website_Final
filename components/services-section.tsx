"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, BrainCircuit, Users, Route, Workflow, FlaskConical, HeartPulse, Cpu } from "lucide-react"

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
        "Go-to-market strategy for Healthcare and Tech: positioning, segmentation, channel mix, and launch plans built around how your audience actually decides.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-luxury-600" />,
      title: "Behaviorally Informed Conversion System",
      description:
        "Our end-to-end system for moving an audience from awareness to action: diagnose the barriers, design the intervention, orchestrate the journey, and measure what converts.",
    },
    {
      icon: <Users className="h-10 w-10 text-luxury-600" />,
      title: "Hard-to-Reach Population Engagement",
      description:
        "Strategies for the segments standard outreach misses: disengaged members, underserved patients, skeptical buyers, and audiences with low trust or low awareness.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-luxury-600" />,
      title: "Neuroscience-Based Messaging",
      description:
        "Messaging and creative grounded in how the brain processes attention, trust, risk, and reward, so the right message lands at the moment someone is ready to act.",
    },
    {
      icon: <Route className="h-10 w-10 text-luxury-600" />,
      title: "Journey & Channel Orchestration",
      description:
        "Multi-touch journeys that sequence the right message, channel, and timing for each segment, executed through your own teams and systems.",
    },
    {
      icon: <FlaskConical className="h-10 w-10 text-luxury-600" />,
      title: "Measurement & Experimentation",
      description:
        "Test-and-control design, holdout groups, and conversion analytics that prove what worked, for whom, and why, and tie the lift back to business outcomes.",
    },
  ]

  const industries = [
    {
      icon: <HeartPulse className="h-8 w-8 text-luxury-600" />,
      title: "Healthcare",
      description:
        "Health plans, providers, and health-tech companies trying to reach members and patients who don't engage: preventive screenings, care-gap closure, enrollment, adherence, and benefit utilization.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-luxury-600" />,
      title: "Technology",
      description:
        "B2B and B2C tech companies facing skeptical buyers, complex buying committees, and late-majority adopters, where the barrier to conversion is trust and perceived risk, not awareness.",
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
              Go-to-market strategy and behavioral science, built to convert the audiences that are hardest to reach.
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

        <div className="mx-auto max-w-6xl pb-4 animate-on-scroll">
          <h3 className="text-2xl sm:text-3xl font-serif font-medium text-luxury-800 text-center mb-8">
            Where We Specialize
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-white border border-luxury-100 p-6 sm:p-8 flex gap-4 sm:gap-6">
                <div className="p-3 bg-cream-200 h-fit flex-shrink-0">{industry.icon}</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-serif font-medium text-luxury-800 mb-2">{industry.title}</h4>
                  <p className="text-charcoal-600 font-light text-sm sm:text-base">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
