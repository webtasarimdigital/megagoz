"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: "tr" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { name: "ANA SAYFA", href: "/" },
    { name: "KURUMSAL", href: "/hakkimizda" },
    { name: "TEDAVİLER", href: "/#hizmetler" },
    { name: "DOKTORLARIMIZ", href: "/#doktorlar" },
    { name: "MERKEZLERİMİZ", href: "/#merkezler" },
    { name: "BLOG", href: "/#blog" },
    { name: "İLETİŞİM", href: "/iletisim" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Blue Bar - Disappears on scroll */}
      <div 
        className={`bg-[#1f313f] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-[50px] md:h-[55px] opacity-100 flex"
        }`}
      >
        <div className="w-full flex items-center justify-center h-full px-4 gap-8 md:gap-16">
          {/* Left quick links */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="hover:text-gray-200 transition-colors">Akıllı Lensler</a>
            <span className="text-white/60">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Göz Lazer Ameliyatı</a>
            <span className="text-white/60">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Anlaşmalı Kurumlar</a>
          </div>

          {/* Right contact & settings */}
          <div className="flex items-center gap-4 shrink-0 font-bold">
            <a href="https://share.google/zC0UTV7bTbwJn46pu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors flex items-center gap-1.5 hidden lg:flex">
              <MapPin size={14} /> Konum
            </a>
            <span className="text-white/60 hidden lg:inline">|</span>
            <a href="mailto:info@megagoz.com" className="hover:text-gray-200 transition-colors hidden md:flex font-medium">
              info@megagoz.com
            </a>
            <span className="text-white/60 hidden md:inline">|</span>
            <a href="tel:4440320" className="text-[15px] hover:text-gray-200 flex items-center gap-1.5">
              <Phone size={14} /> 444 0 320
            </a>
            <span className="text-white/60">|</span>
            {/* Social Icons mini */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/megagoz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579553615596#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
            <span className="text-white/60">|</span>
            {/* Language Selector */}
            <div className="relative flex items-center ml-2" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                className="flex items-center gap-2.5 bg-transparent hover:opacity-80 transition-opacity p-1 rounded"
              >
                {locale === "tr" ? (
                  <>
                    <div className="w-[24px] h-[16px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-white/20">
                       <img src="/tr.svg" alt="TR" className="w-full h-full object-cover transform scale-[1.2]" />
                    </div>
                    <span className="font-bold text-white text-[14px] tracking-wider uppercase mt-0.5">TÜRKÇE</span>
                  </>
                ) : (
                  <>
                    <div className="w-[24px] h-[16px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-white/20">
                       <img src="/en.svg" alt="EN" className="w-full h-full object-cover transform scale-[1.2]" />
                    </div>
                    <span className="font-bold text-white text-[14px] tracking-wider uppercase mt-0.5">ENGLISH</span>
                  </>
                )}
                <ChevronDown size={14} className="text-[#ecbb3f] mt-0.5" />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+14px)] right-0 bg-white rounded-b-md shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-t-[3px] border-t-[#ecbb3f] min-w-[200px] z-50 overflow-hidden"
                  >
                    <button 
                      onClick={() => { switchLocale("tr"); setIsLangMenuOpen(false); }}
                      className="flex items-center gap-4 w-full px-5 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-[24px] h-[16px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-gray-200">
                         <img src="/tr.svg" alt="TR" className="w-full h-full object-cover transform scale-[1.2]" />
                      </div>
                       <span className={`font-bold tracking-widest text-[14px] uppercase ${locale === "tr" ? "text-[#cda669]" : "text-[#333]"}`}>TÜRKÇE</span>
                    </button>
                    <div className="h-[1px] w-full bg-gray-100" />
                    <button 
                      onClick={() => { switchLocale("en"); setIsLangMenuOpen(false); }}
                      className="flex items-center gap-4 w-full px-5 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-[24px] h-[16px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-gray-200">
                         <img src="/en.svg" alt="EN" className="w-full h-full object-cover transform scale-[1.2]" />
                      </div>
                       <span className={`font-bold tracking-widest text-[14px] uppercase ${locale === "en" ? "text-[#cda669]" : "text-[#333]"}`}>ENGLISH</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main White Nav Bar */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-4" : "py-4 lg:py-6 border-b-2 border-gray-100"}`}>
        <div className="w-full flex items-center justify-center px-4 md:px-8 gap-8 lg:gap-10 xl:gap-20">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center items-center shrink-0 w-[160px] md:w-[234px] lg:w-[288px] h-[50px] md:h-[63px] lg:h-[72px] relative overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Megagöz Tıp Merkezi" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[15px] font-bold text-[#454d52] hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href as any}
                  className="text-[15px] font-bold text-[#454d52] hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Search Box Removed per request */}

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#1f313f] ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#333] font-bold uppercase text-sm border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href as any}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#333] font-bold uppercase text-sm border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <a href="tel:4440320" className="flex items-center gap-2 text-[#00609C] font-bold">
                  <Phone size={18} />
                  444 0 320 Merkezi Çağrı
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
