"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Calendar, Play } from "lucide-react"

export default function BlogsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="w-full pt-20 pb-8 md:py-16 lg:py-24 bg-gradient-to-br from-luxury-50 to-cream-200 px-4 sm:px-6 lg:px-8">
      <div className="luxury-container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="space-y-4">
            <div className="luxury-badge">Thought Leadership</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-luxury-800">
              Media
            </h1>
            <div className="luxury-divider mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-charcoal-600 md:text-xl font-light">
              Insights, articles, and media appearances from our team on business strategy, neuroscience, and
              leadership.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 bg-cream-200 border border-gold-200 h-auto">
              <TabsTrigger
                value="articles"
                className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-luxury-800"
              >
                Articles
              </TabsTrigger>
              <TabsTrigger
                value="interviews"
                className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-luxury-800"
              >
                Interviews
              </TabsTrigger>
              <TabsTrigger
                value="blogs"
                className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-luxury-800"
              >
                Blog Posts
              </TabsTrigger>
              <TabsTrigger
                value="podcasts"
                className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-luxury-800"
              >
                Podcasts
              </TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <h2 className="text-2xl font-serif font-medium text-luxury-800">Forbes Articles</h2>
                  <a
                    href="https://councils.forbes.com/profile/Kris-Talajic-Founder-Global-VP-Growth-NXT-Wave-Consulting-Kubiya-AI/6618dfbb-b1ec-4b90-a59b-910daf4c56c1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80 flex-shrink-0"
                  >
                    <img
                      src="/images/forbes-bdc-member-badge.png"
                      alt="Forbes Business Development Council 2025 Official Member"
                      className="h-8 sm:h-10 w-auto"
                    />
                  </a>
                </div>

                {/* Article 1 - New Determinism Article */}
                <Card className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-white rounded-lg border border-gold-200">
                        <img
                          src="/images/forbes-magazine-logo.png"
                          alt="Forbes"
                          className="w-8 h-auto sm:w-12 lg:w-16 object-contain"
                        />
                      </div>
                      <div className="space-y-3 min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-medium text-luxury-800">
                          <a
                            href="https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2025/09/05/why-determinism-is-the-missing-piece-in-enterprise-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-luxury-600 transition-colors"
                          >
                            Why Determinism Is The Missing Piece In Enterprise AI
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 inline-block ml-2" />
                          </a>
                        </h3>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-luxury-600">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>September 5, 2025</span>
                        </div>
                        <p className="text-charcoal-600 font-light text-sm sm:text-base">
                          Exploring why deterministic AI systems are crucial for enterprise adoption and how
                          predictable, consistent AI behavior can transform business operations. This article discusses
                          the importance of reliability and control in enterprise AI implementations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Article 2 - Scaling DevOps Article */}
                <Card className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-white rounded-lg border border-gold-200">
                        <img
                          src="/images/forbes-magazine-logo.png"
                          alt="Forbes"
                          className="w-8 h-auto sm:w-12 lg:w-16 object-contain"
                        />
                      </div>
                      <div className="space-y-3 min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-medium text-luxury-800">
                          <a
                            href="https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2025/02/28/scaling-devops-and-engineering-teams-with-ai-teammates/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-luxury-600 transition-colors"
                          >
                            Scaling DevOps And Engineering Teams With AI Teammates
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 inline-block ml-2" />
                          </a>
                        </h3>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-luxury-600">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>February 28, 2025</span>
                        </div>
                        <p className="text-charcoal-600 font-light text-sm sm:text-base">
                          Exploring how AI teammates can transform DevOps workflows and enhance engineering team
                          productivity. This article discusses practical implementation strategies and real-world case
                          studies of successful AI integration in technical teams.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Article 3 - Cultural Competence Article */}
                <Card className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-lg border border-gold-200">
                        <img
                          src="/images/forbes-magazine-logo.png"
                          alt="Forbes"
                          className="w-12 h-auto sm:w-16 object-contain"
                        />
                      </div>
                      <div className="space-y-3 min-w-0 flex-1">
                        <h3 className="text-lg font-medium text-luxury-800">
                          <a
                            href="https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2025/03/05/20-best-practices-for-building-culturally-competent-leadership-teams/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-luxury-600 transition-colors"
                          >
                            20 Best Practices For Building Culturally Competent Leadership Teams
                            <ExternalLink className="h-4 w-4 inline-block ml-2" />
                          </a>
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>March 5, 2025</span>
                        </div>
                        <p className="text-charcoal-600 font-light">
                          Essential strategies for developing inclusive leadership that drives organizational success
                          across diverse teams. Learn how cultural competence creates competitive advantages and fosters
                          innovation in global markets.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Interviews Tab */}
            <TabsContent value="interviews">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-medium text-luxury-800 mb-6">Featured Interviews</h2>

                {/* Interview 1 */}
                <Card className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-serif font-medium text-luxury-800 mb-2">
                        Leaders in AI Summit at NYSE
                      </h3>
                      <div className="luxury-divider w-12"></div>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden relative">
                      <div className="absolute -top-2 -left-2 -bottom-2 -right-2 border border-gold-400 z-0"></div>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/a9AqmwXgtJo"
                        title="Kris Talajic - Leaders in AI Summit at NYSE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="relative z-10"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-luxury-600">
                        <Calendar className="h-4 w-4" />
                        <span>New York Stock Exchange • 2024</span>
                      </div>
                      <p className="text-charcoal-600 font-light">
                        Watch Kris discuss the tangible benefits of AI in platform engineering and business
                        transformation at the prestigious Leaders in AI Summit hosted at the New York Stock Exchange.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Interview 2 */}
                <Card className="border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-serif font-medium text-luxury-800 mb-2">
                        The Importance of Building Successful Sales Teams with Kris Talajic
                      </h3>
                      <div className="luxury-divider w-12"></div>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden relative">
                      <div className="absolute -top-2 -left-2 -bottom-2 -right-2 border border-gold-400 z-0"></div>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/c02_RKXUoXw"
                        title="Kris Talajic - AI Engineering Leadership Discussion"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="relative z-10"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-luxury-600">
                        <Calendar className="h-4 w-4" />
                        <span>Jun 20, 2023</span>
                      </div>
                      <p className="text-charcoal-600 font-light">
                        Kris talks about his experience in sales and building successful sales teams. He also emphasizes
                        the importance of recruiting and finding the right people for the right stage of the company,
                        the challenges of managing a remote sales team, and driving success in sales teams.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Blog Posts Tab */}
            <TabsContent value="blogs">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-medium text-luxury-800 mb-6">Latest Blog Posts</h2>

                {/* Blog Post 1 - Stevie Awards */}
                <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-48 md:h-80">
                        <img
                          src="/images/stevie-awards-logo.png"
                          alt="The Stevie Awards"
                          className="absolute inset-0 h-full w-full object-contain bg-white p-4 md:p-8"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>November 27, 2024</span>
                        </div>
                        <div className="luxury-badge mb-2">Blog Post</div>
                        <h3 className="text-xl font-serif font-medium leading-tight text-luxury-800">
                          Kris Talajic Selected to Judge the 2025 Stevie® Awards for Sales & Customer Service
                        </h3>
                        <div className="luxury-divider w-12"></div>
                        <p className="text-charcoal-600 font-light">
                          Kris Talajic has been selected to serve as a judge for the prestigious 2025 Stevie® Awards for
                          Sales & Customer Service, reflecting his expertise in go-to-market strategy and sales
                          excellence.
                        </p>
                        <a
                          href="/blog/stevie-awards-judge-2025"
                          className="text-luxury-600 hover:text-luxury-700 font-medium inline-flex items-center"
                        >
                          Read more
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blog Post 2 - Forbes BDC */}
                <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-48 md:h-80">
                        <img
                          src="/images/forbes-bdc-2025-banner.png"
                          alt="Forbes Business Development Council"
                          className="absolute inset-0 h-full w-full object-contain bg-white p-4 md:p-8"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>October 1, 2024</span>
                        </div>
                        <div className="luxury-badge mb-2">Press Release</div>
                        <h3 className="text-xl font-serif font-medium leading-tight text-luxury-800">
                          Kris Talajic Accepted into Forbes Business Development Council
                        </h3>
                        <div className="luxury-divider w-12"></div>
                        <p className="text-charcoal-600 font-light">
                          Forbes Business Development Council is an invitation-only community for senior-level sales and
                          business development executives.
                        </p>
                        <a
                          href="/press-release/forbes-bdc"
                          className="text-luxury-600 hover:text-luxury-700 font-medium inline-flex items-center"
                        >
                          Read more
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blog Post 3 - TechCrunch Disrupt */}
                <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-48 md:h-80">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1730216484565-sd99PzGAWSsxER4xuuxvig4uvbk8ki.jpeg"
                          alt="TechCrunch Disrupt Llama Lounge"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>October 15, 2024</span>
                        </div>
                        <div className="luxury-badge mb-2">Blog Post</div>
                        <h3 className="text-xl font-serif font-medium leading-tight text-luxury-800">
                          Showcasing Innovation at TechCrunch Disrupt's Llama Lounge
                        </h3>
                        <div className="luxury-divider w-12"></div>
                        <p className="text-charcoal-600 font-light">
                          Kris Talajic shares insights from demoing Kubiya.ai at the exclusive Llama Lounge meetup at
                          TechCrunch Disrupt.
                        </p>
                        <a
                          href="/blog/techcrunch-disrupt-llama-lounge"
                          className="text-luxury-600 hover:text-luxury-700 font-medium inline-flex items-center"
                        >
                          Read more
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blog Post 4 - Data Science Salon */}
                <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-48 md:h-80">
                        <img
                          src="/images/dss-miami-panel.png"
                          alt="Data Science Salon Miami"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>September 18, 2023</span>
                        </div>
                        <div className="luxury-badge mb-2">Blog Post</div>
                        <h3 className="text-xl font-serif font-medium leading-tight text-luxury-800">
                          Banking on AI: Pioneering Financial Solutions with LLMs
                        </h3>
                        <div className="luxury-divider w-12"></div>
                        <p className="text-charcoal-600 font-light">
                          Kris Talajic served as a panelist at Data Science Salon Miami, discussing AI and Large
                          Language Models in finance.
                        </p>
                        <a
                          href="/blog/data-science-salon-miami-banking-ai"
                          className="text-luxury-600 hover:text-luxury-700 font-medium inline-flex items-center"
                        >
                          Read more
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcasts">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-medium text-luxury-800 mb-6">Featured Podcasts</h2>

                {/* Podcast 1 - The Tooth Sleuth */}
                <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[300px_1fr]">
                      <div className="relative h-60 md:h-80 flex items-center justify-center bg-gray-900 p-4">
                        <img
                          src="/images/tooth-sleuth-podcast.webp"
                          alt="The Tooth Sleuth Podcast"
                          className="max-h-full max-w-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-serif font-medium text-luxury-800">The Tooth Sleuth Podcast</h3>
                        <div className="luxury-divider w-12"></div>
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>June 19, 2024</span>
                        </div>
                        <p className="text-charcoal-600 font-light">
                          Kris Talajic shares his unique background as a former professional soccer player turned AI
                          technology expert, discussing the impact of AI in the dental space and overall Healthcare.
                        </p>
                        <div className="space-y-3 pt-2">
                          <a
                            href="https://podcasts.apple.com/ee/podcast/tts065-kris-talajic-part-1/id1775673242?i=1000701928540"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-luxury-700 text-white rounded-lg hover:bg-luxury-800 transition-colors"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Listen on Apple Podcasts
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Podcast 2 - The Outbound Sales Podcast */}
                <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[300px_1fr]">
                      <div className="relative h-60 md:h-80 flex items-center justify-center bg-gradient-to-br from-luxury-400 to-luxury-600 p-4">
                        <img
                          src="/images/outbound-sales-podcast.png"
                          alt="The Outbound Sales Podcast"
                          className="max-h-full max-w-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-serif font-medium text-luxury-800">The Outbound Sales Podcast</h3>
                        <div className="luxury-divider w-12"></div>
                        <div className="flex items-center gap-2 text-sm text-luxury-600">
                          <Calendar className="h-4 w-4" />
                          <span>June 20, 2023</span>
                        </div>
                        <p className="text-charcoal-600 font-light">
                          Kris Talajic joins Chris Zuby to share insights on building a sales team and adapting to the
                          ever-changing world of sales, discussing the parallels between sales and sports.
                        </p>
                        <div className="space-y-3 pt-2">
                          <a
                            href="https://open.spotify.com/episode/7qpnpfHRuaIVFwdwDFaFOE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Listen on Spotify
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
