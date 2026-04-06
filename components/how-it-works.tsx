import { CalendarCheck, FileText, Sun } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: CalendarCheck,
      title: "Book A Free Solar Savings Call",
      description:
        "We review your current bill and home details. Takes 10 minutes — no obligation.",
    },
    {
      number: "02",
      icon: FileText,
      title: "See Your Custom Plan",
      description:
        "You'll see how much you can save every month on electric — and over the next 25 years.",
    },
    {
      number: "03",
      icon: Sun,
      title: "Install & Start Producing",
      description:
        "Generate your own power and reduce or eliminate your electric bill.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
            How It Works
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            <span className="text-balance">
              3 Simple Steps To{" "}
              <span className="text-secondary">Eliminate Your Electric Bill</span>
            </span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary-foreground/10 lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Step number badge */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-secondary-foreground">
                  {step.number}
                </div>

                <div className="mt-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur">
                  <step.icon className="mx-auto h-8 w-8 text-secondary" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-primary-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-primary-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-lg font-semibold text-primary-foreground">
          That&apos;s it. Simple, transparent, and no surprises.
        </p>
      </div>
    </section>
  )
}
