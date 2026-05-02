import { useLocale } from "next-intl";
import { Construction } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DoctorsPage() {
  const locale = useLocale();

  const title = locale === "en" ? "Our Doctors" : "Doktorlarımız";
  const subtitle = locale === "en" ? "OUR EXPERT TEAM" : "UZMAN KADROMUZ";
  const mainMessage = locale === "en"
    ? "This Page Is Under Maintenance"
    : "Bu Sayfa Bakım Aşamasındadır";
  const description = locale === "en"
    ? "We are currently updating this page to provide you with the best experience. Please check back soon."
    : "Size en iyi deneyimi sunabilmek için bu sayfayı güncelliyoruz. Lütfen daha sonra tekrar ziyaret edin.";

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        <Image 
          src="/images/slide4.webp" 
          alt="Doctors Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              {subtitle}
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            {title}
          </h1>
        </div>
      </div>

      {/* Under Maintenance Content */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[800px] relative z-20 -mt-24 md:-mt-32 pb-20">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 p-10 md:p-16 flex flex-col items-center text-center">
          
          {/* Animated Icon */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#ecbb3f]/20 to-[#ecbb3f]/5 flex items-center justify-center mb-8 animate-pulse">
            <Construction className="w-12 h-12 md:w-14 md:h-14 text-[#ecbb3f]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] mb-4">
            {mainMessage}
          </h2>
          
          <div className="w-16 h-1 bg-[#ecbb3f] rounded-full mb-6" />
          
          <p className="text-[#8FA4B5] text-sm md:text-base font-medium leading-relaxed max-w-md">
            {description}
          </p>

          {/* Decorative dots */}
          <div className="flex items-center gap-2 mt-10">
            <span className="w-2 h-2 rounded-full bg-[#ecbb3f] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-[#ecbb3f] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-[#ecbb3f] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
