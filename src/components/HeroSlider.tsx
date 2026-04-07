"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, Handshake, ChevronRight, CheckCircle2, Clock, X, ChevronDown } from "lucide-react";

// Futuristic, medical AI-generated slides based on user visual references
const slides = [
  {
    id: 1,
    image: "/images/slide1.png",
    title: "HEPSİ TEK ÇATI ALTINDA",
    subtitle: "KİŞİYE ÖZEL PLANLAMA"
  },
  {
    id: 2,
    image: "/images/slide2.png",
    title: "GÖZ SAĞLIĞINIZ EMİN ELLERDE",
    subtitle: "EN YENİ TEKNOLOJİLERLE"
  },
  {
    id: 3,
    image: "/images/slide3.png",
    title: "AKILLI LENS TEKNOLOJİSİ",
    subtitle: "YAKIN VE UZAK NET GÖRÜŞ"
  },
  {
    id: 4,
    image: "/images/slide4.png",
    title: "LAZER GÖZ AMELİYATI",
    subtitle: "GÖZLÜKLERİNİZDEN KURTULUN"
  }
];

export default function HeroSlider() {
  const t = useTranslations("Hero");
  const [current, setCurrent] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#F8FAFC]">
      {/* Sticky Appointment Widget */}
      {/* Sticky Appointment Widget */}
      <div className="fixed right-0 top-1/2 z-[100]">
        
        {/* Flyout Panel */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "420px", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 -translate-y-1/2 bg-white overflow-y-auto overflow-x-hidden max-h-[90vh] shadow-[-15px_0_50px_rgba(0,0,0,0.2)] rounded-l-2xl z-50 origin-right"
            >
              <div className="p-8 w-[420px] relative">
                <button 
                  onClick={() => setIsPopupOpen(false)} 
                  className="absolute top-5 right-5 text-gray-400 hover:text-[#ecbb3f] transition-all bg-gray-50 hover:bg-white border border-transparent hover:border-[#ecbb3f]/30 shadow-sm rounded-full p-2"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-xl font-black text-[#1f313f] mb-2 pr-8">Hızlı Randevu Oluştur</h3>
                <p className="text-gray-500 text-[13px] font-medium mb-6">Bilgilerinizi bırakın, hemen arayalım.</p>

                <form className="space-y-4 font-sans">
                  
                  {/* Name field */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#ecbb3f] focus:bg-white focus:ring-4 focus:ring-[#ecbb3f]/10 focus:outline-none text-gray-800 py-3.5 px-4 rounded-xl transition-all text-[14px] font-medium placeholder-gray-400" 
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Telefonunuz</label>
                    <div className="flex bg-gray-50/50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#ecbb3f] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#ecbb3f]/10 transition-all">
                      <div className="flex items-center gap-2 pl-4 pr-3 border-r border-gray-200/80">
                         <img src="/tr.svg" alt="TR" className="w-[18px] h-[13px] object-cover rounded-[2px] shadow-sm flex-shrink-0" />
                         <ChevronDown size={14} className="text-gray-400" />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Telefon Numaranız"
                        className="w-full bg-transparent focus:outline-none text-gray-800 py-3.5 px-3 text-[14px] font-medium placeholder-gray-400" 
                      />
                    </div>
                  </div>

                  {/* Center Dropdown */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Şube</label>
                    <div className="relative bg-gray-50/50 border border-gray-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#ecbb3f] hover:bg-white transition-all py-3.5 px-4">
                      <span className="text-gray-500 font-medium text-[14px]">Şube Seçiniz</span>
                      <ChevronDown size={16} className="text-[#ecbb3f]" />
                    </div>
                  </div>

                  {/* Doctor Dropdown */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Hekim (İsteğe Bağlı)</label>
                    <div className="relative bg-gray-50/50 border border-gray-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#ecbb3f] hover:bg-white transition-all py-3.5 px-4">
                      <span className="text-gray-400 font-medium text-[14px]">Hekim Seçiniz</span> 
                      <ChevronDown size={16} className="text-[#ecbb3f]" />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Gün</label>
                      <div className="relative bg-gray-50/50 border border-gray-200 rounded-xl py-3.5 px-4 hover:border-[#ecbb3f] hover:bg-white transition-all cursor-pointer">
                         <span className="text-gray-400 text-[14px] font-medium">Seçiniz</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Saat</label>
                      <div className="relative bg-gray-50/50 border border-gray-200 rounded-xl py-3.5 px-4 flex items-center justify-between cursor-pointer hover:border-[#ecbb3f] hover:bg-white transition-all">
                        <span className="text-gray-500 font-medium text-[14px]">Seçiniz</span>
                        <ChevronDown size={16} className="text-[#ecbb3f]" />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                     <button type="button" className="w-full bg-[#ecbb3f] text-white hover:bg-[#d99816] transition-all transform hover:-translate-y-0.5 font-black text-[15px] py-4 rounded-xl font-sans flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(236,187,63,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(236,187,63,0.6)] tracking-widest uppercase">
                       Randevu Oluştur
                     </button>
                  </div>

                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Side Button */}
        <AnimatePresence>
          {!isPopupOpen && (
            <motion.button 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsPopupOpen(true)}
              className="absolute right-0 -translate-y-1/2 w-[85px] h-[190px] flex flex-col shadow-[-5px_0_20px_rgba(0,0,0,0.15)] overflow-hidden hover:scale-105 origin-right rounded-l-xl z-40"
            >
              <div className="bg-[#1f313f] flex-1 w-full flex flex-col items-center justify-center border-b border-white/10">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full text-white/80" viewBox="0 0 100 100">
                    <path d="M50 15 A35 35 0 1 1 80 80" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="10, 8" strokeLinecap="round" />
                    <path d="M70 70 L80 80 L70 90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white font-black text-[16px] tracking-tighter mt-1 pr-1">24<span className="text-[11px]">/7</span></span>
                </div>
              </div>
              <div className="bg-[#ecbb3f] flex-1 w-full flex items-center justify-center text-center text-white font-black text-[13px] leading-tight tracking-wider">
                <div>TIKLA<br/>RANDEVU<br/>AL</div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Slider Area */}
      <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -100) {
                setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
              } else if (offset.x > 100) {
                setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
              }
            }}
          >
            {/* Background Images */}
            <div 
              className="absolute inset-0 bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00305a]/90 via-[#004e8e]/70 to-transparent pointer-events-none" />

            {/* Text Content */}
            <div className="relative z-10 w-full container mx-auto px-4 max-w-6xl pb-24 md:pb-32 pointer-events-none">
              <div className="max-w-2xl">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/30 text-[#06b6d4] font-bold text-sm tracking-widest mb-6 uppercase backdrop-blur-sm shadow-lg pointer-events-auto">
                  Megagöz Lazer Teknolojisi
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-xl pointer-events-auto cursor-text">
                  {slides[current].title}
                </h1>
                <h2 className="text-xl md:text-3xl font-light text-gray-200 tracking-wide drop-shadow-md pointer-events-auto cursor-text">
                  {slides[current].subtitle}
                </h2>
                
                {/* Slide Navigation Buttons */}
                <div className="flex gap-4 mt-8 pointer-events-auto">
                   <button 
                     onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); }}
                     className="bg-[#1f313f] hover:bg-[#1f313f] transition p-3 rounded-full text-white shadow"
                   >
                     <ChevronRight className="rotate-180" size={20}/>
                   </button>
                   <button 
                     onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); }}
                     className="bg-[#1f313f] hover:bg-[#1f313f] transition p-3 rounded-full text-white shadow"
                   >
                     <ChevronRight size={20}/>
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Vertical Numbering Pagination (Left Side) */}
        <div className="absolute left-4 md:left-8 lg:left-[5%] xl:left-[8%] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering drag end
                setCurrent(idx);
              }}
              className={`transition-all duration-300 relative text-[18px] font-black items-center justify-center flex w-12 h-12 rounded ${
                current === idx 
                  ? "text-[#ecbb3f]" 
                  : "text-white hover:text-cyan-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {current === idx && (
                <div className="absolute inset-0 border-[2px] border-[#ecbb3f] bg-white opacity-100 flex items-center justify-center -z-10 shadow-lg" />
              )}
              {String(idx + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div> {/* CLOSES the overflow-hidden slider track */}

      {/* Spacer for Form Overlap */}
      <div className="h-[90px] md:h-[130px] w-full pointer-events-none" />

      {/* Horizontal Quick Appointment Form (Overlaps Bottom Edge) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-full px-4 max-w-[1100px]">
        <div className="bg-white rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] p-6 md:p-8">
           {/* Header */}
           <div className="mb-6 relative">
              <h3 className="text-xl md:text-[22px] font-black tracking-tight text-[#1f313f] flex gap-1.5 items-center">
                 HIZLI RANDEVU <span className="text-[#ecbb3f]">FORMU</span>
              </h3>
              <div className="h-[2.5px] w-[60px] bg-[#ecbb3f] mt-1.5 rounded-full" />
           </div>

           {/* Classic Grid Form */}
           <form className="flex flex-col font-sans">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-end">
                 
                 {/* Name Input */}
                 <div className="relative">
                    <label className="text-[13px] font-bold text-gray-600 mb-2 block">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      placeholder="Adınız Soyadınız" 
                      className="w-full h-[52px] border border-gray-200 rounded-[6px] px-4 text-[14px] font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#ecbb3f] focus:ring-1 focus:ring-[#ecbb3f]/30 transition-all bg-gray-50/30" 
                    />
                 </div>
                 
                 {/* Phone Input with Flag */}
                 <div className="relative">
                    <label className="text-[13px] font-bold text-gray-600 mb-2 block">Telefon Numaranız</label>
                    <div className="flex items-center h-[52px] border border-gray-200 rounded-[6px] focus-within:border-[#ecbb3f] focus-within:ring-1 focus-within:ring-[#ecbb3f]/30 transition-all bg-gray-50/30">
                       <div className="pl-3 pr-2 flex items-center justify-center border-r border-gray-200 cursor-pointer hover:bg-gray-100 transition h-full rounded-l-[6px]">
                          <img src="/tr.svg" alt="TR" className="w-[18px] h-[13px] object-cover rounded-[2px]" />
                          <ChevronDown size={14} className="text-gray-500 ml-1.5" />
                       </div>
                       <input 
                         type="tel" 
                         placeholder="Örn: 0555 555 55 55" 
                         className="w-full h-full px-3 text-[14px] font-medium text-gray-800 placeholder-gray-400 outline-none bg-transparent" 
                       />
                    </div>
                 </div>

                 {/* Submit Button */}
                 <div>
                    <button 
                      type="button" 
                      className="w-full h-[52px] bg-[#ecbb3f] hover:bg-[#d6a529] text-white font-black tracking-widest rounded-[6px] shadow-md shadow-[#ecbb3f]/20 transition-all text-[15px] uppercase"
                    >
                       GÖnder
                    </button>
                 </div>

              </div>
           </form>
        </div>
      </div>
    </div>
  );
}
