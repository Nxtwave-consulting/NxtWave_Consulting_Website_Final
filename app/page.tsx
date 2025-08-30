import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ApproachSection from "@/components/approach-section"
import ContactSection from "@/components/contact-section"
import HashScrollHandler from "@/components/hash-scroll-handler"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-200">
      <HashScrollHandler />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
