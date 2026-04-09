"use client";

import { motion } from "framer-motion";
import { Users, Award, Smile } from "lucide-react";

export default function PremiumStats() {
  const stats = [
    { num: "15.000+", label: "Başarılı Operasyon", icon: <Users size={32} /> },
    { num: "20+", label: "Yıllık Uzmanlık", icon: <Award size={32} /> },
    { num: "%100", label: "Hasta Memnuniyeti", icon: <Smile size={32} /> }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#ecbb3f] py-16 lg:py-24">
       {/* Marquee Background */}
       <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none select-none overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="text-[150px] font-black text-[#162f5d] uppercase tracking-tighter mix-blend-overlay"
          >
             GÖZDEN KAÇMASIN &nbsp;&middot;&nbsp; MEGAGÖZ &nbsp;&middot;&nbsp; GÖZDEN KAÇMASIN &nbsp;&middot;&nbsp; MEGAGÖZ &nbsp;&middot;&nbsp;
          </motion.div>
       </div>

       <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#162f5d]/20">
             {stats.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 className={`flex flex-col md:flex-row items-center gap-6 ${idx !== 0 ? "md:pl-12 pt-8 md:pt-0" : "pt-8 md:pt-0"}`}
               >
                 <div className="w-16 h-16 rounded-full bg-[#162f5d] text-[#ecbb3f] flex items-center justify-center shrink-0 shadow-xl">
                   {stat.icon}
                 </div>
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-[#162f5d] tracking-tighter mb-1">{stat.num}</div>
                    <div className="text-sm font-bold text-[#162f5d]/70 uppercase tracking-widest">{stat.label}</div>
                 </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
