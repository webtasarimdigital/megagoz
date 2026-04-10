"use client";

import { useLocale } from "next-intl";

import { useState } from "react";
import { MapPin, Home, Phone, X, ChevronLeft, HeadphonesIcon, CalendarClock } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function FloatingActions() {
  const [isWidgetClosed, setIsWidgetClosed] = useState(false);
  const locale = useLocale();
  
  const onlineOperationText = locale === "tr" ? "Online İşlem" : "Online Action";
  const clickAppointmentText = locale === "tr" ? "Tıkla Randevu Al" : "Get Appointment";

  return (
    <>
      {/* 24/7 RIGHT APPOINTMENT WIDGET (Global) */}
      <div 
        className={`fixed right-0 top-[40%] md:top-1/2 -translate-y-1/2 z-[110] transition-transform duration-500 ease-in-out flex items-center ${isWidgetClosed ? "translate-x-full" : "translate-x-0"}`}
      >
        {/* Closed Tab (Expander) */}
        <button 
          onClick={() => setIsWidgetClosed(false)}
          className={`absolute left-0 -translate-x-full w-10 md:w-12 h-14 md:h-16 bg-[#ecbb3f] text-[#162f5d] rounded-l-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#d99816] hover:text-white ${isWidgetClosed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-label="Open Appointment"
        >
          <CalendarClock size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Main active panel */}
        <Link 
          href="/iletisim" 
          className="relative w-[70px] h-[150px] md:w-[85px] md:h-[190px] flex flex-col shadow-[-5px_0_20px_rgba(0,0,0,0.2)] overflow-hidden hover:scale-[1.03] origin-right rounded-l-xl md:rounded-l-2xl z-40 bg-white group transition-transform"
        >
          <div className="bg-[#162f5d] flex-1 w-full flex flex-col items-center justify-center border-b border-white/10 relative">
            {/* Close Button */}
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsWidgetClosed(true); }}
              className="absolute top-1 left-1 md:top-1.5 md:left-1.5 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-red-500 rounded-full p-1"
            >
               <X size={12} className="md:w-[14px] md:h-[14px]" />
            </button>

            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center -mt-1 md:mt-0">
              <svg className="absolute inset-0 w-full h-full text-white/80" viewBox="0 0 100 100">
                <path d="M50 15 A35 35 0 1 1 80 80" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="10, 8" strokeLinecap="round" />
                <path d="M70 70 L80 80 L70 90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white font-black text-[14px] md:text-[16px] tracking-tighter mt-1 pr-1">24<span className="text-[9px] md:text-[11px]">/7</span></span>
            </div>
          </div>
          <div className="bg-[#ecbb3f] group-hover:bg-[#d99816] transition-colors flex-1 w-full flex items-center justify-center text-center text-[#162f5d] group-hover:text-white font-black text-[11px] md:text-[13px] leading-snug tracking-wider px-1 md:px-2">
            <div>{locale === "en" ? "CLICK TO BOOK" : "TIKLA RANDEVU AL"}</div>
          </div>
        </Link>
      </div>
      {/* DESKTOP (Web) VERSION - Hidden on Mobile */}
      <div className="fixed bottom-6 right-6 z-[100] flex-col gap-3 hidden md:flex">
        {/* Instagram Button */}
        <a 
          href="https://instagram.com/megagoz" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M12 2.162c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/905334814098" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 448 512" className="w-[30px] h-[30px]" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 222.4-99.6 222.4-222 0-59.3-23.1-115-65.4-157zM223.9 414.4c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-106.7 86.8-193.5 193.6-193.5 51.7 0 100.3 20.2 136.9 56.8 36.6 36.6 56.8 85.2 56.8 136.9-.1 106.7-86.9 193.4-193.6 193.4zM329.8 281.3c-5.8-2.9-34.3-16.9-39.6-18.9-5.3-1.9-9.2-2.9-13.2 2.9-4 5.8-15.1 18.9-18.5 22.8-3.3 3.9-6.6 4.4-12.4 1.5-5.8-2.9-24.5-9-46.7-28.9-17.2-15.4-28.8-34.5-32.1-40.4-3.3-5.8-.4-9 2.5-11.9 2.6-2.6 5.8-6.8 8.7-10.2 2.9-3.4 3.9-5.8 5.8-9.7 1.9-3.9 1-7.3-.5-10.2-1.5-2.9-13.2-31.9-18-43.7-4.7-11.5-9.5-9.9-13.2-10.1-3.3-.2-7.1-.2-11.1-.2-4 0-10.6 1.5-16.1 7.3-5.5 5.8-21.1 20.6-21.1 50.3 0 29.7 21.6 58.4 24.6 62.3 3 3.9 42.5 64.9 102.9 90.9 14.4 6.2 25.6 9.9 34.3 12.7 14.4 4.6 27.6 3.9 38 2.4 11.6-1.7 34.3-14 39.1-27.5 4.8-13.5 4.8-25.1 3.3-27.5-1.4-2.5-5.3-3.9-11.1-6.8z"/>
          </svg>
        </a>

        {/* Location Button */}
        <a 
          href="https://maps.app.goo.gl/YourGoogleMapsLink" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#4285F4] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Konum"
        >
          <MapPin fill="white" className="text-[#4285F4]" size={28} />
        </a>
      </div>

      {/* MOBILE VERSION - Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-2 flex justify-between items-center shadow-[0_-10px_30px_rgba(0,0,0,0.08)] pb-safe">
        
        {/* ANA SAYFA */}
        <Link href="/" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#3b82f6] flex items-center justify-center text-white shadow-sm">
            <Home size={22} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">ANA SAYFA</span>
        </Link>

        {/* KONUM */}
        <a href="https://share.google/zC0UTV7bTbwJn46pu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#f59e0b] flex items-center justify-center text-white shadow-sm">
            <MapPin size={22} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">KONUM</span>
        </a>

        {/* ARA */}
        <a href="tel:4440320" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#10b981] flex items-center justify-center text-white shadow-sm">
            <Phone size={22} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">ARA</span>
        </a>

        {/* WHATSAPP */}
        <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#22c55e] flex items-center justify-center text-white shadow-sm">
            <svg viewBox="0 0 448 512" className="w-[24px] h-[24px]" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 222.4-99.6 222.4-222 0-59.3-23.1-115-65.4-157zM223.9 414.4c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-106.7 86.8-193.5 193.6-193.5 51.7 0 100.3 20.2 136.9 56.8 36.6 36.6 56.8 85.2 56.8 136.9-.1 106.7-86.9 193.4-193.6 193.4zM329.8 281.3c-5.8-2.9-34.3-16.9-39.6-18.9-5.3-1.9-9.2-2.9-13.2 2.9-4 5.8-15.1 18.9-18.5 22.8-3.3 3.9-6.6 4.4-12.4 1.5-5.8-2.9-24.5-9-46.7-28.9-17.2-15.4-28.8-34.5-32.1-40.4-3.3-5.8-.4-9 2.5-11.9 2.6-2.6 5.8-6.8 8.7-10.2 2.9-3.4 3.9-5.8 5.8-9.7 1.9-3.9 1-7.3-.5-10.2-1.5-2.9-13.2-31.9-18-43.7-4.7-11.5-9.5-9.9-13.2-10.1-3.3-.2-7.1-.2-11.1-.2-4 0-10.6 1.5-16.1 7.3-5.5 5.8-21.1 20.6-21.1 50.3 0 29.7 21.6 58.4 24.6 62.3 3 3.9 42.5 64.9 102.9 90.9 14.4 6.2 25.6 9.9 34.3 12.7 14.4 4.6 27.6 3.9 38 2.4 11.6-1.7 34.3-14 39.1-27.5 4.8-13.5 4.8-25.1 3.3-27.5-1.4-2.5-5.3-3.9-11.1-6.8z"/>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">WHATSAPP</span>
        </a>

      </div>
    </>
  );
}
