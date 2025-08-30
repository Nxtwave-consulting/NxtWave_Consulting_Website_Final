import Header from "@/components/header"
import Footer from "@/components/footer"
import ManifestoSection from "@/components/manifesto-section"

export const metadata = {
  title: "Our Manifesto | NXT Wave Consulting",
  description:
    "Discover how we're revolutionizing business strategy by combining cutting-edge GTM approaches with neuroscience-backed methodologies. Learn our philosophy, process, and what makes us different.",
}

export default function ManifestoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  )
}
