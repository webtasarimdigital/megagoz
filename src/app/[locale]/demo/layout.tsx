import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";

// Demo sayfaları arama motorlarına kapalı
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "en"
        ? "MegaGöz Medical Centre | Eye, Medical Aesthetics, Hair Transplant & Dental (Demo)"
        : "MegaGöz Tıp Merkezi | Göz, Medikal Estetik, Saç Ekimi ve Diş (Demo)",
    robots: { index: false, follow: false },
  };
}

export default async function DemoLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      {children}
      <Link
        href="/demo/yapi"
        className="fixed bottom-5 left-5 z-[90] hidden md:flex items-center gap-2 bg-[#162f5d]/95 backdrop-blur text-white text-[12px] font-bold tracking-wider pl-3 pr-4 h-[38px] rounded-full shadow-xl border border-white/10 hover:border-[#ecbb3f] transition-colors"
      >
        <span className="px-2 py-0.5 rounded-full bg-[#ecbb3f] text-[#162f5d] text-[10px] font-black">DEMO</span>
        {locale === "en" ? "Site map & URL plan" : "Sayfa ağacı & URL planı"}
      </Link>
    </>
  );
}
