"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop",
    overlay: "from-blue-900/80 to-slate-900/40"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
    overlay: "from-slate-900/80 to-cyan-900/40"
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
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].overlay}`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-vibrant animate-pulse"/>
                <span className="text-sm font-semibold text-white tracking-wide uppercase">Megagöz Center</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
                {t("title")}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-lg leading-relaxed">
                {t("subtitle")}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors shadow-xl shadow-blue-900/20"
                >
                  {t("cta")}
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  );
}
