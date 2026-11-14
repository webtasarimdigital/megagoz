"use client";

// Branş sayfası hero'su — mevcut ana sayfadaki göz hero'sunun (HeroSlider)
// birebir görsel karşılığı; slaytlar ve form branşa göre değişir.
// Dört branş da bu bileşeni kullanır: aynı site, farklı hizmet.

import { useState } from "react";
import { useLocale } from "next-intl";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getBranches, type Branch } from "@/data/branches";
import { dt } from "./demoText";

export default function BranchSliderHero({ branch: b }: { branch: Branch }) {
  const locale = useLocale();
  const T = dt(locale);
  const [kvkk, setKvkk] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "Hızlı Randevu (Branş Sayfası Üstü)",
          // Personel için branş adı her zaman Türkçe
          branch: getBranches("tr").find((x) => x.id === b.id)!.name,
          language: locale,
          page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error((await res.json()).message || T.genericError);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setKvkk(false);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || T.genericError);
    }
  };

  const sliderId = `branch-${b.id}`;

  return (
    <div className="relative w-full">
      {/* ── Slider (orijinal ölçüler) ── */}
      <div className="relative w-full h-[55vh] min-h-[450px] md:h-[75vh] md:min-h-[600px] lg:h-[80vh] lg:min-h-[650px] xl:h-[85vh] xl:min-h-[700px] flex items-center justify-center overflow-hidden !font-sans group">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          loop={b.slides.length > 1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{ nextEl: `.${sliderId}-next`, prevEl: `.${sliderId}-prev` }}
          pagination={{
            clickable: true,
            el: `.${sliderId}-pagination`,
            renderBullet: (index, className) =>
              '<div class="' +
              className +
              ' !opacity-100 !bg-transparent !m-0 !w-12 !h-12 !flex !items-center !justify-center !rounded-xl text-[18px] font-black text-white/50 transition-all duration-300 hover:text-white [&.swiper-pagination-bullet-active]:!bg-[#ecbb3f] [&.swiper-pagination-bullet-active]:!text-[#162f5d] [&.swiper-pagination-bullet-active]:!shadow-[0_10px_25px_rgba(236,187,63,0.3)] !cursor-pointer">' +
              String(index + 1).padStart(2, "0") +
              "</div>",
          }}
          className="w-full h-full"
        >
          {b.slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#162f5d]/70 via-[#162f5d]/30 to-transparent pointer-events-none" />

              <div className="relative z-10 w-full h-full flex flex-col justify-center container mx-auto px-4 max-w-6xl pb-24 md:pb-32 pointer-events-none">
                <div className="max-w-2xl">
                  <div
                    className="inline-block px-4 py-1.5 rounded-full border font-bold text-sm tracking-widest mb-6 uppercase backdrop-blur-sm shadow-lg pointer-events-auto"
                    style={{ color: b.accent, borderColor: `${b.accent}4d`, backgroundColor: `${b.accent}33` }}
                  >
                    MEGAGÖZ · {b.shortName.toLocaleUpperCase(locale === "en" ? "en-US" : "tr-TR")}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-xl pointer-events-auto cursor-text">
                    {s.title}
                  </h1>
                  <h2 className="text-xl md:text-3xl font-light text-gray-200 tracking-wide drop-shadow-md pointer-events-auto cursor-text">{s.sub}</h2>

                  <div className="flex gap-4 mt-8 pointer-events-auto">
                    <button aria-label="Önceki" className={`${sliderId}-prev bg-[#162f5d] hover:bg-[#204383] transition p-3 rounded-full text-white shadow relative z-20 cursor-pointer`}>
                      <ChevronRight className="rotate-180" size={20} />
                    </button>
                    <button aria-label="Sonraki" className={`${sliderId}-next bg-[#162f5d] hover:bg-[#204383] transition p-3 rounded-full text-white shadow relative z-20 cursor-pointer`}>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Sol dikey numaralandırma */}
          <div className={`${sliderId}-pagination absolute !left-4 md:!left-8 lg:!left-[5%] xl:!left-[8%] !top-1/2 !-translate-y-1/2 !bottom-auto !w-auto z-20 hidden md:flex flex-col gap-5`} />
        </Swiper>
      </div>

      {/* ── Hızlı randevu formu (alt kenara biner) ── */}
      <div className="relative z-40 w-full px-4 md:px-8 max-w-[1250px] mx-auto -mt-[60px] md:-mt-[90px] mb-4">
        <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] p-8 md:p-10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl md:text-[22px] font-black tracking-tight text-[#162f5d] flex gap-1.5 items-center uppercase">
              {T.quickAppointment} <span className="text-[#ecbb3f]">{T.formWord}</span>
            </h3>
            <span className="text-[12px] font-bold tracking-widest uppercase text-gray-400">{b.name}</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col font-sans gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder={T.fullNameShort}
                className="w-full h-[54px] border border-gray-200 rounded-lg px-4 text-[15px] font-medium text-[#162f5d] placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all bg-white"
              />
              <div className="flex items-center h-[54px] border border-gray-200 rounded-lg focus-within:border-gray-400 transition-all bg-white overflow-hidden text-[15px] font-medium text-[#162f5d]">
                <div className="pl-4 pr-2 flex items-center justify-center border-r border-gray-200 bg-white h-full">
                  <img src="/tr.svg" alt="TR" className="w-[18px] h-[13px] object-cover rounded-[2px]" />
                  <ChevronDown className="text-gray-400 ml-1.5 w-4 h-4" />
                  <span className="text-gray-600 text-[14px] ml-2">+90</span>
                </div>
                <input type="tel" name="phone" required placeholder={T.phoneShort} className="w-full h-full px-4 text-[15px] font-medium text-[#162f5d] placeholder-gray-500 outline-none bg-transparent" />
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input type="checkbox" checked={kvkk} onChange={(e) => setKvkk(e.target.checked)} className="w-4 h-4 accent-[#ecbb3f]" />
                  <span className="text-sm font-semibold text-[#162f5d]">
                    <a href="/kvkk" target="_blank" className="underline text-[#ecbb3f] hover:text-[#d6a529] font-bold">{T.kvkkLink}</a> {T.kvkkRest}
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!kvkk || status === "sending"}
                  className="w-full sm:w-auto px-16 h-[50px] bg-[#ecbb3f] hover:bg-[#d6a529] disabled:opacity-50 disabled:cursor-not-allowed text-[#162f5d] font-bold tracking-widest rounded-lg shadow-lg shadow-[#ecbb3f]/20 transition-all text-sm uppercase shrink-0"
                >
                  {status === "sending" ? T.sending : T.send}
                </button>
              </div>
              {status === "success" && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-semibold">{T.sentTo(b.name)}</div>
              )}
              {status === "error" && <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 rounded-xl px-5 py-4 text-sm font-semibold">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
