import { ShieldCheck, Building2, Landmark, HeartHandshake } from "lucide-react";

export default function PartnerInstitutionsPage() {
  const partners = [
    { name: "TZH Vakfı", type: "Vakıf", icon: <Building2 className="text-[#ecbb3f] mb-3" size={32} /> },
    { name: "Yapı Kredi Emekli Sandığı", type: "Emekli Sandığı", icon: <Landmark className="text-[#ecbb3f] mb-3" size={32} /> },
    { name: "Vakıfbank Emekli Sandığı", type: "Emekli Sandığı", icon: <Landmark className="text-[#ecbb3f] mb-3" size={32} /> },
    { name: "SGK (Sosyal Güvenlik Kurumu)", type: "Kamu", icon: <ShieldCheck className="text-[#ecbb3f] mb-3" size={32} /> },
    { name: "Özel Sağlık Sigortaları", type: "ÖSS", icon: <HeartHandshake className="text-[#ecbb3f] mb-3" size={32} /> },
    { name: "Tamamlayıcı Sağlık", type: "TSS", icon: <HeartHandshake className="text-[#ecbb3f] mb-3" size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-32 md:pt-40">
      
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#ecbb3f]/10 transition-colors">
                {partner.icon}
              </div>
              <h3 className="text-lg font-bold text-[#162f5d] mb-1 leading-snug">
                {partner.name}
              </h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full mt-3">
                {partner.type}
              </span>
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
  );
}
