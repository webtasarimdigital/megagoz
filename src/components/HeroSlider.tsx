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
              animate={{ width: "340px", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-[#e85025] overflow-y-auto max-h-[90vh] shadow-[-10px_0_30px_rgba(0,0,0,0.2)] rounded-l-md"
            >
              <div className="p-6 text-white w-[340px]">
                <button 
                  onClick={() => setIsPopupOpen(false)} 
                  className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
                >
                  <X size={28} />
                </button>
                
                <form className="mt-8 space-y-6 font-sans">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold uppercase tracking-wider text-white">ADINIZ SOYADINIZ</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b-2 border-white/80 focus:border-white focus:outline-none focus:ring-0 text-white placeholder-white py-1 transition-colors font-medium rounded-none pb-2 text-base" 
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold uppercase tracking-wider text-white">TELEFONUNUZ</label>
                    <div className="flex items-end border-b-2 border-white/80 focus-within:border-white py-1 pb-2">
                      <div className="flex items-center gap-1 pr-3">
                        {/* Fake TR flag */}
                        <div className="w-5 h-3.5 bg-red-600 flex items-center justify-center overflow-hidden relative">
                           <div className="text-white text-[8px] absolute">★</div>
                        </div>
                        <ChevronDown size={14} className="text-white/80" />
                      </div>
                      <input 
                        type="tel" 
                        defaultValue="05"
                        className="w-full bg-transparent focus:outline-none focus:ring-0 text-white placeholder-white transition-colors font-medium rounded-none text-base" 
                      />
                    </div>
                  </div>

                  {/* Center Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold uppercase tracking-wider text-white">MERKEZ</label>
                    <div className="relative border-b-2 border-white/80 pb-2 flex items-center justify-between cursor-pointer group">
                      <span className="text-white font-medium text-base">MERKEZİ SEÇİNİZ</span>
                      <ChevronDown size={18} className="text-white group-hover:text-white/80" />
                    </div>
                  </div>

                  {/* Doctor Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold uppercase tracking-wider text-white">HEKİM</label>
                    <div className="relative border-b-2 border-white/80 pb-2 flex items-center justify-between cursor-pointer group mt-2">
                      <span className="text-white/0 font-medium text-base">.</span> {/* empty space holder */}
                      <ChevronDown size={18} className="text-white group-hover:text-white/80" />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[13px] font-bold uppercase tracking-wider text-white">GÜN</label>
                      <div className="relative border-b-2 border-white/80 pb-2 pt-2">
                         <span className="text-white/0">.</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[13px] font-bold uppercase tracking-wider text-white">SAAT</label>
                      <div className="relative border-b-2 border-white/80 pb-2 flex items-center justify-between cursor-pointer group pt-2">
                        <span className="text-white font-medium text-base">SAAT SEÇİNİZ</span>
                        <ChevronDown size={18} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* KVKK */}
                  <div className="flex items-start gap-3 pt-4">
                    <div className="min-w-5 w-5 h-5 border-2 border-white flex items-center justify-center mt-1 bg-transparent cursor-pointer">
                    </div>
                    <p className="text-[12px] leading-tight text-white font-medium">
                      <a href="#" className="font-bold underline underline-offset-2">KVKK</a> hakkında bilgilendirme metnini okudum, kabul ediyorum.
                    </p>
                  </div>

                  {/* Recaptcha Dummy */}
                  <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] p-2 flex items-center justify-between mt-2 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 border-[2px] border-[#c1c1c1] bg-white rounded-[2px]" />
                      <span className="text-[#2b2b2b] text-[14px] font-medium font-sans">Ben robot değilim</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <span className="text-[20px] leading-none mb-1 text-blue-600">♻</span>
                       <span className="text-[8px] text-[#555]">reCAPTCHA</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/90">Lütfen "Ben robot değilim" olarak işaretleyiniz.</p>

                  {/* Submit */}
                  <button type="button" className="w-full bg-[#af6650] text-[#e3bbaf] hover:bg-[#8e4f3a] transition-colors font-bold text-[16px] py-4 rounded font-sans flex items-center justify-between px-6 mt-6">
                    GÖNDER
                    <ChevronRight size={20} className="text-[#e3bbaf]" />
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
            <div className="bg-[#e85025] text-white font-black text-[13px] py-4 w-full flex items-center justify-center text-center leading-5 tracking-wide">
              TIKLA<br/>RANDEVU<br/>AL
            </div>
          </button>
        )}
      </div>

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

        {/* Verification Vertical Numbering Pagination */}
        <div className="absolute right-6 md:right-[5%] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
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
      </div>

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
