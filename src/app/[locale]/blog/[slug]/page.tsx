import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Mock veri tabanı simülasyonu
const getBlogPostBySlug = (slug: string) => {
  const posts = [
    {
      id: 1,
      title: "Lazer Göz Ameliyatı (Göz Çizdirme) Nedir?",
      slug: "lazer-goz-ameliyati-nedir",
      excerpt: "Miyop, hipermetrop ve astigmatizmanın saniyeler içinde tedavi edildiği modern lazer operasyonları hakkında tüm detaylar.",
      content: `
        <p>Lazer göz ameliyatı, diğer adıyla "göz çizdirme" operasyonu, tıp dünyasındaki adıyla refraktif cerrahi, miyop, hipermetrop ve astigmat gibi kırma kusurlarını düzeltmek amacıyla uygulanan son derece güvenli bir işlemdir.</p>
        <br/>
        <h3>Nasıl Uygulanır?</h3>
        <p>Gelişen teknoloji sayesinde lazer işlemleri artık saniyeler içinde tamamlanmaktadır. Korneanın yeniden şekillendirilmesi esasına dayanan bu tedaviler, No-Touch (Göze Dokunulmadan), LASIK, Femto-LASIK, PRK veya SMILE gibi farklı teknikler kullanılarak hastanın göz yapısına en uygun şekilde kişiselleştirilir.</p>
        <br/>
        <h3>Avantajları Nelerdir?</h3>
        <ul>
          <li><strong>Hızlı İyileşme:</strong> İşlemden hemen sonra görüş netleşmeye başlar ve hastalar ertesi gün günlük yaşamlarına dönebilir.</li>
          <li><strong>Ağrısız Süreç:</strong> Damla anestezi altında yapıldığından herhangi bir ağrı veya sızı hissedilmez.</li>
          <li><strong>Kalıcı Çözüm:</strong> Gözlük ve kontakt lens bağımlılığından ömür boyu kurtulma imkanı sunar.</li>
        </ul>
        <br/>
        <p>Uzman hekimlerimiz tarafından yapılacak detaylı bir göz muayenesi sonrasında, gözünüzün lazer lazer cerrahisine uygun olup olmadığı kesin olarak belirlenmektedir. Gözlüklerinizden kurtulmak ve dünyayı daha net görmek için kliniğimizden detaylı randevu alabilirsiniz.</p>
      `,
      date: "14 Nisan 2026",
      image: "/images/slide1.png"
    },
    {
      id: 2,
      title: "Göz Rengi Değiştirmek Mümkün Mü?",
      slug: "goz-rengi-degistirme",
      excerpt: "Keratopigmentasyon ve iris implantasyonu gibi yöntemlerle göz rengi değişimi tıp dünyasında nasıl uygulanıyor?",
      content: "<p>Göz rengi estetiği, son yıllarda tıp dünyasının en çok merak edilen konularından biridir. Kliniğimizde, hastalarımızın güvenliğini ön planda tutan en yenilikçi yöntemler özenle değerlendirilmektedir.</p><br/><p>Keratopigmentasyon (korneaya renk enjeksiyonu) ve lazerle pigment silme gibi yöntemlerin her birinin kendi içinde avantajları ve riskleri bulunmaktadır. Bu operasyonların mutlaka deneyimli cerrahlar tarafından, steril klinik ortamlarda ve detaylı bir topografi muayenesi sonrasında uygulanması şarttır.</p>",
      date: "10 Nisan 2026",
      image: "/images/megagoz-katarakt-tedavisi.webp"
    },
    {
      id: 3,
      title: "Çocuklarda Göz Sağlığının Önemi",
      slug: "cocuklarda-goz-sagligi",
      excerpt: "Göz tembelliği ve şaşılık gibi problemlerin erken teşhisi, çocuğunuzun gelecekteki görüş kalitesini belirler.",
      content: "<p>Çocukluk çağındaki görme gelişimi 0-7 yaş arasında tamamlanmaktadır. Bu dönemde tespit edilemeyen göz bozuklukları (hipermetrop, miyop, astigmat) kalıcı göz tembelliğine (ambliyopi) yol açabilir.</p><br/><p>Hiçbir şikayeti olmasa bile çocukların 1 yaşında, 3 yaşında ve ilkokula başlamadan önce mutlaka uzman bir göz hekimi tarafından muayene edilmesi kritik bir önem taşır. Erken konulan teşhislerle şaşılık veya tembellik gibi durumlar basit kapama tedavileri ve doğru gözlük kullanımıyla tamamen tedavi edilebilmektedir.</p>",
      date: "05 Nisan 2026",
      image: "/images/megagoz-cocuk-goz-tedavisi.webp"
    },
    {
      id: 4,
      title: "Katarakt Belirtileri ve Modern Tedavisi",
      slug: "katarakt-belirtileri-ve-tedavisi",
      excerpt: "Yaşa bağlı görme kayıplarının en sık nedeni olan kataraktın dikişsiz fako cerrahisi ile çok kısa sürede tedavisi.",
      content: "<p>Katarakt, gözün içinde bulunan ve görmemizi sağlayan doğal merceğin zamanla saydamlığını kaybederek matlaşmasıdır. Yaşlılık en sık görülen neden olsa da, travma, diyabet veya doğumsal nedenlerle de ortaya çıkabilir.</p><br/><p>Tek ve kesin tedavisi cerrahidir. Kliniğimizdeyse uyguladığımız FAKO (Fakoemülsifikasyon) yöntemi ile iğnesiz, dikişsiz ve ağrısız bir cerrahi sunulmaktadır. Operasyon ortalama 10-15 dakika sürer ve hastaların göz içine yerleştirilen <strong>Akıllı Lensler (Trifokal Mercekler)</strong> sayesinde işlem sonrasında uzak, orta ve yakın mesafede gözlüksüz net görüş sağlanır.</p>",
      date: "28 Mart 2026",
      image: "/images/megagoz-tedavi-sonrasi.webp"
    },
    {
      id: 5,
      title: "Kuru Göz Sendromu Nasıl Geçer?",
      slug: "kuru-goz-sendromu",
      excerpt: "Bilgisayar başında uzun saatler harcayanların kabusu kuru göz için alınabilecek pratik önlemler ve damla tedavileri.",
      content: "<p>Kuru göz hastalığı, gözyaşının yeterli miktarda üretilmemesi veya kalitesinin bozulması sonucunda batma, yanma, kızarıklık ve bulanık görme gibi şikayetlerle kendini gösterir.</p><br/><p>Özellikle klimalı ortamlar, ekran karşısında uzun süre vakit geçirmek ve yetersiz su tüketimi bu durumu tetiklemektedir. Suni gözyaşı damlaları ile tedavi edilebilen kuru göz rahatsızlığı için kliniğimizde özel tetkik cihazlarıyla gözyaşı kaliteniz ölçülmekte ve size en uygun medikal tedavi protokolü oluşturulmaktadır.</p>",
      date: "20 Mart 2026",
      image: "/images/slide2.png"
    },
    {
      id: 6,
      title: "Akıllı Lens (Göz İçi Mercek) Kimlere Uygulanır?",
      slug: "akilli-lens-tedavisi",
      excerpt: "Yakın, uzağı ve orta mesafeyi bir arada görmek isteyen hastalar için trifokal mercek cerrahisinin avantajları.",
      content: "<p>Halk arasında Akıllı Lens olarak bilinen Trifokal (Üç Odaklı) Mercekler, katarakt ameliyatı sırasında veya yüksek göz numaralarından kurtulmak isteyen 40 yaş üstü bireylerde göz içine yerleştirilen yapay merceklerdir.</p><br/><p>Bu lensler, tek bir noktaya değil; uzağa (araba kullanırken), orta mesafeye (bilgisayar kullanırken) ve yakına (kitap okurken) odaklanma sağlayarak hastanın gözlük veya kontakt lens kullanma ihtiyacını tamamen ortadan kaldırır. Detaylı mercek seçimi kliniğimizde yapılan topografik ölçümler ve doktor muayenesi ile uzman cerrahlarımız tarafından belirlenmektedir.</p>",
      date: "15 Mart 2026",
      image: "/images/slide3.png"
    }
  ];
  return posts.find(p => p.slug === slug);
};

export default function BlogDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const t = useTranslations("BlogInner");
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Detail Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-end pb-16 pt-32">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/80 to-[#0a111a]/20 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-[1000px] relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#ecbb3f] hover:text-white font-bold text-sm tracking-wider uppercase mb-8 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
               <ArrowLeft size={16} />
            </div>
            {t("back_to_blog")}
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#ecbb3f]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-[#ecbb3f]" />
              <span>{t("written_by")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1000px] -mt-8 relative z-20 pb-24 flex flex-col lg:flex-row gap-12">
         
         <div className="lg:w-[70%]">
           <article className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
             
             {/* Excerpt Lead */}
             <div className="text-xl md:text-2xl font-bold text-[#1f313f] leading-relaxed mb-10 border-l-4 border-[#ecbb3f] pl-6 py-2">
                {post.excerpt}
             </div>

             {/* Dynamic Rich Text Content */}
             <div 
               className="prose prose-lg prose-slate max-w-none 
                 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-[#1f313f] prose-h3:mb-4 prose-h3:mt-8
                 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                 prose-strong:text-[#1f313f] prose-strong:font-bold
                 prose-ul:list-disc prose-ul:pl-5 prose-li:text-gray-600 prose-li:mb-2"
               dangerouslySetInnerHTML={{ __html: post.content }}
             />

             {/* Footer Actions */}
             <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("share")}</span>
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
            <div className="bg-[#1f313f] rounded-3xl p-8 border border-white/5 shadow-xl text-center">
               <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                 <User size={32} className="text-[#ecbb3f]" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{t("written_by").replace('Yazar: ', '')}</h3>
               <p className="text-gray-400 text-sm mb-6">Uzman doktorlarımız tarafından hazırlanan tıbbi içeriklerimiz, size en doğru sağlık bilgilerini sunmak için özenle derlenmektedir.</p>
               <Link href="/iletisim" className="inline-flex w-full items-center justify-center gap-2 bg-[#ecbb3f] text-[#1f313f] font-bold py-3 px-6 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider">
                  Bize Ulaşın <ArrowRight size={16} />
               </Link>
            </div>
         </div>

      </div>
      
      <Footer />
    </main>
  );
}
