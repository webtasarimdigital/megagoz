"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
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

  const switchLocale = () => {
    const nextLocale = locale === "tr" ? "en" : "tr";
    router.replace(pathname, { locale: nextLocale });
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
        className={`bg-[#2c88ac] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-[45px] opacity-100 flex"
        }`}
      >
        <div className="w-full flex items-center justify-center h-full px-4 gap-8 md:gap-16">
          {/* Left quick links */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://share.google/zC0UTV7bTbwJn46pu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors flex items-center gap-1.5">
              <MapPin size={14} /> Konum
            </a>
            <span className="text-white/60">|</span>
            <a href="mailto:info@megagoz.com" className="hover:text-gray-200 transition-colors">
              info@megagoz.com
            </a>
            <span className="text-white/60">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Akıllı Lensler</a>
            <span className="text-white/60">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Göz Lazer Ameliyatı</a>
            <span className="text-white/60">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Anlaşmalı Kurumlar</a>
          </div>

          {/* Right contact & settings */}
          <div className="flex items-center gap-4 shrink-0 font-bold">
            <a href="tel:4440320" className="text-[15px] hover:text-gray-200">
              444 0 320
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
            <button 
              onClick={switchLocale} 
              className="flex items-center gap-2 hover:bg-white/10 transition-colors text-[13px] border border-white/20 rounded-full px-3 py-1 ml-1"
            >
              {locale === "tr" ? (
                <>
                  <img src="/en.svg" alt="EN" className="w-4 h-3 rounded-sm object-cover shadow-sm" />
                  <span>EN</span>
                </>
              ) : (
                <>
                  <img src="/tr.svg" alt="TR" className="w-4 h-3 rounded-sm object-cover shadow-sm" />
                  <span>TR</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main White Nav Bar */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-4" : "py-6 border-b-2 border-gray-100"}`}>
        <div className="w-full flex items-center justify-center px-4 gap-8 lg:gap-14 xl:gap-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-[36px] md:text-[42px] font-black tracking-tighter text-[#1f6388]">
              mega<span className="text-[#e85025]">göz</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[15px] font-bold text-[#454d52] hover:text-[#2c88ac] transition-colors whitespace-nowrap tracking-wide"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href as any}
                  className="text-[15px] font-bold text-[#454d52] hover:text-[#2c88ac] transition-colors whitespace-nowrap tracking-wide"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Search Box Removed per request */}

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#1f6388] ml-auto"
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
