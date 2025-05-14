"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  const hashtags = [
    "#myfavsalon",
    "#timeformyself",
    "#beautytime",
    "#luxurysalon",
    "#selfcare",
    "#beautytherapy",
    "#relaxation",
    "#pamperyourself",
    "#beautygoals",
    "#salonlife"
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-[#f8f5f2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Soft oval shape in the center-right */}
        <div
          className="absolute top-[30%] right-[10%] w-[50%] h-[60%] opacity-[0.08]"
          style={{
            borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
            background: "radial-gradient(ellipse at center, #e6d2b5 0%, transparent 70%)",
            transform: "rotate(-15deg)",
          }}
          aria-hidden="true"
        />

        {/* Small decorative dot pattern in top left */}
        <div className="absolute top-[10%] left-[5%] opacity-[0.1]" aria-hidden="true">
          <div className="flex space-x-4">
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
          </div>
          <div className="flex space-x-4 mt-4 ml-2">
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2b48c]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="max-w-md mx-auto relative">
              {/* Decorative circle behind image */}
              <div
                className="absolute -top-6 -left-6 w-[110%] h-[110%] rounded-full opacity-[0.15]"
                style={{
                  background: "radial-gradient(circle at center, #e6d2b5 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="-mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/serene-beige-salon.png"
                  alt="Beauty salon interior"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#d2b48c] border border-[#d2b48c]/20 shadow-sm hover:bg-white hover:border-[#d2b48c]/40 transition-all duration-300 cursor-pointer"
                >
                  {hashtag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground">{t.about.paragraph1}</p>
            <p className="text-lg text-muted-foreground">{t.about.paragraph2}</p>
            <p className="text-lg text-muted-foreground">{t.about.paragraph3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
