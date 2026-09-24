"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ConversionLoopIllustration } from "@/components/illustrations"

export default function ApproachSection() {
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

  const steps = [
    {
      number: "01",
      title: "Population & Barrier Mapping",
      description:
        "We segment your audience by behavior, not just demographics, and diagnose what is blocking each segment from acting: awareness, trust, access, effort, or perceived risk.",
    },
    {
      number: "02",
      title: "Neuroscience-Informed Design",
      description:
        "We design the message, messenger, and moment for each segment, using what neuroscience tells us about attention, trust, and decision-making.",
    },
    {
      number: "03",
      title: "Journey Orchestration",
      description:
        "We turn the design into a multi-touch journey across the channels your audience actually uses, executed through your own teams and systems.",
    },
    {
      number: "04",
      title: "Measure, Learn, Scale",
      description:
        "Every program runs with a control group, so we can prove what converted, for whom, and why, then scale what works.",
    },
  ]

  return (
    <section id="approach" className="luxury-section bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-50 opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gold-100 opacity-20 z-0"></div>

      <div className="luxury-container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="space-y-4">
            <div className="luxury-badge">Our Approach</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-luxury-800">
              The Behaviorally Informed Conversion System
            </h2>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              A repeatable system for moving hard-to-reach populations from awareness to action, grounded in neuroscience and proven in the field.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl py-12 sm:py-16">
          <div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center">
            {/* Illustration */}
            <div className="flex flex-col justify-center order-1 md:order-1 animate-on-scroll">
              <div className="relative">
                {/* Gold frame */}
                <div className="absolute -top-2 -left-2 -bottom-2 -right-2 sm:-top-4 sm:-left-4 sm:-bottom-4 sm:-right-4 border border-gold-400 z-0"></div>

                <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-none z-10">
                  <ConversionLoopIllustration />
                </div>
              </div>
            </div>

            {/* Steps Section */}
            <div className="flex flex-col justify-center space-y-8 sm:space-y-12 order-2 md:order-2 animate-on-scroll">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 group">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-lg sm:text-2xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800">{step.title}</h3>
                    <p className="text-charcoal-600 font-light text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              ))}

              <Button className="luxury-button-primary mt-6 w-full sm:w-fit" asChild>
                <Link href="#contact">
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
