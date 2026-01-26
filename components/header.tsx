"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Our Approach", href: "/#approach" },
    // { name: "Team", href: "/founders" }, // Temporarily hidden - uncomment to restore
    { name: "Media", href: "/blogs" },
    { name: "Contact", href: "/#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    // Wait a bit longer for page transitions
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 300)
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // Only handle hash links, let regular links work normally
    if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2) // Remove "/#"

      // If we're not on the home page, navigate there first
      if (window.location.pathname !== "/") {
        // Navigate to home page with hash, the home page will handle scrolling
        window.location.href = href
      } else {
        // We're on the home page, scroll to the section
        scrollToSection(sectionId)
      }
    }
    setIsMenuOpen(false)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // If we're not on the home page, navigate there first
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact"
    } else {
      // We're on the home page, scroll to the contact section
      scrollToSection("contact")
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/nxt-wave-logo.png" alt="NXT Wave Consulting Logo" className="h-8 w-8" />
              <span className="text-base font-serif tracking-wide text-luxury-800">NXT Wave Consulting</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.href.startsWith("/#") ? (e) => handleNavClick(item.href, e) : () => setIsMenuOpen(false)}
                className="text-xs lg:text-sm font-body font-light text-luxury-700 transition-colors hover:text-luxury-900 hover:underline hover:underline-offset-8 decoration-gold-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="luxury-button-secondary border-gold-500 text-luxury-800 text-xs px-3 py-1.5"
              asChild
            >
              <Link href="/manifesto">Learn How We Work</Link>
            </Button>
            <Button
              size="sm"
              className="luxury-button-primary bg-luxury-700 text-xs px-3 py-1.5"
              onClick={handleContactClick}
            >
              Book a Consultation
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-luxury-800">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-cream-200 border-l border-gold-200">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center p-6 border-b border-gold-200">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <img src="/images/nxt-wave-logo.png" alt="NXT Wave Consulting Logo" className="h-8 w-8" />
                    <span className="text-lg font-serif tracking-wide text-luxury-800">NXT Wave Consulting</span>
                  </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-2 flex-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center py-4 px-4 text-lg font-body text-luxury-700 transition-colors hover:text-luxury-900 hover:bg-cream-300 rounded-md border-b border-gold-100 last:border-b-0"
                      onClick={
                        item.href.startsWith("/#") ? (e) => handleNavClick(item.href, e) : () => setIsMenuOpen(false)
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t border-gold-200 space-y-4">
                  <Button variant="outline" className="w-full h-14 luxury-button-secondary text-base" asChild>
                    <Link href="/manifesto" onClick={() => setIsMenuOpen(false)}>
                      Learn How We Work
                    </Link>
                  </Button>
                  <Button className="w-full h-14 luxury-button-primary text-base" onClick={handleContactClick}>
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
