"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FaqList({ items, eyebrow = "Sık Sorulan Sorular", title }: { items: { q: string; a: string }[]; eyebrow?: string; title: [string, string] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">{eyebrow}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#162f5d] tracking-tight leading-[1.1]">
            {title[0]}
            <br />
            <span className="font-light">{title[1]}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((f, i) => {
            const on = open === i;
            return (
              <div key={i} className={`bg-white rounded-2xl border transition-colors ${on ? "border-[#ecbb3f]/60 shadow-lg shadow-[#162f5d]/5" : "border-gray-100"}`}>
                <button onClick={() => setOpen(on ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                  <span className="font-bold text-[#162f5d] text-[16px]">{f.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${on ? "bg-[#ecbb3f] text-[#162f5d] rotate-45" : "bg-gray-100 text-[#162f5d]"}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-500 leading-relaxed text-[15px]">{f.a}</p>
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
