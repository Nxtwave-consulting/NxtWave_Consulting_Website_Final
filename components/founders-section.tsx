"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Linkedin } from "lucide-react"

export default function FoundersSection() {
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

  const companies = [
    { name: "JP Morgan Chase", logo: "/images/logos/jpmorgan-chase-logo-new.jpeg" },
    { name: "ArangoDB", logo: "/images/logos/arangodb-logo.png" },
    { name: "Kubiya AI", logo: "/images/logos/kubiya-logo.png" },
    { name: "Vi", logo: "/images/logos/vi-logo.webp" },
    { name: "Philip Morris International", logo: "/images/logos/philip-morris-logo-updated.png" },
    { name: "Audi", logo: "/images/logos/audi-logo.png" },
    { name: "Accenture", logo: "/images/logos/accenture-logo.png" },
    { name: "PwC", logo: "/images/logos/pwc-logo.png" },
    { name: "Deloitte", logo: "/images/logos/deloitte-logo.png" },
    { name: "Brex", logo: "/images/logos/brex-logo-updated.png" },
    { name: "Altair", logo: "/images/logos/altair-logo.png" },
    { name: "Esri", logo: "/images/logos/esri-logo.png" },
    { name: "Optum", logo: "/images/logos/optum-logo.png" },
    { name: "United Healthcare", logo: "/images/logos/unitedhealthcare-logo.webp" },
    { name: "Visa", logo: "/images/logos/visa-logo.png" },
    { name: "HP", logo: "/images/logos/hp-logo.png" },
    { name: "VMware", logo: "/images/logos/vmware-logo.png" },
    { name: "RE/MAX", logo: "/images/logos/remax-logo.png" },
    { name: "FIS", logo: "/images/logos/fis-logo.png" },
    { name: "OpSec Security", logo: "/images/logos/opsec-logo.jpeg" },
    { name: "A+E Networks", logo: "/images/logos/ae-networks-logo.svg" },
    { name: "Project44", logo: "/images/logos/project44-logo.webp" },
  ]

  return (
    <section id="top" className="w-full pt-20 pb-8 md:py-16 lg:py-24 bg-cream-200 px-4 sm:px-6 lg:px-8">
      <div className="luxury-container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="space-y-4">
            <div className="luxury-badge">Leadership</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-luxury-800">
              Meet the Team
            </h1>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              Bringing together decades of experience in business strategy, neuroscience, technology innovation, and the
              essential art of workplace happiness.
            </p>
          </div>
        </div>

        {/* Company Logos Continuous Carousel - Two Rows */}
        <div className="mx-auto max-w-6xl py-12">
          <div className="text-center mb-6">
            <p className="text-sm text-luxury-600 font-medium">Worked with</p>
          </div>

          {/* First Row */}
          <div className="relative overflow-hidden mb-2 sm:mb-4">
            <div className="flex animate-scroll-row1">
              {/* First half of logos */}
              {[
                ...companies.slice(0, Math.ceil(companies.length / 2)),
                ...companies.slice(0, Math.ceil(companies.length / 2)),
                ...companies.slice(0, Math.ceil(companies.length / 2)),
              ].map((company, index) => (
                <div
                  key={`logo-row1-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-4 flex items-center justify-center h-12 sm:h-16 lg:h-20 w-24 sm:w-32 lg:w-40 bg-white rounded-none shadow-sm border border-gold-100 p-2 sm:p-3 lg:p-4 hover:shadow-luxury transition-shadow"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-row2">
              {/* Second half of logos */}
              {[
                ...companies.slice(Math.ceil(companies.length / 2)),
                ...companies.slice(Math.ceil(companies.length / 2)),
                ...companies.slice(Math.ceil(companies.length / 2)),
              ].map((company, index) => (
                <div
                  key={`logo-row2-${index}`}
                  className="flex-shrink-0 mx-4 flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 bg-white rounded-none shadow-sm border border-gold-100 p-3 sm:p-4 hover:shadow-luxury transition-shadow"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl py-12 space-y-12">
          {/* Kris Talajic */}
          <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 animate-on-scroll">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Header with Forbes BDC Badge and Stevie Awards Logo */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <h2 className="text-xl sm:text-2xl font-serif font-medium text-luxury-800">Kris Talajic</h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <a
                      href="https://councils.forbes.com/profile/Kris-Talajic-Founder-Global-VP-Growth-NXT-Wave-Consulting-Kubiya-AI/6618dfbb-b1ec-4b90-a59b-910daf4c56c1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                    >
                      <img
                        src="/images/forbes-bdc-member-badge.png"
                        alt="Forbes Business Development Council 2025 Official Member - View Profile"
                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                      />
                    </a>
                    <a
                      href="https://stevieawards.com/sales"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                      title="2025 Stevie® Awards Judge - Sales Achievements and Sales Distinction Awards Jury"
                    >
                      <img
                        src="/images/stevie-awards-logo.png"
                        alt="The Stevie Awards - 2025 Judge for Sales Achievements and Sales Distinction Awards Jury"
                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                      />
                    </a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-luxury-600 font-medium">Founder</p>
                <div className="luxury-divider w-12"></div>

                {/* Image with Text Wrap */}
                <div className="text-charcoal-600 leading-relaxed">
                  <div className="mb-4 sm:mb-6 sm:float-left sm:mr-6 lg:mr-8 sm:mb-4 relative">
                    {/* Gold frame */}
                    <div className="absolute -top-2 -left-2 -bottom-2 -right-2 sm:-top-3 sm:-left-3 sm:-bottom-3 sm:-right-3 border border-gold-400 z-0"></div>
                    <img
                      src="/images/kris-talajic-headshot.jpg"
                      alt="Kris Talajic, Founder of NXT Wave Consulting"
                      className="w-full max-w-xs mx-auto sm:w-[280px] lg:w-[350px] h-auto object-contain relative z-10"
                    />
                  </div>

                  <div className="space-y-4 font-light text-sm sm:text-base">
                    <p>
                      Kris is a visionary go-to-market executive with over a decade of experience leading high-impact
                      growth initiatives and driving transformative revenue outcomes, achieving over $100M in Annual
                      Recurring Revenue (ARR) throughout his career. He has held senior leadership roles including
                      Global Vice President of Growth at Kubiya AI, Vice President of Enterprise Sales – Healthcare at
                      Vi Labs, and World-Wide Director of Sales & International Business at ArangoDB.
                    </p>
                    <p>
                      A 2x entrepreneur, board advisor, and member of the Forbes Business Development Council, Kris
                      brings a rare blend of strategic business acumen and hands-on operational execution to every
                      engagement. His experience spans AI, cloud technologies, enterprise sales, and platform
                      engineering. As a founder of FMCG companies, he has a proven track record in both building
                      businesses from the ground up and scaling hyper-growth organizations.
                    </p>
                    <p>
                      Kris's thought leadership has been featured in Forbes and highlighted through speaking engagements
                      such as his featured interview at the NYSE Leaders in AI Summit, where he discussed the tangible
                      benefits of AI in engineering and business transformation. In recognition of his industry impact,
                      Kris has also been invited to serve as a judge for the prestigious 2025 Stevie® Awards for Sales &
                      Customer Service.
                    </p>
                  </div>
                </div>

                {/* Clear float and continue content */}
                <div className="clear-both space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>$100M+ ARR Achievement</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>2x Entrepreneur & Board Advisor</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>AI & Cloud Technology Expert</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>Senior Leadership at Global Companies</span>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-6 space-y-3">
                    <h4 className="text-base sm:text-lg font-serif font-medium text-luxury-800">Connect with Kris</h4>
                    <div className="luxury-divider w-12"></div>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.linkedin.com/in/ktalajic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-700 text-white rounded-none hover:bg-luxury-800 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>

                  {/* Kris's YouTube Video */}
                  <div className="mt-8 space-y-3">
                    <h4 className="text-base sm:text-lg font-serif font-medium text-luxury-800">
                      Featured Interview: Leaders in AI Summit at NYSE
                    </h4>
                    <div className="luxury-divider w-12"></div>
                    <p className="text-xs sm:text-sm text-charcoal-600 font-light">
                      Watch Kris discuss the tangible benefits of AI in platform engineering at the New York Stock
                      Exchange.
                    </p>
                    <div className="aspect-video rounded-none overflow-hidden relative">
                      {/* Gold frame */}
                      <div className="absolute -top-2 -left-2 -bottom-2 -right-2 border border-gold-400 z-0"></div>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/a9AqmwXgtJo"
                        title="Kris Talajic - Leaders in AI Summit at NYSE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="relative z-10"
                      />
                    </div>
                  </div>

                  {/* Link to Blogs Section */}
                  <div className="mt-6">
                    <Link
                      href="/blogs"
                      className="inline-flex items-center text-luxury-600 hover:text-luxury-700 font-medium"
                    >
                      View more of Kris's articles and media appearances
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chief Distraction Officers - Moni & Pupa */}
          <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 animate-on-scroll">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Header with Heart Icon */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif font-medium text-luxury-800">Moni & Pupa</h2>
                  <Heart className="h-8 w-8 text-pink-500 fill-current" />
                </div>
                <p className="text-sm text-luxury-600 font-medium">Chief Distraction Officers</p>
                <div className="luxury-divider w-12"></div>

                {/* Image with Text Wrap */}
                <div className="text-charcoal-600 leading-relaxed">
                  <div className="mb-6 sm:float-left sm:mr-8 sm:mb-4 relative">
                    {/* Gold frame */}
                    <div className="absolute -top-3 -left-3 -bottom-3 -right-3 border border-gold-400 z-0"></div>
                    <img
                      src="/images/moni-pupa-pugs.jpg"
                      alt="Moni and Pupa, the Chief Distraction Officers at NXT Wave Consulting"
                      className="w-full max-w-sm mx-auto sm:w-[350px] h-auto object-contain relative z-10"
                    />
                  </div>

                  <div className="space-y-4 font-light">
                    <p>
                      Meet our most important team members: Moni, our energetic 2.5-year-old fawn pug, and Pupa, our
                      wise 15-year-old black pug. As our Chief Distraction Officers, they bring an unmatched combination
                      of unconditional love, irresistible cuteness, and just the right amount of delightful chaos to our
                      daily operations.
                    </p>
                    <p>
                      Moni, with her boundless enthusiasm and playful spirit, ensures that no video call goes
                      uninterrupted and no important document remains un-investigated. Her specialty lies in perfectly
                      timed zoomies during client presentations and her uncanny ability to sense exactly when someone
                      needs a cuddle break.
                    </p>
                    <p>
                      Pupa, our distinguished senior officer, brings decades of experience in the fine art of strategic
                      napping and executive-level treat negotiations. Her wisdom shines through her perfectly timed
                      sighs during long meetings and her expert ability to remind everyone that sometimes the best
                      business strategy is simply taking a moment to breathe and enjoy the simple things.
                    </p>
                    <p>
                      Together, they form the heart of our workplace culture, providing essential services in stress
                      relief, perspective maintenance, and ensuring that our team never takes itself too seriously.
                      Their daily contributions include mandatory walk breaks, impromptu play sessions, and serving as
                      living reminders that balance isn't just a business buzzword, it's a way of life.
                    </p>
                  </div>
                </div>

                {/* Clear float and continue content */}
                <div className="clear-both space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>Unlimited Cuddles & Emotional Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>Expert-Level Stress Relief Services</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>Professional Chaos Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-600">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>Work-Life Balance Enforcement</span>
                    </div>
                  </div>

                  {/* Fun Stats */}
                  <div className="mt-6 p-6 bg-cream-100 border border-gold-200">
                    <h4 className="text-lg font-serif font-medium text-luxury-800 mb-3">Professional Achievements</h4>
                    <div className="luxury-divider w-12 mb-4"></div>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="font-medium text-luxury-800">Moni (Fawn Pug):</p>
                        <p className="text-charcoal-600 font-light">2.5 years of dedicated service</p>
                        <p className="text-charcoal-600 font-light">Specializes in high-energy motivation</p>
                      </div>
                      <div>
                        <p className="font-medium text-luxury-800">Pupa (Black Pug):</p>
                        <p className="text-charcoal-600 font-light">15 years of executive experience</p>
                        <p className="text-charcoal-600 font-light">Master of strategic relaxation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
