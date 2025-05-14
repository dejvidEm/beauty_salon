"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Hardcoded reviews in Slovak
const reviews = [
  {
    id: 1,
    name: "jarmila gaborikova",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "15.2.2025",
    text: "Nádherná kavárnička a kosmetický salon v jednom. Majitelky jsou velmi příjemné a ochotné zpříjemnit Váš čas. Čekala jsem na svůj termín na kosmetickou procedurku. Přišla jsem z Trenčína, o něco skór abych si stihla dát dokonalé modré latté, které doporučuji každému vyzkoušet.",
    service: "Vlasová terapia",
  },
  {
    id: 2,
    name: "Kris Edelman",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "2.4.2025",
    text: "Gigi's Corner má uvnitř kavárnu (Gigi's Coffee) a byla to jedna z nejlepších kaváren, které jsem v Bratislavě navštívil! Veganský růžový nápoj byl lahodný a chutný. Personál byl tak přátelský a příjemný. Měl jsem také možnost mluvit s majitelem a byla velmi milá a společenská. Místo bylo útulné, teplé, tiché a pěkně zařízené. Vřele doporučuji Gigi's Corner!",
    service: "Body Procedure",
  },
  {
    id: 3,
    name: "Mária Kadúcová",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "28.2.2025",
    text: "Kosmetické ošetření bylo opravdu špičkové. Už při příchodu mě okouzlilo příjemné a relaxační prostředí, které mi okamžitě vytvořilo pocit pohody. Ošetření začalo diagnostikou mé pleti, kde odbornice přesně zhodnotila potřeby mé pleti a doporučila mi ošetření přizpůsobené právě mně.",
    service: "Body Procedure",
  },
  {
    id: 4,
    name: "Kamila Zelinová",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "10.4.2025",
    text: "Nejkrásnější salon, výborné a profesionální služby, možnost dát si kávičku či snídani před nebo po proceduře nebo koláček, super dostupnost a lokalita, určitě se budu ráda vracet.",
    service: "Hydrafacial",
  },
  {
    id: 5,
    name: "Miroslava Bajcsi",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "5.3.2025",
    text: "Uzasny pristup a maximalna spokojnost",
    service: "Body Procedure",
  },
]

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Soft oval shape in the center-left */}
        <div
          className="absolute top-[40%] left-[10%] w-[40%] h-[60%] opacity-[0.05]"
          style={{
            borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
            background: "radial-gradient(ellipse at center, #e6d2b5 0%, transparent 70%)",
            transform: "rotate(15deg)",
          }}
          aria-hidden="true"
        />

        {/* Small decorative dot pattern in top right */}
        <div className="absolute top-[15%] right-[10%] opacity-[0.08]" aria-hidden="true">
          <div className="flex space-x-4">
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
          </div>
          <div className="flex space-x-4 mt-4 ml-2">
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 tracking-tight" data-aos="fade-up">
          Recenzie našich klientov
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Prečítajte si, čo o nás hovoria naši spokojní klienti
        </p>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          data-aos="fade-up"
        >
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 text-[#d2b48c]/10 z-0">
            <Quote size={80} />
          </div>

          {/* Carousel container */}
          <div className="overflow-hidden rounded-xl bg-[#f8f5f2] shadow-sm">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#d2b48c]/20">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="font-medium text-lg">{review.name}</h3>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={cn(
                              "mr-1",
                              i < review.rating ? "text-[#d2b48c] fill-[#d2b48c]" : "text-gray-300",
                            )}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{review.service}</span>
                      </div>
                      <p className="text-muted-foreground mt-3">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#d2b48c] hover:bg-white transition-colors z-10"
            aria-label="Predchádzajúca recenzia"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#d2b48c] hover:bg-white transition-colors z-10"
            aria-label="Nasledujúca recenzia"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-[#d2b48c] w-6" : "bg-[#d2b48c]/30 hover:bg-[#d2b48c]/50",
                )}
                aria-label={`Prejsť na recenziu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
