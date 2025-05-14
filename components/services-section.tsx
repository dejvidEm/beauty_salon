"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Large circle in top right */}
        <div
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] opacity-[0.07]"
          style={{
            borderRadius: "50%",
            background: "radial-gradient(circle at center, #d2b48c 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Small circle in bottom left */}
        <div
          className="absolute bottom-[10%] left-[5%] w-[20%] h-[20%] opacity-[0.05]"
          style={{
            borderRadius: "50%",
            background: "radial-gradient(circle at center, #d2b48c 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-tight" data-aos="fade-up">
          {t.services.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-md rounded-xl p-6 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-64 h-64 mb-6 transition-transform duration-500 group-hover:scale-105">
                <div
                  className="absolute inset-0 rounded-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rounded-2xl"
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                >
                  <Image
                    src={
                      [
                        "/1.png",
                        "/2.png",
                        "/3.png",
                        "/4.png",
                      ][index] || "/placeholder.svg"
                    }
                    alt={service.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-[#d2b48c]">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-16 max-w-2xl mx-auto" data-aos="fade-up">
          {t.services.note}
        </p>
      </div>
    </section>
  )
}
