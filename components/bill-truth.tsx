import { TrendingUp, DollarSign, Ban } from "lucide-react"

export function BillTruth() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Visual */}
          <div className="relative">
            <div className="rounded-2xl bg-primary p-8 md:p-12">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
                Your Monthly Electric Bill
              </h3>
              <div className="mt-8 space-y-4">
                {[
                  { year: "2020", amount: "$140", width: "45%" },
                  { year: "2021", amount: "$165", width: "55%" },
                  { year: "2022", amount: "$195", width: "65%" },
                  { year: "2023", amount: "$230", width: "75%" },
                  { year: "2024", amount: "$275", width: "85%" },
                  { year: "2025", amount: "$320+", width: "95%" },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <span className="w-12 text-sm text-primary-foreground/60">
                      {item.year}
                    </span>
                    <div className="flex-1">
                      <div
                        className="rounded-md bg-secondary py-2 px-3 text-right text-sm font-bold text-secondary-foreground"
                        style={{ width: item.width }}
                      >
                        {item.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-primary-foreground/60">
                *Based on average Indiana residential rates
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              The Truth About Your Bill
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Your Electric Bill Is{" "}
                <span className="text-secondary">Designed To Go Up</span>
              </span>
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    Every year, rates increase
                  </h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Utility companies raise rates consistently. You don&apos;t
                    control it and there&apos;s nothing you can do about it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    You don&apos;t build equity
                  </h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Every dollar you send to the power company is gone forever.
                    You get nothing back.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <Ban className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    You just keep paying
                  </h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    If your electric bill is $150, $250, or $400+ per month&hellip;
                    that money could be going toward something you own.
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
