import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BillTruth } from "@/components/bill-truth"
import { Benefits } from "@/components/benefits"
import { TooGoodToBeTrue } from "@/components/too-good-to-be-true"
import { WhyBrilliant } from "@/components/why-brilliant"
import { HowItWorks } from "@/components/how-it-works"
import { Warranty } from "@/components/warranty"
import { Qualify } from "@/components/qualify"
import { VideoSection } from "@/components/video-section"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoSection />
      <TooGoodToBeTrue />
      <BillTruth />
      <div id="benefits">
        <Benefits />
      </div>
      <WhyBrilliant />
      <Gallery />
      <Testimonials />
      <HowItWorks />
      <Warranty />
      <Qualify />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  )
}
