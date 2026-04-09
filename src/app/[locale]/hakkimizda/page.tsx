import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckCircle2, Eye, Shield, HeartHandshake, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const t = useTranslations("Navigation");

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-white pb-24 pt-32 md:pt-40">
      
      {/* Page Header (Hero style) */}
      <div className="container mx-auto px-6 max-w-[1300px] mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ecbb3f]" />
              <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">HAKKIMIZDA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162f5d] leading-[1.1] tracking-tight">
              Göz Sağlığında <br className="hidden lg:block"/>
              <span className="text-[#ecbb3f]">Güvenilir Referans</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Uluslararası standartlarda sağlık hizmeti sunmak amacıyla kurulan MEGAGÖZ, 
              teknolojiyi ve tıbbı bir araya getiren modern bir göz sağlığı merkezidir.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="w-full aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden relative shadow-2xl">
              <Image 
                src="/images/megagoz.webp" 
                alt="Megagöz Tıp Merkezi"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162f5d]/60 to-transparent mix-blend-multiply" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite]">
               <div className="w-16 h-16 rounded-full bg-[#ecbb3f]/10 flex items-center justify-center">
                 <Shield size={32} className="text-[#ecbb3f]" />
               </div>
               <div>
                  <div className="text-2xl font-black text-[#162f5d]">15+</div>
                  <div className="text-sm font-bold text-gray-500">Yıllık Tecrübe</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (Megaeste Split Style) */}
      <div className="bg-[#f8fafc] py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 space-y-12">
                 <h2 className="text-3xl md:text-4xl font-black text-[#162f5d] leading-tight">
                   Modern Tıp, <br />
                   Kişiselleştirilmiş Yaklaşım
                 </h2>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   Kurulduğu günden bu yana, göz sağlığında güvenilir, kaliteli ve ulaşılabilir çözümler sunma vizyonuyla hareket eden MEGAGÖZ, İstanbul’daki merkeziyle hem yurt içinden hem de yurt dışından gelen hastalarına üstün hizmet vermektedir.
                 </p>
                 <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-6 mt-8">
                       <div className="w-16 h-16 rounded-2xl bg-[#162f5d] text-white flex items-center justify-center rotate-3">
                          <Eye size={28} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-xl text-[#162f5d]">Uluslararası Kalite</h4>
                         <p className="text-gray-500 font-medium">Global standartlarda hizmet</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-7 space-y-12 md:space-y-20">
              
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecbb3f]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
                 <h3 className="text-2xl font-black text-[#162f5d] mb-6 flex items-center gap-3">
                   <Award className="text-[#ecbb3f]" /> Vizyonumuz
                 </h3>
                 <p className="text-gray-600 text-[17px] leading-relaxed">
                   Yenilikçi medikal teknolojileri, deneyimli uzman hekim kadrosu ve hasta memnuniyetine odaklı profesyonel ekibiyle MEGAGÖZ, göz sağlığı alanında çağdaş ve güvenilir bir referans merkezi haline gelmiştir. Her hasta için kişiselleştirilmiş tedavi yaklaşımlarıyla öne çıkar.
                 </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#162f5d] mb-8">Neden Megagöz?</h3>
                
                {[
                  { title: "Uzman Kadro, Güvenilir Tecrübe", desc: "Alanında saygın cerrahlar ve uzmanlardan oluşan kadro." },
                  { title: "Yenilikçi Teknoloji, Hassas Tanı", desc: "En güncel cihazlar ile kesintisiz teşhis ve tedavi sistemleri." },
                  { title: "Hasta Odaklı Yaklaşım", desc: "Her aşamada sizi bilgilendiren, şeffaf süreç yönetimi." },
                  { title: "Modern, Konforlu ve Erişilebilir", desc: "İstanbul'un merkezinde, her detayıyla konforunuz için tasarlanmış klinik." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow border border-gray-50">
                     <div className="mt-1 w-8 h-8 rounded-full bg-[#ecbb3f]/20 flex items-center justify-center shrink-0">
                       <CheckCircle2 size={18} className="text-[#ecbb3f]" />
                     </div>
                     <div>
                       <h4 className="text-lg font-bold text-[#162f5d] mb-2">{item.title}</h4>
                       <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                     </div>
                  </div>
                ))}
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
