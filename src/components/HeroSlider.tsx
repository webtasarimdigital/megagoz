"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, Handshake, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop",
    title: "HEPSİ TEK\nÇATI ALTINDA",
    subtitle: "KİŞİYE ÖZEL PLANLAMA"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
    title: "GÖZ SAĞLIĞINIZ\nEMİN ELLERDE",
    subtitle: "EN YENİ TEKNOLOJİLERLE"
  }
];

export default function HeroSlider() {
  const t = useTranslations("Hero");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative w-full pt-[120px] pb-16 bg-[#F8FAFC]">
      {/* Container holding Slider and Right Track */}
      <div className="relative w-full flex h-[500px] md:h-[600px]">
        {/* Main Slider Area */}
        <div className="relative flex-grow overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[current].image})` }}
              />
              {/* Left transparent gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f5a]/90 via-[#004e8e]/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Text Content */}
          <div className="relative z-10 h-full container mx-auto px-4 max-w-7xl pb-24 md:pb-32 flex flex-col justify-center">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="text-[#FFD100] font-bold text-lg md:text-xl tracking-wide mb-2 uppercase">
                MEGAGÖZ LAZER TEKNOLOJİSİ
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-2 whitespace-pre-line tracking-tight">
                {slides[current].title}
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-wide">
                {slides[current].subtitle}
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Right Vertical Track for Pagination (Yandan Kutucuklar) */}
        <div className="hidden lg:flex w-[80px] shrink-0 bg-white border-l border-gray-100 flex-col py-10 relative z-20">
          <div className="flex flex-col gap-4 items-center h-full text-gray-400 font-bold">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-12 h-12 flex items-center justify-center transition-all ${
                  current === idx 
                    ? "border border-[#00609C] text-[#00609C] bg-white text-lg rounded-sm" 
                    : "text-gray-300 hover:text-gray-500 text-sm"
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>

          {/* Fixed Right Appt CTA */}
          <a href="#randevu" className="absolute top-[60%] right-0 translate-x-1/2 w-20 h-24 bg-[#E46B46] text-white flex flex-col items-center justify-center p-2 text-center text-[11px] font-bold shadow-lg hover:bg-[#d65f3a] transition-colors rounded-l-md z-30">
            <Calendar size={24} className="mb-1" />
            TIKLA
            <br />
            RANDEVU
            <br />
            AL
          </a>
        </div>
      </div>

      {/* Overlapping Bottom Boxes Structure */}
      <div className="container mx-auto px-4 max-w-7xl relative z-30">
        <div className="flex flex-col lg:flex-row shadow-2xl -mt-20 md:-mt-24 w-full md:w-[85%] lg:w-[75%]">
          
          {/* Blue Box - Appointment */}
          <div className="bg-[#4CA5D3] flex-1 p-6 md:p-8 text-white relative flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <Calendar size={32} className="text-white" />
                <h3 className="text-2xl font-bold">HIZLI RANDEVU AL</h3>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-white/30 pb-4 mb-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-1 block">Adınız Soyadınız</label>
                  <input type="text" className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-white/50 text-lg p-0 font-medium" placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-1 block">Telefonunuz</label>
                  <input type="tel" className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-white/50 text-lg p-0 font-medium" placeholder="0(5__) ___ __ __" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="bg-white/10 px-4 py-2 rounded flex items-center text-sm gap-2">
                   {/* Dummy Captcha */}
                   <div className="w-4 h-4 border border-white bg-white/20"></div> Ben robot değilim
                </div>
                <button type="button" className="text-white font-bold underline hover:text-[#002f5a] transition-colors">Gönder</button>
              </div>
            </form>
          </div>

          {/* Orange Box - Institutes */}
          <div className="bg-[#E46B46] flex-1 p-6 md:p-8 text-white relative">
            <div className="flex items-center gap-3 mb-4">
              <Handshake size={32} />
              <h3 className="text-2xl font-bold">Anlaşmalı Kurumlarımız</h3>
            </div>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 w-3/4">
              Anlaşmalı olduğumuz kurumların detaylı listesi için tıklayın. Sgk, Özel Sağlık Sigortaları ve Bankalar.
            </p>
            {/* Background decorative faint puzzle icon or extra visual */}
            <div className="absolute right-0 bottom-0 opacity-10 w-32 h-32 bg-white rounded-tl-full pointer-events-none"></div>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded mt-auto hover:bg-white hover:text-[#E46B46] font-bold transition-colors">
              Listeyi İncele
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
