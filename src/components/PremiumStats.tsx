"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Stethoscope } from "lucide-react";
import { useLocale } from "next-intl";

export default function PremiumStats() {
  const locale = useLocale();

  const stats = [
    { num: "14550", label: locale === 'en' ? "PATIENTS TREATED" : "TEDAVİ EDİLEN HASTA", icon: <Users size={28} /> },
    { num: "350", label: locale === 'en' ? "SATISFIED REVIEWS" : "MEMNUN HASTA YORUMU", icon: <MessageSquare size={28} /> },
    { num: "12", label: locale === 'en' ? "EXPERT DOCTORS" : "UZMAN HEKİM", icon: <Stethoscope size={28} /> }
  ];

  const marqueeText = locale === 'en' 
    ? "DON'T MISS OUT \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0 DON'T MISS OUT \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0"
    : "GÖZDEN KAÇMASIN \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0 GÖZDEN KAÇMASIN \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0";

  return (
    <section className="hidden md:block relative w-full overflow-hidden bg-[#ecbb3f] py-16 lg:py-24">
       {/* Marquee Background */}
       <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none select-none overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="text-[150px] font-black text-[#162f5d] uppercase tracking-tighter mix-blend-overlay"
          >
             {marqueeText}
          </motion.div>
       </div>

       <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {stats.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 className="flex flex-col items-center gap-5 pt-8 md:pt-0"
               >
                 <div className="w-[84px] h-[84px] rounded-full bg-[#454d52] text-white flex items-center justify-center shrink-0 shadow-lg">
                   {stat.icon}
                 </div>
                 <div className="flex flex-col items-center mt-2">
                    <div className="text-[52px] lg:text-[62px] font-black text-white tracking-tighter mb-2 drop-shadow-sm leading-none">{stat.num}</div>
                    <div className="text-[14px] font-bold text-[#162f5d] uppercase tracking-[0.15em]">{stat.label}</div>
                 </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
