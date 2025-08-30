"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, TrendingUp, Heart, ArrowRight, CheckCircle, Zap, Shield, Award } from "lucide-react"

export default function ManifestoSection() {
  const router = useRouter()

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

  const handleExperienceClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
    // Wait for navigation to complete, then scroll to contact
    setTimeout(() => {
      const contactElement = document.getElementById("contact")
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleMeetTeamClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/founders")
    // Wait for navigation to complete, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const principles = [
    {
      icon: <Brain className="h-8 w-8 text-luxury-600" />,
      title: "Science-First Approach",
      description:
        "Every strategy is grounded in neuroscience research and performance psychology, not just intuition.",
    },
    {
      icon: <Heart className="h-8 w-8 text-luxury-600" />,
      title: "Human-Centered Design",
      description: "We design for the nervous system, creating strategies that resonate at a neurological level.",
    },
    {
      icon: <Target className="h-8 w-8 text-luxury-600" />,
      title: "Precision Execution",
      description: "Our methodologies are precise, measurable, and designed for sustainable long-term results.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-luxury-600" />,
      title: "Measurable Impact",
      description: "We track both traditional business metrics and neurological indicators for complete visibility.",
    },
  ]

  const differentiators = [
    {
      title: "Traditional Consulting",
      items: [
        "Relies on outdated frameworks",
        "One-size-fits-all solutions",
        "Ignores human psychology",
        "Short-term thinking",
        "Generic market research",
      ],
      accent: "text-charcoal-500",
    },
    {
      title: "NXT Wave Approach",
      items: [
        "Neuroscience-backed strategies",
        "Customized to nervous system states",
        "Integrates performance psychology",
        "Sustainable growth focus",
        "Deep behavioral insights",
      ],
      accent: "text-luxury-600",
    },
  ]

  return (
    <section className="w-full pt-20 pb-8 md:py-16 lg:py-24 bg-gradient-to-br from-cream-200 to-white px-4 sm:px-6 lg:px-8">
      <div className="luxury-container">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center animate-on-scroll mb-16">
          <div className="space-y-6">
            <div className="luxury-badge">Our Manifesto</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-luxury-800 leading-tight">
              How We Work
            </h1>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[800px] text-charcoal-600 md:text-xl font-light leading-relaxed">
              We pioneer neurologically-aligned go-to-market strategy that integrates neuroscience, polyvagal theory,
              and performance psychology with traditional GTM frameworks for sustainable growth and superior alignment.
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mx-auto max-w-6xl py-12 space-y-16">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-800 mb-6">Our Philosophy</h2>
            <div className="luxury-divider mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-charcoal-600 font-light text-lg leading-relaxed">
              <p>
                <strong className="text-luxury-800">
                  Traditional business frameworks often ignore the biological and psychological realities of human
                  decision-making.
                </strong>
                We believe that business is inherently human and humans are neurological beings.
              </p>
              <p>
                We do not treat people as spreadsheet cells but as complex, emotionally-driven entities. Every customer
                choice, team action, and market response is grounded in the nervous system. Yet most consulting firms
                ignore this biological reality entirely.
              </p>
              <p className="text-xl font-medium text-luxury-700">
                Our strategies are built from this fundamental truth: business success requires neurological alignment.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-800 text-center mb-12">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-cream-200 rounded-none">{principle.icon}</div>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-luxury-800 mb-4">{principle.title}</h3>
                    <div className="luxury-divider w-12 mx-auto mb-4"></div>
                    <p className="text-charcoal-600 font-light">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The Scientific Marketing Approach */}
          <div className="animate-on-scroll bg-luxury-50 p-8 sm:p-12 border border-luxury-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-800 mb-6">
                The Scientific Marketing Approach (SMA)
              </h2>
              <div className="luxury-divider mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-charcoal-600 font-light text-lg">
                Our proprietary methodology that integrates neuroscience, polyvagal theory, and performance psychology
                with proven business strategy frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Nervous System Assessment</h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Map internal team and target market nervous system states. Identify neurobiological patterns
                      driving behaviors and resistance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Polyvagal Strategy Design</h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Create GTM strategies that align with the autonomic nervous system. Address safety, engagement,
                      trust, and decision readiness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">
                      Performance Psychology Integration
                    </h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Apply psychological frameworks to optimize team motivation, communication, and execution. Enhance
                      leadership effectiveness and team cohesion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Neurological Measurement</h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Track traditional KPIs alongside neural indicators (e.g., emotional resonance, stress reduction).
                      Validate strategy efficacy through comprehensive metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -left-3 -bottom-3 -right-3 border border-gold-400 z-0"></div>
                <video autoPlay loop muted playsInline className="w-full h-auto relative z-10">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_3536067231%20%281%29-BR085G18INERni5XLoGTtktwIX8F47.mov"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* MEDDPICC Integration */}
          <div className="animate-on-scroll bg-white p-8 sm:p-12 border border-luxury-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-800 mb-6">
                Integration with Classical GTM: MEDDPICC
              </h2>
              <div className="luxury-divider mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-charcoal-600 font-light text-lg">
                We incorporate MEDDPICC rigor into our SMA to ensure commercial accountability and operational
                alignment, creating a neurologically-informed sales methodology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Metrics</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Combine ROI with neural KPIs (e.g., trust indicators)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Economic Buyer</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Define neuro-personas and emotional decision levers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Decision Criteria</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Align with psychological drivers and nervous system states
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Decision Process</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Reduce cognitive load, ensure safe engagement pathways
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Paper Process</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Simplify contracts using stress-minimized design principles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Identify Pain</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Map to nervous system responses (e.g., threat activation)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Champion</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Cultivate internal advocates using motivation psychology
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Competition</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Mitigate threat responses, emphasize relational trust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-800 text-center mb-12">
              Traditional vs. NXT Wave
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {differentiators.map((column, index) => (
                <Card key={index} className={`border-0 shadow-luxury ${index === 1 ? "bg-luxury-50" : "bg-white"}`}>
                  <CardContent className="p-8">
                    <h3 className={`text-xl font-serif font-medium mb-6 text-center ${column.accent}`}>
                      {column.title}
                    </h3>
                    <div className="space-y-4">
                      {column.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          {index === 1 ? (
                            <CheckCircle className="h-5 w-5 text-luxury-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <div className="h-5 w-5 border border-charcoal-300 mt-0.5 flex-shrink-0"></div>
                          )}
                          <span className={`text-sm font-light ${column.accent}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Unique Value */}
          <div className="animate-on-scroll bg-gradient-to-r from-luxury-600 to-luxury-700 text-white p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Why This Matters</h2>
              <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="mb-4 flex justify-center">
                  <Zap className="h-12 w-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">40%+ Higher</h3>
                <p className="text-luxury-100 font-light">
                  Campaign effectiveness when strategies align with nervous system states
                </p>
              </div>
              <div>
                <div className="mb-4 flex justify-center">
                  <Shield className="h-12 w-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">35% Better</h3>
                <p className="text-luxury-100 font-light">
                  Team alignment and performance with neuroscience-backed approaches
                </p>
              </div>
              <div>
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">$100M+</h3>
                <p className="text-luxury-100 font-light">In revenue generated using our integrated methodology</p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="animate-on-scroll text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-800 mb-8">Our Commitment</h2>
            <div className="luxury-divider mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-charcoal-600 font-light text-lg leading-relaxed">
              <p>
                We are not traditional consultants. We are strategy architects rooted in science and human behavior.
                <strong className="text-luxury-800">
                  {" "}
                  Every system we design is validated by how the human brain and nervous system function, not just how
                  business textbooks say they should.
                </strong>
              </p>
              <p>
                Our strategies integrate the rigor of proven frameworks like MEDDPICC with the sophistication of
                neuroscience research, creating a methodology that drives both commercial success and human alignment.
              </p>
              <p className="text-xl font-medium text-luxury-700">
                This is not only a better way to grow. It's the future of how business gets done.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="luxury-button-primary w-full sm:min-w-[220px]" onClick={handleExperienceClick}>
                <span>Experience the Difference</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="luxury-button-secondary w-full sm:min-w-[220px]"
                onClick={handleMeetTeamClick}
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
