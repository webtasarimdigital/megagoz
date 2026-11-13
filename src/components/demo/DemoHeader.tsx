"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { X, Phone, MapPin, ChevronDown, ArrowRight, Calendar } from "lucide-react";
import { BRANCHES, type BranchId } from "@/data/branches";
import { TREATMENTS_DATA } from "@/data/treatments";
import BranchIcon from "./BranchIcon";

type Loc = "tr" | "en";

const CORPORATE_LINKS = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hekimlerimiz", href: "/doktorlar" },
  { name: "Blog", href: "/blog" },
  { name: "Anlaşmalı Kurumlar", href: "/anlasmali-kurumlar" },
  { name: "Galeri", href: "/galeri" },
  { name: "İletişim", href: "/iletisim" },
] as const;

/** Bir branşın menüde listelenen alt bağlantıları */
function useBranchLinks(locale: Loc) {
  return (id: BranchId) => {
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
}

export default function DemoHeader({ activeBranch }: { activeBranch?: BranchId }) {
  const locale = useLocale() as Loc;
  const linksFor = useBranchLinks(locale);

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<BranchId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBranch, setMobileBranch] = useState<BranchId | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openBranch = BRANCHES.find((b) => b.id === openMenu);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* ── Üst lacivert bar: kurumsal linkler + iletişim (kaydırınca kaybolur) ── */}
      <div
        className={`bg-[#162f5d] text-white text-[13px] font-semibold tracking-wide transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "hidden lg:flex h-[46px] opacity-100"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between h-full px-8">
          <nav className="flex items-center gap-3">
            {CORPORATE_LINKS.map((l, i) => (
              <span key={l.href} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/30">|</span>}
                <Link prefetch={false} href={l.href as any} className="hover:text-[#ecbb3f] transition-colors">
                  {l.name}
                </Link>
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-4 font-bold">
            <a href="https://maps.app.goo.gl/zCtCCuRQEpGYmEwx6" target="_blank" rel="noopener noreferrer" className="hover:text-[#ecbb3f] transition-colors flex items-center gap-1.5">
              <MapPin size={14} /> Ümraniye / İstanbul
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@megagoz.com" className="hover:text-[#ecbb3f] transition-colors font-medium">info@megagoz.com</a>
            <span className="text-white/30">|</span>
            <a href="tel:4440320" className="text-[15px] hover:text-[#ecbb3f] flex items-center gap-1.5">
              <Phone size={14} /> 444 0 320
            </a>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-2">
              <span className="w-[22px] h-[15px] rounded-[2px] overflow-hidden border border-white/20">
                <img src="/tr.svg" alt="TR" className="w-full h-full object-cover scale-[1.2]" />
              </span>
              TÜRKÇE
            </span>
          </div>
        </div>
      </div>

      {/* ── Ana bar: logo + 4 branş + randevu ── */}
      <div
        className={`relative transition-all duration-300 bg-[#162f5d] lg:bg-white w-full ${
          isScrolled ? "shadow-md shadow-black/10 py-2.5 lg:py-3" : "py-3 lg:py-4"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
          {/* Logo */}
          <Link href="/demo" className="relative shrink-0 w-[150px] sm:w-[180px] lg:w-[230px] xl:w-[270px] h-[50px] sm:h-[58px] lg:h-[68px]">
            <img src="/megagoz-logo-mobil.webp" alt="MegaGöz Tıp Merkezi" className="absolute inset-0 w-full h-full object-contain object-left lg:hidden" />
            <img src="/logo.webp" alt="MegaGöz Tıp Merkezi" className="absolute inset-0 w-full h-full object-contain object-left scale-[1.12] origin-left hidden lg:block" />
          </Link>

          {/* Masaüstü branş menüsü */}
          <nav className="hidden lg:flex items-stretch self-stretch gap-1 xl:gap-2">
            {BRANCHES.map((b) => {
              const active = activeBranch === b.id;
              const open = openMenu === b.id;
              return (
                <div key={b.id} className="relative flex items-center" onMouseEnter={() => setOpenMenu(b.id)}>
                  <Link
                    href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
                    className={`relative flex items-center gap-2 px-3 xl:px-4 py-4 text-[14px] xl:text-[15px] font-bold tracking-wide whitespace-nowrap transition-colors ${
                      open || active ? "text-[#ecbb3f]" : "text-[#162f5d] hover:text-[#ecbb3f]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: b.accent }} />
                    {b.shortName.toLocaleUpperCase("tr-TR")}
                    <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    {active && <span className="absolute left-3 right-3 xl:left-4 xl:right-4 -bottom-0.5 h-[2px] bg-[#ecbb3f] rounded-full" />}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0" onMouseEnter={() => setOpenMenu(null)}>
            <Link
              href="/doktorlar"
              className="text-[14px] xl:text-[15px] font-bold text-[#162f5d] hover:text-[#ecbb3f] transition-colors tracking-wide px-2 whitespace-nowrap"
            >
              HEKİMLERİMİZ
            </Link>
            <a
              href="#randevu"
              className="flex items-center gap-2 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-bold text-[13px] xl:text-[14px] tracking-widest uppercase h-[48px] px-5 xl:px-6 rounded-lg shadow-lg shadow-[#ecbb3f]/20 transition-colors whitespace-nowrap"
            >
              <Calendar size={17} /> Randevu Al
            </a>
          </div>

          {/* Mobil: ara + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:4440320" className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#ecbb3f]" aria-label="Ara">
              <Phone size={18} />
            </a>
            <button onClick={() => setMobileOpen(true)} aria-label="Menüyü aç" className="w-10 h-10 flex items-center justify-center">
              <span className="flex flex-col justify-between w-[26px] h-[18px]">
                <span className="w-full h-[2.5px] bg-white rounded-full" />
                <span className="w-full h-[2.5px] bg-white rounded-full" />
                <span className="w-full h-[2.5px] bg-white rounded-full" />
              </span>
            </button>
          </div>
        </div>

        {/* ── Mega menü ── */}
        <AnimatePresence>
          {openBranch && (
            <motion.div
              key="mega"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute left-0 right-0 top-full pt-2 px-8"
            >
              <div className="max-w-[1120px] mx-auto bg-white rounded-2xl shadow-[0_25px_70px_rgba(22,47,93,0.18)] border border-gray-100 overflow-hidden flex">
                {/* Sol: branş tanıtım paneli */}
                <div className="relative w-[340px] shrink-0 min-h-[340px] flex flex-col justify-end p-8 text-white overflow-hidden">
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
                      Branş Ana Sayfası <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Sağ: hizmetler */}
                <div className="flex-1 p-8">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-5">
                    <span className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">
                      {openBranch.id === "goz" ? "Tedavi Alanları" : "Hizmetler"}
                    </span>
                    <a href="#randevu" onClick={() => setOpenMenu(null)} className="text-[12px] font-bold text-[#162f5d] hover:text-[#ecbb3f] transition-colors">
                      {openBranch.shortName} için randevu →
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {linksFor(openBranch.id).map((l) => (
                      <Link
                        key={l.key}
                        href={l.href as any}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-center justify-between py-2.5 border-b border-gray-50 text-[14px] font-semibold text-[#454d52] hover:text-[#162f5d] transition-colors"
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
            className="fixed inset-0 bg-[#0c1a32] z-[200] lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-[76px] border-b border-white/5 shrink-0">
              <Link href="/demo" onClick={() => setMobileOpen(false)} className="h-[52px]">
                <img src="/megagoz-logo-mobil.webp" alt="MegaGöz" className="h-full w-auto object-contain" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white" aria-label="Kapat">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32 text-white">
              <p className="text-[11px] font-black tracking-[0.25em] text-[#ecbb3f] mb-4">BRANŞLARIMIZ</p>

              {/* 2x2 branş kartları */}
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

              {/* Branş hizmet akordeonları */}
              <div className="flex flex-col">
                {BRANCHES.map((b) => {
                  const open = mobileBranch === b.id;
                  return (
                    <div key={b.id} className="border-b border-white/5">
                      <button
                        onClick={() => setMobileBranch(open ? null : b.id)}
                        className="w-full flex items-center justify-between py-4 font-black uppercase text-[14px] tracking-widest"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: b.accent }} />
                          {b.shortName} {b.id === "goz" ? "Tedavileri" : "Hizmetleri"}
                        </span>
                        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180 text-[#ecbb3f]" : "text-white/50"}`} />
                      </button>
                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3.5 pl-5 pb-5 border-l-2 border-[#ecbb3f]/40 ml-0.5">
                              <Link href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} onClick={() => setMobileOpen(false)} className="text-[12px] font-black text-[#ecbb3f] uppercase tracking-widest">
                                Branş ana sayfası →
                              </Link>
                              {linksFor(b.id).map((l) => (
                                <Link key={l.key} href={l.href as any} onClick={() => setMobileOpen(false)} className="text-[14px] text-white/70 font-medium">
                                  {l.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] font-black tracking-[0.25em] text-white/40 mt-8 mb-3">KURUMSAL</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {CORPORATE_LINKS.map((l) => (
                  <Link key={l.href} href={l.href as any} onClick={() => setMobileOpen(false)} className="text-[14px] font-bold text-white/80">
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Alt sabit aksiyonlar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-[#0c1a32] border-t border-white/10 grid grid-cols-2 gap-3">
              <a href="tel:4440320" className="h-[50px] rounded-xl border border-white/20 flex items-center justify-center gap-2 font-bold text-white text-[14px]">
                <Phone size={16} /> 444 0 320
              </a>
              <a href="#randevu" onClick={() => setMobileOpen(false)} className="h-[50px] rounded-xl bg-[#ecbb3f] flex items-center justify-center gap-2 font-black text-[#162f5d] text-[13px] tracking-widest uppercase">
                <Calendar size={16} /> Randevu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
