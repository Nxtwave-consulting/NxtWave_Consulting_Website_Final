import { Calendar, ExternalLink } from "lucide-react"

export default function ForbesPressReleaseSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-blue-100 text-blue-900 mb-4">
                Press Release
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kris Talajic Accepted into Forbes Business Development Council
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Forbes Business Development Council is an invitation-only community for senior-level sales and business
                development executives.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-teal-600">
                <Calendar className="h-4 w-4" />
                <span>New York, NY - October 1, 2024</span>
              </div>
            </div>

            {/* Forbes Banner */}
            <div className="flex justify-center py-8">
              <img
                src="/images/forbes-bdc-2025-banner.png"
                alt="Forbes Business Development Council 2025 Official Member"
                className="max-w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>New York, NY, October 1st 2024</strong> - Kris Talajic, NXT Wave Consulting, a strategic
                advisory firm that redefines go-to-market execution by merging cutting-edge business strategy with
                neuroscience-backed marketing psychology. With over 15 years of experience across tech, AI, finance,
                FMCG, and healthcare, we help companies of all sizes, from startups to Fortune 5, achieve clarity, scale
                sustainably, and drive measurable growth, has been accepted into Forbes Business Development Council, an
                invitation-only community for senior-level sales and business development executives.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Kris Talajic was selected by a review committee based on the depth and diversity of his experience.
                Criteria for acceptance include a track record of successfully impacting business growth metrics, as
                well as personal and professional achievements and honors.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As a member of the Council, Kris Talajic has access to a variety of exclusive opportunities designed to
                help him reach peak professional influence. He will connect and collaborate with other respected leaders
                in a private forum. Kris Talajic will also have the opportunity to share his expert insights in original
                articles and contribute to published Expert Panels alongside other experts on Forbes.com.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Finally, Kris Talajic will benefit from exclusive access to membership-branded marketing collateral,
                high-touch support from the Forbes Councils member concierge team, and complimentary membership in EXEC
                - the luxury hotel, travel, lifestyle, and business benefits program.
              </p>

              {/* Quote Section */}
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600 my-8">
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "I am honored to join the Forbes Business Development Council and excited to contribute to this
                  esteemed community of innovative and accomplished business leaders. Being part of this council
                  provides a valuable platform to share insights from my work at the intersection of strategy,
                  neuroscience, and growth, while also learning from peers who are driving meaningful impact across
                  industries. I look forward to deepening thought leadership, exchanging best practices, and continuing
                  to elevate the way organizations approach business development in today's rapidly evolving landscape."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold text-foreground">- Kris Talajic</cite>
              </div>

              {/* About Forbes Councils */}
              <div className="space-y-4 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-foreground">About Forbes Councils</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Forbes Councils is a collective of invitation-only communities created in partnership with Forbes and
                  the expert community builders who founded Young Entrepreneur Council (YEC). In Forbes Councils,
                  exceptional business owners and leaders come together with the people and resources that can help them
                  thrive.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To learn more about Forbes Councils, visit{" "}
                  <a
                    href="https://councils.forbes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                  >
                    https://councils.forbes.com
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                  .
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Media Contact</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">NXT Wave Consulting</p>
                  <p className="text-muted-foreground">750 Lexington Ave, Floor 25</p>
                  <p className="text-muted-foreground">New York, NY 10022</p>
                  <p className="text-muted-foreground">Email: info@nxtwave-consulting.com</p>
                  <p className="text-muted-foreground">Phone: +1 (646) 450-1677</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
