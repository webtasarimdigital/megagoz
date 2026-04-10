"use client";

import { useLocale } from "next-intl";
import { use, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, User, Activity, AlertCircle, Share2, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { TREATMENTS_DATA } from "@/data/treatments";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TreatmentDetailPage({ params }: { params: Promise<{ locale: string; category: string; slug: string }> }) {
  const resolvedParams = use(params);
  const locale = useLocale() as "tr" | "en";
  const categoryData = TREATMENTS_DATA.find((c) => c.id === resolvedParams.category);

  if (!categoryData) {
    notFound();
  }

  const treatment = categoryData.items.find((item) => item.slug === resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  const categoryName = categoryData.title[locale];
  const treatmentTitle = treatment.title[locale];

  // For Local FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const localFaqs = [
    { q: locale === 'tr' ? "Bu tedavi ağrılı mıdır?" : "Is this treatment painful?", a: locale === 'tr' ? "Hayır, işlem tamamen damla anestezi altında gerçekleşir ve hastalarımız hiçbir ağrı hissetmez." : "No, the procedure is performed under drop anesthesia, so patients feel no pain." },
    { q: locale === 'tr' ? "İyileşme süreci ne kadar sürer?" : "How long is the recovery time?", a: locale === 'tr' ? "Ameliyat sonrası aynı gün taburcu olursunuz. Tam görme netliği genellikle birkaç gün içinde sağlanır." : "You are discharged on the same day. Full visual clarity is usually achieved within a few days." },
    { q: locale === 'tr' ? "Operasyon sonrası dikkat edilmesi gerekenler nelerdir?" : "What should I be careful about after the operation?", a: locale === 'tr' ? "İlk günlerde gözünüzü oğuşturmamanız, tozlu ortamlardan uzak durmanız ve reçete edilen damlaları düzenli kullanmanız yeterlidir." : "Avoid rubbing your eyes, stay away from dusty environments, and use your prescribed drops regularly." }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Detail Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 pt-32 shrink-0">
        <Image 
          src={treatment.image} 
          alt={treatmentTitle} 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#162f5d] via-[#162f5d]/60 to-transparent z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
          <Link href={{ pathname: '/tedaviler/[category]', params: { category: categoryData.id } }} className="inline-flex items-center gap-2 text-[#ecbb3f] hover:text-white font-bold text-xs tracking-wider uppercase mb-8 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
               <ArrowLeft size={16} />
            </div>
            {categoryName} {locale === "tr" ? "Kategorisine Dön" : "Category"}
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            {treatmentTitle}
          </h1>
          
          <div className="border-l-4 border-[#ecbb3f] pl-6 md:pl-8">
            <p className="max-w-3xl text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
               {treatment.excerpt[locale]}
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout containing content and Sidebar */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] -mt-10 relative z-20 pb-24">
         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column (Main Article) */}
            <div className="lg:w-2/3 space-y-12">
               
               {/* Intro Block */}
               <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-black text-[#162f5d] mb-6">Genel Bakış</h2>
                  {treatment.content?.[locale] ? (
                    <div 
                       className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed"
                       dangerouslySetInnerHTML={{ __html: treatment.content[locale] }} 
                    />
                  ) : (
                    <>
                      <p className="text-gray-600 leading-relaxed text-lg mb-6 font-medium">
                        Mükemmel ve net bir görüşe ulaşmak, hem iş hayatınızda hem de sosyal yaşantınızda büyük bir özgürlüktür. Alanında uzman hekim kadromuz, modern tıp dünyasının sunduğu en güncel metodları bireysel ihtiyaçlarınıza göre uyarlar. 
                      </p>
                      <p className="text-gray-600 leading-relaxed text-lg font-medium">
                        {locale === "tr"
                          ? "Tıp teknolojisindeki en son gelişmeler ışığında sunduğumuz bu tedavi yöntemiyle, hastalarımızın yaşam kalitesini maksimuma çıkarmayı hedefliyoruz."
                          : "With this treatment method we offer in the light of the latest developments in medical technology, we aim to maximize the quality of life of our patients."}
                      </p>
                    </>
                  )}
               </div>

               {/* Extensive Image Gallery / Grid */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-[300px] relative rounded-3xl overflow-hidden shadow-lg group">
                     <Image src="/images/slide1.png" alt="Detail 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-[#ecbb3f]/20 mix-blend-overlay" />
                  </div>
                  <div className="h-[300px] relative rounded-3xl overflow-hidden shadow-lg mt-12 group">
                     <Image src="/images/slide2.png" alt="Detail 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-[#162f5d]/20 mix-blend-overlay" />
                  </div>
               </div>

               {/* Process & Advantages */}
               <div className="bg-gradient-to-br from-[#162f5d] to-[#0a111a] rounded-3xl p-8 md:p-12 shadow-xl text-white">
                  <h3 className="text-2xl font-black mb-8 text-[#ecbb3f]">Tedavi Süreci Nasıl İşler?</h3>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0 font-black text-[#ecbb3f]">1</div>
                        <div>
                           <h4 className="font-bold text-lg mb-2">Detaylı Göz Haritası</h4>
                           <p className="text-gray-400">Üç boyutlu topografi cihazlarıyla kornea ve retina yapınız saniyelik milimetrik hassasiyetle ölçülür.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0 font-black text-[#ecbb3f]">2</div>
                        <div>
                           <h4 className="font-bold text-lg mb-2">Ağrısız Uygulama</h4>
                           <p className="text-gray-400">Damla anestezi yardımıyla göze dokunulmadan ileri teknoloji bilgisayar kontrollü lazer destekli işlemler yapılır.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#ecbb3f] flex items-center justify-center shrink-0 font-black text-[#ecbb3f]">3</div>
                        <div>
                           <h4 className="font-bold text-lg mb-2">Hızlı Toparlanma</h4>
                           <p className="text-gray-400">Aynı gün taburcu olma imkanı sunulur. Saatler içerisinde normal konforunuza dönmeniz hedeflenir.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Full Width Large Image Image */}
               <div className="h-[400px] w-full relative rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/images/slide4.png" alt="Detail 3" fill className="object-cover object-bottom" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 bg-[#ecbb3f] rounded-full flex items-center justify-center pl-1 cursor-pointer">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
               </div>

               {/* FAQ Accordion Local */}
               <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-black text-[#162f5d] mb-8">Sık Sorulan Sorular</h3>
                  
                  <div className="space-y-4">
                    {localFaqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <button 
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                        >
                           <span className={`font-bold text-lg transition-colors ${openFaq === index ? "text-[#ecbb3f]" : "text-[#162f5d] group-hover:text-[#ecbb3f]"}`}>
                             {faq.q}
                           </span>
                           {openFaq === index ? <ChevronUp className="text-[#ecbb3f]" /> : <ChevronDown className="text-gray-400" />}
                        </button>
                        <AnimatePresence>
                          {openFaq === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                               <p className="text-gray-500 mt-4 mb-2">{faq.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
               </div>

            </div>

            {/* Right Column (Sticky Sidebar) */}
            <div className="lg:w-1/3">
               <div className="sticky top-32 space-y-8">
                  
                  {/* Contact Widget */}
                  <div className="bg-[#ecbb3f] rounded-3xl p-8 shadow-xl text-[#162f5d]">
                     <h3 className="text-2xl font-black mb-4">Ücretsiz Ön Görüşme</h3>
                     <p className="font-bold text-[#162f5d]/80 mb-6">Tedavi hakkında detaylı bilgi ve uygunluk analizi için hemen randevu oluşturun.</p>
                     
                     <div className="space-y-4 mb-6">
                        <div className="bg-white/30 rounded-xl p-4 flex items-center gap-4">
                           <Activity size={24} />
                           <div>
                              <div className="text-xs font-black uppercase tracking-widest opacity-70">Bilgi Hattı</div>
                              <a href="tel:4440320" className="text-xl font-black">444 0 320</a>
                           </div>
                        </div>
                     </div>
                     
                     <Link href="/iletisim" className="block text-center w-full bg-[#162f5d] text-white font-bold py-4 rounded-xl hover:bg-[#15232d] transition-colors">
                        Biz Sizi Arayalım
                     </Link>
                  </div>

                  {/* Highlights Widget */}
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                     <h4 className="font-black text-[#162f5d] mb-6 border-b pb-4">Neden Megagöz?</h4>
                     <ul className="space-y-4">
                        {["Kişiye Özel Tedavi", "FDA Onaylı Teknoloji", "Sıfır Ağrı ve Acı", "Garantili Sonuçlar"].map((item, idx) => (
                           <li key={idx} className="flex items-center gap-3">
                              <CheckCircle2 size={18} className="text-[#ecbb3f]" />
                              <span className="font-bold text-gray-700">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

               </div>
            </div>

         </div>
      </div>
      
      <Footer />
    </main>
  );
}
