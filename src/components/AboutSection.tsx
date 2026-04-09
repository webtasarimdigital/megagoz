"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
            
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              className="absolute bottom-10 -right-8 bg-[#162f5d] text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border-b-4 border-[#ecbb3f] z-20"
            >
              <span className="text-4xl font-black text-[#ecbb3f] mb-1">20+</span>
              <span className="text-sm font-medium tracking-wider uppercase text-gray-300">Yıllık Tecrübe</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
               <div className="h-[2px] w-12 bg-[#ecbb3f]" />
               <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">Hakkımızda</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-[#162f5d] tracking-tight leading-[1.1] mb-6">
              Göz Sağlığınız İçin <br />
              <span className="text-[#ecbb3f]">Dünya Standartlarında</span><br />
              Sağlık ve Bakım.
            </h2>
            
            <div className="text-base text-gray-500 mb-8 leading-relaxed font-medium space-y-4">
              <p>
                MEGAGÖZ, göz hastalıklarının teşhis ve tedavisinde uluslararası standartlarda sağlık hizmeti sunmak amacıyla kurulmuş, teknolojiyi ve tıbbı bir araya getiren modern bir göz sağlığı merkezidir. Kurulduğu günden bu yana, göz sağlığında güvenilir, kaliteli ve ulaşılabilir çözümler sunma vizyonuyla hareket eden MEGAGÖZ, İstanbul’daki merkeziyle hem yurt içinden hem de yurt dışından gelen hastalarına üstün hizmet vermektedir.
              </p>
              <p>
                Yenilikçi medikal teknolojileri, deneyimli uzman hekim kadrosu ve hasta memnuniyetine odaklı profesyonel ekibiyle MEGAGÖZ, göz sağlığı alanında çağdaş ve güvenilir bir referans merkezi haline gelmiştir. Her hasta için kişiselleştirilmiş tedavi yaklaşımlarıyla, uluslararası kalite standartlarında sağlık hizmeti sunmaktadır.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Uzman Kadro, Güvenilir Tecrübe", 
                "Yenilikçi Teknoloji, Hassas Tanı", 
                "Hasta Odaklı Yaklaşım", 
                "Modern, Konforlu ve Erişilebilir"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ecbb3f]/20 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-[#ecbb3f]" />
                  </div>
                  <span className="text-[15px] font-bold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda" className="self-start group flex items-center gap-3 bg-[#162f5d] hover:bg-[#ecbb3f] transition-all duration-300 transform hover:-translate-y-1 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] uppercase tracking-wide text-sm">
              Daha Fazla Bilgi
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
