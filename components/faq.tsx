"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "I assumed solar takes a ton of money upfront to switch.",
    answer:
      "It's actually nothing upfront, nothing down, and nothing out of pocket. We offer multiple financing options that replace your electric bill with a fixed solar payment — often lower than what you're paying now. You're already sending that money to the power company every month. Solar just redirects it toward something you own.",
  },
  {
    question: "What if solar doesn't produce enough energy for my home?",
    answer:
      "Every system we design is custom-built around your actual energy usage, roof layout, and sun exposure. We don't guess — we use precise engineering and satellite data to size your system. Plus, our 25-year production guarantee means if it underperforms, we make it right.",
  },
  {
    question: "What happens when it's cloudy or during winter months?",
    answer:
      "Solar panels still produce energy on cloudy days — they work on light, not heat. Indiana gets plenty of usable sunlight year-round. Your system is designed to account for seasonal variation, and with net metering, surplus energy from sunny months offsets lower-production months.",
  },
  {
    question: "I've heard solar panels damage your roof.",
    answer:
      "Our professional installation team uses industry-standard mounting systems with flashing that actually reinforces the penetration points. We inspect your roof condition before installation and won't proceed if it needs work first. Solar panels also shield the portion of roof they cover from weather, extending its life.",
  },
  {
    question: "What if I sell my home? Will solar make it harder?",
    answer:
      "Just the opposite. Studies show solar homes sell faster and for more money — the National Renewable Energy Lab found an increase of roughly $20 for every $1 reduction in annual energy bills. Buyers love the idea of a home with little to no electric bill. Solar is an upgrade, not a complication.",
  },
  {
    question: "I don't want to be locked into a long contract.",
    answer:
      "We offer purchase and financing options, not leases. When you finance, you're building equity in an asset that adds value to your home. Once it's paid off, your electricity is essentially free. There's no \"lock-in\" — you own the system and the power it produces.",
  },
  {
    question: "What about maintenance? Are solar panels high-maintenance?",
    answer:
      "Solar panels are one of the lowest-maintenance home upgrades you can make. No moving parts, no fuel, no filters. Rain handles most of the cleaning. Our systems come with a 25-year equipment warranty and ongoing service support, so if anything ever needs attention, we've got you covered.",
  },
  {
    question: "I've heard bad things about solar companies. How are you different?",
    answer:
      "We hear this a lot — and it's a fair concern. Many companies sell volume and disappear after install. Brilliant Solar is different: we're a precision-focused team that designs every system individually, walks you through real numbers in plain English, and provides ongoing support for the life of your system. We're not the biggest. We're the most thorough.",
  },
  {
    question: "Is the consultation really free? What's the catch?",
    answer:
      "No catch. It's a straightforward 10-minute call where we review your electric bill, assess your home's solar potential, and show you the math. If solar doesn't make financial sense for your situation, we'll tell you honestly. We'd rather earn your trust than push a sale.",
  },
  {
    question: "What about the tax credits? Are they going away?",
    answer:
      "The federal solar Investment Tax Credit (ITC) currently offers a significant percentage back on your system. But these incentives are subject to change and won't last forever. Locking in now means you get the maximum benefit. We walk you through every available incentive during your consultation so you know exactly what you qualify for.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Straight Answers.{" "}
              <span className="text-secondary">No Runaround.</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We know you have questions — and probably a few concerns. Here are
            the most common objections we hear, answered honestly.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base font-semibold text-foreground md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-secondary transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border px-6 pb-5 pt-4">
                    <p className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
