import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, User, Linkedin, Instagram, GraduationCap, Building, FileText, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";

const getDoctorBySlug = (slug: string, locale: string) => {
  const doctors = [
    {
      id: "osman-dursun",
      slug: "osman-dursun",
      name: "Op. Dr. Osman Dursun",
      title: locale === "en" ? "CHIEF PHYSICIAN / OPHTHALMOLOGIST" : "BAŞHEKİM / GÖZ HASTALIKLARI UZMANI",
      image: "", // Placeholder or actual image
      about: "", // User requested no description for now
      specialties: locale === "en" ? ["Cataract (Smart Lens)", "Excimer Laser"] : ["Katarakt (Akıllı Lens)", "Excimer Lazer"],
      education: locale === "en" ? [
        "Istanbul University Medical Faculty",
        "Istanbul Beyoğlu Eye Training and Research Hospital"
      ] : [
        "İstanbul Üniversitesi Tıp Fakültesi",
        "İstanbul Beyoğlu Göz Eğitim ve Araştırma Hastanesi"
      ],
      experience: locale === "en" ? [
        "Megagöz Medical Center (Present)",
        "Various State and Private Hospitals (20+ Years)"
      ] : [
        "Megagöz Tıp Merkezi (Günümüz)",
        "Çeşitli Devlet ve Özel Hastaneler (20+ Yıl)"
      ],
      social: {
        linkedin: "#",
        instagram: "#"
      }
    }
  ];
  return doctors.find(doc => doc.slug === slug);
};

export default function DoctorDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;
  const t = useTranslations("Navigation");
  const doctor = getDoctorBySlug(resolvedParams.slug, locale);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Detail Hero Section */}
      <div className="relative w-full bg-[#162f5d] pt-32 pb-24 shrink-0">
        <div className="absolute inset-0 bg-[#0a111a]/50 z-0" />
        {/* Subtle pattern or gradient */}
        
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10 flex flex-col lg:flex-row items-center lg:items-end gap-12">
          
          {/* Back button and Info */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <Link href="/doktorlar" className="inline-flex items-center gap-2 text-[#ecbb3f] hover:text-white font-bold text-xs tracking-wider uppercase mb-8 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                 <ArrowLeft size={16} />
              </div>
              {locale === "en" ? "Back to Our Doctors" : "Doktorlarımıza Dön"}
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
              {doctor.name}
            </h1>
            
            <div className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm md:text-base mb-6">
              {doctor.title}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {doctor.specialties.map((spec, idx) => (
                <span key={idx} className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Picture Box */}
          <div className="order-1 lg:order-2 w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden border-8 border-white/10 shadow-2xl relative flex items-center justify-center flex-shrink-0">
            {doctor.image ? (
              <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
            ) : (
              <User size={120} className="text-gray-300" />
            )}
          </div>
          
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] py-16 lg:py-24 relative z-20">
         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column (Main Article) */}
            <div className="lg:w-2/3 space-y-12">
               
               {/* About (Hidden if empty) */}
               {doctor.about && (
                 <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#ecbb3f]/10 flex items-center justify-center text-[#ecbb3f]">
                        <FileText size={24} />
                      </div>
                      <h2 className="text-3xl font-black text-[#162f5d]">{locale === "en" ? "About" : "Hakkında"}</h2>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                       {doctor.about}
                    </p>
                 </div>
               )}

               {/* Education */}
               <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#ecbb3f]/10 flex items-center justify-center text-[#ecbb3f]">
                      <GraduationCap size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-[#162f5d]">{locale === "en" ? "Education Background" : "Eğitim Bilgileri"}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                     {doctor.education.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-4">
                         <CheckCircle2 size={24} className="text-[#ecbb3f] mt-1 flex-shrink-0" />
                         <span className="text-gray-600 text-lg font-medium">{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Experience */}
               <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#ecbb3f]/10 flex items-center justify-center text-[#ecbb3f]">
                      <Building size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-[#162f5d]">{locale === "en" ? "Professional Experience" : "Mesleki Deneyim"}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                     {doctor.experience.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-4">
                         <div className="w-2 h-2 mt-2.5 rounded-full bg-[#ecbb3f] flex-shrink-0" />
                         <span className="text-gray-600 text-lg font-medium">{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:w-1/3">
               <div className="sticky top-32 space-y-8">
                  
                  {/* Action/Appointment Widget */}
                  <div className="bg-[#162f5d] rounded-3xl p-8 shadow-xl text-white">
                     <h3 className="text-2xl font-black mb-4">{locale === 'en' ? 'Book an Appointment' : 'Randevu Alın'}</h3>
                     <p className="text-gray-300 font-medium mb-8">
                        {locale === 'en' 
                          ? 'Contact us immediately to be examined by our specialist doctor and step into a healthy vision.' 
                          : 'Uzman hekimimize muayene olmak ve sağlıklı bir görüşe adım atmak için hemen iletişime geçin.'}
                     </p>
                     
                     <Link href="/iletisim" className="w-full bg-[#ecbb3f] text-[#162f5d] font-bold px-6 py-4 rounded-xl flex items-center justify-center uppercase tracking-wider text-sm hover:bg-white hover:text-[#162f5d] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        {locale === 'en' ? 'Quick Appointment' : 'HIZLI RANDEVU AL'}
                     </Link>
                  </div>

                  {/* Social Widget */}
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col items-center">
                     <h4 className="font-bold text-gray-500 mb-6 uppercase tracking-widest text-xs text-center">
                       {locale === "en" ? "SOCIAL MEDIA" : "SOSYAL MEDYA"}
                     </h4>
                     <div className="flex items-center gap-4">
                        <a href={doctor.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F1F5F9] text-[#162f5d] flex items-center justify-center hover:bg-[#ecbb3f] hover:text-white transition-colors">
                           <Linkedin size={24} />
                        </a>
                        <a href={doctor.social.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F1F5F9] text-[#162f5d] flex items-center justify-center hover:bg-[#ecbb3f] hover:text-white transition-colors">
                           <Instagram size={24} />
                        </a>
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </div>
      
      <Footer />
    </main>
  );
}
