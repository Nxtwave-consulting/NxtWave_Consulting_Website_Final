import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

export default function DataScienceSalonPostSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-teal-100 text-teal-900 mb-4">
                Blog Post
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Banking on AI: Pioneering Financial Solutions with LLMs
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Exploring the transformative power of Large Language Models in financial services at Data Science Salon
                Miami
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-teal-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>September 18, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>BrainStation, Miami, Florida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Data Science Salon</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="space-y-4">
              <img
                src="/images/dss-miami-panel.png"
                alt="Banking on AI: Pioneering Financial Solutions with LLMs - Data Science Salon Miami Panel"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center italic">
                Kris Talajic (third from left) with fellow panelists Antonio Ponte-Dávila (Citi), Catalina Arango
                (Blackstone), and Sergio Vazquez (Visa) at Data Science Salon Miami
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                I'm proud to announce that I had the honor of serving as a panelist at{" "}
                <a
                  href="https://www.linkedin.com/events/7092890289551335424/comments/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Data Science Salon Miami
                </a>{" "}
                on September 18th, 2023, discussing the transformative topic of "Banking on AI: Pioneering Financial
                Solutions with LLMs." This prestigious event brought together industry leaders to explore how artificial
                intelligence, particularly Large Language Models, is revolutionizing the financial services sector.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Distinguished Panel</h2>

              <p className="text-muted-foreground leading-relaxed">
                I had the privilege of sharing the stage alongside some truly exceptional leaders from the financial
                industry's most influential institutions. Our panel featured senior executives from:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Antonio Ponte-Dávila</strong> - SVP & Deposits Product Manager at Citi
                </li>
                <li>
                  <strong>Catalina Arango</strong> - Assistant VP at Blackstone
                </li>
                <li>
                  <strong>Sergio Vazquez</strong> - Senior Director, Data Science at Visa
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                This diverse representation of financial services expertise created a rich dialogue about the current
                state and future potential of AI in banking and finance.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The AI Revolution in Finance</h2>

              <p className="text-muted-foreground leading-relaxed">
                During our panel discussion, we explored how AI, especially Large Language Models (LLMs), is
                fundamentally transforming the finance industry. The conversation covered several key areas where AI is
                making significant impact:
              </p>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600 my-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Discussion Points</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Customer Service Automation:</strong> How LLMs are enhancing customer interactions and
                    support
                  </li>
                  <li>
                    • <strong>Risk Assessment:</strong> AI-powered models for more accurate risk evaluation and
                    management
                  </li>
                  <li>
                    • <strong>Fraud Detection:</strong> Advanced pattern recognition for identifying suspicious
                    activities
                  </li>
                  <li>
                    • <strong>Regulatory Compliance:</strong> Automated compliance monitoring and reporting
                  </li>
                  <li>
                    • <strong>Investment Analysis:</strong> AI-driven insights for better investment decision-making
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Miami Machine Learning Week</h2>

              <p className="text-muted-foreground leading-relaxed">
                The Data Science Salon event served as the perfect kickoff to Miami Machine Learning Week, bringing
                together data scientists, AI researchers, and industry practitioners from across the region. The event
                was hosted at BrainStation, providing an ideal venue for this engaging fireside chat format.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The timing couldn't have been better, as 2023 marked a pivotal year for generative AI adoption in
                financial services. Our discussion provided attendees with practical insights into how major financial
                institutions are implementing these technologies while navigating regulatory requirements and
                maintaining customer trust.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Generative AI in Finance</h2>

              <p className="text-muted-foreground leading-relaxed">
                One of the most compelling aspects of our discussion was exploring how generative AI is creating new
                possibilities in finance. From automated report generation to personalized financial advice, the
                applications are vast and growing rapidly.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We discussed how AI and machine learning are not just improving existing processes but fundamentally
                disrupting the industry as a whole. The conversation highlighted both the tremendous opportunities and
                the important considerations around ethics, transparency, and responsible AI implementation.
              </p>

              {/* Quote Section */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-8">
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "The intersection of AI and finance represents one of the most exciting frontiers in technology today.
                  Having the opportunity to discuss these developments alongside leaders from Citi, Blackstone, and Visa
                  provided invaluable insights into how the industry is evolving. The collaborative spirit and shared
                  commitment to responsible innovation was truly inspiring."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold text-foreground">- Kris Talajic</cite>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Looking Forward</h2>

              <p className="text-muted-foreground leading-relaxed">
                The insights shared during this panel continue to influence how we approach AI implementation in
                financial services. The collaborative discussions with industry leaders reinforced the importance of
                thoughtful, strategic adoption of AI technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As we continue to see rapid advancement in AI capabilities, events like Data Science Salon Miami serve
                as crucial forums for sharing knowledge, best practices, and lessons learned. The financial services
                industry's embrace of AI represents a fundamental shift that will benefit consumers, businesses, and the
                broader economy.
              </p>

              {/* Event Details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Event Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Event:</p>
                    <p className="text-muted-foreground">Data Science Salon Miami</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Panel Topic:</p>
                    <p className="text-muted-foreground">Banking on AI: Pioneering Financial Solutions with LLMs</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Venue:</p>
                    <p className="text-muted-foreground">BrainStation, Miami, Florida</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Co-Panelists:</p>
                    <p className="text-muted-foreground">Senior Executives from Citi, Blackstone, and Visa</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.linkedin.com/events/7092890289551335424/comments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                  >
                    View Original Event
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
