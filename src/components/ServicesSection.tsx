"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  { id: 0, title: "Katarakt", image: "/images/megagoz-katarakt-tedavisi.webp", desc: "Zamanla matlaşan göz merceğinin temizlenmesi ve şeffaf lens ile değiştirilmesi." },
  { id: 1, title: "Lazer Tedavisi", image: "/images/slide1.png", desc: "Miyop, hipermetrop ve astigmatizmanın saniyeler içinde kalıcı olarak düzeltilmesi." },
  { id: 2, title: "Kontak Lens", image: "/images/megagoz-kontak-lens.webp", desc: "Kişiye özel lens uyumu ve göz sağlığına en uygun lens seçimi." },
  { id: 3, title: "Göz Nörolojisi", image: "/images/megagoz-goz-norolojisi.webp", desc: "Görme sinirleri ve beyinle ilgili oftalmolojik görme kayıplarının tedavisi." },
  { id: 4, title: "Kornea Hastalıkları", image: "/images/slide2.png", desc: "Korneanın yapısını bozan keratokonus ve benzeri hastalıkların tanı ve tedavisi." },
  { id: 5, title: "Glokom Tedavisi", image: "/images/megagoz-tedavi-oncesi.webp", desc: "Göz tansiyonuna bağlı sinir hasarlarının erken teşhisi ve tedavisi." },
  { id: 6, title: "Şaşılık Tedavisi", image: "/images/slide3.png", desc: "Gözlerin paralel bakışının bozulduğu durumların cerrahi veya medikal tedavisi." },
  { id: 7, title: "Üveit Tedavisi", image: "/images/megagoz-tedavi-sonrası.webp", desc: "Gözün içindeki damar tabakasının iltihaplanmasının ileri tetkiklerle tedavisi." },
  { id: 8, title: "Göz Kapağı Estetiği", image: "/images/slide4.png", desc: "Düşük veya torbalanmış göz kapaklarının blefaroplasti ile estetik düzeltimesi." },
  { id: 9, title: "Çocuk Göz Sağlığı", image: "/images/megagoz-cocuk-goz-tedavisi.webp", desc: "Çocukluk çağında gelişen görme kusurları ve tembelliklerin erken tedavisi." },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#0a111a] py-32 w-full overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f313f]/40 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
             <div className="h-[2px] w-12 bg-[#ecbb3f]" />
             <span className="text-[#ecbb3f] font-black tracking-widest uppercase text-sm">HİZMETLERİMİZ</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Sizin İçin Fark <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Yaratan Tedaviler</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Left Side - Interactive List */}
          <div className="lg:col-span-5 relative z-20">
            <div className="space-y-1 py-4 border-l-2 border-white/10 pl-6 md:pl-10 relative">
              
              {/* Highlight Bar Indicator */}
              <motion.div 
                className="absolute left-[-2px] w-[2px] bg-[#ecbb3f] z-10"
                initial={false}
                animate={{
                  top: `${(activeIndex * 10) + (activeIndex * 2)}%`, // Approximation for tracking
                  height: "10%"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  top: `calc(${activeIndex * (100 / SERVICES.length)}%)`,
                  height: `calc(100% / ${SERVICES.length})`
                }}
              />

              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div 
                    key={service.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="group cursor-pointer py-5 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ 
                        x: isActive ? 20 : 0, 
                        scale: isActive ? 1.05 : 1 
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="origin-left"
                    >
                      <h3 className={`text-3xl md:text-4xl lg:text-4xl font-black leading-[1.1] transition-colors duration-500 uppercase tracking-tighter ${isActive ? "text-[#ecbb3f]" : "text-gray-600 hover:text-gray-400"}`}>
                        {service.title}
                      </h3>
                    </motion.div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: "12px" }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed pr-8 ml-5">
                            {service.desc}
                          </p>
                          <div className="ml-5 mt-4">
                            <span className="inline-flex items-center gap-2 text-[#ecbb3f] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
                              Detaylı Bilgi <ArrowRight size={14} />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Dynamic Image Reveal (Sticky) */}
          <div className="lg:col-span-7 relative hidden lg:block">
            <div className="sticky top-24 w-full aspect-[4/5] max-h-[calc(100vh-120px)] rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={SERVICES[activeIndex].image}
                    alt={SERVICES[activeIndex].title}
                    fill
                    className="object-cover transition-transform duration-[10s] ease-linear hover:scale-110"
                    priority
                  />
                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a]/80 via-transparent to-transparent" />
                  
                  {/* Image Title Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-10 left-10"
                  >
                     <div className="bg-[#1f313f]/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 shadow-2xl inline-flex flex-col">
                        <span className="text-[#ecbb3f] text-xs font-bold tracking-[0.2em] uppercase mb-1">Megagöz Tedavi</span>
                        <span className="text-white text-2xl font-black">{SERVICES[activeIndex].title}</span>
                     </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
            </div>
          </div>
          
          {/* Mobile Image Fallback - Appears below items on small screens inherently via layout mapping but actually let's just make it a global hidden or render it differently. The user already has it in the modal expanding! */}
        </div>
      </div>
    </section>
  );
}
