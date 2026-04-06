import { Check, Battery, Car, Home, Lock, BarChart3 } from "lucide-react"
import Image from "next/image"

export function Benefits() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Offset up to 100% of your electric usage",
      description:
        "Custom-designed systems that match your actual energy consumption.",
    },
    {
      icon: Lock,
      title: "Lock in predictable payments",
      description:
        "No more surprise rate hikes. Know exactly what you'll pay each month.",
    },
    {
      icon: Home,
      title: "Increase your home value",
      description:
        "Solar panels add real equity and value to your property.",
    },
    {
      icon: Battery,
      title: "Battery backup options",
      description:
        "Keep the lights on during outages with whole-home battery storage.",
    },
    {
      icon: Car,
      title: "EV charging integration",
      description:
        "Power your electric vehicle with clean, free energy from your roof.",
    },
  ]

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
            What Solar Actually Does
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Replace Your Electric Bill With A Solar Payment{" "}
              <span className="text-secondary">That Builds Equity</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            If you are a homeowner and your roof {"isn't"} heavily shaded, we
            might be the solution to your high electricity bills. No deposit,
            no upfront money &mdash; just better power at a better rate.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-secondary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-primary p-6">
            <div className="absolute inset-0">
              <Image
                src="/images/solar-install.jpg"
                alt="Solar panel installation"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative">
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                Ready to see the math?
              </h3>
              <p className="mt-2 leading-relaxed text-primary-foreground/70">
                Get a personalized savings projection for your home in 10
                minutes.
              </p>
            </div>
            <a
              href="#book"
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition-all hover:brightness-110"
            >
              <Check className="h-4 w-4" />
              Get My Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
