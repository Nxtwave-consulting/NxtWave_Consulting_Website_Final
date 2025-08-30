import { Calendar, MapPin, Users } from "lucide-react"

export default function LlamaLoungePostSection() {
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
                Showcasing Innovation at TechCrunch Disrupt's Llama Lounge
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                An incredible evening of AI innovation, networking, and thought leadership at one of San Francisco's
                most exclusive tech events.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-teal-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>October 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>GenLab Venture Studio, San Francisco</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>AI Innovators & Tech Leaders</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="space-y-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1730216484565-sd99PzGAWSsxER4xuuxvig4uvbk8ki.jpeg"
                alt="Kris Talajic presenting Kubiya.ai at Llama Lounge"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center italic">
                Kris Talajic presenting Kubiya.ai's innovative platform to the Llama Lounge community
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                What an incredible evening! I had the absolute pleasure of demoing{" "}
                <a
                  href="https://kubiya.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Kubiya.ai
                </a>{" "}
                at the exclusive Llama Lounge meetup hosted at GenLab Venture Studio in San Francisco. As an official
                side event of TechCrunch Disrupt, this gathering brought together some of the brightest minds in AI and
                technology innovation.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The energy in the room was absolutely electric. From the moment I stepped up to present, I could feel
                the excitement and curiosity from the audience. The Llama Lounge has built a reputation for attracting
                serious AI innovators, and this event certainly lived up to that standard.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Kubiya.ai Demo</h2>

              <p className="text-muted-foreground leading-relaxed">
                During my presentation, I showcased how Kubiya.ai is revolutionizing the way engineering teams interact
                with their infrastructure and workflows. Our AI-powered platform acts as a virtual teammate,
                understanding natural language requests and executing complex DevOps tasks with unprecedented accuracy
                and efficiency.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The audience was particularly engaged when I demonstrated our platform's ability to:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Automate complex deployment processes through conversational AI</li>
                <li>Provide intelligent troubleshooting and system diagnostics</li>
                <li>Integrate seamlessly with existing DevOps toolchains</li>
                <li>Learn and adapt to team-specific workflows and preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Power of Community</h2>

              <p className="text-muted-foreground leading-relaxed">
                A huge shoutout to{" "}
                <a
                  href="https://www.linkedin.com/in/jowyang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Jeremiah Owyang
                </a>{" "}
                for curating such an incredible crew of AI innovators. The conversations throughout the evening were
                absolutely on fire! 🔥 It's rare to find a room where every conversation revolves around pushing the
                boundaries of what's possible with artificial intelligence.
              </p>

              {/* Group Photo */}
              <div className="space-y-4 my-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1730216483886-CObaRHPquYAtqmZKLg5E5Axnk0bhDM.jpeg"
                  alt="Llama Lounge community group photo at GenLab Venture Studio"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground text-center italic">
                  The incredible Llama Lounge community at GenLab Venture Studio - Photo by Erick Davidson
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                What struck me most about this event was the collaborative spirit. Rather than competitive posturing,
                there was a genuine desire to share knowledge, explore partnerships, and collectively advance the field
                of AI. These are the kinds of conversations that lead to breakthrough innovations.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why This Matters</h2>

              <p className="text-muted-foreground leading-relaxed">
                Being part of TechCrunch Disrupt's ecosystem, even as a side event, represents something significant.
                It's a validation that the work we're doing at Kubiya.ai resonates with the broader tech community and
                addresses real pain points that engineering teams face every day.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The feedback we received was overwhelmingly positive, with several attendees expressing interest in
                pilot programs and deeper technical discussions. More importantly, the event reinforced our belief that
                AI teammates aren't just a futuristic concept – they're a present-day necessity for teams looking to
                scale efficiently.
              </p>

              {/* Quote Section */}
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600 my-8">
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "Events like Llama Lounge remind me why I'm passionate about this space. When you bring together
                  brilliant minds who are all working toward similar goals – making AI more accessible, more practical,
                  and more impactful – magic happens. The conversations we had that night will influence product
                  decisions and strategic directions for months to come."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold text-foreground">- Kris Talajic</cite>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Looking Forward</h2>

              <p className="text-muted-foreground leading-relaxed">
                As I reflect on the evening, I'm energized by the possibilities ahead. The AI community in San Francisco
                continues to push boundaries, and events like Llama Lounge serve as crucial catalysts for innovation and
                collaboration.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                For those interested in learning more about Kubiya.ai or exploring how AI teammates can transform your
                engineering workflows, I'd love to continue the conversation. The future of DevOps is conversational,
                and we're just getting started.
              </p>

              {/* Event Details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Event Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Event:</p>
                    <p className="text-muted-foreground">Llama Lounge Meetup</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Host:</p>
                    <p className="text-muted-foreground">Jeremiah Owyang</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Venue:</p>
                    <p className="text-muted-foreground">GenLab Venture Studio</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Affiliation:</p>
                    <p className="text-muted-foreground">TechCrunch Disrupt Official Side Event</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
