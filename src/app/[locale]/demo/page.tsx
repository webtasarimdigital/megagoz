import DemoHeader from "@/components/demo/DemoHeader";
import DemoFooter from "@/components/demo/DemoFooter";
import BranchAppointmentForm from "@/components/demo/BranchAppointmentForm";
import FaqList from "@/components/demo/FaqList";
import BranchHeroSlider from "@/components/demo/BranchHeroSlider";
import { CorporateHero, BrandStory, SharedStandards, BranchExplorer, CallBand } from "@/components/demo/CorporateHome";
import { dt } from "@/components/demo/demoText";

export default async function DemoCorporateHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const T = dt(locale);
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DemoHeader />
      <BranchHeroSlider />
      <CorporateHero />
      <BrandStory />
      <BranchExplorer />
      <SharedStandards />
      <BranchAppointmentForm source="Kurum Ana Sayfası Randevu Formu" title={T.corporateFormTitle} text={T.corporateFormText} />
      <CallBand />
      <FaqList items={T.corporateFaq} title={T.corporateFaqTitle} text={T.corporateFaqText} />
      <DemoFooter />
    </main>
  );
}
