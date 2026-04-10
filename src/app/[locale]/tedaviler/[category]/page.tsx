import { useLocale } from "next-intl";
import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { TREATMENTS_DATA } from "@/data/treatments";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const resolvedParams = use(params);
  const locale = useLocale() as "tr" | "en";
  const categoryData = TREATMENTS_DATA.find((c) => c.slug[locale] === resolvedParams.category || c.id === resolvedParams.category);

  if (!categoryData) {
    notFound();
  }

  const categoryName = categoryData.title[locale];
  const items = categoryData.items;

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Category Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 pt-32 shrink-0">
        <Image 
          src={categoryData.image || "/images/slide3.png"} 
          alt={categoryName} 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#162f5d] via-[#162f5d]/60 to-transparent z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
          <Link href="/tedaviler" className="inline-flex items-center gap-2 text-[#ecbb3f] hover:text-white font-bold text-xs tracking-wider uppercase mb-8 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
               <ArrowLeft size={16} />
            </div>
            {locale === 'tr' ? 'TÜM TEDAVİLER' : 'ALL TREATMENTS'}
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            {categoryName}
          </h1>
          
          <div className="border-l-4 border-[#ecbb3f] pl-6 md:pl-8">
            <p className="max-w-3xl text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              {locale === 'tr' 
                 ? `${categoryName} kategorisinde sunduğumuz ${items.length} farklı modern alt tedavi yöntemini aşağıdan inceleyebilirsiniz.`
                 : `Explore ${items.length} different modern sub-treatment methods we offer under the ${categoryName} category below.`}
            </p>
          </div>
        </div>
      </div>

      {/* Subcategory Animated Cards */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-20 -mt-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link 
              href={{ pathname: '/tedaviler/[category]/[slug]', params: { category: categoryData.slug[locale], slug: item.slug[locale] } }}
              key={item.slug[locale]}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative"
            >
              
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title[locale]} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162f5d] via-[#162f5d]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Float tag */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {categoryName}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 bg-white relative z-10 transition-transform duration-500">
                <h3 className="text-2xl font-black text-[#162f5d] mb-4 leading-snug group-hover:text-[#ecbb3f] transition-colors">
                  {item.title[locale]}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {item.excerpt[locale]}
                </p>

                <div className="mt-auto flex items-center justify-between">
                   <span className="text-[#ecbb3f] font-bold text-sm tracking-widest uppercase">
                     {locale === 'tr' ? 'Detaylı Bilgi' : 'Discover More'}
                   </span>
                   <div className="w-10 h-10 rounded-full bg-[#f4f7f9] text-[#162f5d] flex items-center justify-center group-hover:bg-[#ecbb3f] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                     <ArrowRight size={18} />
                   </div>
                </div>
              </div>

              {/* Decorative accent string on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ecbb3f] group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
