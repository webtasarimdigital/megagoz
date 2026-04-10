import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TREATMENTS_DATA } from "@/data/treatments";

export default function TreatmentsPage() {
  const locale = useLocale() as "tr" | "en";
  const title = locale === "tr" ? "Tüm Tedavilerimiz" : "All Treatments";
  const subtitle = locale === "tr" ? "Megagöz Tıp Merkezi olarak sunduğumuz güncel ve üstün teknolojili tedavi yöntemlerini inceleyin." : "Explore the modern and highly advanced treatment methods we offer at Megagöz Medical Center.";

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        <Image 
          src="/images/slide2.png" 
          alt="Treatments Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-32 md:pb-40">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              MEGAGÖZ
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            {title}
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] relative z-20 -mt-24 md:-mt-32 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {TREATMENTS_DATA.map((category) => (
            <Link 
              href={{ pathname: '/tedaviler/[category]', params: { category: category.id } }}
              key={category.id} 
              className="group relative w-full h-[400px] md:h-[480px] flex flex-col justify-end overflow-hidden rounded-[24px] bg-[#162f5d] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,187,63,0.15)] hover:-translate-y-2"
            >
              
              {/* Category Background Image */}
              {category.image && (
                <Image 
                  src={category.image} 
                  alt={category.title[locale]} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              )}
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/70 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-[#ecbb3f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                 <div className="mb-2 text-[#ecbb3f] font-bold text-[10px] tracking-[0.2em] uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   Megagöz Tedavi
                 </div>
                 
                 <h3 className="text-2xl font-black text-white tracking-tight mb-0 group-hover:mb-3 transition-all duration-300 group-hover:text-[#ecbb3f]">
                   {category.title[locale]}
                 </h3>
                 
                 <p className="text-gray-400 text-sm font-medium uppercase tracking-widest h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mb-5 transition-all duration-500 delay-100">
                    {category.items.length} {locale === 'tr' ? 'İşlem' : 'Procedures'}
                 </p>
                 
                 <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] group-hover:text-[#0a111a]">
                    <ArrowRight size={18} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 delay-200" />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
