import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/aerial-neighborhood.jpg"
          alt="Aerial view of neighborhood with solar panels installed on multiple rooftops"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Indiana&apos;s Trusted Solar Experts
              </span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Stop Paying The Power Company{" "}
                <span className="text-secondary">Every Month</span>
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              If {"you've"} been curious about going solar, you probably assumed
              it takes a ton of money to switch.{" "}
              <strong className="text-primary-foreground">
                {"It's"} actually nothing upfront, nothing down, and nothing out of pocket.
              </strong>{" "}
              Backed by a 25-year warranty and 25-year production guarantee.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#book"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
              >
                See If My Home Qualifies
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/20 px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
              >
                Watch Video
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/70">25-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/70">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/70">Nothing Out Of Pocket</span>
              </div>
            </div>
          </div>

          {/* Right - Stats card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur">
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                Why Homeowners Are Switching
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-primary-foreground/5 p-4">
                  <p className="font-heading text-3xl font-bold text-secondary">20%+</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Indiana rate hikes recently
                  </p>
                </div>
                <div className="rounded-xl bg-primary-foreground/5 p-4">
                  <p className="font-heading text-3xl font-bold text-secondary">$0</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Nothing upfront or out of pocket
                  </p>
                </div>
                <div className="rounded-xl bg-primary-foreground/5 p-4">
                  <p className="font-heading text-3xl font-bold text-secondary">25 yr</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Production guarantee
                  </p>
                </div>
                <div className="rounded-xl bg-primary-foreground/5 p-4">
                  <p className="font-heading text-3xl font-bold text-secondary">100%</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Electric offset possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
