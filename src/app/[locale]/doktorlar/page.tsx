import { useTranslations } from "next-intl";
import { User, Award, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DoctorsPage() {
  const t = useTranslations("Navigation");

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center pt-24 md:pt-32">
        <Image 
          src="/images/slide4.png" 
          alt="Doctors Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-32 md:pb-40">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              UZMAN KADROMUZ
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            Deneyimli Doktorlarımız
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            Göz sağlığınızı, on binlerce başarılı vakaya imza atmış uzman hekimlerimize emanet edin.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32 pb-20">
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

                 <div className="text-sm font-bold text-[#ecbb3f] tracking-widest uppercase mb-2">Başhekim / Göz Hastalıkları Uzmanı</div>
                 <h3 className="text-2xl font-black text-[#162f5d] mb-4">Op. Dr. Osman Dursun</h3>
                 
                 <div className="text-gray-500 mb-6 font-medium leading-relaxed space-y-4">
                    <p>
                      Mikro cerrahi, katarakt, akıllı mercek (trifokal ve edof) implantasyonları ile kornea ve refraktif lazer cerrahilerinde yirmi yılı aşkın yoğun klinik ve operasyon tecrübesine sahiptir. On binlerce başarılı vaka geçmişiyle, uluslararası standartlarda referans gösterilen sonuçlara imza atmıştır.
                    </p>
                    <p>
                      Kariyeri boyunca "her hastaya özel tedavi" ilkesini benimseyerek, standart operasyon algısının dışına çıkmış; göz sağlığında hasta konforunu ve sıfır hata hedefini merkezine yerleştirmiştir. Özellikle zorlu ve kompleks ön segment cerrahilerinde, şaşılık ve glokom operasyonlarında en güncel FDA onaylı medikal protokolleri kliniğimize entegre etmektedir.
                    </p>
                    <p>
                      Modern göz tıbbının teknolojik gelişimini yakından takip eden vizyonuyla, Megagöz tıp kadrosuna başhekim olarak liderlik etmektedir.
                    </p>
                 </div>
                 
                 <Link href="/iletisim" className="inline-flex items-center gap-2 bg-[#162f5d] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#ecbb3f] transition-all hover:scale-105 shadow-md">
                    Randevu Al <ArrowRight size={16} />
                 </Link>
              </div>
           </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
