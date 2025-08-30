import { Calendar, Award, ExternalLink } from "lucide-react"

export default function StevieAwardsJudgePostSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-amber-100 text-amber-900 mb-4">
                Blog Post
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kris Talajic Selected to Judge the 2025 Stevie® Awards for Sales & Customer Service
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Reflecting on the privilege of evaluating excellence in sales achievements and customer service
                innovation
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-teal-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 27, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Stevie® Awards Judge</span>
                </div>
              </div>
            </div>

            {/* Stevie Awards Logo */}
            <div className="flex justify-center py-8">
              <div className="bg-white p-8 rounded-lg">
                <img
                  src="/images/stevie-awards-logo.png"
                  alt="The Stevie Awards - The World's Premier Business Award Competitions"
                  className="max-w-md h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                I am deeply honored to announce that I have been selected to serve as a judge for the prestigious{" "}
                <a
                  href="https://stevieawards.com/sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  2025 Stevie® Awards for Sales & Customer Service
                </a>
                , specifically for the Sales Achievements and Sales Distinction Awards Jury. This recognition represents
                not only a personal milestone but also an opportunity to contribute to celebrating excellence in the
                sales and customer service industry.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">About the Stevie® Awards</h2>

              <p className="text-muted-foreground leading-relaxed">
                The Stevie Awards are widely recognized as the world's premier business award competitions, honoring
                outstanding achievements in sales, customer service, business development, and management. Since their
                inception, the Stevie Awards have become the gold standard for recognizing excellence in business
                performance and innovation.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The Sales & Customer Service Awards specifically celebrate the achievements of sales, business
                development, and customer service professionals and teams worldwide. These awards recognize not just
                results, but the innovative strategies, exceptional service delivery, and transformative approaches that
                drive business success.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Judging Process</h2>

              <p className="text-muted-foreground leading-relaxed">
                As a member of the Sales Achievements and Sales Distinction Awards Jury, I will be evaluating
                submissions across multiple categories that showcase the very best in sales performance, strategy, and
                innovation. The judging process is rigorous and comprehensive, requiring careful assessment of:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Quantifiable business results and revenue impact</li>
                <li>Innovation in sales strategies and methodologies</li>
                <li>Excellence in customer relationship management</li>
                <li>Leadership in sales team development and performance</li>
                <li>Creative approaches to market penetration and growth</li>
                <li>Demonstration of best practices in sales operations</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why This Matters</h2>

              <p className="text-muted-foreground leading-relaxed">
                Having spent over a decade in go-to-market leadership roles, achieving $50M+ in ARR across various
                organizations, I understand firsthand the challenges and opportunities that sales professionals face in
                today's rapidly evolving business landscape. The integration of AI, the shift toward consultative
                selling, and the increasing importance of customer experience have fundamentally transformed how we
                approach sales and business development.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This judging opportunity allows me to contribute to recognizing and celebrating the innovative
                approaches that are driving the industry forward. It's particularly meaningful given my work at the
                intersection of traditional sales excellence and neuroscience-backed methodologies – areas where I've
                seen tremendous innovation and results.
              </p>

              {/* Certificate Image */}
              <div className="space-y-4 my-8">
                <img
                  src="/images/stevie-awards-certificate.png"
                  alt="Stevie® Awards Certificate - Kris Talajic, Judge for Sales Achievements and Sales Distinction Awards Jury 2025"
                  className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-lg border border-gray-200"
                />
                <p className="text-sm text-muted-foreground text-center italic">
                  Official certificate recognizing appointment as judge for the Sales Achievements and Sales Distinction
                  Awards Jury
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Looking Forward</h2>

              <p className="text-muted-foreground leading-relaxed">
                I'm excited to review the submissions and learn from the innovative strategies and exceptional results
                that sales professionals and teams around the world are achieving. The diversity of approaches,
                industries, and markets represented in these awards always provides valuable insights that can benefit
                the entire sales community.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This role also aligns perfectly with my commitment to advancing the sales profession through thought
                leadership, mentorship, and the sharing of best practices. Whether through my work with Forbes Business
                Development Council, speaking engagements, or direct consulting, I believe in the power of collective
                learning and the importance of recognizing excellence.
              </p>

              {/* Quote Section */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600 my-8">
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "Being selected as a judge for the Stevie® Awards is both an honor and a responsibility. These awards
                  represent the pinnacle of achievement in sales and customer service, and I'm committed to bringing my
                  experience in go-to-market strategy, neuroscience-backed methodologies, and revenue growth to the
                  evaluation process. I look forward to celebrating the innovative approaches that are shaping the
                  future of our industry."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold text-foreground">- Kris Talajic</cite>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">A Commitment to Excellence</h2>

              <p className="text-muted-foreground leading-relaxed">
                This appointment reflects not just personal recognition, but also the innovative work we're doing at NXT
                Wave Consulting in combining traditional go-to-market excellence with neuroscience-backed approaches.
                Our methodology of integrating nervous system regulation, performance psychology, and data-driven
                strategies represents the kind of forward-thinking approach that the Stevie Awards celebrate.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As we move through 2025, I'm excited to continue contributing to the advancement of sales excellence,
                both through this judging role and through our continued work helping organizations achieve sustainable,
                scalable growth through scientifically-informed strategies.
              </p>

              {/* Learn More Section */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Learn More</h3>
                <div className="space-y-3">
                  <a
                    href="https://stevieawards.com/sales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    2025 Stevie® Awards for Sales & Customer Service
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                  <br />
                  <a
                    href="https://stevieawards.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    The Stevie Awards Official Website
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
