"use client";

import { motion, type Variants } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import type { Branch } from "@/data/branches";
import BranchIcon from "./BranchIcon";

const container: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

/* ─────────── Branş hero'su: solda tipografi, sağda büyük görsel ─────────── */
export function BranchHero({ branch: b }: { branch: Branch }) {
  return (
    <section className="relative bg-[#0a111a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#162f5d] via-[#0f2245] to-[#0a111a]" />
      <div className="absolute -right-40 top-0 w-[60%] h-full blur-[160px] rounded-full opacity-20 pointer-events-none" style={{ backgroundColor: b.accent }} />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-sm mb-6 text-[12px] sm:text-sm font-bold tracking-widest uppercase" style={{ color: b.accent, borderColor: `${b.accent}55`, backgroundColor: `${b.accent}1f` }}>
            <BranchIcon icon={b.icon} size={15} /> MegaGöz {b.shortName}
          </div>
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight mb-6">
            {b.heroTitle[0]}
            <br />
            <span className="text-[#ecbb3f]">{b.heroTitle[1]}</span>
          </h1>
          <p className="text-gray-300 text-[16px] md:text-lg leading-relaxed font-light max-w-xl mb-9">{b.heroText}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#randevu" className="flex items-center justify-center gap-2.5 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[54px] px-7 rounded-lg shadow-lg shadow-[#ecbb3f]/20 transition-colors">
              <CalendarCheck size={18} /> Ücretsiz Ön Görüşme
            </a>
            <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/50 text-white font-bold text-[13px] tracking-widest uppercase h-[54px] px-7 rounded-lg transition-colors">
              <MessageCircle size={18} /> WhatsApp ile Sor
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="relative h-[320px] sm:h-[440px] lg:h-[560px] rounded-[28px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.45)] border border-white/10">
            <img src={b.image} alt={b.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a]/50 via-transparent to-transparent" />
          </div>
          {/* Yüzen bilgi kartı */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="absolute -bottom-6 left-4 sm:-left-6 bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] px-5 py-4 flex items-center gap-4 max-w-[300px]">
            <span className="w-12 h-12 rounded-xl bg-[#162f5d] text-[#ecbb3f] flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </span>
            <div>
              <p className="text-[#162f5d] font-black text-[15px] leading-tight">Hekim muayenesiyle başlar</p>
              <p className="text-gray-500 text-[12px] font-medium mt-0.5">Kişiye özel tedavi planı</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Hizmetler ─────────── */
export function BranchServices({ branch: b }: { branch: Branch }) {
  const [first, ...rest] = b.services;
  return (
    <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#ecbb3f]" />
              <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">{b.shortName} Hizmetleri</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight leading-[1.1]">
              Size özel <span className="text-[#ecbb3f]">planlanan</span>
              <br className="hidden md:block" /> uygulamalar
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-md leading-relaxed">{b.tagline}. Her uygulama öncesinde hekim değerlendirmesi yapılır.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Öne çıkan hizmet — görselli büyük kart */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <Link
              href={{ pathname: "/demo/[brans]/[hizmet]", params: { brans: b.slug, hizmet: first.slug } }}
              className="group relative h-[380px] lg:h-full min-h-[380px] flex flex-col justify-end rounded-[24px] overflow-hidden bg-[#162f5d] shadow-2xl"
            >
              <img src={b.secondaryImage} alt={first.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/60 to-transparent" />
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-[#ecbb3f] text-[#162f5d] text-[10px] font-black tracking-widest uppercase">En çok tercih edilen</span>
              <div className="relative p-7">
                <h3 className="text-3xl font-black text-white tracking-tight mb-2 group-hover:text-[#ecbb3f] transition-colors">{first.title}</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed mb-5">{first.excerpt}</p>
                <div className="flex items-center gap-5 text-[12px] font-bold text-white/70 uppercase tracking-wider">
                  {first.duration && <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#ecbb3f]" /> {first.duration}</span>}
                  <span className="flex items-center gap-1.5 text-[#ecbb3f]">İncele <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          </motion.div>

          {rest.map((s, i) => (
            <motion.div key={s.slug} variants={item}>
              <Link
                href={{ pathname: "/demo/[brans]/[hizmet]", params: { brans: b.slug, hizmet: s.slug } }}
                className="group h-full min-h-[200px] flex flex-col justify-between rounded-[24px] bg-[#f8fafc] border border-gray-100 p-7 hover:bg-white hover:border-[#ecbb3f]/50 hover:shadow-[0_20px_50px_rgba(22,47,93,0.08)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[13px] font-black tracking-[0.2em] text-gray-300">0{i + 2}</span>
                  <span className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#162f5d] flex items-center justify-center group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] transition-all">
                    <ArrowUpRight size={17} className="group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#162f5d] tracking-tight mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{s.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Süreç + neden biz ─────────── */
export function BranchProcess({ branch: b }: { branch: Branch }) {
  return (
    <section className="relative bg-[#162f5d] py-20 lg:py-28 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative container mx-auto px-6 max-w-[1300px]">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-black tracking-widest uppercase text-sm">Tedavi Süreci</span>
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Dört adımda <span className="text-[#ecbb3f]">net bir yol.</span></h2>
        </div>
        <motion.ol variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {b.process.map((p, i) => (
            <motion.li key={p.title} variants={item} className="relative rounded-[24px] bg-white/[0.05] border border-white/10 p-7">
              <span className="block text-[56px] font-black leading-none text-transparent mb-5" style={{ WebkitTextStroke: "1.5px #ecbb3f" }}>0{i + 1}</span>
              <h3 className="text-xl font-black text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed">{p.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

export function BranchHighlights({ branch: b }: { branch: Branch }) {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[420px] sm:h-[520px]">
          <div className="absolute inset-0 right-10 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/megagoz-clinic-interior.webp" alt="MegaGöz klinik" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-8 right-0 bg-[#162f5d] text-white p-6 rounded-2xl shadow-xl border-b-4 border-[#ecbb3f] max-w-[240px]">
            <p className="text-[#ecbb3f] font-black text-3xl leading-none mb-2">1 kurum</p>
            <p className="text-[13px] text-gray-300 font-medium leading-snug">Dört branş, tek çağrı merkezi ve tek hasta dosyası</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">Neden MegaGöz {b.shortName}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight leading-[1.1] mb-8">
            Bir tıp merkezinin <br />
            <span className="text-[#ecbb3f]">güvencesiyle.</span>
          </h2>
          <ul className="space-y-4 mb-10">
            {b.highlights.map((h) => (
              <li key={h} className="flex items-start gap-4 text-[16px] text-gray-600 font-medium leading-relaxed">
                <CheckCircle2 size={22} className="text-[#ecbb3f] shrink-0 mt-0.5" /> {h}
              </li>
            ))}
          </ul>
          <Link href="/doktorlar" className="group inline-flex items-center gap-4">
            <span className="w-14 h-14 bg-[#162f5d] rounded-full flex items-center justify-center text-[#ecbb3f] group-hover:scale-110 transition-transform shadow-lg">
              <ArrowRight size={24} />
            </span>
            <span className="text-[#162f5d] font-black tracking-widest text-[15px] uppercase">{b.shortName} Hekimlerimiz</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
