import { ArrowRight } from "lucide-react"

export function TooGoodToBeTrue() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section 1: Still Wondering */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Still Wondering If {"It's"} Too Good To Be True?
            </span>
          </h2>
          <p className="mt-6 text-xl font-medium text-secondary">
            {"You're"} not alone.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Two of the most common questions we hear are:
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-lg font-semibold italic text-foreground">
              {'"Is this too good to be true?"'}
            </p>
            <p className="text-lg font-semibold italic text-foreground">
              {'"If solar is so great\u2026 why isn\'t everyone doing it?"'}
            </p>
          </div>
          <p className="mt-6 text-lg font-medium text-foreground">
            Fair questions.
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            {"And here's the real answer:"}
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">
            #1
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Section 2: Most people assume */}
        <div className="mx-auto max-w-3xl">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Homeowners assume 3 things about going solar.
          </h3>
          <div className="mt-8 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              They think it takes a ton of money to switch.
            </p>
            <p>They assume {"it's"} complicated and out of reach.</p>
            <p>They assume it just sounds too good to be true.</p>
            <p className="font-medium text-foreground">
              So they never look into it.
            </p>
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-secondary bg-muted p-6 md:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Here's"} the truth:{" "}
              <span className="font-semibold text-foreground">
                {"it's"} nothing upfront, nothing down, and nothing out of pocket
              </span>.
              Electric companies have been overcharging us for years, and {"we've"} been
              conditioned to believe a better way {"isn't"} available.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We want the opportunity to give you the facts so you can make an informed
              decision and know for certain if solar is a solution for you and your family.
            </p>
            <p className="mt-4 text-xl font-bold text-foreground">
              Solar {"isn't"} {'"too good to be true."'}
            </p>
            <p className="mt-2 text-lg font-medium text-secondary">
              {"It's"} just been misunderstood.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Section 3: Why Isn't Everyone Doing It */}
        <div className="mx-auto max-w-3xl">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Why {"Isn't"} Everyone Doing It?
          </h3>
          <p className="mt-6 text-center text-lg text-muted-foreground">
            Because most people:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
              {"Don't"} realize they qualify
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
              {"Haven't"} compared it to what {"they're"} already paying
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
              {"Haven't"} had someone explain it clearly
            </li>
          </ul>
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              Going solar {"isn't"} about hype.
            </p>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {"It's"} about math.
            </p>
            <p className="mt-2 text-lg font-medium text-secondary">
              And if the math works, it works.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Section 4: As A Homeowner */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
          <h3 className="text-center font-heading text-2xl font-bold md:text-3xl">
            As A Homeowner, You Have A Responsibility
          </h3>
          <div className="mt-8 flex flex-col gap-4 text-lg leading-relaxed text-primary-foreground/80">
            <p className="font-medium text-primary-foreground">
              You work hard for your home.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <p>You budget.</p>
              <p>You maintain it.</p>
              <p>You improve it.</p>
            </div>
            <p>
              Energy is one of your largest monthly bills.
            </p>
            <p>
              {"It's"} your responsibility {"\u2014"} as a smart homeowner{" "}
              {"\u2014"} to at least{" "}
              <span className="font-semibold text-secondary">
                explore a better way to power your home
              </span>.
            </p>
            <p className="text-primary-foreground/60">
              Not because someone said so.
            </p>
            <p>
              But because sending money to the utility company forever without
              exploring a better option{"\u2026"} {"doesn't"} make sense.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
            >
              Book Your Free Solar Savings Review
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-primary-foreground/60">
              Worst case? You stay exactly where you are.
            </p>
            <p className="text-sm font-medium text-primary-foreground/80">
              Best case? You take control of your power for the next 25 years.
            </p>
            <p className="mt-2 font-heading text-2xl font-bold text-secondary">
              Be Brilliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
