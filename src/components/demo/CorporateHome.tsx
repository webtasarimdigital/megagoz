"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowUpRight, FolderHeart, Stethoscope, ShieldCheck, Handshake, Phone } from "lucide-react";
import { getBranches, type BranchId } from "@/data/branches";
import { TREATMENTS_DATA } from "@/data/treatments";
import BranchIcon from "./BranchIcon";
import { dt } from "./demoText";

const container: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const item: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

function useDemo() {
  const locale = useLocale() as "tr" | "en";
  return { locale, T: dt(locale), BRANCHES: getBranches(locale) };
}

/* ─────────────────────────── 1. Dört branşa giriş ─────────────────────────── */
export function CorporateHero() {
  const { T, BRANCHES } = useDemo();
  return (
    <section className="relative bg-[#f8fafc] w-full overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-5 sm:px-6 max-w-[1400px] pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-16 items-end mb-10 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#162f5d]/5 border border-[#162f5d]/10 text-[#162f5d] font-bold text-[12px] sm:text-sm tracking-widest mb-6 uppercase">
              {T.centreName}
            </div>
            <h1 className="text-[38px] leading-[1.05] sm:text-5xl md:text-6xl xl:text-[80px] font-black text-[#162f5d] tracking-tight">
              {T.heroTitle[0]}
              <br />
              <span className="text-[#ecbb3f]">{T.heroTitle[1]}</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:pb-3">
            <p className="text-gray-500 text-[16px] md:text-lg leading-relaxed font-medium">{T.heroText}</p>
            <p className="text-[#162f5d] font-bold mt-5 text-[15px] tracking-wide">{T.whichBranch}</p>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          {BRANCHES.map((b, i) => (
            <motion.div key={b.id} variants={item}>
              <Link
                href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
                className="group relative h-[260px] sm:h-[380px] xl:h-[460px] flex flex-col justify-end overflow-hidden rounded-[24px] bg-[#162f5d] shadow-[0_20px_50px_rgba(22,47,93,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(22,47,93,0.28)]"
              >
                <img src={b.image} alt={b.imageAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/65 to-[#0a111a]/5" />
                <div className="absolute inset-0 bg-[#ecbb3f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                <span className="absolute top-5 left-6 text-[12px] font-black tracking-[0.2em] text-white/50">0{i + 1}</span>
                {b.id === "goz" && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#ecbb3f] text-[#162f5d] text-[10px] font-black tracking-widest uppercase">{T.foundingBranch}</span>
                )}

                <div className="relative z-10 p-6 lg:p-7">
                  <span className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mb-4" style={{ color: b.accent }}>
                    <BranchIcon icon={b.icon} size={21} />
                  </span>
                  <h2 className="text-2xl lg:text-[26px] font-black text-white tracking-tight leading-tight group-hover:text-[#ecbb3f] transition-colors">{b.name}</h2>
                  <p className="text-gray-300 text-[13px] lg:text-sm leading-relaxed mt-2 mb-5 max-w-[280px]">{b.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-black tracking-widest uppercase text-white group-hover:text-[#ecbb3f] transition-colors">
                    {T.discoverBranch}
                    <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] group-hover:text-[#0a111a] transition-all">
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────── 2. Hikâye ─────────────────────── */
export function BrandStory() {
  const { T } = useDemo();
  return (
    <section className="relative bg-[#0a111a] py-24 lg:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#162f5d]/70 via-[#0f2245]/40 to-transparent pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-1/2 h-2/3 bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative container mx-auto px-6 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative h-[460px] sm:h-[550px] w-full order-2 lg:order-1">
            {/* Gerçek bina fotoğrafı (küçük kaynak; dikey kartta, büyütülmeden) */}
            <a
              href="https://maps.app.goo.gl/zCtCCuRQEpGYmEwx6"
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute top-0 right-0 z-20 w-[52%] max-w-[300px] aspect-[287/510] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55)] border-[6px] border-[#162f5d]"
            >
              <img src="/images/megagoz-bina.webp" alt={T.buildingAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a111a]/90 to-transparent" />
              <span className="absolute left-4 bottom-4 right-4 text-white text-[12px] sm:text-[13px] font-bold leading-snug">
                <span className="block text-[10px] font-black tracking-[0.2em] text-[#ecbb3f] uppercase mb-0.5">{T.ourCentre}</span>
                Gamsız Sk. No:3, Ümraniye
              </span>
            </a>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="absolute bottom-0 left-0 w-[62%] h-[250px] sm:h-[320px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[6px] border-[#162f5d] z-10">
              <img src="/images/49-home-2-2.webp" alt={T.interiorAlt} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-[#ecbb3f]" />
              <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">{T.whoWeAre}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-8">
              {T.storyTitle[0]}
              <br />
              <span className="text-[#ecbb3f]">{T.storyTitle[1]}</span>
            </h2>
            {T.storyText.map((t) => (
              <p key={t} className="text-gray-300 text-lg leading-relaxed font-light mb-6 last:mb-0">{t}</p>
            ))}
            <blockquote className="border-l-4 border-[#ecbb3f] pl-6 my-10">
              <p className="text-white font-bold italic text-[20px] md:text-[22px] leading-relaxed mb-3">{T.storyQuote}</p>
              <footer className="text-gray-400 font-bold text-sm tracking-widest uppercase">{T.board}</footer>
            </blockquote>
            <Link prefetch={false} href="/hakkimizda" className="group inline-flex items-center gap-4 hover:opacity-80 transition-opacity">
              <span className="w-14 h-14 bg-[#ecbb3f] rounded-full flex items-center justify-center text-[#162f5d] group-hover:scale-110 transition-transform shadow-lg">
                <ArrowRight size={24} />
              </span>
              <span className="text-white font-black tracking-widest text-[15px]">{T.aboutMegagoz}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── 3. Ortak standartlar ─────────────────────── */
const PILLAR_ICONS = [FolderHeart, Stethoscope, ShieldCheck, Handshake];

export function SharedStandards() {
  const { T } = useDemo();
  return (
    <section className="relative bg-[#162f5d] py-20 lg:py-28 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative container mx-auto px-6 max-w-[1300px]">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-black tracking-widest uppercase text-sm">{T.whyMegagoz}</span>
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {T.standardsTitle[0]} <span className="text-[#ecbb3f]">{T.standardsTitle[1]}</span>
          </h2>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {T.pillars.map(({ title, text }, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <motion.div key={title} variants={item} className="group bg-white/[0.05] rounded-3xl p-8 border border-white/10 hover:border-[#ecbb3f]/50 hover:bg-white/[0.08] transition-all duration-300">
                <span className="w-14 h-14 rounded-2xl bg-[#ecbb3f] text-[#162f5d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={26} />
                </span>
                <h3 className="text-xl font-black text-white tracking-tight mb-3">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-[15px]">{text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────── 4. Branş keşif sekmeleri ─────────────────────── */
export function BranchExplorer() {
  const { locale, T, BRANCHES } = useDemo();
  const [active, setActive] = useState<BranchId>("goz");
  const b = BRANCHES.find((x) => x.id === active)!;

  const services =
    b.id === "goz"
      ? TREATMENTS_DATA.slice(0, 6).map((c) => ({ k: c.id, t: c.title[locale], d: c.items[0]?.excerpt[locale] ?? "", href: { pathname: "/tedaviler/[category]", params: { category: c.slug[locale] } } }))
      : b.services.slice(0, 6).map((s) => ({ k: s.slug, t: s.title, d: s.excerpt, href: { pathname: "/demo/[brans]/[hizmet]", params: { brans: b.slug, hizmet: s.slug } } }));

  return (
    <section className="relative bg-[#f8fafc] py-24 lg:py-32 w-full overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1300px] relative">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-black tracking-widest uppercase text-sm">{T.ourServices}</span>
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162f5d] tracking-tight leading-tight">
            {T.servicesTitle[0]} <br className="hidden md:block" />
            <span className="text-[#ecbb3f]">{T.servicesTitle[1]}</span>
          </h2>
        </div>

        {/* Sekmeler: mobilde 4'ü de tek satırda (ikon üstte), masaüstünde yatay hap */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="grid grid-cols-4 sm:flex gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(22,47,93,0.06)] w-full sm:w-auto">
            {BRANCHES.map((x) => {
              const on = x.id === active;
              return (
                <button
                  key={x.id}
                  onClick={() => setActive(x.id)}
                  aria-pressed={on}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-5 py-2.5 sm:py-0 sm:h-[46px] rounded-xl text-[11px] sm:text-sm font-bold whitespace-nowrap transition-all ${on ? "bg-[#ecbb3f] text-[#162f5d] shadow-lg shadow-[#ecbb3f]/20" : "text-[#162f5d]/70 hover:text-[#162f5d] hover:bg-gray-50"}`}
                >
                  <span style={on ? undefined : { color: x.accent }}><BranchIcon icon={x.icon} size={17} /></span>
                  <span className="sm:hidden">{T.mobileLabel[x.id]}</span>
                  <span className="hidden sm:inline">{x.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={b.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8">
            <div className="relative h-[380px] lg:h-auto lg:min-h-[480px] rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(22,47,93,0.2)]">
              <img src={b.secondaryImage} alt={b.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/50 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-7 lg:p-9">
                <p className="text-[11px] font-black tracking-[0.2em] uppercase mb-2" style={{ color: b.accent }}>MegaGöz {b.shortName}</p>
                <h3 className="text-3xl font-black text-white tracking-tight mb-3">{b.name}</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-md">{b.heroText}</p>
                <Link href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} className="inline-flex items-center gap-3 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[50px] px-6 rounded-lg transition-colors">
                  {T.branchHomePage(b.shortName)} <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <Link key={s.k} href={s.href as any} className="group relative flex flex-col justify-between min-h-[150px] rounded-2xl bg-white border border-gray-100 p-6 hover:border-[#ecbb3f]/50 hover:shadow-[0_20px_50px_rgba(22,47,93,0.08)] transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[12px] font-black tracking-[0.2em] text-gray-300">0{i + 1}</span>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#ecbb3f] group-hover:rotate-45 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#162f5d] tracking-tight group-hover:text-[#ecbb3f] transition-colors mb-1.5">{s.t}</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">{s.d}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────── 5. İletişim şeridi ─────────────────────── */
export function CallBand() {
  const { T } = useDemo();
  return (
    <section className="bg-[#ecbb3f] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none select-none">
        <span className="text-[120px] lg:text-[160px] font-black text-[#162f5d] tracking-tighter">MEGAGÖZ · MEGAGÖZ · MEGAGÖZ · MEGAGÖZ</span>
      </div>
      <div className="relative container mx-auto px-6 max-w-[1200px] py-12 lg:py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-[#162f5d]/70 font-bold tracking-widest text-sm uppercase mb-1">{T.oneNumber}</p>
          <h3 className="text-3xl lg:text-4xl font-black text-[#162f5d] tracking-tight">{T.advisorsReady}</h3>
        </div>
        <a href="tel:4440320" className="flex items-center gap-3 bg-[#162f5d] text-white h-[60px] px-8 rounded-xl font-black text-xl tracking-wide shadow-xl hover:bg-[#0c1a32] transition-colors shrink-0">
          <Phone size={22} className="text-[#ecbb3f]" /> 444 0 320
        </a>
      </div>
    </section>
  );
}
