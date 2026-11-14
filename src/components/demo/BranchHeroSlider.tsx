"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BRANCHES } from "@/data/branches";
import BranchIcon from "./BranchIcon";

const DELAY = 6000;
const MOBILE_LABEL: Record<string, string> = { goz: "Göz", "medikal-estetik": "Estetik", "sac-ekimi": "Saç Ekimi", dis: "Diş" };

/** Kurum ana sayfası hero'su: dört branş arasında otomatik kayan slider */
export default function BranchHeroSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  return (
    // Mobilde slider tam olarak "ekran − header" kadar; böylece her telefonda tek ekrana oturur.
    // Alt sekmeler, sitenin mobil sabit alt barının (65/70px + güvenli alan) üstünde durur.
    <section className="relative w-full h-[calc(100svh-74px)] sm:h-[calc(100svh-82px)] min-h-[540px] max-h-[900px] md:h-[680px] lg:h-[calc(100vh-154px)] lg:min-h-[640px] lg:max-h-[860px] overflow-hidden bg-[#0a111a]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        loop
        autoplay={{ delay: DELAY, disableOnInteraction: false }}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="w-full h-full"
      >
        {BRANCHES.map((b, i) => (
          <SwiperSlide key={b.id}>
            {() => {
              const isActive = i === active;
              return (
              <div className="relative w-full h-full">
                {/* Görsel — aktifken yavaşça yakınlaşır */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform ease-out"
                  style={{
                    backgroundImage: `url(${b.image.replace("w=1600", "w=2200")})`,
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                    transitionDuration: `${DELAY + 1500}ms`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a111a]/95 via-[#162f5d]/70 to-[#162f5d]/10" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a111a]/90 to-transparent" />

                {/* Metin */}
                <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-start pt-8 sm:pt-12 md:items-center md:pt-0 md:pb-[130px]">
                  <motion.div
                    initial={false}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.8, delay: isActive ? 0.35 : 0 }}
                    className="max-w-[720px]"
                  >
                    <div
                      className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-sm mb-4 sm:mb-6 text-[11px] sm:text-sm font-bold tracking-widest uppercase"
                      style={{ color: b.accent, borderColor: `${b.accent}66`, backgroundColor: `${b.accent}22` }}
                    >
                      <BranchIcon icon={b.icon} size={15} /> MegaGöz · {b.name}
                    </div>
                    <h2 className="text-[34px] leading-[1.05] min-[390px]:text-[38px] sm:text-6xl lg:text-7xl xl:text-[84px] font-black text-white tracking-tight mb-4 sm:mb-5 drop-shadow-xl">
                      {b.heroTitle[0]}
                      <br />
                      <span className="text-[#ecbb3f]">{b.heroTitle[1]}</span>
                    </h2>
                    <p className="text-gray-200 text-[14px] min-[390px]:text-[15px] sm:text-lg lg:text-xl font-light leading-relaxed max-w-[600px] mb-6 sm:mb-8 drop-shadow-md line-clamp-4 sm:line-clamp-none">{b.heroText}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
                        className="flex items-center justify-center gap-2.5 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[54px] px-7 rounded-lg shadow-lg shadow-[#ecbb3f]/25 transition-colors"
                      >
                        {b.shortName} Branşını Keşfet <ArrowRight size={17} />
                      </Link>
                      <a
                        href="#randevu"
                        className="hidden sm:flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/70 bg-white/5 backdrop-blur text-white font-bold text-[13px] tracking-widest uppercase h-[54px] px-7 rounded-lg transition-colors"
                      >
                        <CalendarCheck size={17} /> Randevu Al
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Sağ alt büyük numara */}
                <span className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-[220px] font-black leading-none text-white/[0.04] select-none pointer-events-none">
                  0{i + 1}
                </span>
              </div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Alt branş sekmeleri (slider kontrolü) */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-8 lg:px-12 pb-[calc(77px_+_env(safe-area-inset-bottom))] sm:pb-[calc(84px_+_env(safe-area-inset-bottom))] md:pb-6">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
            {BRANCHES.map((b, i) => {
              const on = i === active;
              return (
                <button
                  key={b.id}
                  onClick={() => swiper?.slideToLoop(i)}
                  aria-label={`${b.name} slaytı`}
                  aria-current={on}
                  className={`group relative text-left rounded-xl sm:rounded-2xl overflow-hidden px-2.5 sm:px-5 pt-3 sm:pt-4 pb-3.5 sm:pb-5 border backdrop-blur-md transition-all duration-300 ${
                    on ? "bg-white/15 border-white/25" : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3">
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${on ? "bg-[#ecbb3f] text-[#162f5d]" : "bg-white/10"}`}
                      style={on ? undefined : { color: b.accent }}
                    >
                      <BranchIcon icon={b.icon} size={16} />
                    </span>
                    <span className="min-w-0 text-center sm:text-left">
                      <span className="hidden sm:block text-[10px] font-black tracking-[0.2em] text-white/40">0{i + 1}</span>
                      <span className={`block font-black text-[11px] sm:text-[15px] leading-tight sm:truncate ${on ? "text-white" : "text-white/70"}`}>
                        <span className="sm:hidden">{MOBILE_LABEL[b.id]}</span>
                        <span className="hidden sm:inline">{b.shortName}</span>
                      </span>
                    </span>
                  </div>
                  <span className="hidden lg:block text-[12px] text-white/50 mt-2 truncate">{b.tagline}</span>
                  {/* ilerleme çizgisi */}
                  <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-white/10">
                    {on && (
                      <motion.span
                        key={`p-${active}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: DELAY / 1000, ease: "linear" }}
                        className="block h-full bg-[#ecbb3f] origin-left"
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
