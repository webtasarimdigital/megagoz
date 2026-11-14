// ─────────────────────────────────────────────────────────────
// MegaGöz çok branşlı yapı — branş verileri (DEMO)
// Göz branşının hizmetleri mevcut TREATMENTS_DATA'dan gelir;
// diğer branşların hizmetleri burada tanımlıdır.
// Not: Görseller demo amaçlı Unsplash'tan gelir, yayına alınmadan
// önce kurumun kendi çekimleriyle değiştirilmelidir. Tıbbi metinler
// genel bilgilendirme amaçlıdır ve hekim onayından geçmelidir.
// ─────────────────────────────────────────────────────────────

import { BRANCH_TEXT_EN } from "./branches.en";

export type BranchId = "goz" | "medikal-estetik" | "sac-ekimi" | "dis";

export interface BranchService {
  slug: string;
  title: string;
  excerpt: string;
  /** Detay sayfası içerik bölümleri */
  body: { heading: string; text: string }[];
  /** Kimler için uygundur — madde listesi */
  suitable: string[];
  /** Öne çıkan avantajlar */
  benefits: string[];
  duration: string;
  anesthesia: string;
  sessions: string;
  recovery: string;
  faqs: { q: string; a: string }[];
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
  /** Branş sayfası hero slaytları (orijinal göz hero'su ile aynı yapı) */
  slides: { image: string; title: string; sub: string }[];
  /** Branş tanıtım bölümü */
  intro: { title: [string, string]; text: string[]; facts: [string, string][] };
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
  /* ═════════════════════════════ GÖZ ═════════════════════════════ */
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
    slides: [
      { image: "/images/slide1.webp", title: "HEPSİ TEK ÇATI ALTINDA", sub: "KİŞİYE ÖZEL PLANLAMA" },
      { image: "/images/slide2.webp", title: "GÖZ SAĞLIĞINIZ EMİN ELLERDE", sub: "İLERİ TANI VE TEDAVİ OLANAKLARIYLA" },
      { image: "/images/blog_smart_lens.webp", title: "AKILLI LENS TEKNOLOJİSİ", sub: "YAKIN VE UZAK MESAFE İÇİN LENS SEÇENEKLERİ" },
      { image: "/images/slide4.webp", title: "LAZER GÖZ AMELİYATI", sub: "KİŞİYE ÖZEL LAZER PLANLAMASI" },
    ],
    intro: {
      title: ["Kuruluşumuzdan beri", "odağımız göz sağlığı."],
      text: [
        "MegaGöz, göz sağlığı merkezi olarak kuruldu. Katarakt ve akıllı lens cerrahisinden lazer tedavilerine, glokomdan çocuk göz sağlığına kadar göz hastalıklarının tanı ve tedavisinde uzman hekim kadromuzla hizmet veriyoruz.",
        "Her tedavi kapsamlı bir göz muayenesi ve ileri tetkiklerle başlar. Size uygun yöntem, gözünüzün yapısına ve yaşam tarzınıza göre hekiminizle birlikte belirlenir.",
      ],
      facts: [
        ["Muayene", "Kapsamlı göz muayenesi"],
        ["Tetkik", "İleri görüntüleme"],
        ["Anestezi", "Çoğunlukla damla"],
        ["Takip", "Düzenli kontroller"],
      ],
    },
    services: [], // Hizmet kartları TREATMENTS_DATA'dan beslenir (bkz. BranchServices)
    highlights: [
      "Göz hastalıklarının tüm alt dallarında uzman hekim kadrosu",
      "Ameliyat öncesi kapsamlı tetkik ve kişiye özel lens planlaması",
      "Steril ameliyathane ve tıp merkezi güvencesi",
      "Ameliyat sonrası düzenli kontrol ve takip programı",
    ],
    process: [
      { title: "Muayene", text: "Görme keskinliği, göz içi basınç ve göz dibi değerlendirilir." },
      { title: "Tetkik", text: "Gerekli ileri tetkiklerle teşhis netleştirilir." },
      { title: "Tedavi", text: "Size uygun yöntem birlikte planlanır ve uygulanır." },
      { title: "Takip", text: "Düzenli kontrollerle sonuç korunur." },
    ],
    faqs: [
      { q: "Katarakt ameliyatı nasıl yapılır?", a: "Katarakt ameliyatı genellikle damla anestezi ile yapılır ve çoğu hasta aynı gün evine döner. İşlem süreci ve sonrası hekiminiz tarafından ön görüşmede ayrıntılı olarak anlatılır." },
      { q: "Akıllı lens herkese uygun mu?", a: "Uygunluk; göz yapısı, ek göz hastalıkları ve beklentilere göre muayenede belirlenir. Hekiminiz size en uygun lens tipini önerir." },
      { q: "Lazer tedavisi için yaş sınırı var mı?", a: "Genellikle 18 yaşını doldurmuş ve göz numarası en az bir yıldır sabit olan kişilere uygulanır. Kornea yapısı ön muayenede değerlendirilir." },
      { q: "Göz tansiyonu (glokom) belirti verir mi?", a: "Glokom çoğu zaman sinsi ilerler ve belirti vermez. Bu nedenle 40 yaşından sonra düzenli göz muayenesi önerilir." },
      { q: "Çocuklar ilk göz muayenesine ne zaman götürülmeli?", a: "Belirti olmasa bile okul öncesi dönemde göz muayenesi önerilir; şaşılık veya göz kayması fark edilirse beklemeden hekime başvurulmalıdır." },
      { q: "Anlaşmalı kurumlar göz tedavilerinde geçerli mi?", a: "Kapsam kuruma ve tedaviye göre değişir; hasta danışmanlarımız detaylı bilgi verir." },
    ],
    formTopics: ["Katarakt / Akıllı Lens", "Lazer Tedavisi", "Göz Muayenesi", "Çocuk Göz Sağlığı", "Diğer"],
  },

  /* ═════════════════════════ MEDİKAL ESTETİK ═════════════════════════ */
  {
    id: "medikal-estetik",
    slug: "medikal-estetik",
    name: "Medikal Estetik",
    shortName: "Medikal Estetik",
    tagline: "Botoks, dolgu, cilt yenileme ve gençleştirme uygulamaları",
    heroTitle: ["Kişiye özel planlama,", "hekim değerlendirmesiyle."],
    heroText:
      "Yüz hatlarınıza uygun, abartısız ve kişiye özel planlanan medikal estetik uygulamaları. Her işlem, hekim muayenesi ve ayrıntılı analizle başlar.",
    accent: "#d6a2ad",
    icon: "Sparkles",
    image: u("photo-1552693673-1bf958298935"),
    imageAlt: "Medikal estetik cilt bakımı uygulaması",
    secondaryImage: u("photo-1728727267814-792db55ce678", 1200),
    slides: [
      { image: u("photo-1552693673-1bf958298935", 2200), title: "HEKİM DEĞERLENDİRMESİYLE", sub: "KİŞİYE ÖZEL MEDİKAL ESTETİK" },
      { image: u("photo-1728727267814-792db55ce678", 2200), title: "BOTOKS VE DOLGU", sub: "YÜZ YAPINIZA GÖRE PLANLAMA" },
      { image: u("photo-1713085085470-fba013d67e65", 2200), title: "CİLT YENİLEME", sub: "CİLT ANALİZİNE DAYALI PROTOKOLLER" },
    ],
    intro: {
      title: ["Güzelliğe", "tıbbi bir bakış."],
      text: [
        "Medikal estetik bölümümüz; cerrahi olmayan, kısa sürede uygulanan ve günlük hayata hızla dönmenizi sağlayan işlemler üzerine kuruludur. Beklentilerinizi ve yüz yapınızı birlikte değerlendirerek size uygun bir plan oluşturuyoruz.",
        "Her uygulama öncesinde hekimimiz yüz oranlarınızı, cilt tipinizi ve sağlık geçmişinizi değerlendirir. Ürün seçimi, doz ve uygulama noktaları bu analize göre kişiye özel belirlenir.",
      ],
      facts: [
        ["Uygulama süresi", "15–60 dk"],
        ["Anestezi", "Krem / lokal"],
        ["Günlük hayata dönüş", "Çoğunlukla aynı gün"],
        ["Kontrol", "2. hafta"],
      ],
    },
    services: [
      {
        slug: "botoks",
        title: "Botoks",
        excerpt: "Mimik çizgilerini yumuşatan, doğal ifadeyi koruyan uygulama.",
        duration: "15–20 dk",
        anesthesia: "Gerekmez / soğuk uygulama",
        sessions: "Tek seans, 4–6 ayda bir tekrar",
        recovery: "Aynı gün",
        body: [
          { heading: "Botoks nedir?", text: "Botulinum toksini, mimik kaslarını geçici olarak gevşeterek alın, kaş arası ve göz çevresindeki dinamik çizgileri yumuşatır. Doz ve uygulama noktaları, mimikleriniz incelenerek hekim tarafından belirlenir." },
          { heading: "Nasıl uygulanır?", text: "Hekim muayenesinde mimikleriniz incelenir ve uygulama noktaları işaretlenir. Çok ince iğnelerle kas içine küçük miktarlar uygulanır. İşlem 15–20 dakika sürer; etki 3–5 gün içinde başlar, 2. haftada tam olarak görülür." },
          { heading: "Sonrasında nelere dikkat edilmeli?", text: "İlk 4 saat yatmamak, uygulama bölgesine masaj yapmamak ve ilk 24 saat yoğun spor, sauna ve hamamdan kaçınmak önerilir. 2. haftada yapılan kontrolde gerekirse küçük rötuşlar planlanır." },
        ],
        suitable: ["Alın, kaş arası ve göz çevresi mimik çizgileri olanlar", "Kaş kaldırma (botoks ile kaş askısı) isteyenler", "Aşırı terleme (hiperhidroz) şikâyeti olanlar", "Diş sıkma ve çene kası belirginliği olanlar"],
        benefits: ["Kısa süren uygulama", "Kesi gerektirmez", "Mimiklerinize göre planlanır", "Çoğu kişi aynı gün günlük hayatına döner"],
        faqs: [
          { q: "Botoksun etkisi ne kadar sürer?", a: "Kişiden kişiye değişmekle birlikte etkisi genellikle 4–6 ay sürer. Düzenli uygulamalarla bu süre uzayabilir." },
          { q: "Gebelikte botoks yapılır mı?", a: "Gebelik ve emzirme döneminde botoks uygulanmaz." },
          { q: "Uygulama nasıl planlanır?", a: "Doz ve uygulama noktaları mimiklerinize göre belirlenir; beklentileriniz ön görüşmede hekiminizle birlikte konuşulur." },
        ],
      },
      {
        slug: "dolgu",
        title: "Dolgu Uygulamaları",
        excerpt: "Dudak, elmacık ve çene hattında hacim ve denge.",
        duration: "30–45 dk",
        anesthesia: "Anestezik krem",
        sessions: "Tek seans",
        recovery: "1–2 gün",
        body: [
          { heading: "Dolgu nedir?", text: "Hyalüronik asit bazlı dolgular, yaşla birlikte azalan hacmi geri kazandırmak ve yüz hatlarını dengelemek için kullanılır. Hyalüronik asit vücutta doğal olarak bulunan bir maddedir ve zamanla vücut tarafından emilir." },
          { heading: "Hangi bölgelere uygulanır?", text: "Dudak, elmacık kemiği, göz altı çukuru, burun-dudak çizgisi, çene ucu ve çene hattı en sık uygulanan bölgelerdir. Her bölge için farklı yoğunlukta ürün tercih edilir." },
          { heading: "Uygulama süreci", text: "Bölgeye anestezik krem sürülür, ardından ince iğne veya kanül ile dolgu uygulanır. Hafif şişlik ve kızarıklık genellikle 1–2 gün içinde geçer." },
        ],
        suitable: ["Dudak hacmi ve kontur isteyenler", "Elmacık ve yanaklarda hacim kaybı olanlar", "Göz altı çukurluğu belirgin olanlar", "Çene hattını belirginleştirmek isteyenler"],
        benefits: ["Kısa süren uygulama", "Vücutta zamanla emilen içerik", "Gerektiğinde eritilebilir", "Kısa iyileşme süreci"],
        faqs: [
          { q: "Dolgunun etkisi ne kadar sürer?", a: "Bölgeye, ürüne ve kişiye göre değişmekle birlikte genellikle 6–18 ay arasındadır." },
          { q: "Dolgu sonrası morarma olur mu?", a: "Bazı bölgelerde hafif morarma olabilir; genellikle birkaç gün içinde geçer." },
          { q: "Dolgu geri alınabilir mi?", a: "Hyalüronik asit dolgular, gerekli durumlarda hekim değerlendirmesiyle özel bir enzimle eritilebilir." },
        ],
      },
      {
        slug: "mezoterapi",
        title: "Mezoterapi",
        excerpt: "Cildin ihtiyaç duyduğu vitamin ve aktiflerin doğrudan uygulanması.",
        duration: "30 dk",
        anesthesia: "Anestezik krem",
        sessions: "4–6 seans, 2 hafta arayla",
        recovery: "Aynı gün",
        body: [
          { heading: "Mezoterapi nedir?", text: "Vitamin, mineral, amino asit ve hyalüronik asit içeren karışımların mikro enjeksiyonlarla cildin orta katmanına uygulanmasıdır. Cilt nemi, parlaklığı ve elastikiyeti desteklenir." },
          { heading: "Nasıl bir sonuç beklenir?", text: "İlk seanslardan itibaren ciltte canlılık ve nem artışı hissedilir. Kür tamamlandığında ince çizgilerde yumuşama ve daha eşit bir cilt tonu hedeflenir." },
        ],
        suitable: ["Mat, yorgun ve nemsiz cilde sahip olanlar", "İnce çizgileri olanlar", "Cilt kalitesini artırmak isteyenler", "Etkinlik öncesi cildini hazırlamak isteyenler"],
        benefits: ["Cilde doğrudan uygulama", "Kısa seans süresi", "Diğer uygulamalarla planlanabilir", "Kısa iyileşme süreci"],
        faqs: [
          { q: "Kaç seans gerekir?", a: "Genellikle 2 hafta arayla 4–6 seanslık bir kür önerilir; ardından koruyucu seanslar planlanabilir." },
          { q: "İşlem sonrası makyaj yapabilir miyim?", a: "İlk 12–24 saat makyaj yapılmaması önerilir." },
        ],
      },
      {
        slug: "prp",
        title: "PRP",
        excerpt: "Kişinin kendi kanından elde edilen plazma ile cilt yenileme.",
        duration: "45 dk",
        anesthesia: "Anestezik krem",
        sessions: "3 seans, 4 hafta arayla",
        recovery: "Aynı gün",
        body: [
          { heading: "PRP nedir?", text: "Platelet Rich Plasma; kişinin kendi kanından alınan örneğin özel tüplerde ayrıştırılmasıyla elde edilen, trombositten zengin plazmadır. İçerdiği büyüme faktörleri cildin kendini yenileme sürecini destekler." },
          { heading: "Uygulama süreci", text: "Koldan az miktarda kan alınır, santrifüj ile plazma ayrıştırılır ve aynı seansta yüz, boyun veya dekolte bölgesine uygulanır. Tüm süreç yaklaşık 45 dakika sürer." },
        ],
        suitable: ["Cilt kalitesi ve sıkılığı azalmış olanlar", "Akne izi ve gözenek görünümünden şikâyetçi olanlar", "Göz altı morluğu ve ince çizgileri olanlar", "Doğal içerikli uygulama tercih edenler"],
        benefits: ["Kişinin kendi kanından hazırlanır", "Aynı seansta hazırlanıp uygulanır", "Cildin yenilenme sürecini destekler", "Saç uygulamalarında da kullanılır"],
        faqs: [
          { q: "PRP uygulamasında ne hissedilir?", a: "Uygulama öncesinde anestezik krem sürülür. Uygulama sırasında hafif bir rahatsızlık hissedilebilir." },
          { q: "Sonuçlar ne zaman görülür?", a: "İlk seanstan sonra parlaklık fark edilir; belirgin sonuçlar kür tamamlandıktan sonra değerlendirilir." },
        ],
      },
      {
        slug: "cilt-yenileme",
        title: "Cilt Yenileme",
        excerpt: "Leke, gözenek ve ton eşitsizliğine yönelik protokoller.",
        duration: "45–60 dk",
        anesthesia: "Gerekirse krem",
        sessions: "Cilde göre 3–6 seans",
        recovery: "1–3 gün",
        body: [
          { heading: "Cilt yenileme nedir?", text: "Kimyasal peeling, dermapen (mikro iğneleme) ve cilt bakım protokollerinin cildin ihtiyacına göre birleştirildiği uygulamalardır. Amaç; leke, gözenek, akne izi ve ton eşitsizliğini azaltmaktır." },
          { heading: "Kişiye özel protokol", text: "Cilt analizi sonrasında hangi yöntemlerin, hangi sırayla ve kaç seans uygulanacağı belirlenir. Evde kullanılacak ürünler de planın bir parçasıdır." },
        ],
        suitable: ["Güneş ve hormonal lekeleri olanlar", "Geniş gözenek ve akne izinden şikâyetçi olanlar", "Cilt tonu eşitsiz olanlar", "Cilt dokusunu iyileştirmek isteyenler"],
        benefits: ["Cilt analizine dayalı plan", "Birden fazla soruna tek protokol", "Kademeli ve kontrollü sonuç", "Evde bakım desteği"],
        faqs: [
          { q: "Yaz aylarında yapılabilir mi?", a: "Bazı peeling türleri yaz aylarında önerilmez; hekiminiz mevsime uygun protokolü belirler. Her durumda güneş koruyucu kullanımı şarttır." },
          { q: "Soyulma olur mu?", a: "Uygulanan yönteme göre birkaç gün hafif kepeklenme olabilir." },
        ],
      },
      {
        slug: "ip-askilama",
        title: "İp Askılama",
        excerpt: "Cerrahi olmadan yüz ve boyun hattında toparlanma.",
        duration: "45–60 dk",
        anesthesia: "Lokal anestezi",
        sessions: "Tek seans",
        recovery: "3–5 gün",
        body: [
          { heading: "İp askı nedir?", text: "Vücutta zamanla eriyen özel tıbbi ipler, cilt altına yerleştirilerek sarkan dokuların toparlanmasını sağlar. İpler aynı zamanda kolajen üretimini de destekler." },
          { heading: "Uygulama süreci", text: "Lokal anestezi altında, kesi yapılmadan ince kanüllerle uygulanır. İşlem sonrası birkaç gün hafif gerginlik hissi ve şişlik olabilir." },
        ],
        suitable: ["Yanak ve çene hattında hafif-orta sarkma olanlar", "Kaş ve göz çevresinde düşüklük olanlar", "Cerrahi istemeyen hastalar", "Boyun hattında toparlanma isteyenler"],
        benefits: ["Kesi ve dikiş gerektirmez", "Lokal anestezi ile uygulanır", "Kolajen üretimini destekler", "Kısa iyileşme süreci"],
        faqs: [
          { q: "İp askının etkisi ne kadar sürer?", a: "Kullanılan ipe ve cilt yapısına göre etki genellikle 12–18 ay sürer." },
          { q: "İpler nereye yerleştirilir?", a: "İpler ince kanüllerle cilt altına yerleştirilir. Uygulama sonrası süreç hekiminiz tarafından ayrıntılı olarak anlatılır." },
        ],
      },
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
      { q: "Planlama nasıl yapılır?", a: "Planlama, hekim muayenesinde yüz oranlarınız ve beklentileriniz değerlendirilerek kişiye özel yapılır." },
      { q: "İşlem sonrası günlük hayatıma dönebilir miyim?", a: "Botoks ve mezoterapi gibi uygulamaların çoğunda aynı gün işinize dönebilirsiniz. Her işlem için hekiminiz özel öneriler verir." },
      { q: "Uygulamaları kim yapıyor?", a: "Tüm medikal estetik uygulamaları, muayeneyi de yapan hekimlerimiz tarafından gerçekleştirilir." },
      { q: "Hangi ürünler kullanılıyor?", a: "Yalnızca Sağlık Bakanlığı onaylı ürünler kullanılır; ürünün seri ve lot numarası hasta dosyanıza kaydedilir." },
      { q: "Birden fazla uygulama aynı gün yapılabilir mi?", a: "Uygun durumlarda botoks ve dolgu gibi işlemler aynı seansta planlanabilir. Kararı muayene sonrası hekiminiz verir." },
      { q: "Göz çevresi uygulamalarını kim değerlendiriyor?", a: "Göz çevresine yönelik uygulamalar, gerekli durumlarda göz hekimlerimizle birlikte değerlendirilir." },
    ],
    formTopics: ["Botoks", "Dolgu", "Cilt Yenileme", "Mezoterapi / PRP", "İp Askılama", "Diğer"],
  },

  /* ═════════════════════════════ SAÇ EKİMİ ═════════════════════════════ */
  {
    id: "sac-ekimi",
    slug: "sac-ekimi",
    name: "Saç Ekimi",
    shortName: "Saç Ekimi",
    tagline: "FUE, DHI, sakal-kaş ekimi ve saç dökülmesi tedavileri",
    heroTitle: ["Saç çizginiz,", "size özel tasarlanır."],
    heroText:
      "Hekim kontrolünde planlanan FUE ve DHI saç ekimi, sakal ve kaş ekimi ile saç dökülmesine yönelik destek tedavileri. Greftlerin yerleşimi saç yapınıza göre planlanır.",
    accent: "#c9a27e",
    icon: "Feather",
    image: u("photo-1643837833100-8b2ebd7127bc"),
    imageAlt: "Saç ekimi öncesi saçlı deri değerlendirmesi",
    secondaryImage: u("photo-1512663150964-d8f43c899f76", 1200),
    slides: [
      { image: u("photo-1643837833100-8b2ebd7127bc", 2200), title: "SAÇ ÇİZGİNİZ SİZE ÖZEL", sub: "HEKİM KONTROLÜNDE SAÇ EKİMİ" },
      { image: u("photo-1785860420936-b4f8bb4de5e1", 2200), title: "FUE VE DHI SAÇ EKİMİ", sub: "DOĞAL VE KALICI SONUÇ" },
      { image: u("photo-1512663150964-d8f43c899f76", 2200), title: "SAKAL VE KAŞ EKİMİ", sub: "YÜZÜNÜZE UYGUN TASARIM" },
    ],
    intro: {
      title: ["Her ekim,", "bir planla başlar."],
      text: [
        "Saç ekiminde başarı; greft sayısından çok, saç çizgisinin yüzünüze uygun tasarlanmasına ve donör bölgenin doğru kullanılmasına bağlıdır. Bu nedenle her operasyon, hekimimizin yaptığı saç analizi ve tasarımla başlar.",
        "Operasyonlarımız tıp merkezi bünyesinde, steril operasyon ortamında yapılır. Ekim sonrası yıkama, kontrol ve fotoğraflı takip süreci 12 ay boyunca sizinle birlikte ilerler.",
      ],
      facts: [
        ["Operasyon süresi", "6–8 saat"],
        ["Anestezi", "Lokal"],
        ["İşe dönüş", "3–5 gün"],
        ["Nihai sonuç", "12. ay"],
      ],
    },
    services: [
      {
        slug: "fue-sac-ekimi",
        title: "FUE Saç Ekimi",
        excerpt: "Greftlerin tek tek alınıp açılan kanallara yerleştirildiği yöntem.",
        duration: "6–8 saat",
        anesthesia: "Lokal anestezi",
        sessions: "Tek seans",
        recovery: "7–10 gün",
        body: [
          { heading: "FUE yöntemi nedir?", text: "Follicular Unit Extraction; ense bölgesindeki saç köklerinin mikromotorla tek tek alınması ve seyrek bölgeye açılan kanallara yerleştirilmesidir. Çizgisel kesi gerektirmeyen ve yaygın kullanılan bir tekniktir." },
          { heading: "Operasyon günü", text: "Saç çizgisi çizilir ve fotoğraflanır, ardından lokal anestezi uygulanır. Greftler toplanır, kanallar açılır ve greftler yerleştirilir. Operasyon gün içinde tamamlanır; aynı gün evinize dönersiniz." },
          { heading: "Ekim sonrası süreç", text: "İlk yıkama 2. gün merkezimizde yapılır. Kabuklanma 10 gün içinde dökülür. Ekilen saçlar ilk 1–2 ayda dökülür (şok dökülme), 3–4. aydan itibaren çıkmaya başlar; nihai sonuç 12. ayda değerlendirilir." },
        ],
        suitable: ["Donör bölgesi yeterli olan erkek ve kadın hastalar", "Tepe ve ön bölgede açıklığı olanlar", "Saç çizgisi gerilemiş olanlar", "Daha önce ekim olup sıklaştırma isteyenler"],
        benefits: ["Çizgisel kesi gerektirmez", "Geniş alanlara uygulanabilir", "Hekim tarafından planlanan saç çizgisi", "Kısa iyileşme süreci"],
        faqs: [
          { q: "Kaç greft ekilebilir?", a: "Donör kapasitesine ve açıklık derecesine göre tek seansta genellikle 2.500–4.500 greft planlanır." },
          { q: "Ekilen saçlar dökülür mü?", a: "Ekilen saçlar ilk aylarda geçici olarak dökülür; kökler yerinde kalır ve 3–4. aydan itibaren yeni saçlar çıkar." },
          { q: "Ne zaman spor yapabilirim?", a: "Hafif yürüyüşler hemen yapılabilir; yoğun spora genellikle 1 ay sonra dönülmesi önerilir." },
        ],
      },
      {
        slug: "dhi-sac-ekimi",
        title: "DHI Saç Ekimi",
        excerpt: "Choi kalemiyle kanal açmadan, sık ve yönlü ekim.",
        duration: "6–8 saat",
        anesthesia: "Lokal anestezi",
        sessions: "Tek seans",
        recovery: "5–7 gün",
        body: [
          { heading: "DHI yöntemi nedir?", text: "Direct Hair Implantation; greftlerin Choi implanter kalem ile kanal açma ve yerleştirme işlemi aynı anda yapılarak ekilmesidir. Saçların açısı ve yönü daha hassas kontrol edilir." },
          { heading: "Hangi durumlarda tercih edilir?", text: "Mevcut saçlar arasına sıklaştırma, saç çizgisi tasarımı ve traşsız ekim isteyen hastalarda sıklıkla tercih edilir." },
        ],
        suitable: ["Saç çizgisinde yoğun sıklık isteyenler", "Mevcut saçlar arası sıklaştırma isteyenler", "Traşsız ekim tercih edenler", "Kadın hastalar"],
        benefits: ["Sık ekim imkânı", "Açı ve yön kontrolü", "Kısa iyileşme süreci", "Traşsız seçenek"],
        faqs: [
          { q: "DHI mı FUE mi daha iyi?", a: "İki yöntem de başarılıdır; hangisinin uygun olduğu açıklık derecesi, saç yapısı ve beklentiye göre muayenede belirlenir." },
          { q: "Traşsız ekim mümkün mü?", a: "Uygun hastalarda DHI ile traşsız ekim planlanabilir." },
        ],
      },
      {
        slug: "sakal-ekimi",
        title: "Sakal ve Bıyık Ekimi",
        excerpt: "Seyrek ya da boş bölgelerde doğal sakal hattı.",
        duration: "4–5 saat",
        anesthesia: "Lokal anestezi",
        sessions: "Tek seans",
        recovery: "5–7 gün",
        body: [
          { heading: "Sakal ekimi nedir?", text: "Ense bölgesinden alınan greftlerin sakal ve bıyık bölgesindeki seyrek ya da boş alanlara, sakalın doğal çıkış açısına uygun şekilde yerleştirilmesidir." },
          { heading: "Sonuç ne zaman görülür?", text: "Ekilen sakallar ilk haftalarda dökülür, 3. aydan itibaren çıkmaya başlar ve 6–9 ayda belirgin sonuç alınır. İlk tıraş genellikle 10. günden sonra yapılabilir." },
        ],
        suitable: ["Seyrek veya bölgesel boşluğu olan sakal", "Yanık ya da yara izi bulunan bölgeler", "Bıyık bölgesini yoğunlaştırmak isteyenler", "Sakal hattını belirginleştirmek isteyenler"],
        benefits: ["Kendi saç köklerinizle", "Yüze uygun sakal tasarımı", "Çizgisel kesi gerektirmez", "Genellikle tek seansta planlanır"],
        faqs: [
          { q: "Ekilen sakal tıraş edilebilir mi?", a: "Evet. İyileşme süreci tamamlandıktan sonra ekilen sakallar normal sakal gibi tıraş edilebilir." },
          { q: "Kaç greft gerekir?", a: "Bölgenin genişliğine göre genellikle 1.500–3.000 greft planlanır." },
        ],
      },
      {
        slug: "kas-ekimi",
        title: "Kaş Ekimi",
        excerpt: "Yüz ifadenize uygun kaş tasarımı.",
        duration: "2–3 saat",
        anesthesia: "Lokal anestezi",
        sessions: "Tek seans",
        recovery: "5–7 gün",
        body: [
          { heading: "Kaş ekimi nedir?", text: "Saç köklerinin, kaşın doğal yönü ve açısı dikkate alınarak seyrek ya da boş kaş bölgesine tek tek yerleştirilmesidir. Yüz oranlarına uygun bir kaş tasarımı önceden çizilir." },
          { heading: "Bakım", text: "Ekilen kaşlar saç kökünden alındığı için uzamaya devam eder; düzenli olarak kısaltılması gerekir." },
        ],
        suitable: ["Seyrek veya ince kaşları olanlar", "Kaşında boşluk ya da iz bulunanlar", "Kalıcı makyaja alternatif arayanlar", "Kaş şeklini değiştirmek isteyenler"],
        benefits: ["Kendi saç köklerinizle", "Yüze özel tasarım", "Kısa operasyon süresi", "Çizgisel kesi gerektirmez"],
        faqs: [
          { q: "Ekilen kaşlar dökülür mü?", a: "Ekilen kıllar ilk haftalarda dökülebilir; tutunan köklerden yeni kıllar çıkar. Süreç kontrollerle takip edilir." },
          { q: "Ne zaman makyaj yapabilirim?", a: "Kaş bölgesine makyaj genellikle 2 hafta sonra yapılabilir." },
        ],
      },
      {
        slug: "kadin-sac-ekimi",
        title: "Kadın Saç Ekimi",
        excerpt: "Traşsız teknikle, saç çizgisi ve tepe bölgesinde.",
        duration: "5–7 saat",
        anesthesia: "Lokal anestezi",
        sessions: "Tek seans",
        recovery: "7–10 gün",
        body: [
          { heading: "Kadınlarda saç ekimi", text: "Kadınlarda saç dökülmesi genellikle yaygın incelme şeklindedir. Bu nedenle önce dökülmenin nedeni (hormonal, beslenme, tiroid vb.) araştırılır; ekim, uygun hastalarda planlanır." },
          { heading: "Traşsız ekim", text: "Kadın hastalarda saçlar kısaltılmadan, sadece donör bölgede küçük bir alan açılarak ekim yapılabilir. Böylece sosyal hayata dönüş daha konforlu olur." },
        ],
        suitable: ["Saç çizgisi yüksek veya geniş alnı olanlar", "Tepe bölgesinde belirgin incelme olanlar", "Yara izi veya travma sonrası açıklık olanlar", "Dökülme nedeni kontrol altına alınmış hastalar"],
        benefits: ["Traşsız seçenek", "Saç çizgisi tasarımı", "Kan tahlili ile ön değerlendirme", "Destek tedavilerle birlikte planlama"],
        faqs: [
          { q: "Her kadın saç ekimi olabilir mi?", a: "Yaygın ve aktif dökülmede önce neden araştırılır; ekim, donör bölgesi uygun ve dökülmesi kontrol altında olan hastalara planlanır." },
          { q: "Saçlarımı kestirmem gerekir mi?", a: "Uygun hastalarda traşsız teknik kullanılabilir." },
        ],
      },
      {
        slug: "sac-mezoterapisi-prp",
        title: "Saç Mezoterapisi & PRP",
        excerpt: "Saç dökülmesini yavaşlatan ve kökleri güçlendiren destek.",
        duration: "30 dk",
        anesthesia: "Gerekmez",
        sessions: "4–6 seans",
        recovery: "Aynı gün",
        body: [
          { heading: "Destek tedavileri", text: "Saç mezoterapisi ve PRP; saç köklerini besleyen, dökülmeyi yavaşlatan ve mevcut saçların kalitesini artıran uygulamalardır. Saç ekimi sonrasında da iyileşmeyi desteklemek için kullanılır." },
          { heading: "Uygulama", text: "Saçlı deriye ince iğnelerle uygulanır. Seanslar genellikle 2–4 hafta arayla planlanır." },
        ],
        suitable: ["Mevsimsel veya stres kaynaklı dökülme yaşayanlar", "Saçları incelmiş olanlar", "Saç ekimi sonrası destek isteyenler", "Erken dönem dökülmesi olanlar"],
        benefits: ["Kısa seans süresi", "Günlük hayata aynı gün dönülür", "Ekim sonrası süreci destekler", "Saç köklerini besler"],
        faqs: [
          { q: "Mezoterapi dökülmeyi tamamen durdurur mu?", a: "Dökülmenin nedenine göre etkisi değişir; amaç dökülmeyi yavaşlatmak ve saç köklerini güçlendirmektir." },
          { q: "Kaç seans gerekir?", a: "Genellikle 4–6 seanslık bir kür önerilir." },
        ],
      },
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
      { q: "Saç ekiminde ne hissedilir?", a: "İşlem lokal anestezi altında yapılır. Anestezi uygulaması sırasında hafif bir rahatsızlık hissedilebilir; süreç ön görüşmede hekiminiz tarafından anlatılır." },
      { q: "Sonuçlar ne zaman görülür?", a: "Ekilen saçlar ilk aylarda dökülür (şok dökülme), 3–4. aydan itibaren çıkmaya başlar; nihai sonuç 12. ay civarında değerlendirilir." },
      { q: "Kaç greft gerekir?", a: "Greft sayısı, açıklık derecesi ve donör kapasitesine göre muayenede belirlenir." },
      { q: "Operasyonu kim yapıyor?", a: "Planlama ve saç çizgisi tasarımı hekimimiz tarafından yapılır; operasyon hekim kontrolünde deneyimli ekibimizle gerçekleştirilir." },
      { q: "Ne zaman işe dönebilirim?", a: "Masa başı işlerde genellikle 3–5 gün sonra işe dönülebilir." },
      { q: "Kökler neden ense bölgesinden alınır?", a: "Ense bölgesindeki kökler genetik olarak dökülmeye daha dirençli olduğu için donör bölge olarak tercih edilir." },
    ],
    formTopics: ["FUE / DHI Saç Ekimi", "Sakal / Kaş Ekimi", "Kadın Saç Ekimi", "Saç Dökülmesi Tedavisi", "Diğer"],
  },

  /* ═══════════════════════════ AĞIZ VE DİŞ ═══════════════════════════ */
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
    slides: [
      { image: u("photo-1663755489920-5e09f66d011a", 2200), title: "KENDİNDEN EMİN GÜLÜŞLER", sub: "DİJİTAL PLANLAMA İLE" },
      { image: u("photo-1629909613654-28e377c37b09", 2200), title: "İMPLANT TEDAVİSİ", sub: "DOĞAL DİŞ KONFORU" },
      { image: u("photo-1777331903190-341a3dd0441b", 2200), title: "GÜLÜŞ TASARIMI", sub: "YÜZÜNÜZE UYUMLU ESTETİK" },
    ],
    intro: {
      title: ["Her gülüş için", "dijital planlama."],
      text: [
        "Ağız ve diş sağlığı bölümümüzde tedavi, dijital ağız içi tarama ve gerekli görüntülemelerle başlar. Size birden fazla seçenek, süre ve maliyetleriyle birlikte açıkça sunulur; karar birlikte verilir.",
        "İmplanttan ortodontiye, çocuk diş hekimliğinden estetik uygulamalara kadar her alanda uzman hekimlerimiz; MegaGöz'ün tüm branşlarında uygulanan sterilizasyon ve izlenebilirlik standartlarıyla çalışır.",
      ],
      facts: [
        ["Muayene", "Dijital tarama"],
        ["Planlama", "3D görüntüleme"],
        ["Seans süresi", "30–90 dk"],
        ["Takip", "6 ayda bir kontrol"],
      ],
    },
    services: [
      {
        slug: "implant",
        title: "İmplant Tedavisi",
        excerpt: "Eksik dişler için sabit bir tedavi seçeneği.",
        duration: "Diş başına 30–60 dk",
        anesthesia: "Lokal anestezi",
        sessions: "2–3 aşama",
        recovery: "2–3 gün",
        body: [
          { heading: "İmplant nedir?", text: "Eksik diş bölgesindeki çene kemiğine titanyum bir vida yerleştirilir ve üzerine sabit bir protez yapılır. Komşu dişlere dokunulmadan eksik diş tamamlanır." },
          { heading: "Tedavi aşamaları", text: "3D tomografi ile kemik yapısı değerlendirilir ve implantın yeri planlanır. Lokal anestezi altında implant yerleştirilir. İmplantın kemikle kaynaşması için genellikle 2–3 ay beklenir; ardından sabit kron takılır." },
          { heading: "Bakım", text: "İmplantlı dişler doğal dişler gibi fırçalanır ve diş ipi ile temizlenir. 6 ayda bir yapılan kontroller implantın ömrünü uzatır." },
        ],
        suitable: ["Tek veya birden fazla diş eksikliği olanlar", "Hareketli protezden kurtulmak isteyenler", "Köprü için sağlam dişlerinin kesilmesini istemeyenler", "Kemik yapısı yeterli olan yetişkinler"],
        benefits: ["Sabit protez seçeneği", "Komşu dişlere dokunulmadan uygulanır", "3D görüntüleme ile planlama", "Çiğneme fonksiyonunu destekler"],
        faqs: [
          { q: "İmplant tedavisinde ne hissedilir?", a: "İşlem lokal anestezi altında yapılır. Sonrasında birkaç gün hassasiyet olabilir; hekiminiz bu süreç için öneriler verir." },
          { q: "Kemik yetersizse implant yapılabilir mi?", a: "Kemik tozu (greft) veya sinüs lifting gibi ek işlemlerle çoğu durumda implant mümkün hâle getirilebilir." },
          { q: "İmplant sonrası bakım nasıl olmalı?", a: "İmplantlı dişler doğal dişler gibi fırçalanır ve diş ipiyle temizlenir; düzenli kontroller önerilir." },
        ],
      },
      {
        slug: "gulus-tasarimi",
        title: "Gülüş Tasarımı",
        excerpt: "Yüz hatlarınıza uyumlu, dijital olarak planlanan gülüş.",
        duration: "Seans başına 60–90 dk",
        anesthesia: "Gerekirse lokal",
        sessions: "2–3 seans",
        recovery: "Aynı gün",
        body: [
          { heading: "Gülüş tasarımı nedir?", text: "Dişlerin rengi, formu, boyu ve diş eti çizgisinin; yüz oranlarınıza, dudak yapınıza ve ten renginize göre birlikte planlandığı kapsamlı bir estetik tedavidir." },
          { heading: "Dijital planlama ve prova", text: "Fotoğraf ve dijital taramalarla yeni gülüşünüz bilgisayarda tasarlanır. Nihai işlemlerden önce ağız içi prova ile sonucu görür, gerekirse değişiklik isteyebilirsiniz." },
        ],
        suitable: ["Diş renginden ve formundan memnun olmayanlar", "Dişleri arasında boşluk olanlar", "Diş eti çizgisi düzensiz olanlar", "Kırık ya da aşınmış dişleri olanlar"],
        benefits: ["Yüze özel tasarım", "Dijital ön izleme", "Ağız içi prova imkânı", "Birden fazla sorunun tek planda çözümü"],
        faqs: [
          { q: "Gülüş tasarımında dişler kesilir mi?", a: "Kullanılacak yönteme göre değişir; lamina gibi uygulamalarda minimum aşındırma yapılır." },
          { q: "Sonucu önceden görebilir miyim?", a: "Evet, dijital tasarım ve ağız içi prova ile sonucu önceden görürsünüz." },
        ],
      },
      {
        slug: "zirkonyum-lamina",
        title: "Zirkonyum & Lamina",
        excerpt: "Estetik kaplamalarla renk ve form düzeltmesi.",
        duration: "Seans başına 60 dk",
        anesthesia: "Lokal anestezi",
        sessions: "2–3 seans",
        recovery: "Aynı gün",
        body: [
          { heading: "Zirkonyum kaplama", text: "Metal alt yapı içermeyen, ışığı doğal diş gibi geçiren dayanıklı kaplamalardır. Renk değişikliği, kırık ya da kanal tedavisi görmüş dişlerde tercih edilir." },
          { heading: "Lamina (yaprak porselen)", text: "Dişin sadece ön yüzeyine yapıştırılan ince porselen yapraklardır. Dişten çok az madde kaldırılarak renk ve form düzeltilir." },
        ],
        suitable: ["Dişlerinde renk değişikliği olanlar", "Kırık veya aşınmış dişleri olanlar", "Hafif çapraşıklığı olanlar", "Beyazlatmanın yetmediği durumlar"],
        benefits: ["Metal içermeyen alt yapı", "Dayanıklı malzeme", "Kişiye özel renk seçimi", "Dijital ölçü ile planlama"],
        faqs: [
          { q: "Zirkonyum mu lamina mı?", a: "Dişin mevcut durumuna göre karar verilir; sağlam dişlerde genellikle lamina, yıpranmış dişlerde zirkonyum tercih edilir." },
          { q: "Kaplamaların bakımı nasıl yapılır?", a: "Düzenli fırçalama, diş ipi kullanımı ve periyodik kontrollerle bakımı yapılır." },
        ],
      },
      {
        slug: "ortodonti",
        title: "Ortodonti & Şeffaf Plak",
        excerpt: "Teller veya şeffaf plaklarla diş dizilimi.",
        duration: "Kontrol başına 20–30 dk",
        anesthesia: "Gerekmez",
        sessions: "6–18 ay tedavi",
        recovery: "—",
        body: [
          { heading: "Ortodonti nedir?", text: "Çapraşık, aralıklı veya yanlış kapanan dişlerin; braketler (teller) ya da şeffaf plaklar yardımıyla doğru konuma getirilmesidir." },
          { heading: "Şeffaf plak tedavisi", text: "Dijital planlamayla üretilen, neredeyse görünmeyen plaklar belirli aralıklarla değiştirilerek dişler kademeli olarak hareket ettirilir. Yemek ve fırçalama sırasında çıkarılabilir." },
        ],
        suitable: ["Çapraşık veya aralıklı dişleri olanlar", "Çene kapanış bozukluğu olanlar", "Görünür tel istemeyen yetişkinler", "Gelişim çağındaki çocuklar"],
        benefits: ["Estetik ve fonksiyonel iyileşme", "Şeffaf plak seçeneği", "Dijital tedavi planı", "Ağız hijyenine katkı"],
        faqs: [
          { q: "Ortodonti için yaş sınırı var mı?", a: "Sağlıklı diş ve diş eti yapısına sahip her yaşta tedavi yapılabilir." },
          { q: "Şeffaf plakları günde kaç saat takmalıyım?", a: "Etkili sonuç için günde yaklaşık 20–22 saat takılması önerilir." },
        ],
      },
      {
        slug: "dis-beyazlatma",
        title: "Diş Beyazlatma",
        excerpt: "Hekim kontrolünde ofis tipi diş beyazlatma.",
        duration: "60 dk",
        anesthesia: "Gerekmez",
        sessions: "Tek seans",
        recovery: "Aynı gün",
        body: [
          { heading: "Ofis tipi beyazlatma", text: "Diş eti korunduktan sonra dişlere özel beyazlatma jeli uygulanır ve ışıkla aktive edilir. Açılma miktarı diş yapısına göre kişiden kişiye değişir." },
          { heading: "Sonrası", text: "İlk 48 saat çay, kahve, kola ve sigara gibi renkli içecek ve maddelerden uzak durulması önerilir. Geçici hassasiyet birkaç gün içinde geçer." },
        ],
        suitable: ["Dişlerinde sararma ve renklenme olanlar", "Çay, kahve, sigara kaynaklı lekeleri olanlar", "Özel bir gün öncesi hızlı sonuç isteyenler", "Diş eti ve dişleri sağlıklı yetişkinler"],
        benefits: ["Genellikle tek seans", "Hekim kontrolünde uygulama", "Diş eti koruması", "Kısa işlem süresi"],
        faqs: [
          { q: "Beyazlatma sonrası hassasiyet olur mu?", a: "İşlem sonrası geçici hassasiyet görülebilir. Uygunluk ve işlem sonrası öneriler hekim muayenesinde belirlenir." },
          { q: "Etkisi ne kadar sürer?", a: "Etkinin süresi beslenme ve kullanım alışkanlıklarına göre kişiden kişiye değişir." },
        ],
      },
      {
        slug: "cocuk-dis-hekimligi",
        title: "Çocuk Diş Hekimliği",
        excerpt: "Çocuklara özel, korkutmayan ilk diş deneyimi.",
        duration: "30 dk",
        anesthesia: "Gerekirse lokal",
        sessions: "6 ayda bir kontrol",
        recovery: "Aynı gün",
        body: [
          { heading: "Pedodonti", text: "Çocuk diş hekimliği; süt dişlerinden daimi dişlere geçiş döneminde ağız sağlığının korunması, çürüklerin önlenmesi ve tedavisi ile ilgilenir." },
          { heading: "Koruyucu uygulamalar", text: "Flor uygulaması ve fissür örtücüler gibi koruyucu işlemlerle çürüklere karşı koruma amaçlanır. İlk ziyaretlerde çocuğun hekime ve ortama alışması önceliklidir." },
        ],
        suitable: ["İlk diş kontrolü yapılacak çocuklar", "Süt dişlerinde çürük olan çocuklar", "Koruyucu uygulama isteyen aileler", "Diş tedavisinden korkan çocuklar"],
        benefits: ["Çocuğa özel yaklaşım", "Koruyucu tedaviler", "Düzenli takip programı", "Aile bilgilendirmesi"],
        faqs: [
          { q: "İlk diş muayenesi ne zaman yapılmalı?", a: "İlk dişin çıkmasıyla ya da en geç 1 yaşında ilk kontrolün yapılması önerilir." },
          { q: "Süt dişleri nasılsa değişecek, tedavi gerekir mi?", a: "Evet. Süt dişleri, daimi dişlerin doğru yerde çıkması için yer tutucudur; çürükleri tedavi edilmelidir." },
        ],
      },
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
      { q: "İmplant tedavisi ne kadar sürer?", a: "İmplantın yerleştirilmesi tek seansta yapılır; kemikle kaynaşma süreci genellikle 2–3 ay sürer, ardından sabit kron takılır." },
      { q: "Gülüş tasarımı kaç seansta tamamlanır?", a: "Dijital planlama ve prova dahil çoğunlukla 2–3 seansta tamamlanır." },
      { q: "Çocuklar için ilk diş muayenesi ne zaman yapılmalı?", a: "İlk dişin çıkmasıyla ya da en geç 1 yaşında ilk kontrolün yapılması önerilir." },
      { q: "Tedavi öncesi fiyat bilgisi alabilir miyim?", a: "Muayene ve görüntüleme sonrasında tedavi planınız, seçenekler ve maliyetleriyle birlikte yazılı olarak paylaşılır." },
      { q: "Diş taşı temizliği ne sıklıkla yapılmalı?", a: "Genellikle 6 ayda bir kontrol ve gerekirse diş taşı temizliği önerilir." },
      { q: "Anlaşmalı kurumlar diş tedavilerinde geçerli mi?", a: "Kapsam kuruma ve tedaviye göre değişir; hasta danışmanlarımız detaylı bilgi verir." },
    ],
    formTopics: ["İmplant", "Gülüş Tasarımı / Estetik", "Ortodonti", "Diş Beyazlatma", "Genel Muayene", "Diğer"],
  },
];

/**
 * Dile göre branş listesi. Türkçe ana veridir; İngilizcede yalnızca metin
 * alanları branches.en.ts'ten gelir (slug, görsel, renk ortak kalır).
 */
export function getBranches(locale?: string): Branch[] {
  if (locale !== "en") return BRANCHES;
  return BRANCHES.map((b) => {
    const t = BRANCH_TEXT_EN[b.id];
    const { services: serviceText, slides: slideText, ...rest } = t;
    return {
      ...b,
      ...rest,
      slides: b.slides.map((s, i) => ({ ...s, ...(slideText[i] ?? {}) })),
      services: b.services.map((s) => ({ ...s, ...(serviceText[s.slug] ?? {}) })),
    };
  });
}

export const getBranch = (slug: string, locale?: string) => getBranches(locale).find((b) => b.slug === slug);

/** Kurum geneli görseller (demo) */
export const CORPORATE_IMAGES = {
  interior: "/images/megagoz-clinic-interior.webp",
  building: "/images/megagoz.webp",
  consultation: u("photo-1777331903190-341a3dd0441b", 1400),
};
