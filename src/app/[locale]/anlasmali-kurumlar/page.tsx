import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnerInstitutionsPage() {
  const partners = [
    { name: "ANA SİGORTA A.Ş.", image: "/images/ana-sigorta.png" },
    { name: "ANADOLU SİGORTA", image: "/images/Anadolu_Sigorta.png" },
    { name: "ANKARA SİGORTA A.Ş.", image: "/images/ankara-sigorta.png" },
    { name: "AREX SİGORTA A.Ş.", image: "/images/arax-sigorta.png" },
    { name: "AXA SİGORTA", image: "/images/sigorta_openb_rgb.png" },
    { name: "DOĞA SİGORTA A.Ş.", image: "/images/doga_logo_svg.svg" },
    { name: "ETHICA SİGORTA A.Ş.", image: "/images/ethicasigorta.svg" },
    { name: "MAGDEBURGER SİGORTA A.Ş.", image: "/images/magdeburger-sigorta.png" },
    { name: "NEOVA SİGORTA A.Ş.", image: "/images/neova-sigorta.png" },
    { name: "NİPPON SİGORTA A.Ş.", image: "/images/turk-nippon-sigorta.svg" },
    { name: "PRIVE SİGORTA A.Ş.", image: "/images/prive-sigorta.png" },
    { name: "QUICK SİGORTA A.Ş.", image: "/images/quick-sigorta-blue-logo.svg" },
    { name: "REFERANS SİGORTA A.Ş.", image: "/images/referans-sigorta.svg" },
    { name: "SOMPO SİGORTA A.Ş.", image: "/images/sompo-sigorta.png" },
    { name: "TÜRK TELEKOM VAKFI", image: "/images/turktelekomvakfi.png" },
    { name: "TÜRKİYE SİGORTA", image: "/images/turkiye-sigorta.png" },
    { name: "UNICO SİGORTA A.Ş.", image: "/images/unico-sigorta-logo.png" },
    { name: "ZURICH YAŞAM VE EMEKLİLİK A.Ş.", image: "/images/zurich-logo.png" },
  ];

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-[130px] md:pt-[170px]">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-[1200px] mb-16 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">KURUMSAL</span>
          <div className="h-[2px] w-12 bg-[#ecbb3f]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight mb-6">
          Anlaşmalı Kurumlar
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Sağlığınızı güvence altına alan seçkin özel sigortalar, banka sandıkları ve resmi kurumlar ile olan kurumsal işbirliklerimiz.
        </p>
      </div>

      {/* Grid of Partners */}
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-4 md:p-6 flex items-center shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Logo Box */}
              <div className="w-24 md:w-32 h-14 md:h-16 shrink-0 border-r border-gray-100 pr-5 md:pr-6 mr-5 md:mr-6 flex items-center justify-center relative">
                <Image 
                  src={partner.image} 
                  alt={partner.name} 
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform" 
                />
              </div>
              {/* Name Block */}
              <h3 className="text-[13px] md:text-[15px] font-bold text-[#162f5d] leading-snug tracking-wide uppercase">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Placeholder Note */}
        <div className="mt-16 bg-[#162f5d] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[#ecbb3f]/10" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-white mb-4">Kurumunuz Listede Yok Mu?</h3>
              <p className="text-gray-300 font-medium mb-8">
                Anlaşmalı kurum ağımız sürekli olarak güncellenmektedir. Kurumunuzun güncel anlaşma durumu hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
              </p>
              <a href="tel:4440320" className="inline-block bg-[#ecbb3f] hover:bg-white text-[#162f5d] font-bold px-8 py-4 rounded-xl shadow-lg transition-colors">
                Detaylı Bilgi İçin: 444 0 320
              </a>
           </div>
        </div>
      </div>

    </div>
      <Footer />
    </main>
  );
}
