import { Check, Clock, ShieldCheck } from "lucide-react"

export function Booking() {

  return (
    <section id="book" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
              Free Consultation
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">
                See How Much You Can{" "}
                <span className="text-secondary">Save With Solar</span>
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              This is not a sales ambush. This is a 10-minute breakdown to see:
            </p>

            <ul className="mt-6 space-y-3" role="list">
              {[
                "What you currently send to the power company",
                "How much solar can save you each month",
                "If switching makes sense for your home",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 leading-relaxed text-primary-foreground/70">
              If it doesn&apos;t make sense? We&apos;ll tell you. If it does?
              You could eliminate your electric bill for the next 25 years.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/70">10-Minute Call</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/70">No Obligation</span>
              </div>

            </div>
          </div>

          {/* Right - Form */}
          <div
            className="overflow-hidden rounded-2xl bg-background shadow-2xl"
            style={{ minHeight: 680 }}
            dangerouslySetInnerHTML={{
              __html: `
                <iframe
                  src="https://api.netscoreapp.com/widget/form/dB9vPT3DMiAGihk0KHwX"
                  style="width:100%;height:100%;min-height:648px;border:none;border-radius:3px"
                  id="inline-dB9vPT3DMiAGihk0KHwX"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website contact Form"
                  data-height="648"
                  data-layout-iframe-id="inline-dB9vPT3DMiAGihk0KHwX"
                  data-form-id="dB9vPT3DMiAGihk0KHwX"
                  title="Website contact Form"
                ></iframe>
              `,
            }}
          />
        </div>
      </div>
    </section>
  )
}
