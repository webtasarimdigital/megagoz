"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, Handshake, ChevronRight, CheckCircle2 } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
    title: "HEPSİ TEK ÇATI ALTINDA",
    subtitle: "KİŞİYE ÖZEL PLANLAMA"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop",
    title: "GÖZ SAĞLIĞINIZ EMİN ELLERDE",
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

  return (
    <div className="relative w-full bg-[#F8FAFC]">
      {/* Hero Slider Area */}
      <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Images */}
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00305a]/90 via-[#004e8e]/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Text Content completely responsive */}
        <div className="relative z-10 container mx-auto px-4 max-w-7xl pb-24 md:pb-32">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/30 text-[#06b6d4] font-bold text-sm tracking-widest mb-6 uppercase backdrop-blur-sm shadow-lg">
              Megagöz Lazer Teknolojisi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-xl">
              {slides[current].title}
            </h1>
            <h2 className="text-xl md:text-3xl font-light text-gray-200 tracking-wide drop-shadow-md">
              {slides[current].subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Floating Slide Indicator (bottom-left) */}
        <div className="absolute bottom-40 left-4 md:left-12 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 h-1.5 rounded-full ${
                current === idx ? "w-12 bg-[#06b6d4]" : "w-6 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Appointment & Institution Boxes (Negative Margin to overlap) */}
      <div className="relative z-30 container mx-auto px-4 max-w-6xl -mt-24 mb-16">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white group">
          
          {/* Quick Appointment Box */}
          <div className="bg-[#00609C] lg:w-3/5 p-8 md:p-10 text-white relative h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Hızlı Randevu Al</h3>
            </div>
            
            <form className="space-y-6 relative z-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-cyan-200">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-0 text-white placeholder-white/40 text-lg py-2 transition-colors font-medium rounded-none" 
                    placeholder="Adınız Soyadınız" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-cyan-200">Telefonunuz</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-0 text-white placeholder-white/40 text-lg py-2 transition-colors font-medium rounded-none" 
                    placeholder="0(5__) ___ __ __" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <label className="flex items-center gap-3 cursor-pointer group/check">
                  <div className="w-5 h-5 rounded border-2 border-white/50 flex items-center justify-center group-hover/check:border-cyan-400 transition-colors">
                     {/* Checkmark icon for dummy captcha logic */}
                     <CheckCircle2 className="w-3 h-3 text-transparent group-hover/check:text-cyan-400 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-white/90">Ben robot değilim</span>
                </label>
                
                <button type="button" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                  Gönder
                  <ChevronRight size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Institutions Box */}
          <div className="bg-[#E46B46] lg:w-2/5 p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center">
            {/* Decorative background circle */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Anlaşmalı Kurumlarımız</h3>
            </div>
            
            <p className="text-white/90 text-sm md:text-lg leading-relaxed mb-8 relative z-10 font-medium">
              SGK, Özel Sağlık Sigortaları ve Bankalar. Anlaşmalı olduğumuz kurumların detaylı listesine ulaşmak için tıklayın.
            </p>
            
            <button className="relative z-10 bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#E46B46] transition-colors flex items-center justify-center gap-2 w-fit">
              Listeyi İncele
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
