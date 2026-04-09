"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side - Images Group */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[550px] w-full"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-4/5 h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/megagoz.webp" 
                alt="Megagöz Tıp Merkezi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#004e8e]/10 pointer-events-none" />
            </div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-[55%] h-[320px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-white z-10"
            >
              <Image 
                src="/images/49-home-2-2.webp" 
                alt="Megagöz Tedavi"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Decorative Gold Accent */}
            <div className="absolute -left-6 top-20 w-32 h-32 bg-[#ecbb3f]/20 rounded-full blur-3xl -z-10" />
            
            {/* Floating Call Center Badge */}
            <motion.a 
              href="tel:4440320"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              className="absolute bottom-10 -right-8 bg-[#162f5d] text-white p-5 md:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border-b-4 border-[#ecbb3f] z-20 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-[#ecbb3f]/20 flex items-center justify-center">
                  <Phone size={20} className="text-[#ecbb3f]" />
                </div>
                <span className="text-2xl font-black text-[#ecbb3f]">444 0 320</span>
              </div>
              <span className="text-[11px] md:text-sm font-bold tracking-wider uppercase text-gray-300">Hemen İletişime Geç</span>
            </motion.a>
          </motion.div>

          {/* Right Side - Editorial Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            
            <h2 className="text-5xl lg:text-7xl font-black text-[#162f5d] tracking-tight leading-[1] mb-8">
              Bakış Açınızı <br />
              <span className="text-[#ecbb3f]">Mükemmelleştirin.</span>
            </h2>

            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-8">
              Standart şablonların ötesinde; her göze adeta bir sanat eseri gibi yaklaşan, yenilikçi teknoloji ve ustalıkla harmanlanmış profesyonel kliniğimize hoş geldiniz.
            </p>

            <blockquote className="border-l-4 border-[#ecbb3f] pl-6 my-8">
               <p className="text-[#162f5d] font-bold italic text-[22px] md:text-[24px] leading-relaxed mb-4">
                 "Göz sağlığında hata payı yoktur. Teknolojinin ulaştığı en zirve noktayı, on yılların getirdiği tecrübemizle birleştiriyoruz."
               </p>
               <footer className="text-gray-400 font-bold text-sm md:text-base tracking-widest uppercase">— Başhekimlik & Yönetim Kurulu</footer>
            </blockquote>

            <Link href="/hakkimizda" className="self-start mt-4 group flex items-center gap-4 hover:opacity-80 transition-opacity">
               <div className="w-14 h-14 bg-[#162f5d] rounded-full flex items-center justify-center text-[#ecbb3f] group-hover:scale-110 transition-transform shadow-lg">
                 <ArrowRight size={24} />
               </div>
               <span className="text-[#162f5d] font-black tracking-widest text-[15px]">MEGAGÖZ HAKKINDA</span>
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
