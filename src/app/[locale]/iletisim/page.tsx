import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area (Megaeste overlap style) */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center pt-32 md:pt-40">
        <Image 
          src="/images/slide2.png" 
          alt="Contact Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#162f5d]/85 z-0" /> {/* Dark Overlay */}
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl pb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              BİZE ULAŞIN
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            {t("title") !== "Contact Us" && t("title") !== "İletişime Geçin" ? "İletişim" : t("title")}
          </h1>
          
          <p className="text-gray-300 md:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Uzman hekimlerimizden randevu almak veya aklınıza takılan soruları sormak için aşağıdaki iletişim kanallarından bize rahatlıkla ulaşabilirsiniz.
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping the hero section) */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side - Form Container */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-t-3xl rounded-b-3xl md:rounded-t-[40px] md:rounded-b-[40px] shadow-[0_20px_60px_rgba(31,49,63,0.1)] p-8 md:p-12 border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-black text-[#162f5d] mb-8">Bize Yazın</h3>
              
              <form className="flex flex-col gap-6 w-full flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.name")}</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder={t("form.name")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.phone")}</label>
                    <input 
                      type="tel" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="+90 555 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.email")}</label>
                    <input 
                      type="email" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="mail@ornek.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.subject")}</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder={t("form.subject")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-bold text-[#162f5d]">{t("form.message")}</label>
                  <textarea 
                    className="w-full h-full min-h-[140px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors resize-none"
                    placeholder={t("form.message")}
                  />
                </div>

                <div className="pt-2">
                  <button type="button" className="w-full md:w-auto px-10 h-12 bg-[#ecbb3f] hover:bg-[#d99816] transition-colors text-white font-bold rounded-lg tracking-widest uppercase shadow-lg shadow-[#ecbb3f]/30">
                    {t("form.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Info Cards & Map */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            
            {/* Info Cards Box */}
            <div className="bg-white rounded-3xl md:rounded-[40px] shadow-[0_20px_60px_rgba(31,49,63,0.1)] p-8 md:p-10 border border-gray-100 flex flex-col gap-8">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-[14px] flex items-center justify-center shrink-0">
                  <Mail strokeWidth={2} size={22} />
                </div>
                <div>
                  <h3 className="text-[#162f5d] font-bold text-[15px] mb-1">{t("info.email")}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                    Soru ve görüşleriniz için bize yazın.
                  </p>
                  <p className="text-[#ecbb3f] font-bold text-sm">info@megagoz.com</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-[14px] flex items-center justify-center shrink-0">
                  <Phone strokeWidth={2} size={22} />
                </div>
                <div>
                  <h3 className="text-[#162f5d] font-bold text-[15px] mb-1">{t("info.phone")}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                    Çağrı merkezimizden destek alın.
                  </p>
                  <p className="text-[#ecbb3f] font-bold text-sm">444 0 320</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-[14px] flex items-center justify-center shrink-0">
                  <MapPin strokeWidth={2} size={22} />
                </div>
                <div>
                  <h3 className="text-[#162f5d] font-bold text-[15px] mb-1">{t("info.address")}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                    İhtisas Sokak. No:3 Ümraniye / İstanbul
                  </p>
                </div>
              </div>

            </div>

            {/* Map iframe wrapped nicely */}
            <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.518177579998!2d29.11181817586523!3d41.01391517134812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8ac5661d4ad%3A0xe7f9202f5a6b0933!2zw5ZtcmFuaXllLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>

          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
