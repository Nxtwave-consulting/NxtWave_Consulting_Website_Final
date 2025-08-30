"use client"

import { useEffect } from "react"

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const sectionId = hash.substring(1) // Remove the #
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }, 500) // Wait longer for page to fully load
      }
    }

    // Run on initial load
    handleHashScroll()

    // Also run when hash changes
    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [])

  return null // This component doesn't render anything
}
