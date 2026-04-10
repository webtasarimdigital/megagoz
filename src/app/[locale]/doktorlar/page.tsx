import { useTranslations } from "next-intl";
import { User, Award, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DoctorsPage() {
  const t = useTranslations("Navigation");

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        <Image 
          src="/images/slide4.png" 
          alt="Doctors Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              UZMAN KADROMUZ
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            Deneyimli Doktorlarımız
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            Göz sağlığınızı, on binlerce başarılı vakaya imza atmış uzman hekimlerimize emanet edin.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
           {/* Doctor Card */}
           <Link href={{ pathname: '/doktorlar/[slug]', params: { slug: 'osman-dursun' } }} className="block bg-white rounded-[40px] overflow-hidden shadow-lg border border-gray-100 group transition-transform hover:-translate-y-2">
              {/* Image Area */}
              <div className="h-[350px] md:h-[400px] w-full bg-[#E5E7EB] relative flex items-center justify-center rounded-t-[40px]">
                 {/* Placeholder for doctor image */}
                 <User size={120} className="text-gray-400" />
                 
                 {/* Social Icons - overlapping on bottom left */}
                 <div className="absolute -bottom-[20px] left-8 flex gap-3 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#ecbb3f] text-[#162f5d] flex items-center justify-center shadow-md hover:bg-[#162f5d] hover:text-[#ecbb3f] transition-colors">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#ecbb3f] text-[#162f5d] flex items-center justify-center shadow-md hover:bg-[#162f5d] hover:text-[#ecbb3f] transition-colors">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                 </div>
              </div>
              
              {/* Doctor Details */}
              <div className="p-8 pt-10 bg-white relative">
                 <h3 className="text-2xl font-black text-[#162f5d] mb-1">Op. Dr. Osman Dursun</h3>
                 <div className="text-sm font-bold text-[#8FA4B5] tracking-widest uppercase mb-5">GÖZ HASTALIKLARI UZMANI</div>
                 
                 {/* Specialties Badges/Pills */}
                 <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-full bg-[#F1F5F9] text-[#556987] text-xs font-bold whitespace-nowrap">KATARAKT (AKILLI LENS)</span>
                    <span className="px-4 py-2 rounded-full bg-[#F1F5F9] text-[#556987] text-xs font-bold whitespace-nowrap">EXCIMER LAZER</span>
                 </div>
              </div>
           </Link>

        </div>
      </div>
      <Footer />
    </main>
  );
}
