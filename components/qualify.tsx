import { Check, ArrowRight } from "lucide-react"

export function Qualify() {
  const criteria = [
    "Own your home",
    "Have an average electric bill of $150+",
    "Have decent credit",
    "Live in Indiana, Illinois, Ohio, Michigan or surrounding states",
  ]

  return (
    <section id="qualify" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Qualification Check
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Do You <span className="text-secondary">Qualify?</span>
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Most homeowners qualify. If that&apos;s you &mdash; it&apos;s worth
              seeing the numbers.
            </p>

            <ul className="mt-8 space-y-4" role="list">
              {criteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground transition-all hover:brightness-110"
            >
              Check My Eligibility
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Urgency card */}
          <div className="rounded-2xl bg-primary p-8 md:p-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Act Now
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
              Utility Rates Aren&apos;t Waiting
            </h3>
            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-primary-foreground/80">
                Every month you delay, you send another payment to the power
                company. You could be producing instead.
              </p>
              <p className="leading-relaxed text-primary-foreground/80">
                Spring install spots fill quickly &mdash; especially before
                summer peak rates hit.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-secondary/20 bg-secondary/10 p-6">
              <p className="text-center text-lg font-semibold text-secondary">
                Avoid the huge rate hikes coming 2025-2026
              </p>
              <p className="mt-1 text-center text-sm text-primary-foreground/60">
                Become inflation and rate hike proof
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
