"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SignatureSection from "@/components/signature-section"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { lazy, Suspense } from "react"
import ReviewsCarousel from "@/components/ui/reviews-carousel"

// Lazy load less critical components
const LazyAboutSection = lazy(() => import("@/components/about-section"))
const LazyEquipmentSection = lazy(() => import("@/components/equipment-section"))
const LazyPricingSection = lazy(() => import("@/components/pricing-section"))

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      <HeroSection />
      <SignatureSection />
      <ServicesSection />

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <LazyAboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <LazyEquipmentSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <ReviewsCarousel />
      </Suspense>

      <section
        className="container mx-auto py-24 px-4 relative overflow-hidden rounded-3xl my-12 bg-gradient-to-br from-[#f8f5f2] via-[#f0e6d8] to-[#e6d2b5] shadow-lg"
        aria-labelledby="cta-heading"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Main gradient overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(circle at 70% 30%, rgba(210, 180, 140, 0.4) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Animated subtle glow */}
          <div
            className="absolute top-[30%] left-[20%] w-[40%] h-[40%] opacity-30 animate-pulse will-change-opacity"
            style={{
              borderRadius: "60% 40% 50% 40% / 40% 50% 60% 50%",
              background: "radial-gradient(circle at center, #d2b48c 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />

          {/* Small decorative elements */}
          <div className="absolute top-[15%] right-[15%] w-2 h-2 rounded-full bg-[#d2b48c] opacity-40"></div>
          <div className="absolute top-[25%] right-[25%] w-3 h-3 rounded-full bg-[#d2b48c] opacity-30"></div>
          <div className="absolute bottom-[20%] left-[30%] w-2 h-2 rounded-full bg-[#d2b48c] opacity-40"></div>

          {/* Subtle line decoration */}
          <div
            className="absolute bottom-[15%] right-[10%] w-[15%] h-[1px] bg-[#d2b48c] opacity-30"
            style={{ transform: "rotate(45deg)" }}
            aria-hidden="true"
          />
        </div>

        <div
          className="flex flex-col items-center justify-center text-center space-y-8 relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-serif tracking-tight text-[#3a2e21]">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{t.cta.subtitle}</p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#d2b48c] hover:bg-[#c0a378] text-black px-10 py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Link href="https://bookio.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <div className="w-full max-w-md h-1 bg-gradient-to-r from-transparent via-[#d2b48c]/30 to-transparent mt-4"></div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
