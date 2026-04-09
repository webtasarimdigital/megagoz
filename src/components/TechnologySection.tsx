"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Cpu, Zap, Activity, ScanFace } from "lucide-react";

export default function TechnologySection() {
  const techs = [
    { icon: <Zap size={24} />, title: "FemtoSaniye Lazer", desc: "Bıçaksız, %100 hassas ve saniyeler süren lazer ameliyat teknolojisi. Göze dokunulmadan uygulanır." },
    { icon: <Cpu size={24} />, title: "Akıllı Lens İmplantasyonu", desc: "Katarakt tedavilerinde, uzak-yakın ve ara mesafe netliği sağlayan gelişmiş trifokal lensler." },
    { icon: <ScanFace size={24} />, title: "3D Görme Analizi", desc: "Kornea yapınızı üç boyutlu çıkaran topografi cihazları ile kişiselleştirilmiş cerrahi harita." },
    { icon: <Activity size={24} />, title: "Göz Nörolojisi Altyapısı", desc: "Beyin ve görme sinirleri arasındaki iletim hızını ölçen yüksek teknoloji VEP / ERG testleri." },
  ];

  return (
    <section className="relative bg-[#050B14] py-32 w-full overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ecbb3f]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ecbb3f]/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-4 mb-6"
              >
                 <div className="w-2 h-2 rounded-full bg-[#ecbb3f] animate-pulse" />
                 <span className="text-[#ecbb3f] font-black tracking-[0.3em] uppercase text-xs">İLERİ TIP TEKNOLOJİSİ</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
              >
                Geleceğin <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">Lazer Parkuru.</span>
              </motion.h2>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <p className="text-gray-400 font-medium max-w-sm leading-relaxed mb-6">
                Yalnızca alanındaki en gelişmiş, FDA onaylı küresel markaların lazer donanımlarıyla kusursuz sonuçlar hedeflenir.
              </p>
              <Link href="/tedaviler" className="text-[#ecbb3f] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                Tedavileri İncele &rarr;
              </Link>
           </motion.div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Big Machine Feature Image */}
           <div className="lg:col-span-7 h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden group border border-white/10">
              <Image 
                src="/images/slide4.png" 
                alt="Megagöz Lazer Makinesi" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />
              
              {/* Hotspot / UI Elements overlay on machine */}
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                 <div>
                    <div className="text-[#ecbb3f] font-mono text-sm tracking-widest mb-1">CİHAZ DURUMU: AKTİF</div>
                    <div className="text-3xl font-black text-white tracking-tight">Excimer Lazer 500Hz</div>
                 </div>
                 
                 <div className="hidden sm:flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-mono text-xs hidden md:block">KALİBRASYON: %100</span>
                 </div>
              </div>
           </div>

           {/* Features Sidebar */}
           <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
             {techs.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 p-6 md:p-8 rounded-3xl flex flex-col justify-center group"
                >
                   <div className="w-12 h-12 bg-[#ecbb3f]/10 rounded-2xl flex items-center justify-center text-[#ecbb3f] mb-6 group-hover:bg-[#ecbb3f] group-hover:text-[#050B14] transition-colors">
                      {tech.icon}
                   </div>
                   <h3 className="text-white font-bold text-xl mb-3">{tech.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed font-medium">
                     {tech.desc}
                   </p>
                </motion.div>
             ))}
           </div>

        </div>

      </div>
    </section>
  );
}
