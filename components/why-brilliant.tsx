import { BarChart3, Home, Target, MessageSquare } from "lucide-react"
import Image from "next/image"

export function WhyBrilliant() {
  const pillars = [
    {
      icon: BarChart3,
      title: "Your Usage",
      description: "We analyze your actual energy consumption patterns to size your system perfectly.",
    },
    {
      icon: Home,
      title: "Your Roof",
      description: "Orientation, angle, shading — every detail matters for maximum production.",
    },
    {
      icon: Target,
      title: "Your Long-Term Goals",
      description: "Whether it's EV charging, battery backup, or maximum savings — we plan ahead.",
    },
    {
      icon: MessageSquare,
      title: "Real Financial Projections",
      description: "We walk you through the numbers in plain English. No pressure. No confusion.",
    },
  ]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Why Brilliant
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Not The Biggest Solar Company.{" "}
                <span className="text-secondary">The Most Knowledgeable.</span>
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Some companies sell volume. We design precision systems based on
              what actually matters for your home.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Image
                src="/images/brilliant-brand.png"
                alt="Brilliant Solar Solutions brand graphic with solar panels"
                width={280}
                height={280}
                className="drop-shadow-lg"
              />
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-secondary/30 hover:shadow-md"
              >
                <pillar.icon className="h-8 w-8 text-secondary" />
                <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
