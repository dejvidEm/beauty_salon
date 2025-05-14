"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { memo } from "react";
import { Blob, CircleBlob } from "@/components/ui/blob";

// Memoize the component to prevent unnecessary re-renders
export default memo(function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
      {/* Background Blobs and Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Main background elements */}
        <CircleBlob
          top="10%"
          right="5%"
          size="80%"
          opacity={0.15}
          color="#e6d2b5"
        />
        <Blob
          bottom="15%"
          left="10%"
          size="40%"
          opacity={0.1}
          color="#e6d2b5"
          rotate="-15deg"
        />

        {/* Additional decorative elements */}
        {/* Small dots pattern top left */}
        <div className="absolute top-[15%] left-[8%] opacity-20">
          <div className="flex space-x-2">
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d2b48c]"></div>
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
          </div>
          <div className="flex space-x-3 mt-3 ml-1">
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
          </div>
        </div>

        {/* Small dots pattern bottom right */}
        <div className="absolute bottom-[20%] right-[15%] opacity-20">
          <div className="flex space-x-2">
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d2b48c]"></div>
          </div>
          <div className="flex space-x-3 mt-3 ml-1">
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
            <div className="w-1 h-1 rounded-full bg-[#d2b48c]"></div>
          </div>
        </div>

        {/* Decorative lines */}
        <div
          className="absolute top-[30%] left-[5%] w-[5%] h-[1px] bg-[#d2b48c] opacity-30"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        <div
          className="absolute top-[32%] left-[7%] w-[3%] h-[1px] bg-[#d2b48c] opacity-20"
          style={{ transform: "rotate(45deg)" }}
        ></div>

        <div
          className="absolute bottom-[25%] right-[10%] w-[7%] h-[1px] bg-[#d2b48c] opacity-30"
          style={{ transform: "rotate(-30deg)" }}
        ></div>
        <div
          className="absolute bottom-[27%] right-[12%] w-[4%] h-[1px] bg-[#d2b48c] opacity-20"
          style={{ transform: "rotate(-30deg)" }}
        ></div>

        {/* Small decorative shapes */}
        <div
          className="absolute top-[45%] left-[15%] w-3 h-3 rounded-sm bg-[#d2b48c] opacity-10"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        <div
          className="absolute bottom-[40%] right-[25%] w-2 h-2 rounded-sm bg-[#d2b48c] opacity-15"
          style={{ transform: "rotate(30deg)" }}
        ></div>

        {/* Larger decorative elements */}
        <div
          className="absolute top-[60%] left-[5%] w-6 h-6 opacity-10"
          style={{
            background:
              "radial-gradient(circle at center, #d2b48c 0%, transparent 70%)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        ></div>
        <div
          className="absolute top-[20%] right-[20%] w-4 h-4 opacity-15"
          style={{
            background:
              "radial-gradient(circle at center, #d2b48c 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-tight relative">
              <img
    src="/logo_gigi5.png"
    alt="Logo"
    className="absolute right-64 -top-10 h-20 w-auto md:h-48 -z-20 opacity-30"
  />
              <span className="block ml-10 md:ml-10">{t.hero.title.line1}</span>
              <span className="block ml-10 md:ml-24">{t.hero.title.line2}</span>
              <span className="block ml-10 md:ml-12">{t.hero.title.line3}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                asChild
                className="group rounded-full bg-[#d2b48c] hover:bg-[#c0a378] text-black px-8"
              >
                <Link
                  href="https://bookio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.bookButton}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background circle with slight brown color */}
              <div
                className="absolute inset-0 rounded-full bg-[#e6d2b5]/20"
                style={{ transform: "scale(1.15)" }}
                aria-hidden="true"
              ></div>

              {/* Decorative ring around image */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#d2b48c]/20"
                style={{ transform: "scale(1.25)" }}
                aria-hidden="true"
              ></div>

              {/* Small accent circles */}
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#d2b48c]/30"></div>
              <div className="absolute top-[15%] -right-3 w-6 h-6 rounded-full bg-[#d2b48c]/20"></div>
              <div className="absolute -bottom-3 left-[20%] w-5 h-5 rounded-full bg-[#d2b48c]/25"></div>

              {/* Decorative cross marks */}
              <div className="absolute top-[10%] -left-6 text-[#d2b48c]/40 text-xl">
                +
              </div>
              <div className="absolute bottom-[15%] -right-6 text-[#d2b48c]/40 text-xl">
                +
              </div>

              {/* Main image */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/serene-salon-moment.png"
                  alt="Beauty salon"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Moved to bottom and made bigger */}
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <div
                  className="w-[120%] h-[120%] animate-slow-spin will-change-transform"
                  style={{ marginBottom: "-10%" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="4.5">
                      <textPath xlinkHref="#circle" className="text-[#d2b48c]">
                        {t.hero.circleText}
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Additional floating elements */}
              <div
                className="absolute -top-8 right-[30%] text-[#d2b48c]/30 text-sm"
                style={{ transform: "rotate(-15deg)" }}
              >
                ✧
              </div>
              <div
                className="absolute top-[40%] -right-10 text-[#d2b48c]/30 text-lg"
                style={{ transform: "rotate(25deg)" }}
              >
                ✧
              </div>
              <div
                className="absolute bottom-[30%] -left-8 text-[#d2b48c]/30 text-sm"
                style={{ transform: "rotate(10deg)" }}
              >
                ✧
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
