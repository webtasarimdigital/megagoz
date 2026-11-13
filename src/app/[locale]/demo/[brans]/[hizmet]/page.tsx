import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Clock, Activity, ArrowRight, Phone, CheckCircle2, Syringe, Repeat, Sparkle, MessageCircle, Info } from "lucide-react";
import { getBranch } from "@/data/branches";
import DemoHeader from "@/components/demo/DemoHeader";
import DemoFooter from "@/components/demo/DemoFooter";
import BranchBar from "@/components/demo/BranchBar";
import BranchAppointmentForm from "@/components/demo/BranchAppointmentForm";
import OtherBranches from "@/components/demo/OtherBranches";
import FaqList from "@/components/demo/FaqList";
import BranchIcon from "@/components/demo/BranchIcon";

// Not: generateStaticParams bilerek yok (bkz. [brans]/page.tsx).

function find(brans: string, hizmet: string) {
  const b = getBranch(brans);
  const s = b?.services.find((x) => x.slug === hizmet);
  return b && s ? { b, s } : null;
}

export async function generateMetadata({ params }: { params: Promise<{ brans: string; hizmet: string }> }): Promise<Metadata> {
  const { brans, hizmet } = await params;
  const r = find(brans, hizmet);
  if (!r) return {};
  return { title: `${r.s.title} | MegaGöz ${r.b.shortName}`, description: r.s.excerpt };
}

export default async function ServicePage({ params }: { params: Promise<{ brans: string; hizmet: string }> }) {
  const { brans, hizmet } = await params;
  // Göz tedavileri mevcut /tedaviler/... adreslerinde kalır; burada yalnızca yeni branşlar var
  const r = find(brans, hizmet);
  if (!r) notFound();
  const { b, s } = r;
  const index = b.services.findIndex((x) => x.slug === s.slug);
  const related = b.services.filter((x) => x.slug !== s.slug);
  const image = index % 2 === 0 ? b.image : b.secondaryImage;

  const facts = [
    { icon: Clock, label: "İşlem süresi", value: s.duration },
    { icon: Syringe, label: "Anestezi", value: s.anesthesia },
    { icon: Repeat, label: "Seans", value: s.sessions },
    { icon: Activity, label: "Günlük hayata dönüş", value: s.recovery },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DemoHeader activeBranch={b.id} />
      <BranchBar branchId={b.id} trail={s.title} />

      {/* ── Başlık ── */}
      <section className="relative bg-[#0a111a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#162f5d] via-[#0f2245] to-[#0a111a]" />
        <div className="absolute -right-40 top-0 w-[55%] h-full blur-[160px] rounded-full opacity-20 pointer-events-none" style={{ backgroundColor: b.accent }} />
        <div className="relative max-w-[1300px] mx-auto px-6 pt-14 lg:pt-20 pb-28 lg:pb-32 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[12px] font-bold tracking-widest uppercase mb-6" style={{ color: b.accent, borderColor: `${b.accent}55`, backgroundColor: `${b.accent}1f` }}>
              <BranchIcon icon={b.icon} size={14} /> {b.name}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">{s.title}</h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-xl font-light leading-relaxed mb-8">{s.excerpt}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#randevu" className="flex items-center justify-center gap-2.5 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[54px] px-7 rounded-lg shadow-lg shadow-[#ecbb3f]/20 transition-colors">
                Ücretsiz Ön Görüşme <ArrowRight size={17} />
              </a>
              <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/50 text-white font-bold text-[13px] tracking-widest uppercase h-[54px] px-7 rounded-lg transition-colors">
                <MessageCircle size={17} /> WhatsApp ile Sor
              </a>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-[28px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.45)] border border-white/10">
            <img src={image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Bilgi kartları (başlığın altına biner) ── */}
      <section className="relative z-10 -mt-16 lg:-mt-20 px-6">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(22,47,93,0.10)] p-5 lg:p-6 flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-[#162f5d] text-[#ecbb3f] flex items-center justify-center shrink-0">
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-black tracking-[0.15em] text-gray-400 uppercase mb-1">{label}</p>
                <p className="text-[15px] lg:text-[16px] font-black text-[#162f5d] leading-snug">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── İçerik + yan panel ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          <article className="space-y-14 min-w-0">
            {s.body.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] tracking-tight mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#ecbb3f] rounded-full shrink-0" /> {sec.heading}
                </h2>
                <p className="text-gray-600 text-[17px] leading-[1.8]">{sec.text}</p>
              </div>
            ))}

            {/* Kimler için */}
            <div className="rounded-3xl bg-[#f8fafc] border border-gray-100 p-7 lg:p-9">
              <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] tracking-tight mb-6">Kimler için uygundur?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {s.suitable.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-gray-600 font-medium leading-relaxed">
                    <CheckCircle2 size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" /> {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-gray-200 text-[14px] text-gray-500 leading-relaxed">
                Uygunluk; sağlık geçmişiniz ve hekim muayenesi sonucuna göre kesinleşir.
              </p>
            </div>

            {/* Avantajlar */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] tracking-tight mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#ecbb3f] rounded-full shrink-0" /> Öne çıkan avantajlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.benefits.map((x, i) => (
                  <div key={x} className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 hover:border-[#ecbb3f]/50 hover:shadow-[0_15px_40px_rgba(22,47,93,0.06)] transition-all">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-black text-[15px] text-[#162f5d] bg-[#ecbb3f]/15 group-hover:bg-[#ecbb3f] transition-colors">
                      0{i + 1}
                    </span>
                    <span className="font-bold text-[#162f5d] text-[16px]">{x}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Süreç */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] tracking-tight mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#ecbb3f] rounded-full shrink-0" /> Süreç nasıl ilerler?
              </h2>
              <ol className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                {b.process.map((p, i) => (
                  <li key={p.title} className="relative rounded-2xl bg-[#162f5d] p-6 overflow-hidden">
                    <span className="absolute -right-2 -top-4 text-[90px] font-black leading-none text-white/[0.05]">0{i + 1}</span>
                    <span className="relative text-[#ecbb3f] font-black text-[12px] tracking-[0.2em]">ADIM 0{i + 1}</span>
                    <h3 className="relative text-lg font-black text-white mt-1.5 mb-1">{p.title}</h3>
                    <p className="relative text-gray-300 text-[14px] leading-relaxed">{p.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex gap-4 rounded-2xl border border-[#ecbb3f]/40 bg-[#ecbb3f]/5 p-6 text-[14px] text-gray-600 leading-relaxed">
              <Info size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#162f5d]">Bilgilendirme:</strong> Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır. Tedaviye uygunluk, süreler ve sonuçlar kişiden kişiye değişir; kesin bilgi için hekim muayenesi gereklidir.
              </p>
            </div>
          </article>

          {/* Yan panel */}
          <aside className="lg:sticky lg:top-[120px] self-start space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#162f5d] p-7 text-white shadow-2xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#ecbb3f]/15 blur-2xl" />
              <p className="relative text-[11px] font-black tracking-[0.2em] text-[#ecbb3f] uppercase mb-2 flex items-center gap-2">
                <Sparkle size={13} /> Ücretsiz ön görüşme
              </p>
              <h3 className="relative text-xl font-black mb-2 leading-snug">{s.title} için size uygun planı birlikte belirleyelim.</h3>
              <p className="relative text-gray-300 text-[14px] leading-relaxed mb-6">Hasta danışmanımız sizi arayarak uygun hekim ve saati planlasın.</p>
              <a href="#randevu" className="relative flex items-center justify-center gap-2 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[52px] rounded-lg transition-colors mb-3">
                Randevu Talebi <ArrowRight size={16} />
              </a>
              <a href="tel:4440320" className="relative flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold h-[52px] rounded-lg transition-colors">
                <Phone size={16} className="text-[#ecbb3f]" /> 444 0 320
              </a>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_40px_rgba(22,47,93,0.05)]">
              <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase mb-3">{b.shortName} · Diğer hizmetler</p>
              <ul className="divide-y divide-gray-100">
                {related.map((x) => (
                  <li key={x.slug}>
                    <Link href={{ pathname: "/demo/[brans]/[hizmet]", params: { brans: b.slug, hizmet: x.slug } }} className="group flex items-center justify-between gap-3 py-3.5">
                      <span>
                        <span className="block text-[15px] font-bold text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors">{x.title}</span>
                        <span className="block text-[12px] text-gray-400 font-medium mt-0.5">{x.duration}</span>
                      </span>
                      <ArrowRight size={15} className="text-gray-300 group-hover:text-[#ecbb3f] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} className="mt-4 flex items-center gap-2 text-[12px] font-black tracking-widest uppercase text-[#ecbb3f]">
                <CheckCircle2 size={15} /> {b.shortName} ana sayfası
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <FaqList items={s.faqs} eyebrow={`${s.title} · SSS`} title={[s.title, "hakkında"]} text={`${s.title} ile ilgili en sık sorulan soruları yanıtladık.`} />
      <BranchAppointmentForm defaultBranch={b.id} source={`${b.name} › ${s.title} Sayfası`} />
      <OtherBranches current={b.id} />
      <DemoFooter />
    </main>
  );
}
