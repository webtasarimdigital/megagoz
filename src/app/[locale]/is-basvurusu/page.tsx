import { useTranslations } from "next-intl";
import { Briefcase, Building, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function JobApplicationPage() {
  const t = useTranslations("Navigation"); // using Navigation namespace as fallback if no specific one exists

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-32 md:pt-48">
        <Image 
          src="/images/megagoz-goz-norolojisi.webp" 
          alt="İş Başvurusu" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-32 md:pb-40">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              KARİYER
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            İş Başvurusu
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            Ailemize katılın, geleceğin göz sağlığı standartlarını birlikte yükseltelim.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side - Form Container */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-t-3xl rounded-b-3xl md:rounded-t-[40px] md:rounded-b-[40px] shadow-[0_20px_60px_rgba(31,49,63,0.1)] p-8 md:p-12 border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-black text-[#162f5d] mb-8">Kariyer Başvuru Formu</h3>
              
              <form className="flex flex-col gap-6 w-full flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">E-Posta Adresi</label>
                    <input 
                      type="email" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="E-Posta"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">Telefon Numarası</label>
                    <input 
                      type="tel" 
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="0(5XX) XXX XX XX"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">Başvurulan Pozisyon</label>
                    <select className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors bg-white">
                      <option value="">Lütfen pozisyon seçin</option>
                      <option value="hekim">Uzman Hekim</option>
                      <option value="hemsire">Hemşire</option>
                      <option value="hasta_danismani">Hasta Danışmanı</option>
                      <option value="idari_personel">İdari Personel</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-sm font-bold text-[#162f5d]">Özgeçmişiniz (CV)</label>
                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-[#ecbb3f] transition-colors cursor-pointer bg-gray-50">
                     <Building size={24} className="text-gray-400 mb-2" />
                     <p className="text-sm text-gray-500 font-medium">CV dosyanızı buraya sürükleyin veya <span className="text-[#ecbb3f]">seçin</span>.</p>
                   </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-bold text-[#162f5d]">Kariyer Hedefinden Kısaca Bahset</label>
                  <textarea 
                    className="w-full flex-1 min-h-[120px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors resize-none"
                    placeholder="Deneyimlerinizden veya hedeflerinizden biraz bahsedebilir misiniz?"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="mt-2 w-full h-14 bg-[#ecbb3f] hover:bg-[#d4a635] text-[#162f5d] font-black text-lg rounded-xl transition-all shadow-[0_10px_25px_rgba(236,187,63,0.3)] hover:shadow-[0_15px_30px_rgba(236,187,63,0.4)] flex items-center justify-center gap-3"
                >
                  <Briefcase size={20} />
                  Başvuru Yap
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Info Box */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#162f5d] rounded-t-3xl rounded-b-3xl md:rounded-t-[40px] md:rounded-b-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full flex flex-col">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecbb3f]/5 rounded-bl-full -mr-4 -mt-4" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full -ml-4 -mb-4" />
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 relative z-10">İnsan Kaynakları</h3>
              <p className="text-gray-300 mb-10 text-sm md:text-base leading-relaxed relative z-10">
                Ekibimize katılmak istiyorsanız, bize iletişim kanallarımızdan ulaşabilir veya formu doldurarak CV'nizi iletebilirsiniz. En yakın zamanda size dönüş yapılacaktır.
              </p>
              
              <div className="space-y-8 relative z-10 flex-1">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] transition-colors">
                    <Phone size={20} className="text-[#ecbb3f] group-hover:text-[#162f5d] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Mülakatlar İçin</p>
                    <a href="tel:4440320" className="text-lg font-bold text-white hover:text-[#ecbb3f] transition-colors">444 0 320</a>
                    <span className="text-white mx-2">/</span>
                    <a href="tel:05057710320" className="text-lg font-bold text-white hover:text-[#ecbb3f] transition-colors">0 505 771 03 20</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] transition-colors">
                    <Mail size={20} className="text-[#ecbb3f] group-hover:text-[#162f5d] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">CV Gönderimi İçin</p>
                    <a href="mailto:ik@megagoz.com" className="text-lg font-bold text-white hover:text-[#ecbb3f] transition-colors">ik@megagoz.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
