"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { UserPlus, Medal, Cpu, Globe2, HeartHandshake } from "lucide-react";
import { useLocale } from "next-intl";

const TABS = [
  {
    id: 0,
    title: "Uzman Hekimler",
    titleEn: "Expert Doctors",
    icon: <UserPlus size={28} />,
    image: "/images/slide2.webp",
    heading: "Uzman Hekimler",
    headingEn: "Expert Doctors",
    desc: "Yurt içinde ve yurt dışında başarılara imza atmış, on binlerce cerrahi vaka tecrübesi bulunan uzman hekim kadromuzla nitelikli göz sağlığı hizmetini sizlerle buluşturuyoruz.",
    descEn: "We bring you high-quality eye health services with our expert medical staff who have achieved domestic and international success and have experience in tens of thousands of surgical cases."
  },
  {
    id: 1,
    title: "Deneyimli Personel",
    titleEn: "Experienced Staff",
    icon: <Medal size={28} />,
    image: "/images/megagoz.webp",
    heading: "Deneyimli Personel",
    headingEn: "Experienced Staff",
    desc: "Klinik süreçlerinizin ilk anından taburcu olduğunuz saniyeye kadar, her aşamada size güler yüzle ve profesyonellikle eşlik eden tecrübeli, alanında eğitimli sağlık personelimiz yanınızda.",
    descEn: "From the very first moment of your clinical journey until you are discharged, our experienced and trained healthcare staff are by your side with a smile and professionalism at every step."
  },
  {
    id: 2,
    title: "Teknolojik Altyapı",
    titleEn: "Technological Infra",
    icon: <Cpu size={28} />,
    image: "/images/slide4.webp",
    heading: "Teknolojik Altyapı",
    headingEn: "Technological Infrastructure",
    desc: "FDA onaylı, sektöre yön veren markaların en yeni jenerasyon excimer lazer cihazları ve 3 boyutlu topografi sistemleri sayesinde sıfır hata payı ile kusursuz cerrahi deneyimi sunuyoruz.",
    descEn: "Thanks to FDA-approved, industry-leading new generation excimer laser devices and 3D topography systems, we offer a flawless surgical experience with zero margin of error."
  },
  {
    id: 3,
    title: "Uluslararası Hizmet",
    titleEn: "International Srv",
    icon: <Globe2 size={28} />,
    image: "/images/slide1.webp",
    heading: "Uluslararası Hizmet",
    headingEn: "International Services",
    desc: "Dünyanın dört bir yanından gelen hastalarımıza, VIP transferden konaklamaya ve ana dillerinde tercümanlık desteğine kadar uzanan ayrıcalıklı ve tam teşekküllü global sağlık turizmi sunuyoruz.",
    descEn: "We offer global healthcare tourism to patients from all over the world, ranging from VIP transfers and accommodation to native-language interpretation support."
  },
  {
    id: 4,
    title: "Kaliteli Hizmet",
    titleEn: "Quality Service",
    icon: <HeartHandshake size={28} />,
    image: "/images/slide3.webp",
    heading: "Birebir İlgi ve Kalite",
    headingEn: "Personalized Care",
    desc: "Ticari kaygılardan uzak, tamamen hasta iyileşmesine ve konforuna odaklanmış, etik değerlere sıkı sıkıya bağlı butik yapımızla kendinizi özel hissedeceğiniz şeffaf süreçler kurguluyoruz.",
    descEn: "Free from commercial concerns, fully focused on patient recovery and comfort, and strictly committed to ethical values, we build transparent processes where you will feel special."
  }
];

export default function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const locale = useLocale();

  return (
    <section className="w-full bg-[#F8FAFC]">
       {/* Top Header & Tabs Background Wrapper */}
       <div className="bg-[#162f5d] pt-20 pb-28 md:pb-36 relative z-0">
          <div className="absolute inset-0 bg-[url('/images/slide4.webp')] bg-cover bg-center opacity-5 mix-blend-overlay" />
          
          <div className="container mx-auto px-4 relative z-10 text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
               {locale === 'en' ? (
                 <>Why <span className="text-[#ecbb3f]">Megagöz?</span></>
               ) : (
                 <>Neden <span className="text-[#ecbb3f]">Megagöz?</span></>
               )}
             </h2>
          </div>

          {/* Desktop & Mobile Tab Strip */}
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1200px]">
             <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory rounded-xl bg-white/5 border border-white/10 md:grid md:grid-cols-5 md:overflow-visible divide-x divide-white/10">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`snap-center flex-shrink-0 w-40 md:w-auto flex flex-col items-center justify-center gap-3 py-6 md:py-8 transition-all duration-300 relative group outline-none ${activeTab === tab.id ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                     {/* Tab Indicator line */}
                     {activeTab === tab.id && (
                       <motion.div layoutId="activeTab" className="absolute top-0 left-0 right-0 h-1 bg-[#ecbb3f]" />
                     )}
                     
                     <div className={`${activeTab === tab.id ? "text-[#ecbb3f]" : "text-white/70 group-hover:text-white"} transition-colors`}>
                       {tab.icon}
                     </div>
                     <span className={`text-xs md:text-sm font-bold tracking-wider text-center px-2 ${activeTab === tab.id ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                       {locale === 'en' ? tab.titleEn : tab.title}
                     </span>
                  </button>
                ))}
             </div>
          </div>
       </div>

       {/* Bottom Content Area */}
       <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1100px] -mt-16 md:-mt-24 mb-24">
          <div className="bg-white rounded-2xl shadow-2xl shadow-[#162f5d]/10 overflow-hidden border border-gray-100 p-6 md:p-12 min-h-[400px]">
             
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                >
                   {/* Left Image */}
                   <div className="w-full md:w-[45%] h-[250px] md:h-[350px] relative rounded-xl overflow-hidden shrink-0 shadow-lg">
                      <Image 
                        src={TABS[activeTab].image}
                        alt={locale === 'en' ? TABS[activeTab].headingEn : TABS[activeTab].heading}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[#162f5d]/10 mix-blend-multiply" />
                   </div>

                   {/* Right Content */}
                   <div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-black text-[#162f5d] mb-6 tracking-tight">
                        {locale === 'en' ? TABS[activeTab].headingEn : TABS[activeTab].heading}
                      </h3>
                      <p className="text-gray-500 font-medium text-lg leading-relaxed">
                        {locale === 'en' ? TABS[activeTab].descEn : TABS[activeTab].desc}
                      </p>
                   </div>
                </motion.div>
             </AnimatePresence>

          </div>
       </div>

       {/* Hide scrollbar styles for mobile tabs */}
       <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
             display: none;
          }
          .hide-scrollbar {
             -ms-overflow-style: none;
             scrollbar-width: none;
          }
       `}} />
    </section>
  );
}
