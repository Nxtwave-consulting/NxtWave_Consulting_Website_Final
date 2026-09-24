"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, TrendingUp, Heart, ArrowRight, CheckCircle, Zap, Award } from "lucide-react"
import { BarrierPathsIllustration } from "@/components/illustrations"

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
        "Every strategy is grounded in neuroscience and behavioral science research, not just intuition.",
    },
    {
      icon: <Heart className="h-8 w-8 text-luxury-600" />,
      title: "Human-Centered Design",
      description:
        "We design for how people actually decide, including the barriers of trust, effort, and perceived risk that keep hard-to-reach audiences from acting.",
    },
    {
      icon: <Target className="h-8 w-8 text-luxury-600" />,
      title: "Precision Execution",
      description: "Our methodologies are precise, measurable, and designed for sustainable long-term results.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-luxury-600" />,
      title: "Measurable Impact",
      description:
        "Every program runs against a control group, so we can prove what converted, for whom, and why.",
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
        "Built for hard-to-reach populations",
        "Diagnoses the barrier behind each segment",
        "Proven with test-and-control measurement",
        "Deep Healthcare and Tech expertise",
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
              We build go-to-market strategies and Behaviorally Informed Conversion Systems that combine neuroscience
              and behavioral science with proven GTM frameworks, so organizations in Healthcare and Tech can reach
              and convert the populations that standard outreach misses.
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
                We do not treat people as spreadsheet cells but as complex, emotionally-driven decision makers. The
                member who skips a screening, the patient who never enrolls, the buyer who stalls in evaluation: each
                is responding to a specific barrier, whether trust, effort, access, or perceived risk. Most strategies
                never diagnose it, so they send more of the same message and get the same silence.
              </p>
              <p className="text-xl font-medium text-luxury-700">
                Our strategies are built from this fundamental truth: you can't convert an audience until you understand
                what is stopping it from acting.
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
                The Behaviorally Informed Conversion System
              </h2>
              <div className="luxury-divider mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-charcoal-600 font-light text-lg">
                Our proprietary system for reaching hard-to-reach populations. It integrates neuroscience and behavioral
                science with proven go-to-market frameworks, and it is built to be measured.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Population &amp; Barrier Mapping</h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Segment the audience by behavior and diagnose what blocks each segment from acting: awareness,
                      trust, access, effort, or perceived risk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">
                      Neuroscience-Informed Design
                    </h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Design the message, messenger, and moment for each segment using what neuroscience shows about
                      attention, trust, risk, and reward.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Journey Orchestration</h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Sequence the right touches across the right channels, executed through your own teams and
                      systems, so each segment gets the intervention that fits its barrier.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-200 text-luxury-700 font-serif text-xl flex-shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-luxury-900">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Measure, Learn, Scale</h3>
                    <p className="text-charcoal-600 font-light text-sm">
                      Run every program against a control group, measure true conversion lift by segment, and feed what
                      we learn into the next cycle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -left-3 -bottom-3 -right-3 border border-gold-400 z-0"></div>
                <div className="relative z-10">
                  <BarrierPathsIllustration />
                </div>
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
                We build MEDDPICC rigor into the Behaviorally Informed Conversion System to ensure commercial
                accountability and operational alignment, creating a neuroscience-informed sales methodology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Metrics</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Combine ROI with behavioral KPIs (e.g., response, activation, conversion lift)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Economic Buyer</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Define behavioral personas and the emotional levers behind each decision
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Decision Criteria</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Align with the psychological drivers and barriers behind each decision
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Decision Process</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Reduce cognitive load and friction at every step
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
                      Simplify contracts and approvals with low-friction design
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-luxury-50 border border-luxury-100">
                  <div className="w-2 h-2 bg-luxury-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800 mb-1">Identify Pain</h4>
                    <p className="text-sm text-charcoal-600 font-light">
                      Map to the perceived risks and barriers that stall action
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
                      Reduce perceived risk, emphasize trust and credibility
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="h-12 w-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">+44%</h3>
                <p className="text-luxury-100 font-light">Conversion Increase</p>
              </div>
              <div>
                <div className="mb-4 flex justify-center">
                  <Zap className="h-12 w-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">2x</h3>
                <p className="text-luxury-100 font-light">Operational Efficiency</p>
              </div>
              <div>
                <div className="mb-4 flex justify-center">
                  <Target className="h-12 w-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">+9%</h3>
                <p className="text-luxury-100 font-light">Schedule Rate Lift</p>
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
                  Every system we design is validated by how people actually decide and act, not just how business
                  textbooks say they should.
                </strong>
              </p>
              <p>
                Our strategies integrate the rigor of proven frameworks like MEDDPICC with the sophistication of
                neuroscience research, creating a system that reaches the people others miss and proves the result.
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
