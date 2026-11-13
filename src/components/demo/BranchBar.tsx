import { Link } from "@/i18n/navigation";
import { ChevronRight, Home } from "lucide-react";
import { BRANCHES, type BranchId } from "@/data/branches";

/**
 * Branş sayfalarının en üstündeki ince bar:
 * solda breadcrumb (kurum › branş › hizmet), sağda diğer branşlara tek tık geçiş.
 */
export default function BranchBar({ branchId, trail }: { branchId: BranchId; trail?: string }) {
  const current = BRANCHES.find((b) => b.id === branchId)!;
  return (
    <div className="w-full bg-[#f4f6fa] border-b border-gray-200/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[52px] flex items-center justify-between gap-4">
        <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-500 min-w-0">
          <Link href="/demo" className="flex items-center gap-1.5 hover:text-[#162f5d] transition-colors shrink-0">
            <Home size={14} /> <span className="hidden sm:inline">MegaGöz</span>
          </Link>
          <ChevronRight size={14} className="text-gray-300 shrink-0" />
          {trail ? (
            <>
              <Link href={{ pathname: "/demo/[brans]", params: { brans: current.slug } }} className="hover:text-[#162f5d] transition-colors shrink-0">
                {current.shortName}
              </Link>
              <ChevronRight size={14} className="text-gray-300 shrink-0" />
              <span className="text-[#162f5d] font-bold truncate">{trail}</span>
            </>
          ) : (
            <span className="text-[#162f5d] font-bold truncate">{current.name}</span>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-black tracking-[0.18em] text-gray-400 uppercase mr-1">Branşlar</span>
          {BRANCHES.map((b) => {
            const on = b.id === branchId;
            return (
              <Link
                key={b.id}
                href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }}
                className={`flex items-center gap-1.5 h-[30px] px-3 rounded-full text-[12px] font-bold transition-all border ${
                  on ? "bg-[#162f5d] text-white border-[#162f5d]" : "bg-white text-[#162f5d] border-gray-200 hover:border-[#ecbb3f]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: b.accent }} />
                {b.shortName}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
