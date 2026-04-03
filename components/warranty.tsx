import { Shield, Zap, CreditCard, Wrench, HeadphonesIcon } from "lucide-react"

export function Warranty() {
  const protections = [
    { icon: Shield, label: "25-Year Equipment Warranty" },
    { icon: Zap, label: "25-Year Production Guarantee" },
    { icon: CreditCard, label: "Financing Available" },
    { icon: Wrench, label: "Professional Installation" },
    { icon: HeadphonesIcon, label: "Ongoing Service Support" },
  ]

  return (
    <section id="warranty" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-16">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              What Makes This Safe
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Protected For{" "}
                <span className="text-secondary">25 Years</span>
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {protections.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-xl bg-muted p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <span className="text-sm font-semibold leading-tight text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-muted-foreground">
              You&apos;re not guessing.{" "}
              <strong className="text-foreground">You&apos;re upgrading.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
