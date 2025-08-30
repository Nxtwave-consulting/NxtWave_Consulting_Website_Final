import Header from "@/components/header"
import Footer from "@/components/footer"
import FoundersSection from "@/components/founders-section"

export const metadata = {
  title: "About Us | NXT Wave Consulting",
  description:
    "Meet Kris Talajic, the visionary founder behind NXT Wave Consulting's innovative approach to neuroscience-backed business strategy.",
}

export default function FoundersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FoundersSection />
      </main>
      <Footer />
    </div>
  )
}
