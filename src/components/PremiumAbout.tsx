"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Headphones } from "lucide-react";

export default function PremiumAbout() {
  return (
    <section className="relative bg-[#F8FAFC] py-32 w-full overflow-hidden">
      {/* Decorative typography background */}
      <div className="absolute top-10 left-10 text-[150px] font-black text-gray-200/40 select-none opacity-40 pointer-events-none -z-0 tracking-tighter leading-none whitespace-nowrap">
        MEGAGÖZ
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Magazine Style Asymmetrical Images */}
          <div className="lg:col-span-6 relative h-[600px] md:h-[700px] flex items-center justify-center">
             
             {/* Main Portrait */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
               className="relative w-[85%] md:w-[75%] h-[80%] rounded-[40px] overflow-hidden shadow-2xl z-20"
             >
                <div className="absolute inset-0 bg-[#162f5d]/20 mix-blend-multiply z-10" />
                <Image 
                  src="/images/slide2.webp" 
                  alt="Megagöz Uzmanlık" 
                  fill 
                  className="object-cover"
                />
             </motion.div>

             {/* Offset Golden Frame / Image 2 */}
             <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
               className="absolute -bottom-10 right-0 w-[55%] h-[40%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-8 ring-[#F8FAFC] z-30"
             >
                <Image 
                  src="/images/slide1.webp" 
                  alt="Lazer Teknolojisi" 
                  fill 
                  className="object-cover"
                />
             </motion.div>

             {/* Floating Call Center Element */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-5 -left-10 z-30 hidden md:block"
             >
                <a 
                  href="tel:4440320" 
                  className="flex flex-col items-center justify-center bg-gradient-to-b from-[#162f5d] to-[#0d1c3a] p-6 rounded-2xl shadow-2xl border border-white/10 group cursor-pointer w-48 transition-all hover:shadow-[#162f5d]/30"
                >
                   <Headphones strokeWidth={1.5} size={36} className="text-white mb-3 opacity-90 group-hover:opacity-100 transition-opacity" />
                   <div className="text-[15px] font-bold text-white tracking-wide mb-1">Çağrı Merkezi</div>
                   <div className="text-[26px] font-black text-white leading-none transform transition-transform duration-300 group-hover:scale-110 group-hover:text-[#ecbb3f]">
                     444 0 320
                   </div>
                </a>
             </motion.div>
          </div>

          {/* Right: Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
               <span className="text-[#ecbb3f] font-black tracking-[0.3em] uppercase text-xs">YENİ NESİL VİZYON</span>
               <div className="h-[1px] w-24 bg-gradient-to-r from-[#ecbb3f] to-transparent" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162f5d] tracking-tight leading-[1.1] mb-8"
            >
              Bakış Açınızı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecbb3f] to-[#d6a52f]">Mükemmelleştirin.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl"
            >
              Standart şablonların ötesinde; her göze adeta bir sanat eseri gibi yaklaşan, yenilikçi teknoloji ve ustalıkla harmanlanmış profesyonel kliniğimize hoş geldiniz.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pl-6 border-l-4 border-[#ecbb3f] mb-12"
            >
              <p className="text-[#162f5d] font-bold text-lg md:text-xl italic">
                “Göz sağlığında hata payı yoktur. Teknolojinin ulaştığı en zirve noktayı, on yılların getirdiği tecrübemizle birleştiriyoruz.”
              </p>
              <div className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                — Başhekimlik & Yönetim Kurulu
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#162f5d] flex items-center justify-center text-[#ecbb3f] transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <span className="text-[#162f5d] font-black uppercase tracking-widest text-sm group-hover:text-[#ecbb3f] transition-colors">
                  MEGAGÖZ'Ü KEŞFEDİN
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
