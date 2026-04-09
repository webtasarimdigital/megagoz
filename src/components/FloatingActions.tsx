"use client";

import { useState } from "react";
import { MapPin, Home, Phone, X, ChevronLeft, HeadphonesIcon, CalendarClock } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function FloatingActions() {
  const [isWidgetClosed, setIsWidgetClosed] = useState(false);
  return (
    <>
      {/* DESKTOP (Web) NEW SIDE WIDGET - Hidden on Mobile */}
      <div className="hidden md:block">
        <div 
          className={`fixed right-0 top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 ease-in-out flex items-center ${
            isWidgetClosed ? "translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Main Expanded Widget */}
          <div className="w-[110px] md:w-[130px] flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.15)] rounded-l-2xl overflow-hidden group">
            
            {/* Top Dark Section */}
            <div className="bg-[#162f5d] h-[110px] relative flex flex-col items-center justify-center border-b border-white/10 relative">
               <button 
                 onClick={() => setIsWidgetClosed(true)}
                 className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1"
                 aria-label="Kapat"
               >
                 <X size={14} />
               </button>
               <div className="relative text-white mt-2">
                 <HeadphonesIcon size={42} strokeWidth={1} className="opacity-80" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
                   <span className="text-[14px] font-black italic tracking-tighter">24/7</span>
                 </div>
               </div>
            </div>

            {/* Bottom Yellow Section */}
            <Link 
              href="/iletisim"
              className="bg-[#ecbb3f] hover:bg-[#d99816] transition-colors py-5 px-3 flex flex-col items-center justify-center text-center group-hover:pb-6 ease-out duration-300"
            >
               <span className="text-white font-black text-[15px] leading-[1.1] tracking-wide uppercase drop-shadow-sm">
                 Tıkla<br/>Randevu<br/>Al
               </span>
            </Link>
          </div>
        </div>

        {/* Collapsed Tag (Appears when widget is closed) */}
        <div 
          className={`fixed right-0 top-1/2 -translate-y-1/2 z-[90] transition-all duration-500 delay-100 ${
             isWidgetClosed ? "translate-x-0" : "translate-x-full"
          }`}
        >
           <button 
             onClick={() => setIsWidgetClosed(false)}
             className="bg-[#162f5d] hover:bg-[#ecbb3f] text-white p-2 rounded-l-lg shadow-[-5px_0_15px_rgba(0,0,0,0.1)] transition-colors border border-r-0 border-white/10 flex flex-col items-center gap-2"
           >
             <ChevronLeft size={20} />
             <div style={{ writingMode: 'vertical-rl' }} className="text-[12px] font-bold tracking-widest uppercase rotate-180 mb-2">
               Randevu
             </div>
           </button>
        </div>
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
        <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#f59e0b] flex items-center justify-center text-white shadow-sm">
            <MapPin size={22} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">KONUM</span>
        </a>

        {/* ARA */}
        <a href="tel:05334814098" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#10b981] flex items-center justify-center text-white shadow-sm transform scale-110 -translate-y-2">
            <Phone size={22} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">ARA</span>
        </a>

        {/* WHATSAPP */}
        <a href="https://wa.me/905334814098" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#22c55e] flex items-center justify-center text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-[#162f5d] tracking-wide">WHATSAPP</span>
        </a>

      </div>
    </>
  );
}
