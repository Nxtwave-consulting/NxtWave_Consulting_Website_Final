"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, CheckCircle, ExternalLink } from "lucide-react"

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          interest: "",
          message: "",
        })
      } else {
        setError(result.message || "An error occurred. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setError("")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="luxury-section bg-cream-200 relative px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-luxury-50 opacity-30 transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gold-100 opacity-20 transform skew-y-12"></div>
      </div>

      <div className="luxury-container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="space-y-4">
            <div className="luxury-badge">Get in Touch</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-luxury-800">
              Ready to Transform Your Strategy?
            </h2>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              Schedule a consultation or send us a message to learn how our unique GTM services combined with
              neuroscience-backed approach can elevate your business.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:gap-12 py-12 sm:py-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1 animate-on-scroll">
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-gold-400 bg-white">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-medium text-luxury-800 mb-2">Email Us</h3>
                <p className="text-charcoal-600 text-sm sm:text-base">info@nxtwave-consulting.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex items-center justify-center w-12 h-12 border border-gold-400 bg-white">
                <Phone className="h-5 w-5 text-luxury-600" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Call Us</h3>
                <p className="text-charcoal-600">+1 (646) 450-1677</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex items-center justify-center w-12 h-12 border border-gold-400 bg-white">
                <MapPin className="h-5 w-5 text-luxury-600" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-luxury-800 mb-2">Visit Us</h3>
                <p className="text-charcoal-600">750 Lexington Ave Floor 25, New York, NY 10022</p>
              </div>
            </div>

            <div className="pt-6 relative">
              <div className="relative">
                {/* Gold frame */}
                <div className="absolute -top-1 -left-1 -bottom-1 -right-1 sm:-top-2 sm:-left-2 sm:-bottom-2 sm:-right-2 border border-gold-400 z-0"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4736726620334!2d-73.96954485079068!3d40.762130650965254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e581034713%3A0x7269a6252ef2245b!2s750%20Lexington%20Ave%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1748706090267!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 sm:h-[250px]"
                  title="NXT Wave Consulting Office Location"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/sfDWdMf34WaB1wGq8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 sm:px-3 sm:py-2 border border-gold-400 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-luxury-700 hover:bg-cream-100 transition-colors z-20"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white border border-gold-200 shadow-luxury p-4 sm:p-6 lg:p-8 order-1 lg:order-2 animate-on-scroll">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-6 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-luxury-50 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-luxury-600" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-luxury-800">Thank You!</h3>
                <p className="text-charcoal-600 max-w-md">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <Button onClick={resetForm} variant="outline" className="luxury-button-secondary mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-serif font-medium text-luxury-800">Book a Discovery Call</h3>
                  <div className="luxury-divider mx-auto"></div>
                  <p className="text-sm text-charcoal-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-luxury-800">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="luxury-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-luxury-800">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-luxury-800">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="luxury-input"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-luxury-800">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleInputChange}
                    className="luxury-input"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-luxury-800">
                    I'm interested in
                  </label>
                  <Select value={formData.interest} onValueChange={handleSelectChange}>
                    <SelectTrigger id="interest" className="luxury-input">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gtm">GTM Strategy</SelectItem>
                      <SelectItem value="neuroscience">Neuroscience-Based Marketing</SelectItem>
                      <SelectItem value="team">Team Alignment</SelectItem>
                      <SelectItem value="coaching">Executive Coaching</SelectItem>
                      <SelectItem value="financial">Financial Strategy</SelectItem>
                      <SelectItem value="research">Research & Innovation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-luxury-800">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[120px] luxury-input"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" className="luxury-button-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request Consultation"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
