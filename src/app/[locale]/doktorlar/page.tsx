import { useTranslations } from "next-intl";
import { User, Award, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function DoctorsPage() {
  const t = useTranslations("Navigation");

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-32 md:pt-40">
      
      {/* Header */}
      <div className="container mx-auto px-6 max-w-[1300px] mb-16 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">UZMAN KADROMUZ</span>
          <div className="h-[2px] w-12 bg-[#ecbb3f]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight mb-6">
          Deneyimli Doktorlarımız
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Göz sağlığınızı, on binlerce başarılı vakaya imza atmış uzman hekimlerimize emanet edin.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
           {/* Doctor Card */}
           <div className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 group">
              {/* Empty Image Area */}
              <div className="h-[350px] w-full bg-[#162f5d]/5 relative flex items-center justify-center">
                 <User size={64} className="text-gray-300" />
                 {/* Decorative background circle */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
              </div>
              
              {/* Doctor Details */}
              <div className="p-8 relative">
                 {/* Floating Icon */}
                 <div className="absolute right-8 -top-8 w-16 h-16 bg-[#ecbb3f] rounded-full border-4 border-white flex items-center justify-center text-[#162f5d] shadow-lg">
                    <Award size={24} />
                 </div>

                 <div className="text-sm font-bold text-[#ecbb3f] tracking-widest uppercase mb-2">Göz Hastalıkları Uzmanı</div>
                 <h3 className="text-2xl font-black text-[#162f5d] mb-4">Op. Dr. Osman Dursun</h3>
                 
                 <p className="text-gray-500 mb-6 font-medium line-clamp-3">
                   Alanında uzun yıllara dayanan cerrahi tecrübe, katarakt, akıllı mercek ve refraktif cerrahi (lazer) uygulamalarında uzmanlaşmış seçkin yaklaşım.
                 </p>
                 
                 <Link href="/iletisim" className="flex items-center gap-2 text-[#162f5d] font-bold uppercase tracking-wider text-sm hover:text-[#ecbb3f] transition-colors">
                    Randevu Al <ArrowRight size={16} />
                 </Link>
              </div>
           </div>

        </div>
      </div>

    </div>
  );
}
