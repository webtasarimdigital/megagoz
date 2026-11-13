import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Clock, Activity, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { BRANCHES, getBranch } from "@/data/branches";
import DemoHeader from "@/components/demo/DemoHeader";
import DemoFooter from "@/components/demo/DemoFooter";
import BranchBar from "@/components/demo/BranchBar";
import BranchAppointmentForm from "@/components/demo/BranchAppointmentForm";
import OtherBranches from "@/components/demo/OtherBranches";
import BranchIcon from "@/components/demo/BranchIcon";

export function generateStaticParams() {
  return BRANCHES.filter((b) => b.id !== "goz").flatMap((b) => b.services.map((s) => ({ brans: b.slug, hizmet: s.slug })));
}

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

  const body = s.body ?? [
    { heading: `${s.title} nedir?`, text: `${s.excerpt} Uygulamanın kapsamı, süresi ve beklenen sonuçlar ön görüşmede hekiminiz tarafından ayrıntılı olarak anlatılır.` },
    { heading: "Kimler için uygundur?", text: "Uygunluk; sağlık geçmişiniz, beklentileriniz ve hekim muayenesi sonucuna göre belirlenir. Her hasta için kişiye özel plan hazırlanır." },
  ];
  const related = b.services.filter((x) => x.slug !== s.slug);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DemoHeader activeBranch={b.id} />
      <div className="pt-[74px] sm:pt-[82px] lg:pt-[146px]">
        <BranchBar branchId={b.id} trail={s.title} />
      </div>

      {/* Sayfa başlığı */}
      <section className="relative bg-[#0a111a] overflow-hidden">
        <img src={b.image} alt={b.imageAlt} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#162f5d] via-[#162f5d]/85 to-[#162f5d]/30" />
        <div className="relative max-w-[1300px] mx-auto px-6 py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[12px] font-bold tracking-widest uppercase mb-5" style={{ color: b.accent, borderColor: `${b.accent}55`, backgroundColor: `${b.accent}1f` }}>
            <BranchIcon icon={b.icon} size={14} /> {b.name}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">{s.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">{s.excerpt}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {s.duration && (
              <span className="flex items-center gap-2 px-4 h-[40px] rounded-full bg-white/10 border border-white/15 text-white text-[13px] font-bold">
                <Clock size={15} className="text-[#ecbb3f]" /> İşlem süresi: {s.duration}
              </span>
            )}
            {s.recovery && (
              <span className="flex items-center gap-2 px-4 h-[40px] rounded-full bg-white/10 border border-white/15 text-white text-[13px] font-bold">
                <Activity size={15} className="text-[#ecbb3f]" /> Günlük hayata dönüş: {s.recovery}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* İçerik + yan panel */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          <article className="space-y-12">
            {body.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] tracking-tight mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#ecbb3f] rounded-full shrink-0" /> {sec.heading}
                </h2>
                <p className="text-gray-600 text-[17px] leading-relaxed">{sec.text}</p>
              </div>
            ))}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#162f5d] tracking-tight mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#ecbb3f] rounded-full shrink-0" /> Süreç nasıl ilerler?
              </h2>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {b.process.map((p, i) => (
                  <li key={p.title} className="rounded-2xl bg-[#f8fafc] border border-gray-100 p-6">
                    <span className="text-[#ecbb3f] font-black text-sm tracking-widest">ADIM 0{i + 1}</span>
                    <h3 className="text-lg font-black text-[#162f5d] mt-1 mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{p.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-[#ecbb3f]/40 bg-[#ecbb3f]/5 p-6 text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-[#162f5d]">Bilgilendirme:</strong> Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır. Tedaviye uygunluk ve sonuçlar kişiden kişiye değişir; kesin bilgi için hekim muayenesi gereklidir.
            </div>
          </article>

          <aside className="lg:sticky lg:top-[100px] self-start space-y-6">
            <div className="rounded-3xl bg-[#162f5d] p-7 text-white shadow-2xl">
              <h3 className="text-xl font-black mb-2">{s.title} için ön görüşme</h3>
              <p className="text-gray-300 text-[14px] leading-relaxed mb-6">Hasta danışmanımız sizi arayarak uygun hekim ve saati planlasın.</p>
              <a href="#randevu" className="flex items-center justify-center gap-2 bg-[#ecbb3f] hover:bg-[#d6a529] text-[#162f5d] font-black text-[13px] tracking-widest uppercase h-[52px] rounded-lg transition-colors mb-3">
                Randevu Talebi <ArrowRight size={16} />
              </a>
              <a href="tel:4440320" className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold h-[52px] rounded-lg transition-colors">
                <Phone size={16} className="text-[#ecbb3f]" /> 444 0 320
              </a>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-7">
              <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase mb-4">{b.shortName} · Diğer hizmetler</p>
              <ul className="divide-y divide-gray-100">
                {related.map((x) => (
                  <li key={x.slug}>
                    <Link href={{ pathname: "/demo/[brans]/[hizmet]", params: { brans: b.slug, hizmet: x.slug } }} className="group flex items-center justify-between py-3 text-[15px] font-bold text-[#162f5d] hover:text-[#ecbb3f] transition-colors">
                      {x.title} <ArrowRight size={15} className="text-gray-300 group-hover:text-[#ecbb3f]" />
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

      <BranchAppointmentForm defaultBranch={b.id} source={`${b.name} › ${s.title} Sayfası`} />
      <OtherBranches current={b.id} />
      <DemoFooter />
    </main>
  );
}
