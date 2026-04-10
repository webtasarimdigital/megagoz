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
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center pt-20">
        <Image 
          src="/images/slide2.png" 
          alt="Treatments Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl pb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              MEGAGÖZ
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            {title}
          </h1>
          
          <p className="text-gray-300 md:text-lg font-medium leading-relaxed max-w-2xl px-4">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-20 -mt-16 md:-mt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TREATMENTS_DATA.map((category) => (
            <Link 
              href={{ pathname: '/tedaviler/[category]', params: { category: category.id } }}
              key={category.id} 
              className="group relative bg-[#162f5d] rounded-[24px] overflow-hidden shadow-xl border border-white/5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center text-center p-10 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              {/* Category Background Image (Uses dedicated category image) */}
              {category.image && (
                <>
                  <Image 
                    src={category.image} 
                    alt={category.title[locale]} 
                    fill 
                    className="object-cover opacity-30 group-hover:opacity-50 transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162f5d]/95 via-[#162f5d]/70 to-[#162f5d]/80 z-0" />
                </>
              )}
              
              <div className="relative z-10 flex flex-col items-center justify-center">
                 <h2 className="text-2xl font-black text-white mb-2 group-hover:text-[#ecbb3f] transition-colors">{category.title[locale]}</h2>
                 <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">{category.items.length} {locale === 'tr' ? 'İşlem' : 'Procedures'}</p>
                 
                 <div className="mt-6 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#ecbb3f] group-hover:text-[#162f5d] group-hover:border-[#ecbb3f] transition-all duration-300">
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
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
