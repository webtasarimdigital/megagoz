"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";

interface Props {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title: [string, string];
  /** Sol kolondaki kısa açıklama */
  text?: string;
}

export default function FaqList({ items, eyebrow = "Sık Sorulan Sorular", title, text }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-10 lg:gap-16 items-start">
        {/* Sol: başlık + iletişim kartı (masaüstünde yapışık) */}
        <div className="lg:sticky lg:top-[120px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">{eyebrow}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#162f5d] tracking-tight leading-[1.1] mb-5">
            {title[0]}
            <br />
            <span className="font-light">{title[1]}</span>
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed font-medium mb-8 max-w-md">
            {text ?? "Aklınıza takılan her soruyu hasta danışmanlarımıza iletebilirsiniz. Tedaviye özel sorularınızı hekimlerimiz ön görüşmede yanıtlar."}
          </p>

          <div className="relative overflow-hidden rounded-3xl bg-[#162f5d] p-7 text-white shadow-[0_25px_60px_rgba(22,47,93,0.25)]">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#ecbb3f]/15 blur-2xl" />
            <p className="relative text-[11px] font-black tracking-[0.2em] text-[#ecbb3f] uppercase mb-2">Sorunuz mu var?</p>
            <p className="relative text-xl font-black leading-snug mb-6">Hasta danışmanlarımız sizi bilgilendirmek için hazır.</p>
            <div className="relative grid grid-cols-2 gap-3 mb-5">
              <a href="tel:4440320" className="flex items-center justify-center gap-2 h-[50px] rounded-xl bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[14px] transition-colors">
                <Phone size={16} /> 444 0 320
              </a>
              <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-[50px] rounded-xl border border-white/20 hover:border-white/50 font-bold text-[14px] transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
            <div className="relative flex items-center justify-between gap-3 pt-5 border-t border-white/10 text-[13px]">
              <span className="flex items-center gap-2 text-gray-300 font-medium">
                <Clock size={15} className="text-[#ecbb3f]" /> Pzt – Cmt · 09:00 – 19:00
              </span>
              <a href="#randevu" className="flex items-center gap-1.5 font-bold text-[#ecbb3f] hover:gap-2.5 transition-all">
                Randevu <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Sağ: sorular */}
        <div className="flex flex-col gap-3">
          {items.map((f, i) => {
            const on = open === i;
            return (
              <div key={i} className={`bg-white rounded-2xl border transition-all duration-300 ${on ? "border-[#ecbb3f]/60 shadow-[0_15px_40px_rgba(22,47,93,0.08)]" : "border-gray-100 hover:border-gray-200"}`}>
                <button onClick={() => setOpen(on ? null : i)} aria-expanded={on} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                  <span className="flex items-start gap-4">
                    <span className={`text-[13px] font-black tracking-widest mt-0.5 ${on ? "text-[#ecbb3f]" : "text-gray-300"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-bold text-[#162f5d] text-[16px] leading-snug">{f.q}</span>
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${on ? "bg-[#ecbb3f] text-[#162f5d] rotate-45" : "bg-gray-100 text-[#162f5d]"}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="pl-[60px] pr-6 pb-6 text-gray-500 leading-relaxed text-[15px]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
