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
      <div className="min-h-screen bg-white pb-24 pt-[130px] md:pt-[170px]">
      
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
            <div className="lg:col-span-7 space-y-12 md:space-y-16">
              
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecbb3f]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
                 <h3 className="text-2xl font-black text-[#162f5d] mb-6 flex items-center gap-3">
                   <Award className="text-[#ecbb3f]" /> Vizyonumuz & Misyonumuz
                 </h3>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                   Yenilikçi medikal teknolojileri, deneyimli uzman hekim kadrosu ve hasta memnuniyetine odaklı profesyonel ekibiyle MEGAGÖZ, göz sağlığı alanında küresel çapta çağdaş ve güvenilir bir referans merkezi haline gelmeyi <strong className="text-[#162f5d]">vizyon</strong> edinmiştir. Her hasta için kişiselleştirilmiş tedavi yaklaşımlarıyla, standart şablonların çok ötesinde tıbbi hizmet sunmayı hedefler.
                 </p>
                 <p className="text-gray-600 text-lg leading-relaxed font-medium">
                   <strong className="text-[#162f5d]">Misyonumuz</strong> ise; etik tıp kurallarından şaşmadan, toplumun her kesimine ulaşılabilir, uluslararası kalitede göz sağlığı hizmeti sunmaktır. Göz hastalıklarının teşhis ve tedavisinde insan odaklı, yenilikçi ve bilimsel gelişmeleri yakından takip eden bir yapı ile nesillerin aydınlık geleceğine katkıda bulunuyoruz.
                 </p>
              </div>

              {/* Extended Corporate History */}
              <div>
                <h3 className="text-3xl font-black text-[#162f5d] mb-8">Köklü Bir Geçmiş, Güçlü Bir Gelecek</h3>
                <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-6">
                  <p>
                    Megagöz Tıp Merkezi, temellerinin atıldığı ilk günden itibaren göz sağlığı teşhis ve tedavisinde devrimsel adımlar atmak amacıyla kurulmuştur. Kuruluş felsefemiz, paha biçilemez bir organ olan gözlerin tedavisinde hastalarımıza <strong>"kendi ailemize nasıl bakıyorsak, öyle davranmak"</strong> üzerine inşa edilmiştir. Yıllar içerisinde imza attığımız on binlerce başarılı cerrahi vaka, sadece istatistiksel bir başarı değil; aynı zamanda bize güvenen hastalarımızın dünyaya yeniden net bir şekilde bakabilmesinin onurlu bir kanıtıdır.
                  </p>
                  <p>
                    Katarakt cerrahisinden akıllı lens (trifokal) implantasyonlarına, excimer lazer (iLasik) tedavilerinden ileri seviye şaşılık ve glokom operasyonlarına kadar geniş bir medikal ve cerrahi yelpazede hizmet sunmaktayız. Göz cerrahisi büyük bir incelik, hatasız bir planlama ve son teknoloji donanım gerektirir. Bu bilinçle, ameliyathanelerimizi ve teşhis ünitelerimizi her dönem Amerikan FDA ve Avrupa standartlarında en güncel cihazlarla revize etmekteyiz.
                  </p>
                  <p>
                    Hasta kabul sürecinden başlayarak taburculuk sonrasına kadar devam eden yolculukta, Megagöz ailesi olarak şeffaflık en değerli ilkemizdir. Tedavi öncesi uzman hekimlerimiz, hastalarımızın kornea yapısını, retina topografisini ve tüm anatomik verilerini tamamen kişiselleştirilmiş yazılımlar eşliğinde detaylıca inceler. Bu sayede her bir göz yapısı için tek ve benzersiz bir cerrahi harita çıkarılır. 
                  </p>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-gradient-to-br from-[#162f5d] to-[#0a111a] rounded-3xl p-8 md:p-12 shadow-xl text-white">
                 <h3 className="text-2xl font-black mb-8 text-[#ecbb3f]">Teknolojik Altyapımız ve Tıbbi Üstünlüğümüz</h3>
                 <p className="text-gray-300 leading-relaxed text-lg mb-8 font-medium">
                    Cerrahlarımızın eşsiz tecrübesi, kliniğimizdeki akıllı cihaz parkuruyla buluştuğunda mükemmel sonuçlar garantilenmektedir. Megagöz'de tıp dünyasının ulaştığı en yeni ekipmanlar kullanılmaktadır:
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0">
                         <CheckCircle2 size={16} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-1 text-white">Üç Boyutlu OCT (Topografi) Analizi</h4>
                         <p className="text-gray-400">Göz dokularınızın hücresel seviyeye kadar milimetrik haritalandırılması.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0">
                         <CheckCircle2 size={16} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-1 text-white">Damla Anestezi & Bıçaksız Lazer (Femtosaniye)</h4>
                         <p className="text-gray-400">Genel veya lokal iğneli anesteziye gerek kalmadan, saniyeler içinde ağrısız ve dikişsiz operasyonlar.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0">
                         <CheckCircle2 size={16} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-1 text-white">Yüksek Standartlı V.I.P Ameliyathaneler</h4>
                         <p className="text-gray-400">Gelişmiş HEPA filtre iklimlendirme sistemli, enfeksiyon riskini sıfıra indiren cerrahi odalar.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-black text-[#162f5d] mb-8 mt-4">Neden Megagöz?</h3>
                
                {[
                  { title: "Uzman Kadro, Güvenilir Tecrübe", desc: "Sadece teorik değil, on binlerce zorlu cerrahi vakadan yüzünün akıyla çıkmış, alanında saygın cerrahlar ve uzmanlardan oluşan akademik seviyede bir kadro." },
                  { title: "Yenilikçi Teknoloji, Hassas Tanı", desc: "Tahminlere değil, ölçümlere dayalı tıp! Dünyanın saygın laboratuvarlarında üretilen en güncel cihazlar ile kesintisiz teşhis ve tedavi sistemleri." },
                  { title: "Kişiye Özel Hasta Odaklı Yaklaşım", desc: "Kapıdan girdiğiniz andan iyileşene kadar her aşamada sizi detaylıca bilgilendiren, şeffaf süreç yönetimi ve güler yüz." },
                  { title: "Modern, Konforlu ve Erişilebilir", desc: "Anadolu yakasının kalbi Ümraniye'de, her noktadan kolayca ulaşılabilecek, ferah mimarisiyle ruhunuzu da dinlendiren klinik." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                     <div className="mt-1 w-10 h-10 rounded-full bg-[#ecbb3f]/10 group-hover:bg-[#ecbb3f] transition-colors flex items-center justify-center shrink-0">
                       <CheckCircle2 size={20} className="text-[#ecbb3f] group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <h4 className="text-xl font-black text-[#162f5d] mb-2">{item.title}</h4>
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
