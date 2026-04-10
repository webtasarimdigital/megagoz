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
    { name: t("about"), href: "/hakkimizda" },
    { name: t("partnerInstitutions"), href: "/anlasmali-kurumlar" },
    { name: t("megagozGallery"), href: "/galeri" },
    { name: t("jobApplication"), href: "/is-basvurusu" },
    { name: t("kvkkPolicy"), href: "/kvkk" }
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
    let newParams = { ...params };
    let newPathname = pathname;

    // Blog Routing Translation
    if (newPathname.includes('/blog') && newParams.slug) {
       const blogMapping: Record<string, string> = {
         "lazer-goz-ameliyati-nedir": "what-is-laser-eye-surgery",
         "what-is-laser-eye-surgery": "lazer-goz-ameliyati-nedir",
         "goz-rengi-degistirme": "eye-color-change",
         "eye-color-change": "goz-rengi-degistirme",
         "cocuklarda-goz-sagligi": "eye-health-in-children",
         "eye-health-in-children": "cocuklarda-goz-sagligi",
         "katarakt-belirtileri-ve-tedavisi": "cataract-symptoms-and-treatment",
         "cataract-symptoms-and-treatment": "katarakt-belirtileri-ve-tedavisi",
         "kuru-goz-sendromu": "how-to-cure-dry-eye",
         "how-to-cure-dry-eye": "kuru-goz-sendromu",
         "akilli-lens-tedavisi": "who-is-eligible-for-smart-lenses",
         "who-is-eligible-for-smart-lenses": "akilli-lens-tedavisi"
       };
       if (typeof newParams.slug === 'string' && blogMapping[newParams.slug]) {
          newParams.slug = blogMapping[newParams.slug];
       } else {
          newPathname = '/blog';
          delete newParams.slug;
       }
    } 
    // Treatments (Tedaviler) Routing Translation
    else if (newPathname.includes('/tedaviler') || newPathname.includes('/treatments')) {
       if (newParams.category && typeof newParams.category === 'string') {
          const currentCat = newParams.category;
          const catData = TREATMENTS_DATA.find(c => c.slug.tr === currentCat || c.slug.en === currentCat || c.id === currentCat);
          if (catData) {
             newParams.category = catData.slug[newLocale];
             
             if (newParams.slug && typeof newParams.slug === 'string') {
                const currentSlug = newParams.slug;
                const subData = catData.items.find(i => 
                   (typeof i.slug === 'string' ? i.slug : i.slug.tr) === currentSlug || 
                   (typeof i.slug === 'string' ? i.slug : i.slug.en) === currentSlug
                );
                if (subData) {
                   newParams.slug = typeof subData.slug === 'string' ? subData.slug : subData.slug[newLocale];
                } else {
                   delete newParams.slug;
                   newPathname = '/tedaviler/[category]';
                }
             }
          } else {
             newPathname = '/tedaviler';
             delete newParams.category;
             delete newParams.slug;
          }
       }
    }

    router.replace(
      // @ts-expect-error -- Generic dynamic path support
      { pathname: newPathname, params: newParams }, 
      { locale: newLocale }
    );
  };

  const navLinks = [
    { id: "home", name: t("home").toUpperCase(), href: "/" },
    { id: "corporate", name: t("corporate").toUpperCase(), href: "/hakkimizda" },
    { id: "treatments", name: t("treatments").toUpperCase(), href: "/tedaviler" },
    { id: "doctors", name: t("doctors").toUpperCase(), href: "/doktorlar" },
    { id: "blog", name: t("blog").toUpperCase(), href: "/blog" },
    { id: "contact", name: t("contact").toUpperCase(), href: "/iletisim" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Blue Bar - Disappears on scroll */}
      <div 
        className={`bg-[#162f5d] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "hidden lg:flex h-[55px] opacity-100"
        }`}
      >
        <div className="w-full flex items-center justify-center h-full px-4 pl-12 gap-8 md:gap-16">
          {/* Left quick links */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={{ pathname: '/tedaviler/[category]/[slug]', params: { category: 'kontak-lens', slug: locale === 'tr' ? 'uc-odakli-lensler' : 'trifocal-lenses' } }} className="hover:text-gray-200 transition-colors">{t("smartLenses")}</Link>
            <span className="text-white/60">|</span>
            <Link href={{ pathname: '/tedaviler/[category]/[slug]', params: { category: 'lazer-tedavisi', slug: locale === 'tr' ? 'ilasik-goz-lazer-ameliyati' : 'ilasik-laser-eye-surgery' } }} className="hover:text-gray-200 transition-colors">{t("laserSurgery")}</Link>
            <span className="text-white/60">|</span>
            <Link href="/anlasmali-kurumlar" className="hover:text-gray-200 transition-colors">{t("partnerInstitutions")}</Link>
          </div>

          {/* Right contact & settings */}
          <div className="flex items-center gap-4 shrink-0 font-bold">
            <a href="https://maps.app.goo.gl/zCtCCuRQEpGYmEwx6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors flex items-center gap-1.5 hidden lg:flex">
              <MapPin size={14} /> {t("location")}
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
      <div className={`transition-all duration-300 ${isScrolled ? "shadow-md shadow-[rgba(0,0,0,0.1)] py-2 lg:py-4" : "py-4 lg:py-6 border-b-2 border-transparent"} bg-[#162f5d] lg:bg-white w-full sticky top-0`}>
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between lg:justify-center px-4 sm:px-6 md:px-8 gap-2 sm:gap-4 lg:gap-10 xl:gap-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex flex-col justify-center items-center shrink-0 w-[125px] sm:w-[150px] md:w-[250px] lg:w-[300px] xl:w-[340px] h-[45px] sm:h-[55px] md:h-[70px] lg:h-[85px] relative group px-1"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Mobile Logo */}
                <img 
                  src="/megagoz-logo-mobil.png" 
                  alt="Megagöz Tıp Merkezi" 
                  className="w-full h-[85%] object-contain scale-[1.05] lg:hidden" 
                />
                {/* Desktop Logo */}
                <img 
                  src="/logo.png" 
                  alt="Megagöz Tıp Merkezi" 
                  className="hidden lg:block w-full h-full object-contain scale-[1.15] lg:invert-0 lg:mix-blend-normal lg:brightness-100" 
                />
             </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.id === "corporate") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setKurumsalHovered(true)}
                    onMouseLeave={() => setKurumsalHovered(false)}
                  >
                    <Link 
                      href={link.href as any}
                      className="text-[15px] font-bold text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4 flex items-center gap-1"
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

              if (link.id === "treatments") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setMegaMenuHovered(true)}
                    onMouseLeave={() => setMegaMenuHovered(false)}
                  >
                    <Link 
                      href="/tedaviler"
                      className="text-[15px] font-bold text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4 flex items-center gap-1"
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
                               <Link href={{ pathname: '/tedaviler/[category]', params: { category: TREATMENTS_DATA.find(c => c.id === activeMegaCategory)?.slug[locale as "tr"|"en"] || activeMegaCategory } }} className="text-[#ecbb3f] text-xs font-bold uppercase tracking-wider hover:text-[#cda669]">
                                  {locale === 'tr' ? 'Tümünü Gör' : 'View All'}
                               </Link>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                               {TREATMENTS_DATA.find(c => c.id === activeMegaCategory)?.items.map(item => (
                                 <Link 
                                    key={typeof item.slug === 'string' ? item.slug : item.slug[locale as "tr"|"en"]}
                                    href={{ 
                                      pathname: '/tedaviler/[category]/[slug]', 
                                      params: { 
                                        category: TREATMENTS_DATA.find(c => c.id === activeMegaCategory)?.slug[locale as "tr"|"en"] || activeMegaCategory, 
                                        slug: typeof item.slug === 'string' ? item.slug : item.slug[locale as "tr"|"en"] 
                                      } 
                                    }}
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
                  className="text-[15px] font-bold text-[#162f5d] hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href as any}
                  className="text-[15px] font-bold text-[#162f5d] hover:text-[#ecbb3f] transition-colors whitespace-nowrap tracking-wide py-4"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Box Removed per request */}

          {/* Mobile Language Selector */}
          <div className="lg:hidden flex-1 flex justify-center relative">
             
             {/* Language Dropdown */}
             <button 
               onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
               className="flex items-center gap-1.5 sm:gap-2 bg-transparent p-0.5 sm:p-1 active:scale-95 transition-transform"
             >
               <div className="w-[20px] h-[14px] sm:w-[24px] sm:h-[16px] rounded-[2px] overflow-hidden shrink-0 shadow-sm flex items-center justify-center relative">
                  <img src={locale === "tr" ? "/tr.svg" : "/en.svg"} alt="Lang" className="absolute inset-0 w-full h-full object-cover scale-[1.2]" />
               </div>
               <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-[0.08em] sm:tracking-widest uppercase leading-none mt-[1px]">{locale === "tr" ? "TÜRKÇE" : "ENGLISH"}</span>
               <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="none" className="ml-0.5 sm:ml-1 opacity-70 w-2 sm:w-2.5 h-2 sm:h-2.5"><polygon points="6,9 18,9 12,18"/></svg>
             </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] right-10 bg-white rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-gray-100 min-w-[150px] z-50 overflow-hidden"
                  >
                    <button 
                      onClick={() => { switchLocale("tr"); setIsLangMenuOpen(false); }}
                      className="flex items-center gap-3 w-full px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-[20px] h-[14px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-gray-200">
                         <img src="/tr.svg" alt="TR" className="w-full h-full object-cover transform scale-[1.2]" />
                      </div>
                       <span className={`font-bold tracking-widest text-[11px] uppercase ${locale === "tr" ? "text-[#cda669]" : "text-[#333]"}`}>TÜRKÇE</span>
                    </button>
                    <button 
                      onClick={() => { switchLocale("en"); setIsLangMenuOpen(false); }}
                      className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-[20px] h-[14px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-gray-200">
                         <img src="/en.svg" alt="EN" className="w-full h-full object-cover transform scale-[1.2]" />
                      </div>
                       <span className={`font-bold tracking-widest text-[11px] uppercase ${locale === "en" ? "text-[#cda669]" : "text-[#333]"}`}>ENGLISH</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>

          {/* Menu Toggle */}
          <div className="lg:hidden flex items-center shrink-0 ml-2">
             <button 
               className="p-1 active:scale-90 transition-transform shrink-0 flex items-center justify-center w-8 h-8 focus:outline-none"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               aria-label="Toggle Menu"
             >
               {mobileMenuOpen ? (
                 <X size={30} className="text-white" />
               ) : (
                 <div className="flex flex-col justify-between w-[28px] h-[20px]">
                    <span className="w-full h-[2.5px] bg-white rounded-full"></span>
                    <span className="w-full h-[2.5px] bg-white rounded-full"></span>
                    <span className="w-full h-[2.5px] bg-white rounded-full"></span>
                 </div>
               )}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#0c1a32] z-[200] lg:hidden flex flex-col"
          >
            {/* Header inside Menu */}
            <div className="flex items-center justify-between p-6 border-b border-light/5 shrink-0 h-[92px]">
               <img src="/megagoz-logo-mobil.png" alt="Megagöz" className="h-full max-h-[85px] w-auto object-contain scale-[1.05] transform origin-left drop-shadow-md pb-2 pt-1" />
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors bg-white/5 active:scale-95"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Scrollable Links */}
            <div className="flex-1 overflow-y-auto w-full px-6 pt-8 pb-32 flex flex-col hide-scrollbar text-white">
              {navLinks.map((link) => {
                const borderClass = "border-b border-white/5 pb-5 mb-5";
                
                if (link.id === "corporate") {
                  return (
                    <div key={link.name} className={`flex flex-col ${borderClass}`}>
                       <button 
                         onClick={() => setMobileKurumsalOpen(!mobileKurumsalOpen)}
                         className="flex items-center justify-between font-black uppercase text-[15px] tracking-widest w-full outline-none"
                       >
                         {link.name}
                         <ChevronDown size={18} className={`transition-transform duration-300 ${mobileKurumsalOpen ? "rotate-180 text-[#ecbb3f]" : "text-white/60"}`} />
                       </button>
                       <AnimatePresence>
                         {mobileKurumsalOpen && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="flex flex-col pt-5 space-y-4 overflow-hidden"
                           >
                             {kurumsalDropdownLinks.map((sublink, idx) => (
                               sublink.href.startsWith("/#") ? (
                                 <a 
                                   key={idx}
                                   href={sublink.href} 
                                   onClick={() => setMobileMenuOpen(false)} 
                                   className="text-[13px] font-bold text-white/70 hover:text-[#ecbb3f] uppercase tracking-wider pl-4 border-l-2 border-[#ecbb3f]/50 py-1"
                                 >
                                   {sublink.name}
                                 </a>
                               ) : (
                                 <Link 
                                   key={idx}
                                   href={sublink.href as any} 
                                   onClick={() => setMobileMenuOpen(false)} 
                                   className="text-[13px] font-bold text-white/70 hover:text-[#ecbb3f] uppercase tracking-wider pl-4 border-l-2 border-[#ecbb3f]/50 py-1"
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

                if (link.id === "treatments") {
                  return (
                    <div key={link.name} className={`flex flex-col ${borderClass}`}>
                       <button 
                         onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                         className="flex items-center justify-between font-black uppercase text-[15px] tracking-widest w-full outline-none"
                       >
                         {link.name}
                         <ChevronDown size={18} className={`transition-transform duration-300 ${mobileTreatmentsOpen ? "rotate-180 text-[#ecbb3f]" : "text-white/60"}`} />
                       </button>
                       <AnimatePresence>
                         {mobileTreatmentsOpen && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="flex flex-col pt-5 space-y-5 overflow-hidden"
                           >
                             <Link href="/tedaviler" onClick={() => setMobileMenuOpen(false)} className="text-[#ecbb3f] font-black text-[13px] uppercase tracking-widest pl-4 hover:opacity-80">
                               {locale === 'tr' ? 'TÜM TEDAVİLER' : 'ALL TREATMENTS'}
                             </Link>
                             {TREATMENTS_DATA.map(category => (
                               <div key={category.id} className="flex flex-col pl-4 border-l-2 border-white/10">
                                 <button
                                   onClick={() => setMobileActiveCategory(mobileActiveCategory === category.id ? null : category.id)}
                                   className="flex items-center justify-between text-[14px] font-bold text-white/90 py-2.5 outline-none hover:text-[#ecbb3f] transition-colors"
                                 >
                                   {category.title[locale as "tr"|"en"]}
                                   <ChevronDown size={16} className={`transition-transform ${mobileActiveCategory === category.id ? "rotate-180 text-[#ecbb3f]" : "text-white/40"}`} />
                                 </button>
                                 <AnimatePresence>
                                   {mobileActiveCategory === category.id && (
                                     <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "auto", opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       className="flex flex-col pl-4 mt-2 space-y-4 overflow-hidden border-l border-white/5 pb-2"
                                     >
                                        <Link href={{ pathname: '/tedaviler/[category]', params: { category: category.slug[locale as "tr"|"en"] } }} onClick={() => setMobileMenuOpen(false)} className="text-[12px] text-[#ecbb3f] font-bold italic py-1">
                                           {locale === 'tr' ? 'Bu bölümü gör' : 'View this section'}
                                        </Link>
                                        {category.items.map(item => (
                                          <Link
                                            key={typeof item.slug === 'string' ? item.slug : item.slug[locale as "tr"|"en"]}
                                            href={{ 
                                              pathname: '/tedaviler/[category]/[slug]', 
                                              params: { 
                                                category: category.slug[locale as "tr"|"en"], 
                                                slug: typeof item.slug === 'string' ? item.slug : item.slug[locale as "tr"|"en"] 
                                              } 
                                            }}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-[13px] text-white/60 hover:text-white transition-colors"
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
                    className={`font-black uppercase text-[15px] tracking-widest ${borderClass}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href as any}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-black uppercase text-[15px] tracking-widest ${borderClass}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
