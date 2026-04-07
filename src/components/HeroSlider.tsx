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
        <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] p-8 md:p-10 border border-white/50 backdrop-blur-sm">
           
           {/* Header */}
           <div className="mb-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-[20px] md:text-[26px] font-black tracking-tight text-[#1f313f] flex items-center gap-2">
                 HIZLI RANDEVU <span className="text-[#ecbb3f] bg-[#ecbb3f]/10 px-3 py-1 rounded-md">FORMU</span>
              </h3>
              <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide">Sizi en kısa sürede arayalım, randevunuzu birlikte planlayalım.</p>
           </div>

           {/* Premium Minimalist Form Grid */}
           <form className="flex flex-col md:flex-row gap-5 font-sans w-full">
              
              {/* Name Input */}
              <div className="relative flex-1 group">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ecbb3f] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                 </div>
                 <input 
                   type="text" 
                   placeholder="Adınız Soyadınız" 
                   className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-[15px] font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#ecbb3f] focus:ring-4 focus:ring-[#ecbb3f]/10 transition-all" 
                 />
              </div>
              
              {/* Phone Input with Flag */}
              <div className="relative flex-1 flex items-center bg-gray-50/50 border border-gray-200 rounded-xl focus-within:bg-white focus-within:border-[#ecbb3f] focus-within:ring-4 focus-within:ring-[#ecbb3f]/10 transition-all group">
                 <div className="pl-4 pr-3 flex items-center justify-center border-r border-gray-200/80 cursor-pointer hover:bg-gray-100 transition h-full rounded-l-xl">
                    <img src="/tr.svg" alt="TR" className="w-[22px] h-[16px] object-cover rounded-[2px] shadow-sm" />
                    <ChevronDown size={14} className="text-gray-400 ml-1.5 group-focus-within:text-[#ecbb3f]" />
                 </div>
                 <input 
                   type="tel" 
                   placeholder="Telefon Numaranız" 
                   className="w-full py-4 px-4 text-[15px] font-bold text-gray-800 placeholder-gray-400 outline-none bg-transparent" 
                 />
                 <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ecbb3f] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                 </div>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full md:w-[280px] bg-[#ecbb3f] hover:bg-[#d6a529] text-white font-black tracking-widest py-4 px-8 rounded-xl shadow-[0_10px_25px_-5px_rgba(236,187,63,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(236,187,63,0.6)] transform hover:-translate-y-0.5 transition-all text-[15px] uppercase flex items-center justify-center gap-2"
              >
                 Gönder
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                 </svg>
              </button>
              
           </form>
        </div>
      </div>
    </div>
  );
}
