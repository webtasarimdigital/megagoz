// ─────────────────────────────────────────────────────────────
// MegaGöz çok branşlı yapı — branş verileri (DEMO)
// Göz branşının hizmetleri mevcut TREATMENTS_DATA'dan gelir;
// diğer branşların hizmetleri burada tanımlıdır.
// Not: Görseller demo amaçlı Unsplash'tan gelir, yayına alınmadan
// önce kurumun kendi çekimleriyle değiştirilmelidir.
// ─────────────────────────────────────────────────────────────

export type BranchId = "goz" | "medikal-estetik" | "sac-ekimi" | "dis";

export interface BranchService {
  slug: string;
  title: string;
  excerpt: string;
  /** Detay sayfasında kullanılacak kısa bölümler */
  body?: { heading: string; text: string }[];
  duration?: string;
  recovery?: string;
}

export interface Branch {
  id: BranchId;
  slug: string;
  name: string;
  shortName: string;
  /** Menü ve kartlarda kullanılan tek satırlık tanım */
  tagline: string;
  /** Branş ana sayfası hero başlığı (iki parça: düz + altın vurgu) */
  heroTitle: [string, string];
  heroText: string;
  /** Branşa özgü ince vurgu rengi — CTA'lar her zaman kurum altını (#ecbb3f) kalır */
  accent: string;
  icon: "Eye" | "Sparkles" | "Feather" | "Smile";
  image: string;
  imageAlt: string;
  secondaryImage: string;
  services: BranchService[];
  highlights: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  /** Formdaki konu listesi */
  formTopics: string[];
}

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BRANCHES: Branch[] = [
  {
    id: "goz",
    slug: "goz",
    name: "Göz Sağlığı",
    shortName: "Göz",
    tagline: "Katarakt, akıllı lens, lazer ve tüm göz hastalıkları",
    heroTitle: ["Göz sağlığınız", "emin ellerde."],
    heroText:
      "MegaGöz'ün kurucu uzmanlığı. Katarakt ve akıllı lens cerrahisinden lazer tedavilerine, çocuk göz sağlığından retina hastalıklarına kadar tüm göz hizmetleri.",
    accent: "#06b6d4",
    icon: "Eye",
    image: "/images/slide2.webp",
    imageAlt: "MegaGöz göz muayenesi",
    secondaryImage: "/images/megagoz-katarakt-tedavisi.webp",
    services: [], // TREATMENTS_DATA'dan beslenir
    highlights: [],
    process: [],
    faqs: [],
    formTopics: ["Katarakt / Akıllı Lens", "Lazer Tedavisi", "Göz Muayenesi", "Çocuk Göz Sağlığı", "Diğer"],
  },
  {
    id: "medikal-estetik",
    slug: "medikal-estetik",
    name: "Medikal Estetik",
    shortName: "Medikal Estetik",
    tagline: "Botoks, dolgu, cilt yenileme ve gençleştirme uygulamaları",
    heroTitle: ["Doğal görünüm,", "hekim imzasıyla."],
    heroText:
      "Yüz hatlarınıza uygun, abartısız ve kişiye özel planlanan medikal estetik uygulamaları. Her işlem, hekim muayenesi ve ayrıntılı analizle başlar.",
    accent: "#d6a2ad",
    icon: "Sparkles",
    image: u("photo-1552693673-1bf958298935"),
    imageAlt: "Medikal estetik cilt bakımı uygulaması",
    secondaryImage: u("photo-1728727267814-792db55ce678", 1200),
    services: [
      {
        slug: "botoks",
        title: "Botoks",
        excerpt: "Mimik çizgilerini yumuşatan, doğal ifadeyi koruyan uygulama.",
        duration: "15–20 dk",
        recovery: "Aynı gün",
        body: [
          { heading: "Botoks nedir?", text: "Botulinum toksini, mimik kaslarını geçici olarak gevşeterek alın, kaş arası ve göz çevresindeki dinamik çizgileri yumuşatır. Doğru dozda uygulandığında yüz ifadesi korunur." },
          { heading: "Kimler için uygundur?", text: "Mimik çizgilerinden şikâyet eden, gebelik veya emzirme dönemi dışında olan ve hekim muayenesinde uygun bulunan yetişkinler için planlanır." },
        ],
      },
      { slug: "dolgu", title: "Dolgu Uygulamaları", excerpt: "Dudak, elmacık ve çene hattında hacim ve denge.", duration: "30–45 dk", recovery: "1–2 gün" },
      { slug: "mezoterapi", title: "Mezoterapi", excerpt: "Cildin ihtiyaç duyduğu vitamin ve aktiflerin doğrudan uygulanması.", duration: "30 dk", recovery: "Aynı gün" },
      { slug: "prp", title: "PRP", excerpt: "Kişinin kendi kanından elde edilen plazma ile cilt yenileme.", duration: "45 dk", recovery: "Aynı gün" },
      { slug: "cilt-yenileme", title: "Cilt Yenileme", excerpt: "Leke, gözenek ve ton eşitsizliğine yönelik protokoller.", duration: "45–60 dk", recovery: "1–3 gün" },
      { slug: "ip-askilama", title: "İp Askılama", excerpt: "Cerrahi olmadan yüz ve boyun hattında toparlanma.", duration: "45–60 dk", recovery: "3–5 gün" },
    ],
    highlights: [
      "Her işlem öncesi hekim muayenesi ve yüz analizi",
      "Onaylı ürünler, seri ve lot numarası kaydı",
      "Steril işlem odaları ve tıp merkezi güvencesi",
      "Göz kapağı estetiğinde göz hekimlerimizle ortak değerlendirme",
    ],
    process: [
      { title: "Ön Görüşme", text: "Beklentileriniz ve sağlık geçmişiniz dinlenir." },
      { title: "Yüz Analizi", text: "Hekim, oranlara uygun kişisel plan hazırlar." },
      { title: "Uygulama", text: "Steril ortamda, konforlu bir seansla yapılır." },
      { title: "Kontrol", text: "İki hafta içinde sonuç birlikte değerlendirilir." },
    ],
    faqs: [
      { q: "Sonuçlar doğal görünür mü?", a: "Planlama yüz oranlarınıza göre yapılır; hedef, abartısız ve ifadenizi koruyan bir sonuçtur." },
      { q: "İşlem sonrası günlük hayatıma dönebilir miyim?", a: "Botoks ve mezoterapi gibi uygulamaların çoğunda aynı gün işinize dönebilirsiniz. Her işlem için hekiminiz özel öneriler verir." },
      { q: "Göz çevresi uygulamalarını kim yapıyor?", a: "Göz çevresine yönelik uygulamalar, gerekli durumlarda göz hekimlerimizle birlikte değerlendirilir." },
    ],
    formTopics: ["Botoks", "Dolgu", "Cilt Yenileme", "Mezoterapi / PRP", "Diğer"],
  },
  {
    id: "sac-ekimi",
    slug: "sac-ekimi",
    name: "Saç Ekimi",
    shortName: "Saç Ekimi",
    tagline: "FUE, DHI, sakal-kaş ekimi ve saç dökülmesi tedavileri",
    heroTitle: ["Saç çizginiz,", "size özel tasarlanır."],
    heroText:
      "Hekim kontrolünde planlanan FUE ve DHI saç ekimi, sakal ve kaş ekimi ile saç dökülmesine yönelik destek tedavileri. Doğal görünüm için her greft tek tek planlanır.",
    accent: "#c9a27e",
    icon: "Feather",
    image: u("photo-1643837833100-8b2ebd7127bc"),
    imageAlt: "Saç ekimi öncesi saçlı deri değerlendirmesi",
    secondaryImage: u("photo-1512663150964-d8f43c899f76", 1200),
    services: [
      {
        slug: "fue-sac-ekimi",
        title: "FUE Saç Ekimi",
        excerpt: "Greftlerin tek tek alınıp açılan kanallara yerleştirildiği yöntem.",
        duration: "6–8 saat",
        recovery: "7–10 gün",
        body: [
          { heading: "FUE yöntemi nedir?", text: "Follicular Unit Extraction; ense bölgesindeki saç köklerinin mikromotorla tek tek alınması ve seyrek bölgeye açılan kanallara yerleştirilmesidir. İz bırakmayan ve en yaygın kullanılan tekniktir." },
          { heading: "Kimler için uygundur?", text: "Donör bölgesi yeterli olan, saç dökülmesi belirli bir düzeye ulaşmış kadın ve erkek hastalar için uygundur. Uygunluk, hekim muayenesi ve saç analizi ile belirlenir." },
        ],
      },
      { slug: "dhi-sac-ekimi", title: "DHI Saç Ekimi", excerpt: "Choi kalemiyle kanal açmadan, sık ve yönlü ekim.", duration: "6–8 saat", recovery: "7–10 gün" },
      { slug: "sakal-ekimi", title: "Sakal ve Bıyık Ekimi", excerpt: "Seyrek ya da boş bölgelerde doğal sakal hattı.", duration: "4–5 saat", recovery: "5–7 gün" },
      { slug: "kas-ekimi", title: "Kaş Ekimi", excerpt: "Yüz ifadesine uygun kalıcı kaş tasarımı.", duration: "2–3 saat", recovery: "5–7 gün" },
      { slug: "kadin-sac-ekimi", title: "Kadın Saç Ekimi", excerpt: "Traşsız teknikle, saç çizgisi ve tepe bölgesinde.", duration: "5–7 saat", recovery: "7–10 gün" },
      { slug: "sac-mezoterapisi-prp", title: "Saç Mezoterapisi & PRP", excerpt: "Saç dökülmesini yavaşlatan ve kökleri güçlendiren destek.", duration: "30 dk", recovery: "Aynı gün" },
    ],
    highlights: [
      "Operasyon planlaması ve saç çizgisi hekim tarafından yapılır",
      "Kan tahlili ve dermatolojik ön değerlendirme",
      "Tıp merkezi bünyesinde steril operasyon ortamı",
      "12 aylık sonuç takibi ve fotoğraflı kontroller",
    ],
    process: [
      { title: "Saç Analizi", text: "Donör bölge ve dökülme derecesi incelenir." },
      { title: "Tasarım", text: "Yüz oranlarına uygun saç çizgisi çizilir." },
      { title: "Operasyon", text: "Lokal anestezi altında, tek seansta yapılır." },
      { title: "12 Ay Takip", text: "Yıkama, kontrol ve sonuç fotoğrafları." },
    ],
    faqs: [
      { q: "Saç ekimi ağrılı mı?", a: "İşlem lokal anestezi altında yapılır. Anestezi uygulaması dışında işlem sırasında genellikle ağrı hissedilmez." },
      { q: "Sonuçlar ne zaman görülür?", a: "Ekilen saçlar ilk aylarda dökülür (şok dökülme), 3–4. aydan itibaren çıkmaya başlar; nihai sonuç 12. ay civarında değerlendirilir." },
      { q: "Kaç greft gerekir?", a: "Greft sayısı, açıklık derecesi ve donör kapasitesine göre muayenede belirlenir." },
    ],
    formTopics: ["FUE / DHI Saç Ekimi", "Sakal / Kaş Ekimi", "Kadın Saç Ekimi", "Saç Dökülmesi Tedavisi", "Diğer"],
  },
  {
    id: "dis",
    slug: "dis",
    name: "Ağız ve Diş Sağlığı",
    shortName: "Diş",
    tagline: "İmplant, gülüş tasarımı, ortodonti ve genel diş tedavileri",
    heroTitle: ["Sağlıklı dişler,", "kendinden emin gülüş."],
    heroText:
      "İmplant ve estetik diş hekimliğinden ortodontiye, çocuk diş hekimliğinden kanal tedavisine kadar ağız ve diş sağlığının tüm alanlarında uzman kadro.",
    accent: "#5ec2b7",
    icon: "Smile",
    image: u("photo-1663755489920-5e09f66d011a"),
    imageAlt: "Diş hekimi muayenesi",
    secondaryImage: u("photo-1629909613654-28e377c37b09", 1200),
    services: [
      {
        slug: "implant",
        title: "İmplant Tedavisi",
        excerpt: "Eksik dişlerin yerine kalıcı ve doğal görünümlü çözüm.",
        duration: "1–2 seans",
        recovery: "2–3 gün",
        body: [
          { heading: "İmplant nedir?", text: "Eksik diş bölgesine yerleştirilen titanyum vida ve üzerine yapılan protezle doğal dişe en yakın fonksiyon ve görünüm sağlanır." },
          { heading: "Kimler için uygundur?", text: "Kemik yapısı yeterli olan ve genel sağlık durumu uygun yetişkinlere planlanır. Uygunluk, 3D tomografi ve hekim muayenesiyle belirlenir." },
        ],
      },
      { slug: "gulus-tasarimi", title: "Gülüş Tasarımı", excerpt: "Yüz hatlarınıza uyumlu, dijital olarak planlanan gülüş.", duration: "2–3 seans", recovery: "Aynı gün" },
      { slug: "zirkonyum-lamina", title: "Zirkonyum & Lamina", excerpt: "Estetik kaplamalarla renk ve form düzeltmesi.", duration: "2–3 seans", recovery: "Aynı gün" },
      { slug: "ortodonti", title: "Ortodonti & Şeffaf Plak", excerpt: "Teller veya şeffaf plaklarla diş dizilimi.", duration: "6–18 ay", recovery: "—" },
      { slug: "dis-beyazlatma", title: "Diş Beyazlatma", excerpt: "Ofis tipi beyazlatma ile tek seansta belirgin sonuç.", duration: "60 dk", recovery: "Aynı gün" },
      { slug: "cocuk-dis-hekimligi", title: "Çocuk Diş Hekimliği", excerpt: "Çocuklara özel, korkutmayan ilk diş deneyimi.", duration: "30 dk", recovery: "Aynı gün" },
    ],
    highlights: [
      "Dijital ağız içi tarama ve 3D planlama",
      "Her alanda uzman diş hekimi kadrosu",
      "Sterilizasyon ve izlenebilirlik protokolleri",
      "Tedavi sonrası düzenli kontrol programı",
    ],
    process: [
      { title: "Muayene", text: "Ağız içi muayene ve gerekli görüntüleme." },
      { title: "Tedavi Planı", text: "Seçenekler, süre ve maliyet net olarak paylaşılır." },
      { title: "Tedavi", text: "Konforlu seanslarla planlanan tedavi yapılır." },
      { title: "Kontrol", text: "Düzenli kontrollerle sonuç korunur." },
    ],
    faqs: [
      { q: "İmplant tedavisi ne kadar sürer?", a: "İmplantın yerleştirilmesi tek seansta yapılır; kemikle kaynaşma süreci genellikle 2–3 ay sürer, ardından kalıcı diş takılır." },
      { q: "Gülüş tasarımı kaç seansta tamamlanır?", a: "Dijital planlama ve prova dahil çoğunlukla 2–3 seansta tamamlanır." },
      { q: "Çocuklar için ilk diş muayenesi ne zaman yapılmalı?", a: "İlk dişin çıkmasıyla ya da en geç 1 yaşında ilk kontrolün yapılması önerilir." },
    ],
    formTopics: ["İmplant", "Gülüş Tasarımı / Estetik", "Ortodonti", "Genel Muayene", "Diğer"],
  },
];

export const getBranch = (slug: string) => BRANCHES.find((b) => b.slug === slug);

/** Kurum geneli görseller (demo) */
export const CORPORATE_IMAGES = {
  interior: "/images/megagoz-clinic-interior.webp",
  building: "/images/megagoz.webp",
  consultation: u("photo-1777331903190-341a3dd0441b", 1400),
};
