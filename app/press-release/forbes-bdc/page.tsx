import Header from "@/components/header"
import Footer from "@/components/footer"
import ForbesPressReleaseSection from "@/components/forbes-press-release-section"

export const metadata = {
  title: "Press Release: Kris Talajic Accepted into Forbes Business Development Council | NXT Wave Consulting",
  description:
    "Kris Talajic, founder of NXT Wave Consulting, has been accepted into Forbes Business Development Council, an invitation-only community for senior-level sales and business development executives.",
}

export default function ForbesPressReleasePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ForbesPressReleaseSection />
      </main>
      <Footer />
    </div>
  )
}
