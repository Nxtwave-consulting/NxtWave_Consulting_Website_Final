import Header from "@/components/header"
import Footer from "@/components/footer"
import TermsOfServiceSection from "@/components/terms-of-service-section"

export const metadata = {
  title: "Terms of Service | NXT Wave Consulting",
  description: "Terms of Service for NXT Wave Consulting website and services.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TermsOfServiceSection />
      </main>
      <Footer />
    </div>
  )
}
