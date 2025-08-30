import Header from "@/components/header"
import Footer from "@/components/footer"
import StevieAwardsJudgePostSection from "@/components/stevie-awards-judge-post-section"

export const metadata = {
  title: "Kris Talajic Selected to Judge 2025 Stevie® Awards for Sales & Customer Service | NXT Wave Consulting",
  description:
    "Kris Talajic has been selected to serve as a judge for the prestigious 2025 Stevie® Awards for Sales & Customer Service, specifically for the Sales Achievements and Sales Distinction Awards Jury.",
}

export default function StevieAwardsJudgePostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <StevieAwardsJudgePostSection />
      </main>
      <Footer />
    </div>
  )
}
