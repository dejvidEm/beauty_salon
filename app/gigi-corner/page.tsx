"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function GigiCornerPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost" className="pl-0 hover:bg-transparent">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.gigiCorner.backLink}
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-tight">{t.gigiCorner.title}</h1>
              <p className="text-lg text-muted-foreground max-w-md">{t.gigiCorner.description}</p>
              <p className="text-lg text-muted-foreground">{t.gigiCorner.comingSoon}</p>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/coffee.png"
                    alt="Gigi Corner Coffee"
                    width={600}
                    height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
