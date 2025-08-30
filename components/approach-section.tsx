"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
      title: "Neurological Assessment",
      description: "We begin by understanding your team's and market's nervous system states to establish a baseline.",
    },
    {
      number: "02",
      title: "Strategy Integration",
      description: "We develop GTM strategies that incorporate performance psychology meets neuroscience approaches.",
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "Our team provides hands-on guidance as you implement these neuroscience-backed strategies.",
    },
    {
      number: "04",
      title: "Measurement & Refinement",
      description: "We track both traditional metrics and neurological indicators to continuously improve results.",
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
              The Scientific Marketing Approach
            </h2>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              Our methodology integrates neuroscience principles with proven business strategies for optimal results.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl py-12 sm:py-16">
          <div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center">
            {/* Media Section - Image for mobile, Video for desktop */}
            <div className="flex flex-col justify-center order-1 md:order-1 animate-on-scroll">
              <div className="relative">
                {/* Gold frame */}
                <div className="absolute -top-2 -left-2 -bottom-2 -right-2 sm:-top-4 sm:-left-4 sm:-bottom-4 sm:-right-4 border border-gold-400 z-0"></div>

                <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-none z-10">
                  {/* Mobile Image - Show only on screens smaller than 768px */}
                  <div className="block md:hidden w-full h-full">
                    <img
                      src="/images/neuroscience-brain-mobile.jpg"
                      alt="Digital brain visualization representing neuroscience-backed business strategy"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient for image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-luxury-900/30 to-transparent"></div>
                  </div>

                  {/* Desktop Video - Show only on screens 768px and larger */}
                  <div className="hidden md:block w-full h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      preload="auto"
                      controls={false}
                    >
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_1106939261-zbZfQUbKLq1yqoUE4KqZQUgB8Z2J3y.mov"
                        type="video/mp4"
                      />
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_1106939261-zbZfQUbKLq1yqoUE4KqZQUgB8Z2J3y.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Overlay gradient for video */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-luxury-900/30 to-transparent"></div>
                  </div>
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
