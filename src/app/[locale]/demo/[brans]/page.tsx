import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBranch } from "@/data/branches";
import DemoHeader from "@/components/demo/DemoHeader";
import DemoFooter from "@/components/demo/DemoFooter";
import BranchBar from "@/components/demo/BranchBar";
import BranchAppointmentForm from "@/components/demo/BranchAppointmentForm";
import OtherBranches from "@/components/demo/OtherBranches";
import FaqList from "@/components/demo/FaqList";
import { dt } from "@/components/demo/demoText";
import BranchSliderHero from "@/components/demo/BranchSliderHero";
import { BranchIntro, BranchServices, BranchProcess, BranchHighlights } from "@/components/demo/BranchHome";

// Dört branş (Göz dahil) aynı şablonu kullanır: aynı site, farklı hizmet.
// Göz tedavi kartları mevcut /tedaviler/... adreslerine gider (URL'ler korunur).

// Not: Bu rota bilerek generateStaticParams KULLANMAZ. Sitenin diğer
// sayfaları gibi istek anında render edilir; statik üretimde next-intl
// dili istekten okuyamadığı için canlıda 500 hatası oluşuyordu.

export async function generateMetadata({ params }: { params: Promise<{ locale: string; brans: string }> }): Promise<Metadata> {
  const { locale, brans } = await params;
  const b = getBranch(brans, locale);
  if (!b) return {};
  return {
    title: b.id === "goz" ? (locale === "en" ? "Megagöz | Eye Health Centre, Ümraniye - Istanbul" : "Megagöz | Göz Sağlığı Merkezi, Ümraniye - İstanbul") : `${b.name} | ${dt(locale).centreName}, Ümraniye - İstanbul`,
    description: b.heroText,
  };
}

export default async function BranchPage({ params }: { params: Promise<{ locale: string; brans: string }> }) {
  const { locale, brans } = await params;
  const T = dt(locale);
  const b = getBranch(brans, locale);
  if (!b) notFound();

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DemoHeader activeBranch={b.id} />
      <BranchBar branchId={b.id} />
      <BranchSliderHero branch={b} />
      <BranchIntro branch={b} />
      <BranchServices branch={b} />
      <BranchProcess branch={b} />
      <BranchHighlights branch={b} />
      <BranchAppointmentForm defaultBranch={b.id} source={`${getBranch(brans, "tr")!.name} Branşı Randevu Formu`} />
      <FaqList
        items={b.faqs}
        eyebrow={`${b.shortName} · ${T.faqShort}`}
        title={T.faqTitle}
        text={T.branchFaqText(b.name)}
      />
      <OtherBranches current={b.id} />
      <DemoFooter />
    </main>
  );
}
