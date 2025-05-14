"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PricingSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<string>(t.pricing.categories.hair)

  // Map category keys to their respective service arrays
  const categoryServices = {
    [t.pricing.categories.hair]: t.pricing.hairServices,
    [t.pricing.categories.nails]: t.pricing.nailServices,
    [t.pricing.categories.face]: t.pricing.faceServices,
    [t.pricing.categories.body]: t.pricing.bodyServices,
  }

  // Get all category keys
  const categories = Object.keys(t.pricing.categories).map(
    (key) => t.pricing.categories[key as keyof typeof t.pricing.categories],
  )

  // Get varied descriptions with translations
  const getGenericDescription = (service: string, category: string, index: number) => {
    const language = t.language?.en === "English" ? "en" : "sk"

    // Create varied descriptions based on service name and index
    if (category === t.pricing.categories.hair) {
      const hairDescriptions = {
        en: [
          "Precision cutting with attention to detail",
          "Customized styling for your unique look",
          "Expert coloring with premium products",
          "Gentle treatment for healthy, vibrant hair",
          "Specialized technique for dimensional results",
          "Long-lasting color with minimal damage",
          "Personalized consultation and styling",
          "Revitalizing care for all hair types",
        ],
        sk: [
          "Precízne strihanie s dôrazom na detail",
          "Prispôsobený styling pre váš jedinečný vzhľad",
          "Odborné farbenie s prémiovými produktmi",
          "Jemné ošetrenie pre zdravé, žiarivé vlasy",
          "Špecializovaná technika pre dimenzionálne výsledky",
          "Dlhotrvajúca farba s minimálnym poškodením",
          "Personalizovaná konzultácia a styling",
          "Revitalizačná starostlivosť pre všetky typy vlasov",
        ],
      }
      return hairDescriptions[language][index % hairDescriptions[language].length]
    } else if (category === t.pricing.categories.nails) {
      const nailDescriptions = {
        en: [
          "Meticulous care for beautiful, healthy nails",
          "Long-lasting finish with premium products",
          "Relaxing treatment with expert technique",
          "Precision shaping and polishing",
          "Gentle care for sensitive hands and feet",
          "Artistic design with attention to detail",
          "Strengthening treatment for natural nails",
          "Luxurious experience with lasting results",
        ],
        sk: [
          "Dôkladná starostlivosť pre krásne, zdravé nechty",
          "Dlhotrvajúca úprava s prémiovými produktmi",
          "Relaxačné ošetrenie s odbornou technikou",
          "Precízne tvarovanie a leštenie",
          "Jemná starostlivosť pre citlivé ruky a nohy",
          "Umelecký dizajn s dôrazom na detail",
          "Posilňujúce ošetrenie pre prirodzené nechty",
          "Luxusný zážitok s dlhotrvajúcimi výsledkami",
        ],
      }
      return nailDescriptions[language][index % nailDescriptions[language].length]
    } else if (category === t.pricing.categories.face) {
      const faceDescriptions = {
        en: [
          "Refreshing treatment for glowing skin",
          "Deep cleansing for a clear complexion",
          "Targeted care for specific skin concerns",
          "Advanced technology for visible results",
          "Gentle exfoliation for renewed skin",
          "Customized treatment for your skin type",
          "Rejuvenating therapy for youthful appearance",
          "Soothing care for sensitive skin",
        ],
        sk: [
          "Osviežujúce ošetrenie pre žiarivú pleť",
          "Hĺbkové čistenie pre jasnú pleť",
          "Cielená starostlivosť pre špecifické problémy pleti",
          "Pokročilá technológia pre viditeľné výsledky",
          "Jemná exfoliácia pre obnovenú pleť",
          "Prispôsobené ošetrenie pre váš typ pleti",
          "Omladzujúca terapia pre mladistvý vzhľad",
          "Upokojujúca starostlivosť pre citlivú pleť",
        ],
      }
      return faceDescriptions[language][index % faceDescriptions[language].length]
    } else if (category === t.pricing.categories.body) {
      const bodyDescriptions = {
        en: [
          "Relaxing technique for stress relief",
          "Therapeutic treatment for muscle tension",
          "Invigorating experience for total wellbeing",
          "Gentle care with premium products",
          "Customized pressure for maximum benefit",
          "Advanced technology for lasting results",
          "Targeted treatment for problem areas",
          "Luxurious experience for mind and body",
        ],
        sk: [
          "Relaxačná technika pre úľavu od stresu",
          "Terapeutické ošetrenie pre svalové napätie",
          "Povzbudzujúci zážitok pre celkovú pohodu",
          "Jemná starostlivosť s prémiovými produktmi",
          "Prispôsobený tlak pre maximálny úžitok",
          "Pokročilá technológia pre dlhotrvajúce výsledky",
          "Cielené ošetrenie problémových oblastí",
          "Luxusný zážitok pre myseľ a telo",
        ],
      }
      return bodyDescriptions[language][index % bodyDescriptions[language].length]
    }

    // Default fallback
    return language === "en" ? "Premium service with expert care" : "Prémiová služba s odbornou starostlivosťou"
  }

  useEffect(() => {
    // Ensure the default tab is selected on initial render
    if (categories.length > 0 && !categories.includes(activeTab)) {
      setActiveTab(t.pricing.categories.hair)
    }
  }, [categories, activeTab, t.pricing.categories.hair])

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 bg-[#f8f5f2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Decorative shape top right */}
        <div
          className="absolute top-[5%] right-[5%] w-[30%] h-[30%] opacity-[0.07]"
          style={{
            borderRadius: "70% 30% 50% 40% / 40% 50% 60% 50%",
            background: "radial-gradient(ellipse at center, #d2b48c 0%, transparent 70%)",
            transform: "rotate(10deg)",
          }}
          aria-hidden="true"
        />

        {/* Decorative shape bottom left */}
        <div
          className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] opacity-[0.05]"
          style={{
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            background: "radial-gradient(ellipse at center, #d2b48c 0%, transparent 70%)",
            transform: "rotate(-15deg)",
          }}
          aria-hidden="true"
        />

        {/* Thin decorative lines */}
        <div
          className="absolute top-[20%] left-[15%] w-[10%] h-[1px] bg-[#d2b48c] opacity-[0.2]"
          style={{ transform: "rotate(45deg)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-[22%] left-[17%] w-[5%] h-[1px] bg-[#d2b48c] opacity-[0.15]"
          style={{ transform: "rotate(45deg)" }}
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <Tabs
          defaultValue={t.pricing.categories.hair}
          value={activeTab}
          className="w-full max-w-4xl mx-auto"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8" data-aos="fade-up">
            <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    "text-sm md:text-base px-4 py-2 transition-all duration-300",
                    activeTab === category
                      ? "text-[#d2b48c] bg-white/80 shadow-sm rounded-md font-medium"
                      : "text-muted-foreground hover:text-[#d2b48c]",
                  )}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden" data-aos="fade-up">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f8f5f2]">
                      <th className="text-left py-4 px-6 font-medium">{t.pricing.tableHeaders.service}</th>
                      <th className="text-right py-4 px-6 font-medium w-24">{t.pricing.tableHeaders.price}</th>
                      <th className="text-right py-4 px-6 font-medium hidden md:table-cell w-32">
                        {t.pricing.tableHeaders.duration}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryServices[category].map((item, index) => (
                      <tr
                        key={index}
                        className={cn(
                          "border-t border-[#f0ebe5] hover:bg-[#f8f5f2]/50 transition-colors",
                          index % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]",
                        )}
                      >
                        <td className="py-4 px-6">
                          <div className="font-medium">{item.service}</div>
                        </td>
                        <td className="text-right py-4 px-6 font-medium whitespace-nowrap">{item.price}</td>
                        <td className="text-right py-4 px-6 text-muted-foreground hidden md:table-cell">
                          {item.duration || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div
          className="mt-12 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-[#f0ebe5]"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 bg-[#f8f5f2] p-2 rounded-full">
              <Info size={20} className="text-[#d2b48c]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">{t.pricing.additionalInfo.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {t.pricing.additionalInfo.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
