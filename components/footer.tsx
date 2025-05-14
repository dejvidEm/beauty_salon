"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#f8f5f2] border-t border-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Gigi.</h3>
            <p className="text-muted-foreground">{t.footer.tagline}</p>
            {/* Add language switcher to footer */}
            <LanguageSwitcher variant="footer" />
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">{t.footer.contact}</h4>
            <address className="not-italic text-muted-foreground">
              <p>Lazaretská 2422/24</p>
              <p>811 08, Bratislava</p>
              <p className="mt-2">+421 911 556 999</p>
              <p>info@gigi.com</p>
            </address>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">{t.footer.hours}</h4>
            <div className="text-muted-foreground">
              <p>{t.footer.weekdays}</p>
              <p>{t.footer.saturday}</p>
              <p>{t.footer.sunday}</p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-[#d2b48c]" aria-label="Instagram">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-[#d2b48c]" aria-label="Facebook">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-[#d2b48c]" aria-label="Twitter">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
