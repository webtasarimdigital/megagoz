import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";

// Demo sayfaları arama motorlarına kapalı
export const metadata: Metadata = {
  title: "MegaGöz Tıp Merkezi | Göz, Medikal Estetik, Saç Ekimi ve Diş (Demo)",
  robots: { index: false, follow: false },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Link
        href="/demo/yapi"
        className="fixed bottom-5 left-5 z-[90] hidden md:flex items-center gap-2 bg-[#162f5d]/95 backdrop-blur text-white text-[12px] font-bold tracking-wider pl-3 pr-4 h-[38px] rounded-full shadow-xl border border-white/10 hover:border-[#ecbb3f] transition-colors"
      >
        <span className="px-2 py-0.5 rounded-full bg-[#ecbb3f] text-[#162f5d] text-[10px] font-black">DEMO</span>
        Sayfa ağacı & URL planı
      </Link>
    </>
  );
}
