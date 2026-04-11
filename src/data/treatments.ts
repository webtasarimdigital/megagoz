export interface TreatmentItem {
  slug: { tr: string; en: string };
  title: { tr: string; en: string };
  excerpt: { tr: string; en: string };
  content?: { tr: string; en: string };
  image: string;
}

export interface TreatmentCategory {
  id: string; // Internal stable ID
  slug: { tr: string; en: string };
  title: { tr: string; en: string };
  icon: string;
  image: string;
  items: TreatmentItem[];
}

export const TREATMENTS_DATA: TreatmentCategory[] = [
  {
    id: "katarakt",
    slug: { tr: "katarakt", en: "cataract" },
    title: { tr: "Katarakt", en: "Cataract" },
    icon: "Eye",
    image: "/images/megagoz-katarakt.webp",
    items: [
      { 
        slug: { tr: "katarakt-cerrahisi", en: "cataract-surgery" }, 
        title: { tr: "Katarakt Cerrahisi", en: "Cataract Surgery" }, 
        excerpt: { tr: "Göz içi merceğinin saydamlığını yitirmesinin kesin tedavisi.", en: "Definitive treatment for the loss of transparency of the intraocular lens." }, 
        image: "/images/megagoz-katarakt.webp",
        content: {
          tr: "<p class='mb-4'>Katarakt, göz bebeğinin arkasında bulunan ve görmeyi sağlayan doğal göz merceğinin saydamlığını kaybederek matlaşmasıdır. Başka bir deyişle görüşün, buğulanmış bir camın arkasından bakıyormuşçasına bozulmasıdır.</p><p class='mb-4'>Göz içindeki lens, ışığın retinaya odaklanmasına yardımcı olur. Yaşlanma, travma, diyabet veya diğer medikal durumlar nedeniyle lensteki proteinler yapısal olarak değişerek kümelenir. Bu kümelenmeler zamanla büyür ve lensi bulutlandırarak görüşü zorlaştırır.</p><h3 class='text-xl font-bold text-[#162f5d] mt-6 mb-3'>Katarakt Belirtileri Nelerdir?</h3><ul class='list-disc pl-5 space-y-2 mb-4 text-gray-600'><li>Görme netliğinde yavaş yavaş azalma, bulanık görme.</li><li>Renklerin soluklaşması veya sararması.</li><li>Işık hassasiyetinde artış, gece araç kullanırken farlardan rahatsızlık duyulması.</li><li>Işıkların etrafında haleler görülmesi.</li><li>Sık sık gözlük numarasının değişmesi.</li></ul><p class='mb-4'>Kliniğimizde Katarakt ameliyatı, damla anestezi ile ağrısız olarak gerçekleştirilmekte olup, en son teknoloji cihazlar sayesinde saniyeler içinde doğal merceğin alınarak yerine yapay akıllı merceğin (intraoküler lens) yerleştirilmesiyle tamamlanır.</p>",
          en: "<p class='mb-4'>Cataract is the clouding of the normally clear natural lens of the eye, which is located behind the pupil and is responsible for vision. In other words, vision deteriorates as if looking through a fogged-up window.</p><p class='mb-4'>The intraocular lens helps project light onto the retina. Due to aging, trauma, diabetes, or other medical conditions, the structural proteins of the lens begin to cluster. Over time, these clusters grow, clouding the lens and making vision difficult.</p><h3 class='text-xl font-bold text-[#162f5d] mt-6 mb-3'>What Are the Symptoms of Cataracts?</h3><ul class='list-disc pl-5 space-y-2 mb-4 text-gray-600'><li>Gradual decrease in visual clarity, blurred vision.</li><li>Fading or yellowing of colors.</li><li>Increased sensitivity to light, discomfort from headlights when driving at night.</li><li>Seeing halos around lights.</li><li>Frequent changes in eyeglass prescriptions.</li></ul><p class='mb-4'>In our clinic, cataract surgery is performed painlessly under drop anesthesia. With state-of-the-art equipment, the cloudy natural lens is removed within seconds and replaced with an artificial smart intraocular lens.</p>"
        }
      },
      { 
        slug: { tr: "fako-yontemiyle-katarakt-tedavisi", en: "phacoemulsification-cataract-treatment" }, 
        title: { tr: "Fako Yöntemiyle Katarakt Tedavisi", en: "Phacoemulsification Cataract Treatment" }, 
        excerpt: { tr: "Dikişsiz ve modern lazer teknolojisiyle katarakt tedavisi.", en: "Cataract treatment with seamless modern laser technology." }, 
        image: "/images/megagoz-katarakt-tedavisi.webp",
        content: {
          tr: "<p class='mb-4'>Fakoemülsifikasyon (FAKO) cerrahisi, kataraktın tedavisinde günümüzde altın standart haline gelmiş mikro cerrahi bir tekniktir. Ultrasaund (ses) dalgaları kullanılarak sertleşen ve matlaşan göz merceğinin, göz içinde küçük parçalara ayrılarak (emülsifikasyon) ve emilerek dışarı alınması prensibine dayanır.</p><p class='mb-4'>Fako yönteminin en büyük avantajı, sadece 1.5 - 2 mm lik çok ince bir kesi noktasından yapılabiliyor olmasıdır. Bu sayede ameliyat sırasında göze dikiş atılmasına gerek kalmaz ve iyileşme süreci inanılmaz derecede hızlanır.</p><h3 class='text-xl font-bold text-[#162f5d] mt-6 mb-3'>FAKO Yönteminin Avantajları</h3><ul class='list-disc pl-5 space-y-2 mb-4 text-gray-600'><li>Ağrısız ve dikişsiz operasyon imkanı.</li><li>Günübirlik cerrahi olup operasyon günü hasta taburcu edilir.</li><li>Çok küçük bir kesiden çalışıldığı için enfeksiyon riski en aza indirgenmiştir.</li><li>Operasyon sonrası görüş hızla toparlanır; günlük hayata dönüş hemen mümkündür.</li></ul>",
          en: "<p class='mb-4'>Phacoemulsification (Phaco) surgery is a microsurgical technique that is currently the gold standard in the treatment of cataracts. It relies on ultrasound waves breaking down the hardened, cloudy eye lens into tiny pieces inside the eye and then successfully vacuuming them out.</p><p class='mb-4'>The most significant advantage of the Phaco method is that it is performed through a tiny 1.5 - 2 mm micro-incision. Because of this small entry route, no stitches are necessary during surgery, and the recovery process is tremendously fast.</p><h3 class='text-xl font-bold text-[#162f5d] mt-6 mb-3'>Advantages of the Phaco Method</h3><ul class='list-disc pl-5 space-y-2 mb-4 text-gray-600'><li>Painless and stitch-free operational opportunity.</li><li>Outpatient care – patient can go home on the exact same day.</li><li>Minimized infection risks since the work focuses exclusively through a micro-incision.</li><li>Rapid restoration of sight, allowing for an immediate return to daily activities.</li></ul>"
        }
      },
      { 
        slug: { tr: "uc-odakli-lensler", en: "trifocal-lenses" }, 
        title: { tr: "Üç Odaklı Lensler (Trifokal)", en: "Trifocal Lenses" }, 
        excerpt: { tr: "Uzak, yakın ve orta mesafede net görüş sağlayan akıllı lensler.", en: "Smart lenses providing clear vision at near, intermediate, and far distances." }, 
        image: "/images/megagoz-kontak-lens.webp",
        content: {
          tr: "<p class='mb-4'>Halk arasında 'Akıllı Lens' veya 'Akıllı Mercek' olarak da bilinen Trifokal (üç odaklı) göz içi lensleri, gözlük veya lens bağımılığını tamamen ortadan kaldırmayı hedefleyen göz cerrahisinin ulaştığı en etkili yeniliklerindendir. Hem uzağı (araba kullanmak, televizyon seyretmek), hem orta mesafeyi (bilgisayar ekranı, gösterge paneli) hem de yakını (kitap okuma, telefona bakma) tek bir ameliyatla kalıcı olarak net görmenizi sağlar.</p><p class='mb-4'>Ömür boyu gözde kalan bu lensler, doğuştan sahip olduğumuz doğal merceğin yerini alır. Kataraktı olsun ya da olmasın, gözlük takmak istemeyen, veya numara bozuklukları lazere elverişli olmayan 40 yaş üstü kişilerde mükemmel sonuçlar sunar.</p><p class='mb-4'>Uzman hekimlerimiz ile yapılacak topografik göz tetkitleri sonrasında kornea kalınlığınız ve retina uyumunuz hesaplanarak, size özel üretilen Premium Trifokal lens ameliyathanemizde 10 dakika rekor sürede göz içerisine yerleştirilmektedir.</p>",
          en: "<p class='mb-4'>Trifocal intraocular lenses, widely known as 'Smart Lenses', represent one of the most effective innovations in eye surgery attempting to fully eliminate the patient's reliance on glasses or contact lenses. Through a single operation, they permanently bestow clear vision for long distances (driving, watching TV), intermediate distances (computer screens, dashboards), and near perspectives (reading, checking mobile phones).</p><p class='mb-4'>These lenses are surgically placed into the eye where they remain for life, replacing our naturally endowed eye lens. Whether the patient suffers from cataracts or not, it offers excellent results for people over 40 who refuse to wear glasses, or whose vision defect is incompatible with laser eye treatment.</p><p class='mb-4'>Following detailed topographic eye examinations by our expert physicians, your exact corneal thickness and retinal harmony are calculated. The bespoke Premium Trifocal lens is then placed intraocularly inside our operating room, within a record time frame of 10 minutes.</p>"
        }
      },
      { slug: { tr: "uc-odakli-torik-lensler", en: "trifocal-toric-lenses" }, title: { tr: "Üç Odaklı Torik Lensler", en: "Trifocal Toric Lenses" }, excerpt: { tr: "Astigmatizmayı düzelten üç odaklı mercek çeşitleri.", en: "Trifocal lenses specifically designed to correct astigmatism." }, image: "/images/megagoz-katarakt.webp" },
      { slug: { tr: "tek-odakli-lensler", en: "monofocal-lenses" }, title: { tr: "Tek Odaklı Lensler (Monofokal)", en: "Monofocal Lenses" }, excerpt: { tr: "Seçilen tek bir odak noktasında kusursuz görüş imkanı.", en: "Perfect vision targeted at a single chosen focal point." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: { tr: "tek-odakli-torik-lensler", en: "monofocal-toric-lenses" }, title: { tr: "Tek Odaklı Torik Lensler", en: "Monofocal Toric Lenses" }, excerpt: { tr: "Hem tek odaklı görüş sağlayan hem de astigmatı tedavi eden mercekler.", en: "Monofocal lenses that also treat astigmatism." }, image: "/images/megagoz-toric-lens.png" }
    ]
  },
  {
    id: "lazer-tedavisi",
    slug: { tr: "lazer-tedavisi", en: "laser-treatment" },
    title: { tr: "Lazer Tedavisi", en: "Laser Treatment" },
    icon: "Sun",
    image: "/images/megagoz-lazer-tedavisi,.webp",
    items: [
      { 
        slug: { tr: "ilasik-goz-lazer-ameliyati", en: "ilasik-laser-eye-surgery" }, 
        title: { tr: "ILasik – Göz Lazer Ameliyatı", en: "ILasik Laser Eye Surgery" }, 
        excerpt: { tr: "Kişiye özel bıçaksız lazer tedavisi deneyimi.", en: "Personalized completely bladeless laser treatment experience." }, 
        image: "/images/megagoz-lazer-tedavisi,.webp",
        content: {
          tr: "<p class='mb-4'>iLASIK (Intralase LASIK), lazer göz cerrahisi teknolojilerinin geldiği en gelişmiş, bıçaksız ve tamamen kişiye özel uygulamaları tanımlayan bir göz çizdirme metodudur. Standart LASIK yöntemindeki mikrokeratom denilen bıçak yerine, ameliyatın her iki aşaması da bilgisayar destekli tamamen lazer ışınları ile kusursuz bir şekilde tamamlanır.</p><p class='mb-4'>Tedavinin ilk aşamasında Wavescan (Dalga Cephesi) analiz sistemi kullanılarak gözünüzün adeta bir parmak izi haritası çıkarılır. Korneanızın yapısındaki tüm asimetrik hatalar ve kırma kusurları milimetrik hassasiyetle hesaplanarak göze gönderilecek olan lazer cihazının sistemine anlık olarak aktarılır.</p><h3 class='text-xl font-bold text-[#162f5d] mt-6 mb-3'>iLASIK Kimlere Uygulanabilir?</h3><p class='mb-4 text-gray-600'>- Miyop (uzağı görememe)</p><p class='mb-4 text-gray-600'>- Hipermetrop (yakını görememe)</p><p class='mb-4 text-gray-600'>- Astigmatizma sorunları olan,</p><p class='mb-4 text-gray-600'>- 18 yaşını doldurmuş, göz numarasında son 1 yılda değişiklik gözlemlenmeyen ve kornea kalınlığı uygun saptanan herkese %99 başarı oranı ile çok güvenli bir şekilde uygulanabilmektedir.</p>",
          en: "<p class='mb-4'>iLASIK (Intralase LASIK) constitutes the most advanced, completely bladeless, directly individualized methodology that describes the peak of laser eye surgery technologies. Rather than relying on a traditional microkeratome blade prevalent in standard LASIK procedures, both stages of the process are perfectly executed through precisely calculated computerized laser beams.</p><p class='mb-4'>In its primary stage, utilizing the proprietary Wavescan analysis system, a unique 'fingerprint' topography mapping of your eye is created. All asymmetric irregularities encompassing your cornea's refractive errors are meticulously mapped and then transferred seamlessly to the laser instrument array.</p><h3 class='text-xl font-bold text-[#162f5d] mt-6 mb-3'>Who Are Eligible for iLASIK?</h3><p class='mb-4 text-gray-600'>- Patients with myopia (nearsightedness).</p><p class='mb-4 text-gray-600'>- Patients with hyperopia (farsightedness).</p><p class='mb-4 text-gray-600'>- People struggling with astigmatism defects.</p><p class='mb-4 text-gray-600'>- Individuals older than 18 with historically stable prescriptions and adequate corneal depth can safely undergo the treatment showing extremely high 99% success rates.</p>"
        }
      },
      { slug: { tr: "lasek-prk-no-touch-lazer", en: "lasek-prk-no-touch-laser" }, title: { tr: "LASEK / PRK / No Touch Lazer", en: "LASEK / PRK / No Touch Laser" }, excerpt: { tr: "Göze dokunulmadan sadece ışınla uygulanan lazer tedavisi.", en: "Laser treatment applied without touching the eye." }, image: "/images/megagoz-tedavi-oncesi.webp" },
      { slug: { tr: "argon-lazer-tedavisi", en: "argon-laser-treatment" }, title: { tr: "Argon Lazer Tedavisi", en: "Argon Laser Treatment" }, excerpt: { tr: "Retina yırtıkları ve diyabetik göz hastalıklarına argon çözümü.", en: "Argon laser solutions for retinal tears and diabetic eye diseases." }, image: "/images/slide3.png" },
      { slug: { tr: "yag-lazer-tedavisi", en: "yag-laser-treatment" }, title: { tr: "Yag Lazer Tedavisi", en: "YAG Laser Treatment" }, excerpt: { tr: "İkincil katarakt ve glokom gibi hastalıkların tedavisinde YAG lazer.", en: "YAG laser used for treating secondary cataracts and glaucoma." }, image: "/images/slide1.png" },
      { slug: { tr: "goz-tansiyonunda-lazer-tedavisi-slt", en: "slt-laser-treatment-for-glaucoma" }, title: { tr: "Göz Tansiyonunda Lazer Tedavisi – SLT", en: "SLT Laser Treatment for Glaucoma" }, excerpt: { tr: "Göz içi basıncını düşüren güvenilir lazer operasyonu.", en: "Reliable laser surgery that effectively lowers intraocular pressure." }, image: "/images/megagoz-glukom-tedavisi.webp" }
    ]
  },
  {
    id: "kontak-lens",
    slug: { tr: "kontak-lens", en: "contact-lenses" },
    title: { tr: "Kontak Lens", en: "Contact Lenses" },
    icon: "Circle",
    image: "/images/megagoz-kontak-lens.webp",
    items: [
      { slug: { tr: "edof-akilli-lens-tedavileri", en: "edof-smart-lens-treatments" }, title: { tr: "EDOF Akıllı Lens Tedavileri", en: "EDOF Smart Lens Treatments" }, excerpt: { tr: "Uzatılmış odak derinliği sayesinde kusursuz kesintisiz görüş.", en: "Flawless contiguous vision thanks to extended depth of focus." }, image: "/images/megagoz-kontak-lens.webp" },
      { slug: { tr: "multifokal-lensler", en: "multifocal-lenses" }, title: { tr: "Multifokal Lensler", en: "Multifocal Lenses" }, excerpt: { tr: "Gözlük ihtiyacını tüm mesafelerde sıfıra indiren multifokal (çok odaklı) çözümler.", en: "Multifocal solutions that eliminate the need for glasses at all distances." }, image: "/images/megagoz-tedavi-sonrasi.webp" },
      { slug: { tr: "fakik-goz-ici-lens-tedavisi", en: "phakic-intraocular-lens-treatment" }, title: { tr: "Fakik Göz İçi Lens Tedavisi", en: "Phakic Intraocular Lens Treatment" }, excerpt: { tr: "Yüksek miyop ve hipermetrop hastaları için göz içi kalıcı lens tedavisi.", en: "Permanent intraocular lens treatment for high myopia and hyperopia patients." }, image: "/images/megagoz-katarakt.webp" },
      { slug: { tr: "add-on-akilli-lens-tedavisi", en: "add-on-smart-lens-treatment" }, title: { tr: "Add On Akıllı Lens Tedavisi", en: "Add-On Smart Lens Treatment" }, excerpt: { tr: "Daha önce ameliyat olmuş gözler için ek, yeni nesil mercek ilaveleri.", en: "Supplementary new generation lens additions for previously operated eyes." }, image: "/images/megagoz-lazer-tedavisi,.webp" },
      { slug: { tr: "icl-goz-ici-lens-tedavisi", en: "icl-intraocular-lenses" }, title: { tr: "ICL Göz İçi Lens Tedavisi", en: "ICL Intraocular Lenses" }, excerpt: { tr: "Kornea yapısı lazere uygun olmayanlar için devrimsel mercek.", en: "Revolutionary lens implants for corneas unsuitable for laser." }, image: "/images/slide3.png" }
    ]
  },
  {
    id: "goz-norolojisi",
    slug: { tr: "goz-norolojisi", en: "neuro-ophthalmology" },
    title: { tr: "Göz Nörolojisi", en: "Neuro-Ophthalmology" },
    icon: "Activity",
    image: "/images/megagoz-goz-norolojisi.webp",
    items: [
      { 
        slug: { tr: "noro-oftalmoloji", en: "neuro-ophthalmology-details" }, 
        title: { tr: "Nöro-Oftalmoloji", en: "Neuro-Ophthalmology" }, 
        excerpt: { tr: "Göz ile beyin arasındaki sinir sistemi kaynaklı hastalıkların tedavisi.", en: "Treatment of diseases originating from the nervous system between the eye and brain." }, 
        image: "/images/megagoz-goz-norolojisi.webp",
        content: {
          tr: "<p class='mb-4'>Nöro-Oftalmoloji, göz siniri, gözün kaslarını kontrol eden sinirler ve beyindeki görme yolları ile ilgili hastalıkların tanı ve tedavisini inceleyen özelleşmiş bilim dalıdır. Göz sadece dışarıdaki ışığı algılar, fakat 'görme' işlemi beynimizin oksipital lobunda (arka tarafında) gerçekleşir.</p><p class='mb-4'>Göz arkasındaki optik sinirin iltihapları (optik nevrit), iyi veya kötü huylu beyin tümörlerinin yol açtığı görme alanı kayıpları, MS (Multiple Skleroz) hastalığına bağlı göz bulguları bu branşın ana değerlendirme konularıdır.</p><p class='mb-4'>MegaGöz Tıp Merkezi bünyesindeki Nöro-Oftalmoloji kliniğimizde, Multidisipliner bir yaklaşımla, optik koherens tomografi (OCT) analizleri ve bilgisayarlı görme alanı sensör testleri uygulanarak karmaşık nörolojik bulguların doğru tanısı büyük bir titizlikle irdelenmektedir.</p>",
          en: "<p class='mb-4'>Neuro-ophthalmology constitutes a highly specialized field devoted directly to the evaluation, diagnosis, and clinical treatment of ocular complications arising heavily from the nervous system. The eye operates simply to collect light data; real 'vision' fundamentally gets processed deep inside the occipital lobe of the human brain.</p><p class='mb-4'>Core investigative responsibilities inside this branch cover inflammations along the optic nerve (optic neuritis), visual field blockages derived consequentially from malignant or benign brain tumors, or ocular presentations directly manifesting prominently observed multiple sclerosis (MS).</p><p class='mb-4'>At the MegaGöz Neuro-Ophthalmology clinic unit, drawing from a rigorous multi-disciplinary approach, our specialists conduct specialized optical coherence tomography (OCT) analyses and extensive computerized visual field sensor examinations to decrypt and remedy complex neurological ailments efficiently.</p>"
        }
      }
    ]
  },
  {
    id: "kornea-hastaliklari",
    slug: { tr: "kornea-hastaliklari", en: "corneal-diseases" },
    title: { tr: "Kornea Hastalıkları", en: "Corneal Diseases" },
    icon: "Shield",
    image: "/images/megagoz-kornea-tedavisi.jpg",
    items: [
      { 
        slug: { tr: "crosslinking", en: "crosslinking" }, 
        title: { tr: "Crosslinking (Keratokonus)", en: "Crosslinking" }, 
        excerpt: { tr: "Keratokonusun ilerlemesini durduran kornea çapraz bağ tedavisi.", en: "Corneal cross-linking treatment to stop the progression of keratoconus." }, 
        image: "/images/megagoz-kornea-tedavisi.jpg",
        content: {
          tr: "<p class='mb-4'>Keratokonus, gözün en dış saydam tabakası olan korneanın incelerek sivrileşmesi ve öne doğru uzamasıyla karakterize olan ilerleyici bir göz hastalığıdır. Tedavi edilmediği takdirde ileri derecede astigmatizmaya, devasa görüş kayıplarına ve hatta kornea nakline (keratoplasti) gidilmesine sebep olabilir.</p><p class='mb-4'>Korneal Crosslinking (Çapraz Bağ) tedavisi, keratokonus hastalığının durdurulmasında tıpta kabul görmüş dünyadaki en etkili birincil işlemdir. Uygulanan lokal anestezi sonrasında göze Riboflavin (B2 vitamini) damlatılıp Ultraviyole A ışını uygulanarak, gözün kollajen lif dokusunun sertleştirilmesi esasına dayanır.</p><p class='mb-4'>İşlem toplamda her bir göz için ortalama 30 dakika sürmektedir. Ultraviyole ile sertleşen kornea, sivrileşmesini tamamen durdurduğu için numara artışı engellenmiş olur.</p>",
          en: "<p class='mb-4'>Keratoconus is an aggressive progressive ocular ailment characterized extensively by the thinning, outward bulging, and extreme steepening of the transparent anterior cornea. If left structurally untreated across the timeline, it forces heavy astigmatism rates, dramatic visual decline, and significantly invokes the desperate need for a widespread corneal transplantation procedure (keratoplasty).</p><p class='mb-4'>In current medical consensus, Corneal Crosslinking strictly functions safely as the foremost effective operation for successfully halting expanding keratoconus decay. Implemented effortlessly through simple local drop anesthesia, the procedural essence counts dynamically on suffusing Vitamin B2 (Riboflavin) drops while simultaneously delivering controlled Ultraviolet A rays.</p><p class='mb-4'>Surgical application inherently consumes near approximately 30 minutes for each eye structure. Hardened rapidly under protective UV bounds, corneal fiber steepening effectively ceases; thus, shielding patients comprehensively against escalating visual deficiency gradients.</p>"
        }
      },
      { slug: { tr: "corneal-ring-implantasyonu", en: "corneal-ring-implantation" }, title: { tr: "Corneal Ring (Korneal Halka) İmplantasyonu", en: "Corneal Ring Implantation" }, excerpt: { tr: "Görüş kalitesini koruyan korneal içi halka uygulamaları.", en: "Intracorneal ring applications preserving vision quality." }, image: "/images/slide1.png" },
      { slug: { tr: "keratokonus", en: "keratoconus" }, title: { tr: "Keratokonus", en: "Keratoconus" }, excerpt: { tr: "Korneanın incelerek sivrileşmesi ve güncel tanı-tedavi yolları.", en: "Thinning and bulging of the cornea, and current diagnostic-treatment pathways." }, image: "/images/megagoz-kornea-tedavisi.jpg" },
      { slug: { tr: "kornea-ve-hastaliklari", en: "cornea-and-diseases" }, title: { tr: "Kornea Ve Hastalıkları", en: "Cornea and its Diseases" }, excerpt: { tr: "Gözün en ön saydam tabakasında oluşan sayısız rahatsızlığın tedavisi.", en: "Treatment of numerous disorders in the anterior transparent layer of the eye." }, image: "/images/slide3.png" },
      { slug: { tr: "keratit", en: "keratitis" }, title: { tr: "Keratit", en: "Keratitis" }, excerpt: { tr: "Kornea iltihabına neden olan mikroorganizmalar ve iyileşme süreleri.", en: "Microorganisms causing corneal inflammation and recovery periods." }, image: "/images/megagoz-glukom-tedavisi.webp" },
      { slug: { tr: "mikrokornea", en: "microcornea" }, title: { tr: "Mikrokornea", en: "Microcornea" }, excerpt: { tr: "Doğuştan gelen normalden küçük kornea yapısı sendromu.", en: "Congenital syndrome characterized by an abnormally small cornea." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: { tr: "konjonktiva", en: "conjunctiva" }, title: { tr: "Konjonktiva", en: "Conjunctiva" }, excerpt: { tr: "Gözün beyaz kısmını koruyan ince zarın tedavileri.", en: "Treatments focused on the thin membrane protecting the white of the eye." }, image: "/images/megagoz-tedavi-sonrasi.webp" }
    ]
  },
  {
    id: "glokom-tedavisi",
    slug: { tr: "glokom-tedavisi", en: "glaucoma-treatment" },
    title: { tr: "Glokom Tedavisi", en: "Glaucoma Treatment" },
    icon: "Target",
    image: "/images/megagoz-glukom-tedavisi.webp",
    items: [
      { slug: { tr: "goz-tansiyonu", en: "eye-pressure" }, title: { tr: "Göz Tansiyonu", en: "Glaucoma (Eye Pressure)" }, excerpt: { tr: "Göz sinirlerinin yüksek basınç nedeniyle hasar görmesinin önlenmesi.", en: "Preventing optic nerve damage caused by high intraocular pressure." }, image: "/images/megagoz-glukom-tedavisi.webp" }
    ]
  },
  {
    id: "sasilik-tedavisi",
    slug: { tr: "sasilik-tedavisi", en: "strabismus-treatment" },
    title: { tr: "Şaşılık Tedavisi", en: "Strabismus Treatment" },
    icon: "Maximize",
    image: "/images/megagoz-sasilik-tedavisi.webp",
    items: [
      { 
        slug: { tr: "sasilik-strabismus", en: "strabismus-details" }, 
        title: { tr: "Şaşılık (Strabismus)", en: "Strabismus" }, 
        excerpt: { tr: "Gözlerin paralel bakış açısını kaybetmesi ve etkili düzeltme ameliyatları.", en: "Loss of parallel eye alignment and effective corrective surgeries." }, 
        image: "/images/megagoz-sasilik-tedavisi.webp",
        content: {
          tr: "<p class='mb-4'>Şaşılık, her iki gözün aynı anda aynı yöne hedef alamadığı paralel hiza kayması durumudur. Bir göz düz bakarken diğer göz içeriye (ezotropya), dışarıya (ekzotropya), yukarıya veya aşağıya doğru kayabilir. Şaşılık sadece estetik olarak rahatsızlık vermez; tedavi edilmezse derinlik algısının kaybolmasına ve nihayetinde çocukluktan itibaren kalıcı göz tembelliğine (ambliyopi) zemin hazırlar.</p><p class='mb-4'>Kliniğimize sıklıkla doğuştan genetik yatkınlık veya travmalarla gelen bebek/çocuk hastalarımızın yanı sıra, sonradan kazanılmış nörolojik kaymalar yaşayan yetişkin hastalarımız da başvurmaktadır.</p><p class='mb-4'>MegaGöz'de Şaşılık tedavisi öncelikle kırma kusuru ise spesifik gözlüklerle veya prizmatik merceklerle giderilmeye çalışılır. Görme eksikliğinden uzak gelişen kas spazmlarına bağlı olan şaşılıklarda ise, çok minimal ve iz bırakmayan mikroskobik kas ameliyatlarıyla tek seansta dahi gözler başarıyla paralel pozisyonlarına kalıcı olarak kavuşturulur.</p>",
          en: "<p class='mb-4'>Strabismus defines a structural visual misalignment where both eyes simultaneously fail fundamentally to target the exact same directional focal spot together. As one eye remains aimed directly frontward, the opposing eye structure might drift aggressively inward (esotropia), outward (exotropia), upward, or downwards. Strabismus extends far beyond simple cosmetic annoyance; if overlooked medically, it decisively shreds innate depth perception gradients and systematically paves the fatal ground for amblyopia (irreversible lazy eye damage) right from infant childhood.</p><p class='mb-4'>Alongside toddlers facing strabismus derived explicitly from congenital genetic traits or early physical trauma scenarios, adult population groups undergoing late onset neurological alignment regressions also routinely visit our clinic blocks.</p><p class='mb-4'>At MegaGöz, Strabismus treatments primarily commence analytically through corrective functional eyeglasses mapped meticulously with prismatic gradients. Conversely, when strabismus originates entirely from structural muscular disparity regardless of refractive limits, our highly esteemed experts perform minimally invasive microscopic muscular retraction and elongation operations—often stabilizing fully synchronized parallel ocular alignments permanently inside just a single dedicated surgical window.</p>"
        }
      }
    ]
  },
  {
    id: "uveit-tedavisi",
    slug: { tr: "uveit-tedavisi", en: "uveitis-treatment" },
    title: { tr: "Üveit Tedavisi", en: "Uveitis Treatment" },
    icon: "Thermometer",
    image: "/images/megagoz-uveit-tedavisi.jpg",
    items: [
      { slug: { tr: "uvea", en: "uvea" }, title: { tr: "Üvea", en: "Uvea" }, excerpt: { tr: "Gözü besleyen damar tabakasının iltihabı ve bağışıklık tedavisi.", en: "Inflammation of the vascular layer feeding the eye, and immune treatment." }, image: "/images/megagoz-uveit-tedavisi.jpg" }
    ]
  },
  {
    id: "goz-kapagi-estetigi",
    slug: { tr: "goz-kapagi-estetigi", en: "eyelid-aesthetics" },
    title: { tr: "Göz Kapağı Estetiği", en: "Eyelid Aesthetics" },
    icon: "Smile",
    image: "/images/megagoz-goz-kapagi-tedavisi.jpg",
    items: [
      { slug: { tr: "goz-alti-torbalari-operasyonu", en: "under-eye-bag-surgery" }, title: { tr: "Göz Altı Torbaları Operasyonu", en: "Under-Eye Bag Surgery" }, excerpt: { tr: "Bizi yorgun ve yaşlı gösteren torbalardan kalıcı olarak kurtulun.", en: "Permanently get rid of bags that make you look tired and old." }, image: "/images/megagoz-goz-kapagi-tedavisi.jpg" },
      { slug: { tr: "goz-cevresi-ve-goz-kapagi-estetigi", en: "eye-surround-and-eyelid-aesthetics" }, title: { tr: "Göz Çevresi Ve Göz Kapağı Estetiği", en: "Eyelid and Eye Surround Aesthetics" }, excerpt: { tr: "Alt ve üst kapak düşüklüklerinin radyofrekans veya lazerle gençleştirilmesi.", en: "Rejuvenation of upper and lower lid ptosis with radiofrequency or laser." }, image: "/images/megagoz-tedavi-oncesi.webp" },
      { slug: { tr: "goz-kapagi-ameliyati", en: "blepharoplasty" }, title: { tr: "Göz Kapağı Ameliyatı", en: "Blepharoplasty" }, excerpt: { tr: "Fazla deri ve yağ dokularının cerrahi olarak tamamen temizlenmesi.", en: "Complete surgical removal of excess skin and fat tissues." }, image: "/images/megagoz-goz-kapagi-tedavisi.jpg" },
      { slug: { tr: "goz-eti-pterjium", en: "pterygium" }, title: { tr: "Göz Eti (Pterjium)", en: "Pterygium" }, excerpt: { tr: "Güneşin ve tozun sebep olduğu korneaya yürüyen dokunun tedavisi.", en: "Treatment of corneal encroaching tissue caused by sun and dust." }, image: "/images/megagoz-kornea-tedavisi.jpg" },
      { slug: { tr: "hareketli-goz-protez-ameliyati", en: "movable-eye-prosthesis-surgery" }, title: { tr: "Hareketli Göz Protez Ameliyatı", en: "Movable Eye Prosthesis Surgery" }, excerpt: { tr: "Gerçek gibi duran ve hareket edebilen estetik yapay göz cerrahisi.", en: "Aesthetic artificial eye surgery that looks and moves naturally." }, image: "/images/slide2.png" }
    ]
  },
  {
    id: "cocuk-goz-sagligi",
    slug: { tr: "cocuk-goz-sagligi", en: "pediatric-eyecare" },
    title: { tr: "Çocuk Göz Sağlığı", en: "Pediatric Eyecare" },
    icon: "Heart",
    image: "/images/megagoz-cocuk-goz-tedavisi.webp",
    items: [
      { slug: { tr: "cocuklarda-ve-bebeklerde-sasilik", en: "strabismus-in-children-and-babies" }, title: { tr: "Çocuklarda Ve Bebeklerde Şaşılık", en: "Strabismus in Children and Babies" }, excerpt: { tr: "Erken teşhisle tam kontrol altına alınabilen şaşılaşma problemleri.", en: "Strabismus problems fully manageable with early diagnosis." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: { tr: "cocuklarda-ve-bebeklerde-kirmizi-goz", en: "red-eye-in-children-and-babies" }, title: { tr: "Çocuklarda Ve Bebeklerde Kırmızı Göz", en: "Red Eye in Children and Babies" }, excerpt: { tr: "Alerjik veya mikrobik göz içi hastalıklara hassas çözümler.", en: "Sensitive solutions to allergic or microbial intraocular diseases." }, image: "/images/megagoz-cocuk-goz-tedavisi2.webp" },
      { slug: { tr: "cocuklarda-ve-bebeklerde-kirma-kusurlari", en: "refractive-errors-in-children-and-babies" }, title: { tr: "Çocuklarda Ve Bebeklerde Kırma Kusurları", en: "Refractive Errors in Children and Babies" }, excerpt: { tr: "Miyop, astigmat ve hipermetrop sorununun gelişim çağındaki yönetimi.", en: "Management of myopia, astigmatism, and hyperopia in the development phase." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: { tr: "cocuklarda-ve-bebeklerde-katarakt", en: "pediatric-cataracts" }, title: { tr: "Çocuklarda Ve Bebeklerde Katarakt", en: "Pediatric Cataracts" }, excerpt: { tr: "Göz merceğinin genetik veya travmatik yollarla bozulmasının pediatrik tedavisi.", en: "Pediatric treatment for genetic or traumatic deterioration of the eye lens." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: { tr: "cocuklarda-ve-bebeklerde-gozyasi-kanal-tikanikligi", en: "tear-duct-obstruction-in-children-and-babies" }, title: { tr: "Çocuklarda Ve Bebeklerde Gözyaşı Kanal Tıkanıklığı", en: "Tear Duct Obstruction in Children and Babies" }, excerpt: { tr: "Sürekli sulanma yapan tıkalı kanalların masaj, sondalama veya tüplerle açılması.", en: "Opening blocked channels using massages, probing, or intubation." }, image: "/images/slide1.png" },
      { slug: { tr: "cocuklarda-ve-bebeklerde-goz-tembelligi", en: "lazy-eye-in-children" }, title: { tr: "Çocuklarda Ve Bebeklerde Göz Tembelliği", en: "Amblyopia (Lazy Eye) in Children" }, excerpt: { tr: "Kapama egzersizleriyle çocukluk çağında çözülmesi gereken gelişim hatası.", en: "Developmental error needing resolution through patching exercises." }, image: "/images/megagoz-cocuk-goz-tembelligi.jpg" },
      { slug: { tr: "cocuklarda-ve-bebeklerde-goz-kurulugu", en: "dry-eye-in-children-and-babies" }, title: { tr: "Çocuklarda Ve Bebeklerde Göz Kuruluğu", en: "Dry Eye in Children and Babies" }, excerpt: { tr: "Ekran kullanımı ve dijital yorgunluğun çocuklardaki sinsi belirtileri.", en: "Hidden symptoms of dry eye caused by screen usage and digital fatigue in children." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" }
    ]
  }
];
