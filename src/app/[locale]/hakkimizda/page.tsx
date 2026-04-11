import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { CheckCircle2, Eye, Shield, HeartHandshake, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <main>
      <Header />
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        <Image 
          src="/images/megagoz-tedavi-sonrasi.webp" 
          alt="Hakkımızda" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              {locale === 'en' ? 'CORPORATE' : 'KURUMSAL'}
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            {t("about")}
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            {locale === 'en' 
              ? 'Founded with the aim of providing healthcare services at international standards, MEGAGÖZ is a modern eye health center that brings technology and medicine together.' 
              : 'Uluslararası standartlarda sağlık hizmeti sunmak amacıyla kurulan MEGAGÖZ, teknolojiyi ve tıbbı bir araya getiren modern bir göz sağlığı merkezidir.'}
          </p>
        </div>
      </div>

      <div className="bg-transparent pb-24 relative z-20">
      
      {/* Visual Side-by-side (Moved below hero header) */}
      <div className="container mx-auto px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#162f5d] leading-tight tracking-tight">
              {locale === 'en' ? (
                <>Reliable Reference in <span className="text-[#ecbb3f]">Eye Health</span></>
              ) : (
                <>Göz Sağlığında <span className="text-[#ecbb3f]">Güvenilir Referans</span></>
              )}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              {locale === 'en' 
                ? "Your eyes are in safe hands with our experienced specialists in our clinic equipped with Turkey's most advanced technical infrastructure."
                : "Türkiye’nin en güncel teknik altyapısına sahip kliniğimizde, deneyimli uzmanlarımızla gözleriniz emin ellerde."}
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
          </div>
        </div>
      </div>

      {/* Main Content (Megaeste Split Style) */}
      <div className="bg-[#f8fafc] pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="container mx-auto px-6 max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 space-y-12">
                 <h2 className="text-3xl md:text-4xl font-black text-[#162f5d] leading-tight">
                   {locale === 'en' ? (
                     <>Modern Medicine, <br />Personalized Approach</>
                   ) : (
                     <>Modern Tıp, <br />Kişiselleştirilmiş Yaklaşım</>
                   )}
                 </h2>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   {locale === 'en'
                     ? "Since the day it was founded, acting with the vision of providing reliable, high-quality, and accessible solutions in eye health, MEGAGÖZ has been providing superior service to its patients from both home and abroad with its center in Istanbul."
                     : "Kurulduğu günden bu yana, göz sağlığında güvenilir, kaliteli ve ulaşılabilir çözümler sunma vizyonuyla hareket eden MEGAGÖZ, İstanbul’daki merkeziyle hem yurt içinden hem de yurt dışından gelen hastalarına üstün hizmet vermektedir."}
                 </p>
                 <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-6 mt-8">
                       <div className="w-16 h-16 rounded-2xl bg-[#162f5d] text-white flex items-center justify-center">
                          <Eye size={28} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-xl text-[#162f5d]">
                           {locale === 'en' ? 'International Quality' : 'Uluslararası Kalite'}
                         </h4>
                         <p className="text-gray-500 font-medium">
                           {locale === 'en' ? 'Service at global standards' : 'Global standartlarda hizmet'}
                         </p>
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
                   <Award className="text-[#ecbb3f]" /> {locale === 'en' ? 'Our Vision & Mission' : 'Vizyonumuz & Misyonumuz'}
                 </h3>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                   {locale === 'en' 
                     ? <>With its innovative medical technologies, experienced specialist physician staff, and professional team focused on patient satisfaction, MEGAGÖZ has adopted the <strong className="text-[#162f5d]">vision</strong> of becoming a contemporary and reliable reference center globally in the field of eye health. With personalized treatment approaches for each patient, it aims to provide medical services far beyond standard templates.</>
                     : <>Yenilikçi medikal teknolojileri, deneyimli uzman hekim kadrosu ve hasta memnuniyetine odaklı profesyonel ekibiyle MEGAGÖZ, göz sağlığı alanında küresel çapta çağdaş ve güvenilir bir referans merkezi haline gelmeyi <strong className="text-[#162f5d]">vizyon</strong> edinmiştir. Her hasta için kişiselleştirilmiş tedavi yaklaşımlarıyla, standart şablonların çok ötesinde tıbbi hizmet sunmayı hedefler.</>}
                 </p>
                 <p className="text-gray-600 text-lg leading-relaxed font-medium">
                   {locale === 'en'
                     ? <>Our <strong className="text-[#162f5d]">mission</strong> is to provide accessible, international quality eye health services to all segments of society without deviating from ethical medical rules. We contribute to the bright future of generations through a human-oriented, innovative structure that closely follows scientific developments in the diagnosis and treatment of eye diseases.</>
                     : <><strong className="text-[#162f5d]">Misyonumuz</strong> ise; etik tıp kurallarından şaşmadan, toplumun her kesimine ulaşılabilir, uluslararası kalitede göz sağlığı hizmeti sunmaktır. Göz hastalıklarının teşhis ve tedavisinde insan odaklı, yenilikçi ve bilimsel gelişmeleri yakından takip eden bir yapı ile nesillerin aydınlık geleceğine katkıda bulunuyoruz.</>}
                 </p>
              </div>

              {/* Extended Corporate History */}
              <div>
                <h3 className="text-3xl font-black text-[#162f5d] mb-8">
                  {locale === 'en' ? 'A Deep-Rooted Past, A Strong Future' : 'Köklü Bir Geçmiş, Güçlü Bir Gelecek'}
                </h3>
                <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-6">
                  {locale === 'en' ? (
                    <>
                      <p>Megagöz Medical Center was founded with the aim of taking revolutionary steps in the diagnosis and treatment of eye health since its inception. Our founding philosophy is built on treating our patients <strong>"as we would treat our own family"</strong> in the treatment of the eyes, which are invaluable organs. Tens of thousands of successful surgical cases we have accomplished over the years are not just statistical successes, but also honorable proof that our trusted patients can look brightly at the world again.</p>
                      <p>We provide services in a wide medical and surgical spectrum ranging from cataract surgery to smart lens (trifocal) implantations, excimer laser (Lasik) treatments to advanced strabismus and glaucoma operations. Eye surgery requires great delicacy, flawless planning, and state-of-the-art equipment. With this awareness, we constantly revise our operating rooms and diagnostic units with the most up-to-date devices in American FDA and European standards in every period.</p>
                      <p>From the patient admission process to the post-discharge journey, transparency is our most valuable principle as the Megagöz family. Before treatment, our expert physicians thoroughly examine the corneal structure, retinal topography, and all anatomical data of our patients in the company of fully personalized software. Thus, a unique and singular surgical map is extracted for each eye structure.</p>
                    </>
                  ) : (
                    <>
                      <p>Megagöz Tıp Merkezi, temellerinin atıldığı ilk günden itibaren göz sağlığı teşhis ve tedavisinde devrimsel adımlar atmak amacıyla kurulmuştur. Kuruluş felsefemiz, paha biçilemez bir organ olan gözlerin tedavisinde hastalarımıza <strong>"kendi ailemize nasıl bakıyorsak, öyle davranmak"</strong> üzerine inşa edilmiştir. Yıllar içerisinde imza attığımız on binlerce başarılı cerrahi vaka, sadece istatistiksel bir başarı değil; aynı zamanda bize güvenen hastalarımızın dünyaya yeniden net bir şekilde bakabilmesinin onurlu bir kanıtıdır.</p>
                      <p>Katarakt cerrahisinden akıllı lens (trifokal) implantasyonlarına, excimer lazer (Lasik) tedavilerinden ileri seviye şaşılık ve glokom operasyonlarına kadar geniş bir medikal ve cerrahi yelpazede hizmet sunmaktayız. Göz cerrahisi büyük bir incelik, hatasız bir planlama ve son teknoloji donanım gerektirir. Bu bilinçle, ameliyathanelerimizi ve teşhis ünitelerimizi her dönem Amerikan FDA ve Avrupa standartlarında en güncel cihazlarla revize etmekteyiz.</p>
                      <p>Hasta kabul sürecinden başlayarak taburculuk sonrasına kadar devam eden yolculukta, Megagöz ailesi olarak şeffaflık en değerli ilkemizdir. Tedavi öncesi uzman hekimlerimiz, hastalarımızın kornea yapısını, retina topografisini ve tüm anatomik verilerini tamamen kişiselleştirilmiş yazılımlar eşliğinde detaylıca inceler. Bu sayede her bir göz yapısı için tek ve benzersiz bir cerrahi harita çıkarılır.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-gradient-to-br from-[#162f5d] to-[#0a111a] rounded-3xl p-8 md:p-12 shadow-xl text-white">
                 <h3 className="text-2xl font-black mb-8 text-[#ecbb3f]">
                   {locale === 'en' ? 'Our Technological Infrastructure and Medical Superiority' : 'Teknolojik Altyapımız ve Tıbbi Üstünlüğümüz'}
                 </h3>
                 <p className="text-gray-300 leading-relaxed text-lg mb-8 font-medium">
                   {locale === 'en' 
                     ? 'Excellent results are guaranteed when the unique experience of our surgeons meets the smart equipment park in our clinic. The newest equipment reached by the medical world is used in Megagöz:'
                     : 'Cerrahlarımızın eşsiz tecrübesi, kliniğimizdeki akıllı cihaz parkuruyla buluştuğunda mükemmel sonuçlar garantilenmektedir. Megagöz\'de tıp dünyasının ulaştığı en yeni ekipmanlar kullanılmaktadır:'}
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0">
                         <CheckCircle2 size={16} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-1 text-white">
                           {locale === 'en' ? '3D OCT (Topography) Analysis' : 'Üç Boyutlu OCT (Topografi) Analizi'}
                         </h4>
                         <p className="text-gray-400">
                           {locale === 'en' ? 'Millimetric mapping of your eye tissues down to the cellular level.' : 'Göz dokularınızın hücresel seviyeye kadar milimetrik haritalandırılması.'}
                         </p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0">
                         <CheckCircle2 size={16} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-1 text-white">
                           {locale === 'en' ? 'Drop Anesthesia & Bladeless Laser (Femtosecond)' : 'Damla Anestezi & Bıçaksız Lazer (Femtosaniye)'}
                         </h4>
                         <p className="text-gray-400">
                           {locale === 'en' ? 'Painless and sutureless operations in seconds, without the need for general or local needle anesthesia.' : 'Genel veya lokal iğneli anesteziye gerek kalmadan, saniyeler içinde ağrısız ve dikişsiz operasyonlar.'}
                         </p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0">
                         <CheckCircle2 size={16} className="text-[#ecbb3f]" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-1 text-white">
                           {locale === 'en' ? 'High-Standard V.I.P Operating Rooms' : 'Yüksek Standartlı V.I.P Ameliyathaneler'}
                         </h4>
                         <p className="text-gray-400">
                           {locale === 'en' ? 'Surgical rooms with advanced HEPA filter air conditioning systems, reducing the risk of infection to zero.' : 'Gelişmiş HEPA filtre iklimlendirme sistemli, enfeksiyon riskini sıfıra indiren cerrahi odalar.'}
                         </p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-black text-[#162f5d] mb-8 mt-4">
                  {locale === 'en' ? 'Why Megagöz?' : 'Neden Megagöz?'}
                </h3>
                
                {(locale === 'en' ? [
                  { title: "Expert Staff, Reliable Experience", desc: "An academic-level staff composed of respected surgeons and specialists in their fields, not only theoretical but also successfully completing tens of thousands of challenging surgical cases." },
                  { title: "Innovative Technology, Precise Diagnosis", desc: "Medicine based on measurements, not guesses! Uninterrupted diagnosis and treatment systems with the most up-to-date devices produced in respected laboratories around the world." },
                  { title: "Personalized Patient-Oriented Approach", desc: "A transparent process management and a smiling face that deeply informs you at every stage from the moment you enter the door until you heal." },
                  { title: "Modern, Comfortable, and Accessible", desc: "A clinic in Ümraniye, the heart of the Anatolian side, easily accessible from everywhere, resting your soul with its spacious architecture." },
                ] : [
                  { title: "Uzman Kadro, Güvenilir Tecrübe", desc: "Sadece teorik değil, on binlerce zorlu cerrahi vakadan yüzünün akıyla çıkmış, alanında saygın cerrahlar ve uzmanlardan oluşan akademik seviyede bir kadro." },
                  { title: "Yenilikçi Teknoloji, Hassas Tanı", desc: "Tahminlere değil, ölçümlere dayalı tıp! Dünyanın saygın laboratuvarlarında üretilen en güncel cihazlar ile kesintisiz teşhis ve tedavi sistemleri." },
                  { title: "Kişiye Özel Hasta Odaklı Yaklaşım", desc: "Kapıdan girdiğiniz andan iyileşene kadar her aşamada sizi detaylıca bilgilendiren, şeffaf süreç yönetimi ve güler yüz." },
                  { title: "Modern, Konforlu ve Erişilebilir", desc: "Anadolu yakasının kalbi Ümraniye'de, her noktadan kolayca ulaşılabilecek, ferah mimarisiyle ruhunuzu da dinlendiren klinik." },
                ]).map((item, idx) => (
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
