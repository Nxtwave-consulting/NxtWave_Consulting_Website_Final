import Header from "@/components/header"
import Footer from "@/components/footer"
import PrivacyPolicySection from "@/components/privacy-policy-section"

export const metadata = {
  title: "Privacy Policy | NXT Wave Consulting",
  description: "Privacy Policy for NXT Wave Consulting website and services.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PrivacyPolicySection />
      </main>
      <Footer />
    </div>
  )
}
