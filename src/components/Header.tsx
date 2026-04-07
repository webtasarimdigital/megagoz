"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Phone, Search } from "lucide-react";
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
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/#hizmetler" },
    { name: "DOKTORLARIMIZ", href: "/#doktorlar" },
    { name: "MERKEZLERİMİZ", href: "/#merkezler" },
    { name: t("blog"), href: "/#blog" },
    { name: t("contact"), href: "/iletisim" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Blue Bar - Disappears on scroll */}
      <div 
        className={`bg-[#00609C] text-white text-[13px] transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-[40px] opacity-100 flex"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-full">
          {/* Left quick links */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="hover:text-cyan-200 transition-colors">Kurumsal</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-cyan-200 transition-colors">Akıllı Lensler</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-cyan-200 transition-colors">Göz Lazer Ameliyatı</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-cyan-200 transition-colors">Anlaşmalı Kurumlar</a>
          </div>

          {/* Right contact & settings */}
          <div className="flex items-center space-x-5 ml-auto">
            <a href="tel:4440000" className="font-bold flex items-center gap-1 hover:text-cyan-200">
              <Phone size={14} />
              444 0 000
            </a>
            <span className="text-white/30">|</span>
            {/* Social Icons mini */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-cyan-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
              <a href="#" className="hover:text-cyan-200"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
            <span className="text-white/30">|</span>
            {/* Language Selector */}
            <button onClick={switchLocale} className="flex items-center gap-1 hover:text-cyan-200">
              {locale === "tr" ? "English" : "Türkçe"}
            </button>
          </div>
        </div>
      </div>

      {/* Main White Nav Bar */}
      <div className={`bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : "border-b border-gray-100"}`}>
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-[80px]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className={`relative transition-all duration-300 w-48 h-12`}>
              <Image 
                src="/logo.png" 
                alt="Megagöz Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[14px] font-bold text-[#333] hover:text-[#00609C] uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href as any}
                  className="text-[14px] font-bold text-[#333] hover:text-[#00609C] uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Search Box */}
          <div className="hidden xl:flex items-center ml-auto relative">
            <input 
              type="text" 
              placeholder="Arama"
              className="border-b border-gray-300 py-1 pl-2 pr-8 focus:outline-none focus:border-[#00609C] text-sm w-40 transition-all focus:w-48 text-gray-700" 
            />
            <Search className="absolute right-0 text-[#00609C] w-5 h-5" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#00609C]"
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
                <a href="tel:4440000" className="flex items-center gap-2 text-[#00609C] font-bold">
                  <Phone size={18} />
                  444 0 000 Merkezi Çağrı
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
