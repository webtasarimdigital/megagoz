import DemoHeader from "@/components/demo/DemoHeader";
import DemoFooter from "@/components/demo/DemoFooter";
import BranchAppointmentForm from "@/components/demo/BranchAppointmentForm";
import FaqList from "@/components/demo/FaqList";
import BranchHeroSlider from "@/components/demo/BranchHeroSlider";
import { CorporateHero, BrandStory, SharedStandards, BranchExplorer, CallBand } from "@/components/demo/CorporateHome";

const CORPORATE_FAQ = [
  { q: "Farklı branşlarda aynı gün muayene olabilir miyim?", a: "Evet. Hasta danışmanınız, uygun olduğunda farklı branşlardaki randevularınızı aynı güne planlayabilir." },
  { q: "MegaGöz yalnızca göz merkezi mi?", a: "MegaGöz göz sağlığı merkezi olarak kuruldu; bugün medikal estetik, saç ekimi ve ağız-diş sağlığı branşlarıyla birlikte tek kurum çatısı altında hizmet veriyor." },
  { q: "Anlaşmalı kurumlar tüm branşlarda geçerli mi?", a: "Anlaşma kapsamı kuruma ve tedaviye göre değişir. Hasta danışmanlarımız branş bazında bilgi verir." },
  { q: "Randevuyu nasıl alırım?", a: "444 0 320'yi arayabilir, WhatsApp'tan yazabilir ya da formda ilgilendiğiniz branşı seçerek talep bırakabilirsiniz." },
  { q: "Tüm branşlar aynı adreste mi?", a: "Evet. Tüm branşlarımız Ümraniye'deki MegaGöz Tıp Merkezi'nde, aynı çatı altında hizmet verir." },
  { q: "Ön görüşme ücretli mi?", a: "Ön görüşme ve bilgilendirme ücretsizdir. Muayene ve tetkik ücretleri branşa göre hasta danışmanlarımız tarafından önceden bildirilir." },
];

export default function DemoCorporateHome() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DemoHeader />
      <BranchHeroSlider />
      <CorporateHero />
      <BrandStory />
      <BranchExplorer />
      <SharedStandards />
      <BranchAppointmentForm
        source="Kurum Ana Sayfası Randevu Formu"
        title={["HANGİ BRANŞ OLURSA", "TEK RANDEVU HATTI"]}
        text="İlgilendiğiniz branşı seçin, bilgilerinizi bırakın; ilgili bölümün hasta danışmanı sizi arayarak hekim ve randevu planlamasını yapsın."
      />
      <CallBand />
      <FaqList
        items={CORPORATE_FAQ}
        title={["Merak", "edilenler"]}
        text="Dört branşlı yapımız, randevu süreci ve anlaşmalı kurumlar hakkında en çok sorulan soruları yanıtladık."
      />
      <DemoFooter />
    </main>
  );
}
