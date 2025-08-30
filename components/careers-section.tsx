"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Users, TrendingUp, Award } from "lucide-react"

export default function CareersSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    // For demo purposes, we'll just show the success message
    setIsSubmitted(true)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-100 text-teal-900 hover:bg-teal-200">
              Join Our Team
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Careers at NXT Wave</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Help us revolutionize business strategy by combining cutting-edge GTM approaches with neuroscience-backed
              methodologies.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Why Work With Us?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At NXT Wave Consulting, we're building the future of business strategy. Join a team that values
                  innovation, scientific rigor, and human-centered approaches to business growth.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Growth Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Work on cutting-edge projects with Fortune 500 companies and innovative startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Learn from Experts</h3>
                    <p className="text-sm text-muted-foreground">
                      Collaborate with industry leaders in neuroscience, business strategy, and technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Collaborative Culture</h3>
                    <p className="text-sm text-muted-foreground">
                      Join a team that values diverse perspectives and innovative thinking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-teal-100">
                <h3 className="font-semibold mb-3">Current Focus Areas</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Go-to-Market Strategy</li>
                  <li>• Neuroscience-Based Marketing</li>
                  <li>• Financial Strategy & Analysis</li>
                  <li>• Executive Coaching</li>
                  <li>• Business Development</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                  <CheckCircle className="h-16 w-16 text-teal-600" />
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your application and will get back to you within 48 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Join Our Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Interested in working with us? Send us your information and we'll be in touch.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Position of Interest
                    </label>
                    <Select>
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategy">Strategy Consultant</SelectItem>
                        <SelectItem value="marketing">Marketing Specialist</SelectItem>
                        <SelectItem value="finance">Financial Analyst</SelectItem>
                        <SelectItem value="business-dev">Business Development</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="experience"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Years of Experience
                    </label>
                    <Select>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tell us about yourself
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Share your background, interests, and why you'd like to join our team..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Submit Application
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
