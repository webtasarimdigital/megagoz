import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function GalleryPage() {
  const locale = useLocale();
  const instagramLinks = [
    "DMYA8NmCRXK",
    "DNDjKmKNtoj",
    "DMnSH9bNlpt",
    "DWBLFCXDhKo",
    "DWQg-xAirwN",
    "DWf9yStjbza"
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        <Image 
          src="/images/slide4.png" 
          alt="MegaGöz Galeri" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              {locale === 'en' ? 'MEGAGÖZ VIEW' : 'MEGAGÖZ BAKIŞI'}
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            {locale === 'en' ? 'MegaGöz Gallery' : 'MegaGöz Galeri'}
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            {locale === 'en' ? 'Take a closer look at the up-to-date shots reflected from our Instagram account, our technological equipment, and our comfortable clinic environment that will make you feel special.' : 'Instagram hesabımızdan yansıyan güncel kareler, teknolojik donanımlarımız ve sizi özel hissettirecek konforlu klinik ortamımıza yakından bakın.'}
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping the hero section) */}
      <div className="container mx-auto px-4 md:px-6 max-w-[1300px] relative z-20 -mt-16 md:-mt-24 pb-24">
        {/* Instagram Iframes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {instagramLinks.map((code, idx) => (
            <div key={idx} className="bg-white rounded-[30px] shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex justify-center w-full">
              <iframe 
                src={`https://www.instagram.com/p/${code}/embed`}
                allowTransparency={true}
                frameBorder={0}
                scrolling="no"
                className="w-full h-[450px] sm:h-[550px] md:h-[600px] max-w-full"
                style={{ background: 'white', border: 'none' }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
