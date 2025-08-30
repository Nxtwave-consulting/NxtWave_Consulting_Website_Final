import Header from "@/components/header"
import Footer from "@/components/footer"
import DataScienceSalonPostSection from "@/components/data-science-salon-post-section"

export const metadata = {
  title: "Banking on AI: Pioneering Financial Solutions with LLMs | NXT Wave Consulting",
  description:
    "Kris Talajic served as a panelist at Data Science Salon Miami, discussing how AI and Large Language Models are transforming the finance industry alongside senior executives from Citi, Blackstone, and Visa.",
}

export default function DataScienceSalonPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DataScienceSalonPostSection />
      </main>
      <Footer />
    </div>
  )
}
