import { MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Brilliant Solar Solutions"
              width={360}
              height={90}
              className="h-16 w-auto rounded-md"
            />
            <p className="mt-3 text-sm leading-relaxed opacity-60">
              Indiana&apos;s trusted solar experts. Licensed, bonded, and
              insured. Certified installer with 25-year warranty on most
              products.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-60">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 text-secondary" />
                Serving IN, IL, OH, MI & Nationwide
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  href="#benefits"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  Solar Benefits
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#warranty"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  Warranty
                </a>
              </li>
              <li>
                <a
                  href="#qualify"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  Do I Qualify?
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-sm font-semibold text-secondary transition-opacity hover:opacity-80"
                >
                  Get Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs opacity-50">
          <p>
            &copy; {new Date().getFullYear()} Brilliant Solar Solutions. All
            rights reserved. Licensed, bonded and insured.
          </p>
        </div>
      </div>
    </footer>
  )
}
