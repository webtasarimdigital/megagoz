"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { X, Phone, MapPin, ChevronDown, ArrowRight, Calendar } from "lucide-react";
import { getBranches, type BranchId } from "@/data/branches";
import { TREATMENTS_DATA } from "@/data/treatments";
import BranchIcon from "./BranchIcon";
import { dt } from "./demoText";

type Loc = "tr" | "en";

const NAV_TEXT = "text-[14px] 2xl:text-[15px] font-bold tracking-wide whitespace-nowrap transition-colors";

/** Dil seçimi: aynı sayfanın diğer dildeki adresine geçer */
function useSwitchLocale() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  return (next: Loc) => {
    const { locale: _ignored, ...rest } = params as Record<string, string>;
    // @ts-expect-error -- dinamik demo rotaları için genel parametre desteği
    router.replace({ pathname, params: rest }, { locale: next });
  };
}

function Flag({ code, className = "" }: { code: Loc; className?: string }) {
  return (
    <span className={`w-[24px] h-[16px] rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-black/10 ${className}`}>
      <img src={code === "tr" ? "/tr.svg" : "/en.svg"} alt={code.toUpperCase()} className="w-full h-full object-cover scale-[1.2]" />
    </span>
  );
}

/**
 * Sabit header + altında aynı yükseklikte boşluk.
 * Sayfalar ekstra üst boşluk vermez; header yüksekliği tek yerden yönetilir.
 */
export default function DemoHeader({ activeBranch }: { activeBranch?: BranchId }) {
  const locale = useLocale() as Loc;
  const T = dt(locale);
  const BRANCHES = getBranches(locale);
  const switchLocale = useSwitchLocale();

  const branchLinks = (id: BranchId) => {
    if (id === "goz") {
      return TREATMENTS_DATA.map((c) => ({
        key: c.id,
        title: c.title[locale],
        href: { pathname: "/tedaviler/[category]" as const, params: { category: c.slug[locale] } },
      }));
    }
    const b = BRANCHES.find((x) => x.id === id)!;
    return b.services.map((s) => ({
      key: s.slug,
      title: s.title,
      href: { pathname: "/demo/[brans]/[hizmet]" as const, params: { brans: b.slug, hizmet: s.slug } },
    }));
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<BranchId | "kurumsal" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) setMobileLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const openBranch = BRANCHES.find((b) => b.id === openMenu);

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
        {/* ── Üst lacivert bar (orijinal header ile aynı) ── */}
        <div
          className={`bg-[#162f5d] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 ${
            isScrolled ? "h-0 opacity-0 overflow-hidden" : "hidden xl:flex h-[50px] opacity-100"
          }`}
        >
          <div className="w-full flex items-center justify-center h-full px-4 gap-16">
            <div className="flex items-center gap-3">
              <Link prefetch={false} href={{ pathname: "/tedaviler/[category]/[slug]", params: { category: locale === "tr" ? "katarakt" : "cataract", slug: locale === "tr" ? "uc-odakli-lensler" : "trifocal-lenses" } }} className="hover:text-gray-200 transition-colors">
                {T.smartLenses}
              </Link>
              <span className="text-white/60">|</span>
              <Link prefetch={false} href={{ pathname: "/tedaviler/[category]/[slug]", params: { category: locale === "tr" ? "lazer-tedavisi" : "laser-treatment", slug: locale === "tr" ? "lasik-goz-lazer-ameliyati" : "lasik-laser-eye-surgery" } }} className="hover:text-gray-200 transition-colors">
                {T.laserSurgery}
              </Link>
              <span className="text-white/60">|</span>
              <Link prefetch={false} href="/anlasmali-kurumlar" className="hover:text-gray-200 transition-colors">
                {T.partnerInstitutions}
              </Link>
            </div>
            <div className="flex items-center gap-4 font-bold">
              <a href="https://maps.app.goo.gl/zCtCCuRQEpGYmEwx6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors flex items-center gap-1.5">
                <MapPin size={14} /> {T.location}
              </a>
              <span className="text-white/60">|</span>
              <a href="mailto:info@megagoz.com" className="hover:text-gray-200 transition-colors font-medium">
                info@megagoz.com
              </a>
              <span className="text-white/60">|</span>
              <a href="tel:4440320" className="text-[15px] hover:text-gray-200 flex items-center gap-1.5">
                <Phone size={14} /> 444 0 320
              </a>
              <span className="text-white/60">|</span>
              <a href="https://instagram.com/megagoz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579553615596#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <span className="text-white/60">|</span>

              {/* Dil seçimi (orijinal header ile aynı görünüm) */}
              <div className="relative flex items-center ml-1" ref={langRef}>
                <button onClick={() => setLangOpen(!langOpen)} aria-haspopup="listbox" aria-expanded={langOpen} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity p-1 rounded">
                  <Flag code={locale} className="border-white/20" />
                  <span className="font-bold tracking-wider uppercase mt-0.5">{T.languageName}</span>
                  <ChevronDown size={14} className={`text-[#ecbb3f] mt-0.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[calc(100%+12px)] right-0 bg-white rounded-b-md shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-t-[3px] border-t-[#ecbb3f] min-w-[200px] z-[200] overflow-hidden"
                      role="listbox"
                    >
                      {(["tr", "en"] as Loc[]).map((l) => (
                        <button
                          key={l}
                          role="option"
                          aria-selected={locale === l}
                          onClick={() => { setLangOpen(false); if (l !== locale) switchLocale(l); }}
                          className="flex items-center gap-4 w-full px-5 py-4 hover:bg-gray-50 transition-colors border-b last:border-b-0 border-gray-100"
                        >
                          <Flag code={l} />
                          <span className={`font-bold tracking-widest text-[14px] uppercase ${locale === l ? "text-[#cda669]" : "text-[#333]"}`}>{l === "tr" ? "TÜRKÇE" : "ENGLISH"}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* ── Ana bar: logo + tam menü ── */}
        <div className={`relative bg-[#162f5d] xl:bg-white w-full transition-all duration-300 ${isScrolled ? "shadow-md shadow-black/10" : ""}`} onMouseLeave={() => setOpenMenu(null)}>
          <div
            className={`w-full max-w-[1920px] mx-auto flex items-center justify-between xl:justify-center px-4 sm:px-6 gap-3 xl:gap-8 2xl:gap-12 transition-all duration-300 h-[74px] sm:h-[82px] ${
              isScrolled ? "xl:h-[88px]" : "xl:h-[104px]"
            }`}
          >
            {/* Logo */}
            <Link href="/demo" className="relative shrink-0 w-[140px] min-[390px]:w-[150px] sm:w-[180px] xl:w-[250px] 2xl:w-[300px] h-[54px] sm:h-[62px] xl:h-[78px]">
              <img src="/megagoz-logo-mobil.webp" alt="MegaGöz Tıp Merkezi" className="absolute inset-0 w-full h-full object-contain object-left xl:hidden" />
              <img src="/logo.webp" alt="MegaGöz Tıp Merkezi" className="absolute inset-0 w-full h-full object-contain scale-[1.15] hidden xl:block" />
            </Link>

            {/* Masaüstü menü */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 h-full">
              <Link href="/demo" onMouseEnter={() => setOpenMenu(null)} className={`${NAV_TEXT} text-[#162f5d] hover:text-[#ecbb3f] py-4 uppercase`}>
                {T.home}
              </Link>

              {/* Kurumsal */}
              <div className="relative h-full flex items-center" onMouseEnter={() => setOpenMenu("kurumsal")}>
                <Link href="/hakkimizda" className={`${NAV_TEXT} flex items-center gap-1 py-4 uppercase ${openMenu === "kurumsal" ? "text-[#ecbb3f]" : "text-[#162f5d]"}`}>
                  {T.corporate} <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${openMenu === "kurumsal" ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {openMenu === "kurumsal" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[80%] left-0 min-w-[260px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden z-50 py-2"
                    >
                      {T.corporateLinks.map((l) => (
                        <Link key={l.href} href={l.href as any} onClick={() => setOpenMenu(null)} className="px-5 py-3 text-sm font-bold text-[#454d52] hover:bg-gray-50 hover:text-[#ecbb3f] transition-colors border-b last:border-b-0 border-gray-50">
                          {l.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Branşlar */}
              {BRANCHES.map((b) => {
                const active = activeBranch === b.id;
                const open = openMenu === b.id;
                return (
                  <div key={b.id} className="h-full flex items-center" onMouseEnter={() => setOpenMenu(b.id)}>
                    <Link
                      href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
                      className={`${NAV_TEXT} relative flex items-center gap-1 py-4 ${open || active ? "text-[#ecbb3f]" : "text-[#162f5d] hover:text-[#ecbb3f]"}`}
                    >
                      {b.shortName.toLocaleUpperCase(locale === "tr" ? "tr-TR" : "en-US")}
                      <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                      {active && <span className="absolute left-0 right-4 bottom-2 h-[2px] bg-[#ecbb3f] rounded-full" />}
                    </Link>
                  </div>
                );
              })}

              <Link href="/blog" onMouseEnter={() => setOpenMenu(null)} className={`${NAV_TEXT} text-[#162f5d] hover:text-[#ecbb3f] py-4 uppercase`}>
                {T.blog}
              </Link>
              <Link href="/iletisim" onMouseEnter={() => setOpenMenu(null)} className={`${NAV_TEXT} text-[#162f5d] hover:text-[#ecbb3f] py-4 uppercase`}>
                {T.contact}
              </Link>
            </nav>

            {/* Mobil dil seçimi — orijinal sitedeki gibi: bayrak + dil adı, dokununca menü açılır */}
            <div className="xl:hidden flex-1 flex justify-center relative" ref={mobileLangRef}>
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                aria-haspopup="listbox"
                aria-expanded={mobileLangOpen}
                className="flex items-center gap-1.5 sm:gap-2 p-1 active:scale-95 transition-transform"
              >
                <Flag code={locale} className="!w-[20px] !h-[14px] sm:!w-[24px] sm:!h-[16px] border-white/20" />
                <span className="text-[11px] sm:text-[12px] font-bold text-white tracking-[0.08em] sm:tracking-widest uppercase leading-none mt-[1px]">{T.languageName}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white" className={`opacity-70 w-2 sm:w-2.5 h-2 sm:h-2.5 transition-transform ${mobileLangOpen ? "rotate-180" : ""}`}><polygon points="6,9 18,9 12,18" /></svg>
              </button>
              <AnimatePresence>
                {mobileLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    role="listbox"
                    className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-gray-100 min-w-[160px] z-50 overflow-hidden"
                  >
                    {(["tr", "en"] as Loc[]).map((l) => (
                      <button
                        key={l}
                        role="option"
                        aria-selected={locale === l}
                        onClick={() => { setMobileLangOpen(false); if (l !== locale) switchLocale(l); }}
                        className="flex items-center gap-3 w-full px-4 py-3 border-b last:border-b-0 border-gray-50 hover:bg-gray-50 transition-colors"
                      >
                        <Flag code={l} className="!w-[20px] !h-[14px]" />
                        <span className={`font-bold tracking-widest text-[12px] uppercase ${locale === l ? "text-[#cda669]" : "text-[#333]"}`}>{l === "tr" ? "TÜRKÇE" : "ENGLISH"}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobil: hamburger */}
            <div className="xl:hidden flex items-center shrink-0">
              <button onClick={() => setMobileOpen(true)} aria-label={T.openMenu} className="w-10 h-10 flex items-center justify-center">
                <span className="flex flex-col justify-between w-[26px] h-[19px]">
                  <span className="w-full h-[2.5px] bg-white rounded-full" />
                  <span className="w-full h-[2.5px] bg-white rounded-full" />
                  <span className="w-full h-[2.5px] bg-white rounded-full" />
                </span>
              </button>
            </div>
          </div>

          {/* ── Branş mega menüsü ── */}
          <AnimatePresence>
            {openBranch && (
              <motion.div
                key="mega"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="hidden xl:block absolute left-0 right-0 top-full px-8"
              >
                <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-[0_25px_70px_rgba(22,47,93,0.18)] border border-gray-100 overflow-hidden flex">
                  <div className="relative w-[330px] shrink-0 min-h-[330px] flex flex-col justify-end p-8 text-white overflow-hidden">
                    <img src={openBranch.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#162f5d]/75 to-[#162f5d]/30" />
                    <div className="relative">
                      <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mb-4" style={{ color: openBranch.accent }}>
                        <BranchIcon icon={openBranch.icon} size={22} />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight mb-2">{openBranch.name}</h3>
                      <p className="text-[13px] text-gray-300 leading-relaxed mb-6">{openBranch.tagline}</p>
                      <Link
                        href={{ pathname: "/demo/[brans]", params: { brans: openBranch.slug } }}
                        onClick={() => setOpenMenu(null)}
                        className="inline-flex items-center gap-2 text-[#ecbb3f] text-[12px] font-black uppercase tracking-widest hover:gap-3 transition-all"
                      >
                        {T.branchHome} <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                      <span className="font-bold text-lg text-[#162f5d]">{openBranch.id === "goz" ? T.eyeTreatments : T.servicesOf(openBranch.shortName)}</span>
                      <Link href={{ pathname: "/demo/[brans]", params: { brans: openBranch.slug } }} onClick={() => setOpenMenu(null)} className="text-[#ecbb3f] text-xs font-bold uppercase tracking-wider hover:text-[#cda669]">
                        {T.viewAll}
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {branchLinks(openBranch.id).map((l) => (
                        <Link
                          key={l.key}
                          href={l.href as any}
                          onClick={() => setOpenMenu(null)}
                          className="group flex items-center justify-between py-2.5 border-b border-gray-50 text-[14px] font-semibold text-[#454d52] hover:text-[#ecbb3f] transition-colors"
                        >
                          {l.title}
                          <ArrowRight size={14} className="text-[#ecbb3f] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Mobil menü ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed inset-0 bg-[#0c1a32] z-[1000] xl:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[76px] border-b border-white/5 shrink-0">
                <Link href="/demo" onClick={() => setMobileOpen(false)} className="h-[54px]">
                  <img src="/megagoz-logo-mobil.webp" alt="MegaGöz" className="h-full w-auto object-contain" />
                </Link>
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white" aria-label={T.closeMenu}>
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32 text-white">
                <p className="text-[11px] font-black tracking-[0.25em] text-[#ecbb3f] mb-4 uppercase">{T.ourBranches}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {BRANCHES.map((b) => (
                    <Link
                      key={b.id}
                      href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
                      onClick={() => setMobileOpen(false)}
                      className={`relative h-[118px] rounded-2xl overflow-hidden flex flex-col justify-end p-3.5 border ${activeBranch === b.id ? "border-[#ecbb3f]" : "border-white/10"}`}
                    >
                      <img src={b.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/60 to-transparent" />
                      <span className="relative w-7 h-7 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center mb-2" style={{ color: b.accent }}>
                        <BranchIcon icon={b.icon} size={15} />
                      </span>
                      <span className="relative font-black text-[14px] leading-tight">{b.shortName}</span>
                    </Link>
                  ))}
                </div>

                <MobileLink href="/demo" onClick={() => setMobileOpen(false)}>{T.home}</MobileLink>

                <MobileAccordion title={T.corporate} id="kurumsal" open={mobileSection} setOpen={setMobileSection}>
                  {T.corporateLinks.map((l) => (
                    <Link key={l.href} href={l.href as any} onClick={() => setMobileOpen(false)} className="text-[14px] text-white/70 font-medium">
                      {l.name}
                    </Link>
                  ))}
                </MobileAccordion>

                {BRANCHES.map((b) => (
                  <MobileAccordion key={b.id} title={b.shortName} id={b.id} open={mobileSection} setOpen={setMobileSection} dot={b.accent}>
                    <Link href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} onClick={() => setMobileOpen(false)} className="text-[12px] font-black text-[#ecbb3f] uppercase tracking-widest">
                      {T.branchHomeArrow}
                    </Link>
                    {branchLinks(b.id).map((l) => (
                      <Link key={l.key} href={l.href as any} onClick={() => setMobileOpen(false)} className="text-[14px] text-white/70 font-medium">
                        {l.title}
                      </Link>
                    ))}
                  </MobileAccordion>
                ))}

                <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>{T.blog}</MobileLink>
                <MobileLink href="/iletisim" onClick={() => setMobileOpen(false)}>{T.contact}</MobileLink>

                {/* Mobil dil seçimi */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {(["tr", "en"] as Loc[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setMobileOpen(false); if (l !== locale) switchLocale(l); }}
                      className={`h-[50px] rounded-xl flex items-center justify-center gap-2.5 font-black text-[13px] tracking-widest border transition-colors ${
                        locale === l ? "bg-white text-[#162f5d] border-white" : "border-white/20 text-white/80"
                      }`}
                    >
                      <Flag code={l} /> {l === "tr" ? "TÜRKÇE" : "ENGLISH"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 bg-[#0c1a32] border-t border-white/10 grid grid-cols-2 gap-3">
                <a href="tel:4440320" className="h-[50px] rounded-xl border border-white/20 flex items-center justify-center gap-2 font-bold text-white text-[14px]">
                  <Phone size={16} /> 444 0 320
                </a>
                <a href="#randevu" onClick={() => setMobileOpen(false)} className="h-[50px] rounded-xl bg-[#ecbb3f] flex items-center justify-center gap-2 font-black text-[#162f5d] text-[13px] tracking-widest uppercase">
                  <Calendar size={16} /> {T.appointment}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sabit header'ın kapladığı alan kadar boşluk (kaydırılmamış hâl) */}
      <div aria-hidden className="h-[74px] sm:h-[82px] xl:h-[154px] shrink-0" />
    </>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href as any} onClick={onClick} className="block py-4 border-b border-white/5 font-black uppercase text-[14px] tracking-widest">
      {children}
    </Link>
  );
}

function MobileAccordion({
  title,
  id,
  open,
  setOpen,
  dot,
  children,
}: {
  title: string;
  id: string;
  open: string | null;
  setOpen: (v: string | null) => void;
  dot?: string;
  children: React.ReactNode;
}) {
  const on = open === id;
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setOpen(on ? null : id)} className="w-full flex items-center justify-between py-4 font-black uppercase text-[14px] tracking-widest">
        <span className="flex items-center gap-3">
          {dot && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />}
          {title}
        </span>
        <ChevronDown size={18} className={`transition-transform ${on ? "rotate-180 text-[#ecbb3f]" : "text-white/50"}`} />
      </button>
      <AnimatePresence>
        {on && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="flex flex-col gap-3.5 pl-5 pb-5 border-l-2 border-[#ecbb3f]/40 ml-0.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
