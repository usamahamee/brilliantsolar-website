import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section id="video" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            <Play className="h-4 w-4" />
            See It In Action
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Watch How Solar{" "}
              <span className="text-secondary">Transforms Your Home</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See real results from Indiana homeowners who made the switch to
            Brilliant Solar Solutions.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="overflow-hidden rounded-2xl bg-primary shadow-2xl">
            {/* @ts-expect-error -- Wistia web component loaded via external script */}
            <wistia-player
              media-id="a2k3dmo2jc"
              aspect="0.5625"
              style={{ width: "min(320px, 100%)", height: 568 }}
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
          >
            Ready to Go Solar? Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
