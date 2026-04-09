export interface TreatmentItem {
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  excerpt: {
    tr: string;
    en: string;
  };
  content?: {
    tr: string;
    en: string;
  };
  image: string;
}

export interface TreatmentCategory {
  id: string; // Used as the parent slug (e.g., 'katarakt')
  title: {
    tr: string;
    en: string;
  };
  icon: string;
  items: TreatmentItem[];
}

export const TREATMENTS_DATA: TreatmentCategory[] = [
  {
    id: "katarakt",
    title: { tr: "Katarakt", en: "Cataract" },
    icon: "Eye",
    items: [
      { slug: "katarakt-cerrahisi", title: { tr: "Katarakt Cerrahisi", en: "Cataract Surgery" }, excerpt: { tr: "Göz içi merceğinin saydamlığını yitirmesinin kesin tedavisi.", en: "Definitive treatment for the loss of transparency of the intraocular lens." }, image: "/images/slide1.png" },
      { slug: "fako-yontemiyle-katarakt-tedavisi", title: { tr: "Fako Yöntemiyle Katarakt Tedavisi", en: "Phacoemulsification Cataract Treatment" }, excerpt: { tr: "Dikişsiz ve modern lazer teknolojisiyle katarakt tedavisi.", en: "Cataract treatment with seamless modern laser technology." }, image: "/images/slide2.png" },
      { slug: "uc-odakli-lensler", title: { tr: "Üç Odaklı Lensler (Trifokal)", en: "Trifocal Lenses" }, excerpt: { tr: "Uzak, yakın ve orta mesafede net görüş sağlayan akıllı lensler.", en: "Smart lenses providing clear vision at near, intermediate, and far distances." }, image: "/images/slide3.png" },
      { slug: "uc-odakli-torik-lensler", title: { tr: "Üç Odaklı Torik Lensler", en: "Trifocal Toric Lenses" }, excerpt: { tr: "Astigmatizmayı düzelten üç odaklı mercek çeşitleri.", en: "Trifocal lenses specifically designed to correct astigmatism." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: "tek-odakli-lensler", title: { tr: "Tek Odaklı Lensler (Monofokal)", en: "Monofocal Lenses" }, excerpt: { tr: "Seçilen tek bir odak noktasında kusursuz görüş imkanı.", en: "Perfect vision targeted at a single chosen focal point." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: "tek-odakli-torik-lensler", title: { tr: "Tek Odaklı Torik Lensler", en: "Monofocal Toric Lenses" }, excerpt: { tr: "Hem tek odaklı görüş sağlayan hem de astigmatı tedavi eden mercekler.", en: "Monofocal lenses that also treat astigmatism." }, image: "/images/megagoz-tedavi-sonrasi.webp" }
    ]
  },
  {
    id: "lazer-tedavisi",
    title: { tr: "Lazer Tedavisi", en: "Laser Treatment" },
    icon: "Sun",
    items: [
      { slug: "ilasik-goz-lazer-ameliyati", title: { tr: "ILasik – Göz Lazer Ameliyatı", en: "ILasik Laser Eye Surgery" }, excerpt: { tr: "Kişiye özel bıçaksız lazer tedavisi deneyimi.", en: "Personalized completely bladeless laser treatment experience." }, image: "/images/slide1.png" },
      { slug: "lasek-prk-no-touch-lazer", title: { tr: "LASEK / PRK / No Touch Lazer", en: "LASEK / PRK / No Touch Laser" }, excerpt: { tr: "Göze dokunulmadan sadece ışınla uygulanan lazer tedavisi.", en: "Laser treatment applied without touching the eye." }, image: "/images/slide2.png" },
      { slug: "argon-lazer-tedavisi", title: { tr: "Argon Lazer Tedavisi", en: "Argon Laser Treatment" }, excerpt: { tr: "Retina yırtıkları ve diyabetik göz hastalıklarına argon çözümü.", en: "Argon laser solutions for retinal tears and diabetic eye diseases." }, image: "/images/slide3.png" },
      { slug: "yag-lazer-tedavisi", title: { tr: "Yag Lazer Tedavisi", en: "YAG Laser Treatment" }, excerpt: { tr: "İkincil katarakt ve glokom gibi hastalıkların tedavisinde YAG lazer.", en: "YAG laser used for treating secondary cataracts and glaucoma." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: "goz-tansiyonunda-lazer-tedavisi-slt", title: { tr: "Göz Tansiyonunda Lazer Tedavisi – SLT", en: "SLT Laser Treatment for Glaucoma" }, excerpt: { tr: "Göz içi basıncını düşüren güvenilir lazer operasyonu.", en: "Reliable laser surgery that effectively lowers intraocular pressure." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" }
    ]
  },
  {
    id: "kontak-lens",
    title: { tr: "Kontak Lens", en: "Contact Lenses" },
    icon: "Circle",
    items: [
      { slug: "edof-akilli-lens-tedavileri", title: { tr: "EDOF Akıllı Lens Tedavileri", en: "EDOF Smart Lens Treatments" }, excerpt: { tr: "Uzatılmış odak derinliği sayesinde kusursuz kesintisiz görüş.", en: "Flawless contiguous vision thanks to extended depth of focus." }, image: "/images/megagoz-tedavi-sonrasi.webp" },
      { slug: "multifokal-lensler", title: { tr: "Multifokal Lensler", en: "Multifocal Lenses" }, excerpt: { tr: "Gözlük ihtiyacını tüm mesafelerde sıfıra indiren multifokal (çok odaklı) çözümler.", en: "Multifocal solutions that eliminate the need for glasses at all distances." }, image: "/images/slide1.png" },
      { slug: "fakik-goz-ici-lens-tedavisi", title: { tr: "Fakik Göz İçi Lens Tedavisi", en: "Phakic Intraocular Lens Treatment" }, excerpt: { tr: "Yüksek miyop ve hipermetrop hastaları için göz içi kalıcı lens tedavisi.", en: "Permanent intraocular lens treatment for high myopia and hyperopia patients." }, image: "/images/slide2.png" },
      { slug: "add-on-akilli-lens-tedavisi", title: { tr: "Add On Akıllı Lens Tedavisi", en: "Add-On Smart Lens Treatment" }, excerpt: { tr: "Daha önce ameliyat olmuş gözler için ek, yeni nesil mercek ilaveleri.", en: "Supplementary new generation lens additions for previously operated eyes." }, image: "/images/slide3.png" },
      { slug: "icl-goz-ici-lens-tedavisi", title: { tr: "ICL Göz İçi Lens Tedavisi", en: "ICL Intraocular Lenses" }, excerpt: { tr: "Kornea yapısı lazere uygun olmayanlar için devrimsel mercek.", en: "Revolutionary lens implants for corneas unsuitable for laser." }, image: "/images/megagoz-katarakt-tedavisi.webp" }
    ]
  },
  {
    id: "goz-norolojisi",
    title: { tr: "Göz Nörolojisi", en: "Neuro-Ophthalmology" },
    icon: "Activity",
    items: [
      { slug: "noro-oftalmoloji", title: { tr: "Nöro-Oftalmoloji", en: "Neuro-Ophthalmology" }, excerpt: { tr: "Göz ile beyin arasındaki sinir sistemi kaynaklı hastalıkların tedavisi.", en: "Treatment of diseases originating from the nervous system between the eye and brain." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" }
    ]
  },
  {
    id: "kornea-hastaliklari",
    title: { tr: "Kornea Hastalıkları", en: "Corneal Diseases" },
    icon: "Shield",
    items: [
      { slug: "crosslinking", title: { tr: "Crosslinking", en: "Crosslinking" }, excerpt: { tr: "Keratokonusun ilerlemesini durduran kornea çapraz bağ tedavisi.", en: "Corneal cross-linking treatment to stop the progression of keratoconus." }, image: "/images/megagoz-tedavi-sonrasi.webp" },
      { slug: "corneal-ring-implantasyonu", title: { tr: "Corneal Ring (Korneal Halka) İmplantasyonu", en: "Corneal Ring Implantation" }, excerpt: { tr: "Görüş kalitesini koruyan korneal içi halka uygulamaları.", en: "Intracorneal ring applications preserving vision quality." }, image: "/images/slide1.png" },
      { slug: "keratokonus", title: { tr: "Keratokonus", en: "Keratoconus" }, excerpt: { tr: "Korneanın incelerek sivrileşmesi ve güncel tanı-tedavi yolları.", en: "Thinning and bulging of the cornea, and current diagnostic-treatment pathways." }, image: "/images/slide2.png" },
      { slug: "kornea-ve-hastaliklari", title: { tr: "Kornea Ve Hastalıkları", en: "Cornea and its Diseases" }, excerpt: { tr: "Gözün en ön saydam tabakasında oluşan sayısız rahatsızlığın tedavisi.", en: "Treatment of numerous disorders in the anterior transparent layer of the eye." }, image: "/images/slide3.png" },
      { slug: "keratit", title: { tr: "Keratit", en: "Keratitis" }, excerpt: { tr: "Kornea iltihabına neden olan mikroorganizmalar ve iyileşme süreleri.", en: "Microorganisms causing corneal inflammation and recovery periods." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: "mikrokornea", title: { tr: "Mikrokornea", en: "Microcornea" }, excerpt: { tr: "Doğuştan gelen normalden küçük kornea yapısı sendromu.", en: "Congenital syndrome characterized by an abnormally small cornea." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: "konjonktiva", title: { tr: "Konjonktiva", en: "Conjunctiva" }, excerpt: { tr: "Gözün beyaz kısmını koruyan ince zarın tedavileri.", en: "Treatments focused on the thin membrane protecting the white of the eye." }, image: "/images/megagoz-tedavi-sonrasi.webp" }
    ]
  },
  {
    id: "glokom-tedavisi",
    title: { tr: "Glokom Tedavisi", en: "Glaucoma Treatment" },
    icon: "Target",
    items: [
      { slug: "goz-tansiyonu", title: { tr: "Göz Tansiyonu", en: "Glaucoma (Eye Pressure)" }, excerpt: { tr: "Göz sinirlerinin yüksek basınç nedeniyle hasar görmesinin önlenmesi.", en: "Preventing optic nerve damage caused by high intraocular pressure." }, image: "/images/slide1.png" }
    ]
  },
  {
    id: "sasilik-tedavisi",
    title: { tr: "Şaşılık Tedavisi", en: "Strabismus Treatment" },
    icon: "Maximize",
    items: [
      { slug: "sasilik-strabismus", title: { tr: "Şaşılık (Strabismus)", en: "Strabismus" }, excerpt: { tr: "Gözlerin paralel bakış açısını kaybetmesi ve etkili düzeltme ameliyatları.", en: "Loss of parallel eye alignment and effective corrective surgeries." }, image: "/images/slide2.png" }
    ]
  },
  {
    id: "uveit-tedavisi",
    title: { tr: "Üveit Tedavisi", en: "Uveitis Treatment" },
    icon: "Thermometer",
    items: [
      { slug: "uvea", title: { tr: "Üvea", en: "Uvea" }, excerpt: { tr: "Gözü besleyen damar tabakasının iltihabı ve bağışıklık tedavisi.", en: "Inflammation of the vascular layer feeding the eye, and immune treatment." }, image: "/images/slide3.png" }
    ]
  },
  {
    id: "goz-kapagi-estetigi",
    title: { tr: "Göz Kapağı Estetiği", en: "Eyelid Aesthetics" },
    icon: "Smile",
    items: [
      { slug: "goz-alti-torbalari-operasyonu", title: { tr: "Göz Altı Torbaları Operasyonu", en: "Under-Eye Bag Surgery" }, excerpt: { tr: "Bizi yorgun ve yaşlı gösteren torbalardan kalıcı olarak kurtulun.", en: "Permanently get rid of bags that make you look tired and old." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: "goz-cevresi-ve-goz-kapagi-estetigi", title: { tr: "Göz Çevresi Ve Göz Kapağı Estetiği", en: "Eyelid and Eye Surround Aesthetics" }, excerpt: { tr: "Alt ve üst kapak düşüklüklerinin radyofrekans veya lazerle gençleştirilmesi.", en: "Rejuvenation of upper and lower lid ptosis with radiofrequency or laser." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: "goz-kapagi-ameliyati", title: { tr: "Göz Kapağı Ameliyatı", en: "Blepharoplasty" }, excerpt: { tr: "Fazla deri ve yağ dokularının cerrahi olarak tamamen temizlenmesi.", en: "Complete surgical removal of excess skin and fat tissues." }, image: "/images/megagoz-tedavi-sonrasi.webp" },
      { slug: "goz-eti-pterjium", title: { tr: "Göz Eti (Pterjium)", en: "Pterygium" }, excerpt: { tr: "Güneşin ve tozun sebep olduğu korneaya yürüyen dokunun tedavisi.", en: "Treatment of corneal encroaching tissue caused by sun and dust." }, image: "/images/slide1.png" },
      { slug: "hareketli-goz-protez-ameliyati", title: { tr: "Hareketli Göz Protez Ameliyatı", en: "Movable Eye Prosthesis Surgery" }, excerpt: { tr: "Gerçek gibi duran ve hareket edebilen estetik yapay göz cerrahisi.", en: "Aesthetic artificial eye surgery that looks and moves naturally." }, image: "/images/slide2.png" }
    ]
  },
  {
    id: "cocuk-goz-sagligi",
    title: { tr: "Çocuk Göz Sağlığı", en: "Pediatric Eyecare" },
    icon: "Heart",
    items: [
      { slug: "cocuklarda-ve-bebeklerde-sasilik", title: { tr: "Çocuklarda Ve Bebeklerde Şaşılık", en: "Strabismus in Children and Babies" }, excerpt: { tr: "Erken teşhisle tam kontrol altına alınabilen şaşılaşma problemleri.", en: "Strabismus problems fully manageable with early diagnosis." }, image: "/images/slide3.png" },
      { slug: "cocuklarda-ve-bebeklerde-kirmizi-goz", title: { tr: "Çocuklarda Ve Bebeklerde Kırmızı Göz", en: "Red Eye in Children and Babies" }, excerpt: { tr: "Alerjik veya mikrobik göz içi hastalıklara hassas çözümler.", en: "Sensitive solutions to allergic or microbial intraocular diseases." }, image: "/images/megagoz-katarakt-tedavisi.webp" },
      { slug: "cocuklarda-ve-bebeklerde-kirma-kusurlari", title: { tr: "Çocuklarda Ve Bebeklerde Kırma Kusurları", en: "Refractive Errors in Children and Babies" }, excerpt: { tr: "Miyop, astigmat ve hipermetrop sorununun gelişim çağındaki yönetimi.", en: "Management of myopia, astigmatism, and hyperopia in the development phase." }, image: "/images/megagoz-cocuk-goz-tedavisi.webp" },
      { slug: "cocuklarda-ve-bebeklerde-katarakt", title: { tr: "Çocuklarda Ve Bebeklerde Katarakt", en: "Pediatric Cataracts" }, excerpt: { tr: "Göz merceğinin genetik veya travmatik yollarla bozulmasının pediatrik tedavisi.", en: "Pediatric treatment for genetic or traumatic deterioration of the eye lens." }, image: "/images/megagoz-tedavi-sonrasi.webp" },
      { slug: "cocuklarda-ve-bebeklerde-gozyasi-kanal-tikanikligi", title: { tr: "Çocuklarda Ve Bebeklerde Gözyaşı Kanal Tıkanıklığı", en: "Tear Duct Obstruction in Children and Babies" }, excerpt: { tr: "Sürekli sulanma yapan tıkalı kanalların masaj, sondalama veya tüplerle açılması.", en: "Opening blocked channels using massages, probing, or intubation." }, image: "/images/slide1.png" },
      { slug: "cocuklarda-ve-bebeklerde-goz-tembelligi", title: { tr: "Çocuklarda Ve Bebeklerde Göz Tembelliği", en: "Amblyopia (Lazy Eye) in Children" }, excerpt: { tr: "Kapama egzersizleriyle çocukluk çağında çözülmesi gereken gelişim hatası.", en: "Developmental error needing resolution through patching exercises." }, image: "/images/slide2.png" },
      { slug: "cocuklarda-ve-bebeklerde-goz-kurulugu", title: { tr: "Çocuklarda Ve Bebeklerde Göz Kuruluğu", en: "Dry Eye in Children and Babies" }, excerpt: { tr: "Ekran kullanımı ve dijital yorgunluğun çocuklardaki sinsi belirtileri.", en: "Hidden symptoms of dry eye caused by screen usage and digital fatigue in children." }, image: "/images/slide3.png" }
    ]
  }
];
