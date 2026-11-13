import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowRightLeft, CheckCircle2, CircleDot, Globe, Search, Inbox, LayoutGrid, Menu as MenuIcon } from "lucide-react";
import DemoHeader from "@/components/demo/DemoHeader";
import DemoFooter from "@/components/demo/DemoFooter";
import BranchIcon from "@/components/demo/BranchIcon";
import { BRANCHES } from "@/data/branches";
import { TREATMENTS_DATA } from "@/data/treatments";

export const metadata = { title: "Site Yapısı & URL Planı (Demo) | MegaGöz" };

const HOME_FLOW = [
  { t: "Hero = branş kapısı", d: "“Tek çatı altında, dört uzmanlık.” başlığı ve dört büyük branş kartı. Göz kartı “Kurucu branşımız” rozetiyle öne çıkar." },
  { t: "Biz kimiz", d: "“Adımız gözden gelir, bakışımız bütününüze.” Göz cerrahisinden gelen hassasiyetin tüm branşlara taşındığı anlatılır; isim sorusu burada cevaplanır." },
  { t: "Hizmet keşfi", d: "Sekmeli bölüm: branş seçilince o branşın öne çıkan 6 hizmeti ve branş ana sayfası bağlantısı." },
  { t: "Ortak standart", d: "Tek hasta dosyası, uzman kadro, ameliyathane standardı, anlaşmalı kurumlar." },
  { t: "Branş seçmeli randevu", d: "Ziyaretçi önce branşı seçer; konu listesi branşa göre değişir. Bildirim ve CRM'e “Branş” alanı gider." },
  { t: "Tek numara şeridi + SSS + footer", d: "444 0 320 tüm branşlar için ortak. Footer'da dört branş kolonu." },
];

const KEEP = [
  ["/tedaviler/[kategori]/[tedavi]", "Aynı kalır", "Göz tedavileri adresini korur; menü ve breadcrumb'da “Göz” altında gösterilir."],
  ["/doktorlar, /doktorlar/[hekim]", "Aynı kalır", "Hekim kartlarına branş etiketi ve /doktorlar?brans=dis gibi filtre eklenir."],
  ["/blog, /blog/[yazi]", "Aynı kalır", "Yazılara branş kategorisi eklenir; branş sayfalarında ilgili yazılar listelenir."],
  ["/hakkimizda, /iletisim, /kvkk, /galeri, /anlasmali-kurumlar, /is-basvurusu", "Aynı kalır", "Kurumsal sayfalar; metinler çok branşlı kuruma göre güncellenir."],
  ["/akilli-lensler", "Aynı kalır", "Göz branşı kampanya sayfası olarak bağlanır."],
];

const NEW_URLS = [
  ["/", "Kurum ana sayfası (yeni)", "İçerik değişir, adres aynı; yönlendirme gerekmez."],
  ["/goz/", "Göz branşı ana sayfası", "Mevcut ana sayfa içeriği buraya taşınır."],
  ["/medikal-estetik/ · /medikal-estetik/[hizmet]/", "Yeni branş + hizmet sayfaları", "—"],
  ["/sac-ekimi/ · /sac-ekimi/[hizmet]/", "Yeni branş + hizmet sayfaları", "—"],
  ["/dis/ · /dis/[hizmet]/", "Yeni branş + hizmet sayfaları", "—"],
];

export default function SiteStructurePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DemoHeader />

      {/* Başlık */}
      <section className="relative bg-[#0a111a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162f5d]/60 to-transparent" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#ecbb3f] text-[#162f5d] font-black text-[11px] tracking-widest mb-6 uppercase">Demo · Öneri dokümanı</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
            Çok branşlı yapı:
            <br />
            <span className="text-[#ecbb3f]">sayfa ağacı ve URL planı.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">
            Tek domain, tek tasarım dili, dört branş. Bu sayfa önerilen ana sayfa akışını, menü yerleşimini, branş sayfa ağacını ve mevcut göz sayfalarının arama görünürlüğünü koruma planını özetler.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demo" className="flex items-center gap-2 bg-[#ecbb3f] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[48px] px-6 rounded-lg">Kurum ana sayfası demo <ArrowRight size={16} /></Link>
            {BRANCHES.map((b) => (
              <Link key={b.id} href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} className="flex items-center gap-2 border border-white/20 hover:border-[#ecbb3f] text-white font-bold text-[13px] h-[48px] px-5 rounded-lg transition-colors">
                <span style={{ color: b.accent }}><BranchIcon icon={b.icon} size={15} /></span> {b.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24 w-full space-y-24">
        {/* 1. Ana sayfa akışı */}
        <section>
          <SectionTitle n="01" icon={<LayoutGrid size={20} />} title="Ana sayfa akışı" sub="“MegaGöz = göz” algısını koruyup genişleten anlatı" />
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HOME_FLOW.map((s, i) => (
              <li key={s.t} className="rounded-2xl bg-[#f8fafc] border border-gray-100 p-6 flex gap-5">
                <span className="text-[#ecbb3f] font-black text-2xl leading-none w-8 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-black text-[#162f5d] text-lg mb-1">{s.t}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl border-l-4 border-[#ecbb3f] bg-[#162f5d] text-white p-6 lg:p-8">
            <p className="text-[11px] font-black tracking-[0.2em] text-[#ecbb3f] uppercase mb-2">İsim konusu için önerimiz</p>
            <p className="text-lg leading-relaxed text-gray-200">
              İsmi saklamak yerine sahipleniyoruz: <strong className="text-white">“Adımız gözden gelir, bakışımız bütününüze.”</strong> Göz, kurucu branş ve kalite standardının kaynağı olarak konumlanır; diğer branşlar bu standardın genişlemesi olarak anlatılır. Logo altına ileride “Tıp Merkezi” ibaresinin daha görünür yazılması da önerilir.
            </p>
          </div>
        </section>

        {/* 2. Menü */}
        <section>
          <SectionTitle n="02" icon={<MenuIcon size={20} />} title="Menü yerleşimi" sub="Branşlar ana menünün en görünür yerinde" />
          <div className="rounded-3xl border border-gray-200 overflow-hidden">
            <div className="bg-[#162f5d] text-white/90 text-[12px] font-semibold px-6 py-3 flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-[#ecbb3f] font-black">Üst bar:</span> Hakkımızda · Hekimlerimiz · Blog · Anlaşmalı Kurumlar · Galeri · İletişim <span className="ml-auto">444 0 320 · TR/EN</span>
            </div>
            <div className="bg-white px-6 py-5 flex flex-wrap items-center gap-3">
              <span className="font-black text-[#162f5d] mr-4">LOGO</span>
              {BRANCHES.map((b) => (
                <span key={b.id} className="flex items-center gap-2 px-4 h-[40px] rounded-lg bg-[#f4f6fa] text-[#162f5d] font-bold text-[13px]">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: b.accent }} /> {b.shortName.toLocaleUpperCase("tr-TR")} ▾
                </span>
              ))}
              <span className="px-3 font-bold text-[13px] text-[#162f5d]">HEKİMLERİMİZ</span>
              <span className="ml-auto px-4 h-[40px] flex items-center rounded-lg bg-[#ecbb3f] text-[#162f5d] font-black text-[12px] tracking-widest">RANDEVU AL</span>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              ["Mega menü", "Her branşın üzerine gelince solda branş tanıtım görseli, sağda hizmet listesi açılır."],
              ["Branş barı", "Branş sayfalarında breadcrumb (MegaGöz › Branş › Hizmet) ve diğer branşlara tek tık geçiş."],
              ["Mobil menü", "En üstte 2×2 branş kartları, altında branş hizmet akordeonları, en altta sabit Ara / Randevu."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl bg-[#f8fafc] border border-gray-100 p-6">
                <h3 className="font-black text-[#162f5d] mb-1">{t}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Sayfa ağacı */}
        <section>
          <SectionTitle n="03" icon={<Globe size={20} />} title="Branş sayfa ağacı" sub="megagoz.com — tek domain, alt klasör yapısı" />
          <div className="rounded-3xl bg-[#0a111a] text-white p-6 lg:p-10 font-mono text-[13px] lg:text-[14px] leading-[1.9] overflow-x-auto">
            <p><span className="text-[#ecbb3f] font-bold">megagoz.com/</span> <span className="text-white/40">— Kurum ana sayfası</span></p>
            {BRANCHES.map((b, bi) => {
              const last = bi === BRANCHES.length - 1;
              const children =
                b.id === "goz"
                  ? TREATMENTS_DATA.slice(0, 4).map((c) => `/tedaviler/${c.slug.tr}/ …`).concat(["… (mevcut tüm /tedaviler adresleri)"])
                  : b.services.map((s) => `/${b.slug}/${s.slug}/`);
              return (
                <div key={b.id}>
                  <p>
                    <span className="text-white/30">{last ? "└─ " : "├─ "}</span>
                    <span className="font-bold" style={{ color: b.accent }}>/{b.slug}/</span> <span className="text-white/40">— {b.name} ana sayfası</span>
                  </p>
                  {children.map((c, i) => (
                    <p key={c} className="whitespace-nowrap">
                      <span className="text-white/30">{last ? "   " : "│  "}{i === children.length - 1 ? "└─ " : "├─ "}</span>
                      <span className="text-white/80">{c}</span>
                    </p>
                  ))}
                </div>
              );
            })}
            <p className="mt-3 text-white/40">Ortak: /hakkimizda · /doktorlar · /blog · /iletisim · /anlasmali-kurumlar · /galeri · /kvkk</p>
          </div>
        </section>

        {/* 4. URL ve SEO */}
        <section>
          <SectionTitle n="04" icon={<ArrowRightLeft size={20} />} title="Mevcut URL'ler ve arama görünürlüğü" sub="Önerimiz: göz adreslerine dokunmamak" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Table title="Korunan adresler" rows={KEEP} />
            <Table title="Yeni / değişen adresler" rows={NEW_URLS} />
          </div>
          <div className="mt-6 rounded-2xl border border-[#ecbb3f]/40 bg-[#ecbb3f]/5 p-6 lg:p-8">
            <h3 className="font-black text-[#162f5d] text-lg mb-3">Tek risk: ana sayfanın göz anahtar kelimeleri</h3>
            <p className="text-gray-600 leading-relaxed">
              Bugün “göz merkezi Ümraniye” gibi aramalarda ana sayfa sıralanıyor olabilir. Ana sayfa kurum sayfasına dönüşünce bu sinyal /goz/ sayfasına taşınmalı: mevcut başlık ve açıklama /goz/ sayfasına verilir, ana sayfada göz kartı ve göz içerikleri güçlü kalır, iç linkler /goz/ sayfasına yönlenir. Geçiş sonrası Search Console'da ilk 4–6 hafta takip edilir. Eski adreslerden hiçbiri kaldırılmadığı için 301 yönlendirmeye neredeyse hiç ihtiyaç kalmaz; ileride bir adres değişirse <code className="text-[#162f5d] font-bold">next.config</code> içinde kalıcı (301) yönlendirme eklenir.
            </p>
          </div>
        </section>

        {/* 5. Form & SEO alanları */}
        <section>
          <SectionTitle n="05" icon={<Inbox size={20} />} title="Form, CRM ve teknik SEO" sub="Başvurunun hangi branştan geldiği her zaman bilinir" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["Kaynak branş", "Tüm formlar “branch” alanı gönderir. E-posta konusu [Branş] ile başlar, gövdede Branş / Kaynak / Sayfa / Konu yer alır. Aynı alan CRM'e “kaynak branş” olarak aktarılır. (Demo'da aktif.)"],
              ["Branşa göre konu", "Formda branş seçilince konu listesi o branşın hizmetlerine göre değişir; branş sayfalarında branş önceden seçili gelir."],
              ["Sitemap & meta", "Sitemap'e branş ve hizmet sayfaları eklenir; her sayfaya kendi title / description / canonical alanı tanımlanır. Mevcut sitemap'teki tedavi adresi hatası da giderilir."],
              ["Yapısal veri", "MedicalClinic şemasına dört branş “department” olarak eklenir; branş ve hizmet sayfalarına BreadcrumbList ve FAQPage şeması eklenir."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-[#f8fafc] border border-gray-100 p-6 flex gap-4">
                <CheckCircle2 className="text-[#ecbb3f] shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-black text-[#162f5d] mb-1">{t}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#162f5d] p-8 lg:p-12 text-white flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <p className="text-[11px] font-black tracking-[0.2em] text-[#ecbb3f] uppercase mb-2 flex items-center gap-2"><Search size={14} /> Demo notu</p>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Demo sayfaları /demo altında, arama motorlarına kapalı (noindex) olarak yayındadır; canlı ana sayfa ve göz sayfaları değişmedi. Yeni branş görselleri geçicidir, yayın öncesinde kurumun kendi çekimleriyle değiştirilecektir.
            </p>
          </div>
          <Link href="/demo" className="flex items-center gap-2 bg-[#ecbb3f] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[52px] px-6 rounded-lg shrink-0">
            Demoya dön <ArrowRight size={16} />
          </Link>
        </section>
      </div>

      <DemoFooter />
    </main>
  );
}

function SectionTitle({ n, icon, title, sub }: { n: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-5 mb-8">
      <span className="w-14 h-14 rounded-2xl bg-[#162f5d] text-[#ecbb3f] flex items-center justify-center shrink-0">{icon}</span>
      <div>
        <p className="text-[12px] font-black tracking-[0.2em] text-[#ecbb3f]">{n}</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#162f5d] tracking-tight">{title}</h2>
        <p className="text-gray-500 font-medium mt-1">{sub}</p>
      </div>
    </div>
  );
}

function Table({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div className="rounded-3xl border border-gray-200 overflow-hidden">
      <p className="bg-[#f4f6fa] px-6 py-4 font-black text-[#162f5d] flex items-center gap-2"><CircleDot size={16} className="text-[#ecbb3f]" /> {title}</p>
      <ul className="divide-y divide-gray-100">
        {rows.map(([url, status, note]) => (
          <li key={url} className="px-6 py-4">
            <div className="flex items-start justify-between gap-4 mb-1">
              <code className="text-[13px] font-bold text-[#162f5d] break-all">{url}</code>
              <span className="text-[11px] font-black tracking-wider uppercase text-[#0f8a5f] bg-[#0f8a5f]/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">{status}</span>
            </div>
            {note !== "—" && <p className="text-gray-500 text-[13px] leading-relaxed">{note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
