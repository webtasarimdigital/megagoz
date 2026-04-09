"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { TREATMENTS_DATA } from "@/data/treatments";
import { ChevronRight } from "lucide-react";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState(TREATMENTS_DATA[0].id);
  const [megaMenuHovered, setMegaMenuHovered] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const [kurumsalHovered, setKurumsalHovered] = useState(false);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);

  const kurumsalDropdownLinks = [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Anlaşmalı Kurumlar", href: "/anlasmali-kurumlar" },
    { name: "MegaGöz Galeri", href: "/galeri" },
    { name: "İş Başvurusu", href: "/#is-basvurusu" },
    { name: "KVKK", href: "/kvkk" }
  ];

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

  const params = useParams();

  const switchLocale = (newLocale: "tr" | "en") => {
    router.replace(
      // @ts-expect-error -- Generic dynamic path support
      { pathname, params }, 
      { locale: newLocale }
    );
  };

  const navLinks = [
    { name: "ANA SAYFA", href: "/" },
    { name: "KURUMSAL", href: "/hakkimizda" },
    { name: "TEDAVİLER", href: "/#hizmetler" },
    { name: "DOKTORLARIMIZ", href: "/doktorlar" },
    { name: "BLOG", href: "/#blog" },
    { name: "İLETİŞİM", href: "/iletisim" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Blue Bar - Disappears on scroll */}
      <div 
        className={`bg-gradient-to-r from-[#162f5d] via-[#102347] to-[#162f5d] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "hidden lg:flex h-[55px] opacity-100"
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

      {/* Main Dark Nav Bar */}
      <div className={`bg-gradient-to-r from-[#162f5d] via-[#11244a] to-[#162f5d] transition-all duration-300 ${isScrolled ? "shadow-md shadow-[#162f5d]/20 py-4" : "py-4 lg:py-6 border-b-2 border-white/5"}`}>
        <div className="w-full flex items-center justify-center px-4 md:px-8 gap-8 lg:gap-10 xl:gap-20">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col justify-center items-center shrink-0 w-[160px] md:w-[234px] lg:w-[288px] h-[50px] md:h-[63px] lg:h-[72px] relative overflow-hidden group">
             {/* Logo filter trick: invert makes black->white & whiteBg->black. mix-blend-screen makes the blackBg disappear! Result: pure white logo. */}
             <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Megagöz Tıp Merkezi" 
                  className="w-full h-full object-contain filter invert mix-blend-screen brightness-200" 
                />
             </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.name === "KURUMSAL") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setKurumsalHovered(true)}
                    onMouseLeave={() => setKurumsalHovered(false)}
                  >
                    <Link 
                      href={link.href as any}
                      className="text-[15px] font-bold text-white/90 group-hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4 flex items-center gap-1"
                    >
                      {link.name} <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>

                    {/* Kurumsal Dropdown */}
                    <AnimatePresence>
                      {kurumsalHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[80%] left-0 min-w-[260px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden z-50 py-2 cursor-default"
                        >
                          {kurumsalDropdownLinks.map((sublink, idx) => (
                            sublink.href.startsWith("/#") ? (
                              <a 
                                key={idx}
                                href={sublink.href}
                                className="px-5 py-3 text-sm font-bold text-[#454d52] hover:bg-gray-50 hover:text-[#ecbb3f] transition-colors border-b last:border-b-0 border-gray-50"
                                onClick={() => setKurumsalHovered(false)}
                              >
                                {sublink.name}
                              </a>
                            ) : (
                              <Link 
                                key={idx}
                                href={sublink.href as any}
                                className="px-5 py-3 text-sm font-bold text-[#454d52] hover:bg-gray-50 hover:text-[#ecbb3f] transition-colors border-b last:border-b-0 border-gray-50"
                                onClick={() => setKurumsalHovered(false)}
                              >
                                {sublink.name}
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.name === "TEDAVİLER") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setMegaMenuHovered(true)}
                    onMouseLeave={() => setMegaMenuHovered(false)}
                  >
                    <Link 
                      href="/tedaviler"
                      className="text-[15px] font-bold text-white/90 group-hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4 flex items-center gap-1"
                    >
                      {link.name} <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaMenuHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 flex overflow-hidden z-50 cursor-default"
                        >
                          {/* Left Column: Categories */}
                          <div className="w-1/3 bg-gray-50/80 border-r border-gray-100 py-4 flex flex-col">
                            {TREATMENTS_DATA.map(category => (
                               <div 
                                 key={category.id}
                                 onMouseEnter={() => setActiveMegaCategory(category.id)}
                                 className={`px-6 py-3 cursor-pointer flex items-center justify-between transition-colors ${activeMegaCategory === category.id ? "bg-white text-[#ecbb3f] font-bold" : "text-[#454d52] font-semibold hover:bg-gray-100"}`}
                               >
                                  <span className="text-sm">{category.title[locale as "tr"|"en"]}</span>
                                  {activeMegaCategory === category.id && <ChevronRight size={16} />}
                               </div>
                            ))}
                          </div>

                          {/* Right Column: Items */}
                          <div className="w-2/3 bg-white p-8">
                             <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-3">
                               <h3 className="font-bold text-lg text-[#162f5d]">
                                 {TREATMENTS_DATA.find(c => c.id === activeMegaCategory)?.title[locale as "tr"|"en"]}
                               </h3>
                               <Link href={{ pathname: '/tedaviler/[category]', params: { category: activeMegaCategory } }} className="text-[#ecbb3f] text-xs font-bold uppercase tracking-wider hover:text-[#cda669]">
                                  {locale === 'tr' ? 'Tümünü Gör' : 'View All'}
                               </Link>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                               {TREATMENTS_DATA.find(c => c.id === activeMegaCategory)?.items.map(item => (
                                 <Link 
                                    key={item.slug}
                                    href={{ pathname: '/tedaviler/[category]/[slug]', params: { category: activeMegaCategory, slug: item.slug } }}
                                    className="text-sm text-gray-500 font-medium hover:text-[#ecbb3f] transition-colors leading-snug line-clamp-2"
                                 >
                                    {item.title[locale as "tr"|"en"]}
                                 </Link>
                               ))}
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return link.href.startsWith("/#") ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[15px] font-bold text-white/90 hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href as any}
                  className="text-[15px] font-bold text-white/90 hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Box Removed per request */}

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white ml-auto"
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
              {navLinks.map((link) => {
                if (link.name === "KURUMSAL") {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-gray-100 pb-2 mb-2">
                       <button 
                         onClick={() => setMobileKurumsalOpen(!mobileKurumsalOpen)}
                         className="flex items-center justify-between text-[#333] font-bold uppercase text-sm w-full outline-none"
                       >
                         {link.name}
                         <ChevronDown size={16} className={`transition-transform duration-300 ${mobileKurumsalOpen ? "rotate-180 text-[#ecbb3f]" : ""}`} />
                       </button>
                       <AnimatePresence>
                         {mobileKurumsalOpen && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="flex flex-col pl-4 pt-4 space-y-4 overflow-hidden"
                           >
                             {kurumsalDropdownLinks.map((sublink, idx) => (
                               sublink.href.startsWith("/#") ? (
                                 <a 
                                   key={idx}
                                   href={sublink.href} 
                                   onClick={() => setMobileMenuOpen(false)} 
                                   className="text-sm font-bold text-gray-500 hover:text-[#ecbb3f]"
                                 >
                                   {sublink.name}
                                 </a>
                               ) : (
                                 <Link 
                                   key={idx}
                                   href={sublink.href as any} 
                                   onClick={() => setMobileMenuOpen(false)} 
                                   className="text-sm font-bold text-gray-500 hover:text-[#ecbb3f]"
                                 >
                                   {sublink.name}
                                 </Link>
                               )
                             ))}
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                  );
                }

                if (link.name === "TEDAVİLER") {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-gray-100 pb-2">
                       <button 
                         onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                         className="flex items-center justify-between text-[#333] font-bold uppercase text-sm w-full outline-none"
                       >
                         {link.name}
                         <ChevronDown size={16} className={`transition-transform duration-300 ${mobileTreatmentsOpen ? "rotate-180 text-[#ecbb3f]" : ""}`} />
                       </button>
                       <AnimatePresence>
                         {mobileTreatmentsOpen && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="flex flex-col pl-4 pt-3 space-y-3 overflow-hidden"
                           >
                             <Link href="/tedaviler" onClick={() => setMobileMenuOpen(false)} className="text-[#ecbb3f] font-bold text-xs uppercase tracking-wider mb-2">
                               {locale === 'tr' ? 'Tüm Tedaviler' : 'All Treatments'}
                             </Link>
                             {TREATMENTS_DATA.map(category => (
                               <div key={category.id} className="flex flex-col">
                                 <button
                                   onClick={() => setMobileActiveCategory(mobileActiveCategory === category.id ? null : category.id)}
                                   className="flex items-center justify-between text-sm font-semibold text-[#454d52] py-1"
                                 >
                                   {category.title[locale as "tr"|"en"]}
                                   <ChevronDown size={14} className={`transition-transform ${mobileActiveCategory === category.id ? "rotate-180 text-[#ecbb3f]" : ""}`} />
                                 </button>
                                 <AnimatePresence>
                                   {mobileActiveCategory === category.id && (
                                     <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "auto", opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       className="flex flex-col pl-3 pt-2 space-y-2 overflow-hidden border-l-2 border-gray-100 mt-1 mb-2"
                                     >
                                        <Link href={{ pathname: '/tedaviler/[category]', params: { category: category.id } }} onClick={() => setMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-[#ecbb3f] py-1 font-medium italic mb-1">
                                           {locale === 'tr' ? 'Bu bölümü gör' : 'View this section'}
                                        </Link>
                                        {category.items.map(item => (
                                          <Link
                                            key={item.slug}
                                            href={{ pathname: '/tedaviler/[category]/[slug]', params: { category: category.id, slug: item.slug } }}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-xs text-gray-500 hover:text-[#ecbb3f] py-1"
                                          >
                                            {item.title[locale as "tr"|"en"]}
                                          </Link>
                                        ))}
                                     </motion.div>
                                   )}
                                 </AnimatePresence>
                               </div>
                             ))}
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                  );
                }

                return link.href.startsWith("/#") ? (
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
                );
              })}
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
