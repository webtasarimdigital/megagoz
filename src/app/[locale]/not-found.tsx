import { Link } from "@/i18n/navigation";
import { Home, Phone } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 mt-[100px] shrink-0">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center w-full">
          
          {/* Creative 404 Graphic */}
          <div className="relative mb-8 flex justify-center tracking-tighter w-full">
            <span className="text-[120px] md:text-[180px] font-black text-[#162f5d] leading-none z-10 drop-shadow-md">
              4
            </span>
            <span className="text-[120px] md:text-[180px] font-black text-[#ecbb3f] leading-none -ml-8 md:-ml-12 z-20 drop-shadow-xl relative transform -translate-y-4">
              0
            </span>
            <span className="text-[120px] md:text-[180px] font-black text-[#162f5d] leading-none -ml-8 md:-ml-12 z-10 drop-shadow-md">
              4
            </span>
            
            {/* Pill Badge */}
            <div className="absolute -bottom-4 md:-bottom-2 left-1/2 -translate-x-1/2 bg-[#162f5d] text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase py-2 px-6 md:px-8 rounded-full shadow-lg whitespace-nowrap z-30 ring-4 ring-[#F8FAFC]">
              {locale === "en" ? "PAGE NOT FOUND" : "SAYFA BULUNAMADI"}
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-8 mb-10 space-y-4">
            <h1 className="text-3xl md:text-4xl font-black text-[#162f5d] tracking-tight">
              {locale === "en" ? "It Looks Like You're Lost" : "Görünen O Ki, Yanlış Yere Geldiniz"}
            </h1>
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-lg mx-auto">
              {locale === "en" 
                ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. You can return to our homepage for a clear and healthy vision." 
                : "Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak ulaşılamıyor olabilir. Sağlıklı ve net bir görüşe kavuşmak için ana sayfamıza dönebilirsiniz."}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-[#ecbb3f] hover:bg-[#d6a52f] text-white font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(236,187,63,0.3)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              {locale === "en" ? "BACK TO HOMEPAGE" : "ANA SAYFAYA DÖN"}
            </Link>
            
            <Link 
              href="/iletisim" 
              className="flex items-center gap-2 bg-[#162f5d] hover:bg-[#15232d] text-white font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(31,49,63,0.2)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Phone size={18} />
              {locale === "en" ? "CONTACT US" : "BİZİMLE İLETİŞİME GEÇİN"}
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
