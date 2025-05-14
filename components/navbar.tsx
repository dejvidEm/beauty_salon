"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import LanguageSwitcher from "./language-switcher";
import { scrollToSection } from "@/utils/scroll-utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Optimize scroll handler with throttling
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 10);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize event handlers
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      scrollToSection(sectionId);
      setIsMenuOpen(false);
    },
    []
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "bg-[#f8f5f2] shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl md:text-3xl">
          <img
      src="/logo_gigi22.png" // ← uprav podľa skutočnej cesty k logu
      alt="Gigi logo"
      className="h-16 w-auto"
    />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm hover:text-[#d2b48c] transition-colors"
          >
            {t.nav.home}
          </Link>
          <a
            href="#services"
            className="text-sm hover:text-[#d2b48c] transition-colors"
            onClick={(e) => handleNavClick(e, "services")}
          >
            {t.nav.services}
          </a>
          <a
            href="#about"
            className="text-sm hover:text-[#d2b48c] transition-colors"
            onClick={(e) => handleNavClick(e, "about")}
          >
            {t.nav.aboutUs}
          </a>
          <a
            href="#equipment"
            className="text-sm hover:text-[#d2b48c] transition-colors"
            onClick={(e) => handleNavClick(e, "equipment")}
          >
            {t.nav.equipment}
          </a>
          <a
            href="#pricing"
            className="text-sm hover:text-[#d2b48c] transition-colors"
            onClick={(e) => handleNavClick(e, "pricing")}
          >
            {t.nav.pricing}
          </a>
          <Link
            href="/gigi-corner"
            className="text-sm hover:text-[#d2b48c] transition-colors"
          >
            {t.nav.gigiCorner}
          </Link>
        </nav>

        {/* Contact Info and Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          {/* Fixed width container for language switcher */}
          <div className="w-10 flex-none opacity-0">
            <LanguageSwitcher />
          </div>
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

        {/* Mobile Menu Button and Language Switcher */}
        <div className="md:hidden flex items-center gap-2">
          {/* Fixed width container for language switcher */}
          <div className="w-10 flex-none opacity-0">
            <LanguageSwitcher />
          </div>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#f8f5f2] shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm hover:text-[#d2b48c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <a
              href="#services"
              className="text-sm hover:text-[#d2b48c] transition-colors"
              onClick={(e) => handleNavClick(e, "services")}
            >
              {t.nav.services}
            </a>
            <a
              href="#about"
              className="text-sm hover:text-[#d2b48c] transition-colors"
              onClick={(e) => handleNavClick(e, "about")}
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#equipment"
              className="text-sm hover:text-[#d2b48c] transition-colors"
              onClick={(e) => handleNavClick(e, "equipment")}
            >
              {t.nav.equipment}
            </a>
            <a
              href="#pricing"
              className="text-sm hover:text-[#d2b48c] transition-colors"
              onClick={(e) => handleNavClick(e, "pricing")}
            >
              {t.nav.pricing}
            </a>
            <Link
              href="/gigi-corner"
              className="text-sm hover:text-[#d2b48c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.gigiCorner}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
