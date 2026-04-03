import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Very easy to work with and get the job done. I did my research and came prepared and they met my expectations for being good and up front. Get an estimate and see if it's right for you with the upcoming price hikes that will probably continue. Lock that bill in for life. The installers were also wonderful and respectful. Great stuff.",
    name: "Shawn Wright",
  },
  {
    quote:
      "They started installation sooner than expected, and everything went well. The workers knew their job and were very courteous and answered any questions. I was surprised it only took one day to be up and running. Looking forward to years of service. Glad I picked Brilliant Solar Solutions.",
    name: "Marian Oldendorf",
  },
  {
    quote:
      "I had a good experience with Brilliant. They had to go through a lot of hoops with my particular installation and for that I am grateful. I now have a good system for the lowest price of any company offering a similar system. I plan on doing further business with them in the future!",
    name: "Christian Banks",
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            <Star className="h-4 w-4" />
            Customer Reviews
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            <span className="text-balance">
              Hear From{" "}
              <span className="text-secondary">Our Homeowners</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            Real reviews from real Indiana homeowners who made the switch to
            Brilliant Solar.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-secondary opacity-60" />

              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed text-primary-foreground/80">
                {`"${testimonial.quote}"`}
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary-foreground/50">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
