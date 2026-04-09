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
        <p>Lazer göz ameliyatı, halk arasındaki yaygın adıyla "göz çizdirme" operasyonu, tıp dünyasındaki adıyla refraktif cerrahi, miyop, hipermetrop ve astigmat gibi kırma kusurlarını kalıcı olarak düzeltmek amacıyla uygulanan son derece güvenli ve teknolojik bir işlemdir.</p>
        <br/>
        <h3>Lazer Göz Ameliyatı Nasıl Uygulanır?</h3>
        <p>Gelişen tıp teknolojisi sayesinde lazer işlemleri artık saniyeler içinde, tamamen ağrısız ve bıçaksız yöntemlerle tamamlanmaktadır. Korneanın (gözün en önündeki saydam tabaka) yeniden şekillendirilmesi esasına dayanan bu tedaviler, hastanın göz yapısına, kornea kalınlığına ve göz numarasına göre özel olarak seçilir. En yaygın kullanılan teknikler şunlardır:</p>
        <ul>
          <li><strong>No-Touch (Göze Dokunulmadan):</strong> Göze herhangi bir cihaz teması olmadan, lazer ışınlarının uzaktan korneayı şekillendirmesi prensibine dayanır. İnce kornealı hastalarda oldukça güvenlidir.</li>
          <li><strong>Femto-LASIK:</strong> Bıçaksız lazer olarak da bilinir. Kapakçık (flep) oluşturma işlemi tamamen bilgisayar kontrollü femtosaniye lazer ile yapılır ve ardından kırma kusuru excimer lazer ile düzeltilir. İyileşme süreci birkaç saat ile sınırlıdır.</li>
          <li><strong>SMILE Lazer:</strong> Lens extraksiyonu tekniğiyle, kapakçık oluşturulmadan kornea içinden mercek şeklinde bir doku parçasının lazerle ayrılıp küçük bir kesiden çıkarılmasıdır. Sporcular ve darbe riski taşıyan meslek grupları için idealdir.</li>
        </ul>
        <br/>
        <h3>Avantajları Nelerdir? Neden Lazer Olmalıyım?</h3>
        <ul>
          <li><strong>Hızlı İyileşme:</strong> İşlemden hemen sonra görüşte belirgin bir netleşme başlar. LASIK ve SMILE tekniklerinde hastalar ertesi gün işlerine ve günlük yaşamlarına dönebilir.</li>
          <li><strong>Ağrısız Süreç:</strong> Sadece anestezik (uyuşturucu) göz damlası kullanılarak yapıldığından herhangi bir ağrı, sızı veya iğne hissi yaşanmaz.</li>
          <li><strong>Kalıcı Çözüm:</strong> Gözlük ve kontakt lens bağımlılığından ömür boyu kurtulma imkanı sunar. Kontakt lens kullanımından doğabilecek enfeksiyon risklerini ortadan kaldırır.</li>
          <li><strong>Uzun Vadeli Ekonomik Katkı:</strong> Her yıl değişen gözlük camları, çerçeveler ve lens solüsyonlarına harcanan ömür boyu maliyetler düşünüldüğünde, lazer tedavisi tek seferlik ve çok daha mantıklı bir yatırımdır.</li>
        </ul>
        <br/>
        <p>Uzman hekimlerimiz tarafından 3 boyutlu topografi cihazlarıyla yapılacak detaylı bir göz taraması sonrasında, gözünüzün lazer cerrahisine uygun olup olmadığı kesin olarak belirlenmektedir. Gözlüklerinizden kurtulmak ve özgürce spora, denize girmek, sabah uyandığınızda dünyayı net görmek için kliniğimizden detaylı randevu alabilirsiniz.</p>
      `,
      date: "14 Nisan 2026",
      image: "/images/blog_laser_eye.png"
    },
    {
      id: 2,
      title: "Göz Rengi Değiştirmek Mümkün Mü?",
      slug: "goz-rengi-degistirme",
      excerpt: "Keratopigmentasyon ve lazer gibi yöntemlerle göz rengi değişimi tıp dünyasında nasıl uygulanıyor?",
      content: "<p>Göz rengi estetiği, son yıllarda tıp dünyasının en çok merak edilen konularından biridir. Kliniğimizde, hastalarımızın güvenliğini ön planda tutan en yenilikçi yöntemler özenle değerlendirilmektedir.</p><br/><h3>Uygulanan Teknolojiler</h3><p>Keratopigmentasyon (korneaya mikroskobik kanallar açılarak biyo-uyumlu biyolojik renk pigmenti enjeksiyonu) ve lazerle melanin pigmenti silme gibi yöntemlerin her birinin kendi içinde avantajları ve riskleri bulunmaktadır. Örneğin keratopigmentasyon ameliyatında korneanın içine femtosaniye lazer ile bir tünel açılır ve bu tünele seçilen renkte boya verilir.</p><br/><p>Bu operasyonların mutlaka deneyimli kornea cerrahları tarafından, steril ameliyathane şartlarında ve çok detaylı bir topografi ile göz tansiyonu muayenesi sonrasında uygulanması şarttır. Her hastanın göz anatomisi estetik cerrahiye uygunluk göstermeyebilir.</p>",
      date: "10 Nisan 2026",
      image: "/images/megagoz-katarakt-tedavisi.webp"
    },
    {
      id: 3,
      title: "Çocuklarda Göz Sağlığının Önemi ve Miyopi Salgını",
      slug: "cocuklarda-goz-sagligi",
      excerpt: "Göz tembelliği ve şaşılık gibi problemlerin erken teşhisi, çocuğunuzun gelecekteki eğitim hayatını ve görüş kalitesini belirler.",
      content: `
        <p>Çocukluk çağındaki görme gelişimi büyük oranda 0-7 yaş arasında tamamlanmaktadır. Beyin bu yaşlarda görmeyi öğrenir. Bu kritik dönemde tespit edilemeyen minik göz bozuklukları (hipermetrop, miyop, astigmat) veya odaklanma sorunları kalıcı <strong>göz tembelliğine (ambliyopi)</strong> yol açabilir. Göz tembelliği 10 yaşından sonra tedavisi neredeyse imkansız hale gelen ciddi bir sendromdur.</p>
        <br/>
        <h3>Tablet ve Telefon Bağımlılığı: Dijital Miyopi Salgını</h3>
        <p>Günümüzde çocukların zamanlarının büyük bir çoğunluğunu tablet, telefon ve bilgisayar ekranlarına çok yakından bakarak geçirmesi, tıp dünyasında "Miyopi Salgını" (Pseudomyopia) olarak adlandırılan yalancı miyopu tetiklemektedir. Göz içi kaslarının sürekli yakına odaklanmaktan kaynaklı spazm geçirmesi, ilerleyen yaşlarda kalıcı miyop hastalıklarına dönüşmektedir.</p>
        <br/>
        <h3>20-20-20 Kuralını Unutmayın</h3>
        <p>Çocukların ekran başında geçirdiği vakitleri sınırlandırmak ve gözleri dinlendirmek için 20-20-20 kuralı altın değerindedir: Her 20 dakikada bir, 20 saniye boyunca, 20 fit (yaklaşık 6 metre) uzağa odaklanmak göz kaslarını rahatlatır.</p>
        <br/>
        <h3>Ne Zaman Muayene Olunmalı?</h3>
        <ul>
          <li>Doğumdan hemen sonra (Özellikle prematüre bebeklerde ROP muayenesi)</li>
          <li>1 yaşında tam kapsamlı ilk tarama</li>
          <li>3 ve 5 yaşlarında görme keskinliği muayenesi</li>
          <li>İlkokula başlamadan hemen önce</li>
        </ul>
        <p>Hiçbir şikayeti olmasa bile çocukların düzenli olarak uzman bir pediatrik göz hekimi tarafından muayene edilmesi ebeveynlerin en temel görevlerinden biridir.</p>
      `,
      date: "05 Nisan 2026",
      image: "/images/blog_child_eye.png"
    },
    {
      id: 4,
      title: "Katarakt Belirtileri ve Modern Tedavisi",
      slug: "katarakt-belirtileri-ve-tedavisi",
      excerpt: "Yaşa bağlı görme kayıplarının en sık nedeni olan kataraktın dikişsiz fako cerrahisi ile çok kısa sürede tedavisi.",
      content: "<p>Katarakt, gözün içinde bulunan ve görmemizi sağlayan doğal merceğin zamanla saydamlığını kaybederek buzlu cam arkasından bakıyormuş hissiyatı yaratmasıdır. Yaşlılık en sık görülen neden olsa da, travma, yoğun ultraviyole ışık ve diyabetik rahatsızlıklar da süreci hızlandırabilir.</p><br/><p>Kataraktın ilaçla veya gözlükle geçici bir tedavisi yoktur, tek ve kesin çözüm cerrahidir. Kliniğimizde uyguladığımız yüksek teknoloji FAKO (Fakoemülsifikasyon) yöntemi ile iğnesiz, dikişsiz ve ağrısız bir cerrahi sunulmaktadır. Operasyon ortalama 10 dakika sürer. Hastaların göz içine yerleştirilen <strong>premium göz içi mercekler</strong> sayesinde katarakttan kurtulmakla kalınmaz, aynı zamanda astigmat, miyop gibi diğer göz kırma problemleri de sıfırlanabilmektedir.</p>",
      date: "28 Mart 2026",
      image: "/images/megagoz-tedavi-sonrasi.webp"
    },
    {
      id: 5,
      title: "Kuru Göz Sendromu Nasıl Geçer?",
      slug: "kuru-goz-sendromu",
      excerpt: "Bilgisayar başında uzun saatler harcayanların kabusu kuru göz için alınabilecek pratik önlemler ve damla tedavileri.",
      content: "<p>Kuru göz hastalığı, gözyaşının yeterli miktarda üretilmemesi veya içeriğinin buharlaşmayı engelleyemeyecek kadar bozulması sonucunda batma, yanma, kum kaçmış hissi ve ani bulanıklaşmalar ile kendini gösterir.</p><br/><p>Özellikle klimalı ortamlar, ofis çalışanları ve ekran karşısında odaklanarak saatlerini geçirenler büyük risk altındadır. Suni gözyaşı damlaları geçici rahatlama sağlasa da kliniğimizde özel tetkik cihazlarıyla gözyaşı kaliteniz ve Meibomius bezlerinizin çalışma kapasitesi ölçülmekte, tıkalı kanalları açmaya yönelik <strong>IPL Lazer Tedavisi</strong> veya punktum tıkaçları gibi en yeni medikal protokoller uygulanarak kök çözümler sağlanmaktadır.</p>",
      date: "20 Mart 2026",
      image: "/images/slide2.png"
    },
    {
      id: 6,
      title: "Akıllı Lens (Göz İçi Mercek) Kimlere Uygulanır?",
      slug: "akilli-lens-tedavisi",
      excerpt: "Yakından uzağa tüm mesafelerde pırıl pırıl bir görüş sağlayan trifokal (akıllı) mercek cerrahisinin avantajları ve uygunluk şartları.",
      content: `
        <p>Halk arasında Akıllı Lens olarak bilinen Trifokal (Üç Odaklı) Mercekler, genellikle katarakt ameliyatı sırasında matlaşmış göz merceğinin yerine yerleştirilen yapay teknolojik lenslerdir. Günümüzde sadece katarakt hastalarına değil, yüksek miyop, hipermetrop ve presbiyopi (yaşa bağlı yakını görememe) sorunu olan 40 yaş üstü bireylere de "Saydam Lens Değişimi" adıyla uygulanmaktadır.</p>
        <br/>
        <h3>Gözlüksüz Bir Hayatın Kapıları Açılıyor</h3>
        <p>Akıllı lenslerin en büyük özelliği tek bir odak noktasına değil; aynı anda uzağa (araba kullanırken, sinemada), orta mesafeye (bilgisayar kullanırken, mutfakta çalışırken) ve yakına (kitap okurken, telefona bakarken) odaklanma sağlayabilmeleridir. Bu sayede hasta, günlük yaşantısındaki işlemlerin %90'ından fazlasını hiçbir gözlük desteği olmadan rahatça tamamlar.</p>
        <br/>
        <h3>Kimler İçin Uygun Değildir?</h3>
        <p>Akıllı lens her göz için uygun bir tedavi değildir. Aşağıdaki durumlara sahip hastalarımızda farklı tek odaklı veya EDOF (uzatılmış odaklı) lens alternatifleri değerlendirilmelidir:</p>
        <ul>
          <li>İleri derece sarı nokta hastalığı (Makula dejenerasyonu) bulunanlar.</li>
          <li>Göz tansiyonu (Glokom) ve buna bağlı optik sinir hasarı yaşayanlar.</li>
          <li>Çok düzensiz ve asimetrik kornea yapısına sahip olan keratokonus hastaları.</li>
          <li>Sürekli karanlık ortamlarda ve gece uzun yol şoförlüğü yapan meslek grupları (Işık yansımaları ihtimaline karşı).</li>
        </ul>
        <br/>
        <p>Hayat kalitenizi baştan aşağı değiştirecek olan bu operasyondan önce, kliniğimizde dünyanın en gelişmiş ölçüm cihazlarıyla göz topografiniz, endotel sayımınız ve optik biyometrileriniz detaylı bir şekilde analiz edilir. Uzman cerrahlarımız size göz yapınız için en kusursuz lens türünü önerecektir.</p>
      `,
      date: "15 Mart 2026",
      image: "/images/blog_smart_lens.png"
    }
  ];
  return posts.find(p => p.slug === slug);
};

import { use } from "react";

export default function BlogDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = use(params);
  const t = useTranslations("BlogInner");
  const post = getBlogPostBySlug(resolvedParams.slug);

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
             <div className="text-xl md:text-2xl font-bold text-[#162f5d] leading-relaxed mb-10 border-l-4 border-[#ecbb3f] pl-6 py-2">
                {post.excerpt}
             </div>

             {/* Dynamic Rich Text Content */}
             <div 
               className="prose prose-lg prose-slate max-w-none 
                 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-[#162f5d] prose-h3:mb-4 prose-h3:mt-8
                 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                 prose-strong:text-[#162f5d] prose-strong:font-bold
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
            <div className="bg-[#162f5d] rounded-3xl p-8 border border-white/5 shadow-xl text-center">
               <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                 <User size={32} className="text-[#ecbb3f]" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{t("written_by").replace('Yazar: ', '')}</h3>
               <p className="text-gray-400 text-sm mb-6">Uzman doktorlarımız tarafından hazırlanan tıbbi içeriklerimiz, size en doğru sağlık bilgilerini sunmak için özenle derlenmektedir.</p>
               <Link href="/iletisim" className="inline-flex w-full items-center justify-center gap-2 bg-[#ecbb3f] text-[#162f5d] font-bold py-3 px-6 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider">
                  Bize Ulaşın <ArrowRight size={16} />
               </Link>
            </div>
         </div>

      </div>
      
      <Footer />
    </main>
  );
}
