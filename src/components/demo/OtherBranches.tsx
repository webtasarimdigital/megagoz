import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { getBranches, type BranchId } from "@/data/branches";
import { dt } from "./demoText";
import BranchIcon from "./BranchIcon";

/** Branş sayfalarının sonunda: aynı kurum çatısı altındaki diğer branşlar */
export default function OtherBranches({ current }: { current: BranchId }) {
  const locale = useLocale();
  const T = dt(locale);
  const others = getBranches(locale).filter((b) => b.id !== current);
  return (
    <section className="relative bg-[#0a111a] py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#162f5d]/40 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1300px] relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-[#ecbb3f]" />
              <span className="text-[#ecbb3f] font-black tracking-widest uppercase text-sm">{T.sameRoof}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {T.otherBranches[0]} <span className="text-[#ecbb3f]">{T.otherBranches[1]}</span>
            </h2>
          </div>
          <Link href="/demo" className="text-white/70 hover:text-[#ecbb3f] font-bold text-sm tracking-widest uppercase transition-colors">
            {T.allBranches}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((b) => (
            <Link
              key={b.id}
              href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
              className="group relative h-[300px] md:h-[360px] rounded-[24px] overflow-hidden flex flex-col justify-end border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,187,63,0.15)]"
            >
              <img src={b.image} alt={b.imageAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/60 to-transparent" />
              <div className="relative p-7 flex items-end justify-between gap-4">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center mb-4" style={{ color: b.accent }}>
                    <BranchIcon icon={b.icon} size={20} />
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#ecbb3f] transition-colors">{b.name}</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{b.tagline}</p>
                </div>
                <span className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] group-hover:text-[#0a111a] transition-all">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
