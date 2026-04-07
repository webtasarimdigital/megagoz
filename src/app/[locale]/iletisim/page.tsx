import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Page Header Area */}
      <div className="w-full bg-[#1f313f] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ecbb3f]/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-[1300px] relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-[1300px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side - Info Cards & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col gap-8">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-[#1f313f] font-bold text-lg mb-1">{t("info.address")}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    İhtisas Sokak. No:3 <br/>Ümraniye / İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-[#1f313f] font-bold text-lg mb-1">{t("info.phone")}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    0555 555 55 55<br/>0216 555 55 55
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-[#1f313f] font-bold text-lg mb-1">{t("info.email")}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    info@megagoz.com
                  </p>
                </div>
              </div>

            </div>

            {/* Map iframe */}
            <div className="w-full h-[300px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 h-full">
              <h3 className="text-2xl font-black text-[#1f313f] mb-8">{t("title")}</h3>
              
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1f313f]">{t("form.name")}</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder={t("form.name")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1f313f]">{t("form.phone")}</label>
                    <input 
                      type="tel" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="+90 555 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1f313f]">{t("form.email")}</label>
                    <input 
                      type="email" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="mail@ornek.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#1f313f]">{t("form.subject")}</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder={t("form.subject")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#1f313f]">{t("form.message")}</label>
                  <textarea 
                    className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors resize-none"
                    placeholder={t("form.message")}
                  />
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full md:w-auto px-10 h-12 bg-[#ecbb3f] hover:bg-[#d99816] transition-colors text-white font-bold rounded-lg tracking-widest uppercase shadow-lg shadow-[#ecbb3f]/30">
                    {t("form.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
