import Header from "@/components/header"
import Footer from "@/components/footer"
import LlamaLoungePostSection from "@/components/llama-lounge-post-section"

export const metadata = {
  title: "Showcasing Innovation at TechCrunch Disrupt's Llama Lounge | NXT Wave Consulting",
  description:
    "Kris Talajic shares insights from demoing Kubiya.ai at the exclusive Llama Lounge meetup, an official side event of TechCrunch Disrupt hosted at GenLab Venture Studio in San Francisco.",
}

export default function LlamaLoungePostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <LlamaLoungePostSection />
      </main>
      <Footer />
    </div>
  )
}
