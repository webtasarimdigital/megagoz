import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const instagramLinks = [
    "DMYA8NmCRXK",
    "DNDjKmKNtoj",
    "DMnSH9bNlpt",
    "DWBLFCXDhKo",
    "DWQg-xAirwN",
    "DWf9yStjbza"
  ];

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-32 md:pt-40">
        
        {/* Header */}
        <div className="container mx-auto px-6 max-w-[1300px] mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">MEGAGÖZ BAKIŞI</span>
            <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight mb-6">
            MegaGöz Galeri
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Instagram hesabımızdan yansıyan güncel kareler, teknolojik donanımlarımız ve sizi özel hissettirecek konforlu klinik ortamımıza yakından bakın.
          </p>
        </div>

        {/* Instagram Iframes Grid */}
        <div className="container mx-auto px-4 md:px-6 max-w-[1300px]">
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

      </div>
      <Footer />
    </main>
  );
}
