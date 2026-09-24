"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroIllustration } from "@/components/illustrations"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center pt-2 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream-200 to-cream-300 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-luxury-50 opacity-30 transform -skew-x-12"></div>
        <div className="absolute top-1/4 right-0 w-1/4 h-1/2 bg-gold-100 opacity-20 transform skew-y-12"></div>
      </div>

      <div className="luxury-container relative z-10">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_700px] items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left animate-on-scroll">
            <div className="space-y-6">
              <div className="inline-flex items-center luxury-badge mb-4">Healthcare &amp; Tech GTM Consulting</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium tracking-tight text-luxury-800 leading-tight">
                Reach the <span className="whitespace-nowrap">Hard-to-Reach.</span>
                <br />
                <span className="text-luxury-600">Convert Them.</span>
              </h1>
              <div className="luxury-divider mx-auto lg:mx-0"></div>
              <p className="max-w-[600px] text-charcoal-700 text-sm sm:text-base md:text-lg lg:text-xl mx-auto lg:mx-0 font-light leading-relaxed">
                We pair go-to-market strategy with our Behaviorally Informed Conversion System, grounded in
                neuroscience, to move the populations that ignore standard outreach from awareness to action.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Button className="luxury-button-primary w-full sm:min-w-[220px]" asChild>
                <Link href="#contact">
                  <span>Book a Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="luxury-button-secondary w-full sm:min-w-[220px]" asChild>
                <Link href="/manifesto">Discover Our Approach</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center order-first lg:order-last animate-on-scroll">
            <div className="relative w-full aspect-[4/3] max-w-[600px]">
              {/* Gold frame border */}
              <div className="absolute -top-4 -left-4 -bottom-4 -right-4 border border-gold-400 z-0"></div>

              <div className="relative w-full h-full z-10">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-0.5 h-8 bg-gold-400"></div>
        <div className="w-3 h-3 border-b border-r border-gold-400 transform rotate-45 mt-2"></div>
      </div>
    </section>
  )
}
