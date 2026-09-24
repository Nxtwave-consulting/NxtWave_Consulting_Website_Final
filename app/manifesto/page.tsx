import Header from "@/components/header"
import Footer from "@/components/footer"
import ManifestoSection from "@/components/manifesto-section"

export const metadata = {
  title: "Our Manifesto | NXT Wave Consulting",
  description:
    "How we combine go-to-market rigor with neuroscience and behavioral science to reach and convert hard-to-reach populations in Healthcare and Tech. Our philosophy, our Behaviorally Informed Conversion System, and what makes us different.",
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
