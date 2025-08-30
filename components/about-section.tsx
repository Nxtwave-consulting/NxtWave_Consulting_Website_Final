"use client"

import { useEffect } from "react"
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react"

export default function AboutSection() {
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
    <section id="about" className="luxury-section bg-white px-4 sm:px-6 lg:px-8">
      <div className="luxury-container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="space-y-4">
            <div className="luxury-badge">About Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-luxury-800">
              Where Science Meets Strategy
            </h2>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              With 15 years of experience across Tech, AI, Finance, FMCG, and Healthcare, we bring a unique blend of
              business acumen and neuroscience expertise.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:gap-12 py-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] animate-on-scroll">
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -top-2 -right-2 -bottom-2 -left-2 sm:-top-3 sm:-right-3 sm:-bottom-3 sm:-left-3 border border-gold-400 z-0"></div>

              {/* Video container with more compact dimensions */}
              <div className="relative w-full aspect-[3/2.5] z-10 bg-luxury-800/10">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_3536067231%20%281%29-BR085G18INERni5XLoGTtktwIX8F47.mov"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-900/30 to-transparent"></div>
              </div>

              {/* Decorative element - made smaller for mobile */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gold-500 z-0"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8 animate-on-scroll">
            <ul className="grid gap-8">
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-luxury-50 border border-luxury-200">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800">Proven Track Record</h3>
                  </div>
                  <p className="text-charcoal-600 pl-11 sm:pl-[52px] font-light text-sm sm:text-base">
                    Over $100M+ in revenue generated for clients through our integrated approach to GTM strategy.
                  </p>
                </div>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-luxury-50 border border-luxury-200">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800">
                      For Companies of All Sizes
                    </h3>
                  </div>
                  <p className="text-charcoal-600 pl-11 sm:pl-[52px] font-light text-sm sm:text-base">
                    From startups to enterprises, we've helped companies find clarity, scale sustainably, and execute
                    with confidence.
                  </p>
                </div>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-luxury-50 border border-luxury-200">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800">Deep Expertise</h3>
                  </div>
                  <p className="text-charcoal-600 pl-11 sm:pl-[52px] font-light text-sm sm:text-base">
                    Specialized in performance psychology meets neuroscience, polyvagal theory, and nervous system
                    alignment for business growth, positioning and market penetration.
                  </p>
                </div>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-luxury-50 border border-luxury-200">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800">Financial Leadership</h3>
                  </div>
                  <p className="text-charcoal-600 pl-11 sm:pl-[52px] font-light text-sm sm:text-base">
                    Extensive experience in strategic finance working with small companies to Fortune 5 companies,
                    bringing strategic financial insight to our consulting approach.
                  </p>
                </div>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-luxury-50 border border-luxury-200">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-luxury-800">Measurable Results</h3>
                  </div>
                  <p className="text-charcoal-600 pl-11 sm:pl-[52px] font-light text-sm sm:text-base">
                    Our clients experience an average of 40% increase in campaign effectiveness and 35% improvement in
                    team alignment.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
