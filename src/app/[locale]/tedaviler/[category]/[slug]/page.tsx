import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, User, Activity, AlertCircle, Share2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { TREATMENTS_DATA } from "@/data/treatments";
import { notFound } from "next/navigation";

export default function TreatmentDetailPage({ params }: { params: { locale: string; category: string; slug: string } }) {
  const locale = useLocale() as "tr" | "en";
  const categoryData = TREATMENTS_DATA.find((c) => c.id === params.category);

  if (!categoryData) {
    notFound();
  }

  const treatment = categoryData.items.find((item) => item.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  const categoryName = categoryData.title[locale];
  const treatmentTitle = treatment.title[locale];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Detail Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-end pb-16 pt-32">
        <Image 
          src={treatment.image} 
          alt={treatmentTitle} 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/80 to-[#0a111a]/20 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-[1000px] relative z-10">
          <Link href={{ pathname: '/tedaviler/[category]', params: { category: categoryData.id } }} className="inline-flex items-center gap-2 text-[#ecbb3f] hover:text-white font-bold text-sm tracking-wider uppercase mb-8 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
               <ArrowLeft size={16} />
            </div>
            {categoryName} {locale === "tr" ? "Kategorisine Dön" : "Category"}
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            {treatmentTitle}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium border-l-2 border-[#ecbb3f] pl-4">
            <p className="max-w-2xl text-base md:text-lg leading-relaxed">
               {treatment.excerpt[locale]}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1000px] -mt-8 relative z-20 pb-24 flex flex-col lg:flex-row gap-12">
         
         <div className="lg:w-[70%]">
           <article className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
             
             {/* General Body Placeholder Content until CMS is integrated */}
             <div className="prose prose-lg prose-slate max-w-none 
                 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-[#1f313f] prose-h3:mb-4 prose-h3:mt-8
                 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                 prose-strong:text-[#1f313f] prose-strong:font-bold
                 prose-ul:list-none prose-ul:pl-0 prose-li:text-gray-600 prose-li:mb-3">
                 
                <p>
                  {locale === "tr"
                    ? "Tıp teknolojisindeki en son gelişmeler ışığında sunduğumuz bu tedavi yöntemiyle, hastalarımızın yaşam kalitesini maksimuma çıkarmayı hedefliyoruz. İleri teknoloji cihaz parkurumuz ve uzman hekim kadromuz, işlemlerin konforlu, kısa süreli ve etkili olmasını garantilemektedir."
                    : "With this treatment method we offer in the light of the latest developments in medical technology, we aim to maximize the quality of life of our patients. Our advanced technology equipment and expert physician staff guarantee comfortable, short-term, and effective procedures."}
                </p>

                <h3>{locale === "tr" ? "Nasıl Uygulanır?" : "How is it Applied?"}</h3>
                <p>
                   {locale === "tr"
                    ? "İşlem öncesinde gözünüz detaylı topografik haritalama cihazlarıyla ölçülür ve anestezi damlası eşliğinde ağrısız bir süreç sağlanır. İşlemin niteliğine göre saniyeler veya çok kısa bir süre içinde tamamlanan uygulamamız, klinik ortamda yüksek sterilizasyon altında yapılmaktadır."
                    : "Before the procedure, your eye is measured with detailed topographic mapping devices, and an anesthetic drop ensures a painless process. Depending on the nature of the procedure, our application, completed in seconds or a very short time, is performed in a clinical environment under high sterilization."}
                </p>

                <div className="bg-[#f0f4f8] rounded-2xl p-6 my-8 border border-gray-200">
                    <h4 className="flex items-center gap-2 font-bold text-[#1f313f] mb-4">
                       <CheckCircle2 className="text-[#ecbb3f]" size={20} />
                       {locale === "tr" ? "Avantajları" : "Advantages"}
                    </h4>
                    <ul className="space-y-3">
                       <li className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#ecbb3f] mt-2.5 shrink-0" />
                         <span>{locale === 'tr' ? "Yüksek hasta konforu ve hızlı iyileşme süreci." : "High patient comfort and fast recovery process."}</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#ecbb3f] mt-2.5 shrink-0" />
                         <span>{locale === 'tr' ? "Ağrısız, iğnesiz ve dikişsiz modern cerrahi." : "Painless, needle-free, and seamless modern surgery."}</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#ecbb3f] mt-2.5 shrink-0" />
                         <span>{locale === 'tr' ? "FDA onaylı güvenilir altyapı ve malzemeler." : "FDA approved reliable infrastructure and materials."}</span>
                       </li>
                    </ul>
                </div>
             </div>

             {/* Footer Actions */}
             <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{locale === "tr" ? "Paylaş" : "Share"}</span>
                  <div className="flex gap-2">
                     <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#ecbb3f] hover:text-white transition-colors">
                        <Share2 size={16} />
                     </button>
                  </div>
                </div>
             </div>

           </article>
         </div>

         {/* Sidebar */}
         <div className="lg:w-[30%] space-y-8">
            <div className="bg-[#1f313f] rounded-3xl p-8 border border-white/5 shadow-xl">
               <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-center border-b border-white/10 pb-4">
                  {locale === "tr" ? "Hızlı İletişim" : "Quick Contact"}
               </h3>
               
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                       <Activity size={18} className="text-[#ecbb3f]" />
                    </div>
                    <div>
                       <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                         {locale === "tr" ? "Randevu Hattı" : "Appointment Line"}
                       </div>
                       <a href="tel:4440320" className="text-lg font-bold text-white hover:text-[#ecbb3f] transition-colors">
                         444 0 320
                       </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                       <AlertCircle size={18} className="text-[#ecbb3f]" />
                    </div>
                    <div>
                       <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                         {locale === "tr" ? "Acil Durum" : "Emergency"}
                       </div>
                       <div className="text-sm text-gray-300 font-medium">
                         7/24 {locale === "tr" ? "Hizmetinizdeyiz" : "At your service"}
                       </div>
                    </div>
                  </div>
               </div>

               <Link href="/iletisim" className="mt-8 flex items-center justify-center gap-2 bg-[#ecbb3f] text-[#1f313f] font-bold py-3 px-6 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider w-full">
                  {locale === "tr" ? "İletişime Geçin" : "Contact Us"}
               </Link>
            </div>
         </div>

      </div>
      
      <Footer />
    </main>
  );
}
