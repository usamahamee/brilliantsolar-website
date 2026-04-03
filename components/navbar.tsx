"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 text-sm">
          <span className="text-xs opacity-80">Serving IN, IL, OH, MI & Nationwide</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Brilliant Solar Solutions"
              width={400}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#benefits" className="text-sm font-medium text-foreground transition-colors hover:text-secondary">
              Benefits
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground transition-colors hover:text-secondary">
              How It Works
            </a>
            <a href="#warranty" className="text-sm font-medium text-foreground transition-colors hover:text-secondary">
              Warranty
            </a>
            <a href="#qualify" className="text-sm font-medium text-foreground transition-colors hover:text-secondary">
              Qualify
            </a>
            <a
              href="#book"
              className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
            <div className="flex flex-col gap-3 pt-3">
              <a href="#benefits" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Benefits
              </a>
              <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                How It Works
              </a>
              <a href="#warranty" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Warranty
              </a>
              <a href="#qualify" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Qualify
              </a>
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-lg bg-secondary px-6 py-2.5 text-center text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
