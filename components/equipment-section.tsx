"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useState, useRef } from "react"
import { ChevronDown, ChevronUp, Check, CircleCheck, Star, Sparkles } from "lucide-react"
import { Blob, CircleBlob } from "@/components/ui/blob"
import { cn } from "@/lib/utils"

export default function EquipmentSection() {
  const { t } = useLanguage()
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([])

  const equipmentImages = [
    "/stroj1.png",
    "/stroj2.png",
    "/stroj3.png",
    "/stroj4.png",
    "/stroj5.png",
    "/stroj6.png",
    "/stroj7.png",
    "/stroj8.png",
  ]

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  return (
    <section id="equipment" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CircleBlob bottom="-10%" right="-5%" size="40%" opacity={0.06} color="#d2b48c" />
        <Blob top="15%" left="10%" size="25%" opacity={0.05} color="#d2b48c" rotate="-15deg" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">{t.equipment.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.equipment.subtitle}</p>
        </div>

        <div className="space-y-12">
          {t.equipment.items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#f8f5f2] rounded-xl overflow-hidden shadow-sm transition-all duration-500",
                expandedItem === index ? "shadow-md" : "",
              )}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image Column */}
                <div className="md:col-span-1 p-6">
                  <div className="rounded-xl overflow-hidden h-full relative">
                    <div
                      className="absolute -top-2 -left-2 w-[110%] h-[110%] rounded-full opacity-[0.1]"
                      style={{
                        background: "radial-gradient(circle at center, #e6d2b5 0%, transparent 70%)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="w-full h-full" style={{ maxHeight: "250px", pointerEvents: "none" }}>
                      <Image
                        src={equipmentImages[index] || "/placeholder.svg"}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full rounded-xl relative z-10"
                        style={{ transform: "none", transition: "none" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-serif mb-3">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>

                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center gap-2 text-[#d2b48c] hover:text-[#c0a378] transition-colors font-medium"
                    aria-expanded={expandedItem === index}
                    aria-controls={`details-${index}`}
                  >
                    {expandedItem === index ? (
                      <>
                        Hide details <ChevronUp size={18} className="transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        View details <ChevronDown size={18} className="transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  {/* Quick preview section - always visible */}
                  <div className="mt-4 pt-4 border-t border-[#e6d2b5]/30">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.procedures.slice(0, 2).map((procedure, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-[#f0e6d8] text-[#a08b6c]"
                        >
                          <CircleCheck size={12} className="mr-1" />
                          {procedure.split(" ").slice(0, 3).join(" ")}...
                        </span>
                      ))}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-[#f0e6d8] text-[#a08b6c]">
                        <Sparkles size={12} className="mr-1" />
                        {expandedItem === index ? "" : t.equipment.moreFeatures || "More features..."}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Star size={14} className="mr-1 text-[#d2b48c]" />
                        {t.equipment.professionalGrade || "Professional grade"}
                      </span>
                      <span className="flex items-center">
                        <Check size={14} className="mr-1 text-[#d2b48c]" />
                        {t.equipment.certifiedResults || "Certified results"}
                      </span>
                    </div>
                  </div>

                  <div
                    id={`details-${index}`}
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      expandedItem === index ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0",
                    )}
                    ref={(el) => (detailsRefs.current[index] = el)}
                  >
                    <div className="space-y-6">
                      {/* Procedures - Now first */}
                      <div
                        className={cn(
                          "transition-all duration-500 transform",
                          expandedItem === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                        )}
                      >
                        <h4 className="text-lg font-medium mb-2">{t.equipment.proceduresTitle || "Procedures"}</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {item.procedures.map((procedure, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2"
                              style={{
                                transitionDelay: `${i * 50}ms`,
                                animation: expandedItem === index ? `fadeInUp 0.5s ease forwards ${i * 50}ms` : "none",
                              }}
                            >
                              <span className="text-[#d2b48c] mt-1">
                                {i % 3 === 0 ? (
                                  <CircleCheck size={14} />
                                ) : i % 3 === 1 ? (
                                  <Star size={14} />
                                ) : (
                                  <Sparkles size={14} />
                                )}
                              </span>
                              {procedure}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications - Now second */}
                      <div
                        className={cn(
                          "transition-all duration-500 transform",
                          expandedItem === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                        )}
                        style={{ transitionDelay: "100ms" }}
                      >
                        <h4 className="text-lg font-medium mb-2">
                          {t.equipment.specificationsTitle || "Technical Specifications"}
                        </h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {item.specifications.map((spec, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2"
                              style={{
                                transitionDelay: `${150 + i * 50}ms`,
                                animation:
                                  expandedItem === index ? `fadeInUp 0.5s ease forwards ${150 + i * 50}ms` : "none",
                              }}
                            >
                              <span className="text-[#d2b48c] mt-1">
                                <Check size={14} />
                              </span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div
                        className={cn(
                          "transition-all duration-500 transform",
                          expandedItem === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                        )}
                        style={{ transitionDelay: "200ms" }}
                      >
                        <h4 className="text-lg font-medium mb-2">{t.equipment.benefitsTitle || "Benefits"}</h4>
                        <p className="text-muted-foreground">{item.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-muted-foreground max-w-3xl mx-auto">{t.equipment.conclusion}</p>
        </div>
      </div>
    </section>
  )
}
