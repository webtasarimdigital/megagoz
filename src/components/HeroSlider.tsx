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
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex">
        {/* Flyout Panel */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "420px", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-white overflow-y-auto overflow-x-hidden max-h-[90vh] shadow-[-10px_0_40px_rgba(0,0,0,0.15)] rounded-l-2xl z-50"
            >
              <div className="p-8 w-[420px] relative">
                <button 
                  onClick={() => setIsPopupOpen(false)} 
                  className="absolute top-5 right-5 text-gray-400 hover:text-[#ecbb3f] transition-colors bg-gray-100 rounded-full p-2"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-xl font-black text-[#1f313f] mb-6 pr-8">Hızlı Randevu Oluştur</h3>

                <form className="space-y-4 font-sans">
                  
                  {/* Name field */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      placeholder="Adınız Soyadınız"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-[#ecbb3f] focus:bg-white focus:outline-none text-gray-800 py-3 px-4 rounded-lg transition-all text-[14px] font-medium placeholder-gray-400" 
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Telefonunuz</label>
                    <div className="flex bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#ecbb3f] focus-within:bg-white transition-all">
                      <div className="flex items-center gap-2 px-3 border-r border-gray-200 bg-gray-50">
                        <div className="w-5 h-3.5 bg-red-600 flex items-center justify-center overflow-hidden relative rounded-sm">
                           <div className="text-white text-[8px] absolute">★</div>
                        </div>
                        <ChevronDown size={14} className="text-gray-500" />
                      </div>
                      <input 
                        type="tel" 
                        defaultValue="05"
                        className="w-full bg-transparent focus:outline-none text-gray-800 py-3 px-3 text-[14px] font-medium" 
                      />
                    </div>
                  </div>

                  {/* Center Dropdown */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Merkez</label>
                    <div className="relative bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#ecbb3f] hover:bg-white transition-all py-3 px-4">
                      <span className="text-gray-500 font-medium text-[14px]">Merkezi Seçiniz</span>
                      <ChevronDown size={18} className="text-[#ecbb3f]" />
                    </div>
                  </div>

                  {/* Doctor Dropdown */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Hekim</label>
                    <div className="relative bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#ecbb3f] hover:bg-white transition-all py-3 px-4">
                      <span className="text-gray-400 font-medium text-[14px]">Seçiniz</span> 
                      <ChevronDown size={18} className="text-[#ecbb3f]" />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Gün</label>
                      <div className="relative bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 hover:border-[#ecbb3f] hover:bg-white transition-all cursor-pointer">
                         <span className="text-gray-400 text-[14px] font-medium">Seçiniz</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Saat</label>
                      <div className="relative bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer hover:border-[#ecbb3f] hover:bg-white transition-all">
                        <span className="text-gray-500 font-medium text-[14px]">Saat Seçiniz</span>
                        <ChevronDown size={18} className="text-[#ecbb3f]" />
                      </div>
                    </div>
                  </div>

                  {/* KVKK */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="min-w-5 w-5 h-5 border-2 border-gray-300 flex items-center justify-center mt-0.5 bg-white cursor-pointer rounded hover:border-[#ecbb3f] transition-colors">
                    </div>
                    <p className="text-[12px] leading-snug text-gray-600 font-medium">
                      <a href="#" className="font-bold underline underline-offset-2 text-[#ecbb3f]">KVKK</a> hakkında bilgilendirme metnini okudum, kabul ediyorum.
                    </p>
                  </div>

                  {/* Recaptcha Dummy */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-4 flex items-center justify-between mt-1 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 border-[2px] border-gray-300 bg-white rounded-sm" />
                      <span className="text-gray-700 text-[14px] font-medium font-sans">Ben robot değilim</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <span className="text-[20px] leading-none mb-1 text-green-600">♻</span>
                       <span className="text-[9px] text-gray-500 font-bold tracking-wider">reCAPTCHA</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="button" className="w-full bg-[#ecbb3f] text-white hover:bg-[#d99816] transition-colors font-black text-[16px] py-4 rounded-lg font-sans flex items-center justify-center mt-4 shadow-lg shadow-[#ecbb3f]/30 tracking-wide">
                    RANDEVU OLUŞTUR
                  </button>

                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Side Button */}
        {!isPopupOpen && (
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="w-[85px] h-[190px] flex flex-col shadow-[-5px_0_20px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-300 hover:scale-105 origin-right rounded-l-md"
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
            <div className="bg-[#ecbb3f] flex-1 w-full flex items-center justify-center text-center text-white font-black text-[13px] leading-tight tracking-wide">
              <div>TIKLA<br/>RANDEVU<br/>AL</div>
            </div>
          </button>
        )}
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
        <div className="bg-white rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] p-6 md:p-8 md:pb-6">
           {/* Header */}
           <div className="mb-6 relative">
              <h3 className="text-xl md:text-[22px] font-black tracking-tight text-[#1f313f] flex gap-1.5 items-center">
                 HIZLI RANDEVU <span className="text-[#ecbb3f]">FORMU</span>
              </h3>
              <div className="h-[2.5px] w-[60px] bg-[#ecbb3f] mt-1.5 rounded-full" />
           </div>

           {/* Form Grid */}
           <form className="flex flex-col gap-6 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                 {/* Name Input */}
                 <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Adınız Soyadınız" 
                      className="w-full border border-gray-200 rounded-[6px] py-3.5 px-4 text-[13.5px] font-bold text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#ecbb3f] focus:ring-1 focus:ring-[#ecbb3f]/30 transition-all bg-white" 
                    />
                 </div>
                 
                 {/* Phone Input with Flag */}
                 <div className="relative flex items-center border border-gray-200 rounded-[6px] focus-within:border-[#ecbb3f] focus-within:ring-1 focus-within:ring-[#ecbb3f]/30 transition-all bg-white">
                    <div className="pl-3 pr-2 flex items-center justify-center border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition h-full rounded-l-[6px]">
                       <img src="/tr.svg" alt="TR" className="w-[18px] h-[13px] object-cover rounded-[2px]" />
                       <ChevronDown size={14} className="text-gray-500 ml-1" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Telefon" 
                      className="w-full py-3.5 px-3 text-[13.5px] font-bold text-gray-800 placeholder-gray-500 outline-none bg-transparent" 
                    />
                 </div>

                 {/* ReCaptcha dummy */}
                 <div className="border border-gray-200 rounded-[6px] bg-[#fafafa] py-2 px-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                       <div className="w-[24px] h-[24px] border-[2px] border-gray-300 rounded-[3px] bg-white cursor-pointer hover:border-gray-400 transition-colors" />
                       <span className="text-[13px] text-gray-600 font-medium">Ben robot değilim</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <svg className="w-8 h-8 text-blue-500 mb-0.5 opacity-90" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                       </svg>
                       <span className="text-[8px] text-gray-400 font-bold tracking-widest mt-[-2px]">reCAPTCHA</span>
                    </div>
                 </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-1">
                 <label className="flex items-center gap-2.5 cursor-pointer group mb-4 sm:mb-0">
                    <div className="w-[14px] h-[14px] border border-gray-300 bg-gray-50 rounded-[2px] group-hover:border-[#ecbb3f] transition-all flex items-center justify-center"></div>
                    <span className="text-[13px] text-gray-500 font-medium whitespace-nowrap">
                       <a href="#" className="text-[#ecbb3f] font-bold hover:underline">KVKK</a> metnini okudum, kabul ediyorum.
                    </span>
                 </label>
                 
                 <button 
                   type="button" 
                   className="w-full sm:w-auto bg-[#ecbb3f] hover:bg-[#d6a529] text-white font-bold tracking-wider py-3.5 px-16 rounded-[4px] shadow-lg shadow-[#ecbb3f]/30 transition-all text-[15px]"
                 >
                    Gönder
                 </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
}
