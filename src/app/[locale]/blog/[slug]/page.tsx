import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Mock veri tabanı simülasyonu
const getBlogPostBySlug = (slug: string, locale: string) => {
  const posts_tr = [
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

  const posts_en = [
    {
       id: 1,
       title: "What is Laser Eye Surgery?",
       slug: "what-is-laser-eye-surgery",
       excerpt: "All the details about modern laser operations treating myopia, hypermetropia, and astigmatism in seconds.",
       content: `
         <p>Laser eye surgery, widely known as "eye scratching" among the public and refractive surgery in the medical world, is a highly safe and technological procedure applied to permanently correct refractive errors such as myopia, hypermetropia, and astigmatism.</p>
         <br/>
         <h3>How is Laser Eye Surgery Applied?</h3>
         <p>Thanks to developing medical technology, laser procedures are now completed in seconds using entirely painless and bladeless methods. These treatments, which are based on reshaping the cornea (the transparent layer at the very front of the eye), are specifically chosen according to the patient's eye structure, corneal thickness, and eye prescription. The most commonly used techniques are:</p>
         <ul>
           <li><strong>No-Touch:</strong> Based on the principle of reshaping the cornea remotely with laser beams without any device contact touching the eye. It is very safe for patients with thin corneas.</li>
           <li><strong>Femto-LASIK:</strong> Also known as bladeless laser. The flap creation process is entirely computer-controlled with a femtosecond laser, and then the refractive error is corrected with an excimer laser. The healing process is limited to a few hours.</li>
           <li><strong>SMILE Laser:</strong> With the lens extraction technique, a lens-shaped piece of tissue is separated from the cornea with a laser and removed through a tiny incision without creating a flap. Ideal for athletes and occupational groups at risk of impact.</li>
         </ul>
         <br/>
         <h3>What are the Advantages? Why Should I Have Laser?</h3>
         <ul>
           <li><strong>Quick Recovery:</strong> A significant clearing in vision begins immediately after the procedure. In LASIK and SMILE techniques, patients can return to their daily lives the very next day.</li>
           <li><strong>Painless Process:</strong> Since it is performed using only anesthetic eye drops, no pain, ache, or needle sensation is experienced.</li>
           <li><strong>Permanent Solution:</strong> Offers the opportunity to get rid of glasses and contact lens dependence for a lifetime. It eliminates infection risks that may arise from contact lens use.</li>
           <li><strong>Long-Term Economic Contribution:</strong> Considering the lifetime costs spent on changing eyeglass lenses, frames, and lens solutions every year, laser treatment is a one-time and much more logical investment.</li>
         </ul>
         <br/>
         <p>After a detailed eye scan to be performed by our expert physicians with 3D topography devices, whether your eye is suitable for laser surgery is definitively determined. You can book a detailed appointment at our clinic to get rid of your glasses, engage in sports freely, swim, and see the world clearly when you wake up in the morning.</p>
       `,
       date: "April 14, 2026",
       image: "/images/blog_laser_eye.png"
    },
    {
      id: 2,
      title: "Is It Possible to Change Eye Color?",
      slug: "eye-color-change",
      excerpt: "How eye color change with methods like keratopigmentation and lasers is strictly applied in the medical world.",
      content: "<p>Eye color aesthetics is one of the most curious topics in the medical world recently. At our clinic, the most innovative methods prioritizing patient safety are carefully evaluated.</p><br/><h3>Applied Technologies</h3><p>Each method, such as keratopigmentation (injecting bio-compatible biological color pigment by opening microscopic channels in the cornea) and wiping melanin pigment with laser, has its own advantages and risks. For example, in keratopigmentation surgery, a tunnel is opened into the cornea with a femtosecond laser, and dye in the selected color is given into this tunnel.</p><br/><p>These procedures must absolutely be performed by experienced corneal surgeons, under sterile operating room conditions, and after a highly detailed topography and intraocular pressure examination. Not every patient's eye anatomy may be suitable for aesthetic surgery.</p>",
      date: "April 10, 2026",
      image: "/images/megagoz-katarakt-tedavisi.webp"
    },
    {
      id: 3,
      title: "Importance of Eye Health in Children",
      slug: "eye-health-in-children",
      excerpt: "Early diagnosis of problems like lazy eye and strabismus determines your child's future educational life.",
      content: `
        <p>Vision development in childhood is largely completed between the ages of 0-7. The brain learns to see at these ages. Minor refractive errors (hypermetropia, myopia, astigmatism) or focusing problems that cannot be detected during this critical period can lead to permanent <strong>lazy eye (amblyopia)</strong>. Lazy eye is a serious syndrome that becomes almost impossible to treat after the age of 10.</p>
        <br/>
        <h3>Tablet and Phone Addiction: The Digital Myopia Epidemic</h3>
        <p>Today, the fact that children spend a large majority of their time looking very closely at tablet, phone, and computer screens triggers pseudo-myopia, termed the "Myopia Epidemic" in the medical world. Spasms of intraocular muscles caused by constantly focusing near convert into permanent myopia diseases in advanced ages.</p>
        <br/>
        <h3>Don't Forget the 20-20-20 Rule</h3>
        <p>To limit the time children spend looking at screens and rest their eyes, the 20-20-20 rule is golden: Every 20 minutes, for 20 seconds, focusing on an object 20 feet (about 6 meters) away relaxes the eye muscles.</p>
        <br/>
        <h3>When Should an Examination Be Done?</h3>
        <ul>
          <li>Immediately after birth (ROP examination especially for premature babies)</li>
          <li>First comprehensive screening at age 1</li>
          <li>Visual acuity examination at ages 3 and 5</li>
          <li>Just before starting primary school</li>
        </ul>
        <p>Even if there are no complaints, regular examination of children by an expert pediatric ophthalmologist is one of the most fundamental duties of parents.</p>
      `,
      date: "April 05, 2026",
      image: "/images/blog_child_eye.png"
    },
    {
      id: 4,
      title: "Cataract Symptoms and Modern Treatment",
      slug: "cataract-symptoms-and-treatment",
      excerpt: "The most frequent cause of age-related vision loss, treated in a very short time with seamless phaco surgery.",
      content: "<p>Cataract is the condition where the natural lens inside the eye, which allows us to see, loses its transparency over time, creating a feeling of looking through frosted glass. Although aging is the most common cause, trauma, intense ultraviolet light, and diabetic disorders can also accelerate the process.</p><br/><p>There is no temporary treatment for cataract with medication or glasses; the only and definitive solution is surgery. With the high-tech PHACO (Phacoemulsification) method applied in our clinic, a needle-free, seamless, and painless surgery is offered. The operation takes an average of 10 minutes. Thanks to the <strong>premium intraocular lenses</strong> placed inside the patient's eyes, not only is the cataract cured, but other refractive errors such as astigmatism and myopia can also be reduced to zero.</p>",
      date: "March 28, 2026",
      image: "/images/megagoz-tedavi-sonrasi.webp"
    },
    {
      id: 5,
      title: "How to Cure Dry Eye Syndrome?",
      slug: "how-to-cure-dry-eye",
      excerpt: "Practical measures and drop treatments that can be taken for dry eye, the persistent nightmare of heavy computer users.",
      content: "<p>Dry eye disease manifests itself with stinging, burning, a feeling of sand in the eye, and sudden blurring as a result of insufficient tear production or the deterioration of its content to the point where it cannot prevent evaporation.</p><br/><p>Especially air-conditioned environments, office workers, and those who spend their hours focusing in front of screens are under great risk. Artificial tear drops provide temporary relief, but in our clinic, your tear quality and the working capacity of your Meibomian glands are measured with special diagnostic devices. Radical solutions are provided by applying the newest medical protocols such as <strong>IPL Laser Treatment</strong> or punctal plugs aimed at unblocking obstructed ducts.</p>",
      date: "March 20, 2026",
      image: "/images/slide2.png"
    },
    {
      id: 6,
      title: "Who Is Eligible for Smart Lenses?",
      slug: "who-is-eligible-for-smart-lenses",
      excerpt: "Advantages and eligibility conditions of trifocal (smart) intraocular lens surgery providing sparkling vision at all distances.",
      content: `
        <p>Trifocal Lenses, publicly known as Smart Lenses, are typically artificial technological lenses placed in lieu of the opaque eye lens during cataract surgery. Today, they are applied not only to cataract patients but also to individuals over the age of 40 experiencing high myopia, hypermetropia, and presbyopia (age-related inability to see near) under the name of "Clear Lens Exchange".</p>
        <br/>
        <h3>Opening the Doors to a Glasses-Free Life</h3>
        <p>The greatest feature of smart lenses is that they provide focus not just at a single focal point, but simultaneously far (while driving, at the cinema), intermediate (while using a computer, working in the kitchen), and near (while reading a book, looking at a phone). Through this, the patient can easily complete over 90% of the tasks in their daily life without any glasses support.</p>
        <br/>
        <h3>Who Is It Not Suitable For?</h3>
        <p>A smart lens is not a suitable treatment for every eye. Different monofocal or EDOF (extended depth of focus) lens alternatives should be evaluated in our patients under the following conditions:</p>
        <ul>
          <li>Those with advanced macular degeneration.</li>
          <li>Those experiencing glaucoma (eye pressure) and associated optic nerve damage.</li>
          <li>Keratoconus patients possessing a very irregular and asymmetric corneal structure.</li>
          <li>Occupational groups such as long-haul truck drivers who constantly work in dark environments and at night (against the possibility of light reflections).</li>
        </ul>
        <br/>
        <p>Prior to this operation, which will radically transform your quality of life from top to bottom, your eye topography, endothelial cell count, and optical biometrics are scrutinized in detail with the world's most advanced measurement devices in our clinic. Our expert surgeons will recommend the most flawless lens type for your eye structure.</p>
      `,
      date: "March 15, 2026",
      image: "/images/blog_smart_lens.png"
    }
  ];

  return locale === "en" ? posts_en.find(p => p.slug === slug) : posts_tr.find(p => p.slug === slug);
};

import { use } from "react";

export default function BlogDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = use(params);
  const t = useTranslations("BlogInner");
  const post = getBlogPostBySlug(resolvedParams.slug, resolvedParams.locale);

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
               <h3 className="text-xl font-bold text-white mb-2">{resolvedParams.locale === "en" ? "MegaGöz Medical Team" : "MegaGöz Medikal Kadrosu"}</h3>
               <p className="text-gray-400 text-sm mb-6">
                 {resolvedParams.locale === "en" 
                   ? "Our medical content prepared by our expert doctors is carefully compiled to offer you the most accurate health information." 
                   : "Uzman doktorlarımız tarafından hazırlanan tıbbi içeriklerimiz, size en doğru sağlık bilgilerini sunmak için özenle derlenmektedir."}
               </p>
               <Link href="/iletisim" className="inline-flex w-full items-center justify-center gap-2 bg-[#ecbb3f] text-[#162f5d] font-bold py-3 px-6 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider">
                  {resolvedParams.locale === "en" ? "CONTACT US" : "BİZE ULAŞIN"} <ArrowRight size={16} />
               </Link>
            </div>
         </div>

      </div>
      
      <Footer />
    </main>
  );
}
