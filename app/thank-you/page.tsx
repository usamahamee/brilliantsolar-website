import { Check } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | Brilliant Solar Solutions",
  description: "Thanks for inquiring about solar power for your home.",
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary px-4">

      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/20">
          <Check className="h-10 w-10 text-secondary" strokeWidth={3} />
        </div>

        <h1 className="mt-8 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          <span className="text-balance">
            Great! Thanks for inquiring about solar power for your home.
          </span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
          A team member will be in touch with you in the next{" "}
          <span className="font-semibold text-secondary">24 hours</span>.
        </p>

        <p className="mt-4 text-primary-foreground/60">
          We look forward to showing you how much you can save with solar.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground transition-all hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
