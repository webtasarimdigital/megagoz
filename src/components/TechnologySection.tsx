"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Cpu, Zap, Activity, ScanFace } from "lucide-react";
import { useLocale } from "next-intl";

export default function TechnologySection() {
  const locale = useLocale();

  const leftTechs = [
    { icon: <Zap size={28} />, title: locale === 'en' ? 'Femtosecond Laser' : 'FemtoSaniye Lazer', desc: locale === 'en' ? 'Bladeless, 100% precise and fast laser surgery technology. Applied without touching the eye.' : 'Bıçaksız, %100 hassas ve saniyeler süren lazer ameliyat teknolojisi. Göze dokunulmadan uygulanır.' },
    { icon: <Cpu size={28} />, title: locale === 'en' ? 'Smart Lens Implantation' : 'Akıllı Lens İmplantasyonu', desc: locale === 'en' ? 'Advanced trifocal lenses providing clear vision at far, intermediate, and near distances in cataract treatments.' : 'Katarakt tedavilerinde, uzak-yakın ve ara mesafe netliği sağlayan gelişmiş trifokal lensler.' },
  ];

  const rightTechs = [
    { icon: <ScanFace size={28} />, title: locale === 'en' ? '3D Vision Analysis' : '3D Görme Analizi', desc: locale === 'en' ? 'Personalized surgical map with topography devices that extract the 3D structure of your cornea.' : 'Kornea yapınızı üç boyutlu çıkaran topografi cihazları ile kişiselleştirilmiş cerrahi harita.' },
    { icon: <Activity size={28} />, title: locale === 'en' ? 'Eye Neurology Infrastructure' : 'Göz Nörolojisi Altyapısı', desc: locale === 'en' ? 'High-tech VEP / ERG tests measuring the transmission speed between the brain and optic nerves.' : 'Beyin ve görme sinirleri arasındaki iletim hızını ölçen yüksek teknoloji VEP / ERG testleri.' },
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-28 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-4 mb-4"
           >
              <div className="h-[2px] w-12 bg-[#ecbb3f]" />
              <span className="text-[#ecbb3f] font-black tracking-[0.2em] uppercase text-sm">
                {locale === 'en' ? 'ADVANCED MEDICAL TECHNOLOGY' : 'İLERİ TIP TEKNOLOJİSİ'}
              </span>
              <div className="h-[2px] w-12 bg-[#ecbb3f]" />
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162f5d] tracking-tight leading-[1.1]"
           >
             {locale === 'en' ? 'The Laser Park' : 'Geleceğin'} <br className="hidden md:block" />
             <span className="text-[#ecbb3f]">{locale === 'en' ? 'of the Future.' : 'Lazer Parkuru.'}</span>
           </motion.h2>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 mt-6 max-w-2xl text-[15px] lg:text-base leading-relaxed"
           >
             {locale === 'en' 
               ? 'Flawless results are targeted exclusively with the laser equipment of the most advanced, FDA-approved global brands in the field.' 
               : 'Yalnızca alanındaki en gelişmiş, FDA onaylı küresel markaların lazer donanımlarıyla kusursuz sonuçlar hedeflenir.'}
           </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 items-center">
           
           {/* Left Column (2 items) */}
           <div className="flex flex-col gap-8 lg:gap-16">
             {leftTechs.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col lg:items-end lg:text-right gap-4 group"
                >
                   <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-[#ecbb3f] group-hover:bg-[#162f5d] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                      {tech.icon}
                   </div>
                   <div>
                     <h3 className="text-[#162f5d] font-bold text-[22px] mb-2">{tech.title}</h3>
                     <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm ml-auto">
                       {tech.desc}
                     </p>
                   </div>
                </motion.div>
             ))}
           </div>

           {/* Center Column: Image */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="relative h-[400px] lg:h-[550px] w-full rounded-full overflow-hidden shadow-2xl border-8 border-white group"
           >
              <Image 
                src="/images/slide4.png" 
                alt="Megagöz Lazer Makinesi" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#162f5d]/10 group-hover:bg-transparent transition-colors duration-500" />
           </motion.div>

           {/* Right Column (2 items) */}
           <div className="flex flex-col gap-8 lg:gap-16">
             {rightTechs.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col lg:items-start lg:text-left gap-4 group"
                >
                   <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-[#ecbb3f] group-hover:bg-[#162f5d] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                      {tech.icon}
                   </div>
                   <div>
                     <h3 className="text-[#162f5d] font-bold text-[22px] mb-2">{tech.title}</h3>
                     <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm mr-auto">
                       {tech.desc}
                     </p>
                   </div>
                </motion.div>
             ))}
           </div>

        </div>
      </div>
    </section>
  );
}
