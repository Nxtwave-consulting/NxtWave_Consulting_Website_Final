import Header from "@/components/header"
import Footer from "@/components/footer"
import CareersSection from "@/components/careers-section"

export const metadata = {
  title: "Careers | NXT Wave Consulting",
  description:
    "Join our team at NXT Wave Consulting and help us revolutionize business strategy with neuroscience-backed approaches.",
}

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CareersSection />
      </main>
      <Footer />
    </div>
  )
}
