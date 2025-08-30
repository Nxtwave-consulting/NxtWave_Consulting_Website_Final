import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogsSection from "@/components/blogs-section"

export const metadata = {
  title: "Media | NXT Wave Consulting",
  description:
    "Thought leadership, articles, blog posts, and media appearances from NXT Wave Consulting's founder and team.",
}

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BlogsSection />
      </main>
      <Footer />
    </div>
  )
}
