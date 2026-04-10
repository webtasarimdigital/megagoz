"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Users, MessageSquare, Stethoscope } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";

function CountUpItem({ to, delay }: { to: number, delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, delay: delay, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function PremiumStats() {
  const locale = useLocale();

  const stats = [
    { num: 14550, label: locale === 'en' ? "PATIENTS TREATED" : "TEDAVİ EDİLEN HASTA", icon: <Users size={24} /> },
    { num: 350, label: locale === 'en' ? "SATISFIED REVIEWS" : "MEMNUN HASTA YORUMU", icon: <MessageSquare size={24} /> },
    { num: 12, label: locale === 'en' ? "EXPERT DOCTORS" : "UZMAN HEKİM", icon: <Stethoscope size={24} /> }
  ];

  const marqueeText = locale === 'en' 
    ? "DON'T MISS OUT \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0 DON'T MISS OUT \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0"
    : "GÖZDEN KAÇMASIN \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0 GÖZDEN KAÇMASIN \u00A0·\u00A0 MEGAGÖZ \u00A0·\u00A0";

  return (
    <section className="hidden md:block relative w-full overflow-hidden bg-[#ecbb3f] py-8 lg:py-12">
       {/* Marquee Background */}
       <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none select-none overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="text-[100px] lg:text-[140px] font-black text-[#162f5d] uppercase tracking-tighter mix-blend-overlay flex items-center"
          >
             {marqueeText}
          </motion.div>
       </div>

       <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {stats.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 className="flex flex-col items-center gap-4 pt-6 md:pt-0"
               >
                 <div className="w-[64px] h-[64px] rounded-full bg-[#454d52] text-white flex items-center justify-center shrink-0 shadow-lg">
                   {stat.icon}
                 </div>
                 <div className="flex flex-col items-center mt-1">
                    <div className="text-[44px] lg:text-[54px] font-black text-white tracking-tighter mb-2 drop-shadow-sm leading-none">
                      <CountUpItem to={stat.num} delay={idx * 0.1 + 0.2} />
                    </div>
                    <div className="text-[13px] font-bold text-[#162f5d] uppercase tracking-[0.15em]">{stat.label}</div>
                 </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
