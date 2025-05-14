"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SignatureSection() {
  const brands = [
    { name: "Brand 1", logo: "/logo1.png" },
    { name: "Brand 2", logo: "/logo2.png" },
    { name: "Brand 3", logo: "/logo3.png" },
    { name: "Brand 4", logo: "/logo4.png" },
    { name: "Brand 5", logo: "/logo5.png" },
  ]

  return (
    <section className="py-6 relative overflow-hidden">
      {/* Brand Logos Slider */}
        <div className="mt-20 w-[80%] mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f2] via-transparent to-[#f8f5f2] z-10 pointer-events-none" />
          <div className="flex animate-infinite-scroll">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="relative w-48 h-16">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 148px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
