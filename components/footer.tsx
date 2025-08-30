import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gold-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="luxury-container py-6 sm:py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <img src="/images/nxt-wave-logo.png" alt="NXT Wave Consulting Logo" className="h-5 w-5 sm:h-6 sm:w-6" />
            <p className="text-xs sm:text-sm text-charcoal-600">
              © {new Date().getFullYear()} NXT Wave Consulting. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
            <Link
              href="/privacy"
              className="text-xs sm:text-sm text-charcoal-600 hover:text-luxury-800 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-sm text-charcoal-600 hover:text-luxury-800 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/careers"
              className="text-xs sm:text-sm text-charcoal-600 hover:text-luxury-800 transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
