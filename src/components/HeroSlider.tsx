"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, Handshake, ChevronRight, CheckCircle2, Clock, X, ChevronDown } from "lucide-react";

// Expanded to 4 slides for vertical pagination showcase
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
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop",
    title: "AKILLI LENS TEKNOLOJİSİ",
    subtitle: "YAKIN VE UZAK NET GÖRÜŞ"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
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
                  className="absolute top-5 right-5 text-gray-400 hover:text-[#F2AC1E] transition-colors bg-gray-100 rounded-full p-2"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-xl font-black text-[#1f6388] mb-6 pr-8">Hızlı Randevu Oluştur</h3>

                <form className="space-y-4 font-sans">
                  
                  {/* Name field */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      placeholder="Adınız Soyadınız"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-[#F2AC1E] focus:bg-white focus:outline-none text-gray-800 py-3 px-4 rounded-lg transition-all text-[14px] font-medium placeholder-gray-400" 
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Telefonunuz</label>
                    <div className="flex bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#F2AC1E] focus-within:bg-white transition-all">
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
                    <div className="relative bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#F2AC1E] hover:bg-white transition-all py-3 px-4">
                      <span className="text-gray-500 font-medium text-[14px]">Merkezi Seçiniz</span>
                      <ChevronDown size={18} className="text-[#F2AC1E]" />
                    </div>
                  </div>

                  {/* Doctor Dropdown */}
                  <div>
                    <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Hekim</label>
                    <div className="relative bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#F2AC1E] hover:bg-white transition-all py-3 px-4">
                      <span className="text-gray-400 font-medium text-[14px]">Seçiniz</span> 
                      <ChevronDown size={18} className="text-[#F2AC1E]" />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Gün</label>
                      <div className="relative bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 hover:border-[#F2AC1E] hover:bg-white transition-all cursor-pointer">
                         <span className="text-gray-400 text-[14px] font-medium">Seçiniz</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] font-bold text-gray-600 mb-1.5 block">Saat</label>
                      <div className="relative bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer hover:border-[#F2AC1E] hover:bg-white transition-all">
                        <span className="text-gray-500 font-medium text-[14px]">Saat Seçiniz</span>
                        <ChevronDown size={18} className="text-[#F2AC1E]" />
                      </div>
                    </div>
                  </div>

                  {/* KVKK */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="min-w-5 w-5 h-5 border-2 border-gray-300 flex items-center justify-center mt-0.5 bg-white cursor-pointer rounded hover:border-[#F2AC1E] transition-colors">
                    </div>
                    <p className="text-[12px] leading-snug text-gray-600 font-medium">
                      <a href="#" className="font-bold underline underline-offset-2 text-[#F2AC1E]">KVKK</a> hakkında bilgilendirme metnini okudum, kabul ediyorum.
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
                  <button type="button" className="w-full bg-[#F2AC1E] text-white hover:bg-[#d99816] transition-colors font-black text-[16px] py-4 rounded-lg font-sans flex items-center justify-center mt-4 shadow-lg shadow-[#F2AC1E]/30 tracking-wide">
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
            className="w-[85px] flex flex-col shadow-[-5px_0_20px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 hover:scale-105 origin-right rounded-l-lg"
          >
            <div className="bg-[#1f6388] h-20 w-full flex flex-col items-center justify-center">
              {/* 24/7 Icon look-alike */}
              <div className="relative text-white border-2 border-dashed border-white/60 w-12 h-12 rounded-full flex items-center justify-center">
                 <span className="text-[16px] font-black leading-none mt-1">24<span className="text-[12px]">/7</span></span>
                 <span className="absolute -bottom-1 -right-1 bg-[#1f6388] px-1"><ChevronRight size={12}/></span>
              </div>
            </div>
            <div className="bg-[#F2AC1E] text-white font-black text-[13px] py-4 w-full flex items-center justify-center text-center leading-5 tracking-wide">
              TIKLA<br/>RANDEVU<br/>AL
            </div>
          </button>
        )}
      </div>

      {/* Hero Slider Area */}
      <motion.div 
        className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -50) {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
          } else if (offset.x > 50) {
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
          }
        }}
      >
        
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

        {/* Text Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl pb-24 md:pb-32">
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
            
            {/* Slide Navigation Buttons (Optional, for easy testing) */}
            <div className="flex gap-4 mt-8">
               <button className="bg-[#2c88ac] hover:bg-[#1f6388] transition p-3 rounded-full text-white shadow"><ChevronRight className="rotate-180" size={20}/></button>
               <button className="bg-[#2c88ac] hover:bg-[#1f6388] transition p-3 rounded-full text-white shadow"><ChevronRight size={20}/></button>
            </div>
          </motion.div>
        </div>

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
                  ? "text-[#2c88ac]" 
                  : "text-white hover:text-cyan-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {current === idx && (
                <div className="absolute inset-0 border-[2px] border-[#2c88ac] bg-white opacity-100 flex items-center justify-center -z-10 shadow-lg" />
              )}
              {String(idx + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Floating Appointment & Institution Boxes (Negative Margin to overlap) */}
      <div className="relative z-30 container mx-auto px-4 max-w-6xl -mt-24 mb-16">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white group">
          
          {/* Quick Appointment Box */}
          <div className="bg-[#1f6388] lg:w-3/5 p-8 md:p-10 text-white relative h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#2c88ac] rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight drop-shadow-sm">Hızlı Randevu Al</h3>
                <p className="text-cyan-200 text-sm font-medium">Uzman doktorlarımızdan hemen randevu oluşturun.</p>
              </div>
            </div>
            
            <form className="space-y-6 relative z-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#93c5d8]">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-0 text-white placeholder-white/40 text-lg py-2 transition-colors font-medium rounded-none" 
                    placeholder="Adınız Soyadınız" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#93c5d8]">Telefonunuz</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-0 text-white placeholder-white/40 text-lg py-2 transition-colors font-medium rounded-none" 
                    placeholder="0(5__) ___ __ __" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
                <label className="flex items-center gap-3 cursor-pointer group/check">
                  <div className="w-5 h-5 rounded border-2 border-white/50 flex items-center justify-center group-hover/check:border-cyan-400 transition-colors">
                     <CheckCircle2 className="w-3 h-3 text-transparent group-hover/check:text-cyan-400 transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-white/90">Ben robot değilim</span>
                </label>
                
                <button type="button" className="bg-[#e85025] hover:bg-[#c2401c] text-white font-black py-4 px-10 rounded shadow-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto tracking-wide">
                  GÖNDER
                  <ChevronRight size={18} strokeWidth={3} />
                </button>
              </div>
            </form>
          </div>

          {/* Institutions Box */}
          <div className="bg-[#2c88ac] lg:w-2/5 p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center">
            {/* Decorative background circle */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight drop-shadow-sm">Anlaşmalı Kurumlarımız</h3>
            </div>
            
            <p className="text-white/90 text-[15px] md:text-[17px] leading-relaxed mb-8 relative z-10 font-medium">
              SGK, Özel Sağlık Sigortaları ve Bankalar. Anlaşmalı olduğumuz tüm kurumların listesine buradan ulaşabilirsiniz.
            </p>
            
            <button className="relative z-10 bg-transparent border-2 border-white text-white font-black px-6 py-4 rounded hover:bg-white hover:text-[#2c88ac] transition-colors flex items-center justify-center gap-2 w-fit tracking-wide shadow-md">
              LİSTEYİ İNCELE
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
